(self.webpackChunkscottelundgren_github_io=self.webpackChunkscottelundgren_github_io||[]).push([[665],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";var r,o,i,a,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),A=n(2993),f=n.n(A),p=n(7294),d=n(6494),m=n.n(d),g="bodyAttributes",h="htmlAttributes",y="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",C="href",v="http-equiv",w="innerHTML",B="itemprop",j="name",O="property",k="rel",S="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",M="defer",H="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",Q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),V=[b.NOSCRIPT,b.SCRIPT,b.STYLE],q="data-react-helmet",N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=_(e,b.TITLE),n=_(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,x);return t||r||void 0},F=function(e){return _(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+N(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==w&&c!==T&&c!==B||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,A=e.title,f=e.titleAttributes;ue(b.BODY,r),ue(b.HTML,o),ce(A,f);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,i),metaTags:le(b.META,a),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,s)},d={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,d,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(b.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var A=i.length-1;A>=0;A--)n.removeAttribute(i[A]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=Ae(n,r),[p.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case h:return{toComponent:function(){return Ae(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===w||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===w||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,A=void 0===s?"":s,f=e.titleAttributes;return{base:fe(b.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(h,o,r),link:fe(b.LINK,i,r),meta:fe(b.META,a,r),noscript:fe(b.NOSCRIPT,c,r),script:fe(b.SCRIPT,u,r),style:fe(b.STYLE,l,r),title:fe(b.TITLE,{title:A,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:W([C,I],e),bodyAttributes:X(g,e),defer:_(e,M),encode:_(e,H),htmlAttributes:X(h,e),linkTags:K(b.LINK,[k,C],e),metaTags:K(b.META,[j,E,v,O,B],e),noscriptTags:K(b.NOSCRIPT,[w],e),onChangeClientState:F(e),scriptTags:K(b.SCRIPT,[S,w],e),styleTags:K(b.STYLE,[T],e),title:Z(e),titleAttributes:X(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=de,a=i=function(e){function t(){return z(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case b.BODY:return G({},o,{bodyAttributes:G({},i)});case b.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Q[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},L(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind,t.Z=me},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),A.canUseDOM?t(u):n&&(u=n(u))}var A=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(A,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(A,"canUseDOM",c),A}}},5397:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),o=n(5444),i=n(5414),a=function(e){var t=e.siteMetadata;return r.createElement(r.Fragment,null,r.createElement("aside",{className:"sidebar"},r.createElement("header",null,r.createElement("div",{className:"about"},r.createElement("div",{className:"cover-author-image"},r.createElement(o.rU,{to:"/"},r.createElement("img",{src:"data:image/jpeg;base64,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",alt:t.author}))),r.createElement("div",{className:"author-name"},t.author),r.createElement("p",null,t.description))),r.createElement("footer",null,r.createElement("section",{className:"contact"},r.createElement("ul",null,t.social.facebook&&r.createElement("li",null,r.createElement("a",{href:"https://facebook.com/"+t.social.facebook,rel:"noopener",target:"_blank"},r.createElement("i",{className:"fa fa-facebook"}))),t.social.github&&r.createElement("li",null,r.createElement("a",{href:"https://github.com/"+t.social.github,rel:"noopener",target:"_blank"},r.createElement("i",{className:"fa fa-github"}))),t.social.instagram&&r.createElement("li",null,r.createElement("a",{href:"https://instagram.com/"+t.social.instagram,rel:"noopener",target:"_blank"},r.createElement("i",{className:"fa fa-instagram"}))),t.social.linkedin&&r.createElement("li",null,r.createElement("a",{href:"https://linkedin.com/in/"+t.social.linkedin,rel:"noopener",target:"_blank"},r.createElement("i",{className:"fa fa-linkedin"}))),t.social.twitter&&r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/"+t.social.twitter,rel:"noopener",target:"_blank"},r.createElement("i",{className:"fa fa-twitter"}))),r.createElement("li",null,r.createElement(o.rU,{to:"/rss.xml"},r.createElement("i",{className:"fa fa-rss"}))))),r.createElement("div",{className:"copyright"},r.createElement("p",null,(new Date).getFullYear()," © ",t.author)))))},c=function(e){var t=e.children;return r.createElement(o.i1,{query:"654472347",render:function(e){return r.createElement("div",{className:"wrapper"},r.createElement(i.Z,null,r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap"})),r.createElement(a,{siteMetadata:e.site.siteMetadata}),t)}})}}}]);
//# sourceMappingURL=eec97d4d068405d0bfa641ce29e033f0938c7262-a6b6a9a47c5637cb13c8.js.map