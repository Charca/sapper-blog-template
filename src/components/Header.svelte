<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    display: flex;
    padding: 1em 2em;
  }
</style>

<header>
  <Logo />
  <Nav {segment} />
</header>
