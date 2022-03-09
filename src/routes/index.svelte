<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`index.json`);
    const response = await res.json();

    return response;
  }
</script>

<script>
  import Posts from '../components/Posts.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';

  export let posts;
  export let postsPerPage;
</script>

<style lang="scss">
:global(.container) {
  max-width: 800px;
  margin: 0 auto;
}
:global(pre) {
  background-color: #f9f9f9;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
  padding: 0.5em;
  border-radius: 2px;
  overflow-x: auto;
}
:global(code) {
  background-color: transparent;
  padding: 0;
}
:global(ul) {
  line-height: 1.5;
}
:global(li) {
  margin: 0 0 0.5em 0;
}
:global(img),
:global(.image) {
  @include image;
}
section {
  padding: 3rem 2rem;
  font-size: 2rem;
  max-width: 50%;
  text-align: right;
}
h1 {
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.5rem;
}
@media (max-width: 767px) {
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}
</style>

<svelte:head>
  <title>🐶 blogmops</title>
</svelte:head>

<section>
  <h1>🐶 Hi, I'm Oskar the pug!</h1>
  <h2 class="h4">Welcome to my blog</h2>
  
  <Posts {posts} limit={postsPerPage} />
  
  <Breadcrumb isFirst={true} isLast={postsPerPage > posts.length} page="1" />
</section>
