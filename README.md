![Website](https://img.shields.io/website?down_color=%23e60a33&down_message=offline&up_color=%2315c11a&up_message=online&url=https%3A%2F%2Fimg.shields.io%2Fwebsite%2Fhttp%2Fblogmops.vercel.app.svg)
![Version](https://img.shields.io/github/package-json/v/jsbase/blogmops/master?color=violet&label=stable)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jsbase/blogmops?label=size)
[![GitHub issues](https://img.shields.io/github/issues/jsbase/blogmops)](https://github.com/jsbase/blogmops/issues)

![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/jsbase/blogmops)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/jsbase/blogmops/Test%20action%20runner/master?label=cypress)
[![CodeFactor](https://www.codefactor.io/repository/github/jsbase/blogmops/badge)](https://www.codefactor.io/repository/github/jsbase/blogmops)
![Code quality score](https://www.code-inspector.com/project/10870/score/svg)
![Code Grade](https://www.code-inspector.com/project/10870/status/svg)
[![codebeat badge](https://codebeat.co/badges/befa1955-92b8-4d1b-b35a-a25a4edc806f)](https://codebeat.co/projects/github-com-jsbase-blogmops-master)

![Rollup Version](https://img.shields.io/github/package-json/dependency-version/jsbase/blogmops/dev/rollup)
![Sapper Version](https://img.shields.io/github/package-json/dependency-version/jsbase/blogmops/dev/sapper)
![Svelte Version](https://img.shields.io/github/package-json/dependency-version/jsbase/blogmops/dev/svelte)
![Babel/Code Version](https://img.shields.io/github/package-json/dependency-version/jsbase/blogmops/dev/@babel/core)
![Cypress Version](https://img.shields.io/github/package-json/dependency-version/jsbase/blogmops/dev/cypress)

---

# 🧾 blogmops wiki

Simple markdown (*.md) powered blog posts with [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte).

### 🧷 [Hompage](https://blogmops.vercel.app/)

## ✨ Getting started

To run cypress locally follow the [setup instructions](https://cypress.io)!
Then open terminal run:

```shell
$ › npx degit jsbase/blogmops blog
$ › cd blog
$ › npm i && npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.
Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## 🏗 Structure

The base structure of this template is the same as Sapper's [default template](https://github.com/sveltejs/sapper-template/). These are some of the new things you'll find here:

### src/routes/blog

This is the home of your blog. The most important files in here are:

- `_posts.js`: this module contains the logic for loading and parsing your markdown posts.
- `[slug].svelte`: this is the template of your blog post page.
- `index.svelte`: this is the template of your article list page.

### src/routes/blog/posts

This is where your markdown posts live in. All `.md` files in this directory are treated as blog posts and parsed automatically by the `_posts.js` module.

- The markdown file name becomes the post slug. For example `hello-world.md` becomes `http://localhost:3000/blog/hello-world`.
- Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt".
- Frontmatter properties supported are `title` and `date`.


## 🚀 Deploy

Fork and import this repo on [vercel.com](https://www.vercel.com/).

## 🐛 Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).
