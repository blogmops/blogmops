import{S as s,i as t,s as e,j as l,e as a,t as r,k as o,c,a as n,b as h,d as i,f,g as p,h as u,y as g,n as v,G as d}from"./index.866439c5.js";function m(s,t,e){const l=s.slice();return l[1]=t[e],l[3]=e,l}function E(s){let t,e,v,d,m,E,x,q,D,b,j,w,B,H,I,V=s[1].title+"",y=s[1].excerpt+"",A=s[1].printDate+"",P=s[3]&&function(s){let t;return{c(){t=a("hr"),this.h()},l(s){t=c(s,"HR",{class:!0}),this.h()},h(){f(t,"class","svelte-q0wsit")},m(s,e){p(s,t,e)},d(s){s&&i(t)}}}();return{c(){P&&P.c(),t=l(),e=a("div"),v=a("h2"),d=a("a"),m=r(V),x=l(),q=a("p"),D=r(y),b=l(),j=a("div"),w=a("span"),B=r("— "),H=r(A),I=l(),this.h()},l(s){P&&P.l(s),t=o(s),e=c(s,"DIV",{class:!0});var l=n(e);v=c(l,"H2",{class:!0});var a=n(v);d=c(a,"A",{rel:!0,href:!0});var r=n(d);m=h(r,V),r.forEach(i),a.forEach(i),x=o(l),q=c(l,"P",{});var f=n(q);D=h(f,y),f.forEach(i),b=o(l),j=c(l,"DIV",{class:!0});var p=n(j);w=c(p,"SPAN",{class:!0});var u=n(w);B=h(u,"— "),H=h(u,A),u.forEach(i),p.forEach(i),I=o(l),l.forEach(i),this.h()},h(){f(d,"rel","prefetch"),f(d,"href",E="blog/"+s[1].slug),f(v,"class","svelte-q0wsit"),f(w,"class","post-item-date svelte-q0wsit"),f(j,"class","post-item-footer svelte-q0wsit"),f(e,"class","post-item")},m(s,l){P&&P.m(s,l),p(s,t,l),p(s,e,l),u(e,v),u(v,d),u(d,m),u(e,x),u(e,q),u(q,D),u(e,b),u(e,j),u(j,w),u(w,B),u(w,H),u(e,I)},p(s,t){1&t&&V!==(V=s[1].title+"")&&g(m,V),1&t&&E!==(E="blog/"+s[1].slug)&&f(d,"href",E),1&t&&y!==(y=s[1].excerpt+"")&&g(D,y),1&t&&A!==(A=s[1].printDate+"")&&g(H,A)},d(s){P&&P.d(s),s&&i(t),s&&i(e)}}}function x(s){let t,e,g,x,q,D=s[0],b=[];for(let t=0;t<D.length;t+=1)b[t]=E(m(s,D,t));return{c(){t=l(),e=a("div"),g=a("h1"),x=r("Blog"),q=l();for(let s=0;s<b.length;s+=1)b[s].c();this.h()},l(s){t=o(s),e=c(s,"DIV",{class:!0});var l=n(e);g=c(l,"H1",{});var a=n(g);x=h(a,"Blog"),a.forEach(i),q=o(l);for(let s=0;s<b.length;s+=1)b[s].l(l);l.forEach(i),this.h()},h(){document.title="Blog",f(e,"class","container")},m(s,l){p(s,t,l),p(s,e,l),u(e,g),u(g,x),u(e,q);for(let s=0;s<b.length;s+=1)b[s].m(e,null)},p(s,[t]){if(1&t){let l;for(D=s[0],l=0;l<D.length;l+=1){const a=m(s,D,l);b[l]?b[l].p(a,t):(b[l]=E(a),b[l].c(),b[l].m(e,null))}for(;l<b.length;l+=1)b[l].d(1);b.length=D.length}},i:v,o:v,d(s){s&&i(t),s&&i(e),d(b,s)}}}function q({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function D(s,t,e){let{posts:l}=t;return s.$set=s=>{"posts"in s&&e(0,l=s.posts)},[l]}export default class extends s{constructor(s){super(),t(this,s,D,x,e,{posts:0})}}export{q as preload};
