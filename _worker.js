var $t=Object.defineProperty;var We=t=>{throw TypeError(t)};var _t=(t,e,s)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>_t(t,typeof e!="symbol"?e+"":e,s),Fe=(t,e,s)=>e.has(t)||We("Cannot "+s);var a=(t,e,s)=>(Fe(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?We("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),u=(t,e,s,i)=>(Fe(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),b=(t,e,s)=>(Fe(t,e,"access private method"),s);var Ke=(t,e,s,i)=>({set _(o){u(t,e,o,s)},get _(){return a(t,e,i)}});var Xe=(t,e,s)=>(i,o)=>{let n=-1;return r(0);async function r(l){if(l<=n)throw new Error("next() called multiple times");n=l;let d,p=!1,c;if(t[l]?(c=t[l][0][0],i.req.routeIndex=l):c=l===t.length&&o||void 0,c)try{d=await c(i,()=>r(l+1))}catch(f){if(f instanceof Error&&e)i.error=f,d=await e(f,i),p=!0;else throw f}else i.finalized===!1&&s&&(d=await s(i));return d&&(i.finalized===!1||p)&&(i.res=d),i}},At=Symbol(),Et=async(t,e=Object.create(null))=>{const{all:s=!1,dot:i=!1}=e,n=(t instanceof ft?t.raw.headers:t.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?St(t,{all:s,dot:i}):{}};async function St(t,e){const s=await t.formData();return s?It(s,e):{}}function It(t,e){const s=Object.create(null);return t.forEach((i,o)=>{e.all||o.endsWith("[]")?Ot(s,o,i):s[o]=i}),e.dot&&Object.entries(s).forEach(([i,o])=>{i.includes(".")&&(Dt(s,i,o),delete s[i])}),s}var Ot=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Dt=(t,e,s)=>{if(/(?:^|\.)__proto__\./.test(e))return;let i=t;const o=e.split(".");o.forEach((n,r)=>{r===o.length-1?i[n]=s:((!i[n]||typeof i[n]!="object"||Array.isArray(i[n])||i[n]instanceof File)&&(i[n]=Object.create(null)),i=i[n])})},at=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Tt=t=>{const{groups:e,path:s}=zt(t),i=at(s);return Rt(i,e)},zt=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,i)=>{const o=`@${i}`;return e.push([o,s]),o}),{groups:e,path:t}},Rt=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[i]=e[s];for(let o=t.length-1;o>=0;o--)if(t[o].includes(i)){t[o]=t[o].replace(i,e[s][1]);break}}return t},Oe={},Ct=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const i=`${t}#${e}`;return Oe[i]||(s[2]?Oe[i]=e&&e[0]!==":"&&e[0]!=="*"?[i,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:Oe[i]=[t,s[1],!0]),Oe[i]}return null},Je=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},Nt=t=>Je(t,decodeURI),dt=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let i=s;for(;i<e.length;i++){const o=e.charCodeAt(i);if(o===37){const n=e.indexOf("?",i),r=e.indexOf("#",i),l=n===-1?r===-1?void 0:r:r===-1?n:Math.min(n,r),d=e.slice(s,l);return Nt(d.includes("%25")?d.replace(/%25/g,"%2525"):d)}else if(o===63||o===35)break}return e.slice(s,i)},Lt=t=>{const e=dt(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},ae=(t,e,...s)=>(s.length&&(e=ae(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),lt=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let i="";return e.forEach(o=>{if(o!==""&&!/\:/.test(o))i+="/"+o;else if(/\:/.test(o))if(/\?/.test(o)){s.length===0&&i===""?s.push("/"):s.push(i);const n=o.replace("?","");i+="/"+n,s.push(i)}else i+="/"+o}),s.filter((o,n,r)=>r.indexOf(o)===n)},Ge=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Je(t,ct):t):t,pt=(t,e,s)=>{let i;if(!s&&e&&!/[%+]/.test(e)){let r=t.indexOf("?",8);if(r===-1)return;for(t.startsWith(e,r+1)||(r=t.indexOf(`&${e}`,r+1));r!==-1;){const l=t.charCodeAt(r+e.length+1);if(l===61){const d=r+e.length+2,p=t.indexOf("&",d);return Ge(t.slice(d,p===-1?void 0:p))}else if(l==38||isNaN(l))return"";r=t.indexOf(`&${e}`,r+1)}if(i=/[%+]/.test(t),!i)return}const o={};i??(i=/[%+]/.test(t));let n=t.indexOf("?",8);for(;n!==-1;){const r=t.indexOf("&",n+1);let l=t.indexOf("=",n);l>r&&r!==-1&&(l=-1);let d=t.slice(n+1,l===-1?r===-1?void 0:r:l);if(i&&(d=Ge(d)),n=r,d==="")continue;let p;l===-1?p="":(p=t.slice(l+1,r===-1?void 0:r),i&&(p=Ge(p))),s?(o[d]&&Array.isArray(o[d])||(o[d]=[]),o[d].push(p)):o[d]??(o[d]=p)}return e?o[e]:o},Mt=pt,Bt=(t,e)=>pt(t,e,!0),ct=decodeURIComponent,Qe=t=>Je(t,ct),pe,E,F,ut,ht,Ve,H,tt,ft=(tt=class{constructor(t,e="/",s=[[]]){v(this,F);h(this,"raw");v(this,pe);v(this,E);h(this,"routeIndex",0);h(this,"path");h(this,"bodyCache",{});v(this,H,t=>{const{bodyCache:e,raw:s}=this,i=e[t];if(i)return i;const o=Object.keys(e)[0];return o?e[o].then(n=>(o==="json"&&(n=JSON.stringify(n)),new Response(n)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,u(this,E,s),u(this,pe,{})}param(t){return t?b(this,F,ut).call(this,t):b(this,F,ht).call(this)}query(t){return Mt(this.url,t)}queries(t){return Bt(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,i)=>{e[i]=s}),e}async parseBody(t){return Et(this,t)}json(){return a(this,H).call(this,"text").then(t=>JSON.parse(t))}text(){return a(this,H).call(this,"text")}arrayBuffer(){return a(this,H).call(this,"arrayBuffer")}blob(){return a(this,H).call(this,"blob")}formData(){return a(this,H).call(this,"formData")}addValidatedData(t,e){a(this,pe)[t]=e}valid(t){return a(this,pe)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[At](){return a(this,E)}get matchedRoutes(){return a(this,E)[0].map(([[,t]])=>t)}get routePath(){return a(this,E)[0].map(([[,t]])=>t)[this.routeIndex].path}},pe=new WeakMap,E=new WeakMap,F=new WeakSet,ut=function(t){const e=a(this,E)[0][this.routeIndex][1][t],s=b(this,F,Ve).call(this,e);return s&&/\%/.test(s)?Qe(s):s},ht=function(){const t={},e=Object.keys(a(this,E)[0][this.routeIndex][1]);for(const s of e){const i=b(this,F,Ve).call(this,a(this,E)[0][this.routeIndex][1][s]);i!==void 0&&(t[s]=/\%/.test(i)?Qe(i):i)}return t},Ve=function(t){return a(this,E)[1]?a(this,E)[1][t]:t},H=new WeakMap,tt),Ft={Stringify:1},gt=async(t,e,s,i,o)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const n=t.callbacks;return n!=null&&n.length?(o?o[0]+=t:o=[t],Promise.all(n.map(l=>l({phase:e,buffer:o,context:i}))).then(l=>Promise.all(l.filter(Boolean).map(d=>gt(d,e,!1,i,o))).then(()=>o[0]))):Promise.resolve(t)},Gt="text/plain; charset=UTF-8",He=(t,e)=>({"Content-Type":t,...e}),ye=(t,e)=>new Response(t,e),$e,_e,N,ce,L,A,Ae,fe,ue,X,Ee,Se,V,de,st,Ht=(st=class{constructor(t,e){v(this,V);v(this,$e);v(this,_e);h(this,"env",{});v(this,N);h(this,"finalized",!1);h(this,"error");v(this,ce);v(this,L);v(this,A);v(this,Ae);v(this,fe);v(this,ue);v(this,X);v(this,Ee);v(this,Se);h(this,"render",(...t)=>(a(this,fe)??u(this,fe,e=>this.html(e)),a(this,fe).call(this,...t)));h(this,"setLayout",t=>u(this,Ae,t));h(this,"getLayout",()=>a(this,Ae));h(this,"setRenderer",t=>{u(this,fe,t)});h(this,"header",(t,e,s)=>{this.finalized&&u(this,A,ye(a(this,A).body,a(this,A)));const i=a(this,A)?a(this,A).headers:a(this,X)??u(this,X,new Headers);e===void 0?i.delete(t):s!=null&&s.append?i.append(t,e):i.set(t,e)});h(this,"status",t=>{u(this,ce,t)});h(this,"set",(t,e)=>{a(this,N)??u(this,N,new Map),a(this,N).set(t,e)});h(this,"get",t=>a(this,N)?a(this,N).get(t):void 0);h(this,"newResponse",(...t)=>b(this,V,de).call(this,...t));h(this,"body",(t,e,s)=>b(this,V,de).call(this,t,e,s));h(this,"text",(t,e,s)=>!a(this,X)&&!a(this,ce)&&!e&&!s&&!this.finalized?new Response(t):b(this,V,de).call(this,t,e,He(Gt,s)));h(this,"json",(t,e,s)=>b(this,V,de).call(this,JSON.stringify(t),e,He("application/json",s)));h(this,"html",(t,e,s)=>{const i=o=>b(this,V,de).call(this,o,e,He("text/html; charset=UTF-8",s));return typeof t=="object"?gt(t,Ft.Stringify,!1,{}).then(i):i(t)});h(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});h(this,"notFound",()=>(a(this,ue)??u(this,ue,()=>ye()),a(this,ue).call(this,this)));u(this,$e,t),e&&(u(this,L,e.executionCtx),this.env=e.env,u(this,ue,e.notFoundHandler),u(this,Se,e.path),u(this,Ee,e.matchResult))}get req(){return a(this,_e)??u(this,_e,new ft(a(this,$e),a(this,Se),a(this,Ee))),a(this,_e)}get event(){if(a(this,L)&&"respondWith"in a(this,L))return a(this,L);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,L))return a(this,L);throw Error("This context has no ExecutionContext")}get res(){return a(this,A)||u(this,A,ye(null,{headers:a(this,X)??u(this,X,new Headers)}))}set res(t){if(a(this,A)&&t){t=ye(t.body,t);for(const[e,s]of a(this,A).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const i=a(this,A).headers.getSetCookie();t.headers.delete("set-cookie");for(const o of i)t.headers.append("set-cookie",o)}else t.headers.set(e,s)}u(this,A,t),this.finalized=!0}get var(){return a(this,N)?Object.fromEntries(a(this,N)):{}}},$e=new WeakMap,_e=new WeakMap,N=new WeakMap,ce=new WeakMap,L=new WeakMap,A=new WeakMap,Ae=new WeakMap,fe=new WeakMap,ue=new WeakMap,X=new WeakMap,Ee=new WeakMap,Se=new WeakMap,V=new WeakSet,de=function(t,e,s){const i=a(this,A)?new Headers(a(this,A).headers):a(this,X)??new Headers;if(typeof e=="object"&&"headers"in e){const n=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[r,l]of n)r.toLowerCase()==="set-cookie"?i.append(r,l):i.set(r,l)}if(s)for(const[n,r]of Object.entries(s))if(typeof r=="string")i.set(n,r);else{i.delete(n);for(const l of r)i.append(n,l)}const o=typeof e=="number"?e:(e==null?void 0:e.status)??a(this,ce);return ye(t,{status:o,headers:i})},st),w="ALL",Vt="all",Jt=["get","post","put","delete","options","patch"],vt="Can not add a route since the matcher is already built.",bt=class extends Error{},Ut="__COMPOSED_HANDLER",qt=t=>t.text("404 Not Found",404),Ze=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},I,k,xt,O,W,De,Te,he,Yt=(he=class{constructor(e={}){v(this,k);h(this,"get");h(this,"post");h(this,"put");h(this,"delete");h(this,"options");h(this,"patch");h(this,"all");h(this,"on");h(this,"use");h(this,"router");h(this,"getPath");h(this,"_basePath","/");v(this,I,"/");h(this,"routes",[]);v(this,O,qt);h(this,"errorHandler",Ze);h(this,"onError",e=>(this.errorHandler=e,this));h(this,"notFound",e=>(u(this,O,e),this));h(this,"fetch",(e,...s)=>b(this,k,Te).call(this,e,s[1],s[0],e.method));h(this,"request",(e,s,i,o)=>e instanceof Request?this.fetch(s?new Request(e,s):e,i,o):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${ae("/",e)}`,s),i,o)));h(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(b(this,k,Te).call(this,e.request,e,void 0,e.request.method))})});[...Jt,Vt].forEach(n=>{this[n]=(r,...l)=>(typeof r=="string"?u(this,I,r):b(this,k,W).call(this,n,a(this,I),r),l.forEach(d=>{b(this,k,W).call(this,n,a(this,I),d)}),this)}),this.on=(n,r,...l)=>{for(const d of[r].flat()){u(this,I,d);for(const p of[n].flat())l.map(c=>{b(this,k,W).call(this,p.toUpperCase(),a(this,I),c)})}return this},this.use=(n,...r)=>(typeof n=="string"?u(this,I,n):(u(this,I,"*"),r.unshift(n)),r.forEach(l=>{b(this,k,W).call(this,w,a(this,I),l)}),this);const{strict:i,...o}=e;Object.assign(this,o),this.getPath=i??!0?e.getPath??dt:Lt}route(e,s){const i=this.basePath(e);return s.routes.map(o=>{var r;let n;s.errorHandler===Ze?n=o.handler:(n=async(l,d)=>(await Xe([],s.errorHandler)(l,()=>o.handler(l,d))).res,n[Ut]=o.handler),b(r=i,k,W).call(r,o.method,o.path,n)}),this}basePath(e){const s=b(this,k,xt).call(this);return s._basePath=ae(this._basePath,e),s}mount(e,s,i){let o,n;i&&(typeof i=="function"?n=i:(n=i.optionHandler,i.replaceRequest===!1?o=d=>d:o=i.replaceRequest));const r=n?d=>{const p=n(d);return Array.isArray(p)?p:[p]}:d=>{let p;try{p=d.executionCtx}catch{}return[d.env,p]};o||(o=(()=>{const d=ae(this._basePath,e),p=d==="/"?0:d.length;return c=>{const f=new URL(c.url);return f.pathname=f.pathname.slice(p)||"/",new Request(f,c)}})());const l=async(d,p)=>{const c=await s(o(d.req.raw),...r(d));if(c)return c;await p()};return b(this,k,W).call(this,w,ae(e,"*"),l),this}},I=new WeakMap,k=new WeakSet,xt=function(){const e=new he({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,u(e,O,a(this,O)),e.routes=this.routes,e},O=new WeakMap,W=function(e,s,i){e=e.toUpperCase(),s=ae(this._basePath,s);const o={basePath:this._basePath,path:s,method:e,handler:i};this.router.add(e,s,[i,o]),this.routes.push(o)},De=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},Te=function(e,s,i,o){if(o==="HEAD")return(async()=>new Response(null,await b(this,k,Te).call(this,e,s,i,"GET")))();const n=this.getPath(e,{env:i}),r=this.router.match(o,n),l=new Ht(e,{path:n,matchResult:r,env:i,executionCtx:s,notFoundHandler:a(this,O)});if(r[0].length===1){let p;try{p=r[0][0][0][0](l,async()=>{l.res=await a(this,O).call(this,l)})}catch(c){return b(this,k,De).call(this,c,l)}return p instanceof Promise?p.then(c=>c||(l.finalized?l.res:a(this,O).call(this,l))).catch(c=>b(this,k,De).call(this,c,l)):p??a(this,O).call(this,l)}const d=Xe(r[0],this.errorHandler,a(this,O));return(async()=>{try{const p=await d(l);if(!p.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return p.res}catch(p){return b(this,k,De).call(this,p,l)}})()},he),mt=[];function Wt(t,e){const s=this.buildAllMatchers(),i=((o,n)=>{const r=s[o]||s[w],l=r[2][n];if(l)return l;const d=n.match(r[0]);if(!d)return[[],mt];const p=d.indexOf("",1);return[r[1][p],d]});return this.match=i,i(t,e)}var Re="[^/]+",we=".*",ke="(?:|/.*)",le=Symbol(),Kt=new Set(".\\+*[^]$()");function Xt(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===we||t===ke?1:e===we||e===ke?-1:t===Re?1:e===Re?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var Q,Z,D,se,Qt=(se=class{constructor(){v(this,Q);v(this,Z);v(this,D,Object.create(null))}insert(e,s,i,o,n){if(e.length===0){if(a(this,Q)!==void 0)throw le;if(n)return;u(this,Q,s);return}const[r,...l]=e,d=r==="*"?l.length===0?["","",we]:["","",Re]:r==="/*"?["","",ke]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let p;if(d){const c=d[1];let f=d[2]||Re;if(c&&d[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw le;if(p=a(this,D)[f],!p){if(Object.keys(a(this,D)).some(g=>g!==we&&g!==ke))throw le;if(n)return;p=a(this,D)[f]=new se,c!==""&&u(p,Z,o.varIndex++)}!n&&c!==""&&i.push([c,a(p,Z)])}else if(p=a(this,D)[r],!p){if(Object.keys(a(this,D)).some(c=>c.length>1&&c!==we&&c!==ke))throw le;if(n)return;p=a(this,D)[r]=new se}p.insert(l,s,i,o,n)}buildRegExpStr(){const s=Object.keys(a(this,D)).sort(Xt).map(i=>{const o=a(this,D)[i];return(typeof a(o,Z)=="number"?`(${i})@${a(o,Z)}`:Kt.has(i)?`\\${i}`:i)+o.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,D=new WeakMap,se),Ce,Ie,it,Zt=(it=class{constructor(){v(this,Ce,{varIndex:0});v(this,Ie,new Qt)}insert(t,e,s){const i=[],o=[];for(let r=0;;){let l=!1;if(t=t.replace(/\{[^}]+\}/g,d=>{const p=`@\\${r}`;return o[r]=[p,d],r++,l=!0,p}),!l)break}const n=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=o.length-1;r>=0;r--){const[l]=o[r];for(let d=n.length-1;d>=0;d--)if(n[d].indexOf(l)!==-1){n[d]=n[d].replace(l,o[r][1]);break}}return a(this,Ie).insert(n,e,i,a(this,Ce),s),i}buildRegExp(){let t=a(this,Ie).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],i=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(o,n,r)=>n!==void 0?(s[++e]=Number(n),"$()"):(r!==void 0&&(i[Number(r)]=++e),"")),[new RegExp(`^${t}`),s,i]}},Ce=new WeakMap,Ie=new WeakMap,it),es=[/^$/,[],Object.create(null)],ze=Object.create(null);function yt(t){return ze[t]??(ze[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function ts(){ze=Object.create(null)}function ss(t){var p;const e=new Zt,s=[];if(t.length===0)return es;const i=t.map(c=>[!/\*|\/:/.test(c[0]),...c]).sort(([c,f],[g,y])=>c?1:g?-1:f.length-y.length),o=Object.create(null);for(let c=0,f=-1,g=i.length;c<g;c++){const[y,$,z]=i[c];y?o[$]=[z.map(([T])=>[T,Object.create(null)]),mt]:f++;let S;try{S=e.insert($,f,y)}catch(T){throw T===le?new bt($):T}y||(s[f]=z.map(([T,j])=>{const R=Object.create(null);for(j-=1;j>=0;j--){const[be,Me]=S[j];R[be]=Me}return[T,R]}))}const[n,r,l]=e.buildRegExp();for(let c=0,f=s.length;c<f;c++)for(let g=0,y=s[c].length;g<y;g++){const $=(p=s[c][g])==null?void 0:p[1];if(!$)continue;const z=Object.keys($);for(let S=0,T=z.length;S<T;S++)$[z[S]]=l[$[z[S]]]}const d=[];for(const c in r)d[c]=s[r[c]];return[n,d,o]}function re(t,e){if(t){for(const s of Object.keys(t).sort((i,o)=>o.length-i.length))if(yt(s).test(e))return[...t[s]]}}var J,U,Ne,jt,ot,is=(ot=class{constructor(){v(this,Ne);h(this,"name","RegExpRouter");v(this,J);v(this,U);h(this,"match",Wt);u(this,J,{[w]:Object.create(null)}),u(this,U,{[w]:Object.create(null)})}add(t,e,s){var l;const i=a(this,J),o=a(this,U);if(!i||!o)throw new Error(vt);i[t]||[i,o].forEach(d=>{d[t]=Object.create(null),Object.keys(d[w]).forEach(p=>{d[t][p]=[...d[w][p]]})}),e==="/*"&&(e="*");const n=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const d=yt(e);t===w?Object.keys(i).forEach(p=>{var c;(c=i[p])[e]||(c[e]=re(i[p],e)||re(i[w],e)||[])}):(l=i[t])[e]||(l[e]=re(i[t],e)||re(i[w],e)||[]),Object.keys(i).forEach(p=>{(t===w||t===p)&&Object.keys(i[p]).forEach(c=>{d.test(c)&&i[p][c].push([s,n])})}),Object.keys(o).forEach(p=>{(t===w||t===p)&&Object.keys(o[p]).forEach(c=>d.test(c)&&o[p][c].push([s,n]))});return}const r=lt(e)||[e];for(let d=0,p=r.length;d<p;d++){const c=r[d];Object.keys(o).forEach(f=>{var g;(t===w||t===f)&&((g=o[f])[c]||(g[c]=[...re(i[f],c)||re(i[w],c)||[]]),o[f][c].push([s,n-p+d+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(a(this,U)).concat(Object.keys(a(this,J))).forEach(e=>{t[e]||(t[e]=b(this,Ne,jt).call(this,e))}),u(this,J,u(this,U,void 0)),ts(),t}},J=new WeakMap,U=new WeakMap,Ne=new WeakSet,jt=function(t){const e=[];let s=t===w;return[a(this,J),a(this,U)].forEach(i=>{const o=i[t]?Object.keys(i[t]).map(n=>[n,i[t][n]]):[];o.length!==0?(s||(s=!0),e.push(...o)):t!==w&&e.push(...Object.keys(i[w]).map(n=>[n,i[w][n]]))}),s?ss(e):null},ot),q,M,nt,os=(nt=class{constructor(t){h(this,"name","SmartRouter");v(this,q,[]);v(this,M,[]);u(this,q,t.routers)}add(t,e,s){if(!a(this,M))throw new Error(vt);a(this,M).push([t,e,s])}match(t,e){if(!a(this,M))throw new Error("Fatal error");const s=a(this,q),i=a(this,M),o=s.length;let n=0,r;for(;n<o;n++){const l=s[n];try{for(let d=0,p=i.length;d<p;d++)l.add(...i[d]);r=l.match(t,e)}catch(d){if(d instanceof bt)continue;throw d}this.match=l.match.bind(l),u(this,q,[l]),u(this,M,void 0);break}if(n===o)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(a(this,M)||a(this,q).length!==1)throw new Error("No active router has been determined yet.");return a(this,q)[0]}},q=new WeakMap,M=new WeakMap,nt),je=Object.create(null),ns=t=>{for(const e in t)return!0;return!1},Y,_,ee,ge,P,B,K,ve,rs=(ve=class{constructor(e,s,i){v(this,B);v(this,Y);v(this,_);v(this,ee);v(this,ge,0);v(this,P,je);if(u(this,_,i||Object.create(null)),u(this,Y,[]),e&&s){const o=Object.create(null);o[e]={handler:s,possibleKeys:[],score:0},u(this,Y,[o])}u(this,ee,[])}insert(e,s,i){u(this,ge,++Ke(this,ge)._);let o=this;const n=Tt(s),r=[];for(let l=0,d=n.length;l<d;l++){const p=n[l],c=n[l+1],f=Ct(p,c),g=Array.isArray(f)?f[0]:p;if(g in a(o,_)){o=a(o,_)[g],f&&r.push(f[1]);continue}a(o,_)[g]=new ve,f&&(a(o,ee).push(f),r.push(f[1])),o=a(o,_)[g]}return a(o,Y).push({[e]:{handler:i,possibleKeys:r.filter((l,d,p)=>p.indexOf(l)===d),score:a(this,ge)}}),o}search(e,s){var c;const i=[];u(this,P,je);let n=[this];const r=at(s),l=[],d=r.length;let p=null;for(let f=0;f<d;f++){const g=r[f],y=f===d-1,$=[];for(let S=0,T=n.length;S<T;S++){const j=n[S],R=a(j,_)[g];R&&(u(R,P,a(j,P)),y?(a(R,_)["*"]&&b(this,B,K).call(this,i,a(R,_)["*"],e,a(j,P)),b(this,B,K).call(this,i,R,e,a(j,P))):$.push(R));for(let be=0,Me=a(j,ee).length;be<Me;be++){const qe=a(j,ee)[be],G=a(j,P)===je?{}:{...a(j,P)};if(qe==="*"){const oe=a(j,_)["*"];oe&&(b(this,B,K).call(this,i,oe,e,a(j,P)),u(oe,P,G),$.push(oe));continue}const[Pt,Ye,xe]=qe;if(!g&&!(xe instanceof RegExp))continue;const C=a(j,_)[Pt];if(xe instanceof RegExp){if(p===null){p=new Array(d);let ne=s[0]==="/"?1:0;for(let me=0;me<d;me++)p[me]=ne,ne+=r[me].length+1}const oe=s.substring(p[f]),Be=xe.exec(oe);if(Be){if(G[Ye]=Be[0],b(this,B,K).call(this,i,C,e,a(j,P),G),ns(a(C,_))){u(C,P,G);const ne=((c=Be[0].match(/\//))==null?void 0:c.length)??0;(l[ne]||(l[ne]=[])).push(C)}continue}}(xe===!0||xe.test(g))&&(G[Ye]=g,y?(b(this,B,K).call(this,i,C,e,G,a(j,P)),a(C,_)["*"]&&b(this,B,K).call(this,i,a(C,_)["*"],e,G,a(j,P))):(u(C,P,G),$.push(C)))}}const z=l.shift();n=z?$.concat(z):$}return i.length>1&&i.sort((f,g)=>f.score-g.score),[i.map(({handler:f,params:g})=>[f,g])]}},Y=new WeakMap,_=new WeakMap,ee=new WeakMap,ge=new WeakMap,P=new WeakMap,B=new WeakSet,K=function(e,s,i,o,n){for(let r=0,l=a(s,Y).length;r<l;r++){const d=a(s,Y)[r],p=d[i]||d[w],c={};if(p!==void 0&&(p.params=Object.create(null),e.push(p),o!==je||n&&n!==je))for(let f=0,g=p.possibleKeys.length;f<g;f++){const y=p.possibleKeys[f],$=c[p.score];p.params[y]=n!=null&&n[y]&&!$?n[y]:o[y]??(n==null?void 0:n[y]),c[p.score]=!0}}},ve),te,rt,as=(rt=class{constructor(){h(this,"name","TrieRouter");v(this,te);u(this,te,new rs)}add(t,e,s){const i=lt(e);if(i){for(let o=0,n=i.length;o<n;o++)a(this,te).insert(t,i[o],s);return}a(this,te).insert(t,e,s)}match(t,e){return a(this,te).search(t,e)}},te=new WeakMap,rt),wt=class extends Yt{constructor(t={}){super(t),this.router=t.router??new os({routers:[new is,new as]})}},ds=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},i=(n=>typeof n=="string"?n==="*"?s.credentials?r=>r||null:()=>n:r=>n===r?r:null:typeof n=="function"?n:r=>n.includes(r)?r:null)(s.origin),o=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(r,l){var c;function d(f,g){r.res.headers.set(f,g)}const p=await i(r.req.header("origin")||"",r);if(p&&d("Access-Control-Allow-Origin",p),s.credentials&&d("Access-Control-Allow-Credentials","true"),(c=s.exposeHeaders)!=null&&c.length&&d("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){(s.origin!=="*"||s.credentials)&&d("Vary","Origin"),s.maxAge!=null&&d("Access-Control-Max-Age",s.maxAge.toString());const f=await o(r.req.header("origin")||"",r);f.length&&d("Access-Control-Allow-Methods",f.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const y=r.req.header("Access-Control-Request-Headers");y&&(g=y.split(/\s*,\s*/))}return g!=null&&g.length&&(d("Access-Control-Allow-Headers",g.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await l(),(s.origin!=="*"||s.credentials)&&r.header("Vary","Origin",{append:!0})}};const m=new wt;m.use("*",ds());const x={drivers:[{id:"d1",name:"홍길동",phone:"010-1234-5678",partner:"ABC협력사",status:"ON_DUTY",lat:37.4985,lng:127.0277,fcm_token:"fcm_d1",created_at:"2026-01-01"},{id:"d2",name:"이영희",phone:"010-2345-6789",partner:"ABC협력사",status:"ON_DUTY",lat:37.4893,lng:127.0036,fcm_token:"fcm_d2",created_at:"2026-01-01"},{id:"d3",name:"김철수",phone:"010-3456-7890",partner:"DEF협력사",status:"ON_DUTY",lat:37.4925,lng:127.0612,fcm_token:"fcm_d3",created_at:"2026-01-01"},{id:"d4",name:"박민준",phone:"010-4567-8901",partner:"ABC협력사",status:"AVAILABLE",lat:37.5005,lng:127.0367,fcm_token:"fcm_d4",created_at:"2026-01-01"},{id:"d5",name:"최지수",phone:"010-5678-9012",partner:"GHI협력사",status:"AVAILABLE",lat:37.5479,lng:126.91,fcm_token:"fcm_d5",created_at:"2026-01-01"},{id:"d6",name:"정수진",phone:"010-6789-0123",partner:"DEF협력사",status:"OFF",lat:37.5564,lng:126.937,fcm_token:"fcm_d6",created_at:"2026-01-01"}],stores:[{id:"s1",name:"강남 1호점",address:"서울 강남구 테헤란로 123",owner_name:"김점주",owner_phone:"010-1111-2222",lat:37.4985,lng:127.028,partner:"ABC협력사"},{id:"s2",name:"서초 2호점",address:"서울 서초구 서초대로 456",owner_name:"이사장",owner_phone:"010-2222-3333",lat:37.487,lng:127.005,partner:"ABC협력사"},{id:"s3",name:"대치 3호점",address:"서울 강남구 대치동 789",owner_name:"박대표",owner_phone:"010-3333-4444",lat:37.4924,lng:127.0617,partner:"DEF협력사"},{id:"s4",name:"역삼 4호점",address:"서울 강남구 역삼로 101",owner_name:"최사장",owner_phone:"010-4444-5555",lat:37.5,lng:127.037,partner:"ABC협력사"},{id:"s5",name:"마포 5호점",address:"서울 마포구 마포대로 202",owner_name:"정대표",owner_phone:"010-5555-6666",lat:37.549,lng:126.916,partner:"GHI협력사"},{id:"s6",name:"홍대 6호점",address:"서울 마포구 홍익로 303",owner_name:"강점주",owner_phone:"010-6666-7777",lat:37.557,lng:126.925,partner:"DEF협력사"},{id:"s7",name:"신촌 7호점",address:"서울 서대문구 신촌로 404",owner_name:"윤사장",owner_phone:"010-7777-8888",lat:37.556,lng:126.938,partner:"DEF협력사"},{id:"s8",name:"합정 8호점",address:"서울 마포구 합정동 505",owner_name:"임대표",owner_phone:"010-8888-9999",lat:37.549,lng:126.9,partner:"GHI협력사"}],jobs:[{id:"j1",store_id:"s1",store_name:"강남 1호점",store_address:"서울 강남구 테헤란로 123",owner_name:"김점주",owner_phone:"010-1111-2222",lat:37.4985,lng:127.028,type:"신규설치",subtype:"POS 단말기",driver_id:"d1",driver_name:"홍길동",partner:"ABC협력사",status:"IN_PROGRESS",scheduled_date:"2026-04-08",scheduled_time:"09:00",checklist:[{id:1,label:"설치 위치 확인",checked:!0,na:!1},{id:2,label:"전원 콘센트 확인",checked:!0,na:!1},{id:3,label:"POS 본체 고정",checked:!0,na:!1},{id:4,label:"모니터 케이블 연결",checked:!1,na:!1},{id:5,label:"결제 단말기 연결",checked:!1,na:!1},{id:6,label:"전원 ON 확인",checked:!1,na:!1},{id:7,label:"초기 설정 완료",checked:!1,na:!1},{id:8,label:"결제 테스트",checked:!1,na:!1}],photos:[],signature:!1,note:"지하 1층 주차불가. 직원 동반 필요.",eta:"14:30",delay:15,created_at:"2026-04-08T08:00:00",completed_at:"",approved_at:""},{id:"j2",store_id:"s2",store_name:"서초 2호점",store_address:"서울 서초구 서초대로 456",owner_name:"이사장",owner_phone:"010-2222-3333",lat:37.487,lng:127.005,type:"AS방문",subtype:"키오스크",driver_id:"d2",driver_name:"이영희",partner:"ABC협력사",status:"DRIVING_TO",scheduled_date:"2026-04-08",scheduled_time:"11:00",checklist:[{id:1,label:"증상 청취",checked:!1,na:!1},{id:2,label:"하드웨어 점검",checked:!1,na:!1},{id:3,label:"소프트웨어 점검",checked:!1,na:!1},{id:4,label:"수리 완료 확인",checked:!1,na:!1},{id:5,label:"테스트 실행",checked:!1,na:!1}],photos:[],signature:!1,note:"터치스크린 오작동 증상.",eta:"11:15",delay:0,created_at:"2026-04-08T09:00:00",completed_at:"",approved_at:""},{id:"j3",store_id:"s3",store_name:"대치 3호점",store_address:"서울 강남구 대치동 789",owner_name:"박대표",owner_phone:"010-3333-4444",lat:37.4924,lng:127.0617,type:"신규설치",subtype:"POS 단말기",driver_id:"d3",driver_name:"김철수",partner:"DEF협력사",status:"DISPATCHED",scheduled_date:"2026-04-08",scheduled_time:"14:00",checklist:[{id:1,label:"설치 위치 확인",checked:!1,na:!1},{id:2,label:"전원 콘센트 확인",checked:!1,na:!1},{id:3,label:"POS 본체 고정",checked:!1,na:!1},{id:4,label:"모니터 케이블 연결",checked:!1,na:!1},{id:5,label:"결제 단말기 연결",checked:!1,na:!1},{id:6,label:"전원 ON 확인",checked:!1,na:!1},{id:7,label:"초기 설정 완료",checked:!1,na:!1},{id:8,label:"결제 테스트",checked:!1,na:!1}],photos:[],signature:!1,note:"",eta:"14:00",delay:0,created_at:"2026-04-08T09:30:00",completed_at:"",approved_at:""},{id:"j4",store_id:"s4",store_name:"역삼 4호점",store_address:"서울 강남구 역삼로 101",owner_name:"최사장",owner_phone:"010-4444-5555",lat:37.5,lng:127.037,type:"POS교체",subtype:"POS 단말기",driver_id:null,driver_name:"",partner:"",status:"UNASSIGNED",scheduled_date:"2026-04-08",scheduled_time:"16:00",checklist:[{id:1,label:"기존 POS 데이터 백업",checked:!1,na:!1},{id:2,label:"기존 장비 철거",checked:!1,na:!1},{id:3,label:"신규 장비 설치",checked:!1,na:!1},{id:4,label:"데이터 이전",checked:!1,na:!1},{id:5,label:"결제 테스트",checked:!1,na:!1},{id:6,label:"영수증 출력 테스트",checked:!1,na:!1}],photos:[],signature:!1,note:"구형 POS 1대 교체.",eta:"",delay:0,created_at:"2026-04-08T10:00:00",completed_at:"",approved_at:""},{id:"j5",store_id:"s5",store_name:"마포 5호점",store_address:"서울 마포구 마포대로 202",owner_name:"정대표",owner_phone:"010-5555-6666",lat:37.549,lng:126.916,type:"정기점검",subtype:"키오스크",driver_id:null,driver_name:"",partner:"",status:"UNASSIGNED",scheduled_date:"2026-04-08",scheduled_time:"10:00",checklist:[{id:1,label:"외관 점검",checked:!1,na:!1},{id:2,label:"화면 밝기 확인",checked:!1,na:!1},{id:3,label:"결제 모듈 점검",checked:!1,na:!1},{id:4,label:"영수증 프린터 점검",checked:!1,na:!1},{id:5,label:"네트워크 연결 확인",checked:!1,na:!1},{id:6,label:"소프트웨어 업데이트",checked:!1,na:!1}],photos:[],signature:!1,note:"6개월 정기점검.",eta:"",delay:0,created_at:"2026-04-08T10:30:00",completed_at:"",approved_at:""},{id:"j6",store_id:"s1",store_name:"강남 1호점",store_address:"서울 강남구 테헤란로 123",owner_name:"김점주",owner_phone:"010-1111-2222",lat:37.4985,lng:127.028,type:"AS방문",subtype:"POS 단말기",driver_id:"d4",driver_name:"박민준",partner:"ABC협력사",status:"COMPLETED",scheduled_date:"2026-04-07",scheduled_time:"10:00",checklist:[{id:1,label:"증상 청취",checked:!0,na:!1},{id:2,label:"하드웨어 점검",checked:!0,na:!1},{id:3,label:"소프트웨어 점검",checked:!0,na:!1},{id:4,label:"수리 완료 확인",checked:!0,na:!1},{id:5,label:"테스트 실행",checked:!0,na:!1}],photos:["photo1.jpg","photo2.jpg"],signature:!0,note:"프린터 헤드 교체 완료.",eta:"10:00",delay:0,created_at:"2026-04-07T09:00:00",completed_at:"2026-04-07T11:30:00",approved_at:""}],issues:[{id:"i1",job_id:"j1",store_name:"강남 1호점",driver_name:"홍길동",type:"설치 불가",desc:"콘센트 위치 불일치로 연장선 필요",priority:"P0",status:"PENDING",created_at:"2026-04-08T14:23:00"},{id:"i2",job_id:"j2",store_name:"서초 2호점",driver_name:"이영희",type:"고객 부재",desc:"점주 연락 두절, 30분 대기 중",priority:"P0",status:"PENDING",created_at:"2026-04-08T13:45:00"},{id:"i3",job_id:"j3",store_name:"대치 3호점",driver_name:"김철수",type:"부품 누락",desc:"어댑터 미지참, 물류팀 긴급 요청",priority:"P1",status:"PROCESSING",created_at:"2026-04-08T12:30:00"}],history:[{id:"h1",store_id:"s1",job_id:"j6",store_name:"강남 1호점",type:"AS방문",driver_name:"박민준",status:"COMPLETED",completed_at:"2026-04-07T11:30:00",note:"프린터 헤드 교체",photos:["photo1.jpg","photo2.jpg"]},{id:"h2",store_id:"s1",job_id:"j0",store_name:"강남 1호점",type:"신규설치",driver_name:"홍길동",status:"APPROVED",completed_at:"2026-03-15T14:00:00",note:"POS 신규 설치 완료",photos:["photo3.jpg"]}]};let ls=7;function Pe(){return new Date().toISOString()}function Le(t){return t+"_"+Date.now()+"_"+Math.random().toString(36).slice(2,6)}function ie(t){return x.jobs.find(e=>e.id===t)}function Ue(t){return x.drivers.find(e=>e.id===t)}m.get("/api/drivers",t=>t.json(x.drivers));m.post("/api/drivers",async t=>{const e=await t.req.json(),s={id:Le("d"),name:e.name,phone:e.phone,partner:e.partner,status:"AVAILABLE",lat:37.5665,lng:126.978,fcm_token:"",created_at:Pe()};return x.drivers.push(s),t.json(s,201)});m.patch("/api/drivers/:id",async t=>{const e=Ue(t.req.param("id"));if(!e)return t.json({error:"not found"},404);const s=await t.req.json();return Object.assign(e,s),t.json(e)});m.delete("/api/drivers/:id",t=>{const e=x.drivers.findIndex(s=>s.id===t.req.param("id"));return e<0?t.json({error:"not found"},404):(x.drivers.splice(e,1),t.json({ok:!0}))});m.get("/api/stores",t=>t.json(x.stores));m.post("/api/stores",async t=>{const e=await t.req.json(),s={id:Le("s"),name:e.name,address:e.address,owner_name:e.owner_name,owner_phone:e.owner_phone,lat:e.lat||37.5665,lng:e.lng||126.978,partner:e.partner||""};return x.stores.push(s),t.json(s,201)});m.delete("/api/stores/:id",t=>{const e=x.stores.findIndex(s=>s.id===t.req.param("id"));return e<0?t.json({error:"not found"},404):(x.stores.splice(e,1),t.json({ok:!0}))});m.get("/api/jobs",t=>{const{date:e,status:s,driver_id:i}=t.req.query();let o=[...x.jobs];return e&&(o=o.filter(n=>n.scheduled_date===e)),s&&(o=o.filter(n=>n.status===s)),i&&(o=o.filter(n=>n.driver_id===i)),t.json(o)});m.get("/api/jobs/:id",t=>{const e=ie(t.req.param("id"));return e?t.json(e):t.json({error:"not found"},404)});m.post("/api/jobs",async t=>{const e=await t.req.json(),s=x.stores.find(o=>o.id===e.store_id),i={id:"j"+ls++,store_id:e.store_id,store_name:(s==null?void 0:s.name)||e.store_name||"",store_address:(s==null?void 0:s.address)||e.store_address||"",owner_name:(s==null?void 0:s.owner_name)||e.owner_name||"",owner_phone:(s==null?void 0:s.owner_phone)||e.owner_phone||"",lat:(s==null?void 0:s.lat)||e.lat||37.5665,lng:(s==null?void 0:s.lng)||e.lng||126.978,type:e.type,subtype:e.subtype||"",driver_id:null,driver_name:"",partner:"",status:"UNASSIGNED",scheduled_date:e.scheduled_date,scheduled_time:e.scheduled_time||"09:00",checklist:ps(e.type),photos:[],signature:!1,note:e.note||"",eta:"",delay:0,created_at:Pe(),completed_at:"",approved_at:""};return x.jobs.push(i),t.json(i,201)});function ps(t){const e={신규설치:["설치 위치 확인","전원 콘센트 확인","POS 본체 고정","모니터 케이블 연결","결제 단말기 연결","전원 ON 확인","초기 설정 완료","결제 테스트"],AS방문:["증상 청취","하드웨어 점검","소프트웨어 점검","수리 완료 확인","테스트 실행"],POS교체:["기존 POS 데이터 백업","기존 장비 철거","신규 장비 설치","데이터 이전","결제 테스트","영수증 출력 테스트"],정기점검:["외관 점검","화면 밝기 확인","결제 모듈 점검","영수증 프린터 점검","네트워크 연결 확인","소프트웨어 업데이트"]};return(e[t]||e.신규설치).map((s,i)=>({id:i+1,label:s,checked:!1,na:!1}))}m.post("/api/jobs/:id/assign",async t=>{const e=ie(t.req.param("id"));if(!e)return t.json({error:"not found"},404);const{driver_id:s}=await t.req.json(),i=Ue(s);return i?(e.driver_id=s,e.driver_name=i.name,e.partner=i.partner,e.status="DISPATCHED",e.eta=e.scheduled_time,i.status==="AVAILABLE"&&(i.status="ON_DUTY"),t.json(e)):t.json({error:"driver not found"},404)});m.post("/api/jobs/auto-assign",async t=>{const e=x.jobs.filter(o=>o.status==="UNASSIGNED"),s=x.drivers.filter(o=>o.status!=="OFF");let i=0;for(const o of e){let n=s.reduce((r,l)=>{const d=Math.hypot(r.lat-o.lat,r.lng-o.lng);return Math.hypot(l.lat-o.lat,l.lng-o.lng)<d?l:r},s[0]);n&&(o.driver_id=n.id,o.driver_name=n.name,o.partner=n.partner,o.status="DISPATCHED",o.eta=o.scheduled_time,n.status==="AVAILABLE"&&(n.status="ON_DUTY"),i++)}return t.json({assigned:i,total:e.length})});m.patch("/api/jobs/:id/status",async t=>{var o;const e=ie(t.req.param("id"));if(!e)return t.json({error:"not found"},404);const{status:s}=await t.req.json();if(!((o={DISPATCHED:["DRIVING_TO","CANCELLED"],DRIVING_TO:["ARRIVED","CANCELLED"],ARRIVED:["IN_PROGRESS"],IN_PROGRESS:["COMPLETED","CANCELLED"],COMPLETED:["APPROVED","REJECTED"],REJECTED:["IN_PROGRESS"]}[e.status])!=null&&o.includes(s)))return t.json({error:`${e.status} → ${s} 전환 불가`},422);if(e.status=s,s==="COMPLETED"&&(e.completed_at=Pe(),x.history.push({id:Le("h"),store_id:e.store_id,job_id:e.id,store_name:e.store_name,type:e.type,driver_name:e.driver_name,status:"COMPLETED",completed_at:e.completed_at,note:e.note,photos:e.photos})),s==="APPROVED"){e.approved_at=Pe();const n=x.history.find(l=>l.job_id===e.id);if(n&&(n.status="APPROVED"),x.jobs.filter(l=>l.driver_id===e.driver_id&&["DISPATCHED","DRIVING_TO","ARRIVED","IN_PROGRESS"].includes(l.status)).length===0){const l=Ue(e.driver_id||"");l&&(l.status="AVAILABLE")}}return s==="CANCELLED"&&(e.driver_id=null,e.driver_name="",e.partner="",e.status="CANCELLED"),t.json(e)});m.patch("/api/jobs/:id/checklist",async t=>{const e=ie(t.req.param("id"));if(!e)return t.json({error:"not found"},404);const{checklist:s}=await t.req.json();return e.checklist=s,t.json(e)});m.post("/api/jobs/:id/photos",async t=>{const e=ie(t.req.param("id"));if(!e)return t.json({error:"not found"},404);const{photo_url:s}=await t.req.json();return e.photos.push(s||`photo_${Date.now()}.jpg`),t.json(e)});m.post("/api/jobs/:id/signature",async t=>{const e=ie(t.req.param("id"));return e?(e.signature=!0,t.json(e)):t.json({error:"not found"},404)});m.get("/api/issues",t=>t.json(x.issues));m.post("/api/issues",async t=>{const e=await t.req.json(),s=ie(e.job_id),i={id:Le("i"),job_id:e.job_id,store_name:(s==null?void 0:s.store_name)||e.store_name||"",driver_name:(s==null?void 0:s.driver_name)||e.driver_name||"",type:e.type,desc:e.desc,priority:e.priority||"P1",status:"PENDING",created_at:Pe()};return x.issues.push(i),t.json(i,201)});m.patch("/api/issues/:id",async t=>{const e=x.issues.find(i=>i.id===t.req.param("id"));if(!e)return t.json({error:"not found"},404);const s=await t.req.json();return Object.assign(e,s),t.json(e)});m.get("/api/history",t=>{const{store_id:e}=t.req.query();let s=[...x.history].sort((i,o)=>o.completed_at.localeCompare(i.completed_at));return e&&(s=s.filter(i=>i.store_id===e)),t.json(s)});m.get("/api/dashboard",t=>{const e=new Date().toISOString().slice(0,10),s=x.jobs.filter(i=>i.scheduled_date===e);return t.json({total:s.length,completed:s.filter(i=>["COMPLETED","APPROVED"].includes(i.status)).length,in_progress:s.filter(i=>["IN_PROGRESS","ARRIVED","DRIVING_TO"].includes(i.status)).length,unassigned:s.filter(i=>i.status==="UNASSIGNED").length,urgent_issues:x.issues.filter(i=>i.status==="PENDING"&&i.priority==="P0").length,drivers_active:x.drivers.filter(i=>i.status==="ON_DUTY").length})});m.get("/favicon.svg",t=>(t.header("Content-Type","image/svg+xml"),t.body('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#FF6B35"/><text x="16" y="22" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="white">FO</text></svg>')));m.get("*",t=>t.html(cs));const cs=`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>FieldOps</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
:root{
  --p:#FF6B35;--p2:#E55A24;--p-light:#FFF3EE;
  --blue:#1A6EFF;--blue-light:#EFF5FF;
  --green:#00C471;--green-light:#E6FAF2;
  --red:#FF3B30;--red-light:#FFF0EF;
  --yellow:#FFB800;--yellow-light:#FFFBEB;
  --purple:#8B5CF6;--purple-light:#F5F3FF;
  --gray:#F2F3F5;--gray2:#E8E9EB;--gray3:#C7C9CC;
  --text:#191F28;--text2:#6B7280;--text3:#9CA3AF;
  --white:#FFFFFF;--border:#E5E7EB;
  --shadow:0 2px 12px rgba(0,0,0,0.08);
  --shadow2:0 8px 32px rgba(0,0,0,0.12);
  --r:12px;--r2:8px;--r3:20px;
}
body{font-family:'Pretendard',sans-serif;background:var(--gray);color:var(--text);font-size:14px;line-height:1.5;}
button{cursor:pointer;border:none;outline:none;font-family:inherit;}
input,select,textarea{font-family:inherit;outline:none;}
a{text-decoration:none;color:inherit;}

/* LAYOUT */
#app{display:flex;height:100vh;overflow:hidden;}
#sidebar{width:220px;background:var(--white);border-right:1px solid var(--border);display:flex;flex-direction:column;flex-shrink:0;transition:width .2s;}
#sidebar.collapsed{width:64px;}
#main{flex:1;display:flex;flex-direction:column;overflow:hidden;}
#topbar{height:56px;background:var(--white);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 20px;gap:12px;flex-shrink:0;}
#content{flex:1;overflow-y:auto;padding:20px;}

/* SIDEBAR */
.sb-logo{height:56px;display:flex;align-items:center;padding:0 18px;gap:10px;border-bottom:1px solid var(--border);}
.sb-logo-icon{width:32px;height:32px;background:var(--p);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px;flex-shrink:0;}
.sb-logo-text{font-size:16px;font-weight:800;color:var(--text);}
.sb-menu{flex:1;padding:8px 0;overflow-y:auto;}
.sb-item{display:flex;align-items:center;gap:10px;padding:10px 16px;margin:2px 8px;border-radius:var(--r2);cursor:pointer;transition:background .15s;font-size:13.5px;font-weight:500;color:var(--text2);position:relative;}
.sb-item:hover{background:var(--gray);}
.sb-item.active{background:var(--p-light);color:var(--p);font-weight:700;}
.sb-item i{width:18px;text-align:center;font-size:15px;}
.sb-item .badge{margin-left:auto;background:var(--red);color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 6px;min-width:18px;text-align:center;}
.sb-item .badge.yellow{background:var(--yellow);color:var(--text);}
.sb-divider{height:1px;background:var(--border);margin:6px 16px;}
#sidebar.collapsed .sb-logo-text,#sidebar.collapsed .sb-item span,#sidebar.collapsed .badge{display:none;}
#sidebar.collapsed .sb-item{justify-content:center;padding:10px;}

/* TOPBAR */
.tb-title{font-size:17px;font-weight:700;}
.tb-space{flex:1;}
.tb-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:var(--r2);font-size:13px;font-weight:600;transition:all .15s;}
.tb-btn.primary{background:var(--p);color:#fff;}
.tb-btn.primary:hover{background:var(--p2);}
.tb-btn.ghost{background:var(--gray);color:var(--text);}
.tb-btn.ghost:hover{background:var(--gray2);}
.tb-avatar{width:34px;height:34px;border-radius:50%;background:var(--p);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;cursor:pointer;}

/* CARDS */
.card{background:var(--white);border-radius:var(--r);border:1px solid var(--border);padding:20px;}
.card-sm{background:var(--white);border-radius:var(--r);border:1px solid var(--border);padding:14px 16px;}

/* KPI */
.kpi-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:20px;}
.kpi{background:var(--white);border-radius:var(--r);border:1px solid var(--border);padding:16px;cursor:pointer;transition:box-shadow .2s;}
.kpi:hover{box-shadow:var(--shadow);}
.kpi-label{font-size:11.5px;font-weight:600;color:var(--text2);margin-bottom:8px;display:flex;align-items:center;gap:5px;}
.kpi-val{font-size:28px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums;}
.kpi-sub{font-size:11px;color:var(--text3);margin-top:4px;}

/* TABLES */
.tbl-wrap{background:var(--white);border-radius:var(--r);border:1px solid var(--border);overflow:hidden;}
table{width:100%;border-collapse:collapse;}
thead th{background:var(--gray);padding:10px 14px;text-align:left;font-size:12px;font-weight:700;color:var(--text2);border-bottom:1px solid var(--border);white-space:nowrap;}
tbody td{padding:11px 14px;font-size:13px;border-bottom:1px solid var(--border);color:var(--text);}
tbody tr:last-child td{border-bottom:none;}
tbody tr:hover td{background:#FAFAFA;cursor:pointer;}
td.num{text-align:right;font-variant-numeric:tabular-nums;}

/* TAGS */
.tag{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:20px;font-size:11.5px;font-weight:600;white-space:nowrap;}
.tag.orange{background:var(--p-light);color:var(--p);}
.tag.blue{background:var(--blue-light);color:var(--blue);}
.tag.green{background:var(--green-light);color:#00963A;}
.tag.red{background:var(--red-light);color:var(--red);}
.tag.yellow{background:var(--yellow-light);color:#B45309;}
.tag.purple{background:var(--purple-light);color:var(--purple);}
.tag.gray{background:var(--gray);color:var(--text2);}

/* STATUS DOTS */
.dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0;}
.dot.green{background:var(--green);}
.dot.orange{background:var(--p);}
.dot.red{background:var(--red);}
.dot.gray{background:var(--gray3);}
.dot.blue{background:var(--blue);}
.dot.yellow{background:var(--yellow);}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:9px 18px;border-radius:var(--r2);font-size:13.5px;font-weight:600;transition:all .15s;white-space:nowrap;}
.btn-p{background:var(--p);color:#fff;} .btn-p:hover{background:var(--p2);}
.btn-b{background:var(--blue);color:#fff;} .btn-b:hover{background:#1255CC;}
.btn-g{background:var(--green);color:#fff;} .btn-g:hover{background:#00A360;}
.btn-r{background:var(--red);color:#fff;} .btn-r:hover{background:#D93025;}
.btn-ghost{background:var(--gray);color:var(--text);} .btn-ghost:hover{background:var(--gray2);}
.btn-outline{background:#fff;color:var(--text);border:1.5px solid var(--border);} .btn-outline:hover{background:var(--gray);}
.btn-sm{padding:6px 12px;font-size:12px;border-radius:6px;}
.btn-lg{padding:13px 24px;font-size:15px;border-radius:var(--r);}
.btn:disabled{opacity:.45;cursor:not-allowed;}

/* FORMS */
.form-row{display:flex;gap:12px;margin-bottom:14px;}
.form-group{display:flex;flex-direction:column;gap:5px;flex:1;}
.form-group label{font-size:12px;font-weight:700;color:var(--text2);}
.form-group input,.form-group select,.form-group textarea{padding:9px 12px;border:1.5px solid var(--border);border-radius:var(--r2);font-size:13.5px;color:var(--text);transition:border .15s;background:#fff;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--p);}
.form-group textarea{resize:vertical;min-height:70px;}

/* MODAL */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
.modal{background:#fff;border-radius:16px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow2);}
.modal-hd{padding:20px 20px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);}
.modal-hd h3{font-size:17px;font-weight:700;}
.modal-close{width:32px;height:32px;border-radius:50%;background:var(--gray);border:none;font-size:16px;display:flex;align-items:center;justify-content:center;cursor:pointer;}
.modal-bd{padding:20px;}
.modal-ft{padding:14px 20px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end;}

/* PANEL */
.panel{position:fixed;top:0;right:-420px;width:420px;height:100vh;background:#fff;z-index:900;box-shadow:-4px 0 24px rgba(0,0,0,.12);transition:right .25s;overflow-y:auto;}
.panel.open{right:0;}
.panel-hd{padding:16px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);position:sticky;top:0;background:#fff;z-index:1;}
.panel-hd h3{font-size:16px;font-weight:700;}

/* ALERT */
.alert{display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border-radius:var(--r2);margin-bottom:14px;font-size:13px;}
.alert.danger{background:var(--red-light);color:#B91C1C;border:1px solid #FECACA;}
.alert.warning{background:var(--yellow-light);color:#92400E;border:1px solid #FDE68A;}
.alert.info{background:var(--blue-light);color:#1E40AF;border:1px solid #BFDBFE;}
.alert.success{background:var(--green-light);color:#065F46;border:1px solid #A7F3D0;}

/* TOAST */
#toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1F2937;color:#fff;padding:11px 22px;border-radius:25px;font-size:13.5px;font-weight:500;z-index:9999;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap;box-shadow:var(--shadow2);}

/* TABS */
.tabs{display:flex;border-bottom:2px solid var(--border);margin-bottom:16px;}
.tab{padding:9px 18px;font-size:13.5px;font-weight:500;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s;}
.tab.active{color:var(--p);border-bottom-color:var(--p);font-weight:700;}
.tab:hover:not(.active){color:var(--text);}

/* SEARCH */
.search-wrap{display:flex;align-items:center;gap:8px;background:#fff;border:1.5px solid var(--border);border-radius:var(--r2);padding:0 12px;transition:border .15s;}
.search-wrap:focus-within{border-color:var(--p);}
.search-wrap i{color:var(--text3);}
.search-wrap input{border:none;padding:9px 4px;font-size:13.5px;width:200px;}

/* PROGRESS */
.prog-bar{height:6px;background:var(--gray2);border-radius:3px;overflow:hidden;}
.prog-fill{height:100%;border-radius:3px;transition:width .3s;}

/* AVATAR */
.av{border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0;}
.av-sm{width:28px;height:28px;font-size:11px;}
.av-md{width:36px;height:36px;font-size:14px;}
.av-lg{width:48px;height:48px;font-size:18px;}

/* JOB CARD */
.job-card{background:#fff;border:1.5px solid var(--border);border-radius:var(--r);padding:14px;position:relative;overflow:hidden;cursor:pointer;transition:box-shadow .15s;}
.job-card:hover{box-shadow:var(--shadow);}
.job-card-bar{position:absolute;left:0;top:0;bottom:0;width:4px;}
.job-card-body{padding-left:10px;}

/* CHIPS */
.chip{display:inline-flex;align-items:center;gap:4px;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:700;}

/* MOBILE APP */
#mobile-toggle{position:fixed;bottom:20px;right:20px;z-index:800;width:52px;height:52px;border-radius:50%;background:var(--blue);color:#fff;font-size:20px;border:none;box-shadow:0 4px 16px rgba(26,110,255,.4);transition:transform .2s;}
#mobile-toggle:hover{transform:scale(1.1);}
#mobile-wrap{position:fixed;bottom:82px;right:20px;z-index:800;display:none;}
#mobile-frame{width:375px;height:700px;background:#fff;border-radius:36px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.25);border:8px solid #1a1a1a;}

/* APP INNER */
.app-wrap{height:100%;display:flex;flex-direction:column;background:#F8F9FA;font-family:'Pretendard',sans-serif;}
.app-status-bar{height:24px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 12px;font-size:10px;font-weight:600;}
.app-nav{background:#fff;border-bottom:1px solid var(--border);padding:10px 16px;display:flex;align-items:center;gap:10px;}
.app-nav h2{font-size:16px;font-weight:700;flex:1;text-align:center;}
.app-body{flex:1;overflow-y:auto;}
.app-tabbar{height:60px;background:#fff;border-top:1px solid var(--border);display:grid;grid-template-columns:repeat(3,1fr);flex-shrink:0;}
.app-tab-item{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:10px;font-weight:500;color:var(--text3);cursor:pointer;}
.app-tab-item.on{color:var(--p);}
.app-tab-item i{font-size:18px;}
.app-card{background:#fff;border-radius:14px;margin:12px;padding:14px;border:1px solid var(--border);}
.app-card.active{border-color:var(--p);background:var(--p-light);}
.app-btn{width:100%;padding:14px;border-radius:12px;font-size:15px;font-weight:700;border:none;margin-top:10px;}
.app-btn.primary{background:var(--p);color:#fff;}
.app-btn.blue{background:var(--blue);color:#fff;}
.app-btn.green{background:var(--green);color:#fff;}
.app-btn.gray{background:var(--gray2);color:var(--text2);}
.app-btn.outline{background:#fff;color:var(--p);border:1.5px solid var(--p);}
.app-step-bar{display:flex;padding:12px 14px;gap:6px;}
.app-step{flex:1;height:4px;border-radius:2px;background:var(--gray2);}
.app-step.done{background:var(--green);}
.app-step.active{background:var(--p);}
.app-check{display:flex;align-items:center;gap:12px;background:#fff;border-radius:10px;padding:12px 14px;margin:0 12px 6px;border:1px solid var(--border);}
.app-check.done{border-left:3px solid var(--green);}
.app-checkbox{width:22px;height:22px;border-radius:6px;border:2px solid var(--gray3);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.app-checkbox.on{background:var(--green);border-color:var(--green);}
.photo-slot{aspect-ratio:1;border-radius:10px;border:2px dashed var(--gray3);display:flex;align-items:center;justify-content:center;font-size:26px;color:var(--gray3);cursor:pointer;background:#fafafa;}
.photo-slot.filled{border-style:solid;border-color:var(--green);background:var(--green-light);font-size:22px;}
.sign-pad{height:140px;border:2px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#fafafa;}
.sign-pad.done{border-color:var(--green);background:var(--green-light);}
.offline-bar{background:var(--yellow-light);border-bottom:1px solid #FDE68A;padding:6px 14px;display:flex;align-items:center;gap:6px;font-size:11px;color:#92400E;font-weight:600;}

/* MAP PLACEHOLDER */
.map-ph{background:linear-gradient(135deg,#E0F2FE,#BAE6FD);border-radius:var(--r);overflow:hidden;position:relative;}

/* SCROLLBAR */
::-webkit-scrollbar{width:4px;height:4px;}
::-webkit-scrollbar-thumb{background:var(--gray2);border-radius:2px;}
::-webkit-scrollbar-track{background:transparent;}

/* RESPONSIVE */
@media(max-width:1400px){.kpi-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:1100px){
  #sidebar{width:64px;}
  .sb-logo-text,.sb-item span,.badge{display:none;}
  .sb-item{justify-content:center;padding:10px;}
  #content{padding:14px;}
}
</style>
</head>
<body>
<div id="app">
  <!-- SIDEBAR -->
  <nav id="sidebar">
    <div class="sb-logo">
      <div class="sb-logo-icon">FO</div>
      <span class="sb-logo-text">FieldOps</span>
    </div>
    <div class="sb-menu">
      <div class="sb-item active" data-page="dashboard" onclick="nav('dashboard')">
        <i class="fa-solid fa-chart-line"></i><span>대시보드</span>
      </div>
      <div class="sb-item" data-page="jobs" onclick="nav('jobs')">
        <i class="fa-solid fa-briefcase"></i><span>작업 목록</span>
        <span class="badge" id="sb-unassigned">0</span>
      </div>
      <div class="sb-item" data-page="schedule" onclick="nav('schedule')">
        <i class="fa-solid fa-calendar-check"></i><span>스케줄 배정</span>
      </div>
      <div class="sb-item" data-page="monitor" onclick="nav('monitor')">
        <i class="fa-solid fa-map-location-dot"></i><span>실시간 모니터</span>
      </div>
      <div class="sb-divider"></div>
      <div class="sb-item" data-page="issues" onclick="nav('issues')">
        <i class="fa-solid fa-triangle-exclamation"></i><span>이슈 관리</span>
        <span class="badge" id="sb-issues">0</span>
      </div>
      <div class="sb-item" data-page="inspect" onclick="nav('inspect')">
        <i class="fa-solid fa-clipboard-check"></i><span>완료 검수</span>
        <span class="badge yellow" id="sb-inspect">0</span>
      </div>
      <div class="sb-item" data-page="history" onclick="nav('history')">
        <i class="fa-solid fa-clock-rotate-left"></i><span>작업 히스토리</span>
      </div>
      <div class="sb-divider"></div>
      <div class="sb-item" data-page="drivers" onclick="nav('drivers')">
        <i class="fa-solid fa-users"></i><span>기사 관리</span>
      </div>
      <div class="sb-item" data-page="stores" onclick="nav('stores')">
        <i class="fa-solid fa-store"></i><span>점포 관리</span>
      </div>
    </div>
  </nav>

  <!-- MAIN -->
  <div id="main">
    <div id="topbar">
      <span class="tb-title" id="tb-title">대시보드</span>
      <div class="tb-space"></div>
      <span style="font-size:12px;color:var(--text2)" id="tb-date"></span>
      <button class="tb-btn primary" id="tb-cta" onclick="tbCTA()"><i class="fa-solid fa-plus"></i> 작업 등록</button>
      <div class="tb-avatar" onclick="showToast('관리자 메뉴')" title="관리자">관</div>
    </div>
    <div id="content"></div>
  </div>
</div>

<!-- RIGHT PANEL -->
<div class="panel" id="rp">
  <div class="panel-hd">
    <h3 id="rp-title">상세</h3>
    <button class="modal-close" onclick="closePanel()">✕</button>
  </div>
  <div id="rp-body" style="padding:16px;"></div>
</div>

<!-- MODAL -->
<div class="modal-bg" id="modal-bg" style="display:none" onclick="if(event.target===this)closeModal()">
  <div class="modal" id="modal-box">
    <div class="modal-hd"><h3 id="modal-title"></h3><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-bd" id="modal-body"></div>
    <div class="modal-ft" id="modal-ft"></div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<!-- MOBILE TOGGLE -->
<button id="mobile-toggle" onclick="toggleMobile()" title="기사 앱">
  <i class="fa-solid fa-mobile-screen-button"></i>
</button>
<div id="mobile-wrap">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;padding:0 4px;">
    <span style="font-size:12px;font-weight:700;color:var(--blue);background:var(--blue-light);padding:4px 10px;border-radius:6px;">📱 기사 앱</span>
    <button onclick="toggleMobile()" style="background:none;border:none;font-size:16px;color:var(--text2);">✕</button>
  </div>
  <div id="mobile-frame">
    <div class="app-wrap" id="app-screen"></div>
  </div>
</div>

<script>
// ============================================================
// STATE
// ============================================================
const S = {
  page: 'dashboard',
  jobs: [], drivers: [], stores: [], issues: [], history: [], dashboard: {},
  panel: null,
  mobile: false,
  app: {
    tab: 'home',        // home | detail | arrive | work | checklist | photo | sign | complete | issue
    jobId: null,
    driverId: 'd1',
    checklist: [],
    photos: [],
    signed: false,
    offline: false,
  }
}

const API = '/api'
const fetch2 = (url, opts) => fetch(url, { headers:{'Content-Type':'application/json'}, ...opts })

async function loadAll() {
  const [j,d,s,i,h,dash] = await Promise.all([
    fetch2(API+'/jobs?date=2026-04-08').then(r=>r.json()),
    fetch2(API+'/drivers').then(r=>r.json()),
    fetch2(API+'/stores').then(r=>r.json()),
    fetch2(API+'/issues').then(r=>r.json()),
    fetch2(API+'/history').then(r=>r.json()),
    fetch2(API+'/dashboard').then(r=>r.json()),
  ])
  S.jobs=j; S.drivers=d; S.stores=s; S.issues=i; S.history=h; S.dashboard=dash
  updateBadges()
}

function updateBadges() {
  const unassigned = S.jobs.filter(j=>j.status==='UNASSIGNED').length
  const issues = S.issues.filter(i=>i.status==='PENDING').length
  const inspect = S.jobs.filter(j=>j.status==='COMPLETED').length
  document.getElementById('sb-unassigned').textContent = unassigned||''
  document.getElementById('sb-unassigned').style.display = unassigned?'':'none'
  document.getElementById('sb-issues').textContent = issues||''
  document.getElementById('sb-issues').style.display = issues?'':'none'
  document.getElementById('sb-inspect').textContent = inspect||''
  document.getElementById('sb-inspect').style.display = inspect?'':'none'
}

// ============================================================
// NAVIGATION
// ============================================================
const PAGE_TITLES = {dashboard:'대시보드',jobs:'작업 목록',schedule:'스케줄 배정',monitor:'실시간 모니터',issues:'이슈 관리',inspect:'완료 검수',history:'작업 히스토리',drivers:'기사 관리',stores:'점포 관리'}

function nav(page) {
  S.page = page
  document.querySelectorAll('.sb-item').forEach(el=>el.classList.toggle('active', el.dataset.page===page))
  document.getElementById('tb-title').textContent = PAGE_TITLES[page]||page
  closePanel()
  render()
}

function render() {
  const pages = {
    dashboard: renderDashboard,
    jobs: renderJobs,
    schedule: renderSchedule,
    monitor: renderMonitor,
    issues: renderIssues,
    inspect: renderInspect,
    history: renderHistory,
    drivers: renderDrivers,
    stores: renderStores,
  }
  const fn = pages[S.page]
  if (fn) document.getElementById('content').innerHTML = fn()
  document.getElementById('tb-date').textContent = '2026.04.08 수'
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const d = S.dashboard
  const pending_issues = S.issues.filter(i=>i.status==='PENDING')
  const completed_today = S.jobs.filter(j=>['COMPLETED','APPROVED'].includes(j.status))
  return \`
<div class="kpi-grid">
  \${kpiCard('fa-briefcase','총 작업',S.jobs.length,'today','','gray')}
  \${kpiCard('fa-check-circle','완료',completed_today.length,Math.round(completed_today.length/Math.max(S.jobs.length,1)*100)+'%','','green')}
  \${kpiCard('fa-spinner','진행중',S.jobs.filter(j=>['IN_PROGRESS','ARRIVED','DRIVING_TO'].includes(j.status)).length,'','','blue')}
  \${kpiCard('fa-circle-exclamation','미배정',S.jobs.filter(j=>j.status==='UNASSIGNED').length,'즉시 배정 필요','','red')}
  \${kpiCard('fa-triangle-exclamation','긴급 이슈',pending_issues.filter(i=>i.priority==='P0').length,'P0','','red')}
  \${kpiCard('fa-users','활동 기사',S.drivers.filter(d=>d.status==='ON_DUTY').length,'/'+S.drivers.length,'','orange')}
</div>

\${pending_issues.filter(i=>i.priority==='P0').length>0?\`
<div class="alert danger" style="cursor:pointer" onclick="nav('issues')">
  <i class="fa-solid fa-siren" style="margin-top:1px"></i>
  <div><strong>P0 긴급 이슈 \${pending_issues.filter(i=>i.priority==='P0').length}건</strong> — \${pending_issues.filter(i=>i.priority==='P0').map(i=>i.store_name+'('+i.type+')').join(' · ')} <span style="color:var(--red);font-weight:700;margin-left:8px">지금 처리 →</span></div>
</div>\`:''}

\${S.jobs.filter(j=>j.status==='UNASSIGNED').length>0?\`
<div class="alert warning" style="cursor:pointer" onclick="nav('schedule')">
  <i class="fa-solid fa-triangle-exclamation" style="margin-top:1px"></i>
  <div>미배정 작업 <strong>\${S.jobs.filter(j=>j.status==='UNASSIGNED').length}건</strong>이 있습니다. 스케줄 배정 화면에서 기사를 배정해주세요. <span style="font-weight:700;margin-left:8px">배정하러 가기 →</span></div>
</div>\`:''}

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
  <div>
    <div style="font-size:14px;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:6px">
      <i class="fa-solid fa-fire" style="color:var(--red)"></i> 긴급 처리 필요
      <span class="tag red" style="margin-left:4px">\${pending_issues.length}</span>
    </div>
    \${pending_issues.length===0?'<div style="color:var(--text3);font-size:13px;padding:20px;text-align:center;background:#fff;border-radius:12px;border:1px solid var(--border)">긴급 이슈 없음 ✓</div>':
      pending_issues.slice(0,3).map(i=>\`
      <div class="card-sm" style="margin-bottom:8px;cursor:pointer;border-left:4px solid \${i.priority==='P0'?'var(--red)':'var(--yellow)'}" onclick="openIssuePanel('\${i.id}')">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
          <span class="tag \${i.priority==='P0'?'red':'yellow'}">\${i.priority}</span>
          <span style="font-weight:600;font-size:13.5px">\${i.type} — \${i.store_name}</span>
        </div>
        <div style="font-size:12px;color:var(--text2)">\${i.driver_name} · \${timeAgo(i.created_at)}</div>
        <div style="font-size:12px;color:var(--text);margin-top:3px">\${i.desc}</div>
      </div>\`).join('')}
  </div>

  <div>
    <div style="font-size:14px;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:6px">
      <i class="fa-solid fa-clipboard-check" style="color:var(--green)"></i> 검수 대기
      <span class="tag yellow" style="margin-left:4px">\${S.jobs.filter(j=>j.status==='COMPLETED').length}</span>
    </div>
    \${S.jobs.filter(j=>j.status==='COMPLETED').length===0?'<div style="color:var(--text3);font-size:13px;padding:20px;text-align:center;background:#fff;border-radius:12px;border:1px solid var(--border)">검수 대기 없음 ✓</div>':
      S.jobs.filter(j=>j.status==='COMPLETED').slice(0,3).map(j=>\`
      <div class="card-sm" style="margin-bottom:8px;cursor:pointer" onclick="openJobPanel('\${j.id}')">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
          <span class="chip \${typeColor(j.type)}">\${j.type}</span>
          <span style="font-weight:600;font-size:13.5px">\${j.store_name}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--text2)">\${j.completed_at?j.completed_at.slice(11,16):''}</span>
        </div>
        <div style="font-size:12px;color:var(--text2)">\${j.driver_name} · ✅체크 \${j.checklist.filter(c=>c.checked).length}/\${j.checklist.length} · 📷\${j.photos.length}장</div>
      </div>\`).join('')}
  </div>
</div>

<div style="margin-top:16px">
  <div style="font-size:14px;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:6px">
    <i class="fa-solid fa-list" style="color:var(--blue)"></i> 오늘 작업 현황
  </div>
  <div class="tbl-wrap">
    <table>
      <thead><tr>
        <th>점포</th><th>작업유형</th><th>담당기사</th>
        <th>상태</th><th>예정시간</th><th>진행률</th>
      </tr></thead>
      <tbody>
        \${S.jobs.slice(0,6).map(j=>\`<tr onclick="openJobPanel('\${j.id}')">
          <td><div style="font-weight:600">\${j.store_name}</div><div style="font-size:11px;color:var(--text3)">\${j.store_address.slice(0,18)}</div></td>
          <td><span class="chip \${typeColor(j.type)}">\${j.type}</span></td>
          <td>\${j.driver_name?'<div style="display:flex;align-items:center;gap:6px"><div class="av av-sm" style="background:var(--blue)">'+j.driver_name[0]+'</div>'+j.driver_name+'</div>':'<span style="color:var(--text3)">미배정</span>'}</td>
          <td>\${statusTag(j.status)}</td>
          <td style="font-size:12px">\${j.scheduled_time}</td>
          <td><div style="display:flex;align-items:center;gap:6px"><div class="prog-bar" style="width:70px"><div class="prog-fill" style="width:\${Math.round(j.checklist.filter(c=>c.checked).length/Math.max(j.checklist.length,1)*100)}%;background:var(--green)"></div></div><span style="font-size:11px;color:var(--text2)">\${j.checklist.filter(c=>c.checked).length}/\${j.checklist.length}</span></div></td>
        </tr>\`).join('')}
      </tbody>
    </table>
  </div>
</div>
\`
}

function kpiCard(icon, label, val, sub, cls, color) {
  const colors = {green:'var(--green)',blue:'var(--blue)',red:'var(--red)',orange:'var(--p)',gray:'var(--text2)'}
  const col = colors[color]||'var(--text)'
  return \`<div class="kpi" onclick="nav('\${color==='red'&&label.includes('이슈')?'issues':color==='red'?'jobs':'monitor'}')">
    <div class="kpi-label"><i class="fa-solid \${icon}" style="color:\${col}"></i>\${label}</div>
    <div class="kpi-val" style="color:\${col}">\${val}</div>
    <div class="kpi-sub">\${sub}</div>
  </div>\`
}

// ============================================================
// JOBS
// ============================================================
function renderJobs() {
  const filter = window._jobFilter||'ALL'
  const filters = ['ALL','UNASSIGNED','DISPATCHED','DRIVING_TO','IN_PROGRESS','COMPLETED','APPROVED']
  const labels = {ALL:'전체',UNASSIGNED:'미배정',DISPATCHED:'배정됨',DRIVING_TO:'이동중',ARRIVED:'도착',IN_PROGRESS:'작업중',COMPLETED:'완료',APPROVED:'승인'}
  const counts = {}
  filters.forEach(f=>counts[f]=f==='ALL'?S.jobs.length:S.jobs.filter(j=>j.status===f).length)
  const list = filter==='ALL'?S.jobs:S.jobs.filter(j=>j.status===filter)

  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
  \${filters.map(f=>\`<button onclick="window._jobFilter='\${f}';render()" class="btn btn-sm \${filter===f?'btn-p':'btn-ghost'}">\${labels[f]} \${counts[f]?'('+counts[f]+')':''}</button>\`).join('')}
  <div class="tb-space"></div>
  <button class="btn btn-b btn-sm" onclick="openAutoAssign()"><i class="fa-solid fa-magic"></i> 자동 배정</button>
  <button class="btn btn-p btn-sm" onclick="openAddJob()"><i class="fa-solid fa-plus"></i> 작업 등록</button>
</div>
<div class="tbl-wrap">
<table>
<thead><tr>
  <th>점포명</th><th>유형</th><th>담당기사</th><th>상태</th>
  <th>예정일시</th><th>체크리스트</th><th>이슈</th><th>액션</th>
</tr></thead>
<tbody>
\${list.map(j=>\`<tr onclick="openJobPanel('\${j.id}')">
  <td>
    <div style="font-weight:600;font-size:13.5px">\${j.store_name}</div>
    <div style="font-size:11px;color:var(--text3)">\${j.store_address.slice(0,22)}</div>
  </td>
  <td><span class="chip \${typeColor(j.type)}">\${j.type}</span><br><span style="font-size:11px;color:var(--text2)">\${j.subtype}</span></td>
  <td>\${j.driver_name?'<div style="display:flex;align-items:center;gap:7px"><div class="av av-sm" style="background:var(--blue)">'+j.driver_name[0]+'</div>'+j.driver_name+'</div>':'<span class="tag red">미배정</span>'}</td>
  <td>\${statusTag(j.status)}</td>
  <td style="font-size:12px">\${j.scheduled_date}<br>\${j.scheduled_time}</td>
  <td>
    <div style="display:flex;align-items:center;gap:5px">
      <div class="prog-bar" style="width:54px"><div class="prog-fill" style="width:\${Math.round(j.checklist.filter(c=>c.checked).length/Math.max(j.checklist.length,1)*100)}%;background:var(--green)"></div></div>
      <span style="font-size:11px">\${j.checklist.filter(c=>c.checked).length}/\${j.checklist.length}</span>
    </div>
  </td>
  <td>\${S.issues.filter(i=>i.job_id===j.id&&i.status!=='RESOLVED').length>0?'<span class="tag red">⚠ '+S.issues.filter(i=>i.job_id===j.id&&i.status!=='RESOLVED').length+'건</span>':'<span style="color:var(--text3);font-size:12px">없음</span>'}</td>
  <td onclick="event.stopPropagation()">
    \${j.status==='UNASSIGNED'?\`<button class="btn btn-p btn-sm" onclick="openAssignModal('\${j.id}')">배정</button>\`:''}
    \${j.status==='COMPLETED'?\`<button class="btn btn-g btn-sm" onclick="approveJob('\${j.id}')">승인</button>&nbsp;<button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="rejectJob('\${j.id}')">반려</button>\`:''}
    \${j.status==='DISPATCHED'?\`<button class="btn btn-ghost btn-sm" onclick="openAssignModal('\${j.id}')">재배정</button>\`:''}
  </td>
</tr>\`).join('')}
</tbody></table></div>\`
}

// ============================================================
// SCHEDULE
// ============================================================
function renderSchedule() {
  const unassigned = S.jobs.filter(j=>j.status==='UNASSIGNED')
  const assigned = S.jobs.filter(j=>j.status!=='UNASSIGNED'&&j.status!=='CANCELLED')
  const hours = ['08','09','10','11','12','13','14','15','16','17','18']

  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
  <div style="font-size:13px;color:var(--text2)">미배정 <strong style="color:var(--red)">\${unassigned.length}건</strong></div>
  <div class="tb-space"></div>
  <button class="btn btn-ghost btn-sm" onclick="openAddJob()"><i class="fa-solid fa-plus"></i> 작업 추가</button>
  <button class="btn btn-b btn-sm" onclick="openAutoAssign()"><i class="fa-solid fa-wand-magic-sparkles"></i> 자동 배정 실행</button>
  <button class="btn btn-g btn-sm" onclick="confirmAllDispatch()"><i class="fa-solid fa-check"></i> 전체 확정</button>
</div>

<div style="display:flex;gap:14px;height:calc(100vh - 200px)">
  <!-- 미배정 큐 -->
  <div style="width:220px;flex-shrink:0;background:#fff;border:1px solid var(--border);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column">
    <div style="padding:12px 14px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700;display:flex;align-items:center;gap:6px">
      <i class="fa-solid fa-inbox" style="color:var(--red)"></i> 미배정
      <span class="tag red">\${unassigned.length}</span>
    </div>
    <div style="flex:1;overflow-y:auto;padding:8px">
      \${unassigned.length===0?'<div style="color:var(--text3);font-size:12px;text-align:center;padding:20px">모두 배정 완료!</div>':
        unassigned.map(j=>\`
        <div style="background:var(--gray);border-radius:8px;padding:10px;margin-bottom:6px;cursor:pointer;border-left:4px solid \${typeHex(j.type)}" onclick="openAssignModal('\${j.id}')">
          <div style="font-size:12px;font-weight:700;margin-bottom:2px">\${j.store_name}</div>
          <div style="font-size:11px;color:var(--text2)">\${j.type} · \${j.scheduled_time}</div>
          <button class="btn btn-p btn-sm" style="margin-top:6px;width:100%;font-size:11px;padding:5px 8px" onclick="event.stopPropagation();openAssignModal('\${j.id}')">기사 배정</button>
        </div>\`).join('')}
    </div>
  </div>

  <!-- 타임라인 -->
  <div style="flex:1;background:#fff;border:1px solid var(--border);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column">
    <div style="padding:10px 16px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700;display:flex;align-items:center;gap:12px;flex-shrink:0">
      <i class="fa-solid fa-timeline" style="color:var(--blue)"></i> 기사별 작업 타임라인
      <span style="font-size:11px;color:var(--text3);font-weight:400">클릭하여 상세 보기</span>
      <div style="margin-left:auto;display:flex;gap:10px;font-size:11px">
        <span style="display:flex;align-items:center;gap:3px"><span style="width:10px;height:10px;border-radius:2px;background:var(--p);display:inline-block"></span>신규설치</span>
        <span style="display:flex;align-items:center;gap:3px"><span style="width:10px;height:10px;border-radius:2px;background:var(--yellow);display:inline-block"></span>A/S</span>
        <span style="display:flex;align-items:center;gap:3px"><span style="width:10px;height:10px;border-radius:2px;background:var(--purple);display:inline-block"></span>POS교체</span>
        <span style="display:flex;align-items:center;gap:3px"><span style="width:10px;height:10px;border-radius:2px;background:var(--gray3);display:inline-block"></span>정기점검</span>
      </div>
    </div>
    <div style="overflow:auto;flex:1">
      <div style="min-width:900px">
        <!-- 헤더 -->
        <div style="display:grid;grid-template-columns:140px repeat(\${hours.length},1fr);border-bottom:1px solid var(--border);background:var(--gray)">
          <div style="padding:8px 12px;font-size:11px;font-weight:700;color:var(--text2)">기사</div>
          \${hours.map(h=>\`<div style="padding:8px 4px;font-size:11px;font-weight:700;color:var(--text2);text-align:center;border-left:1px solid var(--border)">\${h}시</div>\`).join('')}
        </div>
        <!-- 기사 행 -->
        \${S.drivers.filter(d=>d.status!=='OFF').map(d=>{
          const dJobs = assigned.filter(j=>j.driver_id===d.id)
          return \`<div style="display:grid;grid-template-columns:140px repeat(\${hours.length},1fr);border-bottom:1px solid var(--border);min-height:52px;">
            <div style="padding:8px 12px;display:flex;align-items:center;gap:8px;border-right:1px solid var(--border);background:#fff">
              <div class="av av-sm" style="background:var(--blue)">\${d.name[0]}</div>
              <div>
                <div style="font-size:12px;font-weight:700">\${d.name}</div>
                <div style="font-size:10px;color:var(--text3)">\${d.partner}</div>
              </div>
              <span class="dot \${d.status==='ON_DUTY'?'green':d.status==='AVAILABLE'?'blue':'gray'}" style="margin-left:auto"></span>
            </div>
            \${hours.map((h,hi)=>{
              const hNum = parseInt(h)
              const block = dJobs.find(j=>{
                const st = parseInt(j.scheduled_time.split(':')[0])
                return st===hNum
              })
              return \`<div style="position:relative;border-left:1px solid var(--border);background:\${hi%2===0?'#FAFAFA':'#fff'}">\${block?\`<div style="position:absolute;inset:4px;background:\${typeHex(block.type)};border-radius:6px;display:flex;align-items:center;padding:0 6px;font-size:10px;font-weight:700;color:#fff;cursor:pointer;overflow:hidden;white-space:nowrap" onclick="openJobPanel('\${block.id}')" title="\${block.store_name}">\${block.store_name.slice(0,5)}</div>\`:''}</div>\`
            }).join('')}
          </div>\`
        }).join('')}
      </div>
    </div>
  </div>
</div>\`
}

// ============================================================
// MONITOR
// ============================================================
function renderMonitor() {
  const active = S.drivers.filter(d=>d.status==='ON_DUTY')
  const delayed = S.jobs.filter(j=>j.delay>15)

  return \`
\${delayed.length>0?\`<div class="alert warning"><i class="fa-solid fa-clock"></i><div>ETA 지연 기사: \${delayed.map(j=>\`<span class="tag yellow" style="cursor:pointer" onclick="openDriverPanel(document.getElementById('dp-\${j.driver_id}'))">\${j.driver_name} ▲+\${j.delay}분</span>\`).join(' ')}</div></div>\`:''}

<div style="display:flex;gap:14px;height:calc(100vh - 180px)">
  <!-- 기사 목록 -->
  <div style="width:280px;flex-shrink:0;background:#fff;border:1px solid var(--border);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column">
    <div style="padding:12px 14px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700;display:flex;align-items:center;gap:6px">
      <i class="fa-solid fa-users" style="color:var(--blue)"></i> 기사 현황
      <span class="tag blue">\${active.length}명 활동</span>
    </div>
    <div style="flex:1;overflow-y:auto;padding:8px">
      \${S.drivers.map(d=>{
        const dJobs = S.jobs.filter(j=>j.driver_id===d.id&&['DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(j.status))
        const curJob = dJobs[0]
        const done = S.jobs.filter(j=>j.driver_id===d.id&&['COMPLETED','APPROVED'].includes(j.status)).length
        const total = S.jobs.filter(j=>j.driver_id===d.id).length
        return \`<div style="border:1px solid var(--border);border-radius:10px;padding:11px;margin-bottom:7px;cursor:pointer;\${d.status==='ON_DUTY'?'border-left:3px solid var(--green)':'border-left:3px solid var(--gray3)'}" onclick="openDriverPanelById('\${d.id}')">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <div class="av av-sm" style="background:\${d.status==='ON_DUTY'?'var(--blue)':'var(--gray3)'}">\${d.name[0]}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">\${d.name}</div>
              <div style="font-size:11px;color:var(--text3)">\${d.partner}</div>
            </div>
            <span class="dot \${d.status==='ON_DUTY'?'green':d.status==='AVAILABLE'?'blue':'gray'}"></span>
          </div>
          \${curJob?\`<div style="font-size:11px;color:var(--text2);margin-bottom:4px">📍 \${curJob.store_name} — \${statusTag(curJob.status)}</div>\`:''}
          <div style="display:flex;align-items:center;gap:6px">
            <div class="prog-bar" style="flex:1"><div class="prog-fill" style="width:\${total?Math.round(done/total*100):0}%;background:var(--green)"></div></div>
            <span style="font-size:11px;color:var(--text2)">\${done}/\${total}</span>
          </div>
        </div>\`
      }).join('')}
    </div>
  </div>

  <!-- 지도 & 테이블 -->
  <div style="flex:1;display:flex;flex-direction:column;gap:12px">
    <!-- 지도 -->
    <div class="map-ph" style="height:260px;display:flex;align-items:center;justify-content:center;position:relative">
      \${S.drivers.filter(d=>d.status==='ON_DUTY').map((d,i)=>{
        const leftPct = 15 + (i*14) + '%'
        const topPct = 20 + (i%3)*25 + '%'
        return \`<div style="position:absolute;left:\${leftPct};top:\${topPct};cursor:pointer" onclick="openDriverPanelById('\${d.id}')">
          <div style="width:40px;height:40px;border-radius:50%;background:#fff;border:3px solid var(--blue);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;box-shadow:var(--shadow)">\${d.name[0]}</div>
          <div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:10px;font-weight:700;background:rgba(0,0,0,.7);color:#fff;padding:2px 6px;border-radius:4px">\${d.name}</div>
        </div>\`
      }).join('')}
      <div style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,.9);border-radius:8px;padding:8px 12px;font-size:11px;color:var(--text2)">실서비스시 Kakao Maps API 연동</div>
    </div>
    <!-- 테이블 -->
    <div class="tbl-wrap" style="flex:1;overflow:auto">
      <table>
        <thead><tr><th>기사</th><th>현재점포</th><th>작업유형</th><th>상태</th><th style="text-align:right">ETA</th><th>진행</th><th>갱신</th></tr></thead>
        <tbody>
          \${S.drivers.map(d=>{
            const cur = S.jobs.find(j=>j.driver_id===d.id&&['DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(j.status))
            const done = S.jobs.filter(j=>j.driver_id===d.id&&['COMPLETED','APPROVED'].includes(j.status)).length
            const total = S.jobs.filter(j=>j.driver_id===d.id).length
            return \`<tr onclick="openDriverPanelById('\${d.id}')">
              <td><div style="display:flex;align-items:center;gap:7px"><div class="av av-sm" style="background:\${d.status==='ON_DUTY'?'var(--blue)':'var(--gray3)'}">\${d.name[0]}</div><div><div style="font-weight:600">\${d.name}</div><div style="font-size:11px;color:var(--text3)">\${d.partner}</div></div></div></td>
              <td style="font-size:13px">\${cur?cur.store_name:'<span style="color:var(--text3)">—</span>'}</td>
              <td>\${cur?'<span class="chip '+typeColor(cur.type)+'">'+cur.type+'</span>':'<span style="color:var(--text3)">—</span>'}</td>
              <td><span class="dot \${d.status==='ON_DUTY'?'green':d.status==='AVAILABLE'?'blue':'gray'}" style="margin-right:4px"></span>\${d.status==='ON_DUTY'?'작업중':d.status==='AVAILABLE'?'대기중':'비번'}</td>
              <td class="num" style="font-size:12px">\${cur?'<span style="color:'+(cur.delay>0?'var(--red)':'var(--text)')+'">'+cur.eta+(cur.delay>0?' <b>▲+'+cur.delay+'분</b>':'')+'</span>':'—'}</td>
              <td><div style="display:flex;align-items:center;gap:5px"><div class="prog-bar" style="width:50px"><div class="prog-fill" style="width:\${total?Math.round(done/total*100):0}%;background:var(--green)"></div></div><span style="font-size:11px">\${done}/\${total}</span></div></td>
              <td style="font-size:11px;color:var(--text3)">방금</td>
            </tr>\`
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>
</div>\`
}

// ============================================================
// ISSUES
// ============================================================
function renderIssues() {
  const filter = window._issueFilter||'ALL'
  const f = filter==='ALL'?S.issues:S.issues.filter(i=>filter==='PENDING'?i.status==='PENDING':filter==='P0'?i.priority==='P0':i.status==='RESOLVED')
  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
  \${[['ALL','전체'],['PENDING','처리대기'],['P0','P0 긴급'],['RESOLVED','처리완료']].map(([k,l])=>\`<button onclick="window._issueFilter='\${k}';render()" class="btn btn-sm \${filter===k?'btn-p':'btn-ghost'}">\${l} (\${k==='ALL'?S.issues.length:k==='PENDING'?S.issues.filter(i=>i.status==='PENDING').length:k==='P0'?S.issues.filter(i=>i.priority==='P0').length:S.issues.filter(i=>i.status==='RESOLVED').length})</button>\`).join('')}
</div>
<div class="tbl-wrap"><table>
<thead><tr><th>우선순위</th><th>유형</th><th>점포</th><th>담당기사</th><th>내용</th><th>발생시간</th><th>상태</th><th>액션</th></tr></thead>
<tbody>
\${f.map(i=>\`<tr onclick="openIssuePanel('\${i.id}')">
  <td><span class="tag \${i.priority==='P0'?'red':i.priority==='P1'?'yellow':'gray'}">\${i.priority}</span></td>
  <td style="font-weight:600">\${i.type}</td>
  <td>\${i.store_name}</td>
  <td><div style="display:flex;align-items:center;gap:6px"><div class="av av-sm" style="background:var(--blue)">\${i.driver_name[0]}</div>\${i.driver_name}</div></td>
  <td style="max-width:200px;font-size:12px;color:var(--text2)">\${i.desc.slice(0,40)}\${i.desc.length>40?'...':''}</td>
  <td style="font-size:12px;color:var(--text3)">\${timeAgo(i.created_at)}</td>
  <td>\${i.status==='PENDING'?'<span class="tag red">처리 대기</span>':i.status==='PROCESSING'?'<span class="tag yellow">처리중</span>':'<span class="tag green">완료</span>'}</td>
  <td onclick="event.stopPropagation()">\${i.status!=='RESOLVED'?\`<button class="btn btn-p btn-sm" onclick="resolveIssue('\${i.id}')">처리완료</button>\`:'<span style="color:var(--text3);font-size:12px">완료</span>'}</td>
</tr>\`).join('')}
</tbody></table></div>\`
}

// ============================================================
// INSPECT
// ============================================================
function renderInspect() {
  const pending = S.jobs.filter(j=>j.status==='COMPLETED')
  const approved = S.jobs.filter(j=>j.status==='APPROVED')
  const rejected = S.jobs.filter(j=>j.status==='REJECTED')
  const tab = window._inspectTab||'pending'
  const list = tab==='pending'?pending:tab==='approved'?approved:rejected

  return \`
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
  <div class="tabs" style="margin-bottom:0">
    <div class="tab \${tab==='pending'?'active':''}" onclick="window._inspectTab='pending';render()">검수 대기 <span class="tag yellow" style="margin-left:4px">\${pending.length}</span></div>
    <div class="tab \${tab==='approved'?'active':''}" onclick="window._inspectTab='approved';render()">승인 완료 <span class="tag green" style="margin-left:4px">\${approved.length}</span></div>
    <div class="tab \${tab==='rejected'?'active':''}" onclick="window._inspectTab='rejected';render()">반려 <span class="tag red" style="margin-left:4px">\${rejected.length}</span></div>
  </div>
  \${tab==='pending'&&pending.length>0?'<button class="btn btn-g btn-sm" onclick="bulkApprove()"><i class="fa-solid fa-check-double"></i> 일괄 승인</button>':''}
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px">
\${list.map(j=>\`
<div style="background:#fff;border:1.5px solid var(--border);border-radius:var(--r);overflow:hidden;cursor:pointer;transition:box-shadow .15s" onmouseenter="this.style.boxShadow='var(--shadow)'" onmouseleave="this.style.boxShadow=''" onclick="openJobPanel('\${j.id}')">
  <div style="height:100px;background:linear-gradient(135deg,\${typeHex(j.type)}22,\${typeHex(j.type)}44);display:flex;align-items:center;justify-content:center;font-size:36px">\${typeEmoji(j.type)}</div>
  <div style="padding:12px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-weight:700;font-size:14px">\${j.store_name}</div>
      \${tab==='approved'?'<span class="tag green">✓ 승인</span>':tab==='rejected'?'<span class="tag red">✕ 반려</span>':'<span class="tag yellow">검수 대기</span>'}
    </div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:8px"><span class="chip \${typeColor(j.type)}">\${j.type}</span> · \${j.driver_name} · \${j.completed_at?j.completed_at.slice(11,16):''}</div>
    <div style="display:flex;gap:8px;font-size:12px;margin-bottom:10px">
      <span>\${j.checklist.filter(c=>c.checked).length===j.checklist.length?'✅':'⚠️'} 체크 \${j.checklist.filter(c=>c.checked).length}/\${j.checklist.length}</span>
      <span>📷 \${j.photos.length}장</span>
      <span>\${j.signature?'✍ 서명':'❌ 서명없음'}</span>
    </div>
    \${tab==='pending'?\`
    <div style="display:flex;gap:6px">
      <button onclick="event.stopPropagation();approveJob('\${j.id}')" class="btn btn-g btn-sm" style="flex:2">승인</button>
      <button onclick="event.stopPropagation();showToast('추가 제출 요청 완료')" class="btn btn-ghost btn-sm" style="flex:1">추가요청</button>
      <button onclick="event.stopPropagation();rejectJob('\${j.id}')" class="btn btn-sm" style="flex:1;background:var(--red-light);color:var(--red)">반려</button>
    </div>\`:''}
  </div>
</div>\`).join('')}
\${list.length===0?'<div style="grid-column:1/-1;color:var(--text3);text-align:center;padding:40px;background:#fff;border-radius:12px;border:1px solid var(--border)">항목이 없습니다</div>':''}
</div>\`
}

// ============================================================
// HISTORY
// ============================================================
function renderHistory() {
  const storeFilter = window._historyStore||''
  const list = storeFilter?S.history.filter(h=>h.store_id===storeFilter):S.history

  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
  <select class="btn btn-ghost btn-sm" onchange="window._historyStore=this.value;render()" style="font-size:12px;padding:6px 10px;border:1.5px solid var(--border);border-radius:6px">
    <option value="">전체 점포</option>
    \${S.stores.map(s=>\`<option value="\${s.id}" \${storeFilter===s.id?'selected':''}>\${s.name}</option>\`).join('')}
  </select>
  <span style="font-size:12px;color:var(--text2)">총 \${list.length}건</span>
</div>
<div class="tbl-wrap"><table>
<thead><tr><th>점포</th><th>작업유형</th><th>담당기사</th><th>상태</th><th>완료일시</th><th>메모</th><th>사진</th></tr></thead>
<tbody>
\${list.map(h=>\`<tr onclick="openHistoryPanel('\${h.id}')">
  <td><div style="font-weight:600">\${h.store_name}</div></td>
  <td><span class="chip \${typeColor(h.type)}">\${h.type}</span></td>
  <td><div style="display:flex;align-items:center;gap:6px"><div class="av av-sm" style="background:var(--blue)">\${h.driver_name[0]}</div>\${h.driver_name}</div></td>
  <td>\${h.status==='APPROVED'?'<span class="tag green">승인완료</span>':'<span class="tag blue">완료</span>'}</td>
  <td style="font-size:12px">\${h.completed_at.slice(0,16).replace('T',' ')}</td>
  <td style="font-size:12px;color:var(--text2);max-width:150px">\${h.note||'—'}</td>
  <td style="font-size:12px">\${h.photos.length>0?'📷 '+h.photos.length+'장':'—'}</td>
</tr>\`).join('')}
</tbody></table></div>\`
}

// ============================================================
// DRIVERS
// ============================================================
function renderDrivers() {
  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
  <div class="search-wrap"><i class="fa-solid fa-search"></i><input placeholder="기사명 검색..." oninput="filterDriverTable(this.value)"></div>
  <div class="tb-space"></div>
  <button class="btn btn-p btn-sm" onclick="openAddDriver()"><i class="fa-solid fa-user-plus"></i> 기사 등록</button>
</div>
<div class="tbl-wrap"><table id="driver-table">
<thead><tr><th>기사명</th><th>협력사</th><th>연락처</th><th>상태</th><th>오늘 완료</th><th>오늘 전체</th><th>액션</th></tr></thead>
<tbody>
\${S.drivers.map(d=>{
  const done = S.jobs.filter(j=>j.driver_id===d.id&&['COMPLETED','APPROVED'].includes(j.status)).length
  const total = S.jobs.filter(j=>j.driver_id===d.id).length
  return \`<tr>
    <td><div style="display:flex;align-items:center;gap:8px"><div class="av av-sm" style="background:var(--blue)">\${d.name[0]}</div><div><div style="font-weight:600">\${d.name}</div><div style="font-size:11px;color:var(--text3)">\${d.id}</div></div></div></td>
    <td style="font-size:13px">\${d.partner}</td>
    <td style="font-size:12px;font-family:monospace">\${d.phone}</td>
    <td><span class="dot \${d.status==='ON_DUTY'?'green':d.status==='AVAILABLE'?'blue':'gray'}" style="margin-right:5px"></span>\${d.status==='ON_DUTY'?'작업중':d.status==='AVAILABLE'?'대기중':'비번'}</td>
    <td class="num">\${done}건</td>
    <td class="num">\${total}건</td>
    <td>
      <button class="btn btn-ghost btn-sm" onclick="editDriver('\${d.id}')" style="margin-right:4px">수정</button>
      <button class="btn btn-sm" style="background:var(--red-light);color:var(--red)" onclick="deleteDriver('\${d.id}')">삭제</button>
    </td>
  </tr>\`
}).join('')}
</tbody></table></div>\`
}

// ============================================================
// STORES
// ============================================================
function renderStores() {
  return \`
<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
  <div class="search-wrap"><i class="fa-solid fa-search"></i><input placeholder="점포명 검색..."></div>
  <div class="tb-space"></div>
  <button class="btn btn-p btn-sm" onclick="openAddStore()"><i class="fa-solid fa-store"></i> 점포 등록</button>
</div>
<div class="tbl-wrap"><table>
<thead><tr><th>점포명</th><th>주소</th><th>점주</th><th>연락처</th><th>협력사</th><th>작업이력</th><th>액션</th></tr></thead>
<tbody>
\${S.stores.map(s=>{
  const histCount = S.history.filter(h=>h.store_id===s.id).length
  return \`<tr onclick="openStorePanel('\${s.id}')">
    <td><div style="font-weight:600">\${s.name}</div></td>
    <td style="font-size:12px;color:var(--text2)">\${s.address}</td>
    <td>\${s.owner_name}</td>
    <td style="font-size:12px;font-family:monospace">\${s.owner_phone}</td>
    <td style="font-size:12px">\${s.partner||'—'}</td>
    <td><span class="tag \${histCount>0?'blue':'gray'}">\${histCount}건</span></td>
    <td onclick="event.stopPropagation()">
      <button class="btn btn-ghost btn-sm" onclick="openAddJob('\${s.id}')" style="margin-right:4px">작업등록</button>
      <button class="btn btn-sm" style="background:var(--red-light);color:var(--red)" onclick="deleteStore('\${s.id}')">삭제</button>
    </td>
  </tr>\`
}).join('')}
</tbody></table></div>\`
}

// ============================================================
// PANELS
// ============================================================
function openPanel(title, html) {
  document.getElementById('rp-title').textContent = title
  document.getElementById('rp-body').innerHTML = html
  document.getElementById('rp').classList.add('open')
}
function closePanel() { document.getElementById('rp').classList.remove('open') }

function openJobPanel(id) {
  const j = S.jobs.find(x=>x.id===id); if(!j) return
  const issues = S.issues.filter(i=>i.job_id===id)
  const hist = S.history.filter(h=>h.store_id===j.store_id).sort((a,b)=>b.completed_at.localeCompare(a.completed_at))

  openPanel('작업 상세', \`
<div style="background:var(--gray);border-radius:10px;padding:14px;margin-bottom:14px">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
    <div>
      <div style="font-size:18px;font-weight:800">\${j.store_name}</div>
      <div style="font-size:12px;color:var(--text2);margin-top:2px">\${j.store_address}</div>
    </div>
    \${statusTag(j.status)}
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px">
    <div><span style="color:var(--text3)">유형</span><br><span class="chip \${typeColor(j.type)}">\${j.type}</span> \${j.subtype}</div>
    <div><span style="color:var(--text3)">점주</span><br><strong>\${j.owner_name}</strong> <a href="tel:\${j.owner_phone}" style="color:var(--blue);font-size:11px">\${j.owner_phone}</a></div>
    <div><span style="color:var(--text3)">담당기사</span><br><strong>\${j.driver_name||'미배정'}</strong></div>
    <div><span style="color:var(--text3)">예정</span><br><strong>\${j.scheduled_date} \${j.scheduled_time}</strong></div>
  </div>
  \${j.note?\`<div style="margin-top:8px;background:#FFFBEB;border-radius:6px;padding:8px;font-size:12px;color:#92400E"><i class="fa-solid fa-triangle-exclamation" style="margin-right:4px"></i>\${j.note}</div>\`:''}
</div>

<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">체크리스트 (\${j.checklist.filter(c=>c.checked).length}/\${j.checklist.length})</div>
  <div class="prog-bar" style="margin-bottom:8px"><div class="prog-fill" style="width:\${Math.round(j.checklist.filter(c=>c.checked).length/Math.max(j.checklist.length,1)*100)}%;background:var(--green)"></div></div>
  \${j.checklist.map(c=>\`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px">
    <span style="font-size:14px">\${c.checked?'✅':c.na?'➖':'⬜'}</span>
    <span style="\${c.checked?'text-decoration:line-through;color:var(--text3)':''}">\${c.label}</span>
  </div>\`).join('')}
</div>

<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:6px">증빙</div>
  <div style="display:flex;gap:10px;font-size:12px">
    <span>\${j.photos.length>0?'📷 사진 '+j.photos.length+'장':'📷 사진 없음'}</span>
    <span>\${j.signature?'✍ 서명 완료':'✍ 서명 없음'}</span>
  </div>
</div>

\${issues.length>0?\`<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:6px">이슈 (\${issues.length}건)</div>
  \${issues.map(i=>\`<div style="background:var(--red-light);border-radius:8px;padding:8px 10px;margin-bottom:6px;font-size:12px"><span class="tag red">\${i.priority}</span> \${i.type} — \${i.desc}</div>\`).join('')}
</div>\`:''}

\${hist.length>0?\`<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:6px">이 점포 작업 이력</div>
  \${hist.map(h=>\`<div style="font-size:12px;padding:6px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px">
    <span class="chip \${typeColor(h.type)}">\${h.type}</span>
    <span>\${h.driver_name}</span>
    <span style="color:var(--text3)">\${h.completed_at.slice(0,10)}</span>
    <span style="margin-left:auto" class="tag \${h.status==='APPROVED'?'green':'blue'}">\${h.status==='APPROVED'?'승인':'완료'}</span>
  </div>\`).join('')}
</div>\`:''}

<div style="display:flex;gap:8px;flex-wrap:wrap">
  \${j.status==='UNASSIGNED'?\`<button class="btn btn-p" style="flex:1" onclick="closePanel();openAssignModal('\${j.id}')"><i class="fa-solid fa-user-plus"></i> 기사 배정</button>\`:''}
  \${j.status==='COMPLETED'?\`
    <button class="btn btn-g" style="flex:1" onclick="approveJob('\${j.id}')"><i class="fa-solid fa-check"></i> 승인</button>
    <button class="btn" style="flex:1;background:var(--red-light);color:var(--red)" onclick="rejectJob('\${j.id}')">반려</button>
  \`:''}
  \${['DISPATCHED','DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(j.status)?\`
    <button class="btn btn-ghost" style="flex:1" onclick="closePanel();openAssignModal('\${j.id}')"><i class="fa-solid fa-rotate"></i> 재배정</button>
    <button class="btn" style="flex:1;background:var(--red-light);color:var(--red)" onclick="cancelJob('\${j.id}')">취소</button>
  \`:''}
</div>
\`)
}

function openDriverPanelById(id) {
  const d = S.drivers.find(x=>x.id===id); if(!d) return
  const dJobs = S.jobs.filter(j=>j.driver_id===id)
  const done = dJobs.filter(j=>['COMPLETED','APPROVED'].includes(j.status)).length
  const cur = dJobs.find(j=>['DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(j.status))
  openPanel(d.name+' 기사', \`
<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;background:var(--gray);border-radius:10px;padding:14px">
  <div class="av av-lg" style="background:var(--blue)">\${d.name[0]}</div>
  <div>
    <div style="font-size:18px;font-weight:800">\${d.name}</div>
    <div style="font-size:13px;color:var(--text2)">\${d.partner}</div>
    <div style="font-size:13px;margin-top:4px"><i class="fa-solid fa-phone" style="color:var(--blue);margin-right:4px"></i>\${d.phone}</div>
  </div>
  <span class="dot \${d.status==='ON_DUTY'?'green':d.status==='AVAILABLE'?'blue':'gray'}" style="margin-left:auto;width:12px;height:12px"></span>
</div>
\${cur?\`<div class="alert info"><i class="fa-solid fa-location-dot"></i><div>현재: <strong>\${cur.store_name}</strong> — \${statusTag(cur.status)}</div></div>\`:''}
<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">당일 진행률</div>
  <div class="prog-bar" style="margin-bottom:6px"><div class="prog-fill" style="width:\${dJobs.length?Math.round(done/dJobs.length*100):0}%;background:var(--green)"></div></div>
  <div style="font-size:12px;color:var(--text2)">\${done}건 완료 / \${dJobs.length}건 전체</div>
</div>
<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">배정된 작업</div>
  \${dJobs.map(j=>\`<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;cursor:pointer" onclick="openJobPanel('\${j.id}')">
    <span class="chip \${typeColor(j.type)}">\${j.type}</span>
    <span style="flex:1;font-weight:600">\${j.store_name}</span>
    \${statusTag(j.status)}
  </div>\`).join('')}
</div>
<div style="display:flex;gap:8px">
  <a href="tel:\${d.phone}" class="btn btn-b" style="flex:1;text-decoration:none"><i class="fa-solid fa-phone"></i> 전화</a>
  <button class="btn btn-ghost" style="flex:1" onclick="editDriver('\${id}')"><i class="fa-solid fa-pen"></i> 수정</button>
</div>
\`)
}

function openIssuePanel(id) {
  const i = S.issues.find(x=>x.id===id); if(!i) return
  openPanel('이슈 처리', \`
<div style="background:\${i.priority==='P0'?'var(--red-light)':'var(--yellow-light)'};border-radius:10px;padding:14px;margin-bottom:14px">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
    <span class="tag \${i.priority==='P0'?'red':'yellow'}">\${i.priority} \${i.priority==='P0'?'긴급':''}</span>
    <span style="font-size:15px;font-weight:700">\${i.type}</span>
  </div>
  <div style="font-size:13px;margin-bottom:6px">\${i.desc}</div>
  <div style="font-size:12px;color:var(--text2)">\${i.store_name} · \${i.driver_name} · \${timeAgo(i.created_at)}</div>
</div>
<div style="margin-bottom:14px;font-size:13px;font-weight:700">처리 방법</div>
<button class="btn btn-p" style="width:100%;margin-bottom:8px" onclick="rescheduleFromIssue('\${i.job_id}','\${i.id}')"><i class="fa-solid fa-rotate"></i> 다른 기사로 재배정</button>
<button class="btn btn-b" style="width:100%;margin-bottom:8px" onclick="showToast('재방문 일정이 등록되었습니다')"><i class="fa-solid fa-calendar-plus"></i> 재방문 일정 등록</button>
<button class="btn btn-g" style="width:100%;margin-bottom:8px" onclick="resolveIssue('\${i.id}')"><i class="fa-solid fa-check"></i> 처리 완료 기록</button>
<button class="btn" style="width:100%;background:var(--red-light);color:var(--red)" onclick="showToast('작업이 취소되었습니다');closePanel()"><i class="fa-solid fa-times"></i> 작업 취소</button>
\`)
}

function openStorePanel(id) {
  const s = S.stores.find(x=>x.id===id); if(!s) return
  const hist = S.history.filter(h=>h.store_id===id).sort((a,b)=>b.completed_at.localeCompare(a.completed_at))
  const activeJobs = S.jobs.filter(j=>j.store_id===id&&!['COMPLETED','APPROVED','CANCELLED'].includes(j.status))
  openPanel(s.name+' 상세', \`
<div style="background:var(--gray);border-radius:10px;padding:14px;margin-bottom:14px">
  <div style="font-size:18px;font-weight:800;margin-bottom:6px">\${s.name}</div>
  <div style="font-size:13px;margin-bottom:4px"><i class="fa-solid fa-location-dot" style="color:var(--p);margin-right:6px"></i>\${s.address}</div>
  <div style="font-size:13px;margin-bottom:4px"><i class="fa-solid fa-user" style="color:var(--text3);margin-right:6px"></i>점주: <strong>\${s.owner_name}</strong></div>
  <div style="font-size:13px"><i class="fa-solid fa-phone" style="color:var(--blue);margin-right:6px"></i><a href="tel:\${s.owner_phone}" style="color:var(--blue)">\${s.owner_phone}</a></div>
</div>
\${activeJobs.length>0?\`<div class="alert info" style="margin-bottom:14px"><i class="fa-solid fa-briefcase"></i><div>진행중 작업 <strong>\${activeJobs.length}건</strong></div></div>\`:''}
<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">작업 이력 (\${hist.length}건)</div>
  \${hist.length===0?'<div style="color:var(--text3);font-size:12px;text-align:center;padding:16px">이력 없음</div>':
    hist.map(h=>\`<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;display:flex;align-items:center;gap:8px">
      <span class="chip \${typeColor(h.type)}">\${h.type}</span>
      <span style="flex:1"><strong>\${h.driver_name}</strong> — \${h.note||'메모없음'}</span>
      <span style="color:var(--text3)">\${h.completed_at.slice(0,10)}</span>
    </div>\`).join('')}
</div>
<button class="btn btn-p" style="width:100%" onclick="closePanel();openAddJob('\${s.id}')"><i class="fa-solid fa-plus"></i> 이 점포 작업 등록</button>
\`)
}

function openHistoryPanel(id) {
  const h = S.history.find(x=>x.id===id); if(!h) return
  const j = S.jobs.find(x=>x.id===h.job_id)
  openPanel('이력 상세', \`
<div style="background:var(--gray);border-radius:10px;padding:14px;margin-bottom:14px">
  <div style="font-size:16px;font-weight:800;margin-bottom:6px">\${h.store_name}</div>
  <span class="chip \${typeColor(h.type)}">\${h.type}</span>
  <div style="font-size:12px;color:var(--text2);margin-top:8px">담당: <strong>\${h.driver_name}</strong> · \${h.completed_at.slice(0,16).replace('T',' ')}</div>
</div>
\${j?\`<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">체크리스트</div>
  \${j.checklist.map(c=>\`<div style="display:flex;align-items:center;gap:8px;font-size:12px;padding:5px 0;border-bottom:1px solid var(--border)">
    <span>\${c.checked?'✅':c.na?'➖':'⬜'}</span>
    <span style="\${c.checked?'text-decoration:line-through;color:var(--text3)':''}">\${c.label}</span>
  </div>\`).join('')}
</div>\`:''}
<div style="margin-bottom:14px">
  <div style="font-size:13px;font-weight:700;margin-bottom:8px">증빙 사진 (\${h.photos.length}장)</div>
  \${h.photos.length===0?'<div style="color:var(--text3);font-size:12px">사진 없음</div>':
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">'+h.photos.map(()=>'<div style="aspect-ratio:1;background:var(--gray2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:24px">📷</div>').join('')+'</div>'}
</div>
<div>
  <div style="font-size:13px;font-weight:700;margin-bottom:6px">메모</div>
  <div style="font-size:13px;color:var(--text2)">\${h.note||'메모 없음'}</div>
</div>
\`)
}

// ============================================================
// MODALS
// ============================================================
function openModal(title, body, footer='') {
  document.getElementById('modal-title').textContent = title
  document.getElementById('modal-body').innerHTML = body
  document.getElementById('modal-ft').innerHTML = footer
  document.getElementById('modal-bg').style.display='flex'
}
function closeModal() { document.getElementById('modal-bg').style.display='none' }

function openAddDriver() {
  openModal('기사 등록', \`
<div class="form-row"><div class="form-group"><label>기사명 *</label><input id="d-name" placeholder="홍길동"></div></div>
<div class="form-row"><div class="form-group"><label>연락처 *</label><input id="d-phone" placeholder="010-0000-0000"></div></div>
<div class="form-row"><div class="form-group"><label>협력사</label><input id="d-partner" placeholder="ABC협력사"></div></div>
\`, \`<button class="btn btn-ghost" onclick="closeModal()">취소</button>
<button class="btn btn-p" onclick="submitAddDriver()">등록</button>\`)
}

async function submitAddDriver() {
  const name=document.getElementById('d-name').value.trim()
  const phone=document.getElementById('d-phone').value.trim()
  const partner=document.getElementById('d-partner').value.trim()
  if(!name||!phone) return showToast('필수 항목을 입력하세요')
  const res = await fetch2(API+'/drivers',{method:'POST',body:JSON.stringify({name,phone,partner})})
  const d = await res.json()
  S.drivers.push(d)
  closeModal(); render(); showToast('✅ '+name+' 기사가 등록되었습니다')
}

function editDriver(id) {
  const d = S.drivers.find(x=>x.id===id); if(!d) return
  openModal('기사 수정', \`
<div class="form-row"><div class="form-group"><label>기사명</label><input id="ed-name" value="\${d.name}"></div></div>
<div class="form-row"><div class="form-group"><label>연락처</label><input id="ed-phone" value="\${d.phone}"></div></div>
<div class="form-row"><div class="form-group"><label>협력사</label><input id="ed-partner" value="\${d.partner}"></div></div>
<div class="form-row"><div class="form-group"><label>상태</label>
<select id="ed-status"><option value="AVAILABLE" \${d.status==='AVAILABLE'?'selected':''}>대기중</option><option value="ON_DUTY" \${d.status==='ON_DUTY'?'selected':''}>작업중</option><option value="OFF" \${d.status==='OFF'?'selected':''}>비번</option></select>
</div></div>
\`,\`<button class="btn btn-ghost" onclick="closeModal()">취소</button>
<button class="btn btn-p" onclick="submitEditDriver('\${id}')">저장</button>\`)
}

async function submitEditDriver(id) {
  const name=document.getElementById('ed-name').value
  const phone=document.getElementById('ed-phone').value
  const partner=document.getElementById('ed-partner').value
  const status=document.getElementById('ed-status').value
  await fetch2(API+'/drivers/'+id,{method:'PATCH',body:JSON.stringify({name,phone,partner,status})})
  const d=S.drivers.find(x=>x.id===id)
  Object.assign(d,{name,phone,partner,status})
  closeModal(); closePanel(); render(); showToast('✅ 기사 정보가 수정되었습니다')
}

async function deleteDriver(id) {
  if(!confirm('정말 삭제하시겠습니까?')) return
  await fetch2(API+'/drivers/'+id,{method:'DELETE'})
  S.drivers = S.drivers.filter(d=>d.id!==id)
  render(); showToast('기사가 삭제되었습니다')
}

function openAddStore() {
  openModal('점포 등록', \`
<div class="form-row"><div class="form-group"><label>점포명 *</label><input id="st-name" placeholder="강남 1호점"></div></div>
<div class="form-row"><div class="form-group"><label>주소 *</label><input id="st-addr" placeholder="서울 강남구 테헤란로 123"></div></div>
<div class="form-row">
  <div class="form-group"><label>점주명</label><input id="st-owner" placeholder="김점주"></div>
  <div class="form-group"><label>점주 연락처</label><input id="st-phone" placeholder="010-0000-0000"></div>
</div>
\`,\`<button class="btn btn-ghost" onclick="closeModal()">취소</button>
<button class="btn btn-p" onclick="submitAddStore()">등록</button>\`)
}

async function submitAddStore() {
  const name=document.getElementById('st-name').value.trim()
  const address=document.getElementById('st-addr').value.trim()
  const owner_name=document.getElementById('st-owner').value.trim()
  const owner_phone=document.getElementById('st-phone').value.trim()
  if(!name||!address) return showToast('필수 항목을 입력하세요')
  const res = await fetch2(API+'/stores',{method:'POST',body:JSON.stringify({name,address,owner_name,owner_phone})})
  const s = await res.json()
  S.stores.push(s)
  closeModal(); render(); showToast('✅ '+name+' 점포가 등록되었습니다')
}

async function deleteStore(id) {
  if(!confirm('정말 삭제하시겠습니까?')) return
  await fetch2(API+'/stores/'+id,{method:'DELETE'})
  S.stores=S.stores.filter(s=>s.id!==id)
  render(); showToast('점포가 삭제되었습니다')
}

function openAddJob(storeId='') {
  openModal('작업 등록', \`
<div class="form-row"><div class="form-group"><label>점포 *</label>
<select id="j-store"><option value="">점포 선택</option>
\${S.stores.map(s=>\`<option value="\${s.id}" \${s.id===storeId?'selected':''}>\${s.name}</option>\`).join('')}
</select></div></div>
<div class="form-row">
  <div class="form-group"><label>작업 유형 *</label>
  <select id="j-type"><option value="신규설치">신규설치</option><option value="AS방문">AS방문</option><option value="POS교체">POS교체</option><option value="정기점검">정기점검</option></select>
  </div>
  <div class="form-group"><label>장비 유형</label><input id="j-sub" placeholder="POS 단말기"></div>
</div>
<div class="form-row">
  <div class="form-group"><label>예정일 *</label><input id="j-date" type="date" value="2026-04-08"></div>
  <div class="form-group"><label>예정시간</label><input id="j-time" type="time" value="09:00"></div>
</div>
<div class="form-row"><div class="form-group"><label>특이사항</label><textarea id="j-note" placeholder="주차 불가, 특이사항 등..."></textarea></div></div>
\`,\`<button class="btn btn-ghost" onclick="closeModal()">취소</button>
<button class="btn btn-p" onclick="submitAddJob()">등록</button>\`)
}

async function submitAddJob() {
  const store_id=document.getElementById('j-store').value
  const type=document.getElementById('j-type').value
  const subtype=document.getElementById('j-sub').value
  const scheduled_date=document.getElementById('j-date').value
  const scheduled_time=document.getElementById('j-time').value
  const note=document.getElementById('j-note').value
  if(!store_id||!type||!scheduled_date) return showToast('필수 항목을 입력하세요')
  const res = await fetch2(API+'/jobs',{method:'POST',body:JSON.stringify({store_id,type,subtype,scheduled_date,scheduled_time,note})})
  const j = await res.json()
  S.jobs.push(j)
  closeModal(); render(); updateBadges(); showToast('✅ 작업이 등록되었습니다')
}

function openAssignModal(jobId) {
  const j = S.jobs.find(x=>x.id===jobId); if(!j) return
  const available = S.drivers.filter(d=>d.status!=='OFF')
  openModal('기사 배정 — '+j.store_name, \`
<div style="background:var(--gray);border-radius:8px;padding:10px;margin-bottom:14px;font-size:13px">
  <strong>\${j.store_name}</strong> · \${j.type} · \${j.scheduled_date} \${j.scheduled_time}
</div>
<div class="form-group"><label>담당 기사 *</label>
<select id="assign-driver">
<option value="">기사 선택</option>
\${available.map(d=>{
  const curJobs = S.jobs.filter(x=>x.driver_id===d.id&&['DISPATCHED','DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(x.status)).length
  return \`<option value="\${d.id}">\${d.name} (\${d.partner}) — 현재 \${curJobs}건 진행중</option>\`
}).join('')}
</select></div>
\`,\`<button class="btn btn-ghost" onclick="closeModal()">취소</button>
<button class="btn btn-p" onclick="submitAssign('\${jobId}')"><i class="fa-solid fa-user-check"></i> 배정 확정</button>\`)
}

async function submitAssign(jobId) {
  const driver_id=document.getElementById('assign-driver').value
  if(!driver_id) return showToast('기사를 선택하세요')
  const res = await fetch2(API+'/jobs/'+jobId+'/assign',{method:'POST',body:JSON.stringify({driver_id})})
  const j = await res.json()
  const idx=S.jobs.findIndex(x=>x.id===jobId)
  S.jobs[idx]=j
  const d=S.drivers.find(x=>x.id===driver_id)
  if(d&&d.status==='AVAILABLE') d.status='ON_DUTY'
  closeModal(); render(); updateBadges()
  showToast('✅ '+j.driver_name+' 기사에게 배정 완료!')
}

async function openAutoAssign() {
  showToast('⚙️ 스케줄 최적화 엔진 실행 중...')
  const res = await fetch2(API+'/jobs/auto-assign',{method:'POST'})
  const {assigned} = await res.json()
  const [j,d] = await Promise.all([
    fetch2(API+'/jobs?date=2026-04-08').then(r=>r.json()),
    fetch2(API+'/drivers').then(r=>r.json())
  ])
  S.jobs=j; S.drivers=d
  render(); updateBadges()
  showToast(assigned>0?'✅ '+assigned+'건 자동 배정 완료!':'이미 모두 배정되었습니다')
}

async function confirmAllDispatch() {
  if(!confirm('배정된 모든 기사에게 알림을 전송하고 일정을 확정하시겠습니까?')) return
  showToast('✅ 일정이 확정되었습니다. 기사들에게 알림을 전송했습니다.')
}

async function approveJob(id) {
  const res = await fetch2(API+'/jobs/'+id+'/status',{method:'PATCH',body:JSON.stringify({status:'APPROVED'})})
  const j = await res.json()
  if(j.error) return showToast('오류: '+j.error)
  const idx=S.jobs.findIndex(x=>x.id===id); S.jobs[idx]=j
  S.history.unshift({id:'h_'+Date.now(),store_id:j.store_id,job_id:j.id,store_name:j.store_name,type:j.type,driver_name:j.driver_name,status:'APPROVED',completed_at:j.approved_at||new Date().toISOString(),note:j.note,photos:j.photos})
  closePanel(); render(); updateBadges(); showToast('✅ 검수 승인 완료!')
}

async function rejectJob(id) {
  const res = await fetch2(API+'/jobs/'+id+'/status',{method:'PATCH',body:JSON.stringify({status:'REJECTED'})})
  const j = await res.json()
  if(j.error) return showToast('오류: '+j.error)
  const idx=S.jobs.findIndex(x=>x.id===id); S.jobs[idx]=j
  closePanel(); render(); updateBadges(); showToast('❌ 반려 처리. 재작업 요청이 전송되었습니다.')
}

async function cancelJob(id) {
  if(!confirm('작업을 취소하시겠습니까?')) return
  const res = await fetch2(API+'/jobs/'+id+'/status',{method:'PATCH',body:JSON.stringify({status:'CANCELLED'})})
  const j = await res.json()
  if(j.error) return showToast('오류: '+j.error)
  const idx=S.jobs.findIndex(x=>x.id===id); S.jobs[idx]=j
  closePanel(); render(); updateBadges(); showToast('작업이 취소되었습니다.')
}

async function resolveIssue(id) {
  const res = await fetch2(API+'/issues/'+id,{method:'PATCH',body:JSON.stringify({status:'RESOLVED'})})
  const i2 = await res.json()
  const idx=S.issues.findIndex(x=>x.id===id); S.issues[idx]=i2
  closePanel(); render(); updateBadges(); showToast('✅ 이슈가 처리 완료로 기록되었습니다.')
}

async function rescheduleFromIssue(jobId, issueId) {
  await resolveIssue(issueId)
  closePanel(); openAssignModal(jobId)
}

async function bulkApprove() {
  if(!confirm('검수 대기 작업을 모두 승인하시겠습니까?')) return
  const pending = S.jobs.filter(j=>j.status==='COMPLETED')
  for(const j of pending) await approveJob(j.id)
  showToast('✅ 전체 일괄 승인 완료!')
}

function tbCTA() { openAddJob() }

function filterDriverTable(q) {
  document.querySelectorAll('#driver-table tbody tr').forEach(tr=>{
    tr.style.display=tr.textContent.toLowerCase().includes(q.toLowerCase())?'':'none'
  })
}

// ============================================================
// UTILS
// ============================================================
function statusTag(s) {
  const m={UNASSIGNED:['red','미배정'],DISPATCHED:['purple','배정됨'],DRIVING_TO:['blue','이동중'],ARRIVED:['green','도착'],IN_PROGRESS:['orange','작업중'],COMPLETED:['yellow','완료대기'],APPROVED:['green','승인완료'],REJECTED:['red','반려'],CANCELLED:['gray','취소']}
  const [c,l]=m[s]||['gray',s]
  return \`<span class="tag \${c}">\${l}</span>\`
}
function typeColor(t) {
  if(t==='신규설치') return 'orange'
  if(t==='AS방문') return 'yellow'
  if(t==='POS교체') return 'purple'
  return 'gray'
}
function typeHex(t) {
  if(t==='신규설치') return 'var(--p)'
  if(t==='AS방문') return 'var(--yellow)'
  if(t==='POS교체') return 'var(--purple)'
  return 'var(--gray3)'
}
function typeEmoji(t) {
  if(t==='신규설치') return '🔧'
  if(t==='AS방문') return '🛠'
  if(t==='POS교체') return '🔄'
  return '📋'
}
function timeAgo(iso) {
  const diff = Math.floor((Date.now()-new Date(iso).getTime())/60000)
  if(diff<1) return '방금'
  if(diff<60) return diff+'분 전'
  return Math.floor(diff/60)+'시간 전'
}

let _toastTimer
function showToast(msg) {
  const t=document.getElementById('toast')
  t.textContent=msg; t.style.opacity='1'
  clearTimeout(_toastTimer)
  _toastTimer=setTimeout(()=>t.style.opacity='0',3000)
}

// ============================================================
// MOBILE APP
// ============================================================
let _mobileOpen = false
function toggleMobile() {
  _mobileOpen=!_mobileOpen
  document.getElementById('mobile-wrap').style.display=_mobileOpen?'block':'none'
  if(_mobileOpen) renderApp()
}

const APP = S.app
function renderApp() {
  document.getElementById('app-screen').innerHTML = getAppHTML()
}

function getAppHTML() {
  const screens = {
    home: appHome, detail: appDetail, arrive: appArrive,
    work: appWork, checklist: appChecklist, photo: appPhoto,
    sign: appSign, complete: appComplete, issue: appIssue
  }
  return (screens[APP.tab]||appHome)()
}

function appGoTo(tab) { APP.tab=tab; renderApp() }

function appHome() {
  const myJobs = S.jobs.filter(j=>j.driver_id===APP.driverId&&j.scheduled_date==='2026-04-08')
  const done = myJobs.filter(j=>['COMPLETED','APPROVED'].includes(j.status)).length
  const cur = myJobs.find(j=>['DRIVING_TO','ARRIVED','IN_PROGRESS'].includes(j.status))
  const next = myJobs.filter(j=>j.status==='DISPATCHED')

  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
\${APP.offline?'<div class="offline-bar"><i class="fa-solid fa-wifi-slash"></i> 오프라인 · 완료 후 자동 전송</div>':''}
<div class="app-nav">
  <div style="width:28px"></div>
  <h2>오늘 일정</h2>
  <button onclick="APP.offline=!APP.offline;renderApp()" style="background:none;border:none;font-size:17px;color:\${APP.offline?'var(--red)':'var(--text2)'}"><i class="fa-solid fa-wifi\${APP.offline?'-slash':''}"></i></button>
</div>
<div class="app-body" style="padding:0 0 8px">
  <div style="padding:14px 14px 8px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <div style="font-size:12px;font-weight:700;color:var(--text2)">2026.04.08 수요일</div>
      <div style="font-size:12px;color:var(--text2)">\${done}/\${myJobs.length}건 완료</div>
    </div>
    <div class="prog-bar"><div class="prog-fill" style="width:\${myJobs.length?Math.round(done/myJobs.length*100):0}%;background:var(--p)"></div></div>
  </div>

  \${cur?\`
  <div style="margin:0 12px 6px;font-size:11px;font-weight:700;color:var(--p);text-transform:uppercase;letter-spacing:.5px">진행중</div>
  <div class="app-card active" onclick="APP.jobId='\${cur.id}';appGoTo('detail')">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
      <span style="font-size:10px;font-weight:700;background:var(--p);color:#fff;padding:2px 7px;border-radius:10px">\${cur.type}</span>
      <span style="font-size:15px;font-weight:800">\${cur.store_name}</span>
    </div>
    <div style="font-size:12px;color:var(--text2)"><i class="fa-solid fa-location-dot" style="margin-right:4px;color:var(--p)"></i>\${cur.store_address}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
      \${statusTag(cur.status)}
      <button onclick="event.stopPropagation();APP.jobId='\${cur.id}';appGoTo('arrive')" class="app-btn primary" style="width:auto;padding:8px 16px;margin:0;font-size:13px">계속 →</button>
    </div>
  </div>\`:''}

  \${next.length>0?\`<div style="margin:12px 12px 6px;font-size:11px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.5px">다음 작업 (\${next.length}건)</div>\`:''}
  \${next.map(j=>\`
  <div class="app-card" onclick="APP.jobId='\${j.id}';appGoTo('detail')" style="margin-bottom:6px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
      <span style="font-size:10px;font-weight:700;background:\${typeHex(j.type)};color:#fff;padding:2px 7px;border-radius:10px">\${j.type}</span>
      <span style="font-size:14px;font-weight:700">\${j.store_name}</span>
      <span style="margin-left:auto;font-size:11px;color:var(--text3)">\${j.scheduled_time}</span>
    </div>
    <div style="font-size:12px;color:var(--text3)">\${j.store_address.slice(0,24)}</div>
  </div>\`).join('')}

  \${myJobs.filter(j=>['COMPLETED','APPROVED'].includes(j.status)).length>0?\`
  <div style="margin:12px 12px 6px;font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">완료</div>
  \${myJobs.filter(j=>['COMPLETED','APPROVED'].includes(j.status)).map(j=>\`
  <div class="app-card" style="border-left:3px solid var(--green);opacity:.7;margin-bottom:6px" onclick="APP.jobId='\${j.id}';appGoTo('detail')">
    <div style="display:flex;align-items:center;gap:6px">
      <span style="font-size:14px">✅</span>
      <span style="font-size:13px;font-weight:600;color:var(--text2)">\${j.store_name}</span>
      <span class="tag green" style="margin-left:auto;font-size:10px">완료</span>
    </div>
  </div>\`).join('')}\`:''}
</div>
<div class="app-tabbar">
  <div class="app-tab-item on"><i class="fa-solid fa-list"></i>오늘 일정</div>
  <div class="app-tab-item" onclick="APP.jobId='\${cur?.id||next[0]?.id||''}';appGoTo('detail')"><i class="fa-solid fa-wrench"></i>현재 작업</div>
  <div class="app-tab-item" onclick="showToast('더보기 준비중')"><i class="fa-solid fa-ellipsis"></i>더보기</div>
</div>
</div>\`
}

function appDetail() {
  const j = S.jobs.find(x=>x.id===APP.jobId)||S.jobs[0]
  if(!j) return appHome()
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('home')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>\${j.store_name}</h2>
  <a href="tel:\${j.owner_phone}" style="background:none;border:none;font-size:17px;color:var(--blue)"><i class="fa-solid fa-phone"></i></a>
</div>
<div class="app-body">
  <div style="background:\${typeHex(j.type)};color:#fff;padding:14px;display:flex;align-items:center;gap:10px">
    <span style="font-size:28px">\${typeEmoji(j.type)}</span>
    <div><div style="font-size:16px;font-weight:800">\${j.type}</div><div style="font-size:12px;opacity:.85">\${j.subtype}</div></div>
    \${statusTag(j.status)}
  </div>
  <div class="app-card" style="margin:12px">
    <div style="font-size:13px;font-weight:700;margin-bottom:10px">현장 정보</div>
    <div style="font-size:13px;display:flex;gap:8px;margin-bottom:8px;align-items:flex-start"><i class="fa-solid fa-location-dot" style="color:var(--p);margin-top:2px;width:16px"></i><div>\${j.store_address}</div></div>
    <div style="font-size:13px;display:flex;gap:8px;margin-bottom:8px;align-items:center"><i class="fa-solid fa-user" style="color:var(--text3);width:16px"></i>점주: <strong>\${j.owner_name}</strong></div>
    <div style="font-size:13px;display:flex;gap:8px;align-items:center"><i class="fa-solid fa-phone" style="color:var(--blue);width:16px"></i><a href="tel:\${j.owner_phone}" style="color:var(--blue)">\${j.owner_phone}</a></div>
  </div>
  \${j.note?\`<div style="margin:0 12px;background:var(--yellow-light);border-radius:10px;padding:12px;border:1px solid #FDE68A"><div style="font-size:11px;font-weight:700;color:#92400E;margin-bottom:4px"><i class="fa-solid fa-triangle-exclamation"></i> 특이사항</div><div style="font-size:13px;color:#92400E">\${j.note}</div></div>\`:''}
  <div style="padding:12px 12px 0;display:flex;gap:8px">
    <button onclick="APP.jobId='\${j.id}';appGoTo('issue')" class="app-btn outline" style="flex:1;padding:12px;margin:0;font-size:13px"><i class="fa-solid fa-exclamation-circle" style="color:var(--red);margin-right:4px"></i>이슈 보고</button>
    <button onclick="APP.jobId='\${j.id}';appGoTo('arrive')" class="app-btn blue" style="flex:2;padding:12px;margin:0;font-size:14px"><i class="fa-solid fa-location-arrow" style="margin-right:6px"></i>길 안내</button>
  </div>
</div>
<div class="app-tabbar">
  <div class="app-tab-item" onclick="appGoTo('home')"><i class="fa-solid fa-list"></i>오늘 일정</div>
  <div class="app-tab-item on"><i class="fa-solid fa-wrench"></i>현재 작업</div>
  <div class="app-tab-item" onclick="showToast('더보기')"><i class="fa-solid fa-ellipsis"></i>더보기</div>
</div>
</div>\`
}

function appArrive() {
  const j = S.jobs.find(x=>x.id===APP.jobId)||S.jobs[0]
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('detail')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>도착 확인</h2><div style="width:24px"></div>
</div>
<div class="app-body" style="display:flex;flex-direction:column;align-items:center;padding-top:40px;padding:40px 20px 20px">
  <div style="width:90px;height:90px;background:var(--green-light);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:40px;margin-bottom:20px;border:3px solid var(--green)">📍</div>
  <div style="font-size:20px;font-weight:800;text-align:center;margin-bottom:8px">\${j?.store_name||''}에<br>도착하셨나요?</div>
  <div style="font-size:14px;color:var(--text2);margin-bottom:6px">현재 위치 기준 <strong style="color:var(--green)">23m</strong></div>
  <div style="font-size:12px;color:var(--text3);text-align:center;margin-bottom:32px">도착 확인 시 점주에게<br>방문 SMS가 자동 발송됩니다</div>
  <button onclick="confirmArrive()" class="app-btn green" style="width:100%;font-size:17px;padding:16px;border-radius:16px"><i class="fa-solid fa-check" style="margin-right:8px"></i>도착했습니다</button>
  <button onclick="appGoTo('detail')" class="app-btn gray" style="width:100%;margin-top:8px;border-radius:16px">이전으로</button>
</div>
</div>\`
}

async function confirmArrive() {
  const j = S.jobs.find(x=>x.id===APP.jobId); if(!j) return
  const targetStatus = j.status==='DISPATCHED'?'DRIVING_TO':j.status==='DRIVING_TO'?'ARRIVED':'ARRIVED'
  const res = await fetch2(API+'/jobs/'+j.id+'/status',{method:'PATCH',body:JSON.stringify({status:targetStatus})})
  const updated = await res.json()
  if(!updated.error){const idx=S.jobs.findIndex(x=>x.id===j.id);S.jobs[idx]=updated}
  showToast('✅ 도착 확인! 점주에게 알림 전송됨')
  appGoTo('work')
}

function appWork() {
  const j = S.jobs.find(x=>x.id===APP.jobId)||S.jobs[0]
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('arrive')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>작업 시작</h2><div style="width:24px"></div>
</div>
<div class="app-body" style="padding:12px">
  <div style="background:var(--green);color:#fff;border-radius:14px;padding:14px;margin-bottom:12px;display:flex;align-items:center;gap:10px">
    <span style="font-size:24px">✅</span>
    <div><div style="font-size:14px;font-weight:700">도착 확인 완료</div><div style="font-size:12px;opacity:.85">점주에게 방문 알림 전송 완료</div></div>
  </div>
  <div style="font-size:15px;font-weight:700;margin-bottom:10px">작업 시작 전 확인사항</div>
  <div style="background:#fff;border-radius:12px;border:1px solid var(--border);overflow:hidden;margin-bottom:12px">
    \${[['📋','체크리스트',j?.checklist.length+'항목 확인 필요'],['📷','현장 사진','설치 전후 필수 촬영'],['✍','점주 서명','완료 확인 서명 필요']].map(([ic,lb,ds])=>\`
    <div style="display:flex;align-items:center;gap:12px;padding:13px 14px;border-bottom:1px solid var(--border)">
      <span style="font-size:22px">\${ic}</span>
      <div><div style="font-size:14px;font-weight:600">\${lb}</div><div style="font-size:11px;color:var(--text3)">\${ds}</div></div>
    </div>\`).join('')}
  </div>
  \${j?.note?\`<div style="background:var(--yellow-light);border-radius:10px;padding:12px;margin-bottom:12px;border:1px solid #FDE68A;font-size:12px;color:#92400E"><strong>⚠ 특이사항:</strong> \${j.note}</div>\`:''}
  <div style="display:flex;gap:8px">
    <button onclick="APP.jobId='\${j?.id||''}';appGoTo('issue')" style="background:var(--red-light);color:var(--red);border:1.5px solid var(--red);border-radius:12px;padding:13px;font-size:13px;font-weight:700;flex:1">이슈 보고</button>
    <button onclick="startWork()" class="app-btn primary" style="flex:2;padding:13px;margin:0;border-radius:12px;font-size:15px"><i class="fa-solid fa-play" style="margin-right:6px"></i>작업 시작</button>
  </div>
</div>
</div>\`
}

async function startWork() {
  const j = S.jobs.find(x=>x.id===APP.jobId); if(!j) return
  const res = await fetch2(API+'/jobs/'+j.id+'/status',{method:'PATCH',body:JSON.stringify({status:'IN_PROGRESS'})})
  const updated = await res.json()
  if(!updated.error){const idx=S.jobs.findIndex(x=>x.id===j.id);S.jobs[idx]=updated}
  APP.checklist = JSON.parse(JSON.stringify(j.checklist))
  APP.photos = []; APP.signed = false
  appGoTo('checklist')
}

function appChecklist() {
  const j = S.jobs.find(x=>x.id===APP.jobId)
  const cl = APP.checklist.length>0?APP.checklist:(j?.checklist||[])
  if(APP.checklist.length===0&&j) APP.checklist=JSON.parse(JSON.stringify(j.checklist))
  const done = cl.filter(c=>c.checked||c.na).length
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('work')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>체크리스트</h2>
  <span style="font-size:13px;color:var(--text2);font-weight:600">\${done}/\${cl.length}</span>
</div>
<div class="app-step-bar">
  <div class="app-step active"></div>
  <div class="app-step"></div>
  <div class="app-step"></div>
  <div class="app-step"></div>
</div>
<div class="app-body">
  <div style="padding:0 12px 8px">
    <div class="prog-bar"><div class="prog-fill" style="width:\${cl.length?Math.round(done/cl.length*100):0}%;background:var(--p)"></div></div>
    <div style="font-size:11px;color:var(--text3);margin-top:4px;text-align:right">\${Math.round(cl.length?done/cl.length*100:0)}% 완료</div>
  </div>
  \${cl.map((item,i)=>\`
  <div class="app-check \${item.checked?'done':''}" onclick="toggleAppCheck(\${i})">
    <div class="app-checkbox \${item.checked?'on':''}">
      \${item.checked?'<i class="fa-solid fa-check" style="font-size:11px;color:#fff"></i>':''}
    </div>
    <div style="flex:1">
      <div style="font-size:13.5px;font-weight:500;\${item.checked?'text-decoration:line-through;color:var(--text3)':''}">\${i+1}. \${item.label}</div>
    </div>
    <button onclick="event.stopPropagation();toggleAppNA(\${i})" style="background:\${item.na?'var(--gray2)':'none'};border:1px solid var(--border);border-radius:6px;padding:3px 7px;font-size:10px;color:var(--text3)">N/A</button>
  </div>\`).join('')}
</div>
<div style="padding:10px 12px;background:#fff;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
  <span style="font-size:11px;color:var(--text3)"><i class="fa-solid fa-floppy-disk" style="margin-right:4px"></i>자동 저장 중</span>
  <button onclick="checklistNext()" style="padding:10px 20px;border-radius:10px;font-size:14px;font-weight:700;background:\${done===cl.length?'var(--p)':'var(--gray2)'};color:\${done===cl.length?'#fff':'var(--text3)'};border:none">다음: 사진 →</button>
</div>
</div>\`
}

function toggleAppCheck(i) {
  APP.checklist[i].checked=!APP.checklist[i].checked
  if(APP.checklist[i].checked) APP.checklist[i].na=false
  renderApp()
}
function toggleAppNA(i) {
  APP.checklist[i].na=!APP.checklist[i].na
  if(APP.checklist[i].na) APP.checklist[i].checked=false
  renderApp()
}
async function checklistNext() {
  const cl=APP.checklist
  const done=cl.filter(c=>c.checked||c.na).length
  if(done<cl.length){showToast('모든 항목을 완료해주세요 ('+done+'/'+cl.length+')');return}
  const j=S.jobs.find(x=>x.id===APP.jobId)
  if(j){await fetch2(API+'/jobs/'+j.id+'/checklist',{method:'PATCH',body:JSON.stringify({checklist:APP.checklist})}); j.checklist=APP.checklist}
  appGoTo('photo')
}

function appPhoto() {
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('checklist')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>사진 업로드</h2>
  <span style="font-size:13px;color:var(--text2);font-weight:600">\${APP.photos.length}장</span>
</div>
<div class="app-step-bar">
  <div class="app-step done"></div>
  <div class="app-step active"></div>
  <div class="app-step"></div>
  <div class="app-step"></div>
</div>
<div class="app-body" style="padding:12px">
  <div style="font-size:15px;font-weight:700;margin-bottom:4px">작업 사진을 찍어주세요</div>
  <div style="font-size:12px;color:var(--text3);margin-bottom:14px">최소 1장 이상 필수 · 최대 10장</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px">
    \${APP.photos.map((_,i)=>\`<div class="photo-slot filled" onclick="removePhoto(\${i})"><i class="fa-solid fa-check-circle" style="color:var(--green)"></i></div>\`).join('')}
    \${APP.photos.length<10?\`<div class="photo-slot" onclick="addPhoto()"><i class="fa-solid fa-plus"></i></div>\`:''}
  </div>
  <button onclick="addPhoto()" style="width:100%;padding:13px;border-radius:12px;background:#fff;border:1.5px solid var(--p);color:var(--p);font-size:14px;font-weight:700;margin-bottom:8px"><i class="fa-solid fa-camera" style="margin-right:8px"></i>사진 촬영</button>
  <button onclick="addPhoto()" style="width:100%;padding:12px;border-radius:12px;background:var(--gray);border:none;color:var(--text2);font-size:13px;font-weight:600"><i class="fa-solid fa-images" style="margin-right:8px"></i>갤러리에서 선택</button>
</div>
<div style="padding:10px 12px;background:#fff;border-top:1px solid var(--border);display:flex;justify-content:flex-end">
  <button onclick="photoNext()" style="padding:10px 20px;border-radius:10px;font-size:14px;font-weight:700;background:\${APP.photos.length>0?'var(--p)':'var(--gray2)'};color:\${APP.photos.length>0?'#fff':'var(--text3)'};border:none">다음: 서명 →</button>
</div>
</div>\`
}

async function addPhoto() {
  APP.photos.push('photo_'+Date.now()+'.jpg')
  const j=S.jobs.find(x=>x.id===APP.jobId)
  if(j){j.photos=[...APP.photos]}
  showToast('📷 사진이 추가되었습니다')
  renderApp()
}
function removePhoto(i){ APP.photos.splice(i,1); renderApp() }
function photoNext(){
  if(APP.photos.length===0){showToast('사진을 최소 1장 추가해주세요');return}
  appGoTo('sign')
}

function appSign() {
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('photo')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>점주 서명</h2><div style="width:24px"></div>
</div>
<div class="app-step-bar">
  <div class="app-step done"></div>
  <div class="app-step done"></div>
  <div class="app-step active"></div>
  <div class="app-step"></div>
</div>
<div class="app-body" style="padding:12px">
  <div style="font-size:15px;font-weight:700;margin-bottom:4px">점주 서명을 받아주세요</div>
  <div style="font-size:12px;color:var(--text3);margin-bottom:16px">기기를 점주에게 전달해 서명란을 채워주세요</div>
  <div class="sign-pad \${APP.signed?'done':''}" onclick="doSign()" style="margin-bottom:12px">
    \${APP.signed?
      '<div style="text-align:center"><div style="font-size:36px">✅</div><div style="font-size:14px;font-weight:700;color:var(--green);margin-top:6px">서명 완료</div></div>':
      '<div style="text-align:center"><i class="fa-solid fa-signature" style="font-size:32px;color:var(--gray3);display:block;margin-bottom:8px"></i><div style="font-size:13px;color:var(--text3)">이곳에 서명해 주세요</div></div>'
    }
  </div>
  \${APP.signed?'<button onclick="APP.signed=false;renderApp()" style="background:none;border:none;color:var(--red);font-size:12px;display:block;margin:0 auto 12px;cursor:pointer">다시 그리기</button>':''}
  <div style="font-size:11px;color:var(--text3);text-align:center">서명은 작업 완료 확인 용도입니다</div>
</div>
<div style="padding:10px 12px;background:#fff;border-top:1px solid var(--border);display:flex;gap:8px">
  <button onclick="appGoTo('photo')" style="padding:12px 16px;border-radius:10px;background:var(--gray);border:none;font-size:13px;font-weight:600;color:var(--text2)">← 이전</button>
  <button onclick="signNext()" style="flex:1;padding:12px;border-radius:10px;font-size:14px;font-weight:700;background:\${APP.signed?'var(--p)':'var(--gray2)'};color:\${APP.signed?'#fff':'var(--text3)'};border:none">완료 확인 →</button>
</div>
</div>\`
}

async function doSign() {
  APP.signed=true
  const j=S.jobs.find(x=>x.id===APP.jobId)
  if(j){await fetch2(API+'/jobs/'+j.id+'/signature',{method:'POST',body:JSON.stringify({})});j.signature=true}
  renderApp()
}
function signNext(){
  if(!APP.signed){showToast('서명을 받아주세요');return}
  appGoTo('complete')
}

function appComplete() {
  const j = S.jobs.find(x=>x.id===APP.jobId)
  const cl = APP.checklist
  const clDone = cl.filter(c=>c.checked||c.na).length===cl.length
  const allOk = clDone&&APP.photos.length>0&&APP.signed
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('sign')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>완료 확인</h2><div style="width:24px"></div>
</div>
<div class="app-step-bar">
  <div class="app-step done"></div>
  <div class="app-step done"></div>
  <div class="app-step done"></div>
  <div class="app-step active"></div>
</div>
<div class="app-body" style="padding:20px 14px;text-align:center">
  <div style="font-size:52px;margin-bottom:12px">\${allOk?'🎉':'⚠️'}</div>
  <div style="font-size:18px;font-weight:800;margin-bottom:6px">\${allOk?'작업 완료 준비!':'증빙을 확인해주세요'}</div>
  <div style="font-size:13px;color:var(--text2);margin-bottom:24px">\${allOk?'모든 증빙이 완료되었습니다':'누락 항목을 확인해주세요'}</div>
  <div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:16px;text-align:left;margin-bottom:20px">
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);font-size:13.5px">
      <span style="font-size:18px">\${clDone?'✅':'❌'}</span>
      <span>체크리스트 \${cl.filter(c=>c.checked||c.na).length}/\${cl.length} 완료</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);font-size:13.5px">
      <span style="font-size:18px">\${APP.photos.length>0?'✅':'❌'}</span>
      <span>사진 \${APP.photos.length}장 업로드</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;font-size:13.5px">
      <span style="font-size:18px">\${APP.signed?'✅':'❌'}</span>
      <span>서명 \${APP.signed?'완료':'필요'}</span>
    </div>
  </div>
  <div style="font-size:12px;color:var(--text3);margin-bottom:20px">\${j?.store_name||''} · \${j?.type||''}</div>
  <button onclick="\${allOk?'submitComplete()':'showToast("증빙을 모두 완료해주세요")'}" style="width:100%;padding:16px;border-radius:14px;font-size:16px;font-weight:800;background:\${allOk?'var(--p)':'var(--gray2)'};color:\${allOk?'#fff':'var(--text3)'};border:none">\${allOk?'✅ 완료 처리하기':'증빙을 완료해주세요'}</button>
</div>
</div>\`
}

async function submitComplete() {
  const j=S.jobs.find(x=>x.id===APP.jobId); if(!j) return
  j.photos=[...APP.photos]; j.signature=APP.signed; j.checklist=APP.checklist
  const res=await fetch2(API+'/jobs/'+j.id+'/status',{method:'PATCH',body:JSON.stringify({status:'COMPLETED'})})
  const updated=await res.json()
  if(!updated.error){const idx=S.jobs.findIndex(x=>x.id===j.id);S.jobs[idx]=updated}
  APP.photos=[]; APP.signed=false; APP.checklist=[]
  showToast('🎉 '+j.store_name+' 작업 완료!')
  updateBadges()
  setTimeout(()=>appGoTo('home'),1500)
}

function appIssue() {
  const j = S.jobs.find(x=>x.id===APP.jobId)
  const types=[['🚫','설치 불가','공사/구조물/위치 문제'],['👤','고객 부재','점주 연락 안됨'],['📦','부품/장비 누락','필요 자재 없음'],['🛠','수리 불가','부품 재주문 필요'],['📍','기타','직접 입력']]
  return \`<div class="app-wrap">
<div class="app-status-bar"><span>9:41</span><span>⚡ 100%</span></div>
<div class="app-nav">
  <button onclick="appGoTo('detail')" style="background:none;border:none;font-size:15px;color:var(--p)"><i class="fa-solid fa-chevron-left"></i></button>
  <h2>이슈 보고</h2><div style="width:24px"></div>
</div>
<div class="app-body" style="padding:14px">
  <div style="font-size:15px;font-weight:700;margin-bottom:14px">어떤 상황인가요?</div>
  \${types.map(([ic,lb,ds])=>\`
  <div onclick="submitIssue('\${lb}')" style="background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px;cursor:pointer;margin-bottom:8px;transition:all .15s" onmouseenter="this.style.borderColor='var(--p)';this.style.background='var(--p-light)'" onmouseleave="this.style.borderColor='var(--border)';this.style.background='#fff'">
    <span style="font-size:26px">\${ic}</span>
    <div><div style="font-size:15px;font-weight:700">\${lb}</div><div style="font-size:11px;color:var(--text3)">\${ds}</div></div>
    <i class="fa-solid fa-chevron-right" style="margin-left:auto;color:var(--gray3)"></i>
  </div>\`).join('')}
</div>
</div>\`
}

async function submitIssue(type) {
  const j=S.jobs.find(x=>x.id===APP.jobId)
  const issue = {
    job_id:APP.jobId||'',
    store_name:j?.store_name||'',
    driver_name:'홍길동',
    type, desc:type+' 이슈 발생', priority:'P1'
  }
  const res=await fetch2(API+'/issues',{method:'POST',body:JSON.stringify(issue)})
  const i=await res.json()
  S.issues.push(i)
  updateBadges()
  showToast('⚠️ 이슈 보고 완료! 관리자에게 전달되었습니다')
  setTimeout(()=>appGoTo('home'),1500)
}

// ============================================================
// INIT
// ============================================================
async function init() {
  await loadAll()
  render()
}
init()

// 30초마다 갱신
setInterval(async()=>{
  await loadAll()
  render()
},30000)
<\/script>
</body>
</html>`,et=new wt,fs=Object.assign({"/src/index.tsx":m});let kt=!1;for(const[,t]of Object.entries(fs))t&&(et.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),et.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),kt=!0);if(!kt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{et as default};
