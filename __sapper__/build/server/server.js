'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var sapperSource = require('sapper-sources');
var sapperSource__default = _interopDefault(sapperSource);
var readingTimeCalculator = _interopDefault(require('reading-time'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

var config = {
  source: sapperSource__default({
    plugin: sapperSource.markdownSource,
    options: {
      postsPerPage: 2, // Used in svelte template
      contentPath: '/contents/'
    },
  }),
};

async function get(req, res, next) {
  const source = await config.source;
  const posts = source.contents;

  if (posts !== null) {
    const response = {
      postsPerPage: source.postsPerPage,
      posts,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}

var route_0 = /*#__PURE__*/Object.freeze({
  get: get
});

const formatter = (contents, postsPerPage) => ({
  getPosts: () => contents,
  getPostsByPage: page => ({
    posts: contents.slice(
      (page - 1) * postsPerPage,
      (page - 1) * postsPerPage + postsPerPage,
    ),
    isFirst: page === 1,
    isLast: contents.length < (page - 1) * postsPerPage + postsPerPage,
  }),
  getPost: slug => contents.find(post => post.slug === slug),
  postCount: contents.length,
});

async function get$1(req, res, next) {
  const { slug } = req.params;

  const source = await config.source;
  const post = formatter(source.contents, source.postsPerPage).getPost(slug);

  if (post) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(post));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      }),
    );
  }
}

var route_1 = /*#__PURE__*/Object.freeze({
  get: get$1
});

async function get$2(req, res, next) {
  const { page } = req.params;

  const source = await config.source;
  const response = formatter(
    source.contents,
    source.postsPerPage,
  ).getPostsByPage(page, config.postsPerPage);

  if (response !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}

var route_2 = /*#__PURE__*/Object.freeze({
  get: get$2
});

function noop() {}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

function run_all(fns) {
	fns.forEach(run);
}

function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;

function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error(`Function called outside component initialization`);
	return current_component;
}

function afterUpdate(fn) {
	get_current_component().$$.after_render.push(fn);
}

function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

const missing_component = {
	$$render: () => ''
};

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

let on_destroy;

function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots) {
		const parent_component = current_component;

		const $$ = {
			on_destroy,
			context: new Map(parent_component ? parent_component.$$.context : []),

			// these will be immediately discarded
			on_mount: [],
			before_render: [],
			after_render: [],
			callbacks: blank_object()
		};

		set_current_component({ $$ });

		const html = fn(result, props, bindings, slots);

		set_current_component(parent_component);
		return html;
	}

	return {
		render: (props = {}, options = {}) => {
			on_destroy = [];

			const result = { head: '', css: new Set() };
			const html = $$render(result, props, {}, options);

			run_all(on_destroy);

			return {
				html,
				css: {
					code: Array.from(result.css).map(css => css.code).join('\n'),
					map: null // TODO
				},
				head: result.head
			};
		},

		$$render
	};
}

/* src\components\Posts.svelte generated by Svelte v3.0.1 */

