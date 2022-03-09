import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, g as add_location, j as insert, k as append, q as set_data, n as noop } from './internal.2ee3a6ff.js';

/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

function ansiWordBound(c) {
  return (
    (' ' === c) ||
    ('\n' === c) ||
    ('\r' === c) ||
    ('\t' === c)
  )
}

function readingTime(text, options) {
  var words = 0, start = 0, end = text.length - 1, wordBound, i;

  options = options || {};

  // use default values if necessary
  options.wordsPerMinute = options.wordsPerMinute || 200;

  // use provided function if available
  wordBound = options.wordBound || ansiWordBound;

  // fetch bounds
  while (wordBound(text[start])) start++;
  while (wordBound(text[end])) end--;

  // calculate the number of words
  for (i = start; i <= end;) {
    for (; i <= end && !wordBound(text[i]); i++) ;
    words++;
    for (; i <= end && wordBound(text[i]); i++) ;
  }

  // reading time stats
  var minutes = words / options.wordsPerMinute;
  var time = minutes * 60 * 1000;
  var displayed = Math.ceil(minutes.toFixed(2));

  return {
    text: displayed + ' min read',
    minutes: minutes,
    time: time,
    words: words
  }
}

/**
 * Export
 */
var readingTime_1 = readingTime;

var readingTime$1 = readingTime_1;

/* src\routes\blog\[slug].svelte generated by Svelte v3.0.1 */

const file = "src\\routes\\blog\\[slug].svelte";

function create_fragment(ctx) {
	var title_value, t0, div1, h1, t1_value = ctx.post.frontmatter.title, t1, t2, p, t3_value = new Date(ctx.post.frontmatter.date).toDateString(), t3, t4, t5, t6, img, img_src_value, img_alt_value, t7, div0, raw_value = ctx.post.contentHtml;

	document.title = title_value = ctx.post.frontmatter.title;

	return {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = text(" ﹒ ");
			t5 = text(ctx.readingTime);
			t6 = space();
			img = element("img");
			t7 = space();
			div0 = element("div");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			h1 = claim_element(div1_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach);
			t2 = claim_text(div1_nodes, "\n  ");

			p = claim_element(div1_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, t3_value);
			t4 = claim_text(p_nodes, " ﹒ ");
			t5 = claim_text(p_nodes, ctx.readingTime);
			p_nodes.forEach(detach);
			t6 = claim_text(div1_nodes, "\n  ");

			img = claim_element(div1_nodes, "IMG", { src: true, class: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			t7 = claim_text(div1_nodes, "\n\n  ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "svelte-10h0ygf";
			add_location(h1, file, 70, 2, 1451);
			p.className = "post-meta svelte-10h0ygf";
			add_location(p, file, 71, 2, 1487);
			img.src = img_src_value = ctx.post.frontmatter.preview;
			img.className = "image";
			img.alt = img_alt_value = ctx.post.frontmatter.title;
			add_location(img, file, 74, 2, 1587);
			div0.className = "content svelte-10h0ygf";
			add_location(div0, file, 76, 2, 1672);
			div1.className = "container svelte-10h0ygf";
			add_location(div1, file, 69, 0, 1425);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div1, anchor);
			append(div1, h1);
			append(h1, t1);
			append(div1, t2);
			append(div1, p);
			append(p, t3);
			append(p, t4);
			append(p, t5);
			append(div1, t6);
			append(div1, img);
			append(div1, t7);
			append(div1, div0);
			div0.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.frontmatter.title)) {
				document.title = title_value;
			}

			if ((changed.post) && t1_value !== (t1_value = ctx.post.frontmatter.title)) {
				set_data(t1, t1_value);
			}

			if ((changed.post) && t3_value !== (t3_value = new Date(ctx.post.frontmatter.date).toDateString())) {
				set_data(t3, t3_value);
			}

			if (changed.readingTime) {
				set_data(t5, ctx.readingTime);
			}

			if ((changed.post) && img_src_value !== (img_src_value = ctx.post.frontmatter.preview)) {
				img.src = img_src_value;
			}

			if ((changed.post) && img_alt_value !== (img_alt_value = ctx.post.frontmatter.title)) {
				img.alt = img_alt_value;
			}

			if ((changed.post) && raw_value !== (raw_value = ctx.post.contentHtml)) {
				div0.innerHTML = raw_value;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div1);
			}
		}
	};
}

