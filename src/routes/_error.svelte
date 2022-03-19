<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.25em 0;
  }

  p {
    margin-top: 1em;
    font-style: italic;
    opacity: 0.5;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container">
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
