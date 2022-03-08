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
  @mixin image {
    height: 25rem;
    border-radius: 5px;
    margin: 15px 0;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
    -webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);
    transition: 250ms ease-in all;
  }
  .hero-section {
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
  :global(img),
  :global(.image) {
    @include image;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }
</style>

<svelte:head>
  <title>Stunning Theme</title>
</svelte:head>

<div class="hero-section">
  <h1>Welcome on my blog</h1>
  <p>Explore all my adentures</p>
</div>

<Posts {posts} limit={postsPerPage} />

<Breadcrumb isFirst={true} isLast={postsPerPage > posts.length} page="1" />
