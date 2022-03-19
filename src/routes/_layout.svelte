<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<style lang="scss">
  main {
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    width: 100%;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
