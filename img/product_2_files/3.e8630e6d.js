(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1237:function(t,e,i){var n;!function(r,s,o,a){"use strict";var h,u=["","webkit","Moz","MS","ms","o"],c=s.createElement("div"),l="function",p=Math.round,f=Math.abs,v=Date.now;function d(t,e,i){return setTimeout(A(t,i),e)}function m(t,e,i){return!!Array.isArray(t)&&(g(t,i[e],i),!0)}function g(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function T(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,n,i),t.apply(this,arguments)}}h="function"!==typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==a&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var y=T(function(t,e,i){for(var n=Object.keys(e),r=0;r<n.length;)(!i||i&&t[n[r]]===a)&&(t[n[r]]=e[n[r]]),r++;return t},"extend","Use `assign`."),E=T(function(t,e){return y(t,e,!0)},"merge","Use `assign`.");function I(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&h(n,i)}function A(t,e){return function(){return t.apply(e,arguments)}}function b(t,e){return typeof t==l?t.apply(e&&e[0]||a,e):t}function _(t,e){return t===a?e:t}function C(t,e,i){g(D(e),function(e){t.addEventListener(e,i,!1)})}function S(t,e,i){g(D(e),function(e){t.removeEventListener(e,i,!1)})}function w(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function P(t,e){return t.indexOf(e)>-1}function D(t){return t.trim().split(/\s+/g)}function x(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function O(t){return Array.prototype.slice.call(t,0)}function R(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];x(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function M(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<u.length;){if((n=(i=u[s])?i+r:e)in t)return n;s++}return a}var z=1;function N(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var X="ontouchstart"in r,Y=M(r,"PointerEvent")!==a,F=X&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),W=25,k=1,q=2,L=4,H=8,U=1,V=2,j=4,G=8,Z=16,B=V|j,J=G|Z,$=B|J,K=["x","y"],Q=["clientX","clientY"];function tt(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){b(t.options.enable,[t])&&i.handler(e)},this.init()}function et(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&k&&n-r===0,o=e&(L|H)&&n-r===0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=it(e));r>1&&!i.firstMultiple?i.firstMultiple=it(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,h=o?o.center:s.center,u=e.center=nt(n);e.timeStamp=v(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=at(h,u),e.distance=ot(h,u),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==k&&s.eventType!==L||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=st(e.deltaX,e.deltaY);var c=rt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=f(c.x)>f(c.y)?c.x:c.y,e.scale=o?(l=o.pointers,p=n,ot(p[0],p[1],Q)/ot(l[0],l[1],Q)):1,e.rotation=o?function(t,e){return at(e[1],e[0],Q)+at(t[1],t[0],Q)}(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,r,s,o=t.lastInterval||e,h=e.timeStamp-o.timeStamp;if(e.eventType!=H&&(h>W||o.velocity===a)){var u=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,l=rt(h,u,c);n=l.x,r=l.y,i=f(l.x)>f(l.y)?l.x:l.y,s=st(u,c),t.lastInterval=e}else i=o.velocity,n=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=r,e.direction=s}(i,e);var l,p;var d=t.element;w(e.srcEvent.target,d)&&(d=e.srcEvent.target);e.target=d}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function it(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:p(t.pointers[i].clientX),clientY:p(t.pointers[i].clientY)},i++;return{timeStamp:v(),pointers:e,center:nt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function nt(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:p(i/e),y:p(n/e)}}function rt(t,e,i){return{x:e/t||0,y:i/t||0}}function st(t,e){return t===e?U:f(t)>=f(e)?t<0?V:j:e<0?G:Z}function ot(t,e,i){i||(i=K);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function at(t,e,i){i||(i=K);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(N(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(N(this.element),this.evWin,this.domHandler)}};var ht={mousedown:k,mousemove:q,mouseup:L},ut="mousedown",ct="mousemove mouseup";function lt(){this.evEl=ut,this.evWin=ct,this.pressed=!1,tt.apply(this,arguments)}I(lt,tt,{handler:function(t){var e=ht[t.type];e&k&&0===t.button&&(this.pressed=!0),e&q&&1!==t.which&&(e=L),this.pressed&&(e&L&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:k,pointermove:q,pointerup:L,pointercancel:H,pointerout:H},ft={2:"touch",3:"pen",4:"mouse",5:"kinect"},vt="pointerdown",dt="pointermove pointerup pointercancel";function mt(){this.evEl=vt,this.evWin=dt,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(vt="MSPointerDown",dt="MSPointerMove MSPointerUp MSPointerCancel"),I(mt,tt,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=pt[n],s=ft[t.pointerType]||t.pointerType,o="touch"==s,a=x(e,t.pointerId,"pointerId");r&k&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(L|H)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var gt={touchstart:k,touchmove:q,touchend:L,touchcancel:H},Tt="touchstart",yt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=Tt,this.evWin=yt,this.started=!1,tt.apply(this,arguments)}I(Et,tt,{handler:function(t){var e=gt[t.type];if(e===k&&(this.started=!0),this.started){var i=function(t,e){var i=O(t.touches),n=O(t.changedTouches);e&(L|H)&&(i=R(i.concat(n),"identifier",!0));return[i,n]}.call(this,t,e);e&(L|H)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var It={touchstart:k,touchmove:q,touchend:L,touchcancel:H},At="touchstart touchmove touchend touchcancel";function bt(){this.evTarget=At,this.targetIds={},tt.apply(this,arguments)}I(bt,tt,{handler:function(t){var e=It[t.type],i=function(t,e){var i=O(t.touches),n=this.targetIds;if(e&(k|q)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=O(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return w(t.target,h)}),e===k)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;r=0;for(;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(L|H)&&delete n[o[r].identifier],r++;if(!a.length)return;return[R(s.concat(a),"identifier",!0),a]}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var _t=2500,Ct=25;function St(){tt.apply(this,arguments);var t=A(this.handler,this);this.touch=new bt(this.manager,t),this.mouse=new lt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function wt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},_t)}}I(St,tt,{handler:function(t,e,i){var n="touch"==i.pointerType,r="mouse"==i.pointerType;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&k?(this.primaryTouch=e.changedPointers[0].identifier,wt.call(this,e)):t&(L|H)&&wt.call(this,e)}).call(this,e,i);else if(r&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=Ct&&o<=Ct)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Pt=M(c.style,"touchAction"),Dt=Pt!==a,xt="auto",Ot="manipulation",Rt="none",Mt="pan-x",zt="pan-y",Nt=function(){if(!Dt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||r.CSS.supports("touch-action",i)}),t}();function Xt(t,e){this.manager=t,this.set(e)}Xt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Dt&&this.manager.element.style&&Nt[t]&&(this.manager.element.style[Pt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,function(e){b(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(P(t,Rt))return Rt;var e=P(t,Mt),i=P(t,zt);if(e&&i)return Rt;if(e||i)return e?Mt:zt;if(P(t,Ot))return Ot;return xt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,r=P(n,Rt)&&!Nt[Rt],s=P(n,zt)&&!Nt[zt],o=P(n,Mt)&&!Nt[Mt];if(r){var a=1===t.pointers.length,h=t.distance<2,u=t.deltaTime<250;if(a&&h&&u)return}if(!o||!s)return r||s&&i&B||o&&i&J?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Yt=1,Ft=2,Wt=4,kt=8,qt=kt,Lt=16;function Ht(t){this.options=h({},this.defaults,t||{}),this.id=z++,this.manager=null,this.options.enable=_(this.options.enable,!0),this.state=Yt,this.simultaneous={},this.requireFail=[]}function Ut(t){return t&Lt?"cancel":t&kt?"end":t&Wt?"move":t&Ft?"start":""}function Vt(t){return t==Z?"down":t==G?"up":t==V?"left":t==j?"right":""}function jt(t,e){var i=e.manager;return i?i.get(t):t}function Gt(){Ht.apply(this,arguments)}function Zt(){Gt.apply(this,arguments),this.pX=null,this.pY=null}function Bt(){Gt.apply(this,arguments)}function Jt(){Ht.apply(this,arguments),this._timer=null,this._input=null}function $t(){Gt.apply(this,arguments)}function Kt(){Gt.apply(this,arguments)}function Qt(){Ht.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function te(t,e){return(e=e||{}).recognizers=_(e.recognizers,te.defaults.preset),new ee(t,e)}Ht.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=jt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)?this:(t=jt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return-1===x(e,t=jt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=jt(t,this);var e=x(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<kt&&n(e.options.event+Ut(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=kt&&n(e.options.event+Ut(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Yt)))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!b(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(qt|Lt|32)&&(this.state=Yt),this.state=this.process(e),this.state&(Ft|Wt|kt|Lt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},I(Gt,Ht,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Ft|Wt),r=this.attrTest(t);return n&&(i&H||!r)?e|Lt:n||r?i&L?e|kt:e&Ft?e|Wt:Ft:32}}),I(Zt,Gt,{defaults:{event:"pan",threshold:10,pointers:1,direction:$},getTouchAction:function(){var t=this.options.direction,e=[];return t&B&&e.push(zt),t&J&&e.push(Mt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&B?(r=0===s?U:s<0?V:j,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?U:o<0?G:Z,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return Gt.prototype.attrTest.call(this,t)&&(this.state&Ft||!(this.state&Ft)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Vt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),I(Bt,Gt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Ft)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),I(Jt,Ht,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[xt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(L|H)&&!r)this.reset();else if(t.eventType&k)this.reset(),this._timer=d(function(){this.state=qt,this.tryEmit()},e.time,this);else if(t.eventType&L)return qt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===qt&&(t&&t.eventType&L?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=v(),this.manager.emit(this.options.event,this._input)))}}),I($t,Gt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Ft)}}),I(Kt,Gt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:B|J,pointers:1},getTouchAction:function(){return Zt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(B|J)?e=t.overallVelocity:i&B?e=t.overallVelocityX:i&J&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&t.eventType&L},emit:function(t){var e=Vt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),I(Qt,Ht,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ot]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&k&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=L)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||ot(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d(function(){this.state=qt,this.tryEmit()},e.interval,this),Ft):qt}return 32},failTimeout:function(){return this._timer=d(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==qt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),te.VERSION="2.0.7",te.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[$t,{enable:!1}],[Bt,{enable:!1},["rotate"]],[Kt,{direction:B}],[Zt,{direction:B},["swipe"]],[Qt],[Qt,{event:"doubletap",taps:2},["tap"]],[Jt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function ee(t,e){this.options=h({},te.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=function(t){var e=t.options.inputClass;return new(e||(Y?mt:F?bt:X?St:lt))(t,et)}(this),this.touchAction=new Xt(this,this.options.touchAction),ie(this,!0),g(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ie(t,e){var i,n=t.element;n.style&&(g(t.options.cssProps,function(r,s){i=M(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}ee.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&qt)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(Ft|Wt|kt)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof Ht)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=x(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return g(D(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==a){var i=this.handlers;return g(D(t),function(t){e?i[t]&&i[t].splice(x(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ie(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(te,{INPUT_START:k,INPUT_MOVE:q,INPUT_END:L,INPUT_CANCEL:H,STATE_POSSIBLE:Yt,STATE_BEGAN:Ft,STATE_CHANGED:Wt,STATE_ENDED:kt,STATE_RECOGNIZED:qt,STATE_CANCELLED:Lt,STATE_FAILED:32,DIRECTION_NONE:U,DIRECTION_LEFT:V,DIRECTION_RIGHT:j,DIRECTION_UP:G,DIRECTION_DOWN:Z,DIRECTION_HORIZONTAL:B,DIRECTION_VERTICAL:J,DIRECTION_ALL:$,Manager:ee,Input:tt,TouchAction:Xt,TouchInput:bt,MouseInput:lt,PointerEventInput:mt,TouchMouseInput:St,SingleTouchInput:Et,Recognizer:Ht,AttrRecognizer:Gt,Tap:Qt,Pan:Zt,Swipe:Kt,Pinch:Bt,Rotate:$t,Press:Jt,on:C,off:S,each:g,merge:E,extend:y,assign:h,inherit:I,bindFn:A,prefixed:M}),("undefined"!==typeof r?r:"undefined"!==typeof self?self:{}).Hammer=te,(n=function(){return te}.call(e,i,e,t))===a||(t.exports=n)}(window,document)}}]);