const css = {
	code: ".posts.svelte-p87h3e{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem}.post.svelte-p87h3e{cursor:pointer;text-decoration:none}.post.svelte-p87h3e .image.svelte-p87h3e{height:12rem;border-radius:5px;margin:15px 0;object-fit:cover;width:100%;border-radius:10px;box-shadow:0 4px 20px rgba(150, 150, 150, 0.25);-webkit-box-shadow:0 4px 20px rgba(150, 150, 150, 0.25);transition:250ms ease-in all}.post.svelte-p87h3e h2.svelte-p87h3e{margin:0;padding:0 0.5rem;font-size:1.25rem;font-weight:600}.post.svelte-p87h3e .description.svelte-p87h3e{padding:0.5rem;opacity:0.4}.post.svelte-p87h3e:hover .image.svelte-p87h3e{box-shadow:0 4px 20px rgba(100, 100, 100, 0.25);-webkit-box-shadow:0 4px 20px rgba(100, 100, 100, 0.25);transform:translateY(-2px)}@media(max-width: 767px){.posts.svelte-p87h3e{grid-template-columns:1fr}.post.svelte-p87h3e:nth-child(4n+1),.post.svelte-p87h3e:nth-child(4n+2),.post.svelte-p87h3e:nth-child(4n+3),.post.svelte-p87h3e:nth-child(4n+4){grid-column:span 1}}",
	map: "{\"version\":3,\"file\":\"Posts.svelte\",\"sources\":[\"Posts.svelte\"],\"sourcesContent\":[\"<script>\\n  export let posts;\\n  export let limit = -1;\\n\\n  $: postsToDisplay = posts ? posts.slice(0, limit) : [];\\n</script>\\n\\n<style lang=\\\"scss\\\">.posts {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-gap: 2rem;\\n}\\n\\n.post {\\n  cursor: pointer;\\n  text-decoration: none;\\n}\\n.post .image {\\n  height: 12rem;\\n  border-radius: 5px;\\n  margin: 15px 0;\\n  object-fit: cover;\\n  width: 100%;\\n  border-radius: 10px;\\n  box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);\\n  -webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);\\n  transition: 250ms ease-in all;\\n}\\n.post h2 {\\n  margin: 0;\\n  padding: 0 0.5rem;\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n}\\n.post .description {\\n  padding: 0.5rem;\\n  opacity: 0.4;\\n}\\n.post:hover .image {\\n  box-shadow: 0 4px 20px rgba(100, 100, 100, 0.25);\\n  -webkit-box-shadow: 0 4px 20px rgba(100, 100, 100, 0.25);\\n  transform: translateY(-2px);\\n}\\n\\n@media (max-width: 767px) {\\n  .posts {\\n    grid-template-columns: 1fr;\\n  }\\n\\n  .post:nth-child(4n+1),\\n.post:nth-child(4n+2),\\n.post:nth-child(4n+3),\\n.post:nth-child(4n+4) {\\n    grid-column: span 1;\\n  }\\n}\\n\\n/*# sourceMappingURL=Posts.svelte.css.map */</style>\\n\\n<div class=\\\"posts\\\">\\n  {#each postsToDisplay as post}\\n    <a class=\\\"post\\\" href=\\\"/blog/{post.slug}\\\">\\n      {#if post.frontmatter.preview}\\n        <img src={post.frontmatter.preview} class=\\\"image\\\" alt=\\\"{post.frontmatter.title}\\\" />\\n      {/if}\\n      <h2>{post.frontmatter.title}</h2>\\n      <div class=\\\"description\\\">{post.frontmatter.excerpt}</div>\\n    </a>\\n  {/each}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAOmB,MAAM,cAAC,CAAC,AACzB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,IAAI,AAChB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAAI,AACvB,CAAC,AACD,mBAAK,CAAC,MAAM,cAAC,CAAC,AACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACxD,UAAU,CAAE,KAAK,CAAC,OAAO,CAAC,GAAG,AAC/B,CAAC,AACD,mBAAK,CAAC,EAAE,cAAC,CAAC,AACR,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CAAC,MAAM,CACjB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,mBAAK,CAAC,YAAY,cAAC,CAAC,AAClB,OAAO,CAAE,MAAM,CACf,OAAO,CAAE,GAAG,AACd,CAAC,AACD,mBAAK,MAAM,CAAC,MAAM,cAAC,CAAC,AAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACxD,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,qBAAqB,CAAE,GAAG,AAC5B,CAAC,AAED,mBAAK,WAAW,IAAI,CAAC,CACvB,mBAAK,WAAW,IAAI,CAAC,CACrB,mBAAK,WAAW,IAAI,CAAC,CACrB,mBAAK,WAAW,IAAI,CAAC,AAAC,CAAC,AACnB,WAAW,CAAE,IAAI,CAAC,CAAC,AACrB,CAAC,AACH,CAAC\"}"
};

const Posts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts, limit = -1 } = $$props;

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0) $$bindings.limit(limit);

	$$result.css.add(css);

	let postsToDisplay = posts ? posts.slice(0, limit) : [];

	return `<div class="posts svelte-p87h3e">
	  ${each(postsToDisplay, (post) => `<a class="post svelte-p87h3e" href="/blog/${escape(post.slug)}">
	      ${ post.frontmatter.preview ? `<img${(v => v == null ? "" : ` src="${escape(post.frontmatter.preview)}"`)(post.frontmatter.preview)} class="image svelte-p87h3e"${(v => v == null ? "" : ` alt="${escape(post.frontmatter.title)}"`)(post.frontmatter.title)}>` : `` }
	      <h2 class="svelte-p87h3e">${escape(post.frontmatter.title)}</h2>
	      <div class="description svelte-p87h3e">${escape(post.frontmatter.excerpt)}</div>
	    </a>`)}
	</div>`;
});

/* src\components\Breadcrumb.svelte generated by Svelte v3.0.1 */

const css$1 = {
	code: ".pagination-container.svelte-lta57{margin:5px auto;text-align:center}.pagination.svelte-lta57{display:inline-block;box-shadow:0 4px 20px rgba(100, 100, 100, 0.15);border-radius:10px}.pagination.svelte-lta57 a.svelte-lta57{display:inline-block;padding:10px 20px;text-decoration:none;border-radius:10px}.pagination.svelte-lta57 a.svelte-lta57:hover:not(.disabled){background-color:#efefef}.pagination.svelte-lta57 a.disabled.svelte-lta57{cursor:not-allowed;color:#a9a9a9}",
	map: "{\"version\":3,\"file\":\"Breadcrumb.svelte\",\"sources\":[\"Breadcrumb.svelte\"],\"sourcesContent\":[\"<script>\\n  export let isFirst;\\n  export let isLast;\\n  export let page;\\n\\n  $: currentPage = Number(page);\\n</script>\\n\\n<style lang=\\\"scss\\\">.pagination-container {\\n  margin: 5px auto;\\n  text-align: center;\\n}\\n\\n.pagination {\\n  display: inline-block;\\n  box-shadow: 0 4px 20px rgba(100, 100, 100, 0.15);\\n  border-radius: 10px;\\n}\\n.pagination a {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  text-decoration: none;\\n  border-radius: 10px;\\n}\\n.pagination a:hover:not(.disabled) {\\n  background-color: #efefef;\\n}\\n.pagination a.disabled {\\n  cursor: not-allowed;\\n  color: #a9a9a9;\\n}\\n\\n/*# sourceMappingURL=Breadcrumb.svelte.css.map */</style>\\n\\n<div class=\\\"pagination-container\\\">\\n  <div class=\\\"pagination\\\">\\n    <!--\\n    <a\\n      class:disabled={isFirst}\\n      href=\\\"/{!isFirst ? (currentPage === 2 ? '' : currentPage - 1) : ''}\\\">\\n      Previous Page\\n    </a>\\n    <a class:disabled={isLast} href=\\\"/{!isLast ? currentPage + 1 : ''}\\\">\\n      Next Page\\n    </a>\\n    -->\\n    <a class=\\\"disabled\\\" href=\\\"/{!isFirst ? (currentPage === 2 ? '' : currentPage - 1) : ''}\\\">\\n      Previous Page\\n    </a>\\n    <a class=\\\"disabled\\\" href=\\\"/{!isLast ? currentPage + 1 : ''}\\\">\\n      Next Page\\n    </a>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAQmB,qBAAqB,aAAC,CAAC,AACxC,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,WAAW,aAAC,CAAC,AACX,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,wBAAW,CAAC,CAAC,aAAC,CAAC,AACb,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,eAAe,CAAE,IAAI,CACrB,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,wBAAW,CAAC,cAAC,MAAM,KAAK,SAAS,CAAC,AAAC,CAAC,AAClC,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AACD,wBAAW,CAAC,CAAC,SAAS,aAAC,CAAC,AACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,OAAO,AAChB,CAAC\"}"
};

