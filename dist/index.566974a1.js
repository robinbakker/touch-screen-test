var _,e,n,t,o,r,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(_,e){for(var n in e)_[n]=e[n];return _}function s(_){var e=_.parentNode;e&&e.removeChild(_)}function f(e,n,t){var o,r,l,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return a(e,i,o,r,null)}function a(_,t,o,r,l){var i={type:_,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=e.vnode&&e.vnode(i),i}function p(_){return _.children}function h(_,e){this.props=_,this.context=e}function d(_,e){if(null==e)return _.__?d(_.__,_.__.__k.indexOf(_)+1):null;for(var n;e<_.__k.length;e++)if(null!=(n=_.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof _.type?d(_):null}function v(_){var e,n;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if(null!=(n=_.__k[e])&&null!=n.__e){_.__e=_.__c.base=n.__e;break}return v(_)}}function y(_){(!_.__d&&(_.__d=!0)&&t.push(_)&&!m.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||setTimeout)(m)}function m(){for(var _;m.__r=t.length;)_=t.sort((function(_,e){return _.__v.__b-e.__v.__b})),t=[],_.some((function(_){var e,n,t,o,r,l;_.__d&&(r=(o=(e=_).__v).__e,(l=e.__P)&&(n=[],(t=c({},o)).__v=o.__v+1,E(l,o,t,e.__n,void 0!==l.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?d(o):r,o.__h),w(n,o),o.__e!=r&&v(o)))}))}function g(_,e,n,t,o,r,u,c,s,f){var h,v,y,m,g,x,C,H=t&&t.__k||i,N=H.length;for(n.__k=[],h=0;h<e.length;h++)if(null!=(m=n.__k[h]=null==(m=e[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?a(null,m,null,null,m):Array.isArray(m)?a(p,{children:m},null,null,null):m.__b>0?a(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=H[h])||y&&m.key==y.key&&m.type===y.type)H[h]=void 0;else for(v=0;v<N;v++){if((y=H[v])&&m.key==y.key&&m.type===y.type){H[v]=void 0;break}y=null}E(_,m,y=y||l,o,r,u,c,s,f),g=m.__e,(v=m.ref)&&y.ref!=v&&(C||(C=[]),y.ref&&C.push(y.ref,null,m),C.push(v,m.__c||g,m)),null!=g?(null==x&&(x=g),"function"==typeof m.type&&m.__k===y.__k?m.__d=s=k(m,s,_):s=b(_,m,y,H,g,s),"function"==typeof n.type&&(n.__d=s)):s&&y.__e==s&&s.parentNode!=_&&(s=d(y))}for(n.__e=x,h=N;h--;)null!=H[h]&&P(H[h],H[h]);if(C)for(h=0;h<C.length;h++)M(C[h],C[++h],C[++h])}function k(_,e,n){for(var t,o=_.__k,r=0;o&&r<o.length;r++)(t=o[r])&&(t.__=_,e="function"==typeof t.type?k(t,e,n):b(n,t,t,o,t.__e,e));return e}function b(_,e,n,t,o,r){var l,i,u;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==n||o!=r||null==o.parentNode)_:if(null==r||r.parentNode!==_)_.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<t.length;u+=1)if(i==o)break _;_.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function x(_,e,n){"-"===e[0]?_.setProperty(e,n):_[e]=null==n?"":"number"!=typeof n||u.test(e)?n:n+"px"}function C(_,e,n,t,o){var r;_:if("style"===e)if("string"==typeof n)_.style.cssText=n;else{if("string"==typeof t&&(_.style.cssText=t=""),t)for(e in t)n&&e in n||x(_.style,e,"");if(n)for(e in n)t&&n[e]===t[e]||x(_.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=n,n?t||_.addEventListener(e,r?N:H,r):_.removeEventListener(e,r?N:H,r);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in _)try{_[e]=null==n?"":n;break _}catch(_){}"function"==typeof n||(null==n||!1===n&&-1==e.indexOf("-")?_.removeAttribute(e):_.setAttribute(e,n))}}function H(_){this.l[_.type+!1](e.event?e.event(_):_)}function N(_){this.l[_.type+!0](e.event?e.event(_):_)}function E(_,n,t,o,r,l,i,u,s){var f,a,d,v,y,m,k,b,x,C,H,N,E,w,M,P=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,u=n.__e=t.__e,n.__h=null,l=[u]),(f=e.__b)&&f(n);try{_:if("function"==typeof P){if(b=n.props,x=(f=P.contextType)&&o[f.__c],C=f?x?x.props.value:f.__:o,t.__c?k=(a=n.__c=t.__c).__=a.__E:("prototype"in P&&P.prototype.render?n.__c=a=new P(b,C):(n.__c=a=new h(b,C),a.constructor=P,a.render=U),x&&x.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=o,d=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=P.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=c({},a.__s)),c(a.__s,P.getDerivedStateFromProps(b,a.__s))),v=a.props,y=a.state,d)null==P.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||n.__v===t.__v){for(a.props=b,a.state=a.__s,n.__v!==t.__v&&(a.__d=!1),a.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(_){_&&(_.__=n)})),H=0;H<a._sb.length;H++)a.__h.push(a._sb[H]);a._sb=[],a.__h.length&&i.push(a);break _}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(v,y,m)}))}if(a.context=C,a.props=b,a.__v=n,a.__P=_,N=e.__r,E=0,"prototype"in P&&P.prototype.render){for(a.state=a.__s,a.__d=!1,N&&N(n),f=a.render(a.props,a.state,a.context),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[]}else do{a.__d=!1,N&&N(n),f=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++E<25);a.state=a.__s,null!=a.getChildContext&&(o=c(c({},o),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(v,y)),M=null!=f&&f.type===p&&null==f.key?f.props.children:f,g(_,Array.isArray(M)?M:[M],n,t,o,r,l,i,u,s),a.base=n.__e,n.__h=null,a.__h.length&&i.push(a),k&&(a.__E=a.__=null),a.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,o,r,l,i,s);(f=e.diffed)&&f(n)}catch(_){n.__v=null,(s||null!=l)&&(n.__e=u,n.__h=!!s,l[l.indexOf(u)]=null),e.__e(_,n,t)}}function w(_,n){e.__c&&e.__c(n,_),_.some((function(n){try{_=n.__h,n.__h=[],_.some((function(_){_.call(n)}))}catch(_){e.__e(_,n.__v)}}))}function S(e,n,t,o,r,i,u,c){var f,a,p,h=t.props,v=n.props,y=n.type,m=0;if("svg"===y&&(r=!0),null!=i)for(;m<i.length;m++)if((f=i[m])&&"setAttribute"in f==!!y&&(y?f.localName===y:3===f.nodeType)){e=f,i[m]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),i=null,c=!1}if(null===y)h===v||c&&e.data===v||(e.data=v);else{if(i=i&&_.call(e.childNodes),a=(h=t.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},m=0;m<e.attributes.length;m++)h[e.attributes[m].name]=e.attributes[m].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(_,e,n,t,o){var r;for(r in n)"children"===r||"key"===r||r in e||C(_,r,null,n[r],t);for(r in e)o&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===e[r]||C(_,r,e[r],n[r],t)}(e,v,h,r,c),p)n.__k=[];else if(m=n.props.children,g(e,Array.isArray(m)?m:[m],n,t,o,r&&"foreignObject"!==y,i,u,i?i[0]:t.__k&&d(t,0),c),null!=i)for(m=i.length;m--;)null!=i[m]&&s(i[m]);c||("value"in v&&void 0!==(m=v.value)&&(m!==e.value||"progress"===y&&!m||"option"===y&&m!==h.value)&&C(e,"value",m,h.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&C(e,"checked",m,h.checked,!1))}return e}function M(_,n,t){try{"function"==typeof _?_(n):_.current=n}catch(_){e.__e(_,t)}}function P(_,n,t){var o,r;if(e.unmount&&e.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||M(o,null,n)),null!=(o=_.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){e.__e(_,n)}o.base=o.__P=null,_.__c=void 0}if(o=_.__k)for(r=0;r<o.length;r++)o[r]&&P(o[r],n,t||"function"!=typeof _.type);t||null==_.__e||s(_.__e),_.__=_.__e=_.__d=void 0}function U(_,e,n){return this.constructor(_,n)}function T(n,t,o){var r,i,u;e.__&&e.__(n,t),i=(r="function"==typeof o)?null:o&&o.__k||t.__k,u=[],E(t,n=(!r&&o||t).__k=f(p,null,[n]),i||l,l,void 0!==t.ownerSVGElement,!r&&o?[o]:i?null:t.firstChild?_.call(t.childNodes):null,u,!r&&o?o:i?i.__e:t.firstChild,r),w(u,n)}function A(_,e){T(_,e,A)}function $(e,n,t){var o,r,l,i=c({},e.props);for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),a(e.type,i,o||e.key,r||e.ref,null)}function D(_,e){var n={__c:e="__cC"+r++,__:_,Consumer:function(_,e){return _.children(e)},Provider:function(_){var n,t;return this.getChildContext||(n=[],(t={})[e]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&n.some(y)},this.sub=function(_){n.push(_);var e=_.componentWillUnmount;_.componentWillUnmount=function(){n.splice(n.indexOf(_),1),e&&e.call(_)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}_=i.slice,e={__e:function(_,e,n,t){for(var o,r,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(_)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(_,t||{}),l=o.__d),l)return o.__E=o}catch(e){_=e}throw _}},n=0,h.prototype.setState=function(_,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof _&&(_=_(c({},n),this.props)),_&&c(n,_),null!=_&&this.__v&&(e&&this._sb.push(e),y(this))},h.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),y(this))},h.prototype.render=p,t=[],m.__r=0,r=0;var F=function(_,e,n,t){var o;e[0]=0;for(var r=1;r<e.length;r++){var l=e[r++],i=e[r]?(e[0]|=l?1:2,n[e[r++]]):e[++r];3===l?t[0]=i:4===l?t[1]=Object.assign(t[1]||{},i):5===l?(t[1]=t[1]||{})[e[++r]]=i:6===l?t[1][e[++r]]+=i+"":l?(o=_.apply(i,F(_,i,n,["",null])),t.push(o),i[0]?e[0]|=2:(e[r-2]=0,e[r]=o)):t.push(i)}return t},W=new Map;var L,V,O,q,I=function(_){var e=W.get(this);return e||(e=new Map,W.set(this,e)),(e=F(this,e.get(_)||(e.set(_,e=function(_){for(var e,n,t=1,o="",r="",l=[0],i=function(_){1===t&&(_||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,_,o):3===t&&(_||o)?(l.push(3,_,o),t=2):2===t&&"..."===o&&_?l.push(4,_,0):2===t&&o&&!_?l.push(5,0,!0,o):t>=5&&((o||!_&&5===t)&&(l.push(t,0,o,n),t=6),_&&(l.push(t,_,0,n),t=6)),o=""},u=0;u<_.length;u++){u&&(1===t&&i(),i(u));for(var c=0;c<_[u].length;c++)e=_[u][c],1===t?"<"===e?(i(),l=[l],t=3):o+=e:4===t?"--"===o&&">"===e?(t=1,o=""):o=e+o[0]:r?e===r?r="":o+=e:'"'===e||"'"===e?r=e:">"===e?(i(),t=1):t&&("="===e?(t=5,n=o,o=""):"/"===e&&(t<5||">"===_[u][c+1])?(i(),3===t&&(l=l[0]),t=l,(l=l[0]).push(2,0,t),t=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(i(),t=2):o+=e),3===t&&"!--"===o&&(t=4,l=l[0])}return i(),l}(_)),e),arguments,[])).length>1?e:e[0]}.bind(f),R=0,j=[],B=[],G=e.__b,z=e.__r,X=e.diffed,Y=e.__c,J=e.unmount;function K(_,n){e.__h&&e.__h(V,_,R||n),R=0;var t=V.__H||(V.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:B}),t.__[_]}function Q(_){return R=1,function(_,e,n){var t=K(L++,2);if(t.t=_,!t.__c&&(t.__=[n?n(e):o_(void 0,e),function(_){var e=t.__N?t.__N[0]:t.__[0],n=t.t(e,_);e!==n&&(t.__N=[n,t.__[1]],t.__c.setState({}))}],t.__c=V,!V.u)){V.u=!0;var o=V.shouldComponentUpdate;V.shouldComponentUpdate=function(_,e,n){if(!t.__c.__H)return!0;var r=t.__c.__H.__.filter((function(_){return _.__c}));if(r.every((function(_){return!_.__N})))return!o||o.call(this,_,e,n);var l=!1;return r.forEach((function(_){if(_.__N){var e=_.__[0];_.__=_.__N,_.__N=void 0,e!==_.__[0]&&(l=!0)}})),!(!l&&t.__c.props===_)&&(!o||o.call(this,_,e,n))}}return t.__N||t.__}(o_,_)}function Z(){for(var _;_=j.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(n_),_.__H.__h.forEach(t_),_.__H.__h=[]}catch(V){_.__H.__h=[],e.__e(V,_.__v)}}e.__b=function(_){V=null,G&&G(_)},e.__r=function(_){z&&z(_),L=0;var e=(V=_.__c).__H;e&&(O===V?(e.__h=[],V.__h=[],e.__.forEach((function(_){_.__N&&(_.__=_.__N),_.__V=B,_.__N=_.i=void 0}))):(e.__h.forEach(n_),e.__h.forEach(t_),e.__h=[])),O=V},e.diffed=function(_){X&&X(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==j.push(n)&&q===e.requestAnimationFrame||((q=e.requestAnimationFrame)||e_)(Z)),n.__H.__.forEach((function(_){_.i&&(_.__H=_.i),_.__V!==B&&(_.__=_.__V),_.i=void 0,_.__V=B}))),O=V=null},e.__c=function(_,n){n.some((function(_){try{_.__h.forEach(n_),_.__h=_.__h.filter((function(_){return!_.__||t_(_)}))}catch(O){n.some((function(_){_.__h&&(_.__h=[])})),n=[],e.__e(O,_.__v)}})),Y&&Y(_,n)},e.unmount=function(_){J&&J(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach((function(_){try{n_(_)}catch(_){n=_}})),t.__H=void 0,n&&e.__e(n,t.__v))};var __="function"==typeof requestAnimationFrame;function e_(_){var e,n=function(){clearTimeout(t),__&&cancelAnimationFrame(e),setTimeout(_)},t=setTimeout(n,100);__&&(e=requestAnimationFrame(n))}function n_(_){var e=V,n=_.__c;"function"==typeof n&&(_.__c=void 0,n()),V=e}function t_(_){var e=V;_.__c=_.__(),V=e}function o_(_,e){return"function"==typeof e?e(_):e}Promise.resolve(),D({}),D({});const r_=e.__e;let l_;function i_(){const[_,e]=Q([]);return I`<div class="click-count">${_.length}</div><div class="clicker" onClick=${_=>e((e=>{return[...e,{x:_.clientX,y:_.clientY,color:(n=80,t=136,"rgba("+(Math.floor(Math.random()*t)+n)+","+(Math.floor(Math.random()*t)+n)+","+(Math.floor(Math.random()*t)+n)+",1)")}];var n,t}))}/>${_.map(((_,e)=>I`<div class="click-item" style=${{top:`${_.y}px`,left:`${_.x}px`,backgroundColor:_.color}}>${e}</div>`))}`}async function u_(_){return await(e=I`<${i_} ...${_}/>`,import("./chunks/prerender.1cfb3b94.js").then((_=>_.default(e,n))));var e,n}e.__e=(_,e,n)=>{if(_&&_.then){let t=e;for(;t=t.__;)if(t.__c&&t.__c.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),t.__c.__c(_,e)}r_&&r_(_,e,n)},function(_,e){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");e=e||n&&n.parentNode||document.body,!l_&&n?A(_,e):T(_,e),l_=!0}(I`<${i_}/>`);export{i_ as App,f as h,e as l,p,u_ as prerender,$ as q};