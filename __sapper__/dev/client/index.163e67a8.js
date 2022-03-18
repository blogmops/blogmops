import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, c as claim_text, b as claim_element, d as children, f as detach, g as add_location, h as insert, j as append, m as mount_component } from './client.13f63a07.js';
import { P as Posts, B as Breadcrumb } from './Breadcrumb.42456694.js';

/* src/routes/index.svelte generated by Svelte v3.0.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, section, h1, t1, t2, h2, t3, t4, t5, current;

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
			section = element("section");
			h1 = element("h1");
			t1 = text("Hi, I'm Oskar the pug!");
			t2 = space();
			h2 = element("h2");
			t3 = text("Welcome to my blog");
			t4 = space();
			posts_1.$$.fragment.c();
			t5 = space();
			breadcrumb.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			h1 = claim_element(section_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Hi, I'm Oskar the pug!");
			h1_nodes.forEach(detach);
			t2 = claim_text(section_nodes, "\n  ");

			h2 = claim_element(section_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t3 = claim_text(h2_nodes, "Welcome to my blog");
			h2_nodes.forEach(detach);
			t4 = claim_text(section_nodes, "\n\n  ");
			posts_1.$$.fragment.l(section_nodes);
			t5 = claim_text(section_nodes, "\n\n  ");
			breadcrumb.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "blogmops";
			h1.className = "svelte-170wija";
			add_location(h1, file, 88, 2, 1665);
			h2.className = "h4";
			add_location(h2, file, 89, 2, 1699);
			section.className = "svelte-170wija";
			add_location(section, file, 87, 0, 1653);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, section, anchor);
			append(section, h1);
			append(h1, t1);
			append(section, t2);
			append(section, h2);
			append(h2, t3);
			append(section, t4);
			mount_component(posts_1, section, null);
			append(section, t5);
			mount_component(breadcrumb, section, null);
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
				detach(section);
			}

			posts_1.$destroy();

			breadcrumb.$destroy();
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

export { Index as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTYzZTY3YTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaW5kZXguanNvbmApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzLnN2ZWx0ZSc7XG4gIGltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5zdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgcG9zdHNQZXJQYWdlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAbWl4aW4gaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjI1KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjI1KTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBlYXNlLWluIGFsbDtcbiAgICBtYXgtaGVpZ2h0OiA1NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMjUpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICB9XG4gIDpnbG9iYWwoLmNvbnRhaW5lcikge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgOmdsb2JhbChwcmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgOmdsb2JhbChjb2RlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICA6Z2xvYmFsKHVsKSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICA6Z2xvYmFsKGxpKSB7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgfVxuICA6Z2xvYmFsKGltZyk6bm90KC5sb2dvIGltZyksXG4gIDpnbG9iYWwoLmltYWdlKTpub3QoLmxvZ28gaW1nKSB7XG4gICAgQGluY2x1ZGUgaW1hZ2U7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gICAgbWF4LXdpZHRoOiA1NyU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+YmxvZ21vcHM8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxoMT5IaSwgSSdtIE9za2FyIHRoZSBwdWchPC9oMT5cbiAgPGgyIGNsYXNzPVwiaDRcIj5XZWxjb21lIHRvIG15IGJsb2c8L2gyPlxuXG4gIDxQb3N0cyB7cG9zdHN9IGxpbWl0PXtwb3N0c1BlclBhZ2V9IC8+XG5cbiAgPEJyZWFkY3J1bWIgaXNGaXJzdD17dHJ1ZX0gaXNMYXN0PXtwb3N0c1BlclBhZ2UgPiBwb3N0cy5sZW5ndGh9IHBhZ2U9XCIxXCIgLz5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7YUEyRlUsS0FBSzthQUFTLFlBQVk7Ozs7Ozs7V0FFYixJQUFJO2NBQVUsWUFBWSxHQUFBLEdBQUEsQ0FBRyxLQUFLLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUZ0RCxLQUFLLENBQUE7eURBQVMsWUFBWSxDQUFBOzs7OzhFQUVDLFlBQVksR0FBQSxHQUFBLENBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1RnZELGVBQWUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDN0MsRUFBRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQy9DLEVBQUksTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRXRDLEVBQUksT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7O0FBS3dEOztBQUV6RCxFQUFPLElBQUksRUFBQSxLQUFLLEVBQ0wsWUFBQSxFQUFBLEdBQUEsT0FBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
