<style>
  .container {
    display: flex;
    margin-top: 2em;
  }

  .copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
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
    .container {
      flex-direction: column;
    }

    .copy {
      text-align: center;
      padding-bottom: 2em;
    }
  }
</style>

<svelte:head>
  <title>Sapper Blog Template</title>
</svelte:head>

<div class="container">
  <div class="copy">
    <h1>Welcome to your new Sapper Blog</h1>
    <h2>Check out the docs on GitHub to get started.</h2>
  </div>

  <figure>
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
  </figure>
</div>
