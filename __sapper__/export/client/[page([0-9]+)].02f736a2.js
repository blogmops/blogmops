import{S as s,i as t,s as a,a as i,d as e,h as r,m as n,f as p}from"./internal.2858004e.js";import{P as o,B as g}from"./Breadcrumb.6bbc190a.js";function m(s){var t,a,m,$;document.title=t="Stunning Theme - Page "+s.page;var c=new o({props:{posts:s.posts,limit:2}}),f=new g({props:{isFirst:s.isFirst,isLast:s.isLast,page:s.page}});return{c(){a=i(),c.$$.fragment.c(),m=i(),f.$$.fragment.c()},l(s){a=e(s,"\n\n"),c.$$.fragment.l(s),m=e(s,"\n\n"),f.$$.fragment.l(s)},m(s,t){r(s,a,t),n(c,s,t),r(s,m,t),n(f,s,t),$=!0},p(s,a){$&&!s.page||t===(t="Stunning Theme - Page "+a.page)||(document.title=t);var i={};s.posts&&(i.posts=a.posts),c.$set(i);var e={};s.isFirst&&(e.isFirst=a.isFirst),s.isLast&&(e.isLast=a.isLast),s.page&&(e.page=a.page),f.$set(e)},i(s){$||(c.$$.fragment.i(s),f.$$.fragment.i(s),$=!0)},o(s){c.$$.fragment.o(s),f.$$.fragment.o(s),$=!1},d(s){s&&p(a),c.$destroy(s),s&&p(m),f.$destroy(s)}}}async function $({params:s}){const t=+s.page,a=await this.fetch(t+".json");return{page:t,...await a.json()}}function c(s,t,a){let{posts:i,isFirst:e,isLast:r,page:n}=t;return s.$set=s=>{"posts"in s&&a("posts",i=s.posts),"isFirst"in s&&a("isFirst",e=s.isFirst),"isLast"in s&&a("isLast",r=s.isLast),"page"in s&&a("page",n=s.page)},{posts:i,isFirst:e,isLast:r,page:n}}export default class extends s{constructor(s){super(),t(this,s,c,m,a,["posts","isFirst","isLast","page"])}}export{$ as preload};