# 物理学习指南

这是一个基于 VitePress 的开放物理学习资料站点，面向长期维护和多人协作。

默认部署地址为 `https://aoitoribu.github.io/betterFuPh/`，仓库地址为 `https://github.com/aoitoribu/betterFuPh`。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

构建前会自动扫描 `docs/courses/`、`docs/past-exams/`、`docs/lecture-notes/` 等目录，生成索引、下载链接、侧边栏、站点地图和 RSS。

## GitHub Pages

仓库推送到 GitHub 后，在 Settings -> Pages 中选择 GitHub Actions。此后推送到 `main` 分支会自动构建并部署。

## 贡献

优先提交 Markdown 文件。PDF 也可以提交，自动索引脚本会把它们列为下载资源。
