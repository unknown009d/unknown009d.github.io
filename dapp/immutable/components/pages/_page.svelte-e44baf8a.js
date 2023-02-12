import{S as X,i as Y,s as K,x as B,a as V,k as E,r as A,y as R,c as D,l as H,m as y,u as q,h as d,P as G,p as c,z as Z,b as T,E as b,n as x,f as S,t as j,A as W,o as le,Q as Ae,e as Q,g as se,d as ne,R as qe,v as J,T as ze,L as oe,M as ce,q as ee,D as ve,J as F,U as te,K as ae,O as re}from"../../chunks/index-5b52a252.js";import{H as Be}from"../../chunks/Header-67d95f59.js";import{H as Re}from"../../chunks/HeadDoc-0da31813.js";import{S as fe,C as Ze}from"../../chunks/Contact-453777a7.js";const We=""+new URL("../../assets/Hand-c180ed5c.svg",import.meta.url).href;function Ue(a){let e,l,t,s,n,o,h,f,i,u,r,w,p,v,L,m,$;return e=new Be({}),{c(){B(e.$$.fragment),l=V(),t=E("div"),s=E("h2"),n=A(`Hey there
		`),o=E("img"),f=V(),i=E("h1"),u=A("I’m"),r=E("br"),w=A(" Drubajyoti"),p=E("br"),v=A(" Debnath"),L=V(),m=E("p"),this.h()},l(I){R(e.$$.fragment,I),l=D(I),t=H(I,"DIV",{class:!0});var g=y(t);s=H(g,"H2",{class:!0});var k=y(s);n=q(k,`Hey there
		`),o=H(k,"IMG",{src:!0,id:!0,class:!0,alt:!0}),k.forEach(d),f=D(g),i=H(g,"H1",{class:!0});var _=y(i);u=q(_,"I’m"),r=H(_,"BR",{class:!0}),w=q(_," Drubajyoti"),p=H(_,"BR",{class:!0}),v=q(_," Debnath"),_.forEach(d),L=D(g),m=H(g,"P",{class:!0}),y(m).forEach(d),g.forEach(d),this.h()},h(){G(o.src,h=We)||c(o,"src",h),c(o,"id","wi"),c(o,"class","wave-icon svelte-1w2b3a1"),c(o,"alt","👋🏽"),c(s,"class","normal-heading svelte-1w2b3a1"),c(r,"class","mb-break"),c(p,"class","mb-break"),c(i,"class","fancy-font svelte-1w2b3a1"),c(m,"class","small-description svelte-1w2b3a1"),c(t,"class","landing-content svelte-1w2b3a1")},m(I,g){Z(e,I,g),T(I,l,g),T(I,t,g),b(t,s),b(s,n),b(s,o),b(t,f),b(t,i),b(i,u),b(i,r),b(i,w),b(i,p),b(i,v),b(t,L),b(t,m),a[1](m),$=!0},p:x,i(I){$||(S(e.$$.fragment,I),$=!0)},o(I){j(e.$$.fragment,I),$=!1},d(I){W(e,I),I&&d(l),I&&d(t),a[1](null)}}}function Fe(a,e,l){let t;le(async()=>{let n=`
		An introvert developer with a focus on elevating better User Interface / Experience, I strive to bring
		ideas to life through technology. Pursuing a B.Tech in Computer Science & Engineering. My
		commitment to continuous learning and exploration of new technologies, paired with my passion
		for <abbr title="Free and Open-Source Software">FOSS</abbr> enables me to bring unique and impactful solutions to the
		table. btw, I use Arch.
		`;const o=await fetch("dynamic/landing.json");o.ok&&(n=(await o.json())[0].about),l(0,t.innerHTML=n,t)});function s(n){Ae[n?"unshift":"push"](()=>{t=n,l(0,t)})}return[t,s]}class Ge extends X{constructor(e){super(),Y(this,e,Fe,Ue,K,{})}}function _e(a,e,l){const t=a.slice();return t[2]=e[l],t}function pe(a){let e,l,t,s,n=[],o=new Map,h;l=new fe({props:{heading:"Academic Experience",sub:"Educational background in a reverse-chronological order"}});let f=a[0];const i=u=>u[2].id;for(let u=0;u<f.length;u+=1){let r=_e(a,f,u),w=i(r);o.set(w,n[u]=we(w,r))}return{c(){e=E("div"),B(l.$$.fragment),t=V(),s=E("div");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=H(u,"DIV",{class:!0,tabindex:!0});var r=y(e);R(l.$$.fragment,r),t=D(r),s=H(r,"DIV",{class:!0});var w=y(s);for(let p=0;p<n.length;p+=1)n[p].l(w);w.forEach(d),r.forEach(d),this.h()},h(){c(s,"class","school-container svelte-1f9cish"),c(e,"class","education p-padding svelte-1f9cish"),c(e,"tabindex","0")},m(u,r){T(u,e,r),Z(l,e,null),b(e,t),b(e,s);for(let w=0;w<n.length;w+=1)n[w].m(s,null);h=!0},p(u,r){r&1&&(f=u[0],n=qe(n,r,i,1,u,f,o,s,ze,we,null,_e))},i(u){h||(S(l.$$.fragment,u),h=!0)},o(u){j(l.$$.fragment,u),h=!1},d(u){u&&d(e),W(l);for(let r=0;r<n.length;r+=1)n[r].d()}}}function we(a,e){let l,t,s,n,o,h,f,i=e[2].name+"",u,r,w,p=e[2].course+"",v,L,m,$=e[2].duration+"",I,g;return{key:a,first:null,c(){l=E("div"),t=E("div"),s=E("img"),o=V(),h=E("div"),f=E("p"),u=A(i),r=V(),w=E("p"),v=A(p),L=V(),m=E("small"),I=A($),g=V(),this.h()},l(k){l=H(k,"DIV",{class:!0});var _=y(l);t=H(_,"DIV",{class:!0});var P=y(t);s=H(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(d),o=D(_),h=H(_,"DIV",{class:!0});var M=y(h);f=H(M,"P",{class:!0});var O=y(f);u=q(O,i),O.forEach(d),r=D(M),w=H(M,"P",{class:!0});var z=y(w);v=q(z,p),z.forEach(d),L=D(M),m=H(M,"SMALL",{class:!0});var U=y(m);I=q(U,$),U.forEach(d),M.forEach(d),g=D(_),_.forEach(d),this.h()},h(){G(s.src,n=e[2].img)||c(s,"src",n),c(s,"alt","School Logo"),c(s,"class","svelte-1f9cish"),c(t,"class","school-img svelte-1f9cish"),c(f,"class","name svelte-1f9cish"),c(w,"class","course svelte-1f9cish"),c(m,"class","duration svelte-1f9cish"),c(h,"class","school-content svelte-1f9cish"),c(l,"class","school svelte-1f9cish"),this.first=l},m(k,_){T(k,l,_),b(l,t),b(t,s),b(l,o),b(l,h),b(h,f),b(f,u),b(h,r),b(h,w),b(w,v),b(h,L),b(h,m),b(m,I),b(l,g)},p(k,_){e=k,_&1&&!G(s.src,n=e[2].img)&&c(s,"src",n),_&1&&i!==(i=e[2].name+"")&&J(u,i),_&1&&p!==(p=e[2].course+"")&&J(v,p),_&1&&$!==($=e[2].duration+"")&&J(I,$)},d(k){k&&d(l)}}}function Xe(a){let e,l,t=a[0].length>0&&pe(a);return{c(){t&&t.c(),e=Q()},l(s){t&&t.l(s),e=Q()},m(s,n){t&&t.m(s,n),T(s,e,n),l=!0},p(s,[n]){s[0].length>0?t?(t.p(s,n),n&1&&S(t,1)):(t=pe(s),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(se(),j(t,1,1,()=>{t=null}),ne())},i(s){l||(S(t),l=!0)},o(s){j(t),l=!1},d(s){t&&t.d(s),s&&d(e)}}}function Ye(a,e,l){let t=[];return le(async()=>{const s=await fetch("dynamic/education.json");if(s.ok){const n=await s.json();l(0,t=n)}}),[t]}class Ke extends X{constructor(e){super(),Y(this,e,Ye,Xe,K,{})}}function Je(a){let e,l,t,s,n,o;return{c(){e=E("a"),l=oe("svg"),t=oe("path"),s=oe("path"),this.h()},l(h){e=H(h,"A",{href:!0,class:!0,id:!0});var f=y(e);l=ce(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,style:!0,class:!0});var i=y(l);t=ce(i,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0,class:!0}),y(t).forEach(d),s=ce(i,"path",{d:!0,fill:!0,class:!0}),y(s).forEach(d),i.forEach(d),f.forEach(d),this.h()},h(){c(t,"fill-rule","evenodd"),c(t,"clip-rule","evenodd"),c(t,"d","M34.0597 101.061L43.6057 91.5147C44.1915 90.9289 44.1915 89.9792 43.6057 89.3934C43.0199 88.8076 42.0701 88.8076 41.4843 89.3934L34.4991 96.3787L34.4991 62H31.4991L31.4991 96.3787L24.5138 89.3934C23.928 88.8076 22.9783 88.8076 22.3925 89.3934C21.8067 89.9792 21.8067 90.9289 22.3925 91.5147L31.9384 101.061C32.5242 101.646 33.4739 101.646 34.0597 101.061ZM31.4991 21H34.4991L34.4991 0H31.4991L31.4991 21Z"),c(t,"fill","#ACA1F5"),c(t,"class","svelte-7oolca"),c(s,"d","M25.3387 28.2727H27.2733L29.8643 34.5966H29.9665L32.5574 28.2727H34.4921V37H32.975V31.0043H32.8941L30.4822 36.9744H29.3486L26.9367 30.9915H26.8557V37H25.3387V28.2727ZM36.3371 28.2727H38.1226L40.2576 32.1335H40.3428L42.4777 28.2727H44.2632L41.0885 33.7443V37H39.5118V33.7443L36.3371 28.2727ZM4.25168 54L0.714039 41.6364H3.56951L5.61603 50.2269H5.71866L7.97647 41.6364H10.4214L12.6732 50.245H12.7819L14.8284 41.6364H17.6839L14.1462 54H11.5986L9.24422 45.9165H9.14763L6.79927 54H4.25168ZM30.7672 47.8182C30.7672 49.1664 30.5116 50.3134 30.0005 51.2592C29.4934 52.205 28.8011 52.9274 27.9238 53.4265C27.0504 53.9215 26.0684 54.169 24.9777 54.169C23.879 54.169 22.893 53.9195 22.0196 53.4205C21.1463 52.9214 20.4561 52.199 19.949 51.2532C19.4419 50.3074 19.1883 49.1624 19.1883 47.8182C19.1883 46.4699 19.4419 45.3229 19.949 44.3771C20.4561 43.4313 21.1463 42.7109 22.0196 42.2159C22.893 41.7169 23.879 41.4673 24.9777 41.4673C26.0684 41.4673 27.0504 41.7169 27.9238 42.2159C28.8011 42.7109 29.4934 43.4313 30.0005 44.3771C30.5116 45.3229 30.7672 46.4699 30.7672 47.8182ZM28.1169 47.8182C28.1169 46.9448 27.9861 46.2083 27.7245 45.6087C27.467 45.009 27.1027 44.5542 26.6319 44.2443C26.161 43.9344 25.6096 43.7795 24.9777 43.7795C24.3459 43.7795 23.7945 43.9344 23.3236 44.2443C22.8527 44.5542 22.4865 45.009 22.2249 45.6087C21.9673 46.2083 21.8385 46.9448 21.8385 47.8182C21.8385 48.6915 21.9673 49.428 22.2249 50.0277C22.4865 50.6274 22.8527 51.0821 23.3236 51.392C23.7945 51.7019 24.3459 51.8569 24.9777 51.8569C25.6096 51.8569 26.161 51.7019 26.6319 51.392C27.1027 51.0821 27.467 50.6274 27.7245 50.0277C27.9861 49.428 28.1169 48.6915 28.1169 47.8182ZM33.7235 54V41.6364H38.6013C39.5351 41.6364 40.3319 41.8034 40.992 42.1374C41.656 42.4674 42.1611 42.9363 42.5072 43.544C42.8574 44.1477 43.0324 44.8581 43.0324 45.6751C43.0324 46.4961 42.8554 47.2024 42.5012 47.794C42.147 48.3816 41.6339 48.8324 40.9618 49.1463C40.2937 49.4602 39.4847 49.6172 38.5349 49.6172H35.269V47.5163H38.1123C38.6114 47.5163 39.0259 47.4479 39.356 47.3111C39.686 47.1742 39.9315 46.969 40.0925 46.6953C40.2575 46.4216 40.34 46.0816 40.34 45.6751C40.34 45.2646 40.2575 44.9184 40.0925 44.6367C39.9315 44.355 39.684 44.1417 39.3499 43.9968C39.0199 43.8479 38.6034 43.7734 38.1003 43.7734H36.3375V54H33.7235ZM40.4003 48.3736L43.4731 54H40.5875L37.5811 48.3736H40.4003ZM45.8998 54V41.6364H48.5137V47.0877H48.6767L53.126 41.6364H56.2591L51.6711 47.1722L56.3135 54H53.1863L49.7996 48.9169L48.5137 50.4865V54H45.8998ZM65.2479 45.1921C65.1996 44.7051 64.9923 44.3268 64.6261 44.0572C64.2598 43.7875 63.7628 43.6527 63.1349 43.6527C62.7083 43.6527 62.3481 43.7131 62.0543 43.8338C61.7605 43.9505 61.5352 44.1135 61.3782 44.3228C61.2253 44.5321 61.1488 44.7695 61.1488 45.0352C61.1407 45.2565 61.187 45.4497 61.2876 45.6147C61.3923 45.7797 61.5352 45.9226 61.7163 46.0433C61.8974 46.16 62.1067 46.2627 62.3441 46.3512C62.5816 46.4357 62.8351 46.5082 63.1048 46.5685L64.2156 46.8342C64.7549 46.9549 65.2499 47.1159 65.7006 47.3171C66.1514 47.5183 66.5418 47.7659 66.8718 48.0597C67.2018 48.3535 67.4574 48.6996 67.6385 49.098C67.8236 49.4964 67.9182 49.9532 67.9222 50.4684C67.9182 51.225 67.725 51.881 67.3427 52.4364C66.9644 52.9878 66.417 53.4164 65.7006 53.7223C64.9883 54.0241 64.129 54.1751 63.1229 54.1751C62.1248 54.1751 61.2555 54.0221 60.5149 53.7163C59.7784 53.4104 59.2029 52.9576 58.7884 52.358C58.3778 51.7543 58.1625 51.0077 58.1424 50.1183H60.6719C60.7001 50.5328 60.8188 50.8789 61.0281 51.1566C61.2414 51.4303 61.5251 51.6375 61.8793 51.7784C62.2375 51.9152 62.6419 51.9837 63.0927 51.9837C63.5354 51.9837 63.9198 51.9193 64.2457 51.7905C64.5758 51.6617 64.8313 51.4826 65.0124 51.2532C65.1935 51.0238 65.2841 50.7602 65.2841 50.4624C65.2841 50.1847 65.2016 49.9512 65.0366 49.7621C64.8756 49.5729 64.6381 49.4119 64.3242 49.2791C64.0143 49.1463 63.634 49.0256 63.1832 48.9169L61.837 48.5788C60.7946 48.3253 59.9716 47.9289 59.3679 47.3896C58.7642 46.8503 58.4644 46.1238 58.4684 45.2102C58.4644 44.4616 58.6636 43.8076 59.0661 43.2482C59.4725 42.6888 60.03 42.2521 60.7383 41.9382C61.4466 41.6243 62.2515 41.4673 63.1531 41.4673C64.0707 41.4673 64.8716 41.6243 65.5558 41.9382C66.244 42.2521 66.7792 42.6888 67.1616 43.2482C67.5439 43.8076 67.7411 44.4556 67.7532 45.1921H65.2479Z"),c(s,"fill","#ACA1F5"),c(s,"class","svelte-7oolca"),c(l,"width","69"),c(l,"height","102"),c(l,"viewBox","0 0 69 102"),c(l,"fill","none"),c(l,"xmlns","http://www.w3.org/2000/svg"),ee(l,"animation-delay","2800ms"),c(l,"class","svelte-7oolca"),ve(l,"dinit",a[0]),c(e,"href","#works"),c(e,"class","scroll-down-component svelte-7oolca"),c(e,"id","sdc")},m(h,f){T(h,e,f),b(e,l),b(l,t),b(l,s),n||(o=F(e,"click",a[1]),n=!0)},p(h,[f]){f&1&&ve(l,"dinit",h[0])},i:x,o:x,d(h){h&&d(e),n=!1,o()}}}function Qe(a,e,l){const t=()=>{scrollTo(0,500)};let s=!1;return le(()=>{l(0,s=!0)}),[s,t]}class xe extends X{constructor(e){super(),Y(this,e,Qe,Je,K,{})}}function et(a){let e,l,t,s,n,o;return{c(){e=E("div"),l=E("p"),t=A(a[0]),s=V(),n=E("p"),o=A(a[1]),this.h()},l(h){e=H(h,"DIV",{class:!0,style:!0});var f=y(e);l=H(f,"P",{class:!0});var i=y(l);t=q(i,a[0]),i.forEach(d),s=D(f),n=H(f,"P",{class:!0});var u=y(n);o=q(u,a[1]),u.forEach(d),f.forEach(d),this.h()},h(){c(l,"class","skills-name svelte-1qt7cud"),c(n,"class","skills-level svelte-1qt7cud"),c(e,"class","skills svelte-1qt7cud"),ee(e,"filter","hue-rotate("+a[2]*45+"deg)")},m(h,f){T(h,e,f),b(e,l),b(l,t),b(e,s),b(e,n),b(n,o)},p(h,[f]){f&1&&J(t,h[0]),f&2&&J(o,h[1]),f&4&&ee(e,"filter","hue-rotate("+h[2]*45+"deg)")},i:x,o:x,d(h){h&&d(e)}}}function tt(a,e,l){let{name:t="N/A"}=e,{level:s="Noob"}=e,{hueRotate:n=0}=e;return a.$$set=o=>{"name"in o&&l(0,t=o.name),"level"in o&&l(1,s=o.level),"hueRotate"in o&&l(2,n=o.hueRotate)},[t,s,n]}class lt extends X{constructor(e){super(),Y(this,e,tt,et,K,{name:0,level:1,hueRotate:2})}}function $e(a,e,l){const t=a.slice();return t[5]=e[l],t}function be(a,e,l){const t=a.slice();return t[8]=e[l],t}function Ce(a){let e,l,t,s,n,o,h,f,i,u,r,w,p,v,L,m=a[0],$=[];for(let g=0;g<m.length;g+=1)$[g]=Ee($e(a,m,g));const I=g=>j($[g],1,1,()=>{$[g]=null});return{c(){e=E("div"),l=E("div"),t=E("h2"),s=A("Have a look at my skills"),n=V(),o=E("p"),h=A(`In these 5+ years of self taught journey, I have experienced a lot of new & advanced
				technologies and have tried most of them. But the one thing that i will always have in me is
				the urge to learn more.`),f=V(),i=E("p"),u=A(`“Learning is a never ending journey”
				
				`),r=E("span"),w=A("SKILLS"),p=V(),v=E("div");for(let g=0;g<$.length;g+=1)$[g].c();this.h()},l(g){e=H(g,"DIV",{class:!0,tabindex:!0});var k=y(e);l=H(k,"DIV",{class:!0});var _=y(l);t=H(_,"H2",{class:!0});var P=y(t);s=q(P,"Have a look at my skills"),P.forEach(d),n=D(_),o=H(_,"P",{class:!0});var M=y(o);h=q(M,`In these 5+ years of self taught journey, I have experienced a lot of new & advanced
				technologies and have tried most of them. But the one thing that i will always have in me is
				the urge to learn more.`),M.forEach(d),f=D(_),i=H(_,"P",{class:!0});var O=y(i);u=q(O,`“Learning is a never ending journey”
				
				`),r=H(O,"SPAN",{style:!0,class:!0});var z=y(r);w=q(z,"SKILLS"),z.forEach(d),O.forEach(d),_.forEach(d),p=D(k),v=H(k,"DIV",{class:!0});var U=y(v);for(let ie=0;ie<$.length;ie+=1)$[ie].l(U);U.forEach(d),k.forEach(d),this.h()},h(){c(t,"class","fancy-font fancy-h svelte-100wudm"),c(o,"class","fancy-p"),ee(r,"transform","translateX("+(He-ye*a[2])+"px)"),c(r,"class","backdropText svelte-100wudm"),c(i,"class","quote svelte-100wudm"),c(l,"class","skills-content svelte-100wudm"),c(v,"class","skills-showcase svelte-100wudm"),c(e,"class","skills-container svelte-100wudm"),c(e,"tabindex","0")},m(g,k){T(g,e,k),b(e,l),b(l,t),b(t,s),b(l,n),b(l,o),b(o,h),b(l,f),b(l,i),b(i,u),b(i,r),b(r,w),b(e,p),b(e,v);for(let _=0;_<$.length;_+=1)$[_].m(v,null);L=!0},p(g,k){if((!L||k&4)&&ee(r,"transform","translateX("+(He-ye*g[2])+"px)"),k&1){m=g[0];let _;for(_=0;_<m.length;_+=1){const P=$e(g,m,_);$[_]?($[_].p(P,k),S($[_],1)):($[_]=Ee(P),$[_].c(),S($[_],1),$[_].m(v,null))}for(se(),_=m.length;_<$.length;_+=1)I(_);ne()}},i(g){if(!L){for(let k=0;k<m.length;k+=1)S($[k]);L=!0}},o(g){$=$.filter(Boolean);for(let k=0;k<$.length;k+=1)j($[k]);L=!1},d(g){g&&d(e),re($,g)}}}function ke(a){let e,l;return e=new lt({props:{name:a[8].name,level:a[8].level,hueRotate:a[5].color}}),{c(){B(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,s){Z(e,t,s),l=!0},p(t,s){const n={};s&1&&(n.name=t[8].name),s&1&&(n.level=t[8].level),s&1&&(n.hueRotate=t[5].color),e.$set(n)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Ee(a){let e,l,t=a[5].category+"",s,n,o,h,f=a[5].skills,i=[];for(let r=0;r<f.length;r+=1)i[r]=ke(be(a,f,r));const u=r=>j(i[r],1,1,()=>{i[r]=null});return{c(){e=E("div"),l=E("p"),s=A(t),n=V();for(let r=0;r<i.length;r+=1)i[r].c();o=V(),this.h()},l(r){e=H(r,"DIV",{class:!0});var w=y(e);l=H(w,"P",{class:!0});var p=y(l);s=q(p,t),p.forEach(d),n=D(w);for(let v=0;v<i.length;v+=1)i[v].l(w);o=D(w),w.forEach(d),this.h()},h(){c(l,"class","category svelte-100wudm"),c(e,"class","field svelte-100wudm")},m(r,w){T(r,e,w),b(e,l),b(l,s),b(e,n);for(let p=0;p<i.length;p+=1)i[p].m(e,null);b(e,o),h=!0},p(r,w){if((!h||w&1)&&t!==(t=r[5].category+"")&&J(s,t),w&1){f=r[5].skills;let p;for(p=0;p<f.length;p+=1){const v=be(r,f,p);i[p]?(i[p].p(v,w),S(i[p],1)):(i[p]=ke(v),i[p].c(),S(i[p],1),i[p].m(e,o))}for(se(),p=f.length;p<i.length;p+=1)u(p);ne()}},i(r){if(!h){for(let w=0;w<f.length;w+=1)S(i[w]);h=!0}},o(r){i=i.filter(Boolean);for(let w=0;w<i.length;w+=1)j(i[w]);h=!1},d(r){r&&d(e),re(i,r)}}}function st(a){let e=!1,l=()=>{e=!1},t,s,n,o,h,f;te(a[3]),te(a[4]);let i=a[0].length>0&&Ce(a);return{c(){s=V(),i&&i.c(),n=Q()},l(u){s=D(u),i&&i.l(u),n=Q()},m(u,r){T(u,s,r),i&&i.m(u,r),T(u,n,r),o=!0,h||(f=[F(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),a[3]()}),F(window,"resize",a[4])],h=!0)},p(u,[r]){r&4&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,u[2]),t=setTimeout(l,100)),u[0].length>0?i?(i.p(u,r),r&1&&S(i,1)):(i=Ce(u),i.c(),S(i,1),i.m(n.parentNode,n)):i&&(se(),j(i,1,1,()=>{i=null}),ne())},i(u){o||(S(i),o=!0)},o(u){j(i),o=!1},d(u){u&&d(s),i&&i.d(u),u&&d(n),h=!1,ae(f)}}}let He=1e3,ye=.4;function nt(a,e,l){let t=[],s,n=0;le(async()=>{const f=await fetch("dynamic/skills.json");if(f.ok){const i=await f.json();l(0,t=i)}});function o(){l(2,n=window.pageYOffset)}function h(){l(1,s=window.innerWidth)}return[t,s,n,o,h]}class it extends X{constructor(e){super(),Y(this,e,nt,st,K,{})}}function rt(a){let e,l,t,s,n,o,h,f,i,u,r,w,p,v;return te(a[6]),{c(){e=E("div"),l=E("button"),t=E("img"),o=V(),h=E("div"),f=E("h4"),i=A(a[0]),u=V(),r=E("p"),w=A(a[1]),this.h()},l(L){e=H(L,"DIV",{class:!0,tabindex:!0});var m=y(e);l=H(m,"BUTTON",{class:!0,tabindex:!0});var $=y(l);t=H($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(d),o=D(m),h=H(m,"DIV",{class:!0,tabindex:!0});var I=y(h);f=H(I,"H4",{class:!0});var g=y(f);i=q(g,a[0]),g.forEach(d),u=D(I),r=H(I,"P",{class:!0});var k=y(r);w=q(k,a[1]),k.forEach(d),I.forEach(d),m.forEach(d),this.h()},h(){G(t.src,s=a[2])||c(t,"src",s),c(t,"alt",n="Certification of "+a[0]),c(t,"class","svelte-1qkug67"),c(l,"class","imgHolder svelte-1qkug67"),c(l,"tabindex","-1"),c(f,"class","txtWrap1 svelte-1qkug67"),c(r,"class","svelte-1qkug67"),c(h,"class","content svelte-1qkug67"),c(h,"tabindex","-1"),c(e,"class","imgText-container svelte-1qkug67"),c(e,"tabindex","-1")},m(L,m){T(L,e,m),b(e,l),b(l,t),b(e,o),b(e,h),b(h,f),b(f,i),b(h,u),b(h,r),b(r,w),p||(v=[F(window,"resize",a[6]),F(l,"click",a[7])],p=!0)},p(L,[m]){m&4&&!G(t.src,s=L[2])&&c(t,"src",s),m&1&&n!==(n="Certification of "+L[0])&&c(t,"alt",n),m&1&&J(i,L[0]),m&2&&J(w,L[1])},i:x,o:x,d(L){L&&d(e),p=!1,ae(v)}}}function at(a,e,l){let{title:t="Title Here"}=e,{sub:s="Subtitle here..."}=e,{img:n=""}=e,o=r=>{if(r.target.style.position==""){let w=r.target.getBoundingClientRect(),p=r.target.offsetWidth,v=r.target.offsetHeight;r.target.style=`
				z-index: 101;
				position: fixed; 
				top: ${w.top}px; 
				left: ${w.left}px;
				right: ${w.right}px;
				bottom: ${w.bottom}px;
				width: ${p}px;
				height: ${v}px;
    			box-sizing: border-box;
				`,r.target.classList.add("fullscreen-preview"),r.target.parentNode.nextElementSibling.style.opacity=0,r.target.parentNode.nextElementSibling.style.paddingTop="15rem"}else r.target.classList.add("remove-preview"),setTimeout(()=>{r.target.style="",r.target.classList.remove("fullscreen-preview"),r.target.classList.remove("remove-preview"),r.target.parentNode.nextElementSibling.style.opacity=1,r.target.parentNode.nextElementSibling.style.paddingTop=""},600)},h,f;function i(){l(4,f=window.innerHeight),l(3,h=window.innerWidth)}const u=r=>{h>612&&o(r)};return a.$$set=r=>{"title"in r&&l(0,t=r.title),"sub"in r&&l(1,s=r.sub),"img"in r&&l(2,n=r.img)},[t,s,n,h,f,o,i,u]}class ot extends X{constructor(e){super(),Y(this,e,at,rt,K,{title:0,sub:1,img:2})}}function Le(a,e,l){const t=a.slice();return t[1]=e[l].id,t[2]=e[l].img,t[3]=e[l].title,t[4]=e[l].issued,t}function Ie(a){let e,l,t,s,n,o,h,f,i,u,r,w,p,v,L;l=new fe({props:{heading:"Certificates Achieved",sub:"Here are some of the certification that I have achieved..."}});let m=a[0],$=[];for(let g=0;g<m.length;g+=1)$[g]=Te(Le(a,m,g));const I=g=>j($[g],1,1,()=>{$[g]=null});return{c(){e=E("div"),B(l.$$.fragment),t=V(),s=E("div"),n=E("div"),o=E("button"),h=E("span"),f=V();for(let g=0;g<$.length;g+=1)$[g].c();i=V(),u=E("div"),r=E("button"),w=E("span"),this.h()},l(g){e=H(g,"DIV",{class:!0});var k=y(e);R(l.$$.fragment,k),k.forEach(d),t=D(g),s=H(g,"DIV",{class:!0});var _=y(s);n=H(_,"DIV",{class:!0});var P=y(n);o=H(P,"BUTTON",{class:!0,"data-tooltip":!0});var M=y(o);h=H(M,"SPAN",{class:!0}),y(h).forEach(d),M.forEach(d),P.forEach(d),f=D(_);for(let U=0;U<$.length;U+=1)$[U].l(_);i=D(_),u=H(_,"DIV",{class:!0});var O=y(u);r=H(O,"BUTTON",{class:!0,"data-tooltip":!0});var z=y(r);w=H(z,"SPAN",{class:!0}),y(w).forEach(d),z.forEach(d),O.forEach(d),_.forEach(d),this.h()},h(){c(e,"class","page"),c(h,"class","icon i-backward svelte-ll0i25"),c(o,"class","scroll-btns svelte-ll0i25"),c(o,"data-tooltip","Previous"),c(n,"class","sb-container bt-previous svelte-ll0i25"),c(w,"class","icon i-forward svelte-ll0i25"),c(r,"class","scroll-btns svelte-ll0i25"),c(r,"data-tooltip","Next"),c(u,"class","sb-container bt-next svelte-ll0i25"),c(s,"class","certificate-container svelte-ll0i25")},m(g,k){T(g,e,k),Z(l,e,null),T(g,t,k),T(g,s,k),b(s,n),b(n,o),b(o,h),b(s,f);for(let _=0;_<$.length;_+=1)$[_].m(s,null);b(s,i),b(s,u),b(u,r),b(r,w),p=!0,v||(L=[F(o,"click",ft),F(r,"click",ut)],v=!0)},p(g,k){if(k&1){m=g[0];let _;for(_=0;_<m.length;_+=1){const P=Le(g,m,_);$[_]?($[_].p(P,k),S($[_],1)):($[_]=Te(P),$[_].c(),S($[_],1),$[_].m(s,i))}for(se(),_=m.length;_<$.length;_+=1)I(_);ne()}},i(g){if(!p){S(l.$$.fragment,g);for(let k=0;k<m.length;k+=1)S($[k]);p=!0}},o(g){j(l.$$.fragment,g),$=$.filter(Boolean);for(let k=0;k<$.length;k+=1)j($[k]);p=!1},d(g){g&&d(e),W(l),g&&d(t),g&&d(s),re($,g),v=!1,ae(L)}}}function Te(a){let e,l,t;return l=new ot({props:{img:a[2],title:a[3],sub:a[4]}}),{c(){e=E("div"),B(l.$$.fragment),this.h()},l(s){e=H(s,"DIV",{class:!0,tabindex:!0});var n=y(e);R(l.$$.fragment,n),n.forEach(d),this.h()},h(){c(e,"class","certi svelte-ll0i25"),c(e,"tabindex","-1")},m(s,n){T(s,e,n),Z(l,e,null),t=!0},p(s,n){const o={};n&1&&(o.img=s[2]),n&1&&(o.title=s[3]),n&1&&(o.sub=s[4]),l.$set(o)},i(s){t||(S(l.$$.fragment,s),t=!0)},o(s){j(l.$$.fragment,s),t=!1},d(s){s&&d(e),W(l)}}}function ct(a){let e,l,t=a[0].length>0&&Ie(a);return{c(){t&&t.c(),e=Q()},l(s){t&&t.l(s),e=Q()},m(s,n){t&&t.m(s,n),T(s,e,n),l=!0},p(s,[n]){s[0].length>0?t?(t.p(s,n),n&1&&S(t,1)):(t=Ie(s),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(se(),j(t,1,1,()=>{t=null}),ne())},i(s){l||(S(t),l=!0)},o(s){j(t),l=!1},d(s){t&&t.d(s),s&&d(e)}}}const ft=a=>{a.target.parentNode.parentNode.scrollLeft-=250},ut=a=>{a.target.parentNode.parentNode.scrollLeft+=250};function ht(a,e,l){let t=[];return le(async()=>{const s=await fetch("dynamic/certificates.json");if(s.ok){const n=await s.json();l(0,t=n)}}),[t]}class dt extends X{constructor(e){super(),Y(this,e,ht,ct,K,{})}}function Se(a,e,l){const t=a.slice();return t[6]=e[l],t}function Ve(a,e,l){const t=a.slice();return t[6]=e[l],t}function De(a){let e,l,t,s,n,o,h,f,i;l=new fe({props:{heading:"The Collection",sub:"Have a look at some of the projects i have worked on ..."}});let u=a[2][0].projects,r=[];for(let v=0;v<u.length;v+=1)r[v]=je(Ve(a,u,v));let w=a[2][1].projects,p=[];for(let v=0;v<w.length;v+=1)p[v]=Ne(Se(a,w,v));return{c(){e=E("div"),B(l.$$.fragment),t=V(),s=E("div"),n=E("div");for(let v=0;v<r.length;v+=1)r[v].c();o=V(),h=E("div");for(let v=0;v<p.length;v+=1)p[v].c();this.h()},l(v){e=H(v,"DIV",{class:!0,tabindex:!0});var L=y(e);R(l.$$.fragment,L),L.forEach(d),t=D(v),s=H(v,"DIV",{class:!0,style:!0});var m=y(s);n=H(m,"DIV",{class:!0});var $=y(n);for(let g=0;g<r.length;g+=1)r[g].l($);$.forEach(d),o=D(m),h=H(m,"DIV",{class:!0});var I=y(h);for(let g=0;g<p.length;g+=1)p[g].l(I);I.forEach(d),m.forEach(d),this.h()},h(){c(e,"class","page p-padding"),c(e,"tabindex","0"),c(n,"class","image-container svelte-1lwdvrf"),c(h,"class","image-container svelte-1lwdvrf"),c(s,"class","project-container svelte-1lwdvrf"),c(s,"style",f=a[0]>612?a[3](Me-Pe*a[1]):"")},m(v,L){T(v,e,L),Z(l,e,null),T(v,t,L),T(v,s,L),b(s,n);for(let m=0;m<r.length;m+=1)r[m].m(n,null);b(s,o),b(s,h);for(let m=0;m<p.length;m+=1)p[m].m(h,null);i=!0},p(v,L){if(L&4){u=v[2][0].projects;let m;for(m=0;m<u.length;m+=1){const $=Ve(v,u,m);r[m]?r[m].p($,L):(r[m]=je($),r[m].c(),r[m].m(n,null))}for(;m<r.length;m+=1)r[m].d(1);r.length=u.length}if(L&4){w=v[2][1].projects;let m;for(m=0;m<w.length;m+=1){const $=Se(v,w,m);p[m]?p[m].p($,L):(p[m]=Ne($),p[m].c(),p[m].m(h,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=w.length}(!i||L&3&&f!==(f=v[0]>612?v[3](Me-Pe*v[1]):""))&&c(s,"style",f)},i(v){i||(S(l.$$.fragment,v),i=!0)},o(v){j(l.$$.fragment,v),i=!1},d(v){v&&d(e),W(l),v&&d(t),v&&d(s),re(r,v),re(p,v)}}}function je(a){let e,l,t,s;return{c(){e=E("div"),l=E("img"),this.h()},l(n){e=H(n,"DIV",{class:!0});var o=y(e);l=H(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(d),this.h()},h(){G(l.src,t=a[6].image)||c(l,"src",t),c(l,"alt",s=a[2].name),c(l,"class","svelte-1lwdvrf"),c(e,"class","image svelte-1lwdvrf")},m(n,o){T(n,e,o),b(e,l)},p(n,o){o&4&&!G(l.src,t=n[6].image)&&c(l,"src",t),o&4&&s!==(s=n[2].name)&&c(l,"alt",s)},d(n){n&&d(e)}}}function Ne(a){let e,l,t,s;return{c(){e=E("div"),l=E("img"),this.h()},l(n){e=H(n,"DIV",{class:!0});var o=y(e);l=H(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(d),this.h()},h(){G(l.src,t=a[6].image)||c(l,"src",t),c(l,"alt",s=a[2].name),c(l,"class","svelte-1lwdvrf"),c(e,"class","image svelte-1lwdvrf")},m(n,o){T(n,e,o),b(e,l)},p(n,o){o&4&&!G(l.src,t=n[6].image)&&c(l,"src",t),o&4&&s!==(s=n[2].name)&&c(l,"alt",s)},d(n){n&&d(e)}}}function mt(a){let e=!1,l=()=>{e=!1},t,s,n,o,h;te(a[4]),te(a[5]);let f=a[2].length>0&&De(a);return{c(){f&&f.c(),s=Q()},l(i){f&&f.l(i),s=Q()},m(i,u){f&&f.m(i,u),T(i,s,u),n=!0,o||(h=[F(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),a[4]()}),F(window,"resize",a[5])],o=!0)},p(i,[u]){u&2&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,i[1]),t=setTimeout(l,100)),i[2].length>0?f?(f.p(i,u),u&4&&S(f,1)):(f=De(i),f.c(),S(f,1),f.m(s.parentNode,s)):f&&(se(),j(f,1,1,()=>{f=null}),ne())},i(i){n||(S(f),n=!0)},o(i){j(f),n=!1},d(i){f&&f.d(i),i&&d(s),o=!1,ae(h)}}}let Me=250,Pe=.08;function gt(a,e,l){let t,s=0,n=i=>(t<=750&&(i/=2,i+=30),"transform: rotate(2deg) scale(1.2) translate("+i+"px, 75px);"),o=[];le(async()=>{const i=await fetch("dynamic/projectsShowcase.json");if(i.ok){const u=await i.json();l(2,o=u)}});function h(){l(1,s=window.pageYOffset)}function f(){l(0,t=window.innerWidth)}return[t,s,o,n,h,f]}class vt extends X{constructor(e){super(),Y(this,e,gt,mt,K,{})}}function _t(a){let e=!1,l=()=>{e=!1},t,s,n,o,h,f,i,u,r,w,p,v,L,m,$,I,g,k,_,P,M,O,z,U,ie;return te(a[2]),te(a[3]),s=new Re({}),h=new Ge({}),u=new Ke({}),p=new dt({}),m=new it({}),I=new xe({}),_=new vt({}),O=new Ze({}),{c(){B(s.$$.fragment),n=V(),o=E("section"),B(h.$$.fragment),f=V(),i=E("section"),B(u.$$.fragment),r=V(),w=E("section"),B(p.$$.fragment),v=V(),L=E("section"),B(m.$$.fragment),$=V(),B(I.$$.fragment),g=V(),k=E("section"),B(_.$$.fragment),P=V(),M=E("section"),B(O.$$.fragment),this.h()},l(C){R(s.$$.fragment,C),n=D(C),o=H(C,"SECTION",{class:!0,id:!0,style:!0});var N=y(o);R(h.$$.fragment,N),N.forEach(d),f=D(C),i=H(C,"SECTION",{class:!0});var ue=y(i);R(u.$$.fragment,ue),ue.forEach(d),r=D(C),w=H(C,"SECTION",{class:!0});var he=y(w);R(p.$$.fragment,he),he.forEach(d),v=D(C),L=H(C,"SECTION",{class:!0});var de=y(L);R(m.$$.fragment,de),de.forEach(d),$=D(C),R(I.$$.fragment,C),g=D(C),k=H(C,"SECTION",{class:!0,id:!0});var me=y(k);R(_.$$.fragment,me),me.forEach(d),P=D(C),M=H(C,"SECTION",{class:!0});var ge=y(M);R(O.$$.fragment,ge),ge.forEach(d),this.h()},h(){c(o,"class","page p-cover svelte-ftniio"),c(o,"id","CoverInitial"),ee(o,"background-position-y",Oe-a[0]*(a[1]>612?.08:a[1]>450?.06:.04)+"%"),c(i,"class","page"),c(w,"class","p-certi svelte-ftniio"),c(L,"class","skillsPage"),c(k,"class","projectsPage svelte-ftniio"),c(k,"id","works"),c(M,"class","page p-padding")},m(C,N){Z(s,C,N),T(C,n,N),T(C,o,N),Z(h,o,null),T(C,f,N),T(C,i,N),Z(u,i,null),T(C,r,N),T(C,w,N),Z(p,w,null),T(C,v,N),T(C,L,N),Z(m,L,null),T(C,$,N),Z(I,C,N),T(C,g,N),T(C,k,N),Z(_,k,null),T(C,P,N),T(C,M,N),Z(O,M,null),z=!0,U||(ie=[F(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),a[2]()}),F(window,"resize",a[3])],U=!0)},p(C,[N]){N&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,C[0]),t=setTimeout(l,100)),(!z||N&3)&&ee(o,"background-position-y",Oe-C[0]*(C[1]>612?.08:C[1]>450?.06:.04)+"%")},i(C){z||(S(s.$$.fragment,C),S(h.$$.fragment,C),S(u.$$.fragment,C),S(p.$$.fragment,C),S(m.$$.fragment,C),S(I.$$.fragment,C),S(_.$$.fragment,C),S(O.$$.fragment,C),z=!0)},o(C){j(s.$$.fragment,C),j(h.$$.fragment,C),j(u.$$.fragment,C),j(p.$$.fragment,C),j(m.$$.fragment,C),j(I.$$.fragment,C),j(_.$$.fragment,C),j(O.$$.fragment,C),z=!1},d(C){W(s,C),C&&d(n),C&&d(o),W(h),C&&d(f),C&&d(i),W(u),C&&d(r),C&&d(w),W(p),C&&d(v),C&&d(L),W(m),C&&d($),W(I,C),C&&d(g),C&&d(k),W(_),C&&d(P),C&&d(M),W(O),U=!1,ae(ie)}}}let Oe=70;function pt(a,e,l){let t=0,s=0;le(()=>{document.body.addEventListener("load",()=>{console.log("Fick")})});function n(){l(0,t=window.pageYOffset)}function o(){l(1,s=window.innerWidth)}return[t,s,n,o]}class kt extends X{constructor(e){super(),Y(this,e,pt,_t,K,{})}}export{kt as default};
