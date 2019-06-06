<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    max-width: 1200px;
    background-color: white;
    padding: 1em 2em;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
  }

  footer {
    padding: 1em 2em;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <p>&copy; {new Date().getFullYear()} Your Blog. Made with 🍻 by <a href="https://www.twitter.com/Charca" target="_blank">Maxi Ferreira</a>.</p>
  </footer>
</div>
