---
name: Good First Issue
about: 第一次上手？这里有门槛低的活
title: "[GOOD FIRST ISSUE] "
labels: good first issue
assignees: ''
---

## 欢迎！先恭喜你找到这里。

这个仓库的规矩很少，改动范围也很小。你大概只需要动一个文件：`index.html`。

## 先认领哪类活？

打开 [Issues](https://github.com/scalple616/rhythm-step/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) 看当前开放的，
或者自己挑一件：

### A. 加一个音色（最容易，推荐新手）
现在节拍器用的是 Web Audio 合成的正弦波，有点单薄。加一个像样的音色——比如木鱼、闷鼓、边鼓。

**要求：必须用 Web Audio 合成，不能引入音频文件。** 这个仓库的规矩是「打开就能用」，一旦要下载音频文件，规矩就破了。

**提示**：可以看看 `index.html` 里的 `click()` 函数，它已经用 `createOscillator()` 发声了。换成 `createBufferSource()` 加一段衰减包络，或者给 `oscillator` 换 `type` 和更长的衰减包络，都是起点。

### B. 补一门语言
现在只有中文和英文。加西语、法语、日语都行。

**怎么加**：找到带 `data-zh` 和 `data-en` 属性的元素，补上你的语言属性，然后在 `applyLang()` 里加一个分支。

### C. 加无障碍属性
给进度环加上 `role="progressbar"`、`aria-valuenow`、`aria-valuemin`、`aria-valuemax`，让屏幕阅读器能读出「已完成 3 / 8 小节」。

### D. 打印样式
README 里提到过「导出为可打印的节拍卡片」的路线图。`@media print` 的骨架已经在了，缺的是排版。

## 规矩（很短）

1. **不引入任何依赖。** 没有构建工具，没有 CDN，没有 npm 包。
2. **跑 `node _verify.js`，必须全绿。** 40 项断言，涵盖了结构和交互。
3. **别把功效说大。** 见 README 的「边界与诚实的部分」。我们不夸大运动对认知的作用，这条不放松。

## 卡住了？

开一个 issue 描述你的思路，我们一起看。这个项目没有维护者压力，PR 也欢迎半成品 + Discussion 讨论的做法。

## 不确定从哪开始？

去 [Discussions](https://github.com/scalple616/rhythm-step/discussions) 喊一声。
