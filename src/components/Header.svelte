<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    padding: 1.5em 2em;
  }
</style>

<header>
  <Logo />
  <Nav {segment} />
</header>
