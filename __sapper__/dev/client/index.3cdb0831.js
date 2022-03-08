import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, g as add_location, j as insert, k as append, m as mount_component } from './internal.2ee3a6ff.js';
import { P as Posts, B as Breadcrumb } from './Breadcrumb.0c12a18f.js';

/* src\routes\index.svelte generated by Svelte v3.0.1 */

const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	var t0, div, h1, t1, t2, p, t3, t4, t5, current;

	var posts_1 = new Posts({
		props: {
		posts: ctx.posts,
		limit: ctx.postsPerPage
	},
		$$inline: true
	});

	var breadcrumb = new Breadcrumb({
		props: {
		isFirst: true,
		isLast: ctx.postsPerPage > ctx.posts.length,
		page: "1"
	},
		$$inline: true
	});

	return {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("Welcome on my blog");
			t2 = space();
			p = element("p");
			t3 = text("Explore all my adentures");
			t4 = space();
			posts_1.$$.fragment.c();
			t5 = space();
			breadcrumb.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Welcome on my blog");
			h1_nodes.forEach(detach);
			t2 = claim_text(div_nodes, "\n  ");

			p = claim_element(div_nodes, "P", {}, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, "Explore all my adentures");
			p_nodes.forEach(detach);
			div_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n");
			posts_1.$$.fragment.l(nodes);
			t5 = claim_text(nodes, "\n\n");
			breadcrumb.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Stunning Theme";
			h1.className = "svelte-1e3oi4v";
			add_location(h1, file, 57, 2, 1094);
			add_location(p, file, 58, 2, 1124);
			div.className = "hero-section svelte-1e3oi4v";
			add_location(div, file, 56, 0, 1065);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div, anchor);
			append(div, h1);
			append(h1, t1);
			append(div, t2);
			append(div, p);
			append(p, t3);
			insert(target, t4, anchor);
			mount_component(posts_1, target, anchor);
			insert(target, t5, anchor);
			mount_component(breadcrumb, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var posts_1_changes = {};
			if (changed.posts) posts_1_changes.posts = ctx.posts;
			if (changed.postsPerPage) posts_1_changes.limit = ctx.postsPerPage;
			posts_1.$set(posts_1_changes);

			var breadcrumb_changes = {};
			if (changed.postsPerPage || changed.posts) breadcrumb_changes.isLast = ctx.postsPerPage > ctx.posts.length;
			breadcrumb.$set(breadcrumb_changes);
		},

		i: function intro(local) {
			if (current) return;
			posts_1.$$.fragment.i(local);

			breadcrumb.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			posts_1.$$.fragment.o(local);
			breadcrumb.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div);
				detach(t4);
			}

			posts_1.$destroy(detaching);

			if (detaching) {
				detach(t5);
			}

			breadcrumb.$destroy(detaching);
		}
	};
}

async function preload(page, session) {
  const res = await this.fetch(`index.json`);
  const response = await res.json();

  return response;
}

function instance($$self, $$props, $$invalidate) {
	

  let { posts, postsPerPage } = $$props;

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
		if ('postsPerPage' in $$props) $$invalidate('postsPerPage', postsPerPage = $$props.postsPerPage);
	};

	return { posts, postsPerPage };
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["posts", "postsPerPage"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Index> was created without expected prop 'posts'");
		}
		if (ctx.postsPerPage === undefined && !('postsPerPage' in props)) {
			console.warn("<Index> was created without expected prop 'postsPerPage'");
		}
	}

	get posts() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get postsPerPage() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set postsPerPage(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Index;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2NkYjA4MzEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaW5kZXguanNvbmApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzLnN2ZWx0ZSc7XG4gIGltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5zdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgcG9zdHNQZXJQYWdlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAbWl4aW4gaW1hZ2Uge1xuICAgIGhlaWdodDogMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMjUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMjUpO1xuICAgIHRyYW5zaXRpb246IDI1MG1zIGVhc2UtaW4gYWxsO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gIH1cbiAgOmdsb2JhbChpbWcpLFxuICA6Z2xvYmFsKC5pbWFnZSkge1xuICAgIEBpbmNsdWRlIGltYWdlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TdHVubmluZyBUaGVtZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiaGVyby1zZWN0aW9uXCI+XG4gIDxoMT5XZWxjb21lIG9uIG15IGJsb2c8L2gxPlxuICA8cD5FeHBsb3JlIGFsbCBteSBhZGVudHVyZXM8L3A+XG48L2Rpdj5cblxuPFBvc3RzIHtwb3N0c30gbGltaXQ9e3Bvc3RzUGVyUGFnZX0gLz5cblxuPEJyZWFkY3J1bWIgaXNGaXJzdD17dHJ1ZX0gaXNMYXN0PXtwb3N0c1BlclBhZ2UgPiBwb3N0cy5sZW5ndGh9IHBhZ2U9XCIxXCIgLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7YUE2RFEsS0FBSzthQUFTLFlBQVk7Ozs7Ozs7V0FFYixJQUFJO2NBQVUsWUFBWSxPQUFHLEtBQUssQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFGdEQsS0FBSzt5REFBUyxZQUFZOzs7OzhFQUVDLFlBQVksT0FBRyxLQUFLLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlEckQsZUFBZSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtFQUMzQyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztFQUVsQyxPQUFPLFFBQVEsQ0FBQztDQUNqQjs7Ozs7RUFPTSxNQUFJLEtBQUssRUFDTCx3QkFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
