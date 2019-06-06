<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-size: 4em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h2 {
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Sapper Blog Template</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Welcome to your new Sapper Blog</h1>
    <h2>Check out the docs on <a href="https://www.github.com/Charca/sapper-blog-template" target="_blank">GitHub</a> to get started.</h2>
  </div>

  <figure>
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
  </figure>
</div>
