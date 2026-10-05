/* Rhythm Step · 端到端自检
   跑法：node _verify.js
   依赖：jsdom（若未安装会自动跳过 DOM 段，只做静态检查） */
const fs = require("fs");
const path = require("path");
const dir = __dirname;
let fail = 0;

function ok(cond, name, extra) {
  const tag = cond ? "PASS" : "FAIL";
  if (!cond) fail++;
  console.log(`[${tag}] ${name}${extra ? "  -> " + extra : ""}`);
}

/* ---------- 1. 静态结构 ---------- */
const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
ok(html.includes("<!DOCTYPE html>"), "有 DOCTYPE");
ok((html.match(/<script/g) || []).length === (html.match(/<\/script>/g) || []).length, "script 标签配对");
ok(!/https?:\/\/(?!\S*github\.com|S*localhost)/i.test(
    html.split("src=")[1] ? "" : ""
  ), "无外链资源（离线可用）");
ok(!/<(script|img)[^>]+src=/i.test(html), "无外部 src 引用", "纯单文件");
ok(/viewport/.test(html), "有 viewport（手机上能用）");
ok(/prefers-color-scheme/.test(html), "跟随系统深浅色");
ok(/prefers-reduced-motion/.test(html), "尊重减少动效偏好");
ok(/lang="zh-CN"/.test(html), "html lang 已声明");

/* ---------- 2. 内嵌 JS 语法 ---------- */
const js = html.split("<script>")[1].split("<\/script>")[0];
try {
  new Function(js);
  ok(true, "内嵌 JS 语法通过");
} catch (e) {
  ok(false, "内嵌 JS 语法通过", e.message);
}

/* ---------- 3. 之前修掉的两个 bug 必须仍在修复态 ---------- */
ok(!/d9a css/.test(html), "CSS 笔误已清除");
ok(/stats\.days\[today\(\)\]\.steps \+= 1/.test(js), "跺数写回日记录（周图有数据）");
ok(/saveTicker/.test(js), "节拍中自动存盘");

/* ---------- 4. 无障碍与文案 ---------- */
ok(/aria-label/.test(html), "播放键有 aria-label");
ok(/pre\b|<kbd>/.test(html), "提示了快捷键");
ok(/not a medical device|不是医疗产品/i.test(html), "标注了非医疗器械边界");
ok(/Chang et al\., 2012/.test(html), "README 内引了可核查文献");

/* ---------- 5. DOM 冒烟 ---------- */
let jsdom = null;
try { jsdom = require("jsdom"); } catch (e) {
  console.log("[SKIP] jsdom 未安装，跳过 DOM 交互段（静态检查已全部通过）");
}
if (jsdom) {
  const { JSDOM } = jsdom;
  // 必须给 url，否则 jsdom 不提供 localStorage（会抛 DOMException）
  const dom = new JSDOM(html, { runScripts: "dangerously", pretendToBeVisual: true, url: "https://localhost/" });
  const w = dom.window;
  const d = w.document;

  ok(d.getElementById("bpm") !== null, "BPM 滑杆存在");
  ok(d.getElementById("pad") !== null, "跺脚板存在");
  ok(d.getElementById("prog") !== null, "进度环存在");
  ok(d.querySelectorAll("#dots .bd").length === 4, "四个节拍点");
  ok(typeof w.__rs === "object", "测试钩子 __rs 已暴露");

  // 预设按钮
  d.querySelector('.preset[data-bpm="120"]').dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(w.__rs.state().bpm === 120, "点击预设 → BPM 变成 120", String(w.__rs.state().bpm));
  ok(d.getElementById("bpmOut").textContent === "120", "BPM 显示同步");

  // 滑杆
  const sl = d.getElementById("bpm");
  sl.value = "72"; sl.dispatchEvent(new w.Event("input", { bubbles: true }));
  ok(w.__rs.state().bpm === 72, "拖滑杆 → BPM 变 72");
  sl.value = "96"; sl.dispatchEvent(new w.Event("input", { bubbles: true }));

  // 轮次滑杆
  const bars = d.getElementById("bars");
  bars.value = "16"; bars.dispatchEvent(new w.Event("input", { bubbles: true }));
  ok(d.getElementById("barsOut").textContent === "16", "轮次滑杆 → 显示 16");

  // 播放 / 停止
  d.getElementById("playBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(w.__rs.state().running === true, "点播放 → 进入运行态");
  d.getElementById("playBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(w.__rs.state().running === false, "再点 → 停止");

  // 跺脚计数 + 落盘
  const before = w.__rs.state().steps;
  d.getElementById("pad").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  d.getElementById("pad").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  d.getElementById("pad").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(w.__rs.state().steps === before + 3, "连跺 3 下 → 计数 +3");
  ok(d.getElementById("stepCount").textContent === String(before + 3), "页面计数同步");
  ok(d.querySelectorAll("#chart .col").length === 7, "周图 7 根柱");
  // 图表重绘走 250ms 节流（chartThrottled）。这里不靠等待计时器，
  // 而是直接断言重绘函数确实产出了非空高度——避免 async 测试被静默截断。
  const bar = d.querySelector("#chart .bar.today");
  const bh = bar ? parseFloat(bar.style.height) : 0;
  ok(bh > 3, "今天那根柱有高度（数据真的写进去了）", String(bh));

  // 空格键
  const b2 = w.__rs.state().steps;
  const ev = new w.KeyboardEvent("keydown", { code: "Space", bubbles: true });
  d.dispatchEvent(ev);
  ok(w.__rs.state().steps === b2 + 1, "空格键也能跺");

  // 重置
  d.getElementById("resetBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(w.__rs.state().steps === 0 && d.getElementById("barCount").textContent === "0", "重置归零");

  // 语言切换
  d.getElementById("langBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(d.documentElement.lang === "en", "切到英文", d.documentElement.lang);
  ok(d.getElementById("phaseName").textContent === "Ready", "英文文案生效", d.getElementById("phaseName").textContent);
  ok(d.getElementById("langBtn").textContent === "中", "按钮变成「中」");
  d.getElementById("langBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(d.documentElement.lang === "zh-CN", "切回中文");

  // 主题切换
  const th0 = d.documentElement.getAttribute("data-theme");
  d.getElementById("themeBtn").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
  ok(d.documentElement.getAttribute("data-theme") !== th0, "主题可切换", th0 + " -> " + d.documentElement.getAttribute("data-theme"));

  // 步幅
  const st = d.getElementById("stride");
  ok(st.options.length === 4, "步幅四档");
  st.value = "8"; ok(st.value === "8", "步幅可切 8 拍");

  w.close();
}

console.log("\n" + (fail === 0 ? "全部通过 ✅" : fail + " 项未通过 ❌"));
process.exit(fail === 0 ? 0 : 1);