![Website](https://img.shields.io/website?down_color=%23e60a33&down_message=offline&label=blogmops&up_color=%2315c11a&up_message=online&url=https%3A%2F%2Fimg.shields.io%2Fwebsite%2Fhttp%2Fblogmops.vercel.app.svg)
![cypress](https://github.com/jsbase/blogmops/workflows/cypress/badge.svg?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/jsbase/blogmops/badge)](https://www.codefactor.io/repository/github/jsbase/blogmops)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jsbase/blogmops?label=size)

---

# 🧾 blogmops wiki

Simple markdown (*.md) powered blog posts with [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte).

### 🧷 [Hompage](https://blogmops.vercel.app/)

## ✨ Getting started

To run cypress locally follow the [setup instructions](https://cypress.io)!
Then open terminal run:

```shell
$ › npx degit jsbase/blogmops blog
$ › cd blog && touch .env
$ › echo "PORT=3000" >> .env
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
