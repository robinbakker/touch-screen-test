import{l as e,p as t,h as r,q as n}from"../index.566974a1.js";var o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,l=/[\s\n\\/='"\0<>]/,a=/^xlink:?./,s=/["&<]/;function f(e){if(!1===s.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var u=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},c=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},p={},_=/([A-Z])/g;function d(e){var t="";for(var r in e){var n=e[r];null!=n&&""!==n&&(t&&(t+=" "),t+="-"==r[0]?r:p[r]||(p[r]=r.replace(_,"-$1").toLowerCase()),t="number"==typeof n&&!1===o.test(r)?t+": "+n+"px;":t+": "+n+";")}return t||void 0}function v(e,t){return Array.isArray(t)?t.reduce(v,e):null!=t&&!1!==t&&e.push(t),e}function h(){this.__d=!0}function y(e,t){return{__v:e,context:t,props:e.props,setState:h,forceUpdate:h,__d:!0,__h:[]}}function g(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var m=[];function b(r,n,o,s,p,_){if(null==r||"boolean"==typeof r)return"";if("object"!=typeof r)return"function"==typeof r?"":f(r);var h=o.pretty,x=h&&"string"==typeof h?h:"\t";if(Array.isArray(r)){for(var k="",w=0;w<r.length;w++)h&&w>0&&(k+="\n"),k+=b(r[w],n,o,s,p,_);return k}if(void 0!==r.constructor)return"";var S,C=r.type,O=r.props,j=!1;if("function"==typeof C){if(j=!0,!o.shallow||!s&&!1!==o.renderRootComponent){if(C===t){var A=[];return v(A,r.props.children),b(A,n,o,!1!==o.shallowHighOrder,p,_)}var F,H=r.__c=y(r,n);e.__b&&e.__b(r);var M=e.__r;if(C.prototype&&"function"==typeof C.prototype.render){var L=g(C,n);(H=r.__c=new C(O,L)).__v=r,H._dirty=H.__d=!0,H.props=O,null==H.state&&(H.state={}),null==H._nextState&&null==H.__s&&(H._nextState=H.__s=H.state),H.context=L,C.getDerivedStateFromProps?H.state=Object.assign({},H.state,C.getDerivedStateFromProps(H.props,H.state)):H.componentWillMount&&(H.componentWillMount(),H.state=H._nextState!==H.state?H._nextState:H.__s!==H.state?H.__s:H.state),M&&M(r),F=H.render(H.props,H.state,H.context)}else for(var D=g(C,n),E=0;H.__d&&E++<25;)H.__d=!1,M&&M(r),F=C.call(r.__c,O,D);return H.getChildContext&&(n=Object.assign({},n,H.getChildContext())),e.diffed&&e.diffed(r),b(F,n,o,!1!==o.shallowHighOrder,p,_)}C=(S=C).displayName||S!==Function&&S.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=m.length;n--;)if(m[n]===e){r=n;break}r<0&&(r=m.push(e)-1),t="UnnamedComponent"+r}return t}(S)}var T,$,N="<"+C;if(O){var P=Object.keys(O);o&&!0===o.sortAttributes&&P.sort();for(var W=0;W<P.length;W++){var I=P[W],R=O[I];if("children"!==I){if(!l.test(I)&&(o&&o.allAttributes||"key"!==I&&"ref"!==I&&"__self"!==I&&"__source"!==I)){if("defaultValue"===I)I="value";else if("defaultChecked"===I)I="checked";else if("defaultSelected"===I)I="selected";else if("className"===I){if(void 0!==O.class)continue;I="class"}else p&&a.test(I)&&(I=I.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===I){if(O.for)continue;I="for"}"style"===I&&R&&"object"==typeof R&&(R=d(R)),"a"===I[0]&&"r"===I[1]&&"boolean"==typeof R&&(R=String(R));var U=o.attributeHook&&o.attributeHook(I,R,n,o,j);if(U||""===U)N+=U;else if("dangerouslySetInnerHTML"===I)$=R&&R.__html;else if("textarea"===C&&"value"===I)T=R;else if((R||0===R||""===R)&&"function"!=typeof R){if(!(!0!==R&&""!==R||(R=I,o&&o.xml))){N=N+" "+I;continue}if("value"===I){if("select"===C){_=R;continue}"option"===C&&_==R&&void 0===O.selected&&(N+=" selected")}N=N+" "+I+'="'+f(R)+'"'}}}else T=R}}if(h){var V=N.replace(/\n\s*/," ");V===N||~V.indexOf("\n")?h&&~N.indexOf("\n")&&(N+="\n"):N=V}if(N+=">",l.test(C))throw new Error(C+" is not a valid HTML tag name in "+N);var q,z=i.test(C)||o.voidElements&&o.voidElements.test(C),Z=[];if($)h&&c($)&&($="\n"+x+u($,x)),N+=$;else if(null!=T&&v(q=[],T).length){for(var B=h&&~N.indexOf("\n"),G=!1,J=0;J<q.length;J++){var K=q[J];if(null!=K&&!1!==K){var Q=b(K,n,o,!0,"svg"===C||"foreignObject"!==C&&p,_);if(h&&!B&&c(Q)&&(B=!0),Q)if(h){var X=Q.length>0&&"<"!=Q[0];G&&X?Z[Z.length-1]+=Q:Z.push(Q),G=X}else Z.push(Q)}}if(h&&B)for(var Y=Z.length;Y--;)Z[Y]="\n"+x+u(Z[Y],x)}if(Z.length||$)N+=Z.join("");else if(o&&o.xml)return N.substring(0,N.length-1)+" />";return!z||q||$?(h&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+C+">"):N=N.replace(/>$/," />"),N}var x={shallow:!0};w.render=w;var k=[];function w(n,o,i){o=o||{};var l=e.__s;e.__s=!0;var a,s=r(t,null);return s.__k=[n],a=i&&(i.pretty||i.voidElements||i.sortAttributes||i.shallow||i.allAttributes||i.xml||i.attributeHook)?b(n,o,i):F(n,o,!1,void 0,s),e.__c&&e.__c(n,k),e.__s=l,k.length=0,a}function S(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?r(null,null,e):e}function C(e,t){return"className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&a.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function O(e,t){return"style"===e&&null!=t&&"object"==typeof t?d(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var j=Array.isArray,A=Object.assign;function F(r,n,o,a,s){if(null==r||!0===r||!1===r||""===r)return"";if("object"!=typeof r)return"function"==typeof r?"":f(r);if(j(r)){var u="";s.__k=r;for(var c=0;c<r.length;c++)u+=F(r[c],n,o,a,s),r[c]=S(r[c]);return u}if(void 0!==r.constructor)return"";r.__=s,e.__b&&e.__b(r);var p=r.type,_=r.props;if("function"==typeof p){var d;if(p===t)d=_.children;else{d=p.prototype&&"function"==typeof p.prototype.render?function(t,r){var n=t.type,o=g(n,r),i=new n(t.props,o);t.__c=i,i.__v=t,i.__d=!0,i.props=t.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,n.getDerivedStateFromProps?i.state=A({},i.state,n.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var l=e.__r;return l&&l(t),i.render(i.props,i.state,i.context)}(r,n):function(t,r){var n,o=y(t,r),i=g(t.type,r);t.__c=o;for(var l=e.__r,a=0;o.__d&&a++<25;)o.__d=!1,l&&l(t),n=t.type.call(o,t.props,i);return n}(r,n);var v=r.__c;v.getChildContext&&(n=A({},n,v.getChildContext()))}var h=F(d=null!=d&&d.type===t&&null==d.key?d.props.children:d,n,o,a,r);return e.diffed&&e.diffed(r),r.__=void 0,e.unmount&&e.unmount(r),h}var m,b,x="<";if(x+=p,_)for(var k in m=_.children,_){var w=_[k];if(!("key"===k||"ref"===k||"__self"===k||"__source"===k||"children"===k||"className"===k&&"class"in _||"htmlFor"===k&&"for"in _||l.test(k)))if(w=O(k=C(k,o),w),"dangerouslySetInnerHTML"===k)b=w&&w.__html;else if("textarea"===p&&"value"===k)m=w;else if((w||0===w||""===w)&&"function"!=typeof w){if(!0===w||""===w){w=k,x=x+" "+k;continue}if("value"===k){if("select"===p){a=w;continue}"option"!==p||a!=w||"selected"in _||(x+=" selected")}x=x+" "+k+'="'+f(w)+'"'}}var H=x;if(x+=">",l.test(p))throw new Error(p+" is not a valid HTML tag name in "+x);var M="",L=!1;if(b)M+=b,L=!0;else if("string"==typeof m)M+=f(m),L=!0;else if(j(m)){r.__k=m;for(var D=0;D<m.length;D++){var E=m[D];if(m[D]=S(E),null!=E&&!1!==E){var T=F(E,n,"svg"===p||"foreignObject"!==p&&o,a,r);T&&(M+=T,L=!0)}}}else if(null!=m&&!1!==m&&!0!==m){r.__k=[S(m)];var $=F(m,n,"svg"===p||"foreignObject"!==p&&o,a,r);$&&(M+=$,L=!0)}if(e.diffed&&e.diffed(r),r.__=void 0,e.unmount&&e.unmount(r),L)x+=M;else if(i.test(p))return H+" />";return x+"</"+p+">"}let H;w.shallowRender=function(e,t){return w(e,t,x)};const M=e.vnode;async function L(e,t){const o=(t=t||{}).maxDepth||10,i=t.props;let l=0;"function"==typeof e?e=r(e,i):i&&(e=n(e,i));const a=()=>{if(!(++l>o))try{return w(e)}catch(t){if(t&&t.then)return t.then(a);throw t}};let s=new Set;H=({type:e,props:t})=>{"a"!==e||!t||!t.href||t.target&&"_self"!==t.target||s.add(t.href)};try{let e=await a();return e+='<script type="isodata"><\/script>',{html:e,links:s}}finally{H=null}}e.vnode=e=>{M&&M(e),H&&H(e)};export default L;