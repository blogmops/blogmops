![Website](https://img.shields.io/website?down_color=%23e60a33&down_message=offline&up_color=%2315c11a&up_message=online&url=https%3A%2F%2Fimg.shields.io%2Fwebsite%2Fhttp%2Fblogmops.vercel.app.svg)
[![GitHub issues](https://img.shields.io/github/issues/blogmops/blogmops)](https://github.com/blogmops/blogmops)
[![build](https://github.com/blogmops/blogmops/workflows/build/badge.svg)](https://blogmops.vercel.app)
![GitHub last commit](https://img.shields.io/github/last-commit/blogmops/blogmops)
[![Known Vulnerabilities](https://snyk.io/test/github/blogmops/blogmops/badge.svg)](https://snyk.io/test/github/blogmops/blogmops)

[![Codiga](https://api.codiga.io/project/32057/score/svg)](https://app.codiga.io/public/project/32057/blogmops/dashboard)
[![CodeFactor](https://www.codefactor.io/repository/github/blogmops/blogmops/badge)](https://www.codefactor.io/repository/github/blogmops/blogmops)
[![codebeat badge](https://codebeat.co/badges/d8789c01-630d-43c5-bafd-a8fab4f939de)](https://codebeat.co/projects/github-com-blogmops-blogmops-main)

![Version](https://img.shields.io/github/package-json/v/blogmops/blogmops/master?color=violet&label=stable)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/blogmops/blogmops?label=size&color=violet)

---

# 🧾 blogmops wiki

Simple markdown (*.md) powered blog posts with [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte).

### 🧷 [Hompage](https://blogmops.vercel.app/)

## ✨ Getting started

To run cypress locally follow the [setup instructions](https://cypress.io)!
Then open terminal run:

### Installation
```shell
$ › git clone https://github.com/blogmops/blogmops
$ › cd blogmops
$ › yarn install
```

### Development
```shell
$ › yarn run dev
```

### Preview
```shell
$ › yarn run build
$ › yarn run start
```

### Production
```shell
$ › yarn run export
$ › npx serve __sapper__/export
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.
Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## 🏗 Structure

The base structure of this template is the same as Sapper's [default template](https://github.com/sveltejs/sapper-template/). These are some of the new things you'll find here:

### src/routes/blog

This is the home of your blog. The most important file in here is `[slug].svelte`, which this is template of your blog post page.

### contents/

This is where your markdown posts live in. All `.md` files in this directory are treated as blog posts and will be parsed automatically.

- The markdown file name becomes the post slug. For example `mypost.md` becomes `http://localhost:3000/blog/mypost`.
- Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt".
- Frontmatter properties supported are `title` and `date`.


## 🚀 Deploy

Fork and import this repo on [vercel.com](https://www.vercel.com/).

## 🐛 Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).
