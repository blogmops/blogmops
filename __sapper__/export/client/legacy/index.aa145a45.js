import{_ as s,a as t,b as e,c as n,i as r,s as a,d as o,S as i,f as p,e as c,t as f,j as u,g,h,k as m,m as P,o as l,q as $}from"./internal.de15ffcb.js";import{_ as v,a as d}from"./asyncToGenerator.839a2241.js";import{P as w,B as S}from"./Breadcrumb.80c7eaca.js";function b(s){var t,e,n,r,a,o,i,v,d,b,j=new w({props:{posts:s.posts,limit:s.postsPerPage}}),x=new S({props:{isFirst:!0,isLast:s.postsPerPage>s.posts.length,page:"1"}});return{c:function(){t=p(),e=c("div"),n=c("h1"),r=f("Stunning Sapper Blog theme with support for markdown files"),a=p(),o=c("p"),i=f("Start Publishing With Sapper"),v=p(),j.$$.fragment.c(),d=p(),x.$$.fragment.c(),this.h()},l:function(s){t=u(s,"\n\n"),e=g(s,"DIV",{class:!0},!1);var p=h(e);n=g(p,"H1",{class:!0},!1);var c=h(n);r=u(c,"Stunning Sapper Blog theme with support for markdown files"),c.forEach(m),a=u(p,"\n  "),o=g(p,"P",{},!1);var f=h(o);i=u(f,"Start Publishing With Sapper"),f.forEach(m),p.forEach(m),v=u(s,"\n\n"),j.$$.fragment.l(s),d=u(s,"\n\n"),x.$$.fragment.l(s),this.h()},h:function(){document.title="Stunning Theme",n.className="svelte-15w0prb",e.className="hero-section svelte-15w0prb"},m:function(s,p){P(s,t,p),P(s,e,p),l(e,n),l(n,r),l(e,a),l(e,o),l(o,i),P(s,v,p),$(j,s,p),P(s,d,p),$(x,s,p),b=!0},p:function(s,t){var e={};s.posts&&(e.posts=t.posts),s.postsPerPage&&(e.limit=t.postsPerPage),j.$set(e);var n={};(s.postsPerPage||s.posts)&&(n.isLast=t.postsPerPage>t.posts.length),x.$set(n)},i:function(s){b||(j.$$.fragment.i(s),x.$$.fragment.i(s),b=!0)},o:function(s){j.$$.fragment.o(s),x.$$.fragment.o(s),b=!1},d:function(s){s&&(m(t),m(e),m(v)),j.$destroy(s),s&&m(d),x.$destroy(s)}}}function j(s,t){return x.apply(this,arguments)}function x(){return(x=v(d.mark((function s(t,e){var n,r;return d.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.fetch("index.json");case 2:return n=s.sent,s.next=5,n.json();case 5:return r=s.sent,s.abrupt("return",r);case 7:case"end":return s.stop()}}),s,this)})))).apply(this,arguments)}function y(s,t,e){var n=t.posts,r=t.postsPerPage;return s.$set=function(s){"posts"in s&&e("posts",n=s.posts),"postsPerPage"in s&&e("postsPerPage",r=s.postsPerPage)},{posts:n,postsPerPage:r}}var k=function(p){function c(s){var i;return t(this,c),i=e(this,n(c).call(this)),r(o(i),s,y,b,a,["posts","postsPerPage"]),i}return s(c,i),c}();export default k;export{j as preload};
