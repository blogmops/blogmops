import{S as s,i as t,s as a,e,a as r,t as i,c as l,b as o,d as c,f as n,h as p,j as h,p as f,n as m,z as u,g}from"./internal.6ac0ae1a.js";function v(s,t,a){const e=Object.create(s);return e.post=t[a],e}function d(s){var t,a;return{c(){t=e("img"),this.h()},l(s){t=l(s,"IMG",{src:!0,alt:!0,class:!0},!1),o(t).forEach(n),this.h()},h(){t.src=a=s.post.frontmatter.preview,t.alt="",t.className="svelte-1sc0jmh"},m(s,a){p(s,t,a)},p(s,e){s.postsToDisplay&&a!==(a=e.post.frontmatter.preview)&&(t.src=a)},d(s){s&&n(t)}}}function P(s){var t,a,m,u,g,v,P,D,F,L=s.post.frontmatter.title,N=s.post.frontmatter.excerpt,b=s.post.frontmatter.preview&&d(s);return{c(){t=e("a"),b&&b.c(),a=r(),m=e("h2"),u=i(L),g=r(),v=e("div"),P=i(N),D=r(),this.h()},l(s){t=l(s,"A",{class:!0,href:!0},!1);var e=o(t);b&&b.l(e),a=c(e,"\n      "),m=l(e,"H2",{class:!0},!1);var r=o(m);u=c(r,L),r.forEach(n),g=c(e,"\n      "),v=l(e,"DIV",{class:!0},!1);var i=o(v);P=c(i,N),i.forEach(n),D=c(e,"\n    "),e.forEach(n),this.h()},h(){m.className="svelte-1sc0jmh",v.className="description svelte-1sc0jmh",t.className="post svelte-1sc0jmh",t.href=F="/blog/"+s.post.slug},m(s,e){p(s,t,e),b&&b.m(t,null),h(t,a),h(t,m),h(m,u),h(t,g),h(t,v),h(v,P),h(t,D)},p(s,e){e.post.frontmatter.preview?b?b.p(s,e):((b=d(e)).c(),b.m(t,a)):b&&(b.d(1),b=null),s.postsToDisplay&&L!==(L=e.post.frontmatter.title)&&f(u,L),s.postsToDisplay&&N!==(N=e.post.frontmatter.excerpt)&&f(P,N),s.postsToDisplay&&F!==(F="/blog/"+e.post.slug)&&(t.href=F)},d(s){s&&n(t),b&&b.d()}}}function D(s){for(var t,a=s.postsToDisplay,r=[],i=0;i<a.length;i+=1)r[i]=P(v(s,a,i));return{c(){t=e("div");for(var s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=l(s,"DIV",{class:!0},!1);for(var a=o(t),e=0;e<r.length;e+=1)r[e].l(a);a.forEach(n),this.h()},h(){t.className="posts svelte-1sc0jmh"},m(s,a){p(s,t,a);for(var e=0;e<r.length;e+=1)r[e].m(t,null)},p(s,e){if(s.postsToDisplay){a=e.postsToDisplay;for(var i=0;i<a.length;i+=1){const l=v(e,a,i);r[i]?r[i].p(s,l):(r[i]=P(l),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}},i:m,o:m,d(s){s&&n(t),u(r,s)}}}function F(s,t,a){let e,{posts:r,limit:i=-1}=t;return s.$set=s=>{"posts"in s&&a("posts",r=s.posts),"limit"in s&&a("limit",i=s.limit)},s.$$.update=(s={posts:1,limit:1})=>{(s.posts||s.limit)&&a("postsToDisplay",e=r?r.slice(0,i):[])},{posts:r,limit:i,postsToDisplay:e}}class L extends s{constructor(s){super(),t(this,s,F,D,a,["posts","limit"])}}function N(s){var t,a,f,u,v,d,P,D,F;return{c(){t=e("div"),a=e("div"),f=e("a"),u=i("Previous Page"),d=r(),P=e("a"),D=i("Next Page"),this.h()},l(s){t=l(s,"DIV",{class:!0},!1);var e=o(t);a=l(e,"DIV",{class:!0},!1);var r=o(a);f=l(r,"A",{href:!0,class:!0},!1);var i=o(f);u=c(i,"Previous Page"),i.forEach(n),d=c(r,"\n    "),P=l(r,"A",{href:!0,class:!0},!1);var p=o(P);D=c(p,"Next Page"),p.forEach(n),r.forEach(n),e.forEach(n),this.h()},h(){f.href=v="/"+(s.isFirst?"":2===s.currentPage?"":s.currentPage-1),f.className="svelte-lta57",g(f,"disabled",s.isFirst),P.href=F="/"+(s.isLast?"":s.currentPage+1),P.className="svelte-lta57",g(P,"disabled",s.isLast),a.className="pagination svelte-lta57",t.className="pagination-container svelte-lta57"},m(s,e){p(s,t,e),h(t,a),h(a,f),h(f,u),h(a,d),h(a,P),h(P,D)},p(s,t){(s.isFirst||s.currentPage)&&v!==(v="/"+(t.isFirst?"":2===t.currentPage?"":t.currentPage-1))&&(f.href=v),s.isFirst&&g(f,"disabled",t.isFirst),(s.isLast||s.currentPage)&&F!==(F="/"+(t.isLast?"":t.currentPage+1))&&(P.href=F),s.isLast&&g(P,"disabled",t.isLast)},i:m,o:m,d(s){s&&n(t)}}}function b(s,t,a){let e,{isFirst:r,isLast:i,page:l}=t;return s.$set=s=>{"isFirst"in s&&a("isFirst",r=s.isFirst),"isLast"in s&&a("isLast",i=s.isLast),"page"in s&&a("page",l=s.page)},s.$$.update=(s={page:1})=>{s.page&&a("currentPage",e=Number(l))},{isFirst:r,isLast:i,page:l,currentPage:e}}class y extends s{constructor(s){super(),t(this,s,b,N,a,["isFirst","isLast","page"])}}export{y as B,L as P};