const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { isFirst, isLast, page } = $$props;

	if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0) $$bindings.isFirst(isFirst);
	if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0) $$bindings.isLast(isLast);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);

	$$result.css.add(css$1);

	let currentPage = Number(page);

	return `<div class="pagination-container svelte-lta57">
	  <div class="pagination svelte-lta57">
	    
	    <a class="disabled svelte-lta57" href="/${escape(!isFirst ? (currentPage === 2 ? '' : currentPage - 1) : '')}">
	      Previous Page
	    </a>
	    <a class="disabled svelte-lta57" href="/${escape(!isLast ? currentPage + 1 : '')}">
	      Next Page
	    </a>
	  </div>
	</div>`;
});

/* src\routes\index.svelte generated by Svelte v3.0.1 */

const css$2 = {
	code: ".hero-section.svelte-1e3oi4v{padding:3rem 2rem;font-size:2rem;max-width:50%;text-align:right}h1.svelte-1e3oi4v{font-weight:600;font-size:4rem;line-height:4.5rem}img,.image{height:25rem;border-radius:5px;margin:15px 0;object-fit:cover;width:100%;border-radius:10px;box-shadow:0 4px 20px rgba(150, 150, 150, 0.25);-webkit-box-shadow:0 4px 20px rgba(150, 150, 150, 0.25);transition:250ms ease-in all}@media(max-width: 767px){h1.svelte-1e3oi4v{font-size:3rem;line-height:3.5rem}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload(page, session) {\\n    const res = await this.fetch(`index.json`);\\n    const response = await res.json();\\n\\n    return response;\\n  }\\n</script>\\n\\n<script>\\n  import Posts from '../components/Posts.svelte';\\n  import Breadcrumb from '../components/Breadcrumb.svelte';\\n\\n  export let posts;\\n  export let postsPerPage;\\n</script>\\n\\n<style lang=\\\"scss\\\">.hero-section {\\n  padding: 3rem 2rem;\\n  font-size: 2rem;\\n  max-width: 50%;\\n  text-align: right;\\n}\\n\\nh1 {\\n  font-weight: 600;\\n  font-size: 4rem;\\n  line-height: 4.5rem;\\n}\\n\\n:global(img),\\n:global(.image) {\\n  height: 25rem;\\n  border-radius: 5px;\\n  margin: 15px 0;\\n  object-fit: cover;\\n  width: 100%;\\n  border-radius: 10px;\\n  box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);\\n  -webkit-box-shadow: 0 4px 20px rgba(150, 150, 150, 0.25);\\n  transition: 250ms ease-in all;\\n}\\n\\n@media (max-width: 767px) {\\n  h1 {\\n    font-size: 3rem;\\n    line-height: 3.5rem;\\n  }\\n}\\n\\n/*# sourceMappingURL=index.svelte.css.map */</style>\\n\\n<svelte:head>\\n  <title>Stunning Theme</title>\\n</svelte:head>\\n\\n<div class=\\\"hero-section\\\">\\n  <h1>Welcome on my blog</h1>\\n  <p>Explore all my adentures</p>\\n</div>\\n\\n<Posts {posts} limit={postsPerPage} />\\n\\n<Breadcrumb isFirst={true} isLast={postsPerPage > posts.length} page=\\\"1\\\" />\\n\"],\"names\":[],\"mappings\":\"AAiBmB,aAAa,eAAC,CAAC,AAChC,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAEO,GAAG,AAAC,CACJ,MAAM,AAAE,CAAC,AACf,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACxD,UAAU,CAAE,KAAK,CAAC,OAAO,CAAC,GAAG,AAC/B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AACH,CAAC\"}"
};

async function preload(page, session) {
  const res = await this.fetch(`index.json`);
  const response = await res.json();

  return response;
}

