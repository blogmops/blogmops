import{S as s,i as t,s as a,a as e,e as r,t as n,o,g as i,c as p,b as c,d as h,f,p as g,h as l,k as m,l as $,q as u,v as P,w as d,x as w}from"./index.ba28a094.js";import{P as S,B as b}from"./Breadcrumb.c64b3384.js";function v(s){let t,a,v,x,j,B,k,E,L,W;const q=new S({props:{posts:s[0],limit:s[1]}}),y=new b({props:{isFirst:!0,isLast:s[1]>s[0].length,page:"1"}});return{c(){t=e(),a=r("div"),v=r("h1"),x=n("Stunning Sapper Blog theme with support for markdown files"),j=e(),B=r("p"),k=n("Start Publishing With Sapper"),E=e(),o(q.$$.fragment),L=e(),o(y.$$.fragment),this.h()},l(s){t=i(s),a=p(s,"DIV",{class:!0});var e=c(a);v=p(e,"H1",{class:!0});var r=c(v);x=h(r,"Stunning Sapper Blog theme with support for markdown files"),r.forEach(f),j=i(e),B=p(e,"P",{});var n=c(B);k=h(n,"Start Publishing With Sapper"),n.forEach(f),e.forEach(f),E=i(s),g(q.$$.fragment,s),L=i(s),g(y.$$.fragment,s),this.h()},h(){document.title="Stunning Theme",l(v,"class","svelte-15w0prb"),l(a,"class","hero-section svelte-15w0prb")},m(s,e){m(s,t,e),m(s,a,e),$(a,v),$(v,x),$(a,j),$(a,B),$(B,k),m(s,E,e),u(q,s,e),m(s,L,e),u(y,s,e),W=!0},p(s,[t]){const a={};1&t&&(a.posts=s[0]),2&t&&(a.limit=s[1]),q.$set(a);const e={};3&t&&(e.isLast=s[1]>s[0].length),y.$set(e)},i(s){W||(P(q.$$.fragment,s),P(y.$$.fragment,s),W=!0)},o(s){d(q.$$.fragment,s),d(y.$$.fragment,s),W=!1},d(s){s&&f(t),s&&f(a),s&&f(E),w(q,s),s&&f(L),w(y,s)}}}async function x(s,t){const a=await this.fetch("index.json");return await a.json()}function j(s,t,a){let{posts:e}=t,{postsPerPage:r}=t;return s.$set=s=>{"posts"in s&&a(0,e=s.posts),"postsPerPage"in s&&a(1,r=s.postsPerPage)},[e,r]}export default class extends s{constructor(s){super(),t(this,s,j,v,a,{posts:0,postsPerPage:1})}}export{x as preload};
