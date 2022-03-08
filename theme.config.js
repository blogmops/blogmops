import sapperSource, { markdownSource } from 'sapper-sources';

export default {
  source: sapperSource({
    plugin: markdownSource,
    options: {
      postsPerPage: 4, // Used in svelte template
      contentPath: '/contents/'
    },
  }),
};
