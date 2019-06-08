---
title: Hello World
---

Welcome to my **Sapper Blog** with `markdown` posts.

## It uses `highlight.js` for code blocks

```js
import * as sapper from '@sapper/app';

sapper.start({
  target: document.querySelector('#sapper')
});

// Scary function
function scare(who) {
  console.log(who, 'your blood is mine');
}
```

## And it has frontmatter support via `grey-matter`

```
---
title: My page title
---
```
