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
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    text-align: center;
  }

  @media (min-width: 1024px) {
    figure {
      margin: 0 1em;
    }
  }

  figcaption {
    font-size: 0.8em;
    font-style: italic;
  }

  .profile-image {
    max-height: 210px;
    max-width: 210px;
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 0 35px 0;
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    .profile-image {
      max-height: 380px;
      max-width: 380px;
      margin-left: 30px;
    }
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
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
  <title>blogmops - a blog for a pug</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Welcome to blogmops</h1>

    <p>
      Check out my
      <a href="/blog">blog</a>
      posts.
    </p>
  </div>

  <figure>
    <div class="profile-image">
      <img
        alt="blogmops selfie"
        srcset="images/blogmops.webp 375w, images/blogmops.webp 768w,
        images/blogmops.webp 1024w" />
    </div>

    <figcaption>
      That's me: the
      <a href="/">blogmops</a>
    </figcaption>
  </figure>
</div>
