import{S as j,i as N,s as B,x as z,a as H,k as $,y as I,c as w,l as b,m as k,h as d,p as f,z as M,b as E,E as y,f as S,t as C,A,o as G,r as T,u as L,n as J,q as U,J as F,O as K,P as O}from"../../../chunks/index-f9e4b583.js";import{H as Q}from"../../../chunks/HeadDoc-bbf4b90e.js";import{H as W}from"../../../chunks/Header-6c0b706b.js";function P(c,e,s){const r=c.slice();return r[2]=e[s],r}function X(c){let e,s,r,a,o;return{c(){e=$("h1"),s=T("⏳"),r=H(),a=$("p"),o=T("...Compiling resume..."),this.h()},l(t){e=b(t,"H1",{class:!0});var l=k(e);s=L(l,"⏳"),l.forEach(d),r=w(t),a=b(t,"P",{class:!0});var u=k(a);o=L(u,"...Compiling resume..."),u.forEach(d),this.h()},h(){f(e,"class","errorh1 svelte-1gycz20"),f(a,"class","errorp")},m(t,l){E(t,e,l),y(e,s),E(t,r,l),E(t,a,l),y(a,o)},p:J,d(t){t&&d(e),t&&d(r),t&&d(a)}}}function Y(c){let e,s,r,a,o,t,l,u,g,p,n,h=c[0][0].pages,m=[];for(let i=0;i<h.length;i+=1)m[i]=V(P(c,h,i));return{c(){e=$("div"),s=$("a"),r=T("Download Resume ⬇"),o=H(),t=$("button"),l=T("☀️"),u=H(),g=$("div");for(let i=0;i<m.length;i+=1)m[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var v=k(e);s=b(v,"A",{class:!0,href:!0,download:!0});var _=k(s);r=L(_,"Download Resume ⬇"),_.forEach(d),o=w(v),t=b(v,"BUTTON",{class:!0,style:!0});var D=k(t);l=L(D,"☀️"),D.forEach(d),v.forEach(d),u=w(i),g=b(i,"DIV",{class:!0});var q=k(g);for(let R=0;R<m.length;R+=1)m[R].l(q);q.forEach(d),this.h()},h(){f(s,"class","morebt"),f(s,"href",a=c[0][1].dir),f(s,"download","Druba_Resume.pdf"),f(t,"class","morebt"),U(t,"background-color","#00000020"),f(e,"class","btn-container svelte-1gycz20"),f(g,"class","img-grid invert svelte-1gycz20")},m(i,v){E(i,e,v),y(e,s),y(s,r),y(e,o),y(e,t),y(t,l),E(i,u,v),E(i,g,v);for(let _=0;_<m.length;_+=1)m[_].m(g,null);p||(n=F(t,"click",c[1]),p=!0)},p(i,v){if(v&1&&a!==(a=i[0][1].dir)&&f(s,"href",a),v&1){h=i[0][0].pages;let _;for(_=0;_<h.length;_+=1){const D=P(i,h,_);m[_]?m[_].p(D,v):(m[_]=V(D),m[_].c(),m[_].m(g,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=h.length}},d(i){i&&d(e),i&&d(u),i&&d(g),K(m,i),p=!1,n()}}}function V(c){let e,s,r,a,o,t;return{c(){e=$("a"),s=$("img"),o=H(),this.h()},l(l){e=b(l,"A",{href:!0,target:!0,rel:!0});var u=k(e);s=b(u,"IMG",{src:!0,alt:!0,class:!0}),o=w(u),u.forEach(d),this.h()},h(){O(s.src,r=""+(c[0][0].dir+c[2]+c[0][0].type))||f(s,"src",r),f(s,"alt",a="Resume"+c[2]),f(s,"class","svelte-1gycz20"),f(e,"href",t=""+(c[0][0].dir+c[2]+c[0][0].type)),f(e,"target","_blank"),f(e,"rel","noreferrer")},m(l,u){E(l,e,u),y(e,s),y(e,o)},p(l,u){u&1&&!O(s.src,r=""+(l[0][0].dir+l[2]+l[0][0].type))&&f(s,"src",r),u&1&&a!==(a="Resume"+l[2])&&f(s,"alt",a),u&1&&t!==(t=""+(l[0][0].dir+l[2]+l[0][0].type))&&f(e,"href",t)},d(l){l&&d(e)}}}function Z(c){let e,s,r,a,o,t,l;e=new Q({props:{page:"/myresume"}}),a=new W({props:{changeLinkToHome:1}});function u(n,h){return n[0].length>0?Y:X}let g=u(c),p=g(c);return{c(){z(e.$$.fragment),s=H(),r=$("section"),z(a.$$.fragment),o=H(),t=$("div"),p.c(),this.h()},l(n){I(e.$$.fragment,n),s=w(n),r=b(n,"SECTION",{class:!0});var h=k(r);I(a.$$.fragment,h),o=w(h),t=b(h,"DIV",{class:!0});var m=k(t);p.l(m),m.forEach(d),h.forEach(d),this.h()},h(){f(t,"class","load"),f(r,"class","page")},m(n,h){M(e,n,h),E(n,s,h),E(n,r,h),M(a,r,null),y(r,o),y(r,t),p.m(t,null),l=!0},p(n,[h]){g===(g=u(n))&&p?p.p(n,h):(p.d(1),p=g(n),p&&(p.c(),p.m(t,null)))},i(n){l||(S(e.$$.fragment,n),S(a.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),C(a.$$.fragment,n),l=!1},d(n){A(e,n),n&&d(s),n&&d(r),A(a),p.d()}}}function x(c,e,s){let r=[];return G(async()=>{const o=await fetch("dynamic/resume.json");if(o.ok){const t=await o.json();s(0,r=t)}}),[r,o=>{o.target.innerHTML=="☀️"?(document.querySelector(".img-grid").classList.remove("invert"),o.target.innerHTML="🌑"):(document.querySelector(".img-grid").classList.add("invert"),o.target.innerHTML="☀️")}]}class re extends j{constructor(e){super(),N(this,e,x,Z,B,{})}}export{re as default};