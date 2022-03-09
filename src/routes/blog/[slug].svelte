<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { default as readingTimeCalculator } from 'reading-time';
  export let post;

  $: readingTimeData = readingTimeCalculator(post.contentHtml);
  $: readingTime = `${Math.ceil(readingTimeData.minutes)} minute${
    Math.ceil(readingTimeData.minutes) > 1 ? '(s)' : ''
  } read`;
</script>

<style lang="scss">
@media (max-width: 767px) {
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}
h1 {
  text-align: center;
}
.post-meta {
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 2px;
  text-align: center;
}
</style>

<svelte:head>
  <title>{post.frontmatter.title}</title>
</svelte:head>

<div class="container">
  <h1>{post.frontmatter.title}</h1>

  <p class="post-meta">{new Date(post.frontmatter.date).toDateString()} ﹒ {readingTime}</p>

  <img src={post.frontmatter.preview} class="image" alt={post.frontmatter.title} />

  <div class="content">{@html post.contentHtml}</div>
</div>
