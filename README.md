<div align="center">

# 跺节拍 · Rhythm Step

**一跺一词。**

*One idea per four beats.*

[English](#english-readme) · [贡献](#贡献) · [许可](#许可)

[![MIT](https://img.shields.io/badge/license-MIT-teal?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Good First Issue](https://img.shields.io/badge/good--first--issues-7059ff?style=flat-square)](.github/ISSUE_TEMPLATE/good-first-issue.md)
[![no deps](https://img.shields.io/badge/dependencies-none-blue?style=flat-square)](index.html)
[![offline](https://img.shields.io/badge/works%20offline-yes-2ea44f?style=flat-square)](index.html)

**打开就能用 · 单文件 · 零依赖 · 不联网 · 不注册**

</div>

---

## 这是什么

背书背不进去，多半不是因为不努力，是因为大脑一次只装得下**四个左右的组块**，而你在靠意志力硬撑边界。

**跺节拍**让你用身体替大脑划边界：跟着节拍落脚，**每四拍认领一个知识点**。

```bash
# 克隆，或者直接下载 index.html
git clone https://github.com/scalple616/rhythm-step.git
open rhythm-step/index.html     # 就这一步，没有 build，没有 npm install
```

<p align="center">
  <em>没有任何依赖。任何浏览器双击即可用，飞行模式也能用。</em>
</p>

---

## 为什么是「四拍」

这不是玄学数字。

Schmidt-Kassow 等人的实验把**单词呈现对齐到踏步节奏**——被试每走四步，屏幕（或耳机）给一个词。结果：自由回忆显著优于静坐组，也优于"运动了但节奏没对齐"的组。

身体的周期替大脑划出了编码的分界线。这就是这个项目的全部假设。

| 你做的事 | 发生的事 |
|---|---|
| 静坐背书 | 边界靠意志力，模糊，容易串味 |
| 边运动边背书 | 双任务成本，记忆反而更差 |
| **按节拍跺脚 + 背书** | 运动周期给每个知识点打上时间戳 |

第三行的效果在实验室里还不算大、还有争议（见下方[边界](#边界与诚实的部分)）。但它**零额外成本**、不占地方、不需要器械，而且**你真的愿意每天坐下来**——这一条比任何认知增益都值钱。

---

## 功能

- **节拍器** — 五档预设（60 静心 / 80 预习 / 96 背记 / 120 复述 / 144 冲刺）+ Tap 测速
- **步幅可调** — 2 拍 / 4 拍（默认，研究支持）/ 8 拍 / 整小节
- **踩点准确率** — 实时统计你落在拍子上的比例，帮你找到自己的自然节奏
- **一轮结束自动提示复述** — 这一步才是间隔重复真正生效的地方
- **每周记录** — 总跺数、活跃天数、连续天数、总时长；7 天柱状图
- **导出 JSON** — 数据只存在你自己的浏览器里，随时带走
- **深浅色主题** + **中英双语** 切换
- **完全离线** — 无外链、无追踪、无账号、无 cookie

---

## 三步用法

**1 · 材料摊开。** 一张纸，一条知识点一行。不要合上书。

**2 · 跟着拍子落脚，不追拍。** 宁可慢半拍，不可抢半拍。呼吸放在每小节开头：吸——一、二、三、四；呼——一、二、三、四。

**3 · 一轮结束，合上材料，凭记忆复述。** 说不出来的那几行，就是下一轮要重来一次的。

最后这步是最容易被跳过的，也是唯一真正产生记忆强度的地方。诚实地失败，然后只补失败的部分。

---

## 适用与不适用

**适合**

- 背词、术语、公式、药理机制、条文
- 大段材料的**第一遍**浏览（配 60-80 BPM 的慢档）
- 已经会了、要做**提取练习**的时候（配 120 BPM 快档）

**不适合**

- 需要精细运算的推导——跺脚会分心
- 已经疲劳到需要休息的时候——硬撑只会产出假熟悉感
- 任何把它当"治疗方案"用的场合

**先问医生**：关节不适、眩晕、有心血管病史、术后恢复期。

---

## 边界与诚实的部分

这个仓库是工具，不是医疗产品。几点如实说明：

1. **急性运动对认知的即时增益，效应量并不大。** Chang et al. (2012) 的 meta 分析和 Ludyga et al. (2016) 都发现存在提升，但更多体现在**加工速度**上，而不是准确率；中等强度、20 分钟左右是最优区间。
2. **"节律同步提升记忆"目前是待验证假设，不是定论。** Schmid (2025) 的作者自己在论文里提醒：效果可能来自"有节奏"或"可预测"本身，而不一定来自"同步"。这句话值得抄进每个想引用本文的人脑子里。
3. 所以**这个项目真正稳的收益**是两件事：给复习一个物理的切块理由，以及一个让人愿意每天坐下来的理由。认知增益请当作可能的额外收获，而不是购买理由。

我们把它做成公开仓库，很大程度上就是为了让更多人来做这个验证。**如果你测了，请把结果发到 [Discussions](https://github.com/scalple616/rhythm-step/discussions)。**

---

## 证据从哪来

| 出处 | 说了什么 |
|---|---|
| McIntosh, Brown, Rice & Thaut (1995), *JNNP* | 节律听觉刺激能把人的步频锁定到外部节拍——给一个稳定时钟，人会去合它 |
| Schmidt-Kassow et al. (2010, 2013, 2014) | 词语呈现对齐踏步节奏，线索回忆优于静坐与无节奏对照 |
| Scott, Schmid & Tomporowski (2024), *Psychology of Sport and Exercise* | 同步呈现提升自由回忆与步态稳定性；24 小时后仍可见 |
| Schmid (2025), *Acta Psychologica* | 认知-运动节律同步提升长时情景记忆保持（步行与骑行皆然） |
| Chang et al. (2012), *Psychological Bulletin* | 急性运动对执行功能的小幅即时提升 |
| Ludyga et al. (2016) | 中等强度急性有氧运动与执行功能的 meta 分析 |
| Schmidt-Kassow & Kaiser (2023) / Tomporowski & Qazi (2020) | 认知-运动干扰与节律同步综述 |

---

## 成长

[![Star History](https://api.star-history.com/svg?repos=scalple616/rhythm-step&type=Date)](https://star-history.com/#scalple616/rhythm-step&Date)

如果它对你有用，考虑给它一颗星——**star 是这个项目唯一的燃料**，也是让更多人看到「节律同步值得一测」的唯一途径。

---

## 对 AI 编程助手

`SKILL.md` 是一份可被 AI 直接加载的说明书。它会把一份材料切成节律方案：估重 → 定 BPM → 定步幅 → 出轮次 → 排 1/3/7/16 天间隔。

把这个文件喂给你的助手（Claude、ChatGPT、Gemini、Cursor……），然后说：

> 读一下 SKILL.md，帮我把这 8 页病理学笔记排成跺节拍方案。

---

## 路线图

- [ ] 更多语言（西/法/日）
- [ ] Web Audio 换成可选的采样音色（木鱼、鼓）
- [ ] 导出为可打印的节拍卡片
- [ ] 一个公开数据集，记录谁的方案有效
- [ ] 一个"你自己测了有没有用"的简易对照实验页

欢迎认领，详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 贡献

```bash
git clone https://github.com/scalple616/rhythm-step.git
cd rhythm-step
# 改 index.html（就这一个文件）
node _verify.js     # 必须全部通过才能提 PR
```

规矩很短：

1. **不引入任何依赖。** 这个项目最大的价值就是"打开就能用"。
2. **不碰真实用户数据。** 它只存在 localStorage 里，我们碰不到，也不想碰。
3. **别把功效说大。** 见[边界](#边界与诚实的部分)，措辞改动请保持诚实。
4. **跑 `node _verify.js`。** 有 Good First Issue 等着你。

---

## 许可

[MIT](LICENSE) — 拿去用、改、教学生、收费用，随你。

---

<a name="english-readme"></a>

# Rhythm Step

**One idea per four beats.**

*A metronome, a stomp counter, and a study plan — in a single HTML file.*

Read the [中文版](#这是what) above, or jump straight in:

```bash
git clone https://github.com/scalple616/rhythm-step.git
open rhythm-step/index.html
```

## What it does

Working memory holds about **four chunks at a time**. When you study sitting still, you are relying on willpower to hold those boundaries. Rhythm Step uses your body to draw them instead: step on the beat, and **claim one knowledge point every four beats**.

## Why four

Not mysticism — a number with experimental backing.

In a series of experiments, Schmidt-Kassow and colleagues aligned word presentation to step cadence: one word every fourth stride. Participants recalled significantly more than both seated controls and exercise-without-rhythm controls.

The claim is that your movement cycle stamps a timestamp on each item to encode.

## Features

- **Metronome** with five tempo presets + tap tempo
- **Adjustable stride** — 2 / 4 / 8 beats per point (4 is the research-backed default)
- **On-beat accuracy** so you can find your natural cadence
- **Round-complete recall prompt** — the step that actually makes spaced repetition work
- **Weekly stats** with JSON export; data never leaves your browser
- **Dark/light themes**, **Chinese/English**, **fully offline**

## Three-step method

1. **Lay the material out.** One point per line. Don't close the book.
2. **Step on the beat — don't chase it.** Late is fine, rushing isn't. Breathe at the top of each bar.
3. **Close it and recite from memory.** Whatever you can't say is what you repeat.

Step 3 is the one people skip, and it's the only one that builds memory strength.

## Honest limits

- Acute effects of exercise on cognition are **small**, and show up more in **processing speed** than accuracy (Chang et al., 2012; Ludyga et al., 2016).
- Entrainment-improved memory is a **hypothesis, not an established result**. The 2025 authors themselves note the effect may come from rhythm or predictability alone rather than synchrony.
- The solid, durable benefit here is **a physical excuse to chunk your revision** and **a reason to sit down daily**. Treat any cognitive gain as a bonus, not the reason.

This is a tool, not a medical device. Joint pain, dizziness, cardiovascular history, or post-op recovery: ask your doctor first.

## For AI coding assistants

`SKILL.md` is a loadable instruction set that turns study material into a rhythmic session plan: weight → tempo → stride → rounds → 1/3/7/16-day spacing.

## Star history

[![Star History](https://api.star-history.com/svg?repos=scalple616/rhythm-step&type=Date)](https://star-history.com/#scalple616/rhythm-step&Date)

If this was useful, consider a star — **stars are the only fuel this project has**, and the only way more people find out that entrainment is worth testing.

## Contributing

No dependencies. No telemetry. Run `node _verify.js` before opening a PR.

## License

[MIT](LICENSE)