import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, g as add_location, j as insert, k as append, m as mount_component } from './internal.0efbe437.js';
import { P as Posts, B as Breadcrumb } from './Breadcrumb.420e57aa.js';

/* src\routes\index.svelte generated by Svelte v3.0.0 */

const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	var t0, div, h1, t1, t2, p, t3, t4, t5, current;

	var posts_1 = new Posts({
		props: { posts: ctx.posts, limit: ctx.postsPerPage },
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
			t1 = text("Stunning Sapper Blog theme with support for markdown files");
			t2 = space();
			p = element("p");
			t3 = text("Start Publishing With Sapper");
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

			t1 = claim_text(h1_nodes, "Stunning Sapper Blog theme with support for markdown files");
			h1_nodes.forEach(detach);
			t2 = claim_text(div_nodes, "\n  ");

			p = claim_element(div_nodes, "P", {}, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, "Start Publishing With Sapper");
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
			h1.className = "svelte-15w0prb";
			add_location(h1, file, 47, 2, 824);
			add_location(p, file, 48, 2, 894);
			div.className = "hero-section svelte-15w0prb";
			add_location(div, file, 46, 0, 795);
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["posts", "postsPerPage"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Routes> was created without expected prop 'posts'");
		}
		if (ctx.postsPerPage === undefined && !('postsPerPage' in props)) {
			console.warn("<Routes> was created without expected prop 'postsPerPage'");
		}
	}

	get posts() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get postsPerPage() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set postsPerPage(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjRjNTUzNzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaW5kZXguanNvbmApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzLnN2ZWx0ZSc7XG4gIGltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5zdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgcG9zdHNQZXJQYWdlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAuaGVyby1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHJlbSAycmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICB9XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsaW5lLWhlaWdodDogNC41cmVtO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5oZXJvLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+U3R1bm5pbmcgVGhlbWU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImhlcm8tc2VjdGlvblwiPlxuICA8aDE+U3R1bm5pbmcgU2FwcGVyIEJsb2cgdGhlbWUgd2l0aCBzdXBwb3J0IGZvciBtYXJrZG93biBmaWxlczwvaDE+XG4gIDxwPlN0YXJ0IFB1Ymxpc2hpbmcgV2l0aCBTYXBwZXI8L3A+XG48L2Rpdj5cblxuPFBvc3RzIHtwb3N0c30gbGltaXQ9e3Bvc3RzUGVyUGFnZX0gLz5cblxuPEJyZWFkY3J1bWIgaXNGaXJzdD17dHJ1ZX0gaXNMYXN0PXtwb3N0c1BlclBhZ2UgPiBwb3N0cy5sZW5ndGh9IHBhZ2U9XCIxXCIgLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztzQkFtRFEsS0FBSyxhQUFTLFlBQVk7Ozs7OztXQUViLElBQUk7Y0FBVSxZQUFZLE9BQUcsS0FBSyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUZ0RCxLQUFLO3lEQUFTLFlBQVk7Ozs7OEVBRUMsWUFBWSxPQUFHLEtBQUssQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcERyRCxlQUFlLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQzdDLEVBQUUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMvQyxFQUFJLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUV0QyxFQUFJLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7O0VBT00sTUFBSSxLQUFLLEVBQ0wsd0JBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
