(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1045:function(t,e,n){"use strict";n.r(e),function(t,r,i){var o=n(90),a=n.n(o),l=n(1079),u=n.n(l),s=n(91),_=n.n(s),c=n(1116),f=n(352),p=n(211),v=n(1101),h=n.n(v),d=n(209),g=function(){var t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,i){var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&o)for(var l in o)void 0===n[l]&&(n[l]=o[l]);else n||(n=o||{});if(1===a)n.children=i;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t,e,n,r,i){return i?{paddingBottom:t/e*100+"%"}:void 0!==r?{width:r,height:t/e*r}:void 0!==n?{width:e/t*n,height:n}:{width:e/t*18,height:18}},w=function(e){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return x.call(e),e.state={Component:null,isHovering:!1},e}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,t.Component),y(r,[{key:"loadIcons",value:function(t){var e=this;n.e(31).then(n.bind(null,1141)).then(function(n){!e.unmounted&&e.setState({Component:n.default[_()(t)]||n.Fpo})})}},{key:"componentDidMount",value:function(){this.loadIcons(this.props.icon)}},{key:"componentWillReceiveProps",value:function(t){this.loadIcons(t.icon)}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"render",value:function(){var t=this,e=this.state.Component;return!!e&&g(p.a,{mapStoreState:function(t){return{theme:t.theme}}},void 0,function(n){var r=n.store;return g(e,{getProps:u()(t.getProps,r.theme)})})}},{key:"setHovering",value:function(t){var e=this;return function(){!e.unmounted&&c.a&&e.setState({isHovering:t})}}}]),r}(),x=function(){var t=this;this.getProps=function(e,n,i){var o=t.props,l=t.state,u=function(t){return e[t]||Object(f.a)(t)};return{color:u(a()(o.color)?o.color(l.isHovering):o.color),color2:u(a()(o.color2)?o.color2(l.isHovering):o.color2),svg:{className:r(h.a.svg,m({},d.absolute,o.responsive)),viewBox:"0 0 "+i+" "+n},wrapper:{className:r(o.className,m({},h.a.responsive,o.responsive)),style:b(n,i,o.height,o.width,o.responsive),onMouseEnter:t.setHovering(!0),onMouseLeave:t.setHovering(!1)}}}};w.defaultProps={color:"colorNeutral1F",responsive:!1},e.default=i(w)}.call(this,n(4),n(530),n(1043).default)},1047:function(t,e,n){var r=n(214),i=n(34);t.exports=function(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=r(t.prototype),o=t.apply(n,e);return i(o)?o:n}}},1048:function(t,e){var n="__lodash_placeholder__";t.exports=function(t,e){for(var r=-1,i=t.length,o=0,a=[];++r<i;){var l=t[r];l!==e&&l!==n||(t[r]=n,a[o++]=r)}return a}},1052:function(t,e){t.exports=function(t){return t.placeholder}},1055:function(t,e,n){var r=n(179),i=n(535),o=i?function(t,e){return i.set(t,e),t}:r;t.exports=o},1056:function(t,e,n){var r=n(1057),i=n(1058),o=n(1068),a=n(1047),l=n(1059),u=n(1052),s=n(1072),_=n(1048),c=n(60),f=1,p=2,v=8,h=16,d=128,g=512;t.exports=function t(e,n,y,m,b,w,x,C,D,N){var P=n&d,j=n&f,O=n&p,S=n&(v|h),k=n&g,M=O?void 0:a(e);return function f(){for(var p=arguments.length,v=Array(p),h=p;h--;)v[h]=arguments[h];if(S)var d=u(f),g=o(v,d);if(m&&(v=r(v,m,b,S)),w&&(v=i(v,w,x,S)),p-=g,S&&p<N){var T=_(v,d);return l(e,n,t,f.placeholder,y,v,T,C,D,N-p)}var W=j?y:this,H=O?W[e]:e;return p=v.length,C?v=s(v,C):k&&p>1&&v.reverse(),P&&D<p&&(v.length=D),this&&this!==c&&this instanceof f&&(H=M||a(H)),H.apply(W,v)}}},1057:function(t,e){var n=Math.max;t.exports=function(t,e,r,i){for(var o=-1,a=t.length,l=r.length,u=-1,s=e.length,_=n(a-l,0),c=Array(s+_),f=!i;++u<s;)c[u]=e[u];for(;++o<l;)(f||o<a)&&(c[r[o]]=t[o]);for(;_--;)c[u++]=t[o++];return c}},1058:function(t,e){var n=Math.max;t.exports=function(t,e,r,i){for(var o=-1,a=t.length,l=-1,u=r.length,s=-1,_=e.length,c=n(a-u,0),f=Array(c+_),p=!i;++o<c;)f[o]=t[o];for(var v=o;++s<_;)f[v+s]=e[s];for(;++l<u;)(p||o<a)&&(f[v+r[l]]=t[o++]);return f}},1059:function(t,e,n){var r=n(536),i=n(1060),o=n(1061),a=1,l=2,u=4,s=8,_=32,c=64;t.exports=function(t,e,n,f,p,v,h,d,g,y){var m=e&s;e|=m?_:c,(e&=~(m?c:_))&u||(e&=~(a|l));var b=[t,e,p,m?v:void 0,m?h:void 0,m?void 0:v,m?void 0:h,d,g,y],w=n.apply(void 0,b);return r(t)&&i(w,b),w.placeholder=f,o(w,t,e)}},1060:function(t,e,n){var r=n(1055),i=n(534)(r);t.exports=i},1061:function(t,e,n){var r=n(1069),i=n(1070),o=n(354),a=n(1071);t.exports=function(t,e,n){var l=e+"";return o(t,i(l,a(r(l),n)))}},1065:function(t,e,n){var r=n(1055),i=n(1066),o=n(1067),a=n(1056),l=n(1073),u=n(355),s=n(1074),_=n(1060),c=n(1061),f=n(79),p="Expected a function",v=1,h=2,d=8,g=16,y=32,m=64,b=Math.max;t.exports=function(t,e,n,w,x,C,D,N){var P=e&h;if(!P&&"function"!=typeof t)throw new TypeError(p);var j=w?w.length:0;if(j||(e&=~(y|m),w=x=void 0),D=void 0===D?D:b(f(D),0),N=void 0===N?N:f(N),j-=x?x.length:0,e&m){var O=w,S=x;w=x=void 0}var k=P?void 0:u(t),M=[t,e,n,w,x,O,S,C,D,N];if(k&&s(M,k),t=M[0],e=M[1],n=M[2],w=M[3],x=M[4],!(N=M[9]=void 0===M[9]?P?0:t.length:b(M[9]-j,0))&&e&(d|g)&&(e&=~(d|g)),e&&e!=v)T=e==d||e==g?o(t,e,N):e!=y&&e!=(v|y)||x.length?a.apply(void 0,M):l(t,e,n,w);else var T=i(t,e,n);return c((k?r:_)(T,M),t,e)}},1066:function(t,e,n){var r=n(1047),i=n(60),o=1;t.exports=function(t,e,n){var a=e&o,l=r(t);return function e(){return(this&&this!==i&&this instanceof e?l:t).apply(a?n:this,arguments)}}},1067:function(t,e,n){var r=n(532),i=n(1047),o=n(1056),a=n(1059),l=n(1052),u=n(1048),s=n(60);t.exports=function(t,e,n){var _=i(t);return function i(){for(var c=arguments.length,f=Array(c),p=c,v=l(i);p--;)f[p]=arguments[p];var h=c<3&&f[0]!==v&&f[c-1]!==v?[]:u(f,v);return(c-=h.length)<n?a(t,e,o,i.placeholder,void 0,f,h,void 0,void 0,n-c):r(this&&this!==s&&this instanceof i?_:t,this,f)}}},1068:function(t,e){t.exports=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}},1069:function(t,e){var n=/\{\n\/\* \[wrapped with (.+)\] \*/,r=/,? & /;t.exports=function(t){var e=t.match(n);return e?e[1].split(r):[]}},1070:function(t,e){var n=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;t.exports=function(t,e){var r=e.length;if(!r)return t;var i=r-1;return e[i]=(r>1?"& ":"")+e[i],e=e.join(r>2?", ":" "),t.replace(n,"{\n/* [wrapped with "+e+"] */\n")}},1071:function(t,e,n){var r=n(276),i=n(277),o=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];t.exports=function(t,e){return r(o,function(n){var r="_."+n[0];e&n[1]&&!i(t,r)&&t.push(r)}),t.sort()}},1072:function(t,e,n){var r=n(150),i=n(181),o=Math.min;t.exports=function(t,e){for(var n=t.length,a=o(e.length,n),l=r(t);a--;){var u=e[a];t[a]=i(u,n)?l[u]:void 0}return t}},1073:function(t,e,n){var r=n(532),i=n(1047),o=n(60),a=1;t.exports=function(t,e,n,l){var u=e&a,s=i(t);return function e(){for(var i=-1,a=arguments.length,_=-1,c=l.length,f=Array(c+a),p=this&&this!==o&&this instanceof e?s:t;++_<c;)f[_]=l[_];for(;a--;)f[_++]=arguments[++i];return r(p,u?n:this,f)}}},1074:function(t,e,n){var r=n(1057),i=n(1058),o=n(1048),a="__lodash_placeholder__",l=1,u=2,s=4,_=8,c=128,f=256,p=Math.min;t.exports=function(t,e){var n=t[1],v=e[1],h=n|v,d=h<(l|u|c),g=v==c&&n==_||v==c&&n==f&&t[7].length<=e[8]||v==(c|f)&&e[7].length<=e[8]&&n==_;if(!d&&!g)return t;v&l&&(t[2]=e[2],h|=n&l?0:s);var y=e[3];if(y){var m=t[3];t[3]=m?r(m,y,e[4]):y,t[4]=m?o(t[3],a):e[4]}return(y=e[5])&&(m=t[5],t[5]=m?i(m,y,e[6]):y,t[6]=m?o(t[5],a):e[6]),(y=e[7])&&(t[7]=y),v&c&&(t[8]=null==t[8]?e[8]:p(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=h,t}},1075:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(274),i=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({},r.presets,{snap:{stiffness:300,damping:27},slower:{stiffness:180,damping:23},smoother:{stiffness:120,damping:36}})},1079:function(t,e,n){var r=n(117),i=n(1065),o=n(1052),a=n(1048),l=r(function(t,e){var n=a(e,o(l));return i(t,32,void 0,e,n)});l.placeholder={},t.exports=l},1101:function(t,e,n){t.exports={responsive:"icon__responsive___xkMYR utilities__relative___1GEg3 utilities__fullWidth___3kUCi",svg:"icon__svg___cc1CR utilities__block___2NUBz utilities__fullWidth___3kUCi utilities__fullHeight___NZTu9"}},1104:function(t,e,n){"use strict";var r=n(533),i=n.n(r),o=n(129),a=n.n(o),l=n(38),u=n.n(l),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function(t){var e=u()(t,"animation","appearance","filter","transform"),n=a()(e,function(t,e){return"Webkit"+i()(e)});return s({},t,n)}},2326:function(t,e,n){"use strict";n.r(e),function(t,r,i,o,a){var l=n(392),u=n.n(l),s=n(0),_=n.n(s),c=n(106),f=n.n(c),p=n(1046),v=n(274),h=n(215),d=n(1075),g=n(1104),y=n(2327),m=n.n(y),b=n(352),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x=function(){var t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,i){var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&o)for(var l in o)void 0===n[l]&&(n[l]=o[l]);else n||(n=o||{});if(1===a)n.children=i;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}();var C=function(e){var n=e.styles,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["styles"]),a=o.arrowPosition,l=t.getItem(o.dialogKey),s={defaultStyle:{contentScale:0},style:{contentScale:Object(v.spring)(l?1:0,l?d.a.snap:{stiffness:220,damping:17})}};return r.createElement(v.Motion,s,function(e){var l=e.contentScale,s=Object(g.a)({transform:"translateX(-50%) scale("+l+")",top:o.headerHeight+"px"}),_={className:f()(a)?n.triangle:n[u()("triangle "+(!f()(a)&&a))],style:{borderBottomColor:Object(b.a)(o.borderColor),left:f()(a)&&a+"px"}};return x("div",{className:n.wrapper,style:{transform:"scale("+l+")"}},void 0,x(p.a,{className:n.glass,onClick:o.closeTipDialog}),x("div",{className:n.outerContainer,style:s},void 0,r.createElement("div",_),x("div",{className:n.container,style:{borderColor:Object(b.a)(o.borderColor)}},void 0,t.getItem(o.dialogKey)),x(p.a,{onClick:o.closeTipDialog,className:n.close},void 0,x(i,{icon:"close",width:14}))))})};C.defaultProps={arrowPosition:"center",borderColor:"colorAqua"},C.mapStateToProps=function(t){return w({headerHeight:t.ui.headerHeight,dialogKey:_()(t,"ui.tipDialog.key")},_()(t,"ui.tipDialog.props",{}))},C.mapDispatchToProps={closeTipDialog:h.d},e.default=o(a(C),m.a)}.call(this,n(224).default,n(4),n(1045).default,n(1043).default,n(529).default)},2327:function(t,e,n){t.exports={colorWhite:"#ffffff",colorNeutral1F:"#1f1f1f",unit8:"8px",unit16:"16px",unit24:"24px",unit32:"32px",wrapper:"tipDialog__wrapper___qCHuP utilities__fullWidth___3kUCi utilities__fullHeight___NZTu9 utilities__fixed___1nM3D utilities__pinTopLeft___2dFnK",outerContainer:"tipDialog__outerContainer___1Jy_l utilities__fullWidth___3kUCi utilities__fixed___1nM3D utilities__pinTopCenter___1q8S3",outerContainerWide:"tipDialog__outerContainerWide___1oQsm tipDialog__outerContainer___1Jy_l utilities__fullWidth___3kUCi utilities__fixed___1nM3D utilities__pinTopCenter___1q8S3",outerContainerNarrow:"tipDialog__outerContainerNarrow___3AP5R tipDialog__outerContainer___1Jy_l utilities__fullWidth___3kUCi utilities__fixed___1nM3D utilities__pinTopCenter___1q8S3",container:"tipDialog__container___3EQym utilities__centered___10zw_",glass:"tipDialog__glass___3OYcm",triangle:"tipDialog__triangle___2PDNQ utilities__absolute___2Nj_S",triangleLeft:"tipDialog__triangleLeft___1963v tipDialog__triangle___2PDNQ utilities__absolute___2Nj_S",triangleCenter:"tipDialog__triangleCenter___2jFz8 tipDialog__triangle___2PDNQ utilities__absolute___2Nj_S",triangleRight:"tipDialog__triangleRight___8KtCw tipDialog__triangle___2PDNQ utilities__absolute___2Nj_S",triangleNone:"tipDialog__triangleNone___P6cnQ",closeNarrow:"tipDialog__closeNarrow___33pZx utilities__absolute___2Nj_S",closeWide:"tipDialog__closeWide___1rR6v utilities__absolute___2Nj_S"}}}]);