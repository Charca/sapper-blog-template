<script>
  import Image from "svelte-image";
</script>

<style>
  div {
    align-items: center;
    display: flex;
  }

  .profile-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-right: 20px;
  }

  p {
    font-size: 1.125rem;
  }
</style>

<div>
  <div class="profile-image">
    <div class="profile-image">
      <Image
        src="images/blogmops.webp"
        alt="blogmops selfie" />
    </div>
    <!--<img alt="blogmops selfie" sizes="(max-width: 1000px) 100vw, 1000px" srcset="images/400-blogmops.jpg 375w, images/800-blogmops.jpg 768w, images/1200-blogmops.jpg 1024w">-->
  </div>

  <p>
    Hi, I'm the <strong>blogmops</strong>. I'm a cute pug from germany.
    You can follow me on <a href="https://www.instagram.com/living.with.oskar.the.pug/" target="_blank" rel="nofollow">Instagram</a>,
    see some of my work on <a href="https://github.com/jsbase/blogmops" target="_blank" rel="nofollow">GitHub</a>.
  </p>
</div>