const Index = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  let { posts, postsPerPage } = $$props;

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.postsPerPage === void 0 && $$bindings.postsPerPage && postsPerPage !== void 0) $$bindings.postsPerPage(postsPerPage);

	$$result.css.add(css$2);

	return `${($$result.head += `<title>Stunning Theme</title>`, "")}

	<div class="hero-section svelte-1e3oi4v">
	  <h1 class="svelte-1e3oi4v">Welcome on my blog</h1>
	  <p>Explore all my adentures</p>
	</div>

	${validate_component(Posts, 'Posts').$$render($$result, {
		posts: posts,
		limit: postsPerPage
	}, {}, {})}

	${validate_component(Breadcrumb, 'Breadcrumb').$$render($$result, {
		isFirst: true,
		isLast: postsPerPage > posts.length,
		page: "1"
	}, {}, {})}`;
});

/* src\routes\contact.svelte generated by Svelte v3.0.1 */

const css$3 = {
	code: ".container.svelte-4eigs3{max-width:800px;margin:0 auto}h1.svelte-4eigs3{font-weight:600;margin-top:2rem;text-align:center}label.svelte-4eigs3{display:grid;grid-template-columns:120px 1fr}form.svelte-4eigs3{max-width:600px;margin:0 auto}input.svelte-4eigs3,textarea.svelte-4eigs3{padding:10px 5px;font-size:16px;border:2px solid #dedede;border-radius:5px;max-width:100%}.button-container.svelte-4eigs3{text-align:right}.button-container.svelte-4eigs3 button.svelte-4eigs3{padding:8px 20px;background:#dedede;border-radius:5px;cursor:pointer;font-size:16px}.button-container.svelte-4eigs3 button.svelte-4eigs3:hover{background:#cdcdcd}",
	map: "{\"version\":3,\"file\":\"contact.svelte\",\"sources\":[\"contact.svelte\"],\"sourcesContent\":[\"<style lang=\\\"scss\\\">.container {\\n  max-width: 800px;\\n  margin: 0 auto;\\n}\\n\\nh1 {\\n  font-weight: 600;\\n  margin-top: 2rem;\\n  text-align: center;\\n}\\n\\nlabel {\\n  display: grid;\\n  grid-template-columns: 120px 1fr;\\n}\\n\\nform {\\n  max-width: 600px;\\n  margin: 0 auto;\\n}\\n\\ninput,\\ntextarea {\\n  padding: 10px 5px;\\n  font-size: 16px;\\n  border: 2px solid #dedede;\\n  border-radius: 5px;\\n  max-width: 100%;\\n}\\n\\n.button-container {\\n  text-align: right;\\n}\\n.button-container button {\\n  padding: 8px 20px;\\n  background: #dedede;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 16px;\\n}\\n.button-container button:hover {\\n  background: #cdcdcd;\\n}\\n\\n/*# sourceMappingURL=contact.svelte.css.map */</style>\\n\\n<svelte:head>\\n  <title>Contact</title>\\n</svelte:head>\\n\\n<div class=\\\"container\\\">\\n  <h1>Contact Page</h1>\\n\\n  <form name=\\\"contact\\\" method=\\\"POST\\\" data-netlify=\\\"true\\\">\\n    <p>\\n      <label>\\n        Your Name:\\n        <input type=\\\"text\\\" name=\\\"name\\\" />\\n      </label>\\n    </p>\\n    <p>\\n      <label>\\n        Your Email:\\n        <input type=\\\"email\\\" name=\\\"email\\\" />\\n      </label>\\n    </p>\\n    <p>\\n      <label>\\n        Message:\\n        <textarea name=\\\"message\\\" rows=\\\"8\\\" />\\n      </label>\\n    </p>\\n    <p class=\\\"button-container\\\">\\n      <button type=\\\"submit\\\">Contact Us</button>\\n    </p>\\n  </form>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAAmB,UAAU,cAAC,CAAC,AAC7B,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,CAAC,GAAG,AAClC,CAAC,AAED,IAAI,cAAC,CAAC,AACJ,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,mBAAK,CACL,QAAQ,cAAC,CAAC,AACR,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,iBAAiB,cAAC,CAAC,AACjB,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,+BAAiB,CAAC,MAAM,cAAC,CAAC,AACxB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,+BAAiB,CAAC,oBAAM,MAAM,AAAC,CAAC,AAC9B,UAAU,CAAE,OAAO,AACrB,CAAC\"}"
};