async function preload({ params, query }) {
  const res = await this.fetch(`blog/${params.slug}.json`);
  const data = await res.json();

  if (res.status === 200) {
    return { post: data };
  } else {
    this.error(res.status, data.message);
  }
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;

	$$self.$set = $$props => {
		if ('post' in $$props) $$invalidate('post', post = $$props.post);
	};

	let readingTimeData, readingTime;
	$$self.$$.update = ($$dirty = { post: 1, readingTimeData: 1 }) => {
		if ($$dirty.post) { $$invalidate('readingTimeData', readingTimeData = readingTime$1(post.contentHtml)); }
		if ($$dirty.readingTimeData) { $$invalidate('readingTime', readingTime = `${Math.ceil(readingTimeData.minutes)} minute${
        Math.ceil(readingTimeData.minutes) > 1 ? '(s)' : ''
      } read`); }
	};

	return { post, readingTime };
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["post"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.post === undefined && !('post' in props)) {
			console.warn("<Slug> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjI5ZTNmYTBiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2xpYi9yZWFkaW5nLXRpbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiByZWFkaW5nLXRpbWVcbiAqIENvcHlyaWdodCAoYykgTmljb2xhcyBHcnltYW4gPG5ncnltYW5AZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGFuc2lXb3JkQm91bmQoYykge1xuICByZXR1cm4gKFxuICAgICgnICcgPT09IGMpIHx8XG4gICAgKCdcXG4nID09PSBjKSB8fFxuICAgICgnXFxyJyA9PT0gYykgfHxcbiAgICAoJ1xcdCcgPT09IGMpXG4gIClcbn1cblxuZnVuY3Rpb24gcmVhZGluZ1RpbWUodGV4dCwgb3B0aW9ucykge1xuICB2YXIgd29yZHMgPSAwLCBzdGFydCA9IDAsIGVuZCA9IHRleHQubGVuZ3RoIC0gMSwgd29yZEJvdW5kLCBpXG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICAvLyB1c2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gIG9wdGlvbnMud29yZHNQZXJNaW51dGUgPSBvcHRpb25zLndvcmRzUGVyTWludXRlIHx8IDIwMFxuXG4gIC8vIHVzZSBwcm92aWRlZCBmdW5jdGlvbiBpZiBhdmFpbGFibGVcbiAgd29yZEJvdW5kID0gb3B0aW9ucy53b3JkQm91bmQgfHwgYW5zaVdvcmRCb3VuZFxuXG4gIC8vIGZldGNoIGJvdW5kc1xuICB3aGlsZSAod29yZEJvdW5kKHRleHRbc3RhcnRdKSkgc3RhcnQrK1xuICB3aGlsZSAod29yZEJvdW5kKHRleHRbZW5kXSkpIGVuZC0tXG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygd29yZHNcbiAgZm9yIChpID0gc3RhcnQ7IGkgPD0gZW5kOykge1xuICAgIGZvciAoOyBpIDw9IGVuZCAmJiAhd29yZEJvdW5kKHRleHRbaV0pOyBpKyspIDtcbiAgICB3b3JkcysrXG4gICAgZm9yICg7IGkgPD0gZW5kICYmIHdvcmRCb3VuZCh0ZXh0W2ldKTsgaSsrKSA7XG4gIH1cblxuICAvLyByZWFkaW5nIHRpbWUgc3RhdHNcbiAgdmFyIG1pbnV0ZXMgPSB3b3JkcyAvIG9wdGlvbnMud29yZHNQZXJNaW51dGVcbiAgdmFyIHRpbWUgPSBtaW51dGVzICogNjAgKiAxMDAwXG4gIHZhciBkaXNwbGF5ZWQgPSBNYXRoLmNlaWwobWludXRlcy50b0ZpeGVkKDIpKVxuXG4gIHJldHVybiB7XG4gICAgdGV4dDogZGlzcGxheWVkICsgJyBtaW4gcmVhZCcsXG4gICAgbWludXRlczogbWludXRlcyxcbiAgICB0aW1lOiB0aW1lLFxuICAgIHdvcmRzOiB3b3Jkc1xuICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVhZGluZ1RpbWVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmVhZGluZy10aW1lJyk7XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlZmF1bHQgYXMgcmVhZGluZ1RpbWVDYWxjdWxhdG9yIH0gZnJvbSAncmVhZGluZy10aW1lJztcbiAgZXhwb3J0IGxldCBwb3N0O1xuXG4gICQ6IHJlYWRpbmdUaW1lRGF0YSA9IHJlYWRpbmdUaW1lQ2FsY3VsYXRvcihwb3N0LmNvbnRlbnRIdG1sKTtcbiAgJDogcmVhZGluZ1RpbWUgPSBgJHtNYXRoLmNlaWwocmVhZGluZ1RpbWVEYXRhLm1pbnV0ZXMpfSBtaW51dGUke1xuICAgIE1hdGguY2VpbChyZWFkaW5nVGltZURhdGEubWludXRlcykgPiAxID8gJyhzKScgOiAnJ1xuICB9IHJlYWRgO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucG9zdC1tZXRhIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICA6Z2xvYmFsKGgyKSB7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICA6Z2xvYmFsKHByZSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICA6Z2xvYmFsKGNvZGUpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOmdsb2JhbCh1bCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIDpnbG9iYWwobGkpIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxoMT57cG9zdC5mcm9udG1hdHRlci50aXRsZX08L2gxPlxuICA8cCBjbGFzcz1cInBvc3QtbWV0YVwiPlxuICAgIHtuZXcgRGF0ZShwb3N0LmZyb250bWF0dGVyLmRhdGUpLnRvRGF0ZVN0cmluZygpfSDvuZIge3JlYWRpbmdUaW1lfVxuICA8L3A+XG4gIDxpbWcgc3JjPXtwb3N0LmZyb250bWF0dGVyLnByZXZpZXd9IGNsYXNzPVwiaW1hZ2VcIiBhbHQ9e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9IC8+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICB7QGh0bWwgcG9zdC5jb250ZW50SHRtbH1cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVhZGluZ1RpbWVDYWxjdWxhdG9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBLEFBRUE7QUFDQSxTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7RUFDeEI7SUFDRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQztLQUNYLElBQUksS0FBSyxDQUFDLENBQUM7S0FDWCxJQUFJLEtBQUssQ0FBQyxDQUFDO0dBQ2I7Q0FDRjs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0VB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