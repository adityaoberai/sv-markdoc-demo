# SvelteKit Markdoc Blog Demo

A blog that uses Static Site Generation on SvelteKit and Markdoc to render blogs from Markdown

## Setup

Run the following commands in your terminal:

```bash
git clone https://github.com/adityaoberai/sv-markdoc-demo.git
cd sv-markdoc-demo
npm install
npm run dev
```

## Add new blog

To add a new blog, go to the directory `./src/routes/blog`, create a new directory (the name of this directory will act as your endpoint), and add a `+page.markdoc` file with content in the following style:

```html
---
title: Title of the blog
description: Description of the blog
author: Aditya Oberai
date: 2024-12-16
timeToRead: 3
layout: blog
---

<Add blog content in Markdown here>
```
 _Note: Do not edit the `layout: blog` field. ALso, the date is in `yyyy-mm-dd` format._