const Contact = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `<title>Contact</title>`, "")}

	<div class="container svelte-4eigs3">
	  <h1 class="svelte-4eigs3">Contact Page</h1>

	  <form name="contact" method="POST" data-netlify="true" class="svelte-4eigs3">
	    <p>
	      <label class="svelte-4eigs3">
	        Your Name:
	        <input type="text" name="name" class="svelte-4eigs3">
	      </label>
	    </p>
	    <p>
	      <label class="svelte-4eigs3">
	        Your Email:
	        <input type="email" name="email" class="svelte-4eigs3">
	      </label>
	    </p>
	    <p>
	      <label class="svelte-4eigs3">
	        Message:
	        <textarea name="message" rows="8" class="svelte-4eigs3"></textarea>
	      </label>
	    </p>
	    <p class="button-container svelte-4eigs3">
	      <button type="submit" class="svelte-4eigs3">Contact Us</button>
	    </p>
	  </form>
	</div>`;
});

/* src\routes\about.svelte generated by Svelte v3.0.1 */

const css$4 = {
	code: ".container.svelte-hnhohj{max-width:800px;margin:0 auto}h1.svelte-hnhohj{font-weight:600;margin-top:2rem;text-align:center}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<style lang=\\\"scss\\\">.container {\\n  max-width: 800px;\\n  margin: 0 auto;\\n}\\n\\nh1 {\\n  font-weight: 600;\\n  margin-top: 2rem;\\n  text-align: center;\\n}\\n\\n/*# sourceMappingURL=about.svelte.css.map */</style>\\n\\n<svelte:head>\\n  <title>About</title>\\n</svelte:head>\\n\\n<div class=\\\"container\\\">\\n  <h1>About Page</h1>\\n\\n  <p>\\n    Pudding chocolate wafer I love donut. Candy canes gingerbread cake. Cotton\\n    candy cake cotton candy sweet roll. Tootsie roll gummies chupa chups bear\\n    claw. I love bear claw ice cream sugar plum sugar plum toffee sugar plum\\n    cookie. Liquorice cupcake jelly-o dragée sesame snaps sesame snaps. Icing\\n    danish jelly beans pie.\\n  </p>\\n\\n  <p>\\n    Sugar plum tart pie apple pie sweet roll chupa chups I love. Brownie\\n    caramels lollipop topping liquorice. Chocolate wafer I love cookie ice cream\\n    cake jujubes. Dragée dragée cake sweet jujubes dessert jelly. Ice cream\\n    donut marshmallow bear claw candy liquorice tootsie roll. Chupa chups jelly\\n    danish caramels macaroon. Gingerbread muffin biscuit. Ice cream caramels\\n    jelly beans liquorice apple pie liquorice pastry I love.\\n  </p>\\n\\n  <p>\\n    Powder biscuit I love brownie. I love jelly-o macaroon I love cupcake bear\\n    claw halvah croissant. Halvah fruitcake I love biscuit caramels candy I love\\n    liquorice toffee. Halvah topping sugar plum brownie lemon drops chocolate\\n    cake halvah jujubes I love. Sugar plum brownie marshmallow carrot cake candy\\n    canes I love gummi bears I love toffee. Brownie halvah chocolate I love\\n    jelly-o fruitcake danish candy canes cake. Biscuit croissant I love carrot\\n    cake cotton candy caramels. Chocolate toffee jelly-o donut cookie jujubes\\n    marshmallow jujubes. Caramels cotton candy candy canes apple pie I love.\\n    Cheesecake candy canes I love fruitcake pudding macaroon biscuit.\\n  </p>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAAmB,UAAU,cAAC,CAAC,AAC7B,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,AACpB,CAAC\"}"
};

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$4);

	return `${($$result.head += `<title>About</title>`, "")}

	<div class="container svelte-hnhohj">
	  <h1 class="svelte-hnhohj">About Page</h1>

	  <p>
	    Pudding chocolate wafer I love donut. Candy canes gingerbread cake. Cotton
	    candy cake cotton candy sweet roll. Tootsie roll gummies chupa chups bear
	    claw. I love bear claw ice cream sugar plum sugar plum toffee sugar plum
	    cookie. Liquorice cupcake jelly-o dragée sesame snaps sesame snaps. Icing
	    danish jelly beans pie.
	  </p>

	  <p>
	    Sugar plum tart pie apple pie sweet roll chupa chups I love. Brownie
	    caramels lollipop topping liquorice. Chocolate wafer I love cookie ice cream
	    cake jujubes. Dragée dragée cake sweet jujubes dessert jelly. Ice cream
	    donut marshmallow bear claw candy liquorice tootsie roll. Chupa chups jelly
	    danish caramels macaroon. Gingerbread muffin biscuit. Ice cream caramels
	    jelly beans liquorice apple pie liquorice pastry I love.
	  </p>

	  <p>
	    Powder biscuit I love brownie. I love jelly-o macaroon I love cupcake bear
	    claw halvah croissant. Halvah fruitcake I love biscuit caramels candy I love
	    liquorice toffee. Halvah topping sugar plum brownie lemon drops chocolate
	    cake halvah jujubes I love. Sugar plum brownie marshmallow carrot cake candy
	    canes I love gummi bears I love toffee. Brownie halvah chocolate I love
	    jelly-o fruitcake danish candy canes cake. Biscuit croissant I love carrot
	    cake cotton candy caramels. Chocolate toffee jelly-o donut cookie jujubes
	    marshmallow jujubes. Caramels cotton candy candy canes apple pie I love.
	    Cheesecake candy canes I love fruitcake pudding macaroon biscuit.
	  </p>
	</div>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.0.1 */

