<script>
  import Image from "svelte-image";
</script>

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
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: .8em;
    font-style: italic;
  }

  .profile-image {
    height: 300px;
    width: 300px;
    overflow: hidden;
    display: inline-block;
    border-radius: 50%;
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

    <p>Check out my <a href="/blog">blog</a> posts.</p>
  </div>

  <figure>
    <div class="profile-image">
      <Image
        src="images/blogmops.webp"
        alt="blogmops selfie" />
      <!--<img alt="blogmops selfie" sizes="(max-width: 1000px) 100vw, 1000px" srcset="images/400-blogmops.jpg 375w, images/800-blogmops.jpg 768w, images/1200-blogmops.jpg 1024w">-->
    </div>

    <figcaption>
      That's me; the <a href="/">blogmops</a>
    </figcaption>
  </figure>
</div>
