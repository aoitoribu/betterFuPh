---
title: 贡献指南
---

# 贡献指南

欢迎提交课程笔记、教程、历年真题、答案解析、实验资料和科研工具说明。本项目希望长期维护，因此更看重清晰、可读、可继续修改的内容。

## 推荐贡献方式

请优先提交 Markdown 文件。Markdown 页面可以直接通过 GitHub Pages 阅读，加载更快，也更容易被搜索、引用和修改。

如果不熟悉 Git，可以先使用 [Markdown 编辑助手](/contribution/editor) 在浏览器里写作。左侧编辑 Markdown，右侧会按本站文档样式实时预览；默认左右比例是 4:6，也可以拖动中间分隔条调整。

提交时推荐使用 GitHub 网页端：在编辑助手里填写目标路径，点击“在 GitHub 新建文件”，GitHub 会引导贡献者 fork 仓库并发起 Pull Request。这样通常只会提交一个 Markdown 文件，维护者审阅也最轻。

备用方式是下载 Markdown 后通过邮件或 Issue 发给维护者，但这种方式需要维护者代为整理文件路径、提交记录和作者说明，更适合临时补充资料。

PDF 仍然接受，适合以下情况：

- 原始试卷扫描件
- 教师发布的正式讲义
- 暂时无法转换的复杂排版文件

但 PDF 通常只能下载阅读，部分大陆网络环境下下载体验不如网页稳定。因此，如果你有能力整理成 Markdown，请优先提交 Markdown，并把 PDF 作为补充附件。

## 文件放在哪里

- 课程内容放在 `docs/courses/课程名/`。
- 历年真题放在 `docs/past-exams/课程名/`。
- 课堂讲义放在 `docs/lecture-notes/`。
- 科研工具教程放在 `docs/research-tools/`。

## 命名建议

文件名请使用小写英文、数字和连字符，便于跨平台协作。

```text
2025-final.md
2025-final.pdf
2025-final-solution.pdf
lagrangian.md
python-computing.md
```

## 真题页面如何自动生成下载入口

如果 Markdown 与 PDF 放在同一目录，并且文件名前缀一致，网站会自动在页面底部显示下载按钮。

```text
docs/past-exams/mechanics/2025-final.md
docs/past-exams/mechanics/2025-final.pdf
docs/past-exams/mechanics/2025-final-solution.pdf
```

上面的 Markdown 页面会自动关联两份 PDF。贡献者不需要手写下载按钮。

## Markdown 写作建议

- 每个页面只写一个一级标题。
- 用二级标题组织主要内容。
- 公式使用 `$...$` 或 `$$...$$`。
- 代码块请标注语言。
- 图片放在相邻目录或 `docs/public/assets/` 中。
- 如果内容来自他人资料，请说明来源和授权情况。

## 评论和讨论

本站使用 Utterances 把页面评论保存到 GitHub Issues。这样评论数据仍然留在 GitHub，不需要额外数据库，也方便把纠错讨论转成 Issue 或 PR。

启用前需要在仓库设置里确认 Issues 已开启，并给仓库安装 [utterances app](https://github.com/apps/utterances)。评论会默认显示在普通文档页底部，配置为 `label: utterance`；如果某个页面不需要评论，在 frontmatter 里加 `comments: false` 即可。

## 提交 Pull Request 前

本地运行：

```bash
npm install
npm run docs:build
```

如果只是新增 Markdown 或 PDF，自动脚本会刷新索引、侧边栏和下载列表。

## 联系方式

如有问题，请邮件联系 [betterfudan@outlook.com](mailto:betterfudan@outlook.com)，或直接在 GitHub 上提交 Issue / Pull Request。