const css$5 = {
	code: ".container.svelte-10h0ygf{max-width:800px;margin:0 auto}h1.svelte-10h0ygf{font-weight:600;margin-top:2rem;text-align:center}.post-meta.svelte-10h0ygf{text-transform:uppercase;opacity:0.5;letter-spacing:2px;text-align:center}.content.svelte-10h0ygf h2{font-size:1.4em;font-weight:500}.content.svelte-10h0ygf pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-10h0ygf pre code{background-color:transparent;padding:0}.content.svelte-10h0ygf ul{line-height:1.5}.content.svelte-10h0ygf ul li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload({ params, query }) {\\n    const res = await this.fetch(`blog/${params.slug}.json`);\\n    const data = await res.json();\\n\\n    if (res.status === 200) {\\n      return { post: data };\\n    } else {\\n      this.error(res.status, data.message);\\n    }\\n  }\\n</script>\\n\\n<script>\\n  import { default as readingTimeCalculator } from 'reading-time';\\n  export let post;\\n\\n  $: readingTimeData = readingTimeCalculator(post.contentHtml);\\n  $: readingTime = `${Math.ceil(readingTimeData.minutes)} minute${\\n    Math.ceil(readingTimeData.minutes) > 1 ? '(s)' : ''\\n  } read`;\\n</script>\\n\\n<style lang=\\\"scss\\\">.container {\\n  max-width: 800px;\\n  margin: 0 auto;\\n}\\n\\nh1 {\\n  font-weight: 600;\\n  margin-top: 2rem;\\n  text-align: center;\\n}\\n\\n.post-meta {\\n  text-transform: uppercase;\\n  opacity: 0.5;\\n  letter-spacing: 2px;\\n  text-align: center;\\n}\\n\\n.content :global(h2) {\\n  font-size: 1.4em;\\n  font-weight: 500;\\n}\\n.content :global(pre) {\\n  background-color: #f9f9f9;\\n  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);\\n  padding: 0.5em;\\n  border-radius: 2px;\\n  overflow-x: auto;\\n}\\n.content :global(pre) :global(code) {\\n  background-color: transparent;\\n  padding: 0;\\n}\\n.content :global(ul) {\\n  line-height: 1.5;\\n}\\n.content :global(ul) :global(li) {\\n  margin: 0 0 0.5em 0;\\n}\\n\\n/*# sourceMappingURL=%5Bslug%5D.svelte.css.map */</style>\\n\\n<svelte:head>\\n  <title>{post.frontmatter.title}</title>\\n</svelte:head>\\n\\n<div class=\\\"container\\\">\\n  <h1>{post.frontmatter.title}</h1>\\n  <p class=\\\"post-meta\\\">\\n    {new Date(post.frontmatter.date).toDateString()} ﹒ {readingTime}\\n  </p>\\n  <img src={post.frontmatter.preview} class=\\\"image\\\" alt={post.frontmatter.title} />\\n\\n  <div class=\\\"content\\\">\\n    {@html post.contentHtml}\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAuBmB,UAAU,eAAC,CAAC,AAC7B,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,UAAU,eAAC,CAAC,AACV,cAAc,CAAE,SAAS,CACzB,OAAO,CAAE,GAAG,CACZ,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,uBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACpB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,uBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACrB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AAClB,CAAC,AACD,uBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACnC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,uBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACpB,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,uBAAQ,CAAC,AAAQ,EAAE,AAAC,CAAC,AAAQ,EAAE,AAAE,CAAC,AAChC,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACrB,CAAC\"}"
};

async function preload$1({ params, query }) {
  const res = await this.fetch(`blog/${params.slug}.json`);
  const data = await res.json();

  if (res.status === 200) {
    return { post: data };
  } else {
    this.error(res.status, data.message);
  }
}

const Slug = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;

	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);

	$$result.css.add(css$5);

	let readingTimeData = readingTimeCalculator(post.contentHtml);
	let readingTime = `${Math.ceil(readingTimeData.minutes)} minute${
        Math.ceil(readingTimeData.minutes) > 1 ? '(s)' : ''
      } read`;

	return `${($$result.head += `<title>${escape(post.frontmatter.title)}</title>`, "")}

	<div class="container svelte-10h0ygf">
	  <h1 class="svelte-10h0ygf">${escape(post.frontmatter.title)}</h1>
	  <p class="post-meta svelte-10h0ygf">
	    ${escape(new Date(post.frontmatter.date).toDateString())} ﹒ ${escape(readingTime)}
	  </p>
	  <img${(v => v == null ? "" : ` src="${escape(post.frontmatter.preview)}"`)(post.frontmatter.preview)} class="image"${(v => v == null ? "" : ` alt="${escape(post.frontmatter.title)}"`)(post.frontmatter.title)}>

	  <div class="content svelte-10h0ygf">
	    ${post.contentHtml}
	  </div>
	</div>`;
});

/* src\routes\[page([0-9]+)].svelte generated by Svelte v3.0.1 */

async function preload$2({ params }) {
  const page = +params.page;

  const res = await this.fetch(`${page}.json`);
  const response = await res.json();

  return {
    page,
    ...response,
  };
}

const Page_0_9 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  let { posts, isFirst, isLast, page } = $$props;

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0) $$bindings.isFirst(isFirst);
	if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0) $$bindings.isLast(isLast);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);

	return `${($$result.head += `<title>Stunning Theme - Page ${escape(page)}</title>`, "")}

	${validate_component(Posts, 'Posts').$$render($$result, { posts: posts, limit: 2 }, {}, {})}

	${validate_component(Breadcrumb, 'Breadcrumb').$$render($$result, {
		isFirst: isFirst,
		isLast: isLast,
		page: page
	}, {}, {})}`;
});

/* src\components\Nav.svelte generated by Svelte v3.0.1 */

