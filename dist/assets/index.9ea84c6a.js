const ee=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};ee();function y(){}function B(e){return e()}function Y(){return Object.create(null)}function L(e){e.forEach(B)}function ie(e){return typeof e=="function"}function P(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}let q;function T(e,i){return q||(q=document.createElement("a")),q.href=i,e===q.href}function oe(e){return Object.keys(e).length===0}function l(e,i){e.appendChild(i)}function R(e,i,o){e.insertBefore(i,o||null)}function I(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function te(e,i,o,a){return e.addEventListener(i,o,a),()=>e.removeEventListener(i,o,a)}function d(e,i,o){o==null?e.removeAttribute(i):e.getAttribute(i)!==o&&e.setAttribute(i,o)}function ae(e){return Array.from(e.childNodes)}function ne(e,i){i=""+i,e.wholeText!==i&&(e.data=i)}let F;function w(e){F=e}const k=[],U=[],C=[],V=[],re=Promise.resolve();let O=!1;function se(){O||(O=!0,re.then(D))}function N(e){C.push(e)}const A=new Set;let $=0;function D(){const e=F;do{for(;$<k.length;){const i=k[$];$++,w(i),le(i.$$)}for(w(null),k.length=0,$=0;U.length;)U.pop()();for(let i=0;i<C.length;i+=1){const o=C[i];A.has(o)||(A.add(o),o())}C.length=0}while(k.length);for(;V.length;)V.pop()();O=!1,A.clear(),w(e)}function le(e){if(e.fragment!==null){e.update(),L(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(N)}}const S=new Set;let de;function K(e,i){e&&e.i&&(S.delete(e),e.i(i))}function ce(e,i,o,a){if(e&&e.o){if(S.has(e))return;S.add(e),de.c.push(()=>{S.delete(e),a&&(o&&e.d(1),a())}),e.o(i)}}function be(e){e&&e.c()}function J(e,i,o,a){const{fragment:t,on_mount:n,on_destroy:r,after_update:c}=e.$$;t&&t.m(i,o),a||N(()=>{const m=n.map(B).filter(ie);r?r.push(...m):L(m),e.$$.on_mount=[]}),c.forEach(N)}function Q(e,i){const o=e.$$;o.fragment!==null&&(L(o.on_destroy),o.fragment&&o.fragment.d(i),o.on_destroy=o.fragment=null,o.ctx=[])}function fe(e,i){e.$$.dirty[0]===-1&&(k.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function W(e,i,o,a,t,n,r,c=[-1]){const m=F;w(e);const s=e.$$={fragment:null,ctx:null,props:n,update:y,not_equal:t,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(m?m.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:i.target||m.$$.root};r&&r(s.root);let g=!1;if(s.ctx=o?o(e,i.props||{},(f,h,...u)=>{const v=u.length?u[0]:h;return s.ctx&&t(s.ctx[f],s.ctx[f]=v)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](v),g&&fe(e,f)),h}):[],s.update(),g=!0,L(s.before_update),s.fragment=a?a(s.ctx):!1,i.target){if(i.hydrate){const f=ae(i.target);s.fragment&&s.fragment.l(f),f.forEach(I)}else s.fragment&&s.fragment.c();i.intro&&K(e.$$.fragment),J(e,i.target,i.anchor,i.customElement),D()}w(m)}class X{$destroy(){Q(this,1),this.$destroy=y}$on(i,o){const a=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return a.push(o),()=>{const t=a.indexOf(o);t!==-1&&a.splice(t,1)}}$set(i){this.$$set&&!oe(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}var me="/vite.svg",ue="/assets/svelte.a39f39b7.svg";function he(e){let i,o,a,t,n;return{c(){i=b("button"),o=E("\u0421\u0447\u0435\u0442\u0447\u0438\u043A: "),a=E(e[0])},m(r,c){R(r,i,c),l(i,o),l(i,a),t||(n=te(i,"click",e[1]),t=!0)},p(r,[c]){c&1&&ne(a,r[0])},i:y,o:y,d(r){r&&I(i),t=!1,n()}}}function pe(e,i,o){let a=0;return[a,()=>{o(0,a+=1)}]}class ge extends X{constructor(i){super(),W(this,i,pe,he,P,{})}}function ve(e){let i,o,a,t,n,r,c,m,s,g,f,h,u,v,z,H,j,M,G,_;return u=new ge({}),{c(){i=b("main"),o=b("div"),a=b("a"),t=b("img"),r=b("a"),c=b("img"),s=x(),g=b("h1"),g.textContent="Vite+Svelte",f=x(),h=b("div"),be(u.$$.fragment),v=x(),z=b("button"),z.textContent="\u041A\u043B\u0430\u0432\u0438\u0448\u0430",H=x(),j=b("p"),j.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite !',M=x(),G=b("p"),G.textContent="Click on the Vite and Svelte logos to learn more",T(t.src,n=me)||d(t,"src",n),d(t,"class","logo svelte-18scy9r"),d(t,"alt","Vite Logo"),d(a,"href","https://vitejs.dev"),d(a,"target","_blank"),T(c.src,m=ue)||d(c,"src",m),d(c,"class","logo svelte svelte-18scy9r"),d(c,"alt","Svelte Logo"),d(r,"href","https://svelte.dev"),d(r,"target","_blank"),d(h,"class","card"),d(z,"class","button is-info"),d(j,"class","testic svelte-18scy9r"),d(G,"class","read-the-docs svelte-18scy9r"),d(i,"class","kv-container  svelte-18scy9r")},m(p,Z){R(p,i,Z),l(i,o),l(o,a),l(a,t),l(o,r),l(r,c),l(i,s),l(i,g),l(i,f),l(i,h),J(u,h,null),l(i,v),l(i,z),l(i,H),l(i,j),l(i,M),l(i,G),_=!0},p:y,i(p){_||(K(u.$$.fragment,p),_=!0)},o(p){ce(u.$$.fragment,p),_=!1},d(p){p&&I(i),Q(u)}}}class xe extends X{constructor(i){super(),W(this,i,null,ve,P,{})}}new xe({target:document.querySelector("section div")});
