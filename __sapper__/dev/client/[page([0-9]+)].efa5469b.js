import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, d as claim_text, j as insert, m as mount_component, f as detach } from './internal.0efbe437.js';
import { P as Posts, B as Breadcrumb } from './Breadcrumb.420e57aa.js';

/* src\routes\[page([0-9]+)].svelte generated by Svelte v3.0.0 */

function create_fragment(ctx) {
	var title_value, t0, t1, current;

	document.title = title_value = "Stunning Theme - Page " + ctx.page;

	var posts_1 = new Posts({
		props: { posts: ctx.posts, limit: 4 },
		$$inline: true
	});

	var breadcrumb = new Breadcrumb({
		props: {
		isFirst: ctx.isFirst,
		isLast: ctx.isLast,
		page: ctx.page
	},
		$$inline: true
	});

	return {
		c: function create() {
			t0 = space();
			posts_1.$$.fragment.c();
			t1 = space();
			breadcrumb.$$.fragment.c();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");
			posts_1.$$.fragment.l(nodes);
			t1 = claim_text(nodes, "\n\n");
			breadcrumb.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			mount_component(posts_1, target, anchor);
			insert(target, t1, anchor);
			mount_component(breadcrumb, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.page) && title_value !== (title_value = "Stunning Theme - Page " + ctx.page)) {
				document.title = title_value;
			}

			var posts_1_changes = {};
			if (changed.posts) posts_1_changes.posts = ctx.posts;
			posts_1.$set(posts_1_changes);

			var breadcrumb_changes = {};
			if (changed.isFirst) breadcrumb_changes.isFirst = ctx.isFirst;
			if (changed.isLast) breadcrumb_changes.isLast = ctx.isLast;
			if (changed.page) breadcrumb_changes.page = ctx.page;
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
			}

			posts_1.$destroy(detaching);

			if (detaching) {
				detach(t1);
			}

			breadcrumb.$destroy(detaching);
		}
	};
}

async function preload({ params }) {
  const page = +params.page;

  const res = await this.fetch(`${page}.json`);
  const response = await res.json();

  return {
    page,
    ...response,
  };
}

function instance($$self, $$props, $$invalidate) {
	

  let { posts, isFirst, isLast, page } = $$props;

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
		if ('isFirst' in $$props) $$invalidate('isFirst', isFirst = $$props.isFirst);
		if ('isLast' in $$props) $$invalidate('isLast', isLast = $$props.isLast);
		if ('page' in $$props) $$invalidate('page', page = $$props.page);
	};

	return { posts, isFirst, isLast, page };
}

class Page_0_9 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["posts", "isFirst", "isLast", "page"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Page_0_9> was created without expected prop 'posts'");
		}
		if (ctx.isFirst === undefined && !('isFirst' in props)) {
			console.warn("<Page_0_9> was created without expected prop 'isFirst'");
		}
		if (ctx.isLast === undefined && !('isLast' in props)) {
			console.warn("<Page_0_9> was created without expected prop 'isLast'");
		}
		if (ctx.page === undefined && !('page' in props)) {
			console.warn("<Page_0_9> was created without expected prop 'page'");
		}
	}

	get posts() {
		throw new Error("<Page_0_9>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Page_0_9>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFirst() {
		throw new Error("<Page_0_9>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFirst(value) {
		throw new Error("<Page_0_9>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isLast() {
		throw new Error("<Page_0_9>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isLast(value) {
		throw new Error("<Page_0_9>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get page() {
		throw new Error("<Page_0_9>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set page(value) {
		throw new Error("<Page_0_9>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Page_0_9;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3BhZ2UoWzAtOV0rKV0uZWZhNTQ2OWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvW3BhZ2UoWzAtOV0rKV0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgcGFnZSA9ICtwYXJhbXMucGFnZTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYCR7cGFnZX0uanNvbmApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYWdlLFxuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzLnN2ZWx0ZSc7XG4gIGltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5zdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgcG9zdHM7XG4gIGV4cG9ydCBsZXQgaXNGaXJzdDtcbiAgZXhwb3J0IGxldCBpc0xhc3Q7XG4gIGV4cG9ydCBsZXQgcGFnZTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+U3R1bm5pbmcgVGhlbWUgLSBQYWdlIHtwYWdlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48UG9zdHMge3Bvc3RzfSBsaW1pdD17NH0gLz5cblxuPEJyZWFkY3J1bWIge2lzRmlyc3R9IHtpc0xhc3R9IHtwYWdlfSAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OytEQTZCZ0MsSUFBSTs7O3NCQUc1QixLQUFLLFNBQVMsQ0FBQzs7Ozs7O2VBRVYsT0FBTztjQUFHLE1BQU07WUFBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FMSixJQUFJOzs7OztrREFHNUIsS0FBSzs7Ozt5REFFQSxPQUFPO3VEQUFHLE1BQU07bURBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQzNCLGVBQWUsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDNUMsRUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7O0FBRTVCLEVBQUUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRCxFQUFJLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVwQyxFQUFFLE9BQU87QUFDVCxJQUFJLElBQUk7QUFDVixJQUFNLEdBQUcsUUFBUTtBQUNmLEdBQUcsQ0FBQztBQUNKLENBQUM7Ozs7O0VBT0QsTUFBVyxLQUFLLEVBQ0wsT0FBTyxFQUNQLE1BQU0sRUFDTixnQkFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