const css$6 = {
	code: "nav.svelte-yyy3zq{display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between;padding:4rem 0 2rem;width:50%;margin:0 auto}.logo.svelte-yyy3zq{font-size:1.2rem}.logo.svelte-yyy3zq span.svelte-yyy3zq{font-weight:bold}ul.svelte-yyy3zq{margin:0;padding:0}ul.svelte-yyy3zq::after{content:\"\";display:block;clear:both}ul.svelte-yyy3zq li.svelte-yyy3zq{display:block;float:left}.selected.svelte-yyy3zq{position:relative;display:inline-block}.selected.svelte-yyy3zq::after{position:absolute;content:\"\";width:calc(100% - 1em);height:2px;background-color:#ff3e00;display:block;bottom:-1px}a.svelte-yyy3zq{text-decoration:none;padding:1em 0.5em;display:block}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n  export let segment;\\n</script>\\n\\n<style lang=\\\"scss\\\">nav {\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 4rem 0 2rem;\\n  width: 50%;\\n  margin: 0 auto;\\n}\\n\\n.logo {\\n  font-size: 1.2rem;\\n}\\n.logo span {\\n  font-weight: bold;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  /* clearfix */\\n}\\nul::after {\\n  content: \\\"\\\";\\n  display: block;\\n  clear: both;\\n}\\nul li {\\n  display: block;\\n  float: left;\\n}\\n\\n.selected {\\n  position: relative;\\n  display: inline-block;\\n}\\n.selected::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: calc(100% - 1em);\\n  height: 2px;\\n  background-color: #ff3e00;\\n  display: block;\\n  bottom: -1px;\\n}\\n\\na {\\n  text-decoration: none;\\n  padding: 1em 0.5em;\\n  display: block;\\n}\\n\\n/*# sourceMappingURL=Nav.svelte.css.map */</style>\\n\\n<nav>\\n  <a href=\\\".\\\" class=\\\"logo\\\">\\n    <span>Stunning</span>\\n    theme\\n  </a>\\n  <ul>\\n    <!-- <li><a class:selected={segment === undefined} href=\\\".\\\">home</a></li> -->\\n    <li>\\n      <a class:selected={segment === 'about'} href=\\\"about\\\">About</a>\\n    </li>\\n    <li>\\n      <a class:selected={segment === 'contact'} href=\\\"contact\\\">Contact</a>\\n    </li>\\n\\n    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n    <!-- <li><a rel=prefetch class:selected='{segment === \\\"blog\\\"}' href='blog'>blog</a></li> -->\\n  </ul>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAImB,GAAG,cAAC,CAAC,AACtB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CACpB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,SAAS,CAAE,MAAM,AACnB,CAAC,AACD,mBAAK,CAAC,IAAI,cAAC,CAAC,AACV,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AAEZ,CAAC,AACD,gBAAE,OAAO,AAAC,CAAC,AACT,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACb,CAAC,AACD,gBAAE,CAAC,EAAE,cAAC,CAAC,AACL,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACb,CAAC,AAED,SAAS,cAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACvB,CAAC,AACD,uBAAS,OAAO,AAAC,CAAC,AAChB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACd,CAAC,AAED,CAAC,cAAC,CAAC,AACD,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AAChB,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css$6);

	return `<nav class="svelte-yyy3zq">
	  <a href="." class="logo svelte-yyy3zq">
	    <span class="svelte-yyy3zq">Stunning</span>
	    theme
	  </a>
	  <ul class="svelte-yyy3zq">
	    
	    <li class="svelte-yyy3zq">
	      <a href="about" class="${[`svelte-yyy3zq`, segment === 'about' ? "selected" : ""].join(' ').trim() }">About</a>
	    </li>
	    <li class="svelte-yyy3zq">
	      <a href="contact" class="${[`svelte-yyy3zq`, segment === 'contact' ? "selected" : ""].join(' ').trim() }">Contact</a>
	    </li>

	    
	    
	  </ul>
	</nav>`;
});

/* src\components\Footer.svelte generated by Svelte v3.0.1 */

const css$7 = {
	code: "footer.svelte-1pxwni3{display:flex;justify-content:center;padding:4rem 0 2rem;width:100%;flex-flow:row nowrap}footer.svelte-1pxwni3 .copyright.svelte-1pxwni3{opacity:0.5}",
	map: "{\"version\":3,\"file\":\"Footer.svelte\",\"sources\":[\"Footer.svelte\"],\"sourcesContent\":[\"<style lang=\\\"scss\\\">footer {\\n  display: flex;\\n  justify-content: center;\\n  padding: 4rem 0 2rem;\\n  width: 100%;\\n  flex-flow: row nowrap;\\n}\\nfooter .copyright {\\n  opacity: 0.5;\\n}\\n\\n/*# sourceMappingURL=Footer.svelte.css.map */</style>\\n\\n<footer>\\n  <span class=\\\"copyright\\\">Copyright &copy; 2022 . blogops</span>\\n</footer>\\n\"],\"names\":[],\"mappings\":\"AAAmB,MAAM,eAAC,CAAC,AACzB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CACpB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,GAAG,CAAC,MAAM,AACvB,CAAC,AACD,qBAAM,CAAC,UAAU,eAAC,CAAC,AACjB,OAAO,CAAE,GAAG,AACd,CAAC\"}"
};

