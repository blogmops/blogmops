import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, J as destroy_each, l as toggle_class } from './index.d5c520b0.js';

/* src\components\Posts.svelte generated by Svelte v3.16.7 */

const file = "src\\components\\Posts.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (63:6) {#if post.frontmatter.preview}
function create_if_block(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*post*/ ctx[3].frontmatter.preview)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "image svelte-p87h3e");
			attr_dev(img, "alt", img_alt_value = /*post*/ ctx[3].frontmatter.title);
			add_location(img, file, 63, 8, 1271);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*postsToDisplay*/ 1 && img.src !== (img_src_value = /*post*/ ctx[3].frontmatter.preview)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*postsToDisplay*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[3].frontmatter.title)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(63:6) {#if post.frontmatter.preview}",
		ctx
	});

	return block;
}

// (61:2) {#each postsToDisplay as post}
function create_each_block(ctx) {
	let a;
	let t0;
	let h2;
	let t1_value = /*post*/ ctx[3].frontmatter.title + "";
	let t1;
	let t2;
	let div;
	let t3_value = /*post*/ ctx[3].frontmatter.excerpt + "";
	let t3;
	let t4;
	let a_href_value;
	let if_block = /*post*/ ctx[3].frontmatter.preview && create_if_block(ctx);

	const block = {
		c: function create() {
			a = element("a");
			if (if_block) if_block.c();
			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			t3 = text(t3_value);
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			if (if_block) if_block.l(a_nodes);
			t0 = claim_space(a_nodes);
			h2 = claim_element(a_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(a_nodes);
			div = claim_element(a_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t3 = claim_text(div_nodes, t3_value);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-p87h3e");
			add_location(h2, file, 65, 6, 1373);
			attr_dev(div, "class", "description svelte-p87h3e");
			add_location(div, file, 66, 6, 1413);
			attr_dev(a, "class", "post svelte-p87h3e");
			attr_dev(a, "href", a_href_value = "/blog/" + /*post*/ ctx[3].slug);
			add_location(a, file, 61, 4, 1184);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			if (if_block) if_block.m(a, null);
			append_dev(a, t0);
			append_dev(a, h2);
			append_dev(h2, t1);
			append_dev(a, t2);
			append_dev(a, div);
			append_dev(div, t3);
			append_dev(a, t4);
		},
		p: function update(ctx, dirty) {
			if (/*post*/ ctx[3].frontmatter.preview) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(a, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*postsToDisplay*/ 1 && t1_value !== (t1_value = /*post*/ ctx[3].frontmatter.title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*postsToDisplay*/ 1 && t3_value !== (t3_value = /*post*/ ctx[3].frontmatter.excerpt + "")) set_data_dev(t3, t3_value);

			if (dirty & /*postsToDisplay*/ 1 && a_href_value !== (a_href_value = "/blog/" + /*post*/ ctx[3].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(61:2) {#each postsToDisplay as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let each_value = /*postsToDisplay*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "posts svelte-p87h3e");
			add_location(div, file, 59, 0, 1127);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*postsToDisplay*/ 1) {
				each_value = /*postsToDisplay*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { limit = -1 } = $$props;
	const writable_props = ["posts", "limit"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Posts> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(1, posts = $$props.posts);
		if ("limit" in $$props) $$invalidate(2, limit = $$props.limit);
	};

	$$self.$capture_state = () => {
		return { posts, limit, postsToDisplay };
	};

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(1, posts = $$props.posts);
		if ("limit" in $$props) $$invalidate(2, limit = $$props.limit);
		if ("postsToDisplay" in $$props) $$invalidate(0, postsToDisplay = $$props.postsToDisplay);
	};

	let postsToDisplay;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*posts, limit*/ 6) {
			 $$invalidate(0, postsToDisplay = posts ? posts.slice(0, limit) : []);
		}
	};

	return [postsToDisplay, posts, limit];
}

class Posts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 1, limit: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Posts",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*posts*/ ctx[1] === undefined && !("posts" in props)) {
			console.warn("<Posts> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Posts>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Posts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get limit() {
		throw new Error("<Posts>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set limit(value) {
		throw new Error("<Posts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\Breadcrumb.svelte generated by Svelte v3.16.7 */

const file$1 = "src\\components\\Breadcrumb.svelte";

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let a0;
	let t0;
	let a0_href_value;
	let t1;
	let a1;
	let t2;
	let a1_href_value;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			a0 = element("a");
			t0 = text("Previous Page");
			t1 = space();
			a1 = element("a");
			t2 = text("Next Page");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Previous Page");
			a0_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "Next Page");
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", a0_href_value = "/" + (!/*isFirst*/ ctx[0]
			? /*currentPage*/ ctx[2] === 2
				? ""
				: /*currentPage*/ ctx[2] - 1
			: ""));

			attr_dev(a0, "class", "svelte-lta57");
			toggle_class(a0, "disabled", /*isFirst*/ ctx[0]);
			add_location(a0, file$1, 36, 4, 695);
			attr_dev(a1, "href", a1_href_value = "/" + (!/*isLast*/ ctx[1] ? /*currentPage*/ ctx[2] + 1 : ""));
			attr_dev(a1, "class", "svelte-lta57");
			toggle_class(a1, "disabled", /*isLast*/ ctx[1]);
			add_location(a1, file$1, 41, 4, 838);
			attr_dev(div0, "class", "pagination svelte-lta57");
			add_location(div0, file$1, 35, 2, 666);
			attr_dev(div1, "class", "pagination-container svelte-lta57");
			add_location(div1, file$1, 34, 0, 629);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, a0);
			append_dev(a0, t0);
			append_dev(div0, t1);
			append_dev(div0, a1);
			append_dev(a1, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*isFirst, currentPage*/ 5 && a0_href_value !== (a0_href_value = "/" + (!/*isFirst*/ ctx[0]
			? /*currentPage*/ ctx[2] === 2
				? ""
				: /*currentPage*/ ctx[2] - 1
			: ""))) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*isFirst*/ 1) {
				toggle_class(a0, "disabled", /*isFirst*/ ctx[0]);
			}

			if (dirty & /*isLast, currentPage*/ 6 && a1_href_value !== (a1_href_value = "/" + (!/*isLast*/ ctx[1] ? /*currentPage*/ ctx[2] + 1 : ""))) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*isLast*/ 2) {
				toggle_class(a1, "disabled", /*isLast*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { isFirst } = $$props;
	let { isLast } = $$props;
	let { page } = $$props;
	const writable_props = ["isFirst", "isLast", "page"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Breadcrumb> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("isFirst" in $$props) $$invalidate(0, isFirst = $$props.isFirst);
		if ("isLast" in $$props) $$invalidate(1, isLast = $$props.isLast);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
	};

	$$self.$capture_state = () => {
		return { isFirst, isLast, page, currentPage };
	};

	$$self.$inject_state = $$props => {
		if ("isFirst" in $$props) $$invalidate(0, isFirst = $$props.isFirst);
		if ("isLast" in $$props) $$invalidate(1, isLast = $$props.isLast);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("currentPage" in $$props) $$invalidate(2, currentPage = $$props.currentPage);
	};

	let currentPage;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*page*/ 8) {
			 $$invalidate(2, currentPage = Number(page));
		}
	};

	return [isFirst, isLast, currentPage, page];
}

class Breadcrumb extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { isFirst: 0, isLast: 1, page: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Breadcrumb",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*isFirst*/ ctx[0] === undefined && !("isFirst" in props)) {
			console.warn("<Breadcrumb> was created without expected prop 'isFirst'");
		}

		if (/*isLast*/ ctx[1] === undefined && !("isLast" in props)) {
			console.warn("<Breadcrumb> was created without expected prop 'isLast'");
		}

		if (/*page*/ ctx[3] === undefined && !("page" in props)) {
			console.warn("<Breadcrumb> was created without expected prop 'page'");
		}
	}

	get isFirst() {
		throw new Error("<Breadcrumb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFirst(value) {
		throw new Error("<Breadcrumb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isLast() {
		throw new Error("<Breadcrumb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isLast(value) {
		throw new Error("<Breadcrumb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get page() {
		throw new Error("<Breadcrumb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set page(value) {
		throw new Error("<Breadcrumb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Breadcrumb as B, Posts as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlYWRjcnVtYi4wMmFmYWQ2Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUG9zdHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBwb3N0cztcbiAgZXhwb3J0IGxldCBsaW1pdCA9IC0xO1xuXG4gICQ6IHBvc3RzVG9EaXNwbGF5ID0gcG9zdHMgPyBwb3N0cy5zbGljZSgwLCBsaW1pdCkgOiBbXTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLnBvc3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgfVxuICAucG9zdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIC5pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjI1KTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMjUpO1xuICAgICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1pbiBhbGw7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4yNSk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnBvc3RzIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAucG9zdDpudGgtY2hpbGQoNG4gKyAxKSxcbiAgICAucG9zdDpudGgtY2hpbGQoNG4gKyAyKSxcbiAgICAucG9zdDpudGgtY2hpbGQoNG4gKyAzKSxcbiAgICAucG9zdDpudGgtY2hpbGQoNG4gKyA0KSB7XG4gICAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInBvc3RzXCI+XG4gIHsjZWFjaCBwb3N0c1RvRGlzcGxheSBhcyBwb3N0fVxuICAgIDxhIGNsYXNzPVwicG9zdFwiIGhyZWY9XCIvYmxvZy97cG9zdC5zbHVnfVwiPlxuICAgICAgeyNpZiBwb3N0LmZyb250bWF0dGVyLnByZXZpZXd9XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmZyb250bWF0dGVyLnByZXZpZXd9IGNsYXNzPVwiaW1hZ2VcIiBhbHQ9XCJ7cG9zdC5mcm9udG1hdHRlci50aXRsZX1cIiAvPlxuICAgICAgey9pZn1cbiAgICAgIDxoMj57cG9zdC5mcm9udG1hdHRlci50aXRsZX08L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3Bvc3QuZnJvbnRtYXR0ZXIuZXhjZXJwdH08L2Rpdj5cbiAgICA8L2E+XG4gIHsvZWFjaH1cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBpc0ZpcnN0O1xuICBleHBvcnQgbGV0IGlzTGFzdDtcbiAgZXhwb3J0IGxldCBwYWdlO1xuXG4gICQ6IGN1cnJlbnRQYWdlID0gTnVtYmVyKHBhZ2UpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAucGFnaW5hdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgIH1cbiAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgIDxhXG4gICAgICBjbGFzczpkaXNhYmxlZD17aXNGaXJzdH1cbiAgICAgIGhyZWY9XCIveyFpc0ZpcnN0ID8gKGN1cnJlbnRQYWdlID09PSAyID8gJycgOiBjdXJyZW50UGFnZSAtIDEpIDogJyd9XCI+XG4gICAgICBQcmV2aW91cyBQYWdlXG4gICAgPC9hPlxuICAgIDxhIGNsYXNzOmRpc2FibGVkPXtpc0xhc3R9IGhyZWY9XCIveyFpc0xhc3QgPyBjdXJyZW50UGFnZSArIDEgOiAnJ31cIj5cbiAgICAgIE5leHQgUGFnZVxuICAgIDwvYT5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQStEa0IsR0FBSSxJQUFDLFdBQVcsQ0FBQyxPQUFPOztpREFBc0IsR0FBSSxJQUFDLFdBQVcsQ0FBQyxLQUFLOzs7Ozs7OzZFQUFwRSxHQUFJLElBQUMsV0FBVyxDQUFDLE9BQU87Ozs7bUZBQXNCLEdBQUksSUFBQyxXQUFXLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFFM0UsR0FBSSxJQUFDLFdBQVcsQ0FBQyxLQUFLOzs7O3lCQUNELEdBQUksSUFBQyxXQUFXLENBQUMsT0FBTzs7Ozt5QkFKN0MsR0FBSSxJQUFDLFdBQVcsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBREYsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7OztnQkFDL0IsR0FBSSxJQUFDLFdBQVcsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7O3lFQUd4QixHQUFJLElBQUMsV0FBVyxDQUFDLEtBQUs7eUVBQ0QsR0FBSSxJQUFDLFdBQVcsQ0FBQyxPQUFPOzs0RkFMdkIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQURqQyxHQUFjOzs7Z0NBQW5CLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUFDLEdBQWM7OzsrQkFBbkIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTNESyxLQUFLO09BQ0wsS0FBSyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUVsQixjQUFjLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQ2tDbkMsR0FBTztxQkFBSSxHQUFXLFFBQUssQ0FBQztNQUFHLEVBQUU7c0JBQUcsR0FBVyxNQUFHLENBQUM7S0FBSSxFQUFFOzs7NENBRGxELEdBQU87OzJEQUlXLEdBQU0sc0JBQUcsR0FBVyxNQUFHLENBQUMsR0FBRyxFQUFFOzsyQ0FBOUMsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBSGQsR0FBTztxQkFBSSxHQUFXLFFBQUssQ0FBQztNQUFHLEVBQUU7c0JBQUcsR0FBVyxNQUFHLENBQUM7S0FBSSxFQUFFOzs7Ozs2Q0FEbEQsR0FBTzs7O2tHQUlXLEdBQU0sc0JBQUcsR0FBVyxNQUFHLENBQUMsR0FBRyxFQUFFOzs7Ozs0Q0FBOUMsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXhDaEIsT0FBTztPQUNQLE1BQU07T0FDTixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRWYsaUJBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
