<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item {
    margin-bottom: 60px;
  }

  .post-item-footer {
    display: flex;
  }

  .post-item-footer a {
    color: #fd6378;
    text-decoration: none;
  }

  .post-item-footer a:hover {
    text-decoration: underline;
  }

  .post-item-date {
    color: #AAA;
    flex: 1;
    text-align: right;
    text-transform: uppercase;
    margin-right: 16px;
  }
</style>

<svelte:head>
  <title>Blog</title>
  <base href="http://localhost:3000/blog/">
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  {#each posts as post}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p>You know what? It is beets. I've crashed into a beet truck. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Jaguar shark! So tell me - does it really exist?</p>
      <div class="post-item-footer">
        <a rel='prefetch' href='blog/{post.slug}'>READ MORE</a>
        <span class="post-item-date">{post.printDate}</span>
        <!-- <span>Life</span> -->
      </div>
    </div>
  {/each}
</div>