const Footer = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$7);

	return `<footer class="svelte-1pxwni3">
	  <span class="copyright svelte-1pxwni3">Copyright © 2022 . blogops</span>
	</footer>`;
});

/* src\routes\_layout.svelte generated by Svelte v3.0.1 */

const css$8 = {
	code: "main.svelte-813799{background-color:white;box-sizing:border-box;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;max-width:100vw;width:100%}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n  import Nav from '../components/Nav.svelte';\\n  import Footer from '../components/Footer.svelte';\\n\\n  export let segment;\\n</script>\\n\\n<style lang=\\\"scss\\\">main {\\n  background-color: white;\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-flow: column nowrap;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: 100vw;\\n  width: 100%;\\n}\\n\\n/*# sourceMappingURL=_layout.svelte.css.map */</style>\\n\\n<Nav {segment} />\\n\\n<main>\\n  <slot />\\n</main>\\n\\n<Footer />\\n\"],\"names\":[],\"mappings\":\"AAOmB,IAAI,cAAC,CAAC,AACvB,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CAAC,MAAM,CACxB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,AACb,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css$8);

	return `${validate_component(Nav, 'Nav').$$render($$result, { segment: segment }, {}, {})}

	<main class="svelte-813799">
	  ${$$slots.default ? $$slots.default() : ``}
	</main>

	${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})}`;
});

/* src\routes\_error.svelte generated by Svelte v3.0.1 */

const css$9 = {
	code: ".container.svelte-plhj22{max-width:800px;margin:4rem auto;text-align:center}h1.svelte-plhj22,p.svelte-plhj22{margin:0 auto}h1.svelte-plhj22{font-size:2.8em;font-weight:700;margin:0 0 0.25em 0}p.svelte-plhj22{margin:1em auto;font-style:italic;opacity:0.5}@media(min-width: 480px){h1.svelte-plhj22{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n  export let status;\\n  export let error;\\n\\n  const dev = undefined === 'development';\\n</script>\\n\\n<style>\\n  .container {\\n    max-width: 800px;\\n    margin: 4rem auto;\\n    text-align: center;\\n  }\\n  h1,\\n  p {\\n    margin: 0 auto;\\n  }\\n\\n  h1 {\\n    font-size: 2.8em;\\n    font-weight: 700;\\n    margin: 0 0 0.25em 0;\\n  }\\n\\n  p {\\n    margin: 1em auto;\\n    font-style: italic;\\n    opacity: 0.5;\\n  }\\n\\n  @media (min-width: 480px) {\\n    h1 {\\n      font-size: 4em;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>{status}</title>\\n</svelte:head>\\n\\n<div class=\\\"container\\\">\\n  <h1>{status}</h1>\\n\\n  <p>{error.message}</p>\\n\\n  {#if dev && error.stack}\\n    <pre>{error.stack}</pre>\\n  {/if}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAQE,UAAU,cAAC,CAAC,AACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,gBAAE,CACF,CAAC,cAAC,CAAC,AACD,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,AACtB,CAAC,AAED,CAAC,cAAC,CAAC,AACD,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,GAAG,AAChB,CAAC,AACH,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status, error } = $$props;

	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	$$result.css.add(css$9);

	return `${($$result.head += `<title>${escape(status)}</title>`, "")}

	<div class="container svelte-plhj22">
	  <h1 class="svelte-plhj22">${escape(status)}</h1>

	  <p class="svelte-plhj22">${escape(error.message)}</p>

	  ${  `` }
	</div>`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// index.json.js
			pattern: /^\/index\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		},

		{
			// [page([0-9]+)].json.js
			pattern: /^\/([0-9]+)\.json$/,
			handlers: route_2,
			params: match => ({ page: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Index, preload: preload }
			]
		},

		{
			// contact.svelte
			pattern: /^\/contact\/?$/,
			parts: [
				{ name: "contact", file: "contact.svelte", component: Contact }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: Slug, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// [page([0-9]+)].svelte
			pattern: /^\/([0-9]+)\/?$/,
			parts: [
				{ name: "$page", file: "[page([0-9]+)].svelte", component: Page_0_9, preload: preload$2, params: match => ({ page: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

function writable(value, start = noop) {
	let stop;
	const subscribers = [];

	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (!stop) return; // not ready
			subscribers.forEach(s => s[1]());
			subscribers.forEach(s => s[0](value));
		}
	}

	function update(fn) {
		set(fn(value));
	}

	function subscribe(run, invalidate = noop) {
		const subscriber = [run, invalidate];
		subscribers.push(subscriber);
		if (subscribers.length === 1) stop = start(set) || noop;
		run(value);

		return () => {
			const index = subscribers.indexOf(subscriber);
			if (index !== -1) subscribers.splice(index, 1);
			if (subscribers.length === 0) stop();
		};
	}

	return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.0.1 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { stores, error, status, segments, level0, level1 = null, notify } = $$props;

	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);

	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


	${validate_component(Layout, 'Layout').$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `
		${ error ? `${validate_component(Error$1, 'Error').$$render($$result, { error: error, status: status }, {}, {})}` : `${validate_component(((level1.component) || missing_component), 'svelte:component').$$render($$result, Object.assign(level1.props), {}, {})}` }
	`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    middleware(),
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
