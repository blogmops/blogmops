import{S as s,i as t,s as a,a as i,d as e,h as r,m as n,f as p}from"./internal.6ac0ae1a.js";import{P as o,B as g}from"./Breadcrumb.aeb7f36a.js";function $(s){var t,a,$,m;document.title=t="Stunning Theme - Page "+s.page;var f=new o({props:{posts:s.posts,limit:4}}),c=new g({props:{isFirst:s.isFirst,isLast:s.isLast,page:s.page}});return{c(){a=i(),f.$$.fragment.c(),$=i(),c.$$.fragment.c()},l(s){a=e(s,"\n\n"),f.$$.fragment.l(s),$=e(s,"\n\n"),c.$$.fragment.l(s)},m(s,t){r(s,a,t),n(f,s,t),r(s,$,t),n(c,s,t),m=!0},p(s,a){m&&!s.page||t===(t="Stunning Theme - Page "+a.page)||(document.title=t);var i={};s.posts&&(i.posts=a.posts),f.$set(i);var e={};s.isFirst&&(e.isFirst=a.isFirst),s.isLast&&(e.isLast=a.isLast),s.page&&(e.page=a.page),c.$set(e)},i(s){m||(f.$$.fragment.i(s),c.$$.fragment.i(s),m=!0)},o(s){f.$$.fragment.o(s),c.$$.fragment.o(s),m=!1},d(s){s&&p(a),f.$destroy(s),s&&p($),c.$destroy(s)}}}async function m({params:s}){const t=+s.page,a=await this.fetch(`${t}.json`);return{page:t,...await a.json()}}function f(s,t,a){let{posts:i,isFirst:e,isLast:r,page:n}=t;return s.$set=s=>{"posts"in s&&a("posts",i=s.posts),"isFirst"in s&&a("isFirst",e=s.isFirst),"isLast"in s&&a("isLast",r=s.isLast),"page"in s&&a("page",n=s.page)},{posts:i,isFirst:e,isLast:r,page:n}}export default class extends s{constructor(s){super(),t(this,s,f,$,a,["posts","isFirst","isLast","page"])}}export{m as preload};
