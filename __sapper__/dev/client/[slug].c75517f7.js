import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as append_dev, B as set_data_dev, n as noop } from './index.d5c520b0.js';

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

/* src\routes\blog\[slug].svelte generated by Svelte v3.16.7 */
const file = "src\\routes\\blog\\[slug].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div1;
	let h1;
	let t1_value = /*post*/ ctx[0].frontmatter.title + "";
	let t1;
	let t2;
	let p;
	let t3_value = new Date(/*post*/ ctx[0].frontmatter.date).toDateString() + "";
	let t3;
	let t4;
	let t5;
	let t6;
	let img;
	let img_src_value;
	let img_alt_value;
	let t7;
	let div0;
	let raw_value = /*post*/ ctx[0].contentHtml + "";
	document.title = title_value = /*post*/ ctx[0].frontmatter.title;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = text(" ﹒ ");
			t5 = text(/*readingTime*/ ctx[1]);
			t6 = space();
			img = element("img");
			t7 = space();
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			t4 = claim_text(p_nodes, " ﹒ ");
			t5 = claim_text(p_nodes, /*readingTime*/ ctx[1]);
			p_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t7 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-35w4os");
			add_location(h1, file, 83, 2, 1743);
			attr_dev(p, "class", "post-meta svelte-35w4os");
			add_location(p, file, 84, 2, 1779);
			if (img.src !== (img_src_value = /*post*/ ctx[0].frontmatter.preview)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*post*/ ctx[0].frontmatter.title);
			attr_dev(img, "class", "svelte-35w4os");
			add_location(img, file, 87, 2, 1879);
			attr_dev(div0, "class", "content svelte-35w4os");
			add_location(div0, file, 89, 2, 1950);
			attr_dev(div1, "class", "container svelte-35w4os");
			add_location(div1, file, 82, 0, 1717);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(p, t4);
			append_dev(p, t5);
			append_dev(div1, t6);
			append_dev(div1, img);
			append_dev(div1, t7);
			append_dev(div1, div0);
			div0.innerHTML = raw_value;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = /*post*/ ctx[0].frontmatter.title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].frontmatter.title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*post*/ 1 && t3_value !== (t3_value = new Date(/*post*/ ctx[0].frontmatter.date).toDateString() + "")) set_data_dev(t3, t3_value);
			if (dirty & /*readingTime*/ 2) set_data_dev(t5, /*readingTime*/ ctx[1]);

			if (dirty & /*post*/ 1 && img.src !== (img_src_value = /*post*/ ctx[0].frontmatter.preview)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*post*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[0].frontmatter.title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].contentHtml + "")) div0.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
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
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => {
		return { post, readingTimeData, readingTime };
	};

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
		if ("readingTimeData" in $$props) $$invalidate(2, readingTimeData = $$props.readingTimeData);
		if ("readingTime" in $$props) $$invalidate(1, readingTime = $$props.readingTime);
	};

	let readingTimeData;
	let readingTime;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*post*/ 1) {
			 $$invalidate(2, readingTimeData = readingTime$1(post.contentHtml));
		}

		if ($$self.$$.dirty & /*readingTimeData*/ 4) {
			 $$invalidate(1, readingTime = `${Math.ceil(readingTimeData.minutes)} minute${Math.ceil(readingTimeData.minutes) > 1 ? "(s)" : ""} read`);
		}
	};

	return [post, readingTime];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmM3NTUxN2Y3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2xpYi9yZWFkaW5nLXRpbWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiByZWFkaW5nLXRpbWVcbiAqIENvcHlyaWdodCAoYykgTmljb2xhcyBHcnltYW4gPG5ncnltYW5AZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGFuc2lXb3JkQm91bmQoYykge1xuICByZXR1cm4gKFxuICAgICgnICcgPT09IGMpIHx8XG4gICAgKCdcXG4nID09PSBjKSB8fFxuICAgICgnXFxyJyA9PT0gYykgfHxcbiAgICAoJ1xcdCcgPT09IGMpXG4gIClcbn1cblxuZnVuY3Rpb24gcmVhZGluZ1RpbWUodGV4dCwgb3B0aW9ucykge1xuICB2YXIgd29yZHMgPSAwLCBzdGFydCA9IDAsIGVuZCA9IHRleHQubGVuZ3RoIC0gMSwgd29yZEJvdW5kLCBpXG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICAvLyB1c2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gIG9wdGlvbnMud29yZHNQZXJNaW51dGUgPSBvcHRpb25zLndvcmRzUGVyTWludXRlIHx8IDIwMFxuXG4gIC8vIHVzZSBwcm92aWRlZCBmdW5jdGlvbiBpZiBhdmFpbGFibGVcbiAgd29yZEJvdW5kID0gb3B0aW9ucy53b3JkQm91bmQgfHwgYW5zaVdvcmRCb3VuZFxuXG4gIC8vIGZldGNoIGJvdW5kc1xuICB3aGlsZSAod29yZEJvdW5kKHRleHRbc3RhcnRdKSkgc3RhcnQrK1xuICB3aGlsZSAod29yZEJvdW5kKHRleHRbZW5kXSkpIGVuZC0tXG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygd29yZHNcbiAgZm9yIChpID0gc3RhcnQ7IGkgPD0gZW5kOykge1xuICAgIGZvciAoOyBpIDw9IGVuZCAmJiAhd29yZEJvdW5kKHRleHRbaV0pOyBpKyspIDtcbiAgICB3b3JkcysrXG4gICAgZm9yICg7IGkgPD0gZW5kICYmIHdvcmRCb3VuZCh0ZXh0W2ldKTsgaSsrKSA7XG4gIH1cblxuICAvLyByZWFkaW5nIHRpbWUgc3RhdHNcbiAgdmFyIG1pbnV0ZXMgPSB3b3JkcyAvIG9wdGlvbnMud29yZHNQZXJNaW51dGVcbiAgdmFyIHRpbWUgPSBtaW51dGVzICogNjAgKiAxMDAwXG4gIHZhciBkaXNwbGF5ZWQgPSBNYXRoLmNlaWwobWludXRlcy50b0ZpeGVkKDIpKVxuXG4gIHJldHVybiB7XG4gICAgdGV4dDogZGlzcGxheWVkICsgJyBtaW4gcmVhZCcsXG4gICAgbWludXRlczogbWludXRlcyxcbiAgICB0aW1lOiB0aW1lLFxuICAgIHdvcmRzOiB3b3Jkc1xuICB9XG59XG5cbi8qKlxuICogRXhwb3J0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVhZGluZ1RpbWVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmVhZGluZy10aW1lJyk7XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlZmF1bHQgYXMgcmVhZGluZ1RpbWVDYWxjdWxhdG9yIH0gZnJvbSAncmVhZGluZy10aW1lJztcbiAgZXhwb3J0IGxldCBwb3N0O1xuXG4gICQ6IHJlYWRpbmdUaW1lRGF0YSA9IHJlYWRpbmdUaW1lQ2FsY3VsYXRvcihwb3N0LmNvbnRlbnRIdG1sKTtcbiAgJDogcmVhZGluZ1RpbWUgPSBgJHtNYXRoLmNlaWwocmVhZGluZ1RpbWVEYXRhLm1pbnV0ZXMpfSBtaW51dGUke1xuICAgIE1hdGguY2VpbChyZWFkaW5nVGltZURhdGEubWludXRlcykgPiAxID8gJyhzKScgOiAnJ1xuICB9IHJlYWRgO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4yNSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4yNSk7XG4gICAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZS1pbiBhbGw7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5wb3N0LW1ldGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIDpnbG9iYWwoaDIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIDpnbG9iYWwocHJlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIDpnbG9iYWwoY29kZSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Z2xvYmFsKHVsKSB7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgOmdsb2JhbChsaSkge1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGgxPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gIDxwIGNsYXNzPVwicG9zdC1tZXRhXCI+XG4gICAge25ldyBEYXRlKHBvc3QuZnJvbnRtYXR0ZXIuZGF0ZSkudG9EYXRlU3RyaW5nKCl9IO+5kiB7cmVhZGluZ1RpbWV9XG4gIDwvcD5cbiAgPGltZyBzcmM9e3Bvc3QuZnJvbnRtYXR0ZXIucHJldmlld30gYWx0PXtwb3N0LmZyb250bWF0dGVyLnRpdGxlfSAvPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAge0BodG1sIHBvc3QuY29udGVudEh0bWx9XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInJlYWRpbmdUaW1lQ2FsY3VsYXRvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7QUFDMUIsRUFBRTtBQUNGLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNkLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQztBQUNoQixLQUFLLElBQUksS0FBSyxDQUFDLENBQUM7QUFDaEIsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3BDLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFDO0FBQy9EO0FBQ0EsRUFBRSxPQUFPLEdBQUcsT0FBTyxJQUFJLEdBQUU7QUFDekI7QUFDQTtBQUNBLEVBQUUsT0FBTyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUc7QUFDeEQ7QUFDQTtBQUNBLEVBQUUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksY0FBYTtBQUNoRDtBQUNBO0FBQ0EsRUFBRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUU7QUFDeEMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUU7QUFDcEM7QUFDQTtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUc7QUFDN0IsSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFB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
