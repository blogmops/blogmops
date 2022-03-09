<script>
  export let posts;
  export let limit = -1;

  $: postsToDisplay = posts ? posts.slice(0, limit) : [];
</script>

<style>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  .post {
    cursor: pointer;
    text-decoration: none;
  }
  h2 {
    margin: 0;
    padding: 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  .description {
    padding: 0.5rem;
    opacity: 0.4;
  }
  .teaser-image {
    max-height: 20rem;
  }
  @media (max-width: 767px) {
    .posts {
      grid-template-columns: 1fr;
    }
    .post:nth-child(4n + 1),
    .post:nth-child(4n + 2),
    .post:nth-child(4n + 3),
    .post:nth-child(4n + 4) {
      grid-column: span 1;
    }
  }
</style>

<div class="posts">
  {#each postsToDisplay as post}
    <a class="post" href="/blog/{post.slug}">
      {#if post.frontmatter.preview}
        <img class="teaser-image"
          src={post.frontmatter.preview}
          alt="{post.frontmatter.title}" />
      {/if}
      <h2>{post.frontmatter.title}</h2>
      <div class="description">{post.frontmatter.excerpt}</div>
    </a>
  {/each}
</div>
