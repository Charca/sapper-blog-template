<style>
  div {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    div {
      flex-direction: row;
    }
  }

  .profile-image {
    max-height: 58px;
    max-width: 58px;
    width: 100%;
    overflow: hidden;
    display: block;
    border-radius: 50%;
    margin-right: 20px;
  }

  p {
    font-size: 1.125rem;
  }
</style>

<div>
  <div class="profile-image">
    <img alt="blogmops selfie"
      srcset="images/blogmops.webp 375w, images/blogmops.webp 768w, images/blogmops.webp 1024w">
  </div>

  <p>
    Hi, I'm the <strong>blogmops</strong>. I'm a cute pug from germany.
    You can follow me on <a href="https://www.instagram.com/living.with.oskar.the.pug/" target="_blank" rel="nofollow">Instagram</a>,
    see some of my work on <a href="https://github.com/jsbase/blogmops" target="_blank" rel="nofollow">GitHub</a>.
  </p>
</div>
