# Blog

Live at https://abeltesfaye.si/blog (GitHub Pages, built with Astro).

## Write a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL, so `my-post.md` is published at `/blog/my-post/`.

```markdown
---
title: "My post"
description: "One line shown in the post list and in link previews."
pubDate: 2026-10-26
tags: ["notes"]
draft: false
---

Write here.
```

Commit and push to `main`. GitHub Actions builds and publishes the site in about a minute. Set `draft: true` to keep a post off the live site.

You can also add or edit posts directly on github.com.

## Preview locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321/blog/.
