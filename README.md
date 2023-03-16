# Astro Starter Kit: Docs Site

```bash
npm create astro@latest -- --template docs
```


> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!



## 🧞 命令

所有命令都是从项目的根，从终端运行的:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Customize This Theme

### Site metadata

`src/config.ts`包含几个数据对象，描述关于站点的元数据，如标题、描述、默认语言和Open Graph详细信息。您可以自定义这些来匹配您的项目。

### CSS样式

主题的外观由几个关键变量控制，您可以自定义这些变量。你可以在“src/styles/theme.css”CSS文件中找到它们。

如果你以前从未使用过CSS变量，可以快速阅读一下[MDN的CSS变量指南](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)。

这个主题默认使用“冷蓝色”强调色。要为你的项目定制这个，将'——theme-accent '变量更改为你想要的任何颜色:

```diff
/* src/styles/theme.css */
:root {
  color-scheme: light;
-  --theme-accent: hsla(var(--color-blue), 1);
+  --theme-accent: hsla(var(--color-red), 1);   /* or: hsla(#FF0000, 1); */
```

## 页面元数据

Astro使用Markdown页面中的正面内容来选择布局并将属性传递给这些布局。如果你使用默认布局，你可以用许多不同的方式定制页面来优化SEO和其他事情。例如，您可以使用' title '和' description '属性来设置文档标题、元标题、元描述和Open Graph描述。

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../../layouts/MainLayout.astro
---

# 页面内容...
```

要了解更多SEO相关属性，请查看' src/components/HeadSEO.astro '

### 侧边栏导航

侧栏导航是由' src/config '中的' sidebar '变量控制的。ts文件。您可以通过修改此对象自定义侧边栏。已经为您创建了默认的启动器导航。

```ts
export const SIDEBAR = {
  en: [
    { text: "Section Header", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Page 2", link: "en/page-2" },
    { text: "Page 3", link: "en/page-3" },

    { text: "Another Section", header: true },
    { text: "Page 4", link: "en/page-4" },
  ],
};
```


注意顶层的“en”键:这是多语言支持所需要的。您可以将其更改为您喜欢的任何语言，或添加新的语言。下文将详细介绍这一点。

### 支持多种语言

Astro文档模板支持开箱即用的多种语言。默认主题只显示“en”文档，但您可以通过向项目添加第二种语言来启用多语言支持功能。

要在你的项目中添加一门新语言，你需要扩展当前的src/content/docs/[lang]/…的布局:

```diff
 📂 src/content/docs
 ┣ 📂 en
 ┃ ┣ 📜 page-1.md
 ┃ ┣ 📜 page-2.md
 ┃ ┣ 📜 page-3.astro
+ ┣ 📂 es
+ ┃ ┣ 📜 page-1.md
+ ┃ ┣ 📜 page-2.md
+ ┃ ┣ 📜 page-3.astro
```


你还需要将新的语言名称添加到src/config中的KNOWN_LANGUAGES映射中。ts文件。这将在站点标题中启用新的语言切换器。

```diff
// src/config.ts
export const KNOWN_LANGUAGES = {
  English: 'en',
+  Spanish: 'es',
};
```


最后一步:您需要在侧栏中添加一个新条目，以创建该语言的目录。虽然复制每个页面可能听起来对每个人来说都不理想，但这个额外的控件允许您为每种语言创建完全自定义的内容。

> 确保侧栏的“链接”值指向正确的语言!

```diff
// src/config.ts
export const SIDEBAR = {
  en: [
    { text: 'Section Header', header: true, },
    { text: 'Introduction', link: 'en/introduction' },
    // ...
  ],
+  es: [
+    { text: 'Encabezado de sección', header: true, },
+    { text: 'Introducción', link: 'es/introduction' },
+    // ...
+  ],
};

// ...
```

如果你打算使用西班牙语作为默认语言，你只需要修改' src/pages/index.astro '中的重定向路径:

```diff
<script>
- window.location.pathname = `/en/introduction`;
+ window.location.pathname = `/es/introduction`;
</script>
```


