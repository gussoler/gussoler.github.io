'use strict';
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.9.7
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.theming.palette","material.core.theming","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.content","material.components.dialog","material.components.divider","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.toast","material.components.tabs","material.components.toolbar","material.components.tooltip","material.components.whiteframe"])}(),function(){function e(e,t){e.decorator("$$rAF",["$delegate",n]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function n(e){return e.throttle=function(t){var n,o,r,i;return function(){n=arguments,i=this,r=t,o||(o=!0,e(function(){r.apply(i,n),o=!1}))}},e}t.module("material.core",["material.core.gestures","material.core.theming"]).config(e),e.$inject=["$provide","$mdThemingProvider"]}(),function(){function e(e,t){function n(e){return o?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var o=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(o?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(o?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSFORM_ORIGIN:n("transformOrigin"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"},MEDIA_PRIORITY:["gt-lg","lg","gt-md","md","gt-sm","sm"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),function(){function e(e,n){function o(){return[].concat(E)}function r(){return E.length}function i(e){return E.length&&e>-1&&e<E.length}function a(e){return e?i(u(e)+1):!1}function d(e){return e?i(u(e)-1):!1}function c(e){return i(e)?E[e]:null}function m(e,t){return E.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=E.length),E.splice(n,0,e),u(e)):-1}function s(e){f(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function f(e){return e&&u(e)>-1}function p(){return E.length?E[0]:null}function h(){return E.length?E[E.length-1]:null}function b(e,o,r,a){r=r||g;for(var d=u(o);;){if(!i(d))return null;var c=d+(e?-1:1),m=null;if(i(c)?m=E[c]:n&&(m=e?h():p(),c=u(m)),null===m||c===a)return null;if(r(m))return m;t.isUndefined(a)&&(a=c),d=c}}var g=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var E=e||[];return{items:o,count:r,inRange:i,contains:f,indexOf:u,itemAt:c,findBy:m,add:l,remove:s,first:p,last:h,next:t.bind(null,b,!1),previous:t.bind(null,b,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function r(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=i(e));var o=p[n];return t.isUndefined(o)&&(o=a(n)),o}function i(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=f[e]=o.matchMedia(e);return t.addListener(d),p[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){p[e.media]=!!e.matches})}function c(e){return f[e]}function m(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var r=e.MEDIA_PRIORITY[o];if(f[u[r]].matches){var i=s(t,n+"-"+r);if(t[i])return t[i]}}return t[s(t,n)]}function l(n,o,r){var i=[];return n.forEach(function(n){var a=s(o,n);o[a]&&i.push(o.$observe(a,t.bind(void 0,r,null)));for(var d in e.MEDIA){if(a=s(o,n+"-"+d),!o[a])return;i.push(o.$observe(a,t.bind(void 0,r,d)))}}),function(){i.forEach(function(e){e()})}}function s(e,t){return h[t]||(h[t]=e.$normalize(t))}var u={},f={},p={},h={};return r.getResponsiveAttribute=m,r.getQuery=c,r.watchResponsiveAttributes=l,r}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){var o=["0","0","0"];t.module("material.core").factory("$mdUtil",["$cacheFactory","$document","$timeout","$q","$window","$mdConstant",function(r,i,a,d,c,m){function l(e){return e[0]||e}var s;return s={now:e.performance?t.bind(e.performance,e.performance.now):Date.now,clientRect:function(e,t,n){var o=l(e);t=l(t||o.offsetParent||document.body);var r=o.getBoundingClientRect(),i=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:r.left-i.left,top:r.top-i.top,width:r.width,height:r.height}},offsetRect:function(e,t){return s.clientRect(e,t,!0)},disableScrollAround:function(e){function n(){function e(e){d.contains(e.target)&&(e.preventDefault(),e.stopImmediatePropagation())}function n(e){e.preventDefault()}var o=t.element('<div class="md-scroll-mask"><div class="md-scroll-mask-bar"></div></div>'),a=c.getComputedStyle(d),m=d.getBoundingClientRect(),l=m.width-d.clientWidth;return r(o[0],{zIndex:"auto"==a.zIndex?2:a.zIndex+1,width:m.width+"px",height:m.height+"px",top:m.top+"px",left:m.left+"px"}),o[0].firstElementChild.style.width=l+"px",i[0].body.appendChild(o[0]),o.on("wheel",n),o.on("touchmove",n),i.on("keydown",e),function(){o.off("wheel"),o.off("touchmove"),o[0].parentNode.removeChild(o[0]),i.off("keydown",e)}}function o(){var e=d.getAttribute("style")||"",t=d.scrollTop;return r(d,{position:"fixed",width:"100%",overflowY:"scroll",top:-t+"px"}),function(){d.setAttribute("style",e),d.scrollTop=t}}function r(e,t){for(var n in t)e.style[n]=t[n]}function a(e){return e instanceof t.element&&(e=e[0]),e.scrollHeight>e.offsetHeight}e=e instanceof t.element?e[0]:e;for(var d,m=e;m=this.getClosest(m,"MD-CONTENT",!0);)a(m)&&(d=t.element(m)[0]);return d||(d=i[0].body,a(d))?"BODY"==d.nodeName?o():n():t.noop},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');i[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function r(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",r))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},transitionEndPromise:function(e,t){function n(t){t&&t.target!==e[0]||(e.off(m.CSS.TRANSITIONEND,n),o.resolve())}t=t||{};var o=d.defer();return e.on(m.CSS.TRANSITIONEND,n),t.timeout&&a(n,t.timeout),o.promise},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,r){var i;return function(){var d=o,c=Array.prototype.slice.call(arguments);a.cancel(i),i=a(function(){i=n,e.apply(d,c)},t||10,r)}},throttle:function(e,t){var n;return function(){var o=this,r=arguments,i=s.now();(!n||i-n>t)&&(e.apply(o,r),n=i)}},time:function(e){var t=s.now();return e(),s.now()-t},nextUid:function(){for(var e,t=o.length;t;){if(t--,e=o[t].charCodeAt(0),57==e)return o[t]="A",o.join("");if(90!=e)return o[t]=String.fromCharCode(e+1),o.join("");o[t]="0"}return o.unshift("0"),o.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(e instanceof t.element&&(e=e[0]),n=n.toUpperCase(),o&&(e=e.parentNode),!e)return null;do if(e.nodeName===n)return e;while(e=e.parentNode);return null},extractElementByName:function(e,n){for(var o=0,r=e.length;r>o;o++)if(e[o].nodeName.toLowerCase()===n)return t.element(e[o]);return e},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(r,i){if(r.optional&&t.isUndefined(e[i])){var a=n.hasOwnProperty(n.$normalize(r.attrName));e[i]=t.isDefined(o[i])?o[i]:a}})}}}]),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,n,o){function r(e,o,r){var i=e[0]||e;!i||i.hasAttribute(o)&&0!==i.getAttribute(o).length||c(i,o)||(r=t.isString(r)?r.trim():"",r.length?e.attr(o,r):n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',i))}function i(t,n,o){e(function(){r(t,n,o())})}function a(e,t){i(e,t,function(){return d(e)})}function d(e){return e.text().trim()}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var r=e.hasChildNodes(),i=!1;if(r)for(var a=e.childNodes,d=0;d<a.length;d++){var c=a[d];1===c.nodeType&&c.hasAttribute(t)&&(n(c)||(i=!0))}return i}return{expect:r,expectAsync:i,expectWithText:a}}t.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),function(){function e(e,n,o,r,i,a){this.compile=function(d){var c=d.templateUrl,m=d.template||"",l=d.controller,s=d.controllerAs,u=d.resolve||{},f=d.locals||{},p=d.transformTemplate||t.identity,h=d.bindToController;return t.forEach(u,function(e,n){u[n]=t.isString(e)?o.get(e):o.invoke(e)}),t.extend(u,f),u.$template=c?n.get(c,{cache:a}).then(function(e){return e.data}):e.when(m),e.all(u).then(function(e){var n=p(e.$template),o=d.element||t.element("<div>").html(n.trim()).contents(),a=r(o);return{locals:e,element:o,link:function(n){if(e.$scope=n,l){var r=i(l,e,!0);h&&t.extend(r.instance,e);var d=r();o.data("$ngControllerController",d),o.children().data("$ngControllerController",d),s&&(n[s]=d)}return a(n)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){function n(){}function o(n,o,r){function i(e,t,n){var o=f[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(f).join(", "));return o.registerElement(e,n)}function a(e,o){var r=new n(e);return t.extend(r,o),f[e]=r,h}var c=navigator.userAgent||navigator.vendor||e.opera,l=c.match(/ipad|iphone|ipod/i),s=c.match(/android/i),u="undefined"!=typeof e.jQuery&&t.element===e.jQuery,h={handler:a,register:i,isHijackingClicks:(l||s)&&!u&&!p};return h.isHijackingClicks&&h.handler("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click")}}),h.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){r.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=r(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),m(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(m(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(m(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}})}function r(e){this.name=e,this.state={}}function i(){function n(e,n,o){o=o||s;var r=new t.element.Event(n);r.$material=!0,r.pointer=o,r.srcEvent=e,t.extend(r,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(r)}function o(t,n,o){o=o||s;var r;"click"===n?(r=document.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,!0,!0,{})),r.$material=!0,r.pointer=o,r.srcEvent=t,o.target.dispatchEvent(r)}var i="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return r.prototype={options:{},dispatchEvent:i?n:o,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),r=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,r),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},r}function a(e,n){function o(e,t){var o;for(var r in f)o=f[r],o instanceof n&&("start"===e&&o.cancel(),o[e](t,s))}function r(e){if(!s){var t=+Date.now();u&&!c(e,u)&&t-u.endTime<1500||(s=d(e),o("start",e))}}function i(e){s&&c(e,s)&&(m(e,s),o("move",e))}function a(e){s&&c(e,s)&&(m(e,s),s.endTime=+Date.now(),o("end",e),u=s,s=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!h&&e.isHijackingClicks&&(document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||(e.preventDefault(),e.stopPropagation())},!0),h=!0);var l="mousedown touchstart pointerdown",p="mousemove touchmove pointermove",b="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(l,r).on(p,i).on(b,a).on("$$mdGestureReset",function(){u=s=null})}function d(e){var t=l(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function c(e,t){return e&&t&&e.type.charAt(0)===t.type}function m(e,t){var n=l(e),o=t.x=n.pageX,r=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=r-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function l(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var s,u,f={},p=!1,h=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",i).run(a),n.prototype={skipClickHijack:function(){return p=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return c.optionsFactory=e.options,c.methods=(e.methods||[]).concat(a),m}function o(e,t){return d[e]=t,m}function r(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return c.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},m}function i(n,o,r){function i(e){return e&&e._options&&(e=e._options),s.show(t.extend({},l,e))}function a(t,n){var o={};return o[e]=u,r.invoke(t||function(){return n},{},o)}var m,l,s=n(),u={hide:s.hide,cancel:s.cancel,show:i};return m=c.methods||[],l=a(c.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(c.presets,function(e,n){function o(e){this._options=t.extend({},r,e)}var r=a(e.optionsFactory,{}),i=(e.methods||[]).concat(m);if(t.extend(r,{$type:n}),t.forEach(i,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},c={presets:{}},m={setDefaults:n,addPreset:r,addMethod:o,$get:i};return m.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),i.$inject=["$$interimElement","$animate","$injector"],m}function o(e,o,r,i,a,d,c,m,l){function s(e){return e&&t.isString(e)?e.replace(/\{\{/g,u).replace(/}}/g,f):e}var u=c.startSymbol(),f=c.endSymbol(),p="{{"===u&&"}}"===f,h=p?t.identity:s;return function(){function c(e){if(b.length)return p.cancel().then(function(){return c(e)});var t=new f(e);return b.push(t),t.show().then(function(){return t.deferred.promise})}function s(e){var t=b.shift();return t&&t.remove().then(function(){t.deferred.resolve(e)})}function u(e){var t=b.shift();return o.when(t&&t.remove().then(function(){t.deferred.reject(e)}))}function f(c){var s,u,f,b,g;return c=c||{},c=t.extend({preserveScope:!1,scope:c.scope||r.$new(c.isolateScope),onShow:function(e,t,n){return d.enter(t,n.parent)},onRemove:function(e,t,n){return t&&d.leave(t)||o.when()}},c),c.template&&(c.template=h(c.template)),s={options:c,deferred:o.defer(),show:function(){var n;return n=c.skipCompile?o(function(e){e({locals:{},link:function(){return c.element}})}):m.compile(c),b=n.then(function(n){function r(){c.hideDelay&&(u=i(p.cancel,c.hideDelay))}if(t.extend(n.locals,s.options),f=n.link(c.scope),t.isFunction(c.parent)?c.parent=c.parent(c.scope,f,c):t.isString(c.parent)&&(c.parent=t.element(e[0].querySelector(c.parent))),!(c.parent||{}).length){var d;a[0]&&a[0].querySelector&&(d=a[0].querySelector(":not(svg) > body")),d||(d=a[0]),"#comment"==d.nodeName&&(d=e[0].body),c.parent=t.element(d)}c.themable&&l(f);var m=c.onShow(c.scope,f,c);return o.when(m).then(function(){(c.onComplete||t.noop)(c.scope,f,c),r()})},function(e){b=!0,s.deferred.reject(e)})},cancelTimeout:function(){u&&(i.cancel(u),u=n)},remove:function(){return s.cancelTimeout(),g=o.when(b).then(function(){var e=f?c.onRemove(c.scope,f,c):!0;return o.when(e).then(function(){c.preserveScope||c.scope.$destroy(),g=!0})})}}}var p,b=[];return p={show:c,hide:s,cancel:u}}}return e.$get=o,o.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){function e(e,n){function o(e){return e&&""!==e}var r,i=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return i},get:function(e){if(!o(e))return null;var t,n,r;for(t=0,n=i.length;n>t;t++)if(r=i[t],r.$$mdHandle===e)return r;return null},register:function(e,n){function o(){var t=i.indexOf(e);-1!==t&&i.splice(t,1)}function r(){var t=a[n];t&&(t.resolve(e),delete a[n])}return n?(e.$$mdHandle=n,i.push(e),r(),o):t.noop},when:function(e){if(o(e)){var t=n.defer(),i=r.get(e);return i?t.resolve(i):a[e]=t,t.promise}return n.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(e){function n(n,r,i){var a=o(r);return e.attach(n,r,t.extend(a,i))}function o(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:n}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},r))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,r){r.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(e,n){function o(o,r,i){function a(){var e=r.data("$mdRippleContainer");return e?e:(e=t.element('<div class="md-ripple-container">'),r.append(e),r.data("$mdRippleContainer",e),e)}function d(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,o=t.substr(0,n),r=t.substr(n,n),i=t.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),"rgba("+parseInt(o,16)+","+parseInt(r,16)+","+parseInt(i,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function c(e,t){g.splice(g.indexOf(e),1),0===g.length&&a().css({backgroundColor:""}),n(function(){e.remove()},t,!1)}function m(e){var t=g.indexOf(e),n=E[t]||{},o=g.length>1?!1:M,r=g.length>1?!1:$;o||n.animating||r?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),i.outline&&e.css({width:p+"px",height:p+"px",marginLeft:-1*p+"px",marginTop:-1*p+"px"}),c(e,i.outline?450:650))}function l(o,c){function l(e){var n=t.element('<div class="md-ripple" data-counter="'+b++ +'">');return g.unshift(n),E.unshift({animating:!0}),f.append(n),e&&n.css(e),n}function s(e,t){var n,o,r,a=f.prop("offsetWidth"),d=f.prop("offsetHeight");return i.isMenuItem?o=Math.sqrt(Math.pow(a,2)+Math.pow(d,2)):i.outline?(r=A.getBoundingClientRect(),e-=r.left,t-=r.top,a=Math.max(e,a-e),d=Math.max(t,d-t),o=2*Math.sqrt(Math.pow(a,2)+Math.pow(d,2))):(n=i.fullRipple?1.1:.8,o=Math.sqrt(Math.pow(a,2)+Math.pow(d,2))*n,i.fitRipple&&(o=Math.min(d,a,o))),o}function u(e,t,n){function o(e){return e.replace("rgba","rgb").replace(/,[^\),]+\)/,")")}var r=A.getBoundingClientRect(),a={backgroundColor:o(C),borderColor:o(C),width:e+"px",height:e+"px"};return i.outline?(a.width=0,a.height=0):a.marginLeft=a.marginTop=e*-.5+"px",i.center?a.left=a.top="50%":(a.left=Math.round((t-r.left)/f.prop("offsetWidth")*100)+"%",a.top=Math.round((n-r.top)/f.prop("offsetHeight")*100)+"%"),a}C=d(r.attr("md-ink-ripple"))||d(e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");var f=a(),h=s(o,c),v=u(h,o,c),M=l(v),$=g.indexOf(M),T=E[$]||{};return p=h,T.animating=!0,n(function(){i.dimBackground&&f.css({backgroundColor:C}),M.addClass("md-ripple-placed md-ripple-scaled"),M.css(i.outline?{borderWidth:.5*h+"px",marginLeft:h*-.5+"px",marginTop:h*-.5+"px"}:{left:"50%",top:"50%"}),m(M),n(function(){T.animating=!1,m(M)},i.outline?450:225,!1)},0,!1),M}function s(e){f()&&(l(e.pointer.x,e.pointer.y),$=!0)}function u(){$=!1;var e=g[g.length-1];n(function(){m(e)},0,!1)}function f(){function e(e){return e&&e.hasAttribute&&e.hasAttribute("disabled")}var t=A.parentNode,n=t&&t.parentNode,o=n&&n.parentNode;return!(e(A)||e(t)||e(n)||e(o))}if(r.controller("mdNoInk"))return t.noop;i=t.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,fullRipple:!0,isMenuItem:!1,fitRipple:!1},i);var p,h=r.controller("mdInkRipple")||{},b=0,g=[],E=[],v=r.attr("md-highlight"),M=!1,$=!1,A=r[0],T=r.attr("md-ripple-size"),C=d(r.attr("md-ink-ripple"))||d(i.colorElement.length&&e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");switch(T){case"full":i.fullRipple=!0;break;case"partial":i.fullRipple=!1}return i.mousedown&&r.on("$md.pressdown",s).on("$md.pressup",u),h.createRipple=l,v&&o.$watch(v,function(e){M=e,M&&!g.length&&n(function(){l(0,0)},0,!1),t.forEach(g,m)}),function(){r.off("$md.pressdown",s).off("$md.pressup",u),a().remove()}}return{attach:o}}function o(){return function(){return{controller:t.noop}}}t.module("material.core").factory("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",o()).directive("mdNoBar",o()).directive("mdNoStretch",o()),e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],n.$inject=["$window","$timeout"]}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900 A700",contrastStrongLightColors:"500 600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700 800"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",
600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){function e(e){function o(e,t){return t=t||{},l[e]=a(e,t),g}function r(e,n){return a(e,t.extend({},l[e]||{},n))}function a(e,t){var n=C.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function d(e,n){if(s[e])return s[e];n=n||"default";var o="string"==typeof n?s[n]:n,r=new c(e);return o&&t.forEach(o.colors,function(e,n){r.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),s[e]=r,r}function c(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?p:f,o.foregroundShadow=o.isDark?h:b;var n=o.isDark?T:A,r=o.isDark?A:T;return t.forEach(n,function(e,t){var n=o.colors[t],i=r[t];if(n)for(var a in n.hues)n.hues[a]===i[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),M.forEach(function(e){var n=(o.isDark?T:A)[e];o[e+"Palette"]=function(r,i){var a=o.colors[e]={name:r,hues:t.extend({},n,i)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",r).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==C.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",r).replace("%5",C.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function u(e,o){function r(e){return e===n||""===e?!0:i.THEMES[e]!==n}function i(t,o){o===n&&(o=t,t=n),t===n&&(t=e),i.inherit(o,o)}return i.inherit=function(n,i){function a(e){r(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e)}var d=i.controller("mdTheme"),c=n.attr("md-theme-watch");if((v||t.isDefined(c))&&"false"!=c){var m=e.$watch(function(){return d&&d.$mdTheme||E},a);n.on("$destroy",m)}else{var l=d&&d.$mdTheme||E;a(l)}},i.THEMES=t.extend({},s),i.defaultTheme=function(){return E},i.registered=r,i}l={},s={};var g,E="default",v=!1;return t.extend(l,e),u.$inject=["$rootScope","$log"],g={definePalette:o,extendPalette:r,theme:d,setDefaultTheme:function(e){E=e},alwaysWatchTheme:function(e){v=e},$get:u,_LIGHT_DEFAULT_HUES:A,_DARK_DEFAULT_HUES:T,_PALETTES:l,_THEMES:s,_parseRules:i,_rgba:m}}function o(e,t,n){return{priority:100,link:{pre:function(o,r,i){var a={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),a.$mdTheme=t}};r.data("$mdThemeController",a),a.$setTheme(t(i.mdTheme)(o)),i.$observe("mdTheme",a.$setTheme)}}}}function r(e){return e}function i(e,n,o){d(e,n),o=o.replace(/THEME_NAME/g,e.name);var r=[],i=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),c=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,u=l[i.name];return o=o.replace(s,function(t,n,o,r){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),m((l[e.colors[n].name][o]||"").value,r))}),t.forEach(i.hues,function(t,n){var i=o.replace(c,function(e,n,o,r,i){return m(u[t]["color"===r?"value":"contrast"],i)});"default"!==n&&(i=i.replace(a,".md-"+e.name+"-theme.md-"+n)),r.push(i)}),r}function a(e){function n(e){var n=e.contrastDefaultColor,o=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],i=e.contrastDarkColors||[];"string"==typeof o&&(o=o.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof i&&(i=i.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(a,d){function m(){return"light"===n?i.indexOf(d)>-1?g:r.indexOf(d)>-1?v:E:o.indexOf(d)>-1?r.indexOf(d)>-1?v:E:g}if(!t.isObject(a)){var l=c(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:m()}}})}var o=document.getElementsByTagName("head")[0],r=o?o.firstElementChild:null,a=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(r&&0!==a.length){t.forEach(l,n);var d={},m=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),f=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){d[e]=""}),m.forEach(function(e){for(var t,n=(e.match(f),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return d[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return d[t]+=e;return d[$]+=e}),t.forEach(s,function(e){u[e.name]||(M.forEach(function(t){for(var n=i(e,t,d[t]);n.length;){var a=document.createElement("style");a.setAttribute("type","text/css"),a.appendChild(document.createTextNode(n.shift())),o.insertBefore(a,r)}}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),u[e.name]=!0)})}}function d(e,t){if(!l[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(l).join(", ")))}function c(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),r=e.substr(n,n),i=e.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),[parseInt(o,16),parseInt(r,16),parseInt(i,16)]}}function m(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",r).provider("$mdTheming",e).run(a);var l,s,u={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},p={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},h="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",b="",g=c("rgba(0,0,0,0.87)"),E=c("rgba(255,255,255,0.87"),v=c("rgb(255,255,255)"),M=["primary","accent","warn","background"],$="primary",A={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},T={background:{"default":"800","hue-1":"300","hue-2":"600","hue-3":"900"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};A[e]||(A[e]=t),T[e]||(T[e]=t)});var C=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],r.$inject=["$mdTheming"],a.$inject=["$injector"]}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon"])}(),function(){function e(e){return e}t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),function(){function e(){return{restrict:"E"}}function n(e){function n(e,n,i,a,d,c,m,l,s){function u(o,r,s){r=i.extractElementByName(r,"md-bottom-sheet"),h=d('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(o),h.on("click",function(){a(m.cancel)}),c.inherit(h,s.parent),e.enter(h,s.parent,null);var u=new p(r,s.parent);return s.bottomSheet=u,s.targetEvent&&t.element(s.targetEvent.target).blur(),c.inherit(u.element,s.parent),s.disableParentScroll&&(s.lastOverflow=s.parent.css("overflow"),s.parent.css("overflow","hidden")),e.enter(u.element,s.parent).then(function(){var e=t.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&a(m.cancel)},l.on("keyup",s.rootElementKeyupCallback))})}function f(n,o,r){var i=r.bottomSheet;return e.leave(h),e.leave(i.element).then(function(){r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),i.cleanup(),r.targetEvent&&t.element(r.targetEvent.target).focus()})}function p(e,t){function i(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function d(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function c(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var r=e.prop("offsetHeight")-t.pointer.distanceY,i=Math.min(r/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,i+"ms"),a(m.cancel)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var l=s.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",i).on("$md.drag",d).on("$md.dragend",c),{element:e,cleanup:function(){l(),t.off("$md.dragstart",i).off("$md.drag",d).off("$md.dragend",c)}}}var h;return{themable:!0,targetEvent:null,onShow:u,onRemove:f,escapeToClose:!0,disableParentScroll:!0}}var o=.5,r=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$timeout","$compile","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","targetEvent"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r){function i(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){return i(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function d(a,d,c){var m=d[0];n(d),e.attach(a,d);var l=m.textContent.trim();l||o.expect(d,"aria-label"),i(c)&&t.isDefined(c.ngDisabled)&&a.$watch(c.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){c.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,r(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(){d.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,r,i,a,d){function c(n,c){return c.type="checkbox",c.tabindex=c.tabindex||"0",n.attr("role",c.type),function(n,c,l,s){function u(e,t,o){l[e]&&n.$watch(l[e],function(e){o[e]&&c.attr(t,o[e])})}function f(e){var t=e.which||e.keyCode;(t===r.KEY_CODE.SPACE||t===r.KEY_CODE.ENTER)&&(e.preventDefault(),c.hasClass("md-focused")||c.addClass("md-focused"),p(e))}function p(e){c[0].hasAttribute("disabled")||n.$apply(function(){var t=l.ngChecked?l.checked:!s.$viewValue;s.$setViewValue(t,e&&e.type),s.$render()})}function h(){s.$viewValue?c.addClass(m):c.removeClass(m)}s=s||a.fakeNgModel(),i(c),l.ngChecked&&n.$watch(n.$eval.bind(n,l.ngChecked),s.$setViewValue.bind(s)),u("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),o.expectWithText(c,"aria-label"),e.link.pre(n,{on:t.noop,0:{}},l,[s]),n.mouseActive=!1,c.on("click",p).on("keypress",f).on("mousedown",function(){n.mouseActive=!0,d(function(){n.mouseActive=!1},100)}).on("focus",function(){n.mouseActive===!1&&c.addClass("md-focused")}).on("blur",function(){c.removeClass("md-focused")}),s.$render=h}}e=e[0];var m="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:c}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o,r){o[0];e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){function e(e,t){return{restrict:"E",link:function(n,o,r){t(o),e(function(){var e=o[0].querySelector("md-dialog-content");e&&e.scrollHeight>e.clientHeight&&o.addClass("md-content-overflow")})}}}function n(e){function n(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">','<md-dialog-content role="document" tabIndex="-1">','<h2 class="md-title">{{ dialog.title }}</h2>',"<p>{{ dialog.content }}</p>","</md-dialog-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()" class="md-primary">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function o(e,n,o,r,i,a,d,c,m,l,s){function u(e){var t=document.querySelector("md-dialog");t&&!t.contains(e.target)&&(e.stopImmediatePropagation(),t.focus())}function f(e,l,s){function f(){var e=l[0].querySelector(".dialog-close");if(!e){var n=l[0].querySelectorAll(".md-actions button");e=n[n.length-1]}return t.element(e)}t.element(n[0].body).addClass("md-dialog-is-showing"),l=o.extractElementByName(l,"md-dialog"),s.parent=t.element(s.parent),s.popInTarget=t.element((s.targetEvent||{}).target);var p=f();if(s.hasBackdrop){var b=s.parent[0]==n[0].body&&n[0].documentElement&&n[0].documentElement.scrollTop?t.element(n[0].documentElement):s.parent,v=b.prop("scrollTop");s.backdrop=t.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),s.backdrop.css("top",v+"px"),i.inherit(s.backdrop,s.parent),m.enter(s.backdrop,s.parent),l.css("top",v+"px")}var M="dialog",$=p;return"alert"===s.$type&&(M="alertdialog",$=l.find("md-dialog-content")),h(l.find("md-dialog"),M,s),document.addEventListener("focus",u,!0),s.disableParentScroll&&(s.lastOverflow=s.parent.css("overflow"),s.parent.css("overflow","hidden")),E(l,s.parent,s.popInTarget&&s.popInTarget.length&&s.popInTarget).then(function(){g(l,!0),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===r.KEY_CODE.ESCAPE&&d(a.cancel)},c.on("keyup",s.rootElementKeyupCallback)),s.clickOutsideToClose&&(s.dialogClickOutsideCallback=function(e){e.target===l[0]&&d(a.cancel)},l.on("click",s.dialogClickOutsideCallback)),s.focusOnOpen&&$.focus()})}function p(e,o,r){return t.element(n[0].body).removeClass("md-dialog-is-showing"),r.backdrop&&m.leave(r.backdrop),r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),r.escapeToClose&&c.off("keyup",r.rootElementKeyupCallback),r.clickOutsideToClose&&o.off("click",r.dialogClickOutsideCallback),g(o,!1),document.removeEventListener("focus",u,!0),v(o,r.parent,r.popInTarget&&r.popInTarget.length&&r.popInTarget).then(function(){o.remove(),r.popInTarget&&r.popInTarget.focus()})}function h(t,n,r){t.attr({role:n,tabIndex:"-1"});var i=t.find("md-dialog-content");0===i.length&&(i=t);var a=t.attr("id")||"dialog_"+o.nextUid();i.attr("id",a),t.attr("aria-describedby",a),r.ariaLabel?e.expect(t,"aria-label",r.ariaLabel):e.expectAsync(t,"aria-label",function(){var e=i.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function b(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}function g(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var r=e.parentNode.children,i=0;i<r.length;i++)e===r[i]||b(r[i],["SCRIPT","STYLE"])||r[i].setAttribute(o,t);n(e=e.parentNode)}}var o="aria-hidden";e=e[0],n(e)}function E(e,t,n){var i=e.find("md-dialog");return t.append(e),M(i,n),l(function(){i.addClass("transition-in").css(r.CSS.TRANSFORM,"")}),o.transitionEndPromise(i)}function v(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),M(r,n),o.transitionEndPromise(r)}function M(e,t){if(t){var n=t[0].getBoundingClientRect(),o=e[0].getBoundingClientRect(),i=Math.min(.5,n.width/o.width),a=Math.min(.5,n.height/o.height);e.css(r.CSS.TRANSFORM,"translate3d("+(-o.left+n.left+n.width/2-o.width/2)+"px,"+(-o.top+n.top+n.height/2-o.height/2)+"px,0) scale("+i+","+a+")")}}return{hasBackdrop:!0,isolateScope:!0,onShow:f,onRemove:p,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,focusOnOpen:!0,disableParentScroll:!0,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return n.$inject=["$mdDialog","$mdTheming"],o.$inject=["$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$mdDialog","$timeout","$rootElement","$animate","$$rAF","$q"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","parent"],options:o}).addPreset("alert",{methods:["title","content","ariaLabel","ok","theme"],options:n}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel","theme"],options:n})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",n),e.$inject=["$$rAF","$mdTheming"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){function e(e,o,r,i){function a(n,a,d,c){function m(){for(var e in o.MEDIA)i(e),i.getQuery(o.MEDIA[e]).addListener(T);return i.watchResponsiveAttributes(["md-cols","md-row-height"],d,s)}function l(){c.layoutDelegate=t.noop,C();for(var e in o.MEDIA)i.getQuery(o.MEDIA[e]).removeListener(T)}function s(e){null==e?c.invalidateLayout():i(e)&&c.invalidateLayout()}function u(e){var o=b(),i={tileSpans:g(o),colCount:E(),rowMode:$(),rowHeight:M(),gutter:v()};if(e||!t.equals(i,y)){var d=r(i.colCount,i.tileSpans,o).map(function(e,n){return{grid:{element:a,style:h(i.colCount,n,i.gutter,i.rowMode,i.rowHeight)},tiles:e.map(function(e,n){return{element:t.element(o[n]),style:p(e.position,e.spans,i.colCount,i.rowCount,i.gutter,i.rowMode,i.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),y=i}}function f(e){return w+e+k}function p(e,t,n,o,r,i,a){var d=1/n*100,c=(n-1)/n,m=N({share:d,gutterShare:c,gutter:r}),l={left:x({unit:m,offset:e.col,gutter:r}),width:_({unit:m,span:t.col,gutter:r}),paddingTop:"",marginTop:"",top:"",height:""};switch(i){case"fixed":l.top=x({unit:a,offset:e.row,gutter:r}),l.height=_({unit:a,span:t.row,gutter:r});break;case"ratio":var s=d/a,u=N({share:s,gutterShare:c,gutter:r});l.paddingTop=_({unit:u,span:t.row,gutter:r}),l.marginTop=x({unit:u,offset:e.row,gutter:r});break;case"fit":var f=(o-1)/o,s=1/o*100,u=N({share:s,gutterShare:f,gutter:r});l.top=x({unit:u,offset:e.row,gutter:r}),l.height=_({unit:u,span:t.row,gutter:r})}return l}function h(e,t,n,o,r){var i={height:"",paddingBottom:""};switch(o){case"fixed":i.height=_({unit:r,span:t,gutter:n});break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,c=d*(1/r),m=N({share:c,gutterShare:a,gutter:n});i.paddingBottom=_({unit:m,span:t,gutter:n});break;case"fit":}return i}function b(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName})}function g(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(i.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(i.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function E(){var e=parseInt(i.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function v(){return A(i.getResponsiveAttribute(d,"md-gutter")||1)}function M(){var e=i.getResponsiveAttribute(d,"md-row-height");switch($()){case"fixed":return A(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function $(){var e=i.getResponsiveAttribute(d,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function A(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),c.layoutDelegate=u;var T=t.bind(c,c.invalidateLayout),C=m();n.$on("$destroy",l);var y,w=e.startSymbol(),k=e.endSymbol(),N=e(f("share")+"% - ("+f("gutter")+" * "+f("gutterShare")+")"),x=e("calc(("+f("unit")+" + "+f("gutter")+") * "+f("offset")+")"),_=e("calc(("+f("unit")+") * "+f("span")+" + ("+f("span")+" - 1) * "+f("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,c,m,l;return c=e.time(function(){a=r(t,n)}),o={layoutInfo:function(){return a},map:function(t){return m=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||i;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:c,mapTime:m,reflowTime:l,totalTime:c+m+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function r(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=m.indexOf(0,d),-1!==a&&-1!==(l=i(a+1))?d=l+1:(a=l=0,o()));return r(a,t.col,t.row),d=a+t.col,{col:a,row:c}}function o(){d=0,c++,r(0,e,-1)}function r(e,t,n){for(var o=e;e+t>o;o++)m[o]=Math.max(m[o]+n,0)}function i(e){var t;for(t=e;t<m.length;t++)if(0!==m[t])return t;return t===m.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,c=0,m=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:c+Math.max.apply(Math,m)}}var i=o;return n.animateWith=function(e){i=t.isFunction(e)?e:o},n}function r(e){function n(n,o,r,i){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],r,t.bind(i,i.invalidateLayout));i.invalidateTiles(),n.$on("$destroy",function(){a(),i.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&i.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function i(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",r).directive("mdGridTileFooter",i).directive("mdGridTileHeader",i).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$timeout"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],r.$inject=["$mdMedia"]}(),function(){function e(e,t,n,o){function r(e,t){var n=function(e){return t[e]&&t[e].length},r=function(e){return n(e)?t[e]:""},i=n("mdFontIcon")?'<span class="md-font {{classNames}}" ng-class="fontIcon"></span>':n("mdFontLibrary")?"<span ng-transclude></span>":"",a=(r("mdFontLibrary")+" "+r("class")).trim();return e.attr("class",a),o(i)({classNames:a})}function i(o,r,i){function a(){var e=r.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}t(r);var d=i.alt||o.fontIcon||o.svgIcon,c=i.$normalize(i.$attr.mdSvgIcon||i.$attr.mdSvgSrc||"");i.mdFontLibrary||(""==i.alt||a()?n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",d),n.expect(r,"role","img"))),c&&i.$observe(c,function(t){r.empty(),t&&e(t).then(function(e){r.append(e)})})}return{scope:{fontLib:"@mdFontLibrary",fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",transclude:!0,template:r,link:i}}t.module("material.components.icon",["material.core"]).directive("mdIcon",e),e.$inject=["$mdIcon","$mdTheming","$mdAria","$interpolate"]}(),function(){function e(){}function n(e,t){this.url=e,this.iconSize=t||r.defaultIconSize}function o(e,n,o,r,i){function a(t){return function(n){return b[t]=u(n)?n:new f(n,e[t]),b[t].clone()}}function d(t){var n=e[t];return n?m(n.url).then(function(e){return new f(e,n)}):o.reject(t)}function c(t){function n(e){var n=t.slice(t.lastIndexOf(":")+1),r=e.querySelector("#"+n);return r?new f(r,i):o.reject(t)}var r=t.substring(0,t.lastIndexOf(":"))||"$default",i=e[r];return i?m(i.url).then(n):o.reject(t)}function m(e){return n.get(e,{cache:i}).then(function(e){return t.element("<div>").append(e.data).find("svg")[0]})}function l(e){var n;return t.isString(e)&&(n="icon "+e+" not found",r.warn(n)),o.reject(n||e)}function s(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;return r.warn(n),o.reject(n)}function u(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function f(e,n){"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function p(){var n=this.config?this.config.iconSize:e.defaultIconSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+n+" "+n},function(e,t){this.element.setAttribute(t,e)},this),t.forEach({"pointer-events":"none",display:"block"},function(e,t){this.element.style[t]=e},this)}function h(){return this.element.cloneNode(!0)}var b={},g=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return f.prototype={clone:h,prepare:p},function(e){return e=e||"",b[e]?o.when(b[e].clone()):g.test(e)?m(e).then(a(e)):(-1==e.indexOf(":")&&(e="$default:"+e),d(e)["catch"](c)["catch"](l)["catch"](s).then(a(e)))}}t.module("material.components.icon").provider("$mdIcon",e);var r={defaultIconSize:24};e.prototype={icon:function(e,t,o){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new n(t,o),this},iconSet:function(e,t,o){return r[e]=new n(t,o),this},defaultIconSet:function(e,t){var o="$default";return r[o]||(r[o]=new n(e,t)),r[o].iconSize=t||r.defaultIconSize,this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M 50 0 L 100 14 L 92 80 L 50 100 L 8 80 L 0 14 Z" fill="#b2b2b2"></path><path d="M 50 5 L 6 18 L 13.5 77 L 50 94 Z" fill="#E42939"></path><path d="M 50 5 L 94 18 L 86.5 77 L 50 94 Z" fill="#B72833"></path><path d="M 50 7 L 83 75 L 72 75 L 65 59 L 50 59 L 50 50 L 61 50 L 50 26 Z" fill="#b2b2b2"></path><path d="M 50 7 L 17 75 L 28 75 L 35 59 L 50 59 L 50 50 L 39 50 L 50 26 Z" fill="#fff"></path></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,n,i){return this.preloadIcons(i),new o(r,e,t,n,i)}]}}(),function(){function e(e,t){function n(t,n,o){e(n)}function o(e,n,o){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:o}}function n(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){o&&!n.mdNoFloat&&(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function o(e,n,o){function r(r,i,a,d){function c(e){return s.setHasValue(!u.$isEmpty(e)),e}function m(){s.setHasValue(i.val().length>0||(i[0].validity||{}).badInput)}function l(){function o(e){return l(),e}function a(){m.style.height="auto",m.scrollTop=0;var e=d();e&&(m.style.height=e+"px")}function d(){var e=m.scrollHeight-m.offsetHeight;return m.offsetHeight+(e>0?e:0)}function c(e){m.scrollTop=0;var t=m.scrollHeight-m.offsetHeight,n=m.offsetHeight+t;m.style.height=n+"px"}var m=i[0],l=e.debounce(a,1);u?(u.$formatters.push(o),u.$viewChangeListeners.push(o)):l(),i.on("keydown input",l),i.on("scroll",c),t.element(n).on("resize",l),r.$on("$destroy",function(){t.element(n).off("resize",l)})}var s=d[0],u=d[1]||e.fakeNgModel(),f=t.isDefined(a.readonly);if(s){if(s.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");s.input=i,s.label||o.expect(i,"aria-label",i.attr("placeholder")),i.addClass("md-input"),i.attr("id")||i.attr("id","input_"+e.nextUid()),"textarea"===i[0].tagName.toLowerCase()&&l();

var p=s.isErrorGetter||function(){return u.$invalid&&u.$touched};r.$watch(p,s.setInvalid),u.$parsers.push(c),u.$formatters.push(c),i.on("input",m),f||i.on("focus",function(e){s.setFocused(!0)}).on("blur",function(e){s.setFocused(!1),m()}),r.$on("$destroy",function(){s.setFocused(!1),s.setHasValue(!1),s.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:r}}function r(e){function n(n,o,r,i){function a(e){return l.text((o.val()||e||"").length+"/"+d),e}var d,c=i[0],m=i[1],l=t.element('<div class="md-char-counter">');r.$set("ngTrim","false"),m.element.append(l),c.$formatters.push(a),c.$viewChangeListeners.push(a),o.on("input keydown",function(){a()}),n.$watch(r.mdMaxlength,function(n){d=n,t.isNumber(n)&&n>0?(l.parent().length||e.enter(l,m.element,t.element(m.element[0].lastElementChild)),a()):e.leave(l)}),c.$validators["md-maxlength"]=function(e,n){return!t.isNumber(d)||0>d?!0:(e||o.val()||n||"").length<=d}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:n}}function i(e){function n(n,r,i,a){if(a&&-1==o.indexOf(r[0].nodeName)&&!t.isDefined(a.element.attr("md-no-float"))){var d=i.placeholder;if(r.removeAttr("placeholder"),0==a.element.find("label").length){var c='<label ng-click="delegateClick()">'+d+"</label>";a.element.addClass("md-icon-float"),a.element.prepend(c)}else e.warn("The placeholder='"+d+"' will be ignored since this md-input-container has a child label element.")}}var o=["MD-SELECT"];return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}t.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",n).directive("input",o).directive("textarea",o).directive("mdMaxlength",r).directive("placeholder",i),e.$inject=["$mdTheming","$parse"],o.$inject=["$mdUtil","$window","$mdAria"],r.$inject=["$animate"],i.$inject=["$log"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o){var r=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(i,a){function d(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=i.find(t)[0])&&!e.hasAttribute("aria-label")){var r=i.find("p")[0];if(!r)return;e.setAttribute("aria-label","Toggle "+r.textContent)}}function c(n){var o;if("div"==n)o=t.element('<div class="md-no-style md-list-item-inner">'),o.append(i.contents()),i.addClass("md-proxy-focus");else{o=t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>');var r=["ng-click","aria-label","ng-disabled"];t.forEach(r,function(e){i[0].hasAttribute(e)&&(o[0].setAttribute(e,i[0].getAttribute(e)),i[0].removeAttribute(e))}),o.children().eq(0).append(i.contents())}if(i[0].setAttribute("tabindex","-1"),i.append(o),f&&f.hasAttribute("ng-click")){e.expect(f,"aria-label");var d=t.element('<md-button class="md-secondary-container md-icon-button">');d.attr("ng-click",f.getAttribute("ng-click")),f.removeAttribute("ng-click"),f.setAttribute("tabindex","-1"),f.classList.remove("md-secondary"),d.append(f),f=d[0]}f&&(f.hasAttribute("ng-click")||a.ngClick&&m(f))&&(i.addClass("md-with-secondary"),i.append(f))}function m(e){return-1!=r.indexOf(e.nodeName.toLowerCase())}function l(e,i,a,d){function c(){var e=i.children();e.length&&!e[0].hasAttribute("ng-click")&&t.forEach(r,function(e){t.forEach(s.querySelectorAll(e),function(e){l.push(e)})})}function m(){(l.length||u)&&(i.addClass("md-clickable"),d.attachRipple(e,t.element(i[0].querySelector(".md-no-style"))))}var l=[],s=i[0].firstElementChild,u=s&&s.hasAttribute("ng-click");c(),m(),i.hasClass("md-proxy-focus")&&l.length&&t.forEach(l,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,o(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&i.addClass("md-focused"),n.on("blur",function t(){i.removeClass("md-focused"),n.off("blur",t)})})}),u||l.length||s.addEventListener("keypress",function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&(s.click(),e.preventDefault(),e.stopPropagation())}}),i.off("click"),i.off("keypress"),l.length&&s&&i.children().eq(0).on("click",function(e){s.contains(e.target)&&t.forEach(l,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})})}var s,u,f=i[0].querySelector(".md-secondary");if(i[0].setAttribute("role","listitem"),a.ngClick)c("button");else{for(var p,h=0;p=r[h];++h)if(u=i[0].querySelector(p)){s=!0;break}s?c("div"):i[0].querySelector("md-button")||i.addClass("md-no-proxy")}return d(),l}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var r=this;r.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){function e(e,t){function n(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(n,o,i){t(o);var a=o[0],d=i.mdDiameter||48,c=d/48;a.style[e.CSS.TRANSFORM]="scale("+c+")",i.$observe("value",function(e){var t=r(e);o.attr("aria-valuenow",t)})}function r(e){return Math.max(0,Math.min(e||0,100))}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:n}}t.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$mdConstant","$mdTheming"]}(),function(){function e(e,o,r){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,c){r(a);var m=a[0].querySelector(".md-bar1").style,l=a[0].querySelector(".md-bar2").style,s=t.element(a[0].querySelector(".md-container"));c.$observe("value",function(e){if("query"!=c.mdMode){var t=d(e);a.attr("aria-valuenow",t),l[o.CSS.TRANSFORM]=n[t]}}),c.$observe("mdBufferValue",function(e){m[o.CSS.TRANSFORM]=n[d(e)]}),e(function(){s.addClass("md-ready")})}function d(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var n=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),function(){function e(e,n,o,r){function i(i,a,d,c){function m(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var r=o.which||o.keyCode;switch(r){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),s.selectPrevious(),m();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),s.selectNext(),m();break;case n.KEY_CODE.ENTER:var i=t.element(e.getClosest(a[0],"form"));i.length>0&&i.triggerHandler("submit")}}o(a);var s=c[0],u=c[1]||e.fakeNgModel();s.init(u),i.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){i.mouseActive=!0,r(function(){i.mouseActive=!1},100)}).on("focus",function(){i.mouseActive===!1&&s.$element.addClass("md-focused")}).on("blur",function(){s.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return c(this.$element,1)},selectPrevious:function(){return c(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function c(n,o){var r=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(r.count()){var i=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=r[0>o?"previous":"next"](a,i)||r.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:i}}}function n(e,t,n){function o(o,i,a,d){function c(e){i[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function m(){var e=d.getViewValue()==a.value;e!==s&&(s=e,i.attr("aria-checked",e),e?(i.addClass(r),d.setActiveDescendant(i.attr("id"))):i.removeClass(r))}function l(n,o){function r(){return a.id||"radio_"+t.nextUid()}o.ariaId=r(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var s;n(i),l(i,o),d.add(m),a.$observe("value",m),i.on("click",c).on("$destroy",function(){d.remove(m)})}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function e(e,o,r,i,a,d,c){function m(a,m){var l=a.find("md-select-label").remove();if(l.length){if(!l[0].firstElementChild){var s=t.element("<span>");s.append(l.contents()),l.append(s)}}else l=t.element("<md-select-label><span></span></md-select-label>");if(l.append('<span class="md-select-icon" aria-hidden="true"></span>'),l.addClass("md-select-label"),l[0].hasAttribute("id")||l.attr("id","select_label_"+o.nextUid()),a.find("md-content").length||a.append(t.element("<md-content>").append(a.contents())),m.mdOnOpen&&a.find("md-content").prepend(t.element("<md-progress-circular>").attr("md-mode","indeterminate").attr("ng-hide","$$loadingAsyncDone").wrap("<div>").parent()),m.name){var u=t.element('<select class="md-visually-hidden">');u.attr({name:"."+m.name,"ng-model":m.ngModel,"aria-hidden":"true",tabindex:"-1"});var f=a.find("md-option");t.forEach(f,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),u.append(n)}),a.parent().append(u)}var p='<div class="md-select-menu-container"><md-select-menu '+(t.isDefined(m.multiple)?"multiple":"")+">"+a.html()+"</md-select-menu></div>";return a.empty().append(l),m.tabindex=m.tabindex||"0",function(a,m,l,s){function u(){var e=m.attr("placeholder");e||(e=m.find("md-select-label").text()),i.expect(m,"aria-label",e)}function f(){M&&(A=A||M.find("md-select-menu").controller("mdSelectMenu"),T.setLabelText(A.selectedLabels()))}function h(){M=t.element(p);var e=M.find("md-select-menu");e.data("$ngModelController",C),e.data("$mdSelectController",T),$=a.$new(),M=d(M)($),A=M.find("md-select-menu").controller("mdSelectMenu")}function b(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),g(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=A.optNodeForKeyboardSearch(e);if(!o)return;var r=t.element(o).controller("mdOption");A.isMultiple||A.deselect(Object.keys(A.selected)[0]),A.select(r.hashKey,r.value),A.refreshViewValue(),C.$render()}}function g(){a.$evalAsync(function(){E=!0,e.show({scope:$,preserveScope:!0,skipCompile:!0,element:M,target:m[0],hasBackdrop:!0,loadingAsync:l.mdOnOpen?a.$eval(l.mdOnOpen)||!0:!1}).then(function(e){E=!1})})}var E,v,M,$,A,T=s[0],C=s[1],y=s[2],w=m.find("md-select-label"),k=0!==w.text().length;if(h(),r(m),l.name&&y){var N=m.parent()[0].querySelector('select[name=".'+l.name+'"]');y.$removeControl(t.element(N).controller())}var x=C.$render;C.$render=function(){x(),f()},T.setLabelText=function(e){if(!k){T.setIsPlaceholder(!e),e=e||l.placeholder||"";var t=k?w:w.children().eq(0);t.text(e)}},T.setIsPlaceholder=function(e){e?w.addClass("md-placeholder"):w.removeClass("md-placeholder")},a.$$postDigest(function(){u(),f()});var _;l.$observe("ngMultiple",function(e){_&&_();var t=c(e);_=a.$watch(function(){return t(a)},function(e,t){(e!==n||t!==n)&&(e?m.attr("multiple","multiple"):m.removeAttr("multiple"),M&&(A.setMultiple(e),x=C.$render,C.$render=function(){x(),f()},A.refreshViewValue(),C.$render()))})}),l.$observe("disabled",function(e){"string"==typeof e&&(e=!0),(v===n||v!==e)&&(v=e,e?(m.attr({tabindex:-1,"aria-disabled":"true"}),m.off("click",g),m.off("keydown",b)):(m.attr({tabindex:l.tabindex,"aria-disabled":"false"}),m.on("click",g),m.on("keydown",b)))}),l.disabled||l.ngDisabled||(m.attr({tabindex:l.tabindex,"aria-disabled":"false"}),m.on("click",g),m.on("keydown",b));var H={role:"combobox","aria-expanded":"false"};m[0].hasAttribute("id")||(H.id="select_"+o.nextUid()),m.attr(H),a.$on("$destroy",function(){E?e.cancel().then(function(){M.remove()}):M.remove()})}}return{restrict:"E",require:["mdSelect","ngModel","?^form"],compile:m,controller:function(){}}}function o(e,o,r){function i(e,n,i,a){function d(){n.attr({id:"select_menu_"+o.nextUid(),role:"listbox","aria-multiselectable":l.isMultiple?"true":"false"})}function c(e){(13==e.keyCode||32==e.keyCode)&&m(e)}function m(n){var r=o.getClosest(n.target,"md-option"),i=r&&t.element(r).data("$mdOptionController");if(r&&i){var a=l.hashGetter(i.value),d=t.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?d?l.deselect(a):l.select(a,i.value):d||(l.deselect(Object.keys(l.selected)[0]),l.select(a,i.value)),l.refreshViewValue()})}}var l=a[0],s=a[1];r(n),n.on("click",m),n.on("keypress",c),s&&l.init(s),d()}function a(o,r,i){function a(){var e=l.ngModel.$modelValue||l.ngModel.$viewValue;if(t.isArray(e)){var n=Object.keys(l.selected),o=e.map(l.hashGetter),r=n.filter(function(e){return-1===o.indexOf(e)});r.forEach(l.deselect),o.forEach(function(t,n){l.select(t,e[n])})}}function c(){var e=l.ngModel.$viewValue||l.ngModel.$modelValue;Object.keys(l.selected).forEach(l.deselect),l.select(l.hashGetter(e),e)}var l=this;l.isMultiple=t.isDefined(r.multiple),l.selected={},l.options={},o.$watch(function(){return l.options},function(){l.ngModel.$render()},!0);var s;l.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var i=l.ngModel;l.isMultiple=e,s&&s(),l.isMultiple?(i.$validators["md-multiple"]=n,i.$render=a,o.$watchCollection(r.ngModel,function(e){n(e)&&a(e)})):(delete i.$validators["md-multiple"],i.$render=c)};var u,f,p,h="",b=300;l.optNodeForKeyboardSearch=function(e){u&&clearTimeout(u),u=setTimeout(function(){u=n,h="",p=n,f=n},b),h+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+h,"i");f||(f=i.find("md-option"),p=new Array(f.length),t.forEach(f,function(e,t){p[t]=e.textContent.trim()}));for(var r=0;r<p.length;++r)if(o.test(p[r]))return f[r]},l.init=function(n){if(l.ngModel=n,n.$options&&n.$options.trackBy){var r={},i=e(n.$options.trackBy);l.hashGetter=function(e,t){return r.$value=e,i(t||o,r)}}else l.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++m)):e};l.setMultiple(l.isMultiple)},l.selectedLabels=function(){var e=d(i[0].querySelectorAll("md-option[selected]"));return e.length?e.map(function(e){return e.textContent}).join(", "):""},l.select=function(e,t){var n=l.options[e];n&&n.setSelected(!0),l.selected[e]=t},l.deselect=function(e){var t=l.options[e];t&&t.setSelected(!1),delete l.selected[e]},l.addOption=function(e,n){if(t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');l.options[e]=n,t.isDefined(l.selected[e])&&(l.select(e,n.value),l.refreshViewValue())},l.removeOption=function(e){delete l.options[e]},l.refreshViewValue=function(){var e,t=[];for(var n in l.selected)t.push((e=l.options[n])?e.value:l.selected[n]);l.ngModel.$setViewValue(l.isMultiple?t:t[0])}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu","?ngModel"],controller:a,link:{pre:i}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),r}function r(o,r,i,a){function d(e,t){var n=l.hashGetter(t,o),r=l.hashGetter(e,o);m.hashKey=r,m.value=e,l.removeOption(n,m),l.addOption(r,m)}function c(){var e={role:"option","aria-selected":"false"};r[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),r.attr(e)}var m=a[0],l=a[1];t.isDefined(i.ngValue)?o.$watch(i.ngValue,d):t.isDefined(i.value)?d(i.value):o.$watch(function(){return r.text()},d),o.$$postDigest(function(){i.$observe("selected",function(e){t.isDefined(e)&&(e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(m.hashKey,m.value)):l.deselect(m.hashKey),l.refreshViewValue(),l.ngModel.$render())})}),e.attach(o,r),c(),o.$on("$destroy",function(){l.removeOption(m.hashKey,m)})}function i(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return i.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:i,compile:o}}function i(){function e(e,n){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),n.label&&o.text(n.label)}return{restrict:"E",compile:e}}function a(e){function o(e,o,a,m,l,s,u){function f(n,r,i){function c(){i.target.attr("aria-expanded","true")}function f(){function t(e){var t=d(p),n=t.indexOf(i.focusedNode);-1===n?n=0:"next"===e&&n<t.length-1?n++:"prev"===e&&n>0&&n--;var o=i.focusedNode=t[n];o&&o.focus()}function a(){t("next")}function c(){t("prev")}function l(){s.isMultiple||(i.restoreFocus=!0,n.$evalAsync(function(){e.hide(s.ngModel.$viewValue)}))}if(!i.isRemoved){var s=i.selectEl.controller("mdSelectMenu")||{};r.addClass("md-clickable"),i.backdrop&&i.backdrop.on("click",function(t){t.preventDefault(),t.stopPropagation(),i.restoreFocus=!1,n.$apply(e.cancel)}),i.selectEl.on("keydown",function(t){switch(t.keyCode){case o.KEY_CODE.SPACE:case o.KEY_CODE.ENTER:var r=m.getClosest(t.target,"md-option");r&&(i.selectEl.triggerHandler({type:"click",target:r}),t.preventDefault());break;case o.KEY_CODE.TAB:case o.KEY_CODE.ESCAPE:t.preventDefault(),i.restoreFocus=!0,n.$apply(e.cancel)}}),i.selectEl.on("keydown",function(e){switch(e.keyCode){case o.KEY_CODE.UP_ARROW:return c();case o.KEY_CODE.DOWN_ARROW:return a();default:if(e.keyCode>=31&&e.keyCode<=90){var t=i.selectEl.controller("mdSelectMenu").optNodeForKeyboardSearch(e);t&&t.focus()}}}),i.selectEl.on("click",l),i.selectEl.on("keydown",function(e){(32==e.keyCode||13==e.keyCode)&&l()})}}if(!i.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "'+i.target+'"!');t.extend(i,{isRemoved:!1,target:t.element(i.target),parent:t.element(i.parent),selectEl:r.find("md-select-menu"),contentEl:r.find("md-content"),backdrop:i.hasBackdrop&&t.element('<md-backdrop class="md-select-backdrop md-click-catcher">')}),i.resizeFn=function(){a(function(){a(function(){h(n,r,i)})})},t.element(u).on("resize",i.resizeFn),t.element(u).on("orientationchange",i.resizeFn),c(),r.removeClass("md-leave");var p=i.selectEl[0].getElementsByTagName("md-option");return i.loadingAsync&&i.loadingAsync.then?i.loadingAsync.then(function(){n.$$loadingAsyncDone=!0,a(function(){a(function(){i.isRemoved||h(n,r,i)})})}):i.loadingAsync&&(n.$$loadingAsyncDone=!0),i.disableParentScroll&&!m.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=m.disableScrollAround(i.target):i.disableParentScroll=!1,s(f,75,!1),i.backdrop&&(l.inherit(i.backdrop,i.parent),i.parent.append(i.backdrop)),i.parent.append(r),a(function(){a(function(){i.isRemoved||h(n,r,i)})}),m.transitionEndPromise(i.selectEl,{timeout:350})}function p(e,o,r){r.isRemoved=!0,o.addClass("md-leave").removeClass("md-clickable"),r.target.attr("aria-expanded","false"),t.element(u).off("resize",r.resizeFn),t.element(u).off("orientationchange",r.resizefn),r.resizeFn=n;var i=r.selectEl.controller("mdSelect");return i&&i.setLabelText(r.selectEl.controller("mdSelectMenu").selectedLabels()),m.transitionEndPromise(o,{timeout:350}).then(function(){o.removeClass("md-active"),r.backdrop&&r.backdrop.remove(),o[0].parentNode===r.parent[0]&&r.parent[0].removeChild(o[0]),r.disableParentScroll&&r.restoreScroll(),r.restoreFocus&&r.target.focus()})}function h(e,t,n){var d,l=t[0],s=n.target[0].firstElementChild.firstElementChild,f=n.parent[0],p=n.selectEl[0],h=n.contentEl[0],b=f.getBoundingClientRect(),g=s.getBoundingClientRect(),E=!1,v={left:b.left+c,top:c,bottom:b.height-c,right:b.width-c-(m.floatingScrollbars()?16:0)},M={top:g.top-v.top,left:g.left-v.left,right:v.right-(g.left+g.width),bottom:v.bottom-(g.top+g.height)},$=b.width-2*c,A=h.scrollHeight>h.offsetHeight,T=p.querySelector("md-option[selected]"),C=p.getElementsByTagName("md-option"),y=p.getElementsByTagName("md-optgroup");d=T?T:y.length?y[0]:C.length?C[0]:h.firstElementChild||h,h.offsetWidth>$&&(h.style["max-width"]=$+"px"),E&&(h.style["min-width"]=g.width+"px"),A&&p.classList.add("md-overflow");var w=p.getBoundingClientRect(),k=i(d);if(d){var N=u.getComputedStyle(d);k.paddingLeft=parseInt(N.paddingLeft,10)||0,k.paddingRight=parseInt(N.paddingRight,10)||0}var x=d;if("MD-OPTGROUP"===(x.tagName||"").toUpperCase()&&(x=C[0]||h.firstElementChild||h),A){var _=h.offsetHeight/2;h.scrollTop=k.top+k.height/2-_,M.top<_?h.scrollTop=Math.min(k.top,h.scrollTop+_-M.top):M.bottom<_&&(h.scrollTop=Math.max(k.top+k.height-w.height,h.scrollTop-_+M.bottom))}var H,S,I;E?(H=g.left,S=g.top+g.height,I="50% 0",S+w.height>v.bottom&&(S=g.top-w.height,I="50% 100%")):(H=g.left+k.left-k.paddingLeft,S=Math.floor(g.top+g.height/2-k.height/2-k.top+h.scrollTop),I=k.left+g.width/2+"px "+(k.top+k.height/2-h.scrollTop)+"px 0px",l.style.minWidth=g.width+k.paddingLeft+k.paddingRight+"px");var D=l.getBoundingClientRect();l.style.left=r(v.left,H,v.right-D.width)+"px",l.style.top=r(v.top,S,v.bottom-D.height)+"px",p.style[o.CSS.TRANSFORM_ORIGIN]=I,p.style[o.CSS.TRANSFORM]="scale("+Math.min(g.width/w.width,1)+","+Math.min(g.height/w.height,1)+")",a(function(){t.addClass("md-active"),p.style[o.CSS.TRANSFORM]="",x&&(n.focusedNode=x,x.focus())})}return{parent:"body",onShow:f,onRemove:p,hasBackdrop:!0,disableParentScroll:!0,themable:!0}}function r(e,t,n){return Math.max(e,Math.min(t,n))}function i(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}return o.$inject=["$mdSelect","$mdConstant","$$rAF","$mdUtil","$mdTheming","$timeout","$window"],e("$mdSelect").setDefaults({methods:["target"],options:o})}function d(e){for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t}var c=8,m=0;t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",o).directive("mdOption",r).directive("mdOptgroup",i).provider("$mdSelect",a),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$interpolate","$compile","$parse"],o.$inject=["$parse","$mdUtil","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],a.$inject=["$$interimElementProvider"]}(),function(){function e(e,n){return function(o){function r(){return e.when(o).then(function(e){return d=e,e})}var i,a="SideNav '"+o+"' is not available!",d=e.get(o);return d||e.notFoundError(o),i={isOpen:function(){return d&&d.isOpen()},isLockedOpen:function(){return d&&d.isLockedOpen()},toggle:function(){return d?d.toggle():n.reject(a)},open:function(){return d?d.open():n.reject(a)},close:function(){return d?d.close():n.reject(a)},then:function(e){var o=d?n.when(d):r();return o.then(e||t.noop)}}}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){o.focusElement(t)}}}function r(e,o,r,i,a,d,c,m,l,s){function u(u,f,p,h){function b(e,t){u.isLockedOpen=e,e===t?f.toggleClass("md-locked-open",!!e):o[e?"addClass":"removeClass"](f,"md-locked-open"),k.toggleClass("md-locked-open",!!e)}function g(e){var t=f.parent();t[e?"on":"off"]("keydown",M),k[e?"on":"off"]("click",$),e&&(T=s[0].activeElement);var n=h.focusElement();return E(e),C=l.all([e?o.enter(k,t):o.leave(k),o[e?"removeClass":"addClass"](f,"md-closed")]).then(function(){u.isOpen&&n&&n.focus()})}function E(e){var o=f.parent();e?(A=o.css("overflow"),o.css("overflow","hidden")):t.isDefined(A)&&(o.css("overflow",A),A=n)}function v(t){if(u.isOpen==t)return l.when(!0);var n=l.defer();return u.isOpen=t,e(function(){C.then(function(e){u.isOpen||(T&&T.focus(),T=null),n.resolve(e)})},0,!1),n.promise}function M(e){var t=e.keyCode===d.KEY_CODE.ESCAPE;return t?$(e):l.when(!0)}function $(e){return e.preventDefault(),e.stopPropagation(),h.close()}var A,T=null,C=l.when(!0),y=r(p.mdIsLockedOpen),w=function(){return y(u.$parent,{$media:function(e){return i.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),a(e)},$mdMedia:a})},k=c('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(u);f.on("$destroy",h.destroy),m.inherit(k,f),u.$watch(w,b),u.$watch("isOpen",g),h.$toggleOpen=v,h.focusElement(h.focusElement()||f)}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function i(e,n,o,r,i){var a,d=this;d.isOpen=function(){return!!e.isOpen},d.isLockedOpen=function(){return!!e.isLockedOpen},d.open=function(){return d.$toggleOpen(!0)},d.close=function(){return d.$toggleOpen(!1)},d.toggle=function(){return d.$toggleOpen(!e.isOpen)},d.focusElement=function(e){return t.isDefined(e)&&(a=e),a},d.$toggleOpen=function(){return i.when(e.isOpen)},d.destroy=r.register(d,o.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",r).directive("mdSidenavFocus",o).controller("$mdSidenavController",i),e.$inject=["$mdComponentRegistry","$q"],r.$inject=["$timeout","$animate","$parse","$log","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],i.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(e,n,o,r,i,a,d,c){function m(e,t){return e.attr({tabIndex:0,role:"slider"}),o.expect(e,"aria-label"),l}function l(o,m,l,s){function u(){E(),A(),g()}function f(e){z=parseFloat(e),m.attr("aria-valuemin",e),u()}function p(e){G=parseFloat(e),m.attr("aria-valuemax",e),u()}function h(e){X=parseFloat(e),g()}function b(e){m.attr("aria-disabled",!!e)}function g(){if(t.isDefined(l.mdDiscrete)){var e=Math.floor((G-z)/X);if(!Q){var o=n.getComputedStyle(K[0]);Q=t.element('<canvas style="position:absolute;">'),Z=Q[0].getContext("2d"),Z.fillStyle=o.backgroundColor||"black",K.append(Q)}var r=v();Q[0].width=r.width,Q[0].height=r.height;for(var i,a=0;e>=a;a++)i=Math.floor(r.width*(a/e)),Z.fillRect(i-1,0,2,r.height)}}function E(){J=q[0].getBoundingClientRect()}function v(){return V(),J}function M(e){if(!m[0].hasAttribute("disabled")){var t;e.keyCode===i.KEY_CODE.LEFT_ARROW?t=-X:e.keyCode===i.KEY_CODE.RIGHT_ARROW&&(t=X),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){$(s.$viewValue+t)}))}}function $(e){s.$setViewValue(T(C(e)))}function A(){isNaN(s.$viewValue)&&(s.$viewValue=s.$modelValue);var e=(s.$viewValue-z)/(G-z);o.modelValue=s.$viewValue,m.attr("aria-valuenow",s.$viewValue),y(e),F.text(s.$viewValue)}function T(e){return t.isNumber(e)?Math.max(z,Math.min(G,e)):void 0}function C(e){return t.isNumber(e)?Math.round(e/X)*X:void 0}function y(e){U.css("width",100*e+"%"),B.css("left",100*e+"%"),m.toggleClass("md-min",0===e)}function w(e){if(!P()){m.addClass("active"),m[0].focus(),E();var t=O(D(e.pointer.x)),n=T(C(t));o.$apply(function(){$(n),y(R(n))})}}function k(e){if(!P()){m.removeClass("dragging active");var t=O(D(e.pointer.x)),n=T(C(t));o.$apply(function(){$(n),A()})}}function N(e){P()||(ee=!0,e.stopPropagation(),m.addClass("dragging"),H(e))}function x(e){ee&&(e.stopPropagation(),H(e))}function _(e){ee&&(e.stopPropagation(),ee=!1)}function H(e){te?I(e.pointer.x):S(e.pointer.x)}function S(e){o.$evalAsync(function(){$(O(D(e)))})}function I(e){var t=O(D(e)),n=T(C(t));y(D(e)),F.text(n)}function D(e){return Math.max(0,Math.min(1,(e-J.left)/J.width))}function O(e){return z+e*(G-z)}function R(e){return(e-z)/(G-z)}a(m),s=s||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var L=l.ngDisabled&&c(l.ngDisabled),P=L?function(){return L(o.$parent)}:t.noop,j=t.element(m[0].querySelector(".md-thumb")),F=t.element(m[0].querySelector(".md-thumb-text")),B=j.parent(),q=t.element(m[0].querySelector(".md-track-container")),U=t.element(m[0].querySelector(".md-track-fill")),K=t.element(m[0].querySelector(".md-track-ticks")),V=r.throttle(E,5e3);l.min?l.$observe("min",f):f(0),l.max?l.$observe("max",p):p(100),l.step?l.$observe("step",h):h(1);var Y=t.noop;l.ngDisabled&&(Y=o.$parent.$watch(l.ngDisabled,b)),d.register(m,"drag"),m.on("keydown",M).on("$md.pressdown",w).on("$md.pressup",k).on("$md.dragstart",N).on("$md.drag",x).on("$md.dragend",_),setTimeout(u);var W=e.throttle(u);t.element(n).on("resize",W),o.$on("$destroy",function(){t.element(n).off("resize",W),Y()}),s.$render=A,s.$viewChangeListeners.push(A),s.$formatters.push(T),s.$formatters.push(C);var z,G,X,Q,Z,J={};E();var ee=!1,te=t.isDefined(l.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',compile:m}}t.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse"]}(),function(){function e(e,o,r,i,a){function d(e){function t(e,t){t.addClass("md-sticky-clone"),t.css("top",h+"px");var n={element:e,clone:t};return p.items.push(n),u.parent().prepend(n.clone),f(),function(){p.items.forEach(function(t,n){t.element[0]===e[0]&&(p.items.splice(n,1),t.clone.remove())}),f()}}function r(){p.items.forEach(a),p.items=p.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=u.prop("scrollTop"),n=p.items.length-1;n>=0;n--)if(t>p.items[n].top){e=p.items[n];break}c(e)}function a(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==u[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function d(){var e=u.prop("scrollTop"),t=e>(d.prevScrollTop||0);d.prevScrollTop=e,0===e?c(null):t&&p.next?p.next.top-e<=0?c(p.next):p.current&&(p.next.top-e<=p.next.height?s(p.current,p.next.top-p.next.height-e):s(p.current,null)):!t&&p.current&&(e<p.current.top&&c(p.prev),p.current&&p.next&&(e>=p.next.top-p.current.height?s(p.current,p.next.top-e-p.current.height):s(p.current,null)))}function c(e){if(p.current!==e){p.current&&(s(p.current,null),l(p.current,null)),e&&l(e,"active"),p.current=e;var t=p.items.indexOf(e);p.next=p.items[t+1],p.prev=p.items[t-1],
l(p.next,"next"),l(p.prev,"prev")}}function l(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function s(e,t){e&&(null===t||t===n?e.translateY&&(e.translateY=null,e.clone.css(o.CSS.TRANSFORM,"")):(e.translateY=t,e.clone.css(o.CSS.TRANSFORM,"translate3d("+e.left+"px,"+t+"px,0)")))}var u=e.$element,f=i.throttle(r);m(u),u.on("$scrollstart",f),u.on("$scroll",d);var p,h=u.prop("offsetTop");return p={prev:null,current:null,next:null,items:[],add:t,refreshElements:r}}function c(n){var o,r=t.element("<div>");e[0].body.appendChild(r[0]);for(var i=["sticky","-webkit-sticky"],a=0;a<i.length;++a)if(r.css({position:i[a],top:0,"z-index":2}),r.css("position")==i[a]){o=i[a];break}return r.remove(),o}function m(e){function t(){+a.now()-o>r?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),i(t))}var n,o,r=200;e.on("scroll touchmove",function(){n||(n=!0,i(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+a.now()})}var l=c();return function(e,t,n){var o=t.controller("mdContent");if(o)if(l)t.css({position:l,top:0,"z-index":2});else{var r=o.$element.data("$$sticky");r||(r=d(o),o.$element.data("$$sticky",r));var i=r.add(t,n||t.clone());e.$on("$destroy",i)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),function(){function e(e,n,o){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><div class="md-subheader-inner"><span class="md-subheader-content"></span></div></h2>',compile:function(r,i,a){return function(r,i,d){function c(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(i);var m=i[0].outerHTML;a(r,function(e){c(i).append(e)}),i.hasClass("md-no-sticky")||a(r,function(o){var a=n(t.element(m))(r);c(a).append(o),e(r,i,a)})}}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),function(){function e(e){function t(e){function t(t,r,i){var a=e(i[n]);r.on(o,function(e){t.$apply(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight"))}(),function(){function e(e,n,o,r,i,a,d,c){function m(e,n){var r=l.compile(e,n);return e.addClass("md-dragging"),function(e,n,m,l){function s(t){h(e)||(t.stopPropagation(),n.addClass("md-dragging"),E={width:b.prop("offsetWidth")},n.removeClass("transition"))}function u(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(i.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function f(e){if(E){e.stopPropagation(),n.removeClass("md-dragging"),b.css(i.CSS.TRANSFORM,"");var t=l.$viewValue?E.translate<.5:E.translate>.5;t&&p(!l.$viewValue),E=null}}function p(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||o.fakeNgModel();var h=a(m.ngDisabled),b=t.element(n[0].querySelector(".md-thumb-container")),g=t.element(n[0].querySelector(".md-container"));d(function(){n.removeClass("md-dragging")}),r(e,n,m,l),t.isDefined(m.ngDisabled)&&e.$watch(h,function(e){n.attr("tabindex",e?-1:0)}),c.register(g,"drag"),g.on("$md.dragstart",s).on("$md.drag",u).on("$md.dragend",f);var E}}var l=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:m}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF","$mdGesture"]}(),function(){function e(){return{restrict:"E"}}function n(e){function t(e,t,o,r){function i(i,a,c){return a=r.extractElementByName(a,"md-toast"),n=c.content,a.addClass(c.position.split(" ").map(function(e){return"md-"+e}).join(" ")),c.parent.addClass(d(c.position)),c.onSwipe=function(t,n){a.addClass("md-"+t.type.replace("$md.","")),e(o.cancel)},a.on("$md.swipeleft $md.swiperight",c.onSwipe),t.enter(a,c.parent)}function a(e,n,o){return n.off("$md.swipeleft $md.swiperight",o.onSwipe),o.parent.removeClass(d(o.position)),t.leave(n)}function d(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:i,onRemove:a,position:"bottom left",themable:!0,hideDelay:3e3}}var n,o=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var o={template:['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">',"<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:["$scope",function(t){var o=this;t.$watch(function(){return n},function(){o.content=n}),this.resolve=function(){e.hide()}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return o}]}).addMethod("updateContent",function(e){n=e});return t.$inject=["$timeout","$animate","$mdToast","$mdUtil"],o}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),n.$inject=["$$interimElementProvider"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e,n,o,r,i,a){return{restrict:"E",controller:t.noop,link:function(d,c,m){function l(){function t(t,n){c.parent()[0]===n.parent()[0]&&(u&&u.off("scroll",b),n.on("scroll",b),n.attr("scroll-shrink","true"),u=n,e(r))}function r(){s=c.prop("offsetHeight");var e=-s*h+"px";u.css("margin-top",e),u.css("margin-bottom",e),l()}function l(e){var t=e?e.target.scrollTop:p;g(),f=Math.min(s/h,Math.max(0,f+t-p)),c.css(n.CSS.TRANSFORM,"translate3d(0,"+-f*h+"px,0)"),u.css(n.CSS.TRANSFORM,"translate3d(0,"+(s-f)*h+"px,0)"),p=t,c.hasClass("md-whiteframe-z1")?f||a(function(){i.removeClass(c,"md-whiteframe-z1")}):f&&a(function(){i.addClass(c,"md-whiteframe-z1")})}var s,u,f=0,p=0,h=m.mdShrinkSpeedFactor||.5,b=e.throttle(l),g=o.debounce(r,5e3);d.$on("$mdContentLoaded",t)}r(c),t.isDefined(m.mdScrollShrink)&&l()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate","$timeout"]}(),function(){function e(e,n,o,r,i,a,d,c,m){function l(l,f,p){function h(){b(),v(),T(),g(),E()}function b(){t.isDefined(p.mdDelay)||(l.delay=s)}function g(){l.$on("$destroy",function(){l.visible=!1,f.remove(),t.element(n).off("resize",D)}),l.$watch("visible",function(e){e?y():w()})}function E(){N.attr("aria-label")||N.text().trim()||N.attr("aria-label",f.text().trim())}function v(){f.detach(),f.attr("role","tooltip")}function M(){for(var e=f.parent();e&&"none"==n.getComputedStyle(e[0])["pointer-events"];)e=e.parent();return e}function $(){for(var e=f.parent()[0];e&&e!==d[0]&&e!==document.body&&(!e.tagName||"md-content"!=e.tagName.toLowerCase());)e=e.parentNode;return e}function A(e,o){var r=n.getComputedStyle(f[0]);return t.isDefined(r[e])&&r[e]==o}function T(){var e=!1,o=function(){A("pointer-events","none")||C(!0)},i=function(){var t=l.hasOwnProperty("autohide")?l.autohide:p.hasOwnProperty("mdAutohide");(t||e||r[0].activeElement!==N[0])&&C(!1),e=!1};N.on("mousedown",function(){e=!0}),N.on("focus mouseenter touchstart",o),N.on("blur mouseleave touchend touchcancel",i),t.element(n).on("resize",D)}function C(t){C.value=!!t,C.queued||(t?(C.queued=!0,e(function(){l.visible=C.value,C.queued=!1},l.delay)):e(function(){l.visible=!1}))}function y(){return I.append(f),A("display","none")?(l.visible=!1,void f.detach()):(k(),void t.forEach([f,x,_],function(e){c.addClass(e,"md-show")}))}function w(){m.all([c.removeClass(_,"md-show"),c.removeClass(x,"md-show"),c.removeClass(f,"md-show")]).then(function(){l.visible||f.detach()})}function k(){function e(){var e="left"===H||"right"===H?2*Math.sqrt(Math.pow(o.width,2)+Math.pow(o.height/2,2)):2*Math.sqrt(Math.pow(o.width/2,2)+Math.pow(o.height,2)),t="left"===H?{left:100,top:50}:"right"===H?{left:0,top:50}:"top"===H?{left:50,top:100}:{left:50,top:0};x.css({width:e+"px",height:e+"px",left:t.left+"%",top:t.top+"%"})}function t(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,I.prop("scrollWidth")-o.width-u),t.left=Math.max(t.left,u),t.top=Math.min(t.top,I.prop("scrollHeight")-o.height-u),t.top=Math.max(t.top,u),t}function n(e){return"left"===e?{left:r.left-o.width-u,top:r.top+r.height/2-o.height/2}:"right"===e?{left:r.left+r.width+u,top:r.top+r.height/2-o.height/2}:"top"===e?{left:r.left+r.width/2-o.width/2,top:r.top-o.height-u}:{left:r.left+r.width/2-o.width/2,top:r.top+r.height+u}}var o=i.offsetRect(f,I),r=i.offsetRect(N,I),a=n(H);H?a=t(a):a.top>f.prop("offsetParent").scrollHeight-o.height-u&&(a=t(n("top"))),f.css({top:a.top+"px",left:a.left+"px"}),e()}a(f);var N=M(),x=t.element(f[0].getElementsByClassName("md-background")[0]),_=t.element(f[0].getElementsByClassName("md-content")[0]),H=p.mdDirection,S=$(),I=t.element(S||document.body),D=o.throttle(function(){l.visible&&k()});return h()}var s=300,u=8;return{restrict:"E",transclude:!0,priority:210,template:'        <div class="md-background"></div>        <div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay",autohide:"=?mdAutohide"},link:l}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),function(){t.module("material.components.whiteframe",[])}(),function(){function e(e,n,i,a,d,c,m,l,s){function u(){b(),d(function(){g(),h(),p()})}function f(){function e(){var e=V.ul.getBoundingClientRect(),n={};e.right>i.right-r&&(n.left=t.right-e.width+"px"),V.$.ul.css(n)}if(!V)return d(f,0,!1);var t=V.wrap.getBoundingClientRect(),n=V.snap.getBoundingClientRect(),i=V.root.getBoundingClientRect(),a=n.bottom-i.top,c=i.bottom-n.top,m=t.left-i.left,l=t.width,s={left:m+"px",minWidth:l+"px",maxWidth:Math.max(t.right-i.left,i.right-t.left)-r+"px"};a>c&&i.height-t.bottom-r<o?(s.top="auto",s.bottom=c+"px",s.maxHeight=Math.min(o,t.top-i.top-r)+"px"):(s.top=a+"px",s.bottom="auto",s.maxHeight=Math.min(o,i.bottom-t.bottom-r)+"px"),V.$.ul.css(s),d(e,0,!1)}function p(){V.$.root.length&&(c(V.$.ul),V.$.ul.detach(),V.$.root.append(V.$.ul),l.pin&&l.pin(V.$.ul,s))}function h(){e.autofocus&&V.input.focus()}function b(){var n=parseInt(e.delay,10)||0;e.$watch("searchText",n?i.debounce(C,n):C),A(M),e.$watch("selectedItem",$),e.$watch("$mdAutocompleteCtrl.hidden",function(e,t){!e&&t&&f()}),t.element(m).on("resize",f)}function g(){V={main:n[0],ul:n.find("ul")[0],input:n.find("input")[0],wrap:n.find("md-autocomplete-wrap")[0],root:document.body},V.li=V.ul.getElementsByTagName("li"),V.snap=E(),V.$=v(V)}function E(){for(var e=n;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return V.wrap}function v(e){var n={};for(var o in e)n[o]=t.element(e[o]);return n}function M(t,n){t&&(e.searchText=x(t)),e.itemChange&&t!==n&&e.itemChange(_(t))}function $(e,t){for(var n=0;n<G.length;++n)G[n](e,t)}function A(e){-1==G.indexOf(e)&&G.push(e)}function T(e){var t=G.indexOf(e);-1!=t&&G.splice(t,1)}function C(t,n){q.index=H(),t!==n&&t!==x(e.selectedItem)&&(e.selectedItem=null,e.textChange&&t!==n&&e.textChange(_(e.selectedItem)),D()?B():(q.loading=!1,q.matches=[],q.hidden=S(),P()))}function y(){X=!1,z||(q.hidden=!0)}function w(){X=!0,t.isString(e.searchText)||(e.searchText=""),e.minLength>0||(q.hidden=S(),q.hidden||B())}function k(e){switch(e.keyCode){case a.KEY_CODE.DOWN_ARROW:if(q.loading)return;e.preventDefault(),q.index=Math.min(q.index+1,q.matches.length-1),F(),P();break;case a.KEY_CODE.UP_ARROW:if(q.loading)return;e.preventDefault(),q.index=q.index<0?q.matches.length-1:Math.max(0,q.index-1),F(),P();break;case a.KEY_CODE.TAB:case a.KEY_CODE.ENTER:if(q.hidden||q.loading||q.index<0||q.matches.length<1)return;e.preventDefault(),O(q.index);break;case a.KEY_CODE.ESCAPE:q.matches=[],q.hidden=!0,q.index=H()}}function N(){return t.isNumber(e.minLength)?e.minLength:1}function x(t){return t&&e.itemText?e.itemText(_(t)):t}function _(e){if(e){var t={};return q.itemName&&(t[q.itemName]=e),t}}function H(){return e.autoselect?0:-1}function S(){return D()?void 0:!0}function I(){return x(q.matches[q.index])}function D(){return e.searchText.length>=N()}function O(t){e.selectedItem=q.matches[t],e.searchText=x(e.selectedItem)||e.searchText,q.hidden=!0,q.index=0,q.matches=[]}function R(){e.searchText="",O(-1);var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),V.input.dispatchEvent(t),V.input.focus()}function L(n){function o(t){W[i]=t,q.loading=!1,n===e.searchText&&(Y=null,q.matches=t,q.hidden=S(),P(),f())}var r=e.$parent.$eval(K),i=n.toLowerCase();t.isArray(r)?o(r):(q.loading=!0,r.success&&r.success(o),r.then&&r.then(o),r.error&&r.error(function(){q.loading=!1}))}function P(){q.messages=q.matches.length?[j(),I()]:[]}function j(){switch(q.matches.length){case 1:return"There is 1 match available.";default:return"There are "+q.matches.length+" matches available."}}function F(){if(V.li[q.index]){var e=V.li[q.index],t=e.offsetTop,n=t+e.offsetHeight,o=V.ul.clientHeight;t<V.ul.scrollTop?V.ul.scrollTop=t:n>V.ul.scrollTop+o&&(V.ul.scrollTop=n-o)}}function B(){var t=e.searchText,n=t.toLowerCase();Y&&Y.cancel&&(Y.cancel(),Y=null),!e.noCache&&W[n]?(q.matches=W[n],P()):L(t),X&&(q.hidden=S())}var q=this,U=e.itemsExpr.split(/ in /i),K=U[1],V=null,Y=null,W={},z=!1,G=[],X=!1;return q.scope=e,q.parent=e.$parent,q.itemName=U[0],q.matches=[],q.loading=!1,q.hidden=!0,q.index=null,q.messages=[],q.id=i.nextUid(),q.keydown=k,q.blur=y,q.focus=w,q.clear=R,q.select=O,q.getCurrentDisplayValue=I,q.registerSelectedItemWatcher=A,q.unregisterSelectedItemWatcher=T,q.listEnter=function(){z=!0},q.listLeave=function(){z=!1,X||(q.hidden=!0)},q.mouseUp=function(){V.input.focus()},u()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var n=41,o=5.5*n,r=8;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$timeout","$mdTheming","$window","$animate","$rootElement"]}(),function(){function e(e,t){function n(n,o,r){r.$observe("disabled",function(e){n.isDisabled=e}),r.$observe("required",function(e){n.isRequired=null!==e}),t.initOptionalProperties(n,r,{searchText:null,selectedItem:null}),e(o)}return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",link:n,scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass"},template:function(e,t){function n(){var t=e.find("md-item-template").remove(),n=t.length?t.html():e.html();return t.length||e.empty(),n}function o(){var t=e.find("md-not-found").remove(),n=t.length?t.html():"";return n?'<li ng-if="!$mdAutocompleteCtrl.matches.length && !$mdAutocompleteCtrl.loading                         && !$mdAutocompleteCtrl.hidden"                         ng-hide="$mdAutocompleteCtrl.hidden"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return t.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  id="fl-input-{{$mdAutocompleteCtrl.id}}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+d+"</div>            </md-input-container>":'            <input flex type="search"                id="input-{{$mdAutocompleteCtrl.id}}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="isRequired"                ng-disabled="isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>'}var i=o(),a=n(),d=e.html();return'        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel }"            role="listbox">          '+r()+'          <button              type="button"              tabindex="-1"              ng-if="$mdAutocompleteCtrl.scope.searchText && !isDisabled"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="md-cancel"></md-icon>            <span class="md-visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>          <ul role="presentation"              class="md-autocomplete-suggestions md-whiteframe-z1 {{menuClass || \'\'}}"              id="ul-{{$mdAutocompleteCtrl.id}}"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()">            <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"                ng-class="{ selected: index === $mdAutocompleteCtrl.index }"                ng-hide="$mdAutocompleteCtrl.hidden"                ng-click="$mdAutocompleteCtrl.select(index)"                md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">                '+a+"            </li>            "+i+'          </ul>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e),e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e,n,o){function r(r){var i=o(n.html())(e),d=t.element("<div>").text(i).html(),c=n.attr("md-highlight-flags")||"",m=e.$watch(r,function(e){var t=a(e,c),o=d.replace(t,'<span class="highlight">$&</span>');n.html(o)});n.on("$destroy",function(){m()})}function i(e){return e?e.replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/g,"\\$&"):e}function a(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(i(n),t.replace(/[\$\^]/g,""))}return this.init=r,r()}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$interpolate"]}(),function(){function e(){return{terminal:!0,scope:!1,controller:"MdHighlightCtrl",link:function(e,t,n,o){o.init(n.mdHighlightText)}}}t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function e(e,t){function n(n,o,r){var i=n.$parent.$mdAutocompleteCtrl,a=i.parent.$new(!1,i.parent),d=i.scope.$eval(r.mdAutocompleteListItem);a[d]=n.item,e(o.contents())(a),o.attr({role:"option",id:"item_"+t.nextUid()})}return{terminal:!0,link:n,scope:!1}}t.module("material.components.autocomplete").directive("mdAutocompleteListItem",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,t){function n(t,n,o){var r=t.$parent.$mdAutocompleteCtrl;e(n.contents())(r.parent),o.hasOwnProperty("mdAutocompleteReplace")&&(n.after(n.contents()),n.remove())}return{restrict:"A",terminal:!0,link:n,scope:!1}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e){function o(o,r){return o.append(n),function(n,o,r,i){o.addClass("md-chip"),e(o),i&&t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){i.selectedChip=-1})}}return{restrict:"E",require:"^?mdChips",compile:o}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming"]}(),function(){function e(e){function t(t,n,o,r){n.on("click",function(e){t.$apply(function(){r.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,ariaHidden:!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e,t){function n(t,n,o){var r=t.$parent.$mdChipsCtrl,i=r.parent.$new(!1,r.parent);i.$$replacedScope=t,i.$chip=t.$chip,i.$mdChipsCtrl=r,n.html(r.$scope.$eval(o.mdChipTransclude)),e(n.contents())(i)}return{restrict:"EA",terminal:!0,link:n,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,t,n,o,r){this.$timeout=r,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useMdOnAppend=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();switch(e.keyCode){case this.$mdConstant.KEY_CODE.ENTER:if(this.$scope.requireMatch||!t)break;e.preventDefault(),this.appendChip(t),this.resetChipBuffer();break;case this.$mdConstant.KEY_CODE.BACKSPACE:if(t)break;e.stopPropagation(),this.items.length&&this.selectAndFocusChipSafe(this.items.length-1)}},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.placeholder:this.secondaryPlaceholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){this.items.indexOf(e)+1||(this.useMdOnAppend&&this.mdOnAppend&&(e=this.mdOnAppend({$chip:e})),this.items.push(e))},e.prototype.useMdOnAppendExpression=function(){this.useMdOnAppend=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.removeChip=function(e){this.items.splice(e,1)},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?this.selectedChip=e:this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,r=this;e.attr({tabindex:0}).on("keydown",function(e){o.$apply(t.bind(r,function(){r.inputKeydown(e)}))}).on("focus",t.bind(r,r.onInputFocus)).on("blur",t.bind(r,r.onInputBlur))},e.prototype.configureAutocomplete=function(e){e.registerSelectedItemWatcher(t.bind(this,function(e){e&&(this.appendChip(e),this.resetChipBuffer())})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,c){function m(n,m){function l(e){if(m.ngModel){var t=s[0].querySelector(e);return t&&t.outerHTML}}var s=m.$mdUserTemplate;m.$mdUserTemplate=null;var u=l("md-chips>*[md-chip-remove]")||i,f=l("md-chips>md-chip-template")||r,p=l("md-chips>md-autocomplete")||l("md-chips>input")||o,h=s.find("md-chip");return s[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,r,i,d){t.initOptionalProperties(n,m),e(r);var l=d[0];if(l.chipContentsTemplate=f,l.chipRemoveTemplate=u,l.chipInputTemplate=p,r.attr({ariaHidden:!0,tabindex:-1}).on("focus",function(){l.onFocus()}),m.ngModel&&(l.configureNgModel(r.controller("ngModel")),i.mdOnAppend&&l.useMdOnAppendExpression(),p!=o&&c(function(){0===p.indexOf("<md-autocomplete")&&l.configureAutocomplete(r.find("md-autocomplete").controller("mdAutocomplete")),l.configureUserInput(r.find("input"))})),h.length>0){var s=a(h)(n.$parent);c(function(){r.find("md-chips-wrap").prepend(s)})}}}return{template:function(e,t){t.$mdUserTemplate=e.clone();return n},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:m,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",mdOnAppend:"&",deleteHint:"@",deleteButtonLabel:"@",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div class="md-chip-remove-container"              md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',r="      <span>{{$chip}}</span>",i='      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,r,i,a){t.initOptionalProperties(n,o),e(r),r.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.mdContactName"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';

e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(){function e(e,n,o,r){if(r){var i=n.parent()[0].getElementsByTagName("md-tab"),a=Array.prototype.indexOf.call(i,n[0]),d=r.insertTab({scope:e,parent:e.$parent,index:a,element:n,template:n.find("md-tab-body").html(),label:n.find("md-tab-label").html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(d.getIndex())}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return Array.prototype.indexOf.call(i,n[0])},function(e){d.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(d)})}}return{require:"^?mdTabs",terminal:!0,template:function(e,t){function n(){function n(){return t.label}function o(){var t=e.find("md-tab-label");return t.length?t.remove().html():void 0}function r(){var t=e.html();return e.empty(),t}return n()||o()||r()}function o(){var n=e.find("md-tab-body"),o=n.length?n.html():t.label?e.html():"";return n.length?n.remove():t.label&&e.empty(),o}var r=n(),i=o();return"<md-tab-label>"+r+"</md-tab-label><md-tab-body>"+i+"</md-tab-body>"},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"},link:e}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,n,o,r,i,a,d,c){function m(){e.$watch("selectedIndex",p),e.$watch("$mdTabsCtrl.focusIndex",f),e.$watch("$mdTabsCtrl.offsetLeft",u),e.$watch("$mdTabsCtrl.hasContent",s),t.element(o).on("resize",$),t.element(V.paging).on("DOMSubtreeModified",U.updateInkBarStyles),r(P,0,!1),r(D),e.$on("$destroy",l)}function l(){t.element(o).off("resize",$),t.element(V.paging).off("DOMSubtreeModified",U.updateInkBarStyles)}function s(e){n[e?"removeClass":"addClass"]("md-no-tab-content")}function u(n){var o=N()?"":"-"+n+"px";t.element(V.paging).css("transform","translate3d("+o+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function f(e,t){e!==t&&V.tabs[e]&&(D(),I())}function p(t,n){t!==n&&(e.selectedIndex=_(t),U.lastSelectedIndex=n,U.updateInkBarStyles(),P(),e.$broadcast("$mdTabsChanged"),U.tabs[n]&&U.tabs[n].scope.deselect(),U.tabs[t]&&U.tabs[t].scope.select())}function h(){h.watcher||(h.watcher=e.$watch(function(){r(function(){h.watcher&&n.prop("offsetParent")&&(h.watcher(),h.watcher=null,$())},0,!1)}))}function b(t){switch(t.keyCode){case i.KEY_CODE.LEFT_ARROW:t.preventDefault(),S(-1,!0);break;case i.KEY_CODE.RIGHT_ARROW:t.preventDefault(),S(1,!0);break;case i.KEY_CODE.SPACE:case i.KEY_CODE.ENTER:t.preventDefault(),K||(e.selectedIndex=U.focusIndex)}U.lastClick=!1}function g(t){K||(U.focusIndex=e.selectedIndex=t),U.lastClick=!0,U.tabs[t].element.triggerHandler("click")}function E(e){x()&&(e.preventDefault(),U.offsetLeft=B(U.offsetLeft-e.wheelDelta))}function v(){var e,t,n=V.canvas.clientWidth,o=n+U.offsetLeft;for(e=0;e<V.tabs.length&&(t=V.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);U.offsetLeft=B(t.offsetLeft)}function M(){var e,t;for(e=0;e<V.tabs.length&&(t=V.tabs[e],!(t.offsetLeft+t.offsetWidth>=U.offsetLeft));e++);U.offsetLeft=B(t.offsetLeft+t.offsetWidth-V.canvas.clientWidth)}function $(){e.$apply(function(){U.lastSelectedIndex=e.selectedIndex,U.offsetLeft=B(U.offsetLeft),r(U.updateInkBarStyles,0,!1)})}function A(t){var n=e.selectedIndex,o=U.tabs.splice(t.getIndex(),1)[0];L(),e.selectedIndex===n&&(o.scope.deselect(),U.tabs[e.selectedIndex]&&U.tabs[e.selectedIndex].scope.select()),r(function(){U.offsetLeft=B(U.offsetLeft)})}function T(n,o){var r={getIndex:function(){return U.tabs.indexOf(i)},isActive:function(){return this.getIndex()===e.selectedIndex},isLeft:function(){return this.getIndex()<e.selectedIndex},isRight:function(){return this.getIndex()>e.selectedIndex},hasFocus:function(){return!U.lastClick&&U.hasFocus&&this.getIndex()===U.focusIndex},id:d.nextUid()},i=t.extend(r,n);return t.isDefined(o)?U.tabs.splice(o,0,i):U.tabs.push(i),O(),R(),i}function C(){var e={};return e.wrapper=n[0].getElementsByTagName("md-tabs-wrapper")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=n[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),e}function y(){return U.offsetLeft>0}function w(){var e=V.tabs[V.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>V.canvas.clientWidth+U.offsetLeft}function k(){switch(e.stretchTabs){case"always":return!0;case"never":return!1;default:return!x()&&o.matchMedia("(max-width: 600px)").matches}}function N(){return e.centerTabs&&!x()}function x(){if(e.noPagination)return!1;var o=n.prop("clientWidth");return t.forEach(V.tabs,function(e){o-=e.offsetWidth}),0>o}function _(e){var t,n,o=Math.max(U.tabs.length-e,e);for(t=0;o>=t;t++){if(n=U.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=U.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function H(){var t=U.tabs[e.selectedIndex],n=U.tabs[U.focusIndex];U.tabs=U.tabs.sort(function(e,t){return e.index-t.index}),e.selectedIndex=U.tabs.indexOf(t),U.focusIndex=U.tabs.indexOf(n)}function S(t,n){var o,r=n?U.focusIndex:e.selectedIndex;for(o=r+t;U.tabs[o]&&U.tabs[o].scope.disabled;o+=t);U.tabs[o]&&(n?U.focusIndex=o:e.selectedIndex=o)}function I(){V.dummies[U.focusIndex].focus()}function D(){if(!N()){var e=V.tabs[U.focusIndex],t=e.offsetLeft,n=e.offsetWidth+t;U.offsetLeft=Math.max(U.offsetLeft,B(n-V.canvas.clientWidth)),U.offsetLeft=Math.min(U.offsetLeft,B(t))}}function O(){Y.forEach(function(e){r(e)}),Y=[]}function R(){var e=!1;t.forEach(U.tabs,function(t){t.template&&(e=!0)}),U.hasContent=e}function L(){e.selectedIndex=_(e.selectedIndex),U.focusIndex=_(U.focusIndex)}function P(){if(!e.dynamicHeight)return n.css("height","");if(!U.tabs.length)return Y.push(P);var t=V.contents[e.selectedIndex],o=t?t.offsetHeight:0,r=V.wrapper.offsetHeight,i=o+r,a=n.prop("clientHeight");a!==i&&(K=!0,c.animate(n,{height:a+"px"},{height:i+"px"}).then(function(){n.css("height",""),K=!1}))}function j(){if(V.tabs[e.selectedIndex]){if(!U.tabs.length)return Y.push(U.updateInkBarStyles);if(!n.prop("offsetParent"))return h();var o=e.selectedIndex,r=V.paging.offsetWidth,i=V.tabs[o],a=i.offsetLeft,d=r-a-i.offsetWidth;F(),t.element(V.inkBar).css({left:a+"px",right:d+"px"})}}function F(){var n=e.selectedIndex,o=U.lastSelectedIndex,r=t.element(V.inkBar);r.removeClass("md-left md-right"),t.isNumber(o)&&(o>n?r.addClass("md-left"):n>o&&r.addClass("md-right"))}function B(e){if(!V.tabs.length||!x())return 0;var t=V.tabs[V.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-V.canvas.clientWidth,e)}function q(e,n){var o={colorElement:t.element(V.inkBar)};a.attach(e,n,o)}var U=this,K=!1,V=C(),Y=[];U.scope=e,U.parent=e.$parent,U.tabs=[],U.lastSelectedIndex=null,U.focusIndex=e.selectedIndex||0,U.offsetLeft=0,U.hasContent=!1,U.hasFocus=!1,U.lastClick=!0,U.redirectFocus=I,U.attachRipple=q,U.shouldStretchTabs=k,U.shouldPaginate=x,U.shouldCenterTabs=N,U.insertTab=T,U.removeTab=A,U.select=g,U.scroll=E,U.nextPage=v,U.previousPage=M,U.keydown=b,U.canPageForward=w,U.canPageBack=y,U.refreshIndex=L,U.incrementSelectedIndex=S,U.updateInkBarStyles=d.debounce(j,100),U.updateTabOrder=d.debounce(H,100),m()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$timeout","$mdConstant","$mdTabInkRipple","$mdUtil","$animate"]}(),function(){function e(e,n,o){return{scope:{noPagination:"=?mdNoPagination",dynamicHeight:"=?mdDynamicHeight",centerTabs:"=?mdCenterTabs",selectedIndex:"=?mdSelected",stretchTabs:"@?mdStretchTabs"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'        <md-tabs-wrapper ng-class="{ \'md-stretch-tabs\': $mdTabsCtrl.shouldStretchTabs() }">          <md-tab-data></md-tab-data>          <md-prev-button              tabindex="-1"              role="button"              aria-label="Previous Page"              aria-disabled="{{!$mdTabsCtrl.canPageBack()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }"              ng-if="$mdTabsCtrl.shouldPaginate()"              ng-click="$mdTabsCtrl.previousPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-prev-button>          <md-next-button              tabindex="-1"              role="button"              aria-label="Next Page"              aria-disabled="{{!$mdTabsCtrl.canPageForward()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }"              ng-if="$mdTabsCtrl.shouldPaginate()"              ng-click="$mdTabsCtrl.nextPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-next-button>          <md-tabs-canvas              tabindex="0"              aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}"              ng-focus="$mdTabsCtrl.redirectFocus()"              ng-class="{                  \'md-paginated\': $mdTabsCtrl.shouldPaginate(),                  \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs()              }"              ng-keydown="$mdTabsCtrl.keydown($event)"              role="tablist">            <md-pagination-wrapper                ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs() }"                md-tab-scroll="$mdTabsCtrl.scroll($event)">              <md-tab-item                  tabindex="-1"                  class="md-tab"                  style="max-width: {{ tabWidth ? tabWidth + \'px\' : \'none\' }}"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-click="$mdTabsCtrl.select(tab.getIndex())"                  ng-class="{                      \'md-active\':    tab.isActive(),                      \'md-focused\':   tab.hasFocus(),                      \'md-disabled\':  tab.scope.disabled                  }"                  ng-disabled="tab.scope.disabled"                  md-swipe-left="$mdTabsCtrl.nextPage()"                  md-swipe-right="$mdTabsCtrl.previousPage()"                  md-template="tab.label"                  md-scope="tab.parent"></md-tab-item>              <md-ink-bar ng-hide="noInkBar"></md-ink-bar>            </md-pagination-wrapper>            <div class="md-visually-hidden md-dummy-wrapper">              <md-dummy-tab                  tabindex="-1"                  id="tab-item-{{tab.id}}"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-focus="$mdTabsCtrl.hasFocus = true"                  ng-blur="$mdTabsCtrl.hasFocus = false"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  md-template="tab.label"                  md-scope="tab.parent"></md-dummy-tab>            </div>          </md-tabs-canvas>        </md-tabs-wrapper>        <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent">          <md-tab-content              id="tab-content-{{tab.id}}"              role="tabpanel"              aria-labelledby="tab-item-{{tab.id}}"              md-swipe-left="$mdTabsCtrl.incrementSelectedIndex(1)"              md-swipe-right="$mdTabsCtrl.incrementSelectedIndex(-1)"              ng-if="$mdTabsCtrl.hasContent"              ng-repeat="(index, tab) in $mdTabsCtrl.tabs"               md-template="tab.template"              md-scope="tab.parent"              md-connected-if="tab.isActive()"              ng-class="{                \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null,                \'md-active\':        tab.isActive(),                \'md-left\':          tab.isLeft(),                \'md-right\':         tab.isRight(),                \'md-no-scroll\':     dynamicHeight              }"></md-tab-content>        </md-tabs-content-wrapper>      '},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",link:function(r,i,a){function d(e){var t=i.find("md-tab-data");t.html(e),o(t.contents())(r.$parent)}d(a.$mdTabsTemplate),delete a.$mdTabsTemplate,n.initOptionalProperties(r,a),a.$observe("mdNoBar",function(e){r.noInkBar=t.isDefined(e)}),r.selectedIndex=t.isNumber(r.selectedIndex)?r.selectedIndex:0,e(i)}}}t.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$mdTheming","$mdUtil","$compile"]}(),function(){function e(e,t,n){function o(o,r,i,a){function d(){o.$watch("connected",function(e){e===!1?c():m()}),o.$on("$destroy",m)}function c(){t.disconnectScope(l)}function m(){t.reconnectScope(l)}if(a){var l=o.compileScope.$new();return r.html(o.template),e(r.contents())(l),n(d)}}return{restrict:"A",link:o,scope:{template:"=mdTemplate",compileScope:"=mdScope",connected:"=?mdConnectedIf"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTemplate",e),e.$inject=["$compile","$mdUtil","$timeout"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","/* mixin definition ; sets LTR and RTL within the same style call */md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme, .md-button.md-THEME_NAME-theme {  border-radius: 3px; }  a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {    background-color: transparent; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-icon-button, .md-button.md-THEME_NAME-theme.md-icon-button {    border-radius: 50%; }  a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {        color: '{{primary-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {        background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {        background-color: '{{primary-600}}'; }    a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {      color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {      color: '{{background-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {      background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {      background-color: '{{background-200}}'; }  a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {        color: '{{warn-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {        background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {        background-color: '{{warn-700}}'; }    a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {      color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {        color: '{{accent-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {        background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {        background-color: '{{accent-700}}'; }    a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {      color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {    color: '{{foreground-3}}';    cursor: not-allowed; }    a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {      color: '{{foreground-3}}'; }  a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    background-color: '{{foreground-4}}'; }  a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {    background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages, md-input-container.md-THEME_NAME-theme [ng-message], md-input-container.md-THEME_NAME-theme [data-ng-message], md-input-container.md-THEME_NAME-theme [x-ng-message] {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-label {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");

}()}(window,window.angular);
// apiCheck.js v7.2.4 built with ♥ by Kent C. Dodds (ó ì_í)=óò=(ì_í ò)

!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):"object"==typeof exports?exports.apiCheck=r():e.apiCheck=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";e.exports=t(3)},function(e){function r(e,r){var n=[],o=[];return r=r||function(e,r){return"[Circular "+t(r,n,o)+"]"},function(t,i){var a=i;return"object"==typeof i&&i&&(-1!==n.indexOf(i)?a=r(t,i):(n.push(i),o.push(t))),e&&(a=e(t,a)),a}}function t(e,r,t){var n=r.indexOf(e),o=[t[n]];for(n--;n>=0;n--)r[n][o[0]]===e&&(e=r[n],o.unshift(t[n]));return"~"+o.join(".")}function n(e,t,n,o){return JSON.stringify(e,r(t,o),n)}e.exports=n,n.getSerialize=r},function(e,r,t){"use strict";function n(e){var r=o(e),t=void 0;if("array"===r)t=[];else{if("object"!==r)return e;t={}}return p(e,function(e,r){t[r]=e}),t}function o(e){return Array.isArray(e)?"array":e instanceof RegExp?"object":typeof e}function i(e,r){var t=void 0,n=r&&r["short"];return t=n&&e.shortType?e.shortType:!n&&"object"==typeof e.type||"function"===e.type?a(e,r):a(e,r)||e.displayName||e.name}function a(e,r){var t=e.type;if("function"==typeof t){var n=t.__apiCheckData,o=t(r);t=_({__apiCheckData:n},n.type,o)}return t}function u(e){return e?Array.isArray(e)?e:[e]:[]}function p(e){return Array.isArray(e)?c.apply(void 0,arguments):f.apply(void 0,arguments)}function f(e,r,t){var n,o=Object.prototype.hasOwnProperty;for(var i in e)if(o.call(e,i)&&(n=r.call(t,e[i],i,e),n===!1))return n;return!0}function c(e,r,t){for(var n,o=e.length,i=0;o>i;i++)if(n=r.call(t,e[i],i,e),n===!1)return n;return!0}function s(e){return e instanceof Error}function l(e,r,t){e=u(e);var n=e.slice(),o=n.pop();return 1===n.length&&(r=" "),n.join(r)+(""+(n.length?r+t:"")+o)}function y(e,r,t){"function"==typeof t&&(t=t({"short":!0}));var n="object"!=typeof t?t:A(t);return new Error(""+h(e,r)+" must be "+d(n))}function h(e,r){var t=d(e||"value"),n=r?" at "+d(r):"";return""+t+n}function d(e){return"`"+e+"`"}function v(e){return"undefined"==typeof e}function g(e,r,t){return t&&(e=x(),e.isNoop=!0),"string"==typeof e.type&&(e.shortType=e.type),p(r,function(r,t){return e[t]=r}),e.displayName||(e.displayName="apiCheck "+d(e.shortType||e.type||e.name)+" type checker"),e.notRequired||(e=b(e,t)),e.notNullable||O(e,t),e.notOptional||m(e,t),e}function b(e,r){var t=r?x():function(r,t,n,o){if(v(r)&&!e.isOptional){var a=n?" in "+d(n):"",u=i(e,{"short":!0}),p="object"!=typeof u?u:A(u);return new Error("Required "+d(t)+" not specified"+a+". Must be "+d(p))}return e(r,t,n,o)};return C(e,t),t.originalChecker=e,t}function m(e,r){var t=r?x():function(r,t,n,o){return v(r)?void 0:e(r,t,n,o)};C(e,t),t.isOptional=!0,t.displayName=e.displayName+" (optional)",t.originalChecker=e,e.optional=t,k(e,e.optional)}function O(e,r){var t=r?x():function(r,t,n,o){return null!==r?e(r,t,n,o):void 0};C(e,t),t.isNullable=!0,t.displayName=e.displayName+" (nullable)",t.originalChecker=e,e.nullable=t,k(e,e.nullable),e.notOptional||m(e.nullable,r)}function k(e,r){if("object"==typeof r.type)r.type=n(r.type);else{if("function"!=typeof r.type)return void(r.type+=" (optional)");r.type=function(){return e.type.apply(e,arguments)}}r.type.__apiCheckData=n(e.type.__apiCheckData)||{},r.type.__apiCheckData.optional=!0}function C(e,r){p(Object.keys(e),function(t){return r[t]=e[t]})}function j(){}function x(){return function(){}}var _=function(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0})},A=t(1),w={addOptional:m,getRequiredVersion:b,setupChecker:g,addNullable:O};e.exports={each:p,copy:n,typeOf:o,arrayify:u,getCheckerDisplay:i,isError:s,list:l,getError:y,nAtL:h,t:d,undef:v,checkerHelpers:w,noop:j}},function(e,r,t){"use strict";function n(){function r(n,i,a){if(r.config.disabled||e.exports.globalConfig.disabled)return{apiTypes:{},argTypes:{},passed:!0,message:"",failed:!1};t(arguments),Array.isArray(n)?i=Array.prototype.slice.call(i):(n=[n],i=[i]);var u=p(n,i);u.length||(u=o(n,i));var f=c(n,i);return u.length?(f.message=r.getErrorMessage(n,i,u,a),f.failed=!0,f.passed=!1):(f.message="",f.failed=!1,f.passed=!0),f}function t(e){var t=e[0],n=e[1],i=Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length;if(Array.isArray(t)&&!i)throw new Error(a(t,[n],["If an array is provided for the api, an array must be provided for the args as well."],{prefix:"apiCheck"}));var u=o(C.checkApiCheckApi,e);if(u.length){var p=r.getErrorMessage(C.checkApiCheckApi,e,u,{prefix:"apiCheck"});r.handleErrorMessage(p,!0)}}function n(e){return function(t,n,o){var i=r(t,n,o);return r.handleErrorMessage(i.message,e),i}}function i(e,r){if(r&&e)throw new Error(e);e&&console.warn(e)}function a(e,t){function n(){var e=p.onlyPrefix;return e||(e=(""+(f.prefix||"")+" "+(p.prefix||"")).trim()),e}function o(){var e=p.onlySuffix;return e||(e=(""+(p.suffix||"")+" "+(f.suffix||"")).trim()),e}function i(){var e=p.url;return e||(e=f.docsBaseUrl&&p.urlSuffix&&(""+f.docsBaseUrl+p.urlSuffix).trim()),e}var a=void 0===arguments[2]?[]:arguments[2],p=void 0===arguments[3]?{}:arguments[3],f=r.config.output||{},c=n(),s=o(),l=i(),y="apiCheck failed! "+a.join(", "),h="\n\n"+u(e,t);return(""+c+" "+y+" "+s+" "+(l||"")+h).trim()}function u(e,r){function t(e){h(e,function(r,n){-1===f.indexOf(r)&&(f.push(r),"object"==typeof r?t(e):"function"==typeof r&&(e[n]=r.displayName||r.name||"anonymous function"))})}function n(e){return e&&e.length?(e&&1===e.length&&(e=e[0]),l(e,null,2)):"nothing"}function o(){var e="\n",t=!0;r&&1===r.length&&(t="object"==typeof r[0]?!!Object.keys(r[0]).length:!1);var n="type"+(t?"s":""),o=e+e;return"You passed:"+e+s+o+("With the "+n+":"+e+u+o)+("The API calls for:"+e+a)}var i=c(e,r),a=i.apiTypes,u=i.argTypes,p=Array.prototype.slice.call(r||[]),f=[];t(p);var s=n(p);return u=n(u),a=n(a),o()}function c(t,n){t=g(t),n=g(n);var o=t.map(function(t,o){var i=e.exports.globalConfig.hasOwnProperty("verbose");return b(t,{terse:i?!e.exports.globalConfig.verbose:!r.config.verbose,obj:n[o],addHelpers:!0})}),i=n.map(function(e){return f(e,[])});return{argTypes:i,apiTypes:o}}var s=void 0===arguments[0]?{}:arguments[0],d=void 0===arguments[1]?{}:arguments[1];j&&arguments.length&&j["throw"](C.getApiCheckInstanceCheckers,arguments,{prefix:"creating an apiCheck instance"});var v={"throw":n(!0),warn:n(!1),getErrorMessage:a,handleErrorMessage:i,config:{output:s.output||{prefix:"",suffix:"",docsBaseUrl:""},verbose:s.verbose||!1,disabled:s.disabled||!1},utils:y};h(v,function(e,t){return r[t]=e});var m=r.disabled||e.exports.globalConfig.disabled;return h(k.getCheckers(m),function(e,t){return r[t]=e}),h(d,function(e,t){return r[t]=e}),r}function o(e,r){for(var t=[],n=!1,o=0,i=0,u=void 0,p=void 0,f=void 0,c=void 0,s=void 0,l=void 0,y=void 0;(p=e[o++])&&i<r.length;)u=r[i++],s="Argument "+i+(p.isOptional?" (optional)":""),f=p(u,"value",s),l=d(f),c=o>=e.length,y=o>1&&e[o-1].isOptional,l&&c||l&&!c&&!p.isOptional&&!y?(n=!0,t.push(a(f,p,u))):l&&p.isOptional?i--:t.push(""+v(s)+" passed");return n?t:[]}function i(e,r,t){var n=k.shape({type:k.string,optional:k.bool}),o=k.func.withProperties({__apiCheckData:n}),a=k.shape({__apiCheckData:n}),u=k.oneOfType([o,a])(e,r,t);return d(u)?u:"function"==typeof e||e.hasOwnProperty(e.__apiCheckData.type)?void 0:O(r,t,i.type)}function a(e,r,t){var n=u(r,t);return n=n?" - "+n:"",e.message+n}function u(e,r){var t=e.help;return t?("function"==typeof t&&(t=t(r)),t):""}function p(e,r){var t=e.filter(function(e){return!e.isOptional});return r.length<t.length?["Not enough arguments specified. Requires `"+t.length+"`, you passed `"+r.length+"`"]:[]}function f(e,r){function t(){return e&&Object.keys(e).length}function n(){return-1!==r.indexOf(e)?"[Circular]":(r.push(e),c(e,r))}var o=e&&e.constructor&&e.constructor.name,i=m(e);if("function"===i){if(t()){var a=l(n());return o+" (with properties: "+a+")"}return o}return null===e?"null":"array"!==i&&"object"!==i?i:t()?n():o}function c(e,r){var t={};return h(e,function(e,n){return t[n]=f(e,r)}),t}function s(){var e=k.string.optional,r=k.func.withProperties({type:k.oneOfType([k.string,i]).optional,displayName:k.string.optional,shortType:k.string.optional,notOptional:k.bool.optional,notRequired:k.bool.optional}),t=[k.shape({output:k.shape({prefix:k.string.optional,suffix:k.string.optional,docsBaseUrl:k.string.optional}).strict.optional,verbose:k.bool.optional,disabled:k.bool.optional}).strict.optional,k.objectOf(r).optional],n=[k.typeOrArrayOf(r),k.any.optional,k.shape({prefix:e,suffix:e,urlSuffix:e,onlyPrefix:e,onlySuffix:e,url:e}).strict.optional];return{checkerFnChecker:r,getApiCheckInstanceCheckers:t,checkApiCheckApi:n}}var l=t(1),y=t(2),h=y.each,d=y.isError,v=y.t,g=y.arrayify,b=y.getCheckerDisplay,m=y.typeOf,O=y.getError,k=t(4),C=s();e.exports=n,e.exports.utils=y,e.exports.globalConfig={verbose:!1,disabled:!1};var j=n({output:{prefix:"apiCheck"}});e.exports.internalChecker=j,h(k,function(r,t){return e.exports[t]=r}),i.type="function with __apiCheckData property and `${function.type}` property"},function(e,r,t){"use strict";function n(e){function r(r){var t=r.toLowerCase();return b(function(e,n,o){return a(e)!==t?y(n,o,r):void 0},{type:r},e)}function t(){var r="Function",t=b(function(e,t,n){return"function"!==a(e)?y(t,n,r):void 0},{type:r},e);return t.withProperties=function(r){var t=m.objectOf(m.func)(r,"properties","apiCheck.func.withProperties");if(c(t))throw t;var n=m.shape(r,!0);return n.type.__apiCheckData.type="func.withProperties",b(function(e,r,t){var o=m.func(e,r,t);return c(o)?o:n(e,r,t)},{type:n.type,shortType:"func.withProperties"},e)},t}function n(){var r="Object",t="Object (null ok)",n=b(function(e,r,n){return"object"!==a(e)?y(r,n,t):void 0},{type:t},e),o=b(function(e,r,t){return null===e||c(n(e,r,t))?y(r,t,o.type):void 0},{type:r,nullOk:n},e);return o}function i(r){return b(function(e,t,n){return e instanceof r?void 0:y(t,n,r.name)},{type:r.name},e)}function v(r){var t={__apiCheckData:{optional:!1,type:"enum"},"enum":r},n="oneOf["+r.map(function(e){return o(e)}).join(", ")+"]";return b(function(e,t,o){return r.some(function(r){return r===e})?void 0:y(t,o,n)},{type:t,shortType:n},e)}function O(r){function t(e){return e&&e["short"]?o:r.map(function(r){return f(r,e)})}var n=r.map(function(e){return f(e,{"short":!0})}),o="oneOfType["+n.join(", ")+"]";return t.__apiCheckData={optional:!1,type:"oneOfType"},b(function(e,t,n){return r.some(function(r){return!c(r(e,t,n))})?void 0:y(t,n,o)},{type:t,shortType:o},e)}function k(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="arrayOf["+n+"]";return t.__apiCheckData={optional:!1,type:"arrayOf"},b(function(e,t,n){return c(m.array(e))||!e.every(function(e){return!c(r(e))})?y(t,n,o):void 0},{type:t,shortType:o},e)}function C(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="objectOf["+n+"]";return t.__apiCheckData={optional:!1,type:"objectOf"},b(function(e,t,n){var i=m.object(e,t,n);if(c(i))return i;var a=u(e,function(e,n){return c(r(e,n,t))?!1:void 0});return a?void 0:y(t,n,o)},{type:t,shortType:o},e)}function j(r){function t(e){return e&&e["short"]?o:f(r,e)}var n=f(r,{"short":!0}),o="typeOrArrayOf["+n+"]";return t.__apiCheckData={optional:!1,type:"typeOrArrayOf"},b(function(e,t,n,i){return c(m.oneOfType([r,m.arrayOf(r)])(e,t,n,i))?y(t,n,o):void 0},{type:t,shortType:o},e)}function x(){function r(r,t){function n(){function e(e,r,t,n,o){function a(t,n,o){"string"==typeof e[r]?e[r]+=o:e[r].__apiCheckData[t]=n}if(t||!o||n.isOptional){if(t){var u=n(i[r],r,null,i);c(u)&&a("error","THIS IS THE PROBLEM: "+u.message," <-- THIS IS THE PROBLEM: "+u.message)}}else{var p="ITEM";n.type&&n.type.__apiCheckData&&(p=n.type.__apiCheckData.type.toUpperCase()),a("missing","MISSING THIS "+p," <-- YOU ARE MISSING THIS")}}var t=void 0===arguments[0]?{}:arguments[0],n={},o=t.terse,i=t.obj,a=t.addHelpers,p=t.required;return u(r,function(r,t){var u=i&&i.hasOwnProperty(t),c=g(p)?!r.isOptional:p;o&&!u&&r.isOptional||(n[t]=f(r,{terse:o,obj:i&&i[t],required:c,addHelpers:a})),a&&e(n,t,u,r,c)}),n}function o(){return n.apply(void 0,arguments)}var i={};u(r,function(e,r){i[r]=f(e)}),n.__apiCheckData={strict:!1,optional:!1,type:"shape"};var a=b(function(e,n,o){var i=!t&&m.object(e,n,o);if(c(i))return i;var a=void 0;return o=o?o+(n?"/":""):"",n=n||"",u(r,function(r,t){return e.hasOwnProperty(t)||!r.isOptional?(a=r(e[t],t,""+o+n,e),!c(a)):void 0}),c(a)?a:void 0},{type:n,shortType:"shape"},e);return o.__apiCheckData=p(a.type.__apiCheckData),o.__apiCheckData.strict=!0,a.strict=b(function(e,t,n){var o=a(e,t,n);if(c(o))return o;var i=Object.keys(r),u=Object.keys(e).filter(function(e){return-1===i.indexOf(e)});return u.length?new Error(""+h(t,n)+" cannot have extra properties: "+d(u.join("`, `"))+".It is limited to "+d(i.join("`, `"))):void 0},{type:o,shortType:"strict shape"},e),a}function t(r,t,o){var i=d(t.join(", ")),a="if "+(r?"all of":"at least one of"),u="specified "+a+" these are not specified: "+i+" (otherwise it's optional)",p="requiredIfNot"+(r?".all":"")+"["+t.join(", ")+"}]",f=n(o,u,p);return b(function(e,n,i,a){var u=a&&a.hasOwnProperty(n),p=r?"every":"some",c=t[p](function(e){return a&&a.hasOwnProperty(e)});return c||u?u?o(e,n,i,a):void 0:y(n,i,f)},{type:f,notRequired:!0},e)}function n(e,r,t){function n(r){return r&&r["short"]?t:f(e)}return n.__apiCheckData={optional:!1,type:"ifNot",description:r},n}return r.ifNot=function(r,t){Array.isArray(r)||(r=[r]);var o=void 0;o=1===r.length?"specified only if "+r[0]+" is not specified":"specified only if none of the following are specified: ["+l(r,", ","and ")+"]";var i="ifNot["+r.join(", ")+"]",a=n(t,o,i);return b(function(e,n,o,i){var u=i&&i.hasOwnProperty(n),p=r.some(function(e){return i&&i.hasOwnProperty(e)});return u===p?y(n,o,a):u?t(e,n,o,i):void 0},{notRequired:!0,type:a,shortType:i},e)},r.onlyIf=function(r,t){r=s(r);var o=void 0;o=1===r.length?"specified only if "+r[0]+" is also specified":"specified only if all of the following are specified: ["+l(r,", ","and ")+"]";var i="onlyIf["+r.join(", ")+"]",a=n(t,o,i);return b(function(e,n,o,i){var u=r.every(function(e){return i.hasOwnProperty(e)});return u?t(e,n,o,i):y(n,o,a)},{type:a,shortType:i},e)},r.requiredIfNot=function(e,r){return Array.isArray(e)||(e=[e]),t(!1,e,r)},r.requiredIfNot.all=function(e,r){if(!Array.isArray(e))throw new Error("requiredIfNot.all must be passed an array");return t(!0,e,r)},r}function _(){var r="function arguments";return b(function(e,t,n){return Array.isArray(e)||c(m.object(e))||c(m.number(e.length))?y(t,n,r):void 0},{type:r},e)}function A(){return b(function(){},{type:"any"},e)}function w(){var r="null";return b(function(e,t,n){return null!==e?y(t,n,r):void 0},{type:r},e)}function T(r,t){var n="Range ("+r+" - "+t+")";return b(function(e,o,i){return"number"!=typeof e||r>e||e>t?y(o,i,n):void 0},{type:n},e)}function D(){var r="empty object";return b(function(e,t,n){return"object"!==a(e)||null===e||Object.keys(e).length?y(t,n,r):void 0},{type:r},e)}return{array:r("Array"),bool:r("Boolean"),number:r("Number"),string:r("String"),func:t(),object:n(),emptyObject:D(),instanceOf:i,oneOf:v,oneOfType:O,arrayOf:k,objectOf:C,typeOrArrayOf:j,range:T,shape:x(),args:_(),any:A(),"null":w()}}var o=t(1),i=t(2),a=i.typeOf,u=i.each,p=i.copy,f=i.getCheckerDisplay,c=i.isError,s=i.arrayify,l=i.list,y=i.getError,h=i.nAtL,d=i.t,v=i.checkerHelpers,g=i.undef,b=v.setupChecker,m=e.exports=n();e.exports.getCheckers=n}])});
//# sourceMappingURL=api-check.min.js.map
// angular-formly version 6.10.1 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("api-check")):"function"==typeof define&&define.amd?define(["angular","api-check"],t):"object"==typeof exports?exports.ngFormly=t(require("angular"),require("api-check")):e.ngFormly=t(e.angular,e.apiCheck)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e["default"]:e},r=o(n(8));e.exports=r},function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e["default"]:e},r=o(n(17));r.version||(r=window.angular),e.exports=r},function(e,t,n){"use strict";e.exports="https://github.com/formly-js/angular-formly/blob/6.10.1/other/ERRORS_AND_WARNINGS.md#"},function(e,t,n){"use strict";function o(e,t,n,o,r){return u.isFunction(t)?t(o,n,e,r):e.$eval(t,u.extend({$viewValue:o,$modelValue:n},r))}function r(e,t,n){if(t.id)return t.id;var o=t.type;return!o&&t.template?o="template":!o&&t.templateUrl&&(o="templateUrl"),[e,o,t.key,n].join("_")}function i(e){u.forEach(arguments,function(t,n){n&&u.forEach(t,function(t,n){u.isDefined(e[n])?a(e[n],t)&&i(e[n],t):e[n]=u.copy(t)})})}function a(e,t){return u.isObject(e)&&u.isObject(t)&&Object.getPrototypeOf(e)===Object.getPrototypeOf(t)}function s(e,t){if(e.prop||(e=u.element(e)),e.prop("nodeName")===t.toUpperCase())return e;for(var n=e.children(),o=0;n&&o<n.length;o++){var r=s(n[o],t);if(r)return r}}function l(e){return e&&!u.isArray(e)?e=[e]:e||(e=[]),e}function p(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){var e=arguments;t.forEach(function(t){return t.apply(null,e)})}}var f=function(e){return e&&e.__esModule?e["default"]:e},u=f(n(1));e.exports={formlyEval:o,getFieldId:r,reverseDeepMerge:i,findByNodeName:s,arrayify:l,extendFunction:p}},function(e,t,n){"use strict";function o(e,t){function n(e){return e&&angular.isFunction(e.then)}function o(e){var t=["expression","message"],n={};if(angular.forEach(e,function(e,o){if(!angular.isString(e)){var r=[];angular.forEach(e,function(e,n){-1===t.indexOf(n)&&r.push(n)}),r.length&&(n[o]=r)}}),Object.keys(n).length)throw new Error(["Validators are only allowed to be functions or objects that have "+t.join(", ")+".","You provided some extra properties: "+JSON.stringify(n)].join(" "))}return{restrict:"A",require:"ngModel",link:function(r,i,a,s){var l=r.options;l.validators&&o(l.validators),l.validation.messages=l.validation.messages||{},angular.forEach(l.validation.messages,function(t,n){l.validation.messages[n]=function(){return e.formlyEval(r,t,s.$modelValue,s.$viewValue)}});var p=s.hasOwnProperty("$validators")&&!a.hasOwnProperty("useParsers");angular.forEach(l.validators,function(o,i){function a(){var a=c?"$asyncValidators":"$validators";s[a][i]=function(i,a){var s=e.formlyEval(r,o,i,a);return c?n(s)?s:s?t.when(s):t.reject(s):s}}function f(){var t=void 0;s.$parsers.unshift(function(a){var l=e.formlyEval(r,o,s.$modelValue,a);return n(l)?(s.$pending=s.$pending||{},s.$pending[i]=!0,t=l,l.then(function(){t===l&&s.$setValidity(i,!0)})["catch"](function(){t===l&&s.$setValidity(i,!1)})["finally"](function(){1===Object.keys(s.$pending).length?delete s.$pending:delete s.$pending[i]})):s.$setValidity(i,l),a})}var u=o.message;u&&(l.validation.messages[i]=function(){return e.formlyEval(r,u,s.$modelValue,s.$viewValue)}),o=angular.isObject(o)?o.expression:o;var c=!angular.isString(o);p?a():f()})}}}e.exports=o,o.$inject=["formlyUtil","$q"]},function(e,t,n){"use strict";function o(e,t,n,o,r,a,s,l,p,f){function u(e,n,o,s){function p(){n(function(){var n=e.options,r=f();i.forEach(n.expressionProperties,function(i,a){var s=o(a).assign,p=t.when(l.formlyEval(e,i,r));p.then(function(e){s(n,e)})})})}function f(t){return e.model&&e.options.key?(i.isDefined(t)&&(e.model[e.options.key]=t),e.model[e.options.key]):void 0}function u(t){l.reverseDeepMerge(t,{data:{},templateOptions:{},validation:{}}),e.to=e.options.templateOptions}function c(){if(i.isFunction(r.extras.getFieldId))e.id=r.extras.getFieldId(e.options,e.model,e);else{var t=e.form&&e.form.$name||e.formId;e.id=l.getFieldId(t,e.options,e.index)}e.options.id=e.id}function d(){i.isDefined(e.options.defaultValue)&&!i.isDefined(e.model[e.options.key])&&(e.model[e.options.key]=e.options.defaultValue)}function y(){e.options.initialValue=e.model&&e.model[e.options.key]}function h(e,t){t&&v(e,t.defaultOptions);var n=k(e.optionsTypes).reverse();i.forEach(n,function(t){v(e,r.getType(t,!0,e).defaultOptions)})}function v(e,t){t&&(i.isFunction(t)&&(t=t(e)),l.reverseDeepMerge(e,t))}function g(e,t){var n=e.key||t||0;i.extend(e,{key:n,value:f,runExpressions:p,resetModel:x,updateInitialValue:w})}function b(e,t){t.model&&e.$watch("options.model",p,!0)}function x(){e.model[e.options.key]=e.options.initialValue,e.options.formControl&&(e.options.formControl.$setViewValue(e.model[e.options.key]),e.options.formControl.$render(),e.options.formControl.$setUntouched(),e.options.formControl.$setPristine())}function w(){e.options.initialValue=e.model[e.options.key]}function E(e){e.validation.messages=e.validation.messages||{},i.forEach(a.messages,function(t,n){e.validation.messages[n]||(e.validation.messages[n]=function(e,n,o){return l.formlyEval(o,t,n,e)})})}function $(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];i.forEach([n.controller,t.controller],function(t){t&&s(t,{$scope:e})})}function A(){e.options.options=e.options.options||{},e.options.options.formState=e.formState}if(e.options.fieldGroup)return void A();var C=m(e.options);u(e.options),h(e.options,C),g(e.options,e.index),O(e.options),c(),d(),y(),p(),b(e,e.options),E(e.options),$(e,e.options,C)}function c(e,o){function a(){x(e.options),o.addClass("formly-field-group");var t="";e.options.elementAttributes&&(t=Object.keys(e.options.elementAttributes).map(function(t){return""+t+'="'+e.options.elementAttributes[t]+'"'}).join(" "));var n="model";e.options.key&&(n="model['"+e.options.key+"']"),u('\n          <formly-form model="'+n+'"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="'+e.options.className+'"\n                       '+t+"\n                       is-field-group>\n          </formly-form>\n        ")}function s(){e.options.elementAttributes&&o.attr(e.options.elementAttributes)}function p(){e.options.className&&o.addClass(e.options.className),e.options.type&&o.addClass("formly-field-"+e.options.type)}function u(t){return o.html(d(t)),n(o.contents())(e),t}function c(t){function n(e){var t=/\{\{(.*?)}}/,n=t.exec(e);n?o(n[1]):a(e)}function o(t){e.$watch(t,function(e){e&&(p(),a(e))})}function a(t){p=e.$watch('form["'+t+'"]',function(t){t&&(e.fc=t,e.options.formControl=t,f(),s())})}function s(){f=e.$watch(function(){var t=r.extras.errorExistsAndShouldBeVisibleExpression,n=e.options,o=e.fc;if(o.$invalid){if("boolean"==typeof n.validation.show)return n.validation.show;if(t)return l.formlyEval(e,t,o.$modelValue,o.$viewValue);var a=i.isUndefined(o.$touched)&&o.$dirty;return e.fc.$touched||a}return!1},function(t){e.options.validation.errorExistsAndShouldBeVisible=t,e.showError=t})}var p=i.noop,f=i.noop;if(!e.options.noFormControl){var u=i.element("<div>"+t+"</div>"),c=u[0].querySelector("[ng-model],[data-ng-model]");c&&c.getAttribute("name")&&n(c.getAttribute("name"))}}function h(){b&&b.link&&b.link.apply(w,O),e.options.link&&e.options.link.apply(w,O)}function g(n){return function(o){var r=t.when(o);return i.forEach(n,function(n){r=r.then(function(o){return t.when(n(o,e.options,e)).then(function(e){return i.isString(e)?e:d(e)})})}),r}}if(e.options.fieldGroup)return void a();s(),p();var b=m(e.options),O=arguments,w=this;y(e.options).then(g(r.templateManipulators.preWrapper)).then(v(e.options)).then(g(r.templateManipulators.postWrapper)).then(u).then(c).then(h)["catch"](function(t){f("there-was-a-problem-setting-the-template-for-this-field","There was a problem setting the template for this field ",e.options,t)})}function d(e){var t=i.element("<a></a>");return t.append(e).html()}function m(e){return e.type&&r.getType(e.type)}function y(e){function t(t,n){return i.isDefined(e[t])?e[t]:n&&i.isDefined(n[t])?n[t]:void 0}var n=r.getType(e.type,!0,e),o=t("template",n),a=t("templateUrl",n);if(i.isUndefined(o)&&!a)throw p.getFieldError("type-type-has-no-template","Type '"+e.type+"' has not template. On element:",e);return h(a||o,i.isUndefined(o),e)}function h(n,r,a){var s=void 0;if(s=t.when(i.isFunction(n)?n(a):n),!r)return s;var l=function(){var t={cache:o};return{v:s.then(function(n){return e.get(n,t)}).then(function(e){return e.data})["catch"](function(e){f("problem-loading-template-for-templateurl","Problem loading template for "+n,e)})}}();return"object"==typeof l?l.v:void 0}function v(e){var n=b(e);return function(o){if(!n.length)return t.when(o);n.forEach(function(t){p.checkWrapper(t,e),t.validateOptions&&t.validateOptions(e),w(t,e)});var r=n.map(function(e){return h(e.template||e.templateUrl,!e.template)});return t.all(r).then(function(e){e.forEach(function(e,t){p.checkWrapperTemplate(e,n[t])}),e.reverse();var t=e.shift();return e.forEach(function(e){t=g(t,e)}),g(t,o)})}}function g(e,t){var n=i.element("<a></a>");n.append(e);var o=n.find("formly-transclude");return o.length||(o=l.findByNodeName(n,"formly-transclude")),o.replaceWith(t),n.html()}function b(e){var t=e.wrapper;if(null===t)return[];t=t?k(t).map(r.getWrapper):k(r.getWrapperByType(e.type));var n=r.getType(e.type,!0,e);if(n&&n.wrapper){var o=k(n.wrapper).map(r.getWrapper);t=t.concat(o)}var i=r.getWrapper();return i&&t.push(i),t}function O(e){s["throw"](s.formlyFieldOptions,e,{prefix:"formly-field directive",url:"formly-field-directive-validation-failed"});var t=e.type&&r.getType(e.type);t&&(t.validateOptions&&t.validateOptions(e),w(t,e))}function x(e){s["throw"](s.fieldGroup,e,{prefix:"formly-field directive",url:"formly-field-directive-validation-failed"})}function w(e,t){var n=e.apiCheck,o=e.apiCheckInstance,r=e.apiCheckFunction,i=e.apiCheckOptions;if(n){var a=o||s,l=r||"warn",p=a.shape(n);a[l](p,t,i||{prefix:"formly-field "+name,url:s.config.output.docsBaseUrl+"formly-field-type-apicheck-failed"})}}var k=l.arrayify;return u.$inject=["$scope","$timeout","$parse","$controller"],{restrict:"AE",transclude:!0,scope:{options:"=",model:"=",formId:"@",index:"=?",fields:"=?",formState:"=?",form:"=?"},controller:u,link:c}}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(1));e.exports=o,o.$inject=["$http","$q","$compile","$templateCache","formlyConfig","formlyValidationMessages","formlyApiCheck","formlyUtil","formlyUsability","formlyWarn"]},function(e,t,n){"use strict";function o(e,t){return{restrict:"A",link:function(n,o,r){var i=null,a=o[0],s=t[0];r.$observe("formlyFocus",function(t){"true"===t?e(function(){i=s.activeElement,a.focus()},~~r.focusWait):"false"===t&&s.activeElement===a&&(a.blur(),r.hasOwnProperty("refocus")&&i&&i.focus())})}}}e.exports=o,o.$inject=["$timeout","$document"]},function(e,t,n){"use strict";function o(e,t,n){function o(t,o){function r(){return o.rootEl||"ng-form"}function i(){return o.fieldRootEl||"div"}function a(){return o.hideDirective||n.extras.defaultHideDirective||"ng-if"}function l(){return o.trackBy?"track by "+o.trackBy:""}function f(){var t=y,n=o.bindName;if(n){if(s.version.minor<3)throw e.getFormlyError("bind-name attribute on formly-form not allowed in > angular 1.3");t="{{::'formly_' + "+n+"}}"}return t}function c(e){var t=["model","form","fields","options","name","role","class"],n=[];return s.forEach(e,function(e){var o=e.nodeName,r=e.nodeValue;"undefined"!==o&&-1===t.indexOf(o)&&n.push(""+p(o)+'="'+r+'"')}),n.join(" ")}var d=r(),m=i(),y="formly_"+u++,h="";return o.hasOwnProperty("isFieldGroup")&&t.parent().parent().hasClass("formly")&&(h=c(t.parent().parent()[0].attributes)),"\n        <"+d+' class="formly"\n                 name="'+f()+'"\n                 role="form" '+h+">\n          <"+m+' formly-field\n               ng-repeat="field in fields '+l()+'"\n               '+a()+'="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="'+f()+'"\n               form-state="options.formState"\n               index="$index">\n          </'+m+">\n          <div ng-transclude></div>\n        </"+d+">\n      "}function r(t,n,o){function r(){s.forEach(t.fields,function(e,n){var o=e.model||t.model;if(e.runExpressions&&e.runExpressions(o),e.hideExpression){var r=o[e.key];e.hide=g(e.hideExpression,r,e,n)}})}function l(){n["throw"]([n.formOptionsApi.optional],[t.options],{prefix:"formly-form options check"}),t.options=t.options||{},t.options.formState=t.options.formState||{},s.extend(t.options,{updateInitialValue:p,resetModel:u})}function p(){s.forEach(t.fields,function(e){f(e)?e.options.updateInitialValue():e.updateInitialValue()})}function u(){s.forEach(t.fields,function(e){f(e)?e.options.resetModel():e.resetModel()})}function c(n){if(s.isString(n.model)){var o=n.model,r=t.fields.indexOf(n);if(n.model=g(o,void 0,n,r),!n.model)throw e.getFieldError("field-model-must-be-initialized","Field model must be initialized. When specifying a model as a string for a field, the result of the expression must have been initialized ahead of time.",n)}}function d(e,t){f(e)||(e.key=e.key||t||0)}function m(n,o){if(!f(n)&&s.isDefined(n.watcher)){var r=n.watcher;s.isArray(r)||(r=[r]),s.forEach(r,function(r){if(!s.isDefined(r.listener))throw e.getFieldError("all-field-watchers-must-have-a-listener","All field watchers must have a listener",n);var i=y(r,n,o),a=h(r,n,o),l=r.type||"$watch";r.stopWatching=t[l](i,a,r.watchDeep)})}}function y(e,t,n){var o=e.expression||"model['"+t.key+"']";if(s.isFunction(o)){var r=o;o=function(){var t=v.apply(void 0,[e,n].concat(a.call(arguments)));return r.apply(void 0,i(t))},o.displayName="Formly Watch Expression for field for "+t.key}return o}function h(e,t,n){var o=e.listener;if(s.isFunction(o)){var r=o;o=function(){var t=v.apply(void 0,[e,n].concat(a.call(arguments)));return r.apply(void 0,i(t))},o.displayName="Formly Watch Listener for field for "+t.key}return o}function v(e,n){for(var o=arguments.length,r=Array(o>2?o-2:0),i=2;o>i;i++)r[i-2]=arguments[i];return[t.fields[n]].concat(r,[e.stopWatching])}function g(e,n,r,i){var a=b(r,i);return o.formlyEval(t,e,n,n,a)}function b(e,n){return{options:e,index:n,formState:t.options.formState,formId:t.formId}}l(),t.model=t.model||{},t.fields=t.fields||[],s.forEach(t.fields,c),s.forEach(t.fields,d),s.forEach(t.fields,m),t.$watch("model",r,!0),t.options.formState&&t.$watch("options.formState",r,!0)}function l(e,o,r){var i=r.name;e.formId=i,e.theFormlyForm=e[i],r.form&&t(r.form).assign(e.$parent,e[i]);var a=n.extras.removeChromeAutoComplete===!0,s=e.options&&e.options.removeChromeAutoComplete===!1,l=e.options&&e.options.removeChromeAutoComplete===!0;if(a&&!s||l){var p=document.createElement("input");p.setAttribute("autocomplete","address-level4"),p.setAttribute("hidden",!0),o[0].appendChild(p)}}function p(e){return e?e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()}):""}function f(e){return e&&!!e.fieldGroup}var u=1;return r.$inject=["$scope","formlyApiCheck","formlyUtil"],{restrict:"E",template:o,replace:!0,transclude:!0,scope:{fields:"=",model:"=",form:"=?",options:"=?"},controller:r,link:l}}var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},a=Array.prototype.slice,s=r(n(1));e.exports=o,o.$inject=["formlyUsability","$parse","formlyConfig"]},function(e,t,n){"use strict";var o=function(e){return e&&e.__esModule?e["default"]:e},r=o(n(1)),i=o(n(9)),a=o(n(2)),s=o(n(11)),l=o(n(10)),p=o(n(12)),f=o(n(15)),u=o(n(16)),c=o(n(4)),d=o(n(5)),m=o(n(6)),y=o(n(7)),h=o(n(14)),v=o(n(13)),g="formly";e.exports=g;var b=r.module(g,[]);b.constant("formlyApiCheck",i),b.constant("formlyErrorAndWarningsUrlPrefix",a),b.constant("formlyVersion","6.10.1"),b.provider("formlyUsability",s),b.provider("formlyConfig",l),b.factory("formlyValidationMessages",p),b.factory("formlyUtil",f),b.factory("formlyWarn",u),b.directive("formlyCustomValidation",c),b.directive("formlyField",d),b.directive("formlyFocus",m),b.directive("formlyForm",y),b.run(h),b.run(v)},function(e,t,n){"use strict";function o(e,t){function n(n,r,i,s){var l=s&&s.hasOwnProperty(r),p=e.some(function(e){return s&&s.hasOwnProperty(e)});return p||l?l?t(n,r,i,s):void 0:a.utils.getError(r,i,o)}angular.isArray(e)||(e=[e]);var o="specified if these are not specified: `"+e.join(", ")+"` (otherwise it's optional)";return n.type=o,a.utils.checkerHelpers.setupChecker(n)}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(18)),a=i({output:{prefix:"angular-formly:",docsBaseUrl:n(2)}}),s=a.oneOfType([a.string,a.func]),l=a.oneOfType([a.oneOf([null]),a.typeOrArrayOf(a.string)]),p=a.objectOf(a.func),f=a.shape.onlyIf("apiCheck",a.func.withProperties({warn:a.func,"throw":a.func,shape:a.func})),u=a.shape.onlyIf("apiCheck",a.oneOf(["throw","warn"])),c=a.shape({name:o("types",a.string).optional,template:a.shape.ifNot("templateUrl",a.string).optional,templateUrl:a.shape.ifNot("template",a.string).optional,types:a.typeOrArrayOf(a.string).optional,overwriteOk:a.bool.optional,validateOptions:a.func.optional,apiCheck:p.optional,apiCheckInstance:f.optional,apiCheckFunction:u.optional,apiCheckOptions:a.object.optional}).strict,d=a.objectOf(a.oneOfType([s,a.shape({expression:s,message:s.optional}).strict])),m=a.oneOfType([a.string,a.object]),y={$$hashKey:a.any.optional,type:a.shape.ifNot(["template","templateUrl"],a.string).optional,template:a.shape.ifNot(["type","templateUrl"],a.oneOfType([a.string,a.func])).optional,templateUrl:a.shape.ifNot(["type","template"],a.oneOfType([a.string,a.func])).optional,key:a.oneOfType([a.string,a.number]).optional,model:m.optional,className:a.string.optional,id:a.string.optional,expressionProperties:d.optional,data:a.object.optional,templateOptions:a.object.optional,wrapper:l.optional,modelOptions:a.shape({updateOn:a.string.optional,debounce:a.oneOfType([a.objectOf(a.number),a.number]).optional,allowInvalid:a.bool.optional,getterSetter:a.bool.optional,timezone:a.string.optional}).optional,watcher:a.typeOrArrayOf(a.shape({expression:s.optional,listener:s})).optional,validators:a.objectOf(a.oneOfType([s,a.shape({expression:s,message:s.optional}).strict])).optional,noFormControl:a.bool.optional,hide:a.bool.optional,hideExpression:s.optional,ngModelAttrs:a.objectOf(a.shape({expression:a.shape.ifNot(["value","attribute","bound"],a.any).optional,value:a.shape.ifNot("expression",a.any).optional,attribute:a.shape.ifNot("expression",a.any).optional,bound:a.shape.ifNot("expression",a.any).optional}).strict).optional,elementAttributes:a.objectOf(a.string).optional,optionsTypes:a.typeOrArrayOf(a.string).optional,link:a.func.optional,controller:a.oneOfType([a.string,a.func,a.array]).optional,validation:a.shape({show:a.oneOfType([a.bool,a.oneOf([null])]).optional,messages:a.objectOf(s).optional,errorExistsAndShouldBeVisible:a.bool.optional}).optional,formControl:a.object.optional,value:a.func.optional,runExpressions:a.func.optional,resetModel:a.func.optional,updateInitialValue:a.func.optional,initialValue:a.any.optional,defaultValue:a.any.optional},h=a.shape(y).strict,v=a.shape({formState:a.object.optional,resetModel:a.func.optional,updateInitialValue:a.func.optional,removeChromeAutoComplete:a.bool.optional}).strict,g=a.shape({$$hashKey:a.any.optional,key:a.oneOfType([a.string,a.number]).optional,fieldGroup:a.arrayOf(a.oneOfType([h,a.object])),className:a.string.optional,options:v.optional,hide:a.bool.optional,hideExpression:s.optional,model:m.optional,form:a.object.optional,elementAttributes:a.objectOf(a.string).optional}).strict,b=angular.copy(y);b.key=a.string.optional;var O=a.shape({name:a.string,template:a.shape.ifNot("templateUrl",a.oneOfType([a.string,a.func])).optional,templateUrl:a.shape.ifNot("template",a.oneOfType([a.string,a.func])).optional,controller:a.oneOfType([a.func,a.string,a.array]).optional,link:a.func.optional,defaultOptions:a.oneOfType([a.func,a.shape(b)]).optional,"extends":a.string.optional,wrapper:l.optional,data:a.object.optional,validateOptions:a.func.optional,apiCheck:p.optional,apiCheckInstance:f.optional,apiCheckFunction:u.optional,apiCheckOptions:a.object.optional,overwriteOk:a.bool.optional}).strict;angular.extend(a,{formlyTypeOptions:O,formlyFieldOptions:h,formlyExpression:s,formlyWrapperType:c,fieldGroup:g,formOptionsApi:v}),e.exports=a},function(e,t,n){"use strict";function o(e,t){function n(e){if(i.isArray(e))i.forEach(e,n);else{if(!i.isObject(e))throw F("You must provide an object or array for setType. You provided: "+JSON.stringify(arguments));o(e),e["extends"]&&r(e),$[e.name]=e}}function o(e){t["throw"](t.formlyTypeOptions,e,{prefix:"formlyConfig.setType",url:"settype-validation-failed"}),e.overwriteOk?e.overwriteOk=void 0:g(e.name,$,e,"types")}function r(e){var t=c(e["extends"],!0,e);l(e,t),p(e,t),f(e,t),u(e,t),a.reverseDeepMerge(e,t),s(e,t)}function s(e,t){e.template&&t.templateUrl?delete e.templateUrl:e.templateUrl&&t.template&&delete e.template}function l(e,t){var n=t.controller;if(i.isDefined(n)){var o=e.controller;i.isDefined(o)?(e.controller=function(e,t){t(n,{$scope:e}),t(o,{$scope:e})},e.controller.$inject=["$scope","$controller"]):e.controller=n}}function p(e,t){var n=t.link;if(i.isDefined(n)){var o=e.link;i.isDefined(o)?e.link=function(){n.apply(void 0,arguments),o.apply(void 0,arguments)}:e.link=n}}function f(e,t){var n=t.validateOptions;if(i.isDefined(n)){var o=e.validateOptions,r=e.defaultOptions;i.isDefined(o)?e.validateOptions=function(e){o(e);var t=i.copy(e),s=r;s&&(i.isFunction(s)&&(s=s(t)),a.reverseDeepMerge(t,s)),n(t)}:e.validateOptions=n}}function u(e,t){var n=t.defaultOptions;if(i.isDefined(n)){var o=e.defaultOptions,r=i.isFunction(o),s=i.isFunction(n);s?e.defaultOptions=function(e){var t=n(e),i={};a.reverseDeepMerge(i,e,t);var s=o;return r&&(s=s(i)),a.reverseDeepMerge(t,s),t}:r&&(e.defaultOptions=function(e){var t={};return a.reverseDeepMerge(t,e,n),o(t)})}}function c(e,t,n){if(!e)return void 0;var o=$[e];if(o||t!==!0)return o;throw F('There is no type by the name of "'+e+'": '+JSON.stringify(n))}function d(e,t){for(var n=!0;n;){n=!1;var o=e,r=t;if(i.isArray(o))return o.map(function(e){return d(e)});if(i.isObject(o))return o.types=m(o),o.name=y(o,r),h(o),A[o.name]=o,o;i.isString(o)&&(e={template:o,name:r},n=!0)}}function m(e){return i.isString(e.types)?[e.types]:i.isDefined(e.types)?e.types:[]}function y(e,t){return e.name||t||e.types.join(" ")||C}function h(t){e.checkWrapper(t),t.template&&e.checkWrapperTemplate(t.template,t),t.overwriteOk?delete t.overwriteOk:g(t.name,A,t,"templateWrappers"),v(t)}function v(e){var t=!i.isArray(e.types)||!e.types.every(i.isString);if(t)throw F("Attempted to create a template wrapper with types that is not a string or an array of strings")}function g(e,t,n,o){t.hasOwnProperty(e)&&k(["Attempting to overwrite "+e+" on "+o+" which is currently",""+JSON.stringify(t[e])+" with "+JSON.stringify(n),'To supress this warning, specify the property "overwriteOk: true"'].join(" "))}function b(e){return A[e||C]}function O(e){var t=[];for(var n in A)A.hasOwnProperty(n)&&A[n].types&&-1!==A[n].types.indexOf(e)&&t.push(A[n]);return t}function x(e){var t=A[e];return delete A[e],t}function w(e){var t=O(e);if(t)return i.isArray(t)?(t.forEach(function(e){return x(e.name)}),t):x(t.name)}function k(){j.disableWarnings||console.warn.apply(console,arguments)}var E=this,$={},A={},C="default",j=this,F=e.getFormlyError;i.extend(this,{setType:n,getType:c,setWrapper:d,getWrapper:b,getWrapperByType:O,removeWrapperByName:x,removeWrappersForType:w,disableWarnings:!1,extras:{disableNgModelAttrsManipulator:!1,ngModelAttrsManipulatorPreferUnbound:!1,removeChromeAutoComplete:!1,defaultHideDirective:"ng-if",getFieldId:null},templateManipulators:{preWrapper:[],postWrapper:[]},$get:function(){return E}})}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(1)),a=r(n(3));e.exports=o,o.$inject=["formlyUsabilityProvider","formlyApiCheck"]},function(e,t,n){"use strict";function o(e,t){function n(e,t,n){return arguments.length<3&&(n=t,t=e,e=null),new Error(r(e,t)+(" Field definition: "+i.toJson(n)))}function o(e,t){return t||(t=e,e=null),new Error(r(e,t))}function r(e,n){var o="";return null!==e&&(o=""+t+e),"Formly Error: "+n+". "+o}function a(t){e["throw"](e.formlyWrapperType,t,{prefix:"formlyConfig.setWrapper",urlSuffix:"setwrapper-validation-failed"})}function s(e,t){var n="<formly-transclude></formly-transclude>";if(-1===e.indexOf(n))throw o('Template wrapper templates must use "'+n+'" somewhere in them. This one does not have "<formly-transclude></formly-transclude>" in it: '+e+"\nAdditional information: "+JSON.stringify(t))}var l=this;i.extend(this,{getFormlyError:o,getFieldError:n,checkWrapper:a,checkWrapperTemplate:s,$get:function(){return l}})}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(1));e.exports=o,o.$inject=["formlyApiCheck","formlyErrorAndWarningsUrlPrefix"]},function(e,t,n){"use strict";function o(){function e(e,t,r,i,a){o.messages[e]=n(t,r,i,a)}function t(e,t){o.messages[e]=function(){return t}}function n(e,t,n,o){return function(r,i,a){return a.options.templateOptions[e]?""+t+" "+a.options.templateOptions[e]+" "+n:o}}var o={addTemplateOptionValueMessage:e,addStringMessage:t,messages:{}};return o}e.exports=o},function(e,t,n){"use strict";function o(e){e&&e.get&&!function(){var t=e.get(0),n=t.createElement("div");n.innerHTML="<!--[if lt IE 9]><i></i><![endif]-->";var o=1===n.getElementsByTagName("i").length;if(o){var r=["formly-field","formly-form","formly-custom-validation","formly-focus","formly-transpose"];angular.forEach(r,function(e){t.createElement(e)})}}()}e.exports=o,o.$inject=["$document"]},function(e,t,n){"use strict";function o(e){function t(e,t,a){function s(){(i.isDefined(t.validators)||i.isDefined(t.validation.messages))&&r(c,"formly-custom-validation","")}function l(){i.isDefined(t.modelOptions)&&(r(c,"ng-model-options","options.modelOptions"),t.modelOptions.getterSetter&&i.forEach(c,function(e){e.setAttribute("ng-model","options.value")}))}function p(){if(t.templateOptions||t.expressionProperties){var e=t.templateOptions||{},a=t.expressionProperties||{},s=n();i.extend(s,t.ngModelAttrs),i.forEach(s,function(n,s){var l=void 0,p=void 0,f="options.templateOptions['"+s+"']",u=e[s],d=o(a,s),m=i.isDefined(u),y=i.isDefined(d);if(n.value)p=n.value,l=s;else if(n.expression&&m)if(p=n.expression,i.isString(e[s]))l="$eval("+f+")";else{if(!i.isFunction(e[s]))throw new Error("options.templateOptions."+s+" must be a string or function: "+JSON.stringify(t));l=""+f+"(model[options.key], options, this, $event)"}else n.bound&&y?(p=n.bound,l=f):(n.attribute||n["boolean"])&&y?(p=n.attribute||n["boolean"],l="{{"+f+"}}"):n.attribute&&m?(p=n.attribute,l=u):n["boolean"]?m&&!y&&u&&(p=n["boolean"],l=!0):n.bound&&m&&(p=n.bound,l=f);i.isDefined(p)&&i.isDefined(l)&&r(c,p,l)})}}var f=document.createElement("div"),u=t.data;if(u.skipNgModelAttrsManipulator===!0)return e;f.innerHTML=e;var c=f.querySelectorAll("[ng-model], [data-ng-model]");return c&&c.length?(r(c,"id",a.id),r(c,"name",a.id),s(),l(),p(),f.innerHTML):e}function n(){var t={focus:{attribute:"formly-focus"}},n=[],o=["required","disabled"],r=["pattern","minlength"],a=["change","keydown","keyup","keypress","click","focus","blur"],s=["placeholder","min","max","tabindex","type"];return e.extras.ngModelAttrsManipulatorPreferUnbound?r.push("maxlength"):n.push("maxlength"),i.forEach(n,function(e){t[e]={bound:"ng-"+e}}),i.forEach(o,function(e){t[e]={"boolean":e,bound:"ng-"+e}}),i.forEach(r,function(e){t[e]={attribute:e,bound:"ng-"+e}}),i.forEach(a,function(e){var n="on"+e.substr(0,1).toUpperCase()+e.substr(1);t[n]={expression:"ng-"+e}}),i.forEach(s,function(e){t[e]={attribute:e}}),t}function o(e,t){return e["templateOptions."+t]||e["templateOptions['"+t+"']"]||e['templateOptions["'+t+'"]']}function r(e,t,n){i.forEach(e,function(e){e.getAttribute(t)||e.setAttribute(t,n)})}e.extras.disableNgModelAttrsManipulator||e.templateManipulators.preWrapper.push(t)}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(1));e.exports=o,o.$inject=["formlyConfig"]},function(e,t,n){"use strict";function o(){return i}var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(3));e.exports=o},function(e,t,n){"use strict";function o(e,t,n){return function(){if(!e.disableWarnings){var o=Array.prototype.slice.call(arguments),i=o.shift();o.unshift("Formly Warning:"),o.push(""+t+i),n.warn.apply(n,r(o))}}}var r=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};e.exports=o,o.$inject=["formlyConfig","formlyErrorAndWarningsUrlPrefix","$log"]},function(t,n,o){t.exports=e},function(e,n,o){e.exports=t}])});
//# sourceMappingURL=formly.min.js.map
// angular-formly-templates-material version 1.0.0-beta.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-formly"), require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular-formly", "api-check", "angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesMaterial"] = factory(require("angular-formly"), require("api-check"), require("angular"));
	else
		root["ngFormlyTemplatesMaterial"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ngModuleName = 'formlyMaterial';
	var angular = __webpack_require__(3);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(1), 'ngMaterial']);
	ngModule.constant('formlyMaterialApiCheck', __webpack_require__(2)({
	  output: {
	    prefix: 'angular-formly-material'
	  }
	}));
	ngModule.constant('formlyMaterialVersion', ("1.0.0-beta.0"));
	
	__webpack_require__(4)(ngModule);
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	
	exports['default'] = ngModuleName;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';
	
	var angular = __webpack_require__(7);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: 'materialLabel',
	      template: __webpack_require__(16),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: 'bootstrapHasError', template: __webpack_require__(17) }, {
	      name: 'mdInputContainer',
	      template: '\n          <md-input-container><formly-transclude></formly-transclude></md-input-container>\n        '
	    }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  __webpack_require__(8)(ngModule);
	  __webpack_require__(9)(ngModule);
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(11)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(13)(ngModule);
	};
	
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mdInputContainerFlex = __webpack_require__(25);
	
	var _mdInputContainerFlex2 = _interopRequireDefault(_mdInputContainerFlex);
	
	exports['default'] = function (ngModule) {
	  _mdInputContainerFlex2['default'](ngModule);
	};
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'checkbox',
	      template: __webpack_require__(18),
	      wrapper: ['bootstrapHasError'],
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'multiCheckbox',
	      template: __webpack_require__(19),
	      wrapper: ['materialLabel', 'bootstrapHasError'],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c,
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };
	
	        // initialize the checkboxes check property
	        var modelValue = $scope.model[opts.key];
	        if (angular.isArray(modelValue)) {
	          (function () {
	            var valueProp = to.valueProp || 'value';
	            angular.forEach(to.options, function (v, index) {
	              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
	            });
	          })();
	        }
	
	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
	            }
	          });
	        }
	      }]
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'input',
	      template: '<input ng-model="model[options.key]">',
	      wrapper: ['materialLabel', 'mdInputContainer'],
	      defaultOptions: {
	        ngModelAttrs: {
	          mdMaxlength: {
	            bound: 'md-maxlength'
	          }
	        }
	      }
	    });
	  }
	  addInputType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'radio',
	      template: __webpack_require__(20),
	      wrapper: ['materialLabel', 'bootstrapHasError'],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addRadioType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'select',
	      template: __webpack_require__(21),
	      wrapper: ['materialLabel', 'bootstrapHasError'],
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional,
	          groupProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addSelectType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'textarea',
	      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
	      wrapper: ['materialLabel', 'bootstrapHasError'],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: 'rows' },
	          cols: { attribute: 'cols' }
	        }
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          rows: c.number.optional,
	          cols: c.number.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addTextareaType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<label for=\"{{id}}\" class=\"control-label\">\n  {{to.label}}\n  {{to.required ? '*' : ''}}\n</label>\n<formly-transclude></formly-transclude>\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<select class=\"form-control\"\n        ng-model=\"model[options.key]\"\n        ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\">\n</select>\n"

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.run(addMdInputContainerFlexManipulator);
	
	  function addMdInputContainerFlexManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.postWrapper.push(function mdInputContainerFlex(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.flex)) {
	        var el = angular.element('<div>' + template + '</div>');
	        var mdInputContainer = el[0].querySelector('md-input-container');
	        console.log(mdInputContainer);
	        if (mdInputContainer) {
	          mdInputContainer.setAttribute('flex', options.templateOptions.flex);
	          return el;
	        } else {
	          return template;
	        }
	      } else {
	        return template;
	      }
	    });
	  }
	  addMdInputContainerFlexManipulator.$inject = ["formlyConfig"];
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZjk0ZDVmMWFiNWE5YTlmZmVjYyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9ydW4vbWRJbnB1dENvbnRhaW5lckZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQUN0QyxLQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQWUsQ0FBQyxDQUFDO0FBQ3pDLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxDQUFnQixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN6RixTQUFRLENBQUMsUUFBUSxDQUNmLHdCQUF3QixFQUN4QixtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDO0FBQ25CLFNBQU0sRUFBRTtBQUNOLFdBQU0sRUFBRSx5QkFBeUI7SUFDbEM7RUFDRixDQUFDLENBQ0gsQ0FBQztBQUNGLFNBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsZ0JBQU8sQ0FBQyxDQUFDOztBQUVwRCxvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFPLENBQUMsQ0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isb0JBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7c0JBRVosWUFBWTs7Ozs7OztBQ2pCM0IsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7O0FDRUEsS0FBSSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyxDQUFTLENBQUMsQ0FBQztBQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixVQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUMxQjtBQUNELE9BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDOzs7Ozs7Ozs7Ozs7c0JDTlQsa0JBQVEsRUFBSTtBQUN6QixXQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUU3QixZQUFTLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRTtBQUNqRSxTQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztBQUNqQyx5QkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FDOUI7QUFDRSxXQUFJLEVBQUUsZUFBZTtBQUNyQixlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFjLENBQUM7QUFDakMsZUFBUSxFQUFFO0FBQ1Isd0JBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGdCQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDZixtQkFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtVQUMxQixDQUFDO1FBQ0g7QUFDRCx1QkFBZ0IsRUFBRSxDQUFDO01BQ3BCLEVBQ0QsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBa0IsQ0FBQyxFQUFDLEVBQ2xFO0FBQ0UsV0FBSSxFQUFFLGtCQUFrQjtBQUN4QixlQUFRLDBHQUVQO01BQ0YsQ0FDRixDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7c0JDMUJjLGtCQUFRLEVBQUk7QUFDekIsc0JBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxzQkFBTyxDQUFDLENBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxzQkFBTyxDQUFDLEVBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLHNCQUFPLENBQUMsRUFBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isc0JBQU8sQ0FBQyxFQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixzQkFBTyxDQUFDLEVBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O2lEQ1BnQyxFQUF3Qjs7OztzQkFFMUMsa0JBQVEsRUFBSTtBQUN6QixxQ0FBcUIsUUFBUSxDQUFDLENBQUM7RUFDaEM7Ozs7Ozs7O0FDSkQsZ0Q7Ozs7Ozs7Ozs7OztzQkNBZSxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRWpDLFlBQVMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFO0FBQ3JFLFNBQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQ2pDLHlCQUFvQixDQUFDLE9BQU8sQ0FBQztBQUMzQixXQUFJLEVBQUUsVUFBVTtBQUNoQixlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFpQixDQUFDO0FBQ3BDLGNBQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0FBQzlCLGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixnQkFBSyxFQUFFLENBQUMsQ0FBQyxNQUFNO1VBQ2hCLENBQUM7UUFDSDtBQUNELHVCQUFnQixFQUFFLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7Ozs7Ozs7Ozs7Ozs7O3NCQ2pCYyxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRWpDLFlBQVMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFO0FBQ3JFLFNBQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQ2pDLHlCQUFvQixDQUFDLE9BQU8sQ0FBQztBQUMzQixXQUFJLEVBQUUsZUFBZTtBQUNyQixlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFzQixDQUFDO0FBQ3pDLGNBQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztBQUMvQyxxQkFBYyxFQUFFO0FBQ2Qsc0JBQWEsRUFBRSxLQUFLO1FBQ3JCO0FBQ0QsZUFBUSxFQUFFO0FBQ1Isd0JBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGtCQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzVCLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO0FBQzVCLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1VBQzdCLENBQUM7UUFDSDtBQUNELHVCQUFnQixFQUFFLENBQUM7QUFDbkIsaUJBQVUsaUJBQWtCLG9CQUFTLE1BQU0sRUFBRTtBQUMzQyxhQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3JCLGFBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDNUIsZUFBTSxDQUFDLGFBQWEsR0FBRztBQUNyQixrQkFBTyxFQUFFLEVBQUU7QUFDWCxpQkFBTSxFQUFFLFFBQVE7VUFDakIsQ0FBQzs7O0FBR0YsYUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsYUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFOztBQUMvQixpQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUM7QUFDMUMsb0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDN0MscUJBQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Y0FDL0UsQ0FBQyxDQUFDOztVQUNKOztBQUVELGtCQUFTLFFBQVEsR0FBRztBQUNsQixpQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzVCLGtCQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUSxFQUFFLEtBQUssRUFBSztBQUNqRSxpQkFBSSxRQUFRLEVBQUU7QUFDWixxQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ3pFO1lBQ0YsQ0FBQyxDQUFDO1VBQ0o7UUFDRjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0Y7Ozs7Ozs7Ozs7Ozs7OztzQkNoRGMsa0JBQVEsRUFBSTtBQUN6QixXQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUU5QixZQUFTLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtBQUMxQyx5QkFBb0IsQ0FBQyxPQUFPLENBQUM7QUFDM0IsV0FBSSxFQUFFLE9BQU87QUFDYixlQUFRLEVBQUUsdUNBQXVDO0FBQ2pELGNBQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztBQUM5QyxxQkFBYyxFQUFFO0FBQ2QscUJBQVksRUFBRTtBQUNaLHNCQUFXLEVBQUU7QUFDWCxrQkFBSyxFQUFFLGNBQWM7WUFDdEI7VUFDRjtRQUNGO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7Ozs7Ozs7Ozs7Ozs7O3NCQ2pCYyxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTlCLFlBQVMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFO0FBQ2xFLFNBQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQ2pDLHlCQUFvQixDQUFDLE9BQU8sQ0FBQztBQUMzQixXQUFJLEVBQUUsT0FBTztBQUNiLGVBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWMsQ0FBQztBQUNqQyxjQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7QUFDL0MscUJBQWMsRUFBRTtBQUNkLHNCQUFhLEVBQUUsS0FBSztRQUNyQjtBQUNELGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixrQkFBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7QUFDRCx1QkFBZ0IsRUFBRSxDQUFDO01BQ3BCLENBQUMsQ0FBQztJQUNKO0VBQ0Y7Ozs7Ozs7Ozs7Ozs7OztzQkN0QmUsa0JBQVEsRUFBSTtBQUMxQixXQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUUvQixZQUFTLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRTtBQUNuRSxTQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztBQUNqQyx5QkFBb0IsQ0FBQyxPQUFPLENBQUM7QUFDM0IsV0FBSSxFQUFFLFFBQVE7QUFDZCxlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFlLENBQUM7QUFDbEMsY0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO0FBQy9DLGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixrQkFBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7QUFDRCx1QkFBZ0IsRUFBRSxDQUFDO01BQ3BCLENBQUMsQ0FBQztJQUNKO0VBQ0Y7Ozs7Ozs7Ozs7Ozs7OztzQkNwQmUsa0JBQVEsRUFBSTtBQUMxQixXQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUVqQyxZQUFTLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRTtBQUNyRSxTQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztBQUNqQyx5QkFBb0IsQ0FBQyxPQUFPLENBQUM7QUFDM0IsV0FBSSxFQUFFLFVBQVU7QUFDaEIsZUFBUSxFQUFFLDBFQUEwRTtBQUNwRixjQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7QUFDL0MscUJBQWMsRUFBRTtBQUNkLHFCQUFZLEVBQUU7QUFDWixlQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0FBQ3pCLGVBQUksRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7VUFDMUI7UUFDRjtBQUNELGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixlQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO0FBQ3ZCLGVBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7VUFDeEIsQ0FBQztRQUNIO0FBQ0QsdUJBQWdCLEVBQUUsQ0FBQztNQUNwQixDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7OztBQ3hCRCxrQ0FBaUMsSUFBSSxpQ0FBaUMsVUFBVSxNQUFNLHdCQUF3QixzRDs7Ozs7O0FDQTlHLHlEQUF3RCx1QkFBdUIseUQ7Ozs7OztBQ0EvRSxxTEFBb0wsVUFBVSxRQUFRLHdCQUF3Qix1Qjs7Ozs7O0FDQTlOLHVMQUFzTCxrQkFBa0IseUhBQXlILGdDQUFnQyxtQzs7Ozs7O0FDQWpXLGlMQUFnTCxrQkFBa0IsbUpBQW1KLGdDQUFnQyxtQzs7Ozs7O0FDQXJYLHFROzs7Ozs7Ozs7Ozs7Ozs7c0JDQWUsa0JBQVEsRUFBSTtBQUN6QixXQUFRLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O0FBRWpELFlBQVMsa0NBQWtDLENBQUMsWUFBWSxFQUFFO0FBQ3hELGlCQUFZLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3pHLFdBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25ELGFBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLFdBQVMsUUFBUSxZQUFTLENBQUM7QUFDckQsYUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbkUsZ0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixhQUFJLGdCQUFnQixFQUFFO0FBQ3BCLDJCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRSxrQkFBTyxFQUFFLENBQUM7VUFDWCxNQUFNO0FBQ0wsa0JBQU8sUUFBUSxDQUFDO1VBQ2pCO1FBQ0YsTUFBTTtBQUNMLGdCQUFPLFFBQVEsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0YiLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLW1hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyb290W1wibmdGb3JtbHlcIl0sIHJvb3RbXCJhcGlDaGVja1wiXSwgcm9vdFtcImFuZ3VsYXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWY5NGQ1ZjFhYjVhOWE5ZmZlY2NcbiAqKi8iLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5TWF0ZXJpYWwnO1xuY29uc3QgYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci1maXgnKTtcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKSwgJ25nTWF0ZXJpYWwnXSk7XG5uZ01vZHVsZS5jb25zdGFudChcbiAgJ2Zvcm1seU1hdGVyaWFsQXBpQ2hlY2snLFxuICByZXF1aXJlKCdhcGktY2hlY2snKSh7XG4gICAgb3V0cHV0OiB7XG4gICAgICBwcmVmaXg6ICdhbmd1bGFyLWZvcm1seS1tYXRlcmlhbCdcbiAgICB9XG4gIH0pXG4pO1xubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seU1hdGVyaWFsVmVyc2lvbicsIFZFUlNJT04pO1xuXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xucmVxdWlyZSgnLi90eXBlcycpKG5nTW9kdWxlKTtcbnJlcXVpcmUoJy4vcnVuJykobmdNb2R1bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0Zvcm1seVwiLFwiYW1kXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanMyXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanNcIjpcImFuZ3VsYXItZm9ybWx5XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2FuZ3VsYXItZml4L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xuXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrKSB7XG4gICAgY29uc3QgYyA9IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtYXRlcmlhbExhYmVsJyxcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWwuaHRtbCcpLFxuICAgICAgICBhcGlDaGVjazoge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgICBsYWJlbDogYy5zdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogYy5ib29sLm9wdGlvbmFsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgICAgfSxcbiAgICAgIHtuYW1lOiAnYm9vdHN0cmFwSGFzRXJyb3InLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oYXMtZXJyb3IuaHRtbCcpfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21kSW5wdXRDb250YWluZXInLFxuICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+PC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICBdKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3dyYXBwZXJzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICByZXF1aXJlKCcuL2NoZWNrYm94JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vaW5wdXQnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vcmFkaW8nKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL3RleHRhcmVhJykobmdNb2R1bGUpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IG1kSW5wdXRDb250YWluZXJGbGV4IGZyb20gJy4vbWRJbnB1dENvbnRhaW5lckZsZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG1kSW5wdXRDb250YWluZXJGbGV4KG5nTW9kdWxlKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NoZWNrYm94Lmh0bWwnKSxcbiAgICAgIHdyYXBwZXI6IFsnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgbGFiZWw6IGMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvY2hlY2tib3guanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveC5odG1sJyksXG4gICAgICB3cmFwcGVyOiBbJ21hdGVyaWFsTGFiZWwnLCAnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBvcHRpb25zOiBjLmFycmF5T2YoYy5vYmplY3QpLFxuICAgICAgICAgIGxhYmVsUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgdmFsdWVQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGMsXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IHRvID0gJHNjb3BlLnRvO1xuICAgICAgICBjb25zdCBvcHRzID0gJHNjb3BlLm9wdGlvbnM7XG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICAgIGNoYW5nZTogc2V0TW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjaGVja2JveGVzIGNoZWNrIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XG4gICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vZGVsKCkge1xuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZCwgKGNoZWNrYm94LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICB0ZW1wbGF0ZTogJzxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPicsXG4gICAgICB3cmFwcGVyOiBbJ21hdGVyaWFsTGFiZWwnLCAnbWRJbnB1dENvbnRhaW5lciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XG4gICAgICAgICAgbWRNYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIGJvdW5kOiAnbWQtbWF4bGVuZ3RoJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFJhZGlvVHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhZGlvLmh0bWwnKSxcbiAgICAgIHdyYXBwZXI6IFsnbWF0ZXJpYWxMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWxlY3QuaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydtYXRlcmlhbExhYmVsJywgJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIGdyb3VwUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9zZWxlY3QuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkVGV4dGFyZWFUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRUZXh0YXJlYVR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seU1hdGVyaWFsQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwibW9kZWxbb3B0aW9ucy5rZXldXCI+PC90ZXh0YXJlYT4nLFxuICAgICAgd3JhcHBlcjogWydtYXRlcmlhbExhYmVsJywgJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxuICAgICAgICAgIGNvbHM6IHthdHRyaWJ1dGU6ICdjb2xzJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgcm93czogYy5udW1iZXIub3B0aW9uYWwsXG4gICAgICAgICAgY29sczogYy5udW1iZXIub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGFiZWwgZm9yPVxcXCJ7e2lkfX1cXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXG4gIHt7dG8ubGFiZWx9fVxcbiAge3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG48L2xhYmVsPlxcbjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2xhYmVsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8bGFiZWw+XFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+XFxuXFx0XFx0e3t0by5sYWJlbH19XFxuXFx0XFx0e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG4gIDxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxuICAgIDxsYWJlbD5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXG4gICAgICAgICAgICAgbmctbW9kZWw9XFxcIm11bHRpQ2hlY2tib3guY2hlY2tlZFskaW5kZXhdXFxcIlxcbiAgICAgICAgICAgICBuZy1jaGFuZ2U9XFxcIm11bHRpQ2hlY2tib3guY2hhbmdlKClcXFwiPlxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXG4gICAgPC9sYWJlbD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL211bHRpQ2hlY2tib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmFkaW8tZ3JvdXBcXFwiPlxcbiAgPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIj5cXG4gICAgPGxhYmVsPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcbiAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgbmctdmFsdWU9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ11cXFwiXFxuICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXG4gICAgPC9sYWJlbD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3JhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCI+XFxuPC9zZWxlY3Q+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvc2VsZWN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5ydW4oYWRkTWRJbnB1dENvbnRhaW5lckZsZXhNYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkTWRJbnB1dENvbnRhaW5lckZsZXhNYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIucHVzaChmdW5jdGlvbiBtZElucHV0Q29udGFpbmVyRmxleCh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5mbGV4KSkge1xuICAgICAgICBjb25zdCBlbCA9IGFuZ3VsYXIuZWxlbWVudChgPGRpdj4ke3RlbXBsYXRlfTwvZGl2PmApO1xuICAgICAgICBjb25zdCBtZElucHV0Q29udGFpbmVyID0gZWxbMF0ucXVlcnlTZWxlY3RvcignbWQtaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1kSW5wdXRDb250YWluZXIpO1xuICAgICAgICBpZiAobWRJbnB1dENvbnRhaW5lcikge1xuICAgICAgICAgIG1kSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdmbGV4Jywgb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuZmxleCk7XG4gICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL21kSW5wdXRDb250YWluZXJGbGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
/**
 * angular-strap
 * @version v2.2.4 - 2015-05-30
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 * http://mgcrea.github.io/angular-strap/
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap', [ 'mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.alert', 'mgcrea.ngStrap.button', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'mgcrea.ngStrap.timepicker', 'mgcrea.ngStrap.navbar', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix', 'mgcrea.ngStrap.tab', 'mgcrea.ngStrap.collapse' ]);
  angular.module('mgcrea.ngStrap.affix', [ 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.helpers.debounce' ]).provider('$affix', function() {
    var defaults = this.defaults = {
      offsetTop: 'auto',
      inlineStyles: true
    };
    this.$get = [ '$window', 'debounce', 'dimensions', function($window, debounce, dimensions) {
      var bodyEl = angular.element($window.document.body);
      var windowEl = angular.element($window);
      function AffixFactory(element, config) {
        var $affix = {};
        var options = angular.extend({}, defaults, config);
        var targetEl = options.target;
        var reset = 'affix affix-top affix-bottom', setWidth = false, initialAffixTop = 0, initialOffsetTop = 0, offsetTop = 0, offsetBottom = 0, affixed = null, unpin = null;
        var parent = element.parent();
        if (options.offsetParent) {
          if (options.offsetParent.match(/^\d+$/)) {
            for (var i = 0; i < options.offsetParent * 1 - 1; i++) {
              parent = parent.parent();
            }
          } else {
            parent = angular.element(options.offsetParent);
          }
        }
        $affix.init = function() {
          this.$parseOffsets();
          initialOffsetTop = dimensions.offset(element[0]).top + initialAffixTop;
          setWidth = !element[0].style.width;
          targetEl.on('scroll', this.checkPosition);
          targetEl.on('click', this.checkPositionWithEventLoop);
          windowEl.on('resize', this.$debouncedOnResize);
          this.checkPosition();
          this.checkPositionWithEventLoop();
        };
        $affix.destroy = function() {
          targetEl.off('scroll', this.checkPosition);
          targetEl.off('click', this.checkPositionWithEventLoop);
          windowEl.off('resize', this.$debouncedOnResize);
        };
        $affix.checkPositionWithEventLoop = function() {
          setTimeout($affix.checkPosition, 1);
        };
        $affix.checkPosition = function() {
          var scrollTop = getScrollTop();
          var position = dimensions.offset(element[0]);
          var elementHeight = dimensions.height(element[0]);
          var affix = getRequiredAffixClass(unpin, position, elementHeight);
          if (affixed === affix) return;
          affixed = affix;
          element.removeClass(reset).addClass('affix' + (affix !== 'middle' ? '-' + affix : ''));
          if (affix === 'top') {
            unpin = null;
            if (setWidth) {
              element.css('width', '');
            }
            if (options.inlineStyles) {
              element.css('position', options.offsetParent ? '' : 'relative');
              element.css('top', '');
            }
          } else if (affix === 'bottom') {
            if (options.offsetUnpin) {
              unpin = -(options.offsetUnpin * 1);
            } else {
              unpin = position.top - scrollTop;
            }
            if (setWidth) {
              element.css('width', '');
            }
            if (options.inlineStyles) {
              element.css('position', options.offsetParent ? '' : 'relative');
              element.css('top', options.offsetParent ? '' : bodyEl[0].offsetHeight - offsetBottom - elementHeight - initialOffsetTop + 'px');
            }
          } else {
            unpin = null;
            if (setWidth) {
              element.css('width', element[0].offsetWidth + 'px');
            }
            if (options.inlineStyles) {
              element.css('position', 'fixed');
              element.css('top', initialAffixTop + 'px');
            }
          }
        };
        $affix.$onResize = function() {
          $affix.$parseOffsets();
          $affix.checkPosition();
        };
        $affix.$debouncedOnResize = debounce($affix.$onResize, 50);
        $affix.$parseOffsets = function() {
          var initialPosition = element.css('position');
          if (options.inlineStyles) {
            element.css('position', options.offsetParent ? '' : 'relative');
          }
          if (options.offsetTop) {
            if (options.offsetTop === 'auto') {
              options.offsetTop = '+0';
            }
            if (options.offsetTop.match(/^[-+]\d+$/)) {
              initialAffixTop = -options.offsetTop * 1;
              if (options.offsetParent) {
                offsetTop = dimensions.offset(parent[0]).top + options.offsetTop * 1;
              } else {
                offsetTop = dimensions.offset(element[0]).top - dimensions.css(element[0], 'marginTop', true) + options.offsetTop * 1;
              }
            } else {
              offsetTop = options.offsetTop * 1;
            }
          }
          if (options.offsetBottom) {
            if (options.offsetParent && options.offsetBottom.match(/^[-+]\d+$/)) {
              offsetBottom = getScrollHeight() - (dimensions.offset(parent[0]).top + dimensions.height(parent[0])) + options.offsetBottom * 1 + 1;
            } else {
              offsetBottom = options.offsetBottom * 1;
            }
          }
          if (options.inlineStyles) {
            element.css('position', initialPosition);
          }
        };
        function getRequiredAffixClass(unpin, position, elementHeight) {
          var scrollTop = getScrollTop();
          var scrollHeight = getScrollHeight();
          if (scrollTop <= offsetTop) {
            return 'top';
          } else if (unpin !== null && scrollTop + unpin <= position.top) {
            return 'middle';
          } else if (offsetBottom !== null && position.top + elementHeight + initialAffixTop >= scrollHeight - offsetBottom) {
            return 'bottom';
          } else {
            return 'middle';
          }
        }
        function getScrollTop() {
          return targetEl[0] === $window ? $window.pageYOffset : targetEl[0].scrollTop;
        }
        function getScrollHeight() {
          return targetEl[0] === $window ? $window.document.body.scrollHeight : targetEl[0].scrollHeight;
        }
        $affix.init();
        return $affix;
      }
      return AffixFactory;
    } ];
  }).directive('bsAffix', [ '$affix', '$window', function($affix, $window) {
    return {
      restrict: 'EAC',
      require: '^?bsAffixTarget',
      link: function postLink(scope, element, attr, affixTarget) {
        var options = {
          scope: scope,
          target: affixTarget ? affixTarget.$element : angular.element($window)
        };
        angular.forEach([ 'offsetTop', 'offsetBottom', 'offsetParent', 'offsetUnpin', 'inlineStyles' ], function(key) {
          if (angular.isDefined(attr[key])) {
            var option = attr[key];
            if (/true/i.test(option)) option = true;
            if (/false/i.test(option)) option = false;
            options[key] = option;
          }
        });
        var affix = $affix(element, options);
        scope.$on('$destroy', function() {
          affix && affix.destroy();
          options = null;
          affix = null;
        });
      }
    };
  } ]).directive('bsAffixTarget', function() {
    return {
      controller: [ '$element', function($element) {
        this.$element = $element;
      } ]
    };
  });
  angular.module('mgcrea.ngStrap.alert', [ 'mgcrea.ngStrap.modal' ]).provider('$alert', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'alert',
      prefixEvent: 'alert',
      placement: null,
      template: 'alert/alert.tpl.html',
      container: false,
      element: null,
      backdrop: false,
      keyboard: true,
      show: true,
      duration: false,
      type: false,
      dismissable: true
    };
    this.$get = [ '$modal', '$timeout', function($modal, $timeout) {
      function AlertFactory(config) {
        var $alert = {};
        var options = angular.extend({}, defaults, config);
        $alert = $modal(options);
        $alert.$scope.dismissable = !!options.dismissable;
        if (options.type) {
          $alert.$scope.type = options.type;
        }
        var show = $alert.show;
        if (options.duration) {
          $alert.show = function() {
            show();
            $timeout(function() {
              $alert.hide();
            }, options.duration * 1e3);
          };
        }
        return $alert;
      }
      return AlertFactory;
    } ];
  }).directive('bsAlert', [ '$window', '$sce', '$alert', function($window, $sce, $alert) {
    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr, transclusion) {
        var options = {
          scope: scope,
          element: element,
          show: false
        };
        angular.forEach([ 'template', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'keyboard', 'html', 'container', 'dismissable' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        if (!scope.hasOwnProperty('title')) {
          scope.title = '';
        }
        angular.forEach([ 'title', 'content', 'type' ], function(key) {
          attr[key] && attr.$observe(key, function(newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
          });
        });
        attr.bsAlert && scope.$watch(attr.bsAlert, function(newValue, oldValue) {
          if (angular.isObject(newValue)) {
            angular.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
        }, true);
        var alert = $alert(options);
        element.on(attr.trigger || 'click', alert.toggle);
        scope.$on('$destroy', function() {
          if (alert) alert.destroy();
          options = null;
          alert = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.aside', [ 'mgcrea.ngStrap.modal' ]).provider('$aside', function() {
    var defaults = this.defaults = {
      animation: 'am-fade-and-slide-right',
      prefixClass: 'aside',
      prefixEvent: 'aside',
      placement: 'right',
      template: 'aside/aside.tpl.html',
      contentTemplate: false,
      container: false,
      element: null,
      backdrop: true,
      keyboard: true,
      html: false,
      show: true
    };
    this.$get = [ '$modal', function($modal) {
      function AsideFactory(config) {
        var $aside = {};
        var options = angular.extend({}, defaults, config);
        $aside = $modal(options);
        return $aside;
      }
      return AsideFactory;
    } ];
  }).directive('bsAside', [ '$window', '$sce', '$aside', function($window, $sce, $aside) {
    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr, transclusion) {
        var options = {
          scope: scope,
          element: element,
          show: false
        };
        angular.forEach([ 'template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'backdrop', 'keyboard', 'html', 'container' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        angular.forEach([ 'title', 'content' ], function(key) {
          attr[key] && attr.$observe(key, function(newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
          });
        });
        attr.bsAside && scope.$watch(attr.bsAside, function(newValue, oldValue) {
          if (angular.isObject(newValue)) {
            angular.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
        }, true);
        var aside = $aside(options);
        element.on(attr.trigger || 'click', aside.toggle);
        scope.$on('$destroy', function() {
          if (aside) aside.destroy();
          options = null;
          aside = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.button', []).provider('$button', function() {
    var defaults = this.defaults = {
      activeClass: 'active',
      toggleEvent: 'click'
    };
    this.$get = function() {
      return {
        defaults: defaults
      };
    };
  }).directive('bsCheckboxGroup', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function postLink(element, attr) {
        element.attr('data-toggle', 'buttons');
        element.removeAttr('ng-model');
        var children = element[0].querySelectorAll('input[type="checkbox"]');
        angular.forEach(children, function(child) {
          var childEl = angular.element(child);
          childEl.attr('bs-checkbox', '');
          childEl.attr('ng-model', attr.ngModel + '.' + childEl.attr('value'));
        });
      }
    };
  }).directive('bsCheckbox', [ '$button', '$$rAF', function($button, $$rAF) {
    var defaults = $button.defaults;
    var constantValueRegExp = /^(true|false|\d+)$/;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = defaults;
        var isInput = element[0].nodeName === 'INPUT';
        var activeElement = isInput ? element.parent() : element;
        var trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : true;
        if (constantValueRegExp.test(attr.trueValue)) {
          trueValue = scope.$eval(attr.trueValue);
        }
        var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : false;
        if (constantValueRegExp.test(attr.falseValue)) {
          falseValue = scope.$eval(attr.falseValue);
        }
        var hasExoticValues = typeof trueValue !== 'boolean' || typeof falseValue !== 'boolean';
        if (hasExoticValues) {
          controller.$parsers.push(function(viewValue) {
            return viewValue ? trueValue : falseValue;
          });
          controller.$formatters.push(function(modelValue) {
            return angular.equals(modelValue, trueValue);
          });
          scope.$watch(attr.ngModel, function(newValue, oldValue) {
            controller.$render();
          });
        }
        controller.$render = function() {
          var isActive = angular.equals(controller.$modelValue, trueValue);
          $$rAF(function() {
            if (isInput) element[0].checked = isActive;
            activeElement.toggleClass(options.activeClass, isActive);
          });
        };
        element.bind(options.toggleEvent, function() {
          scope.$apply(function() {
            if (!isInput) {
              controller.$setViewValue(!activeElement.hasClass('active'));
            }
            if (!hasExoticValues) {
              controller.$render();
            }
          });
        });
      }
    };
  } ]).directive('bsRadioGroup', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function postLink(element, attr) {
        element.attr('data-toggle', 'buttons');
        element.removeAttr('ng-model');
        var children = element[0].querySelectorAll('input[type="radio"]');
        angular.forEach(children, function(child) {
          angular.element(child).attr('bs-radio', '');
          angular.element(child).attr('ng-model', attr.ngModel);
        });
      }
    };
  }).directive('bsRadio', [ '$button', '$$rAF', function($button, $$rAF) {
    var defaults = $button.defaults;
    var constantValueRegExp = /^(true|false|\d+)$/;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = defaults;
        var isInput = element[0].nodeName === 'INPUT';
        var activeElement = isInput ? element.parent() : element;
        var value;
        attr.$observe('value', function(v) {
          value = constantValueRegExp.test(v) ? scope.$eval(v) : v;
          controller.$render();
        });
        controller.$render = function() {
          var isActive = angular.equals(controller.$modelValue, value);
          $$rAF(function() {
            if (isInput) element[0].checked = isActive;
            activeElement.toggleClass(options.activeClass, isActive);
          });
        };
        element.bind(options.toggleEvent, function() {
          scope.$apply(function() {
            controller.$setViewValue(value);
            controller.$render();
          });
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.collapse', []).provider('$collapse', function() {
    var defaults = this.defaults = {
      animation: 'am-collapse',
      disallowToggle: false,
      activeClass: 'in',
      startCollapsed: false,
      allowMultiple: false
    };
    var controller = this.controller = function($scope, $element, $attrs) {
      var self = this;
      self.$options = angular.copy(defaults);
      angular.forEach([ 'animation', 'disallowToggle', 'activeClass', 'startCollapsed', 'allowMultiple' ], function(key) {
        if (angular.isDefined($attrs[key])) self.$options[key] = $attrs[key];
      });
      var falseValueRegExp = /^(false|0|)$/i;
      angular.forEach([ 'disallowToggle', 'startCollapsed', 'allowMultiple' ], function(key) {
        if (angular.isDefined($attrs[key]) && falseValueRegExp.test($attrs[key])) self.$options[key] = false;
      });
      self.$toggles = [];
      self.$targets = [];
      self.$viewChangeListeners = [];
      self.$registerToggle = function(element) {
        self.$toggles.push(element);
      };
      self.$registerTarget = function(element) {
        self.$targets.push(element);
      };
      self.$unregisterToggle = function(element) {
        var index = self.$toggles.indexOf(element);
        self.$toggles.splice(index, 1);
      };
      self.$unregisterTarget = function(element) {
        var index = self.$targets.indexOf(element);
        self.$targets.splice(index, 1);
        if (self.$options.allowMultiple) {
          deactivateItem(element);
        }
        fixActiveItemIndexes(index);
        self.$viewChangeListeners.forEach(function(fn) {
          fn();
        });
      };
      self.$targets.$active = !self.$options.startCollapsed ? [ 0 ] : [];
      self.$setActive = $scope.$setActive = function(value) {
        if (angular.isArray(value)) {
          self.$targets.$active = value;
        } else if (!self.$options.disallowToggle) {
          isActive(value) ? deactivateItem(value) : activateItem(value);
        } else {
          activateItem(value);
        }
        self.$viewChangeListeners.forEach(function(fn) {
          fn();
        });
      };
      self.$activeIndexes = function() {
        return self.$options.allowMultiple ? self.$targets.$active : self.$targets.$active.length === 1 ? self.$targets.$active[0] : -1;
      };
      function fixActiveItemIndexes(index) {
        var activeIndexes = self.$targets.$active;
        for (var i = 0; i < activeIndexes.length; i++) {
          if (index < activeIndexes[i]) {
            activeIndexes[i] = activeIndexes[i] - 1;
          }
          if (activeIndexes[i] === self.$targets.length) {
            activeIndexes[i] = self.$targets.length - 1;
          }
        }
      }
      function isActive(value) {
        var activeItems = self.$targets.$active;
        return activeItems.indexOf(value) === -1 ? false : true;
      }
      function deactivateItem(value) {
        var index = self.$targets.$active.indexOf(value);
        if (index !== -1) {
          self.$targets.$active.splice(index, 1);
        }
      }
      function activateItem(value) {
        if (!self.$options.allowMultiple) {
          self.$targets.$active.splice(0, 1);
        }
        if (self.$targets.$active.indexOf(value) === -1) {
          self.$targets.$active.push(value);
        }
      }
    };
    this.$get = function() {
      var $collapse = {};
      $collapse.defaults = defaults;
      $collapse.controller = controller;
      return $collapse;
    };
  }).directive('bsCollapse', [ '$window', '$animate', '$collapse', function($window, $animate, $collapse) {
    var defaults = $collapse.defaults;
    return {
      require: [ '?ngModel', 'bsCollapse' ],
      controller: [ '$scope', '$element', '$attrs', $collapse.controller ],
      link: function postLink(scope, element, attrs, controllers) {
        var ngModelCtrl = controllers[0];
        var bsCollapseCtrl = controllers[1];
        if (ngModelCtrl) {
          bsCollapseCtrl.$viewChangeListeners.push(function() {
            ngModelCtrl.$setViewValue(bsCollapseCtrl.$activeIndexes());
          });
          ngModelCtrl.$formatters.push(function(modelValue) {
            if (angular.isArray(modelValue)) {
              bsCollapseCtrl.$setActive(modelValue);
            } else {
              var activeIndexes = bsCollapseCtrl.$activeIndexes();
              if (angular.isArray(activeIndexes)) {
                if (activeIndexes.indexOf(modelValue * 1) === -1) {
                  bsCollapseCtrl.$setActive(modelValue * 1);
                }
              } else if (activeIndexes !== modelValue * 1) {
                bsCollapseCtrl.$setActive(modelValue * 1);
              }
            }
            return modelValue;
          });
        }
      }
    };
  } ]).directive('bsCollapseToggle', function() {
    return {
      require: [ '^?ngModel', '^bsCollapse' ],
      link: function postLink(scope, element, attrs, controllers) {
        var ngModelCtrl = controllers[0];
        var bsCollapseCtrl = controllers[1];
        element.attr('data-toggle', 'collapse');
        bsCollapseCtrl.$registerToggle(element);
        scope.$on('$destroy', function() {
          bsCollapseCtrl.$unregisterToggle(element);
        });
        element.on('click', function() {
          var index = attrs.bsCollapseToggle || bsCollapseCtrl.$toggles.indexOf(element);
          bsCollapseCtrl.$setActive(index * 1);
          scope.$apply();
        });
      }
    };
  }).directive('bsCollapseTarget', [ '$animate', function($animate) {
    return {
      require: [ '^?ngModel', '^bsCollapse' ],
      link: function postLink(scope, element, attrs, controllers) {
        var ngModelCtrl = controllers[0];
        var bsCollapseCtrl = controllers[1];
        element.addClass('collapse');
        if (bsCollapseCtrl.$options.animation) {
          element.addClass(bsCollapseCtrl.$options.animation);
        }
        bsCollapseCtrl.$registerTarget(element);
        scope.$on('$destroy', function() {
          bsCollapseCtrl.$unregisterTarget(element);
        });
        function render() {
          var index = bsCollapseCtrl.$targets.indexOf(element);
          var active = bsCollapseCtrl.$activeIndexes();
          var action = 'removeClass';
          if (angular.isArray(active)) {
            if (active.indexOf(index) !== -1) {
              action = 'addClass';
            }
          } else if (index === active) {
            action = 'addClass';
          }
          $animate[action](element, bsCollapseCtrl.$options.activeClass);
        }
        bsCollapseCtrl.$viewChangeListeners.push(function() {
          render();
        });
        render();
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.datepicker', [ 'mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip' ]).provider('$datepicker', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'datepicker',
      placement: 'bottom-left',
      template: 'datepicker/datepicker.tpl.html',
      trigger: 'focus',
      container: false,
      keyboard: true,
      html: false,
      delay: 0,
      useNative: false,
      dateType: 'date',
      dateFormat: 'shortDate',
      timezone: null,
      modelDateFormat: null,
      dayFormat: 'dd',
      monthFormat: 'MMM',
      yearFormat: 'yyyy',
      monthTitleFormat: 'MMMM yyyy',
      yearTitleFormat: 'yyyy',
      strictFormat: false,
      autoclose: false,
      minDate: -Infinity,
      maxDate: +Infinity,
      startView: 0,
      minView: 0,
      startWeek: 0,
      daysOfWeekDisabled: '',
      iconLeft: 'glyphicon glyphicon-chevron-left',
      iconRight: 'glyphicon glyphicon-chevron-right'
    };
    this.$get = [ '$window', '$document', '$rootScope', '$sce', '$dateFormatter', 'datepickerViews', '$tooltip', '$timeout', function($window, $document, $rootScope, $sce, $dateFormatter, datepickerViews, $tooltip, $timeout) {
      var bodyEl = angular.element($window.document.body);
      var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
      var isTouch = 'createTouch' in $window.document && isNative;
      if (!defaults.lang) defaults.lang = $dateFormatter.getDefaultLocale();
      function DatepickerFactory(element, controller, config) {
        var $datepicker = $tooltip(element, angular.extend({}, defaults, config));
        var parentScope = config.scope;
        var options = $datepicker.$options;
        var scope = $datepicker.$scope;
        if (options.startView) options.startView -= options.minView;
        var pickerViews = datepickerViews($datepicker);
        $datepicker.$views = pickerViews.views;
        var viewDate = pickerViews.viewDate;
        scope.$mode = options.startView;
        scope.$iconLeft = options.iconLeft;
        scope.$iconRight = options.iconRight;
        var $picker = $datepicker.$views[scope.$mode];
        scope.$select = function(date) {
          $datepicker.select(date);
        };
        scope.$selectPane = function(value) {
          $datepicker.$selectPane(value);
        };
        scope.$toggleMode = function() {
          $datepicker.setMode((scope.$mode + 1) % $datepicker.$views.length);
        };
        $datepicker.update = function(date) {
          if (angular.isDate(date) && !isNaN(date.getTime())) {
            $datepicker.$date = date;
            $picker.update.call($picker, date);
          }
          $datepicker.$build(true);
        };
        $datepicker.updateDisabledDates = function(dateRanges) {
          options.disabledDateRanges = dateRanges;
          for (var i = 0, l = scope.rows.length; i < l; i++) {
            angular.forEach(scope.rows[i], $datepicker.$setDisabledEl);
          }
        };
        $datepicker.select = function(date, keep) {
          if (!angular.isDate(controller.$dateValue)) controller.$dateValue = new Date(date);
          if (!scope.$mode || keep) {
            controller.$setViewValue(angular.copy(date));
            controller.$render();
            if (options.autoclose && !keep) {
              $timeout(function() {
                $datepicker.hide(true);
              });
            }
          } else {
            angular.extend(viewDate, {
              year: date.getFullYear(),
              month: date.getMonth(),
              date: date.getDate()
            });
            $datepicker.setMode(scope.$mode - 1);
            $datepicker.$build();
          }
        };
        $datepicker.setMode = function(mode) {
          scope.$mode = mode;
          $picker = $datepicker.$views[scope.$mode];
          $datepicker.$build();
        };
        $datepicker.$build = function(pristine) {
          if (pristine === true && $picker.built) return;
          if (pristine === false && !$picker.built) return;
          $picker.build.call($picker);
        };
        $datepicker.$updateSelected = function() {
          for (var i = 0, l = scope.rows.length; i < l; i++) {
            angular.forEach(scope.rows[i], updateSelected);
          }
        };
        $datepicker.$isSelected = function(date) {
          return $picker.isSelected(date);
        };
        $datepicker.$setDisabledEl = function(el) {
          el.disabled = $picker.isDisabled(el.date);
        };
        $datepicker.$selectPane = function(value) {
          var steps = $picker.steps;
          var targetDate = new Date(Date.UTC(viewDate.year + (steps.year || 0) * value, viewDate.month + (steps.month || 0) * value, 1));
          angular.extend(viewDate, {
            year: targetDate.getUTCFullYear(),
            month: targetDate.getUTCMonth(),
            date: targetDate.getUTCDate()
          });
          $datepicker.$build();
        };
        $datepicker.$onMouseDown = function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          if (isTouch) {
            var targetEl = angular.element(evt.target);
            if (targetEl[0].nodeName.toLowerCase() !== 'button') {
              targetEl = targetEl.parent();
            }
            targetEl.triggerHandler('click');
          }
        };
        $datepicker.$onKeyDown = function(evt) {
          if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
          evt.preventDefault();
          evt.stopPropagation();
          if (evt.keyCode === 13) {
            if (!scope.$mode) {
              return $datepicker.hide(true);
            } else {
              return scope.$apply(function() {
                $datepicker.setMode(scope.$mode - 1);
              });
            }
          }
          $picker.onKeyDown(evt);
          parentScope.$digest();
        };
        function updateSelected(el) {
          el.selected = $datepicker.$isSelected(el.date);
        }
        function focusElement() {
          element[0].focus();
        }
        var _init = $datepicker.init;
        $datepicker.init = function() {
          if (isNative && options.useNative) {
            element.prop('type', 'date');
            element.css('-webkit-appearance', 'textfield');
            return;
          } else if (isTouch) {
            element.prop('type', 'text');
            element.attr('readonly', 'true');
            element.on('click', focusElement);
          }
          _init();
        };
        var _destroy = $datepicker.destroy;
        $datepicker.destroy = function() {
          if (isNative && options.useNative) {
            element.off('click', focusElement);
          }
          _destroy();
        };
        var _show = $datepicker.show;
        $datepicker.show = function() {
          _show();
          $timeout(function() {
            if (!$datepicker.$isShown) return;
            $datepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
            if (options.keyboard) {
              element.on('keydown', $datepicker.$onKeyDown);
            }
          }, 0, false);
        };
        var _hide = $datepicker.hide;
        $datepicker.hide = function(blur) {
          if (!$datepicker.$isShown) return;
          $datepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
          if (options.keyboard) {
            element.off('keydown', $datepicker.$onKeyDown);
          }
          _hide(blur);
        };
        return $datepicker;
      }
      DatepickerFactory.defaults = defaults;
      return DatepickerFactory;
    } ];
  }).directive('bsDatepicker', [ '$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$datepicker', function($window, $parse, $q, $dateFormatter, $dateParser, $datepicker) {
    var defaults = $datepicker.defaults;
    var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
    return {
      restrict: 'EAC',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = {
          scope: scope,
          controller: controller
        };
        angular.forEach([ 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'template', 'autoclose', 'dateType', 'dateFormat', 'timezone', 'modelDateFormat', 'dayFormat', 'strictFormat', 'startWeek', 'startDate', 'useNative', 'lang', 'startView', 'minView', 'iconLeft', 'iconRight', 'daysOfWeekDisabled', 'id', 'prefixClass', 'prefixEvent' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container', 'autoclose', 'useNative' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
          if (!datepicker || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(datepicker),?/i);
          newValue === true ? datepicker.show() : datepicker.hide();
        });
        var datepicker = $datepicker(element, controller, options);
        options = datepicker.$options;
        if (isNative && options.useNative) options.dateFormat = 'yyyy-MM-dd';
        var lang = options.lang;
        var formatDate = function(date, format) {
          return $dateFormatter.formatDate(date, format, lang);
        };
        var dateParser = $dateParser({
          format: options.dateFormat,
          lang: lang,
          strict: options.strictFormat
        });
        angular.forEach([ 'minDate', 'maxDate' ], function(key) {
          angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
            datepicker.$options[key] = dateParser.getDateForAttribute(key, newValue);
            !isNaN(datepicker.$options[key]) && datepicker.$build(false);
            validateAgainstMinMaxDate(controller.$dateValue);
          });
        });
        scope.$watch(attr.ngModel, function(newValue, oldValue) {
          datepicker.update(controller.$dateValue);
        }, true);
        function normalizeDateRanges(ranges) {
          if (!ranges || !ranges.length) return null;
          return ranges;
        }
        if (angular.isDefined(attr.disabledDates)) {
          scope.$watch(attr.disabledDates, function(disabledRanges, previousValue) {
            disabledRanges = normalizeDateRanges(disabledRanges);
            previousValue = normalizeDateRanges(previousValue);
            if (disabledRanges) {
              datepicker.updateDisabledDates(disabledRanges);
            }
          });
        }
        function validateAgainstMinMaxDate(parsedDate) {
          if (!angular.isDate(parsedDate)) return;
          var isMinValid = isNaN(datepicker.$options.minDate) || parsedDate.getTime() >= datepicker.$options.minDate;
          var isMaxValid = isNaN(datepicker.$options.maxDate) || parsedDate.getTime() <= datepicker.$options.maxDate;
          var isValid = isMinValid && isMaxValid;
          controller.$setValidity('date', isValid);
          controller.$setValidity('min', isMinValid);
          controller.$setValidity('max', isMaxValid);
          if (isValid) controller.$dateValue = parsedDate;
        }
        controller.$parsers.unshift(function(viewValue) {
          var date;
          if (!viewValue) {
            controller.$setValidity('date', true);
            return null;
          }
          var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
          if (!parsedDate || isNaN(parsedDate.getTime())) {
            controller.$setValidity('date', false);
            return;
          } else {
            validateAgainstMinMaxDate(parsedDate);
          }
          if (options.dateType === 'string') {
            date = dateParser.timezoneOffsetAdjust(parsedDate, options.timezone, true);
            return formatDate(date, options.modelDateFormat || options.dateFormat);
          }
          date = dateParser.timezoneOffsetAdjust(controller.$dateValue, options.timezone, true);
          if (options.dateType === 'number') {
            return date.getTime();
          } else if (options.dateType === 'unix') {
            return date.getTime() / 1e3;
          } else if (options.dateType === 'iso') {
            return date.toISOString();
          } else {
            return new Date(date);
          }
        });
        controller.$formatters.push(function(modelValue) {
          var date;
          if (angular.isUndefined(modelValue) || modelValue === null) {
            date = NaN;
          } else if (angular.isDate(modelValue)) {
            date = modelValue;
          } else if (options.dateType === 'string') {
            date = dateParser.parse(modelValue, null, options.modelDateFormat);
          } else if (options.dateType === 'unix') {
            date = new Date(modelValue * 1e3);
          } else {
            date = new Date(modelValue);
          }
          controller.$dateValue = dateParser.timezoneOffsetAdjust(date, options.timezone);
          return getDateFormattedString();
        });
        controller.$render = function() {
          element.val(getDateFormattedString());
        };
        function getDateFormattedString() {
          return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.dateFormat);
        }
        scope.$on('$destroy', function() {
          if (datepicker) datepicker.destroy();
          options = null;
          datepicker = null;
        });
      }
    };
  } ]).provider('datepickerViews', function() {
    var defaults = this.defaults = {
      dayFormat: 'dd',
      daySplit: 7
    };
    function split(arr, size) {
      var arrays = [];
      while (arr.length > 0) {
        arrays.push(arr.splice(0, size));
      }
      return arrays;
    }
    function mod(n, m) {
      return (n % m + m) % m;
    }
    this.$get = [ '$dateFormatter', '$dateParser', '$sce', function($dateFormatter, $dateParser, $sce) {
      return function(picker) {
        var scope = picker.$scope;
        var options = picker.$options;
        var lang = options.lang;
        var formatDate = function(date, format) {
          return $dateFormatter.formatDate(date, format, lang);
        };
        var dateParser = $dateParser({
          format: options.dateFormat,
          lang: lang,
          strict: options.strictFormat
        });
        var weekDaysMin = $dateFormatter.weekdaysShort(lang);
        var weekDaysLabels = weekDaysMin.slice(options.startWeek).concat(weekDaysMin.slice(0, options.startWeek));
        var weekDaysLabelsHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + '</th>');
        var startDate = picker.$date || (options.startDate ? dateParser.getDateForAttribute('startDate', options.startDate) : new Date());
        var viewDate = {
          year: startDate.getFullYear(),
          month: startDate.getMonth(),
          date: startDate.getDate()
        };
        var views = [ {
          format: options.dayFormat,
          split: 7,
          steps: {
            month: 1
          },
          update: function(date, force) {
            if (!this.built || force || date.getFullYear() !== viewDate.year || date.getMonth() !== viewDate.month) {
              angular.extend(viewDate, {
                year: picker.$date.getFullYear(),
                month: picker.$date.getMonth(),
                date: picker.$date.getDate()
              });
              picker.$build();
            } else if (date.getDate() !== viewDate.date || date.getDate() === 1) {
              viewDate.date = picker.$date.getDate();
              picker.$updateSelected();
            }
          },
          build: function() {
            var firstDayOfMonth = new Date(viewDate.year, viewDate.month, 1), firstDayOfMonthOffset = firstDayOfMonth.getTimezoneOffset();
            var firstDate = new Date(+firstDayOfMonth - mod(firstDayOfMonth.getDay() - options.startWeek, 7) * 864e5), firstDateOffset = firstDate.getTimezoneOffset();
            var today = dateParser.timezoneOffsetAdjust(new Date(), options.timezone).toDateString();
            if (firstDateOffset !== firstDayOfMonthOffset) firstDate = new Date(+firstDate + (firstDateOffset - firstDayOfMonthOffset) * 6e4);
            var days = [], day;
            for (var i = 0; i < 42; i++) {
              day = dateParser.daylightSavingAdjust(new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i));
              days.push({
                date: day,
                isToday: day.toDateString() === today,
                label: formatDate(day, this.format),
                selected: picker.$date && this.isSelected(day),
                muted: day.getMonth() !== viewDate.month,
                disabled: this.isDisabled(day)
              });
            }
            scope.title = formatDate(firstDayOfMonth, options.monthTitleFormat);
            scope.showLabels = true;
            scope.labels = weekDaysLabelsHtml;
            scope.rows = split(days, this.split);
            this.built = true;
          },
          isSelected: function(date) {
            return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth() && date.getDate() === picker.$date.getDate();
          },
          isDisabled: function(date) {
            var time = date.getTime();
            if (time < options.minDate || time > options.maxDate) return true;
            if (options.daysOfWeekDisabled.indexOf(date.getDay()) !== -1) return true;
            if (options.disabledDateRanges) {
              for (var i = 0; i < options.disabledDateRanges.length; i++) {
                if (time >= options.disabledDateRanges[i].start && time <= options.disabledDateRanges[i].end) {
                  return true;
                }
              }
            }
            return false;
          },
          onKeyDown: function(evt) {
            if (!picker.$date) {
              return;
            }
            var actualTime = picker.$date.getTime();
            var newDate;
            if (evt.keyCode === 37) newDate = new Date(actualTime - 1 * 864e5); else if (evt.keyCode === 38) newDate = new Date(actualTime - 7 * 864e5); else if (evt.keyCode === 39) newDate = new Date(actualTime + 1 * 864e5); else if (evt.keyCode === 40) newDate = new Date(actualTime + 7 * 864e5);
            if (!this.isDisabled(newDate)) picker.select(newDate, true);
          }
        }, {
          name: 'month',
          format: options.monthFormat,
          split: 4,
          steps: {
            year: 1
          },
          update: function(date, force) {
            if (!this.built || date.getFullYear() !== viewDate.year) {
              angular.extend(viewDate, {
                year: picker.$date.getFullYear(),
                month: picker.$date.getMonth(),
                date: picker.$date.getDate()
              });
              picker.$build();
            } else if (date.getMonth() !== viewDate.month) {
              angular.extend(viewDate, {
                month: picker.$date.getMonth(),
                date: picker.$date.getDate()
              });
              picker.$updateSelected();
            }
          },
          build: function() {
            var firstMonth = new Date(viewDate.year, 0, 1);
            var months = [], month;
            for (var i = 0; i < 12; i++) {
              month = new Date(viewDate.year, i, 1);
              months.push({
                date: month,
                label: formatDate(month, this.format),
                selected: picker.$isSelected(month),
                disabled: this.isDisabled(month)
              });
            }
            scope.title = formatDate(month, options.yearTitleFormat);
            scope.showLabels = false;
            scope.rows = split(months, this.split);
            this.built = true;
          },
          isSelected: function(date) {
            return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth();
          },
          isDisabled: function(date) {
            var lastDate = +new Date(date.getFullYear(), date.getMonth() + 1, 0);
            return lastDate < options.minDate || date.getTime() > options.maxDate;
          },
          onKeyDown: function(evt) {
            if (!picker.$date) {
              return;
            }
            var actualMonth = picker.$date.getMonth();
            var newDate = new Date(picker.$date);
            if (evt.keyCode === 37) newDate.setMonth(actualMonth - 1); else if (evt.keyCode === 38) newDate.setMonth(actualMonth - 4); else if (evt.keyCode === 39) newDate.setMonth(actualMonth + 1); else if (evt.keyCode === 40) newDate.setMonth(actualMonth + 4);
            if (!this.isDisabled(newDate)) picker.select(newDate, true);
          }
        }, {
          name: 'year',
          format: options.yearFormat,
          split: 4,
          steps: {
            year: 12
          },
          update: function(date, force) {
            if (!this.built || force || parseInt(date.getFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10)) {
              angular.extend(viewDate, {
                year: picker.$date.getFullYear(),
                month: picker.$date.getMonth(),
                date: picker.$date.getDate()
              });
              picker.$build();
            } else if (date.getFullYear() !== viewDate.year) {
              angular.extend(viewDate, {
                year: picker.$date.getFullYear(),
                month: picker.$date.getMonth(),
                date: picker.$date.getDate()
              });
              picker.$updateSelected();
            }
          },
          build: function() {
            var firstYear = viewDate.year - viewDate.year % (this.split * 3);
            var years = [], year;
            for (var i = 0; i < 12; i++) {
              year = new Date(firstYear + i, 0, 1);
              years.push({
                date: year,
                label: formatDate(year, this.format),
                selected: picker.$isSelected(year),
                disabled: this.isDisabled(year)
              });
            }
            scope.title = years[0].label + '-' + years[years.length - 1].label;
            scope.showLabels = false;
            scope.rows = split(years, this.split);
            this.built = true;
          },
          isSelected: function(date) {
            return picker.$date && date.getFullYear() === picker.$date.getFullYear();
          },
          isDisabled: function(date) {
            var lastDate = +new Date(date.getFullYear() + 1, 0, 0);
            return lastDate < options.minDate || date.getTime() > options.maxDate;
          },
          onKeyDown: function(evt) {
            if (!picker.$date) {
              return;
            }
            var actualYear = picker.$date.getFullYear(), newDate = new Date(picker.$date);
            if (evt.keyCode === 37) newDate.setYear(actualYear - 1); else if (evt.keyCode === 38) newDate.setYear(actualYear - 4); else if (evt.keyCode === 39) newDate.setYear(actualYear + 1); else if (evt.keyCode === 40) newDate.setYear(actualYear + 4);
            if (!this.isDisabled(newDate)) picker.select(newDate, true);
          }
        } ];
        return {
          views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
          viewDate: viewDate
        };
      };
    } ];
  });
  angular.module('mgcrea.ngStrap.dropdown', [ 'mgcrea.ngStrap.tooltip' ]).provider('$dropdown', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'dropdown',
      prefixEvent: 'dropdown',
      placement: 'bottom-left',
      template: 'dropdown/dropdown.tpl.html',
      trigger: 'click',
      container: false,
      keyboard: true,
      html: false,
      delay: 0
    };
    this.$get = [ '$window', '$rootScope', '$tooltip', '$timeout', function($window, $rootScope, $tooltip, $timeout) {
      var bodyEl = angular.element($window.document.body);
      var matchesSelector = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
      function DropdownFactory(element, config) {
        var $dropdown = {};
        var options = angular.extend({}, defaults, config);
        var scope = $dropdown.$scope = options.scope && options.scope.$new() || $rootScope.$new();
        $dropdown = $tooltip(element, options);
        var parentEl = element.parent();
        $dropdown.$onKeyDown = function(evt) {
          if (!/(38|40)/.test(evt.keyCode)) return;
          evt.preventDefault();
          evt.stopPropagation();
          var items = angular.element($dropdown.$element[0].querySelectorAll('li:not(.divider) a'));
          if (!items.length) return;
          var index;
          angular.forEach(items, function(el, i) {
            if (matchesSelector && matchesSelector.call(el, ':focus')) index = i;
          });
          if (evt.keyCode === 38 && index > 0) index--; else if (evt.keyCode === 40 && index < items.length - 1) index++; else if (angular.isUndefined(index)) index = 0;
          items.eq(index)[0].focus();
        };
        var show = $dropdown.show;
        $dropdown.show = function() {
          show();
          $timeout(function() {
            options.keyboard && $dropdown.$element && $dropdown.$element.on('keydown', $dropdown.$onKeyDown);
            bodyEl.on('click', onBodyClick);
          }, 0, false);
          parentEl.hasClass('dropdown') && parentEl.addClass('open');
        };
        var hide = $dropdown.hide;
        $dropdown.hide = function() {
          if (!$dropdown.$isShown) return;
          options.keyboard && $dropdown.$element && $dropdown.$element.off('keydown', $dropdown.$onKeyDown);
          bodyEl.off('click', onBodyClick);
          parentEl.hasClass('dropdown') && parentEl.removeClass('open');
          hide();
        };
        var destroy = $dropdown.destroy;
        $dropdown.destroy = function() {
          bodyEl.off('click', onBodyClick);
          destroy();
        };
        function onBodyClick(evt) {
          if (evt.target === element[0]) return;
          return evt.target !== element[0] && $dropdown.hide();
        }
        return $dropdown;
      }
      return DropdownFactory;
    } ];
  }).directive('bsDropdown', [ '$window', '$sce', '$dropdown', function($window, $sce, $dropdown) {
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr, transclusion) {
        var options = {
          scope: scope
        };
        angular.forEach([ 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'id' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        attr.bsDropdown && scope.$watch(attr.bsDropdown, function(newValue, oldValue) {
          scope.content = newValue;
        }, true);
        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
          if (!dropdown || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(dropdown),?/i);
          newValue === true ? dropdown.show() : dropdown.hide();
        });
        var dropdown = $dropdown(element, options);
        scope.$on('$destroy', function() {
          if (dropdown) dropdown.destroy();
          options = null;
          dropdown = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.helpers.dateFormatter', []).service('$dateFormatter', [ '$locale', 'dateFilter', function($locale, dateFilter) {
    this.getDefaultLocale = function() {
      return $locale.id;
    };
    this.getDatetimeFormat = function(format, lang) {
      return $locale.DATETIME_FORMATS[format] || format;
    };
    this.weekdaysShort = function(lang) {
      return $locale.DATETIME_FORMATS.SHORTDAY;
    };
    function splitTimeFormat(format) {
      return /(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(format).slice(1);
    }
    this.hoursFormat = function(timeFormat) {
      return splitTimeFormat(timeFormat)[0];
    };
    this.minutesFormat = function(timeFormat) {
      return splitTimeFormat(timeFormat)[2];
    };
    this.secondsFormat = function(timeFormat) {
      return splitTimeFormat(timeFormat)[4];
    };
    this.timeSeparator = function(timeFormat) {
      return splitTimeFormat(timeFormat)[1];
    };
    this.showSeconds = function(timeFormat) {
      return !!splitTimeFormat(timeFormat)[4];
    };
    this.showAM = function(timeFormat) {
      return !!splitTimeFormat(timeFormat)[5];
    };
    this.formatDate = function(date, format, lang, timezone) {
      return dateFilter(date, format, timezone);
    };
  } ]);
  angular.module('mgcrea.ngStrap.helpers.dateParser', []).provider('$dateParser', [ '$localeProvider', function($localeProvider) {
    function ParseDate() {
      this.year = 1970;
      this.month = 0;
      this.day = 1;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.milliseconds = 0;
    }
    ParseDate.prototype.setMilliseconds = function(value) {
      this.milliseconds = value;
    };
    ParseDate.prototype.setSeconds = function(value) {
      this.seconds = value;
    };
    ParseDate.prototype.setMinutes = function(value) {
      this.minutes = value;
    };
    ParseDate.prototype.setHours = function(value) {
      this.hours = value;
    };
    ParseDate.prototype.getHours = function() {
      return this.hours;
    };
    ParseDate.prototype.setDate = function(value) {
      this.day = value;
    };
    ParseDate.prototype.setMonth = function(value) {
      this.month = value;
    };
    ParseDate.prototype.setFullYear = function(value) {
      this.year = value;
    };
    ParseDate.prototype.fromDate = function(value) {
      this.year = value.getFullYear();
      this.month = value.getMonth();
      this.day = value.getDate();
      this.hours = value.getHours();
      this.minutes = value.getMinutes();
      this.seconds = value.getSeconds();
      this.milliseconds = value.getMilliseconds();
      return this;
    };
    ParseDate.prototype.toDate = function() {
      return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
    };
    var proto = ParseDate.prototype;
    function noop() {}
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function indexOfCaseInsensitive(array, value) {
      var len = array.length, str = value.toString().toLowerCase();
      for (var i = 0; i < len; i++) {
        if (array[i].toLowerCase() === str) {
          return i;
        }
      }
      return -1;
    }
    var defaults = this.defaults = {
      format: 'shortDate',
      strict: false
    };
    this.$get = [ '$locale', 'dateFilter', function($locale, dateFilter) {
      var DateParserFactory = function(config) {
        var options = angular.extend({}, defaults, config);
        var $dateParser = {};
        var regExpMap = {
          sss: '[0-9]{3}',
          ss: '[0-5][0-9]',
          s: options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
          mm: '[0-5][0-9]',
          m: options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
          HH: '[01][0-9]|2[0-3]',
          H: options.strict ? '1?[0-9]|2[0-3]' : '[01]?[0-9]|2[0-3]',
          hh: '[0][1-9]|[1][012]',
          h: options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
          a: 'AM|PM',
          EEEE: $locale.DATETIME_FORMATS.DAY.join('|'),
          EEE: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
          dd: '0[1-9]|[12][0-9]|3[01]',
          d: options.strict ? '[1-9]|[1-2][0-9]|3[01]' : '0?[1-9]|[1-2][0-9]|3[01]',
          MMMM: $locale.DATETIME_FORMATS.MONTH.join('|'),
          MMM: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          MM: '0[1-9]|1[012]',
          M: options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
          yyyy: '[1]{1}[0-9]{3}|[2]{1}[0-9]{3}',
          yy: '[0-9]{2}',
          y: options.strict ? '-?(0|[1-9][0-9]{0,3})' : '-?0*[0-9]{1,4}'
        };
        var setFnMap = {
          sss: proto.setMilliseconds,
          ss: proto.setSeconds,
          s: proto.setSeconds,
          mm: proto.setMinutes,
          m: proto.setMinutes,
          HH: proto.setHours,
          H: proto.setHours,
          hh: proto.setHours,
          h: proto.setHours,
          EEEE: noop,
          EEE: noop,
          dd: proto.setDate,
          d: proto.setDate,
          a: function(value) {
            var hours = this.getHours() % 12;
            return this.setHours(value.match(/pm/i) ? hours + 12 : hours);
          },
          MMMM: function(value) {
            return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.MONTH, value));
          },
          MMM: function(value) {
            return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.SHORTMONTH, value));
          },
          MM: function(value) {
            return this.setMonth(1 * value - 1);
          },
          M: function(value) {
            return this.setMonth(1 * value - 1);
          },
          yyyy: proto.setFullYear,
          yy: function(value) {
            return this.setFullYear(2e3 + 1 * value);
          },
          y: proto.setFullYear
        };
        var regex, setMap;
        $dateParser.init = function() {
          $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format;
          regex = regExpForFormat($dateParser.$format);
          setMap = setMapForFormat($dateParser.$format);
        };
        $dateParser.isValid = function(date) {
          if (angular.isDate(date)) return !isNaN(date.getTime());
          return regex.test(date);
        };
        $dateParser.parse = function(value, baseDate, format, timezone) {
          if (format) format = $locale.DATETIME_FORMATS[format] || format;
          if (angular.isDate(value)) value = dateFilter(value, format || $dateParser.$format, timezone);
          var formatRegex = format ? regExpForFormat(format) : regex;
          var formatSetMap = format ? setMapForFormat(format) : setMap;
          var matches = formatRegex.exec(value);
          if (!matches) return false;
          var date = baseDate && !isNaN(baseDate.getTime()) ? new ParseDate().fromDate(baseDate) : new ParseDate().fromDate(new Date(1970, 0, 1, 0));
          for (var i = 0; i < matches.length - 1; i++) {
            formatSetMap[i] && formatSetMap[i].call(date, matches[i + 1]);
          }
          var newDate = date.toDate();
          if (parseInt(date.day, 10) !== newDate.getDate()) {
            return false;
          }
          return newDate;
        };
        $dateParser.getDateForAttribute = function(key, value) {
          var date;
          if (value === 'today') {
            var today = new Date();
            date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (key === 'maxDate' ? 1 : 0), 0, 0, 0, key === 'minDate' ? 0 : -1);
          } else if (angular.isString(value) && value.match(/^".+"$/)) {
            date = new Date(value.substr(1, value.length - 2));
          } else if (isNumeric(value)) {
            date = new Date(parseInt(value, 10));
          } else if (angular.isString(value) && 0 === value.length) {
            date = key === 'minDate' ? -Infinity : +Infinity;
          } else {
            date = new Date(value);
          }
          return date;
        };
        $dateParser.getTimeForAttribute = function(key, value) {
          var time;
          if (value === 'now') {
            time = new Date().setFullYear(1970, 0, 1);
          } else if (angular.isString(value) && value.match(/^".+"$/)) {
            time = new Date(value.substr(1, value.length - 2)).setFullYear(1970, 0, 1);
          } else if (isNumeric(value)) {
            time = new Date(parseInt(value, 10)).setFullYear(1970, 0, 1);
          } else if (angular.isString(value) && 0 === value.length) {
            time = key === 'minTime' ? -Infinity : +Infinity;
          } else {
            time = $dateParser.parse(value, new Date(1970, 0, 1, 0));
          }
          return time;
        };
        $dateParser.daylightSavingAdjust = function(date) {
          if (!date) {
            return null;
          }
          date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
          return date;
        };
        $dateParser.timezoneOffsetAdjust = function(date, timezone, undo) {
          if (!date) {
            return null;
          }
          if (timezone && timezone === 'UTC') {
            date = new Date(date.getTime());
            date.setMinutes(date.getMinutes() + (undo ? -1 : 1) * date.getTimezoneOffset());
          }
          return date;
        };
        function setMapForFormat(format) {
          var keys = Object.keys(setFnMap), i;
          var map = [], sortedMap = [];
          var clonedFormat = format;
          for (i = 0; i < keys.length; i++) {
            if (format.split(keys[i]).length > 1) {
              var index = clonedFormat.search(keys[i]);
              format = format.split(keys[i]).join('');
              if (setFnMap[keys[i]]) {
                map[index] = setFnMap[keys[i]];
              }
            }
          }
          angular.forEach(map, function(v) {
            if (v) sortedMap.push(v);
          });
          return sortedMap;
        }
        function escapeReservedSymbols(text) {
          return text.replace(/\//g, '[\\/]').replace('/-/g', '[-]').replace(/\./g, '[.]').replace(/\\s/g, '[\\s]');
        }
        function regExpForFormat(format) {
          var keys = Object.keys(regExpMap), i;
          var re = format;
          for (i = 0; i < keys.length; i++) {
            re = re.split(keys[i]).join('${' + i + '}');
          }
          for (i = 0; i < keys.length; i++) {
            re = re.split('${' + i + '}').join('(' + regExpMap[keys[i]] + ')');
          }
          format = escapeReservedSymbols(format);
          return new RegExp('^' + re + '$', [ 'i' ]);
        }
        $dateParser.init();
        return $dateParser;
      };
      return DateParserFactory;
    } ];
  } ]);
  angular.module('mgcrea.ngStrap.helpers.debounce', []).factory('debounce', [ '$timeout', function($timeout) {
    return function(func, wait, immediate) {
      var timeout = null;
      return function() {
        var context = this, args = arguments, callNow = immediate && !timeout;
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(function later() {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        }, wait, false);
        if (callNow) {
          func.apply(context, args);
        }
        return timeout;
      };
    };
  } ]).factory('throttle', [ '$timeout', function($timeout) {
    return function(func, wait, options) {
      var timeout = null;
      options || (options = {});
      return function() {
        var context = this, args = arguments;
        if (!timeout) {
          if (options.leading !== false) {
            func.apply(context, args);
          }
          timeout = $timeout(function later() {
            timeout = null;
            if (options.trailing !== false) {
              func.apply(context, args);
            }
          }, wait, false);
        }
      };
    };
  } ]);
  angular.module('mgcrea.ngStrap.helpers.dimensions', []).factory('dimensions', [ '$document', '$window', function($document, $window) {
    var jqLite = angular.element;
    var fn = {};
    var nodeName = fn.nodeName = function(element, name) {
      return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
    };
    fn.css = function(element, prop, extra) {
      var value;
      if (element.currentStyle) {
        value = element.currentStyle[prop];
      } else if (window.getComputedStyle) {
        value = window.getComputedStyle(element)[prop];
      } else {
        value = element.style[prop];
      }
      return extra === true ? parseFloat(value) || 0 : value;
    };
    fn.offset = function(element) {
      var boxRect = element.getBoundingClientRect();
      var docElement = element.ownerDocument;
      return {
        width: boxRect.width || element.offsetWidth,
        height: boxRect.height || element.offsetHeight,
        top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
        left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
      };
    };
    fn.setOffset = function(element, options, i) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = fn.css(element, 'position'), curElem = angular.element(element), props = {};
      if (position === 'static') {
        element.style.position = 'relative';
      }
      curOffset = fn.offset(element);
      curCSSTop = fn.css(element, 'top');
      curCSSLeft = fn.css(element, 'left');
      calculatePosition = (position === 'absolute' || position === 'fixed') && (curCSSTop + curCSSLeft).indexOf('auto') > -1;
      if (calculatePosition) {
        curPosition = fn.position(element);
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (angular.isFunction(options)) {
        options = options.call(element, i, curOffset);
      }
      if (options.top !== null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left !== null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ('using' in options) {
        options.using.call(curElem, props);
      } else {
        curElem.css({
          top: props.top + 'px',
          left: props.left + 'px'
        });
      }
    };
    fn.position = function(element) {
      var offsetParentRect = {
        top: 0,
        left: 0
      }, offsetParentElement, offset;
      if (fn.css(element, 'position') === 'fixed') {
        offset = element.getBoundingClientRect();
      } else {
        offsetParentElement = offsetParent(element);
        offset = fn.offset(element);
        if (!nodeName(offsetParentElement, 'html')) {
          offsetParentRect = fn.offset(offsetParentElement);
        }
        offsetParentRect.top += fn.css(offsetParentElement, 'borderTopWidth', true);
        offsetParentRect.left += fn.css(offsetParentElement, 'borderLeftWidth', true);
      }
      return {
        width: element.offsetWidth,
        height: element.offsetHeight,
        top: offset.top - offsetParentRect.top - fn.css(element, 'marginTop', true),
        left: offset.left - offsetParentRect.left - fn.css(element, 'marginLeft', true)
      };
    };
    var offsetParent = function offsetParentElement(element) {
      var docElement = element.ownerDocument;
      var offsetParent = element.offsetParent || docElement;
      if (nodeName(offsetParent, '#document')) return docElement.documentElement;
      while (offsetParent && !nodeName(offsetParent, 'html') && fn.css(offsetParent, 'position') === 'static') {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docElement.documentElement;
    };
    fn.height = function(element, outer) {
      var value = element.offsetHeight;
      if (outer) {
        value += fn.css(element, 'marginTop', true) + fn.css(element, 'marginBottom', true);
      } else {
        value -= fn.css(element, 'paddingTop', true) + fn.css(element, 'paddingBottom', true) + fn.css(element, 'borderTopWidth', true) + fn.css(element, 'borderBottomWidth', true);
      }
      return value;
    };
    fn.width = function(element, outer) {
      var value = element.offsetWidth;
      if (outer) {
        value += fn.css(element, 'marginLeft', true) + fn.css(element, 'marginRight', true);
      } else {
        value -= fn.css(element, 'paddingLeft', true) + fn.css(element, 'paddingRight', true) + fn.css(element, 'borderLeftWidth', true) + fn.css(element, 'borderRightWidth', true);
      }
      return value;
    };
    return fn;
  } ]);
  angular.module('mgcrea.ngStrap.helpers.parseOptions', []).provider('$parseOptions', function() {
    var defaults = this.defaults = {
      regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
    };
    this.$get = [ '$parse', '$q', function($parse, $q) {
      function ParseOptionsFactory(attr, config) {
        var $parseOptions = {};
        var options = angular.extend({}, defaults, config);
        $parseOptions.$values = [];
        var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;
        $parseOptions.init = function() {
          $parseOptions.$match = match = attr.match(options.regexp);
          displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], 
          groupByFn = $parse(match[3] || ''), valueFn = $parse(match[2] ? match[1] : valueName), 
          valuesFn = $parse(match[7]);
        };
        $parseOptions.valuesFn = function(scope, controller) {
          return $q.when(valuesFn(scope, controller)).then(function(values) {
            $parseOptions.$values = values ? parseValues(values, scope) : {};
            return $parseOptions.$values;
          });
        };
        $parseOptions.displayValue = function(modelValue) {
          var scope = {};
          scope[valueName] = modelValue;
          return displayFn(scope);
        };
        function parseValues(values, scope) {
          return values.map(function(match, index) {
            var locals = {}, label, value;
            locals[valueName] = match;
            label = displayFn(scope, locals);
            value = valueFn(scope, locals);
            return {
              label: label,
              value: value,
              index: index
            };
          });
        }
        $parseOptions.init();
        return $parseOptions;
      }
      return ParseOptionsFactory;
    } ];
  });
  angular.version.minor < 3 && angular.version.dot < 14 && angular.module('ng').factory('$$rAF', [ '$window', '$timeout', function($window, $timeout) {
    var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;
    var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.mozCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
    var rafSupported = !!requestAnimationFrame;
    var raf = rafSupported ? function(fn) {
      var id = requestAnimationFrame(fn);
      return function() {
        cancelAnimationFrame(id);
      };
    } : function(fn) {
      var timer = $timeout(fn, 16.66, false);
      return function() {
        $timeout.cancel(timer);
      };
    };
    raf.supported = rafSupported;
    return raf;
  } ]);
  angular.module('mgcrea.ngStrap.modal', [ 'mgcrea.ngStrap.helpers.dimensions' ]).provider('$modal', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      backdropAnimation: 'am-fade',
      prefixClass: 'modal',
      prefixEvent: 'modal',
      placement: 'top',
      template: 'modal/modal.tpl.html',
      contentTemplate: false,
      container: false,
      element: null,
      backdrop: true,
      keyboard: true,
      html: false,
      show: true
    };
    this.$get = [ '$window', '$rootScope', '$compile', '$q', '$templateCache', '$http', '$animate', '$timeout', '$sce', 'dimensions', function($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $timeout, $sce, dimensions) {
      var forEach = angular.forEach;
      var trim = String.prototype.trim;
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      var bodyElement = angular.element($window.document.body);
      var htmlReplaceRegExp = /ng-bind="/gi;
      function ModalFactory(config) {
        var $modal = {};
        var options = $modal.$options = angular.extend({}, defaults, config);
        $modal.$promise = fetchTemplate(options.template);
        var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();
        if (!options.element && !options.container) {
          options.container = 'body';
        }
        $modal.$id = options.id || options.element && options.element.attr('id') || '';
        forEach([ 'title', 'content' ], function(key) {
          if (options[key]) scope[key] = $sce.trustAsHtml(options[key]);
        });
        scope.$hide = function() {
          scope.$$postDigest(function() {
            $modal.hide();
          });
        };
        scope.$show = function() {
          scope.$$postDigest(function() {
            $modal.show();
          });
        };
        scope.$toggle = function() {
          scope.$$postDigest(function() {
            $modal.toggle();
          });
        };
        $modal.$isShown = scope.$isShown = false;
        if (options.contentTemplate) {
          $modal.$promise = $modal.$promise.then(function(template) {
            var templateEl = angular.element(template);
            return fetchTemplate(options.contentTemplate).then(function(contentTemplate) {
              var contentEl = findElement('[ng-bind="content"]', templateEl[0]).removeAttr('ng-bind').html(contentTemplate);
              if (!config.template) contentEl.next().remove();
              return templateEl[0].outerHTML;
            });
          });
        }
        var modalLinker, modalElement;
        var backdropElement = angular.element('<div class="' + options.prefixClass + '-backdrop"/>');
        backdropElement.css({
          position: 'fixed',
          top: '0px',
          left: '0px',
          bottom: '0px',
          right: '0px',
          'z-index': 1038
        });
        $modal.$promise.then(function(template) {
          if (angular.isObject(template)) template = template.data;
          if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
          template = trim.apply(template);
          modalLinker = $compile(template);
          $modal.init();
        });
        $modal.init = function() {
          if (options.show) {
            scope.$$postDigest(function() {
              $modal.show();
            });
          }
        };
        $modal.destroy = function() {
          if (modalElement) {
            modalElement.remove();
            modalElement = null;
          }
          if (backdropElement) {
            backdropElement.remove();
            backdropElement = null;
          }
          scope.$destroy();
        };
        $modal.show = function() {
          if ($modal.$isShown) return;
          var parent, after;
          if (angular.isElement(options.container)) {
            parent = options.container;
            after = options.container[0].lastChild ? angular.element(options.container[0].lastChild) : null;
          } else {
            if (options.container) {
              parent = findElement(options.container);
              after = parent[0] && parent[0].lastChild ? angular.element(parent[0].lastChild) : null;
            } else {
              parent = null;
              after = options.element;
            }
          }
          modalElement = $modal.$element = modalLinker(scope, function(clonedElement, scope) {});
          if (scope.$emit(options.prefixEvent + '.show.before', $modal).defaultPrevented) {
            return;
          }
          modalElement.css({
            display: 'block'
          }).addClass(options.placement);
          if (options.animation) {
            if (options.backdrop) {
              backdropElement.addClass(options.backdropAnimation);
            }
            modalElement.addClass(options.animation);
          }
          if (options.backdrop) {
            $animate.enter(backdropElement, bodyElement, null);
          }
          if (angular.version.minor <= 2) {
            $animate.enter(modalElement, parent, after, enterAnimateCallback);
          } else {
            $animate.enter(modalElement, parent, after).then(enterAnimateCallback);
          }
          $modal.$isShown = scope.$isShown = true;
          safeDigest(scope);
          var el = modalElement[0];
          requestAnimationFrame(function() {
            el.focus();
          });
          bodyElement.addClass(options.prefixClass + '-open');
          if (options.animation) {
            bodyElement.addClass(options.prefixClass + '-with-' + options.animation);
          }
          if (options.backdrop) {
            modalElement.on('click', hideOnBackdropClick);
            backdropElement.on('click', hideOnBackdropClick);
            backdropElement.on('wheel', preventEventDefault);
          }
          if (options.keyboard) {
            modalElement.on('keyup', $modal.$onKeyUp);
          }
        };
        function enterAnimateCallback() {
          scope.$emit(options.prefixEvent + '.show', $modal);
        }
        $modal.hide = function() {
          if (!$modal.$isShown) return;
          if (scope.$emit(options.prefixEvent + '.hide.before', $modal).defaultPrevented) {
            return;
          }
          if (angular.version.minor <= 2) {
            $animate.leave(modalElement, leaveAnimateCallback);
          } else {
            $animate.leave(modalElement).then(leaveAnimateCallback);
          }
          if (options.backdrop) {
            $animate.leave(backdropElement);
          }
          $modal.$isShown = scope.$isShown = false;
          safeDigest(scope);
          if (options.backdrop) {
            modalElement.off('click', hideOnBackdropClick);
            backdropElement.off('click', hideOnBackdropClick);
            backdropElement.off('wheel', preventEventDefault);
          }
          if (options.keyboard) {
            modalElement.off('keyup', $modal.$onKeyUp);
          }
        };
        function leaveAnimateCallback() {
          scope.$emit(options.prefixEvent + '.hide', $modal);
          bodyElement.removeClass(options.prefixClass + '-open');
          if (options.animation) {
            bodyElement.removeClass(options.prefixClass + '-with-' + options.animation);
          }
        }
        $modal.toggle = function() {
          $modal.$isShown ? $modal.hide() : $modal.show();
        };
        $modal.focus = function() {
          modalElement[0].focus();
        };
        $modal.$onKeyUp = function(evt) {
          if (evt.which === 27 && $modal.$isShown) {
            $modal.hide();
            evt.stopPropagation();
          }
        };
        function hideOnBackdropClick(evt) {
          if (evt.target !== evt.currentTarget) return;
          options.backdrop === 'static' ? $modal.focus() : $modal.hide();
        }
        function preventEventDefault(evt) {
          evt.preventDefault();
        }
        return $modal;
      }
      function safeDigest(scope) {
        scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest();
      }
      function findElement(query, element) {
        return angular.element((element || document).querySelectorAll(query));
      }
      var fetchPromises = {};
      function fetchTemplate(template) {
        if (fetchPromises[template]) return fetchPromises[template];
        return fetchPromises[template] = $http.get(template, {
          cache: $templateCache
        }).then(function(res) {
          return res.data;
        });
      }
      return ModalFactory;
    } ];
  }).directive('bsModal', [ '$window', '$sce', '$modal', function($window, $sce, $modal) {
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr, transclusion) {
        var options = {
          scope: scope,
          element: element,
          show: false
        };
        angular.forEach([ 'template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'id', 'prefixEvent', 'prefixClass' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'backdrop', 'keyboard', 'html', 'container' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        angular.forEach([ 'title', 'content' ], function(key) {
          attr[key] && attr.$observe(key, function(newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
          });
        });
        attr.bsModal && scope.$watch(attr.bsModal, function(newValue, oldValue) {
          if (angular.isObject(newValue)) {
            angular.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
        }, true);
        var modal = $modal(options);
        element.on(attr.trigger || 'click', modal.toggle);
        scope.$on('$destroy', function() {
          if (modal) modal.destroy();
          options = null;
          modal = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.navbar', []).provider('$navbar', function() {
    var defaults = this.defaults = {
      activeClass: 'active',
      routeAttr: 'data-match-route',
      strict: false
    };
    this.$get = function() {
      return {
        defaults: defaults
      };
    };
  }).directive('bsNavbar', [ '$window', '$location', '$navbar', function($window, $location, $navbar) {
    var defaults = $navbar.defaults;
    return {
      restrict: 'A',
      link: function postLink(scope, element, attr, controller) {
        var options = angular.copy(defaults);
        angular.forEach(Object.keys(defaults), function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        scope.$watch(function() {
          return $location.path();
        }, function(newValue, oldValue) {
          var liElements = element[0].querySelectorAll('li[' + options.routeAttr + ']');
          angular.forEach(liElements, function(li) {
            var liElement = angular.element(li);
            var pattern = liElement.attr(options.routeAttr).replace('/', '\\/');
            if (options.strict) {
              pattern = '^' + pattern + '$';
            }
            var regexp = new RegExp(pattern, 'i');
            if (regexp.test(newValue)) {
              liElement.addClass(options.activeClass);
            } else {
              liElement.removeClass(options.activeClass);
            }
          });
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.popover', [ 'mgcrea.ngStrap.tooltip' ]).provider('$popover', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      customClass: '',
      container: false,
      target: false,
      placement: 'right',
      template: 'popover/popover.tpl.html',
      contentTemplate: false,
      trigger: 'click',
      keyboard: true,
      html: false,
      title: '',
      content: '',
      delay: 0,
      autoClose: false
    };
    this.$get = [ '$tooltip', function($tooltip) {
      function PopoverFactory(element, config) {
        var options = angular.extend({}, defaults, config);
        var $popover = $tooltip(element, options);
        if (options.content) {
          $popover.$scope.content = options.content;
        }
        return $popover;
      }
      return PopoverFactory;
    } ];
  }).directive('bsPopover', [ '$window', '$sce', '$popover', function($window, $sce, $popover) {
    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr) {
        var options = {
          scope: scope
        };
        angular.forEach([ 'template', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'customClass', 'autoClose', 'id', 'prefixClass', 'prefixEvent' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container', 'autoClose' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        var dataTarget = element.attr('data-target');
        if (angular.isDefined(dataTarget)) {
          if (falseValueRegExp.test(dataTarget)) options.target = false; else options.target = dataTarget;
        }
        angular.forEach([ 'title', 'content' ], function(key) {
          attr[key] && attr.$observe(key, function(newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
            angular.isDefined(oldValue) && requestAnimationFrame(function() {
              popover && popover.$applyPlacement();
            });
          });
        });
        attr.bsPopover && scope.$watch(attr.bsPopover, function(newValue, oldValue) {
          if (angular.isObject(newValue)) {
            angular.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
          angular.isDefined(oldValue) && requestAnimationFrame(function() {
            popover && popover.$applyPlacement();
          });
        }, true);
        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
          if (!popover || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
          newValue === true ? popover.show() : popover.hide();
        });
        attr.viewport && scope.$watch(attr.viewport, function(newValue) {
          if (!popover || !angular.isDefined(newValue)) return;
          popover.setViewport(newValue);
        });
        var popover = $popover(element, options);
        scope.$on('$destroy', function() {
          if (popover) popover.destroy();
          options = null;
          popover = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.scrollspy', [ 'mgcrea.ngStrap.helpers.debounce', 'mgcrea.ngStrap.helpers.dimensions' ]).provider('$scrollspy', function() {
    var spies = this.$$spies = {};
    var defaults = this.defaults = {
      debounce: 150,
      throttle: 100,
      offset: 100
    };
    this.$get = [ '$window', '$document', '$rootScope', 'dimensions', 'debounce', 'throttle', function($window, $document, $rootScope, dimensions, debounce, throttle) {
      var windowEl = angular.element($window);
      var docEl = angular.element($document.prop('documentElement'));
      var bodyEl = angular.element($window.document.body);
      function nodeName(element, name) {
        return element[0].nodeName && element[0].nodeName.toLowerCase() === name.toLowerCase();
      }
      function ScrollSpyFactory(config) {
        var options = angular.extend({}, defaults, config);
        if (!options.element) options.element = bodyEl;
        var isWindowSpy = nodeName(options.element, 'body');
        var scrollEl = isWindowSpy ? windowEl : options.element;
        var scrollId = isWindowSpy ? 'window' : options.id;
        if (spies[scrollId]) {
          spies[scrollId].$$count++;
          return spies[scrollId];
        }
        var $scrollspy = {};
        var unbindViewContentLoaded, unbindIncludeContentLoaded;
        var trackedElements = $scrollspy.$trackedElements = [];
        var sortedElements = [];
        var activeTarget;
        var debouncedCheckPosition;
        var throttledCheckPosition;
        var debouncedCheckOffsets;
        var viewportHeight;
        var scrollTop;
        $scrollspy.init = function() {
          this.$$count = 1;
          debouncedCheckPosition = debounce(this.checkPosition, options.debounce);
          throttledCheckPosition = throttle(this.checkPosition, options.throttle);
          scrollEl.on('click', this.checkPositionWithEventLoop);
          windowEl.on('resize', debouncedCheckPosition);
          scrollEl.on('scroll', throttledCheckPosition);
          debouncedCheckOffsets = debounce(this.checkOffsets, options.debounce);
          unbindViewContentLoaded = $rootScope.$on('$viewContentLoaded', debouncedCheckOffsets);
          unbindIncludeContentLoaded = $rootScope.$on('$includeContentLoaded', debouncedCheckOffsets);
          debouncedCheckOffsets();
          if (scrollId) {
            spies[scrollId] = $scrollspy;
          }
        };
        $scrollspy.destroy = function() {
          this.$$count--;
          if (this.$$count > 0) {
            return;
          }
          scrollEl.off('click', this.checkPositionWithEventLoop);
          windowEl.off('resize', debouncedCheckPosition);
          scrollEl.off('scroll', throttledCheckPosition);
          unbindViewContentLoaded();
          unbindIncludeContentLoaded();
          if (scrollId) {
            delete spies[scrollId];
          }
        };
        $scrollspy.checkPosition = function() {
          if (!sortedElements.length) return;
          scrollTop = (isWindowSpy ? $window.pageYOffset : scrollEl.prop('scrollTop')) || 0;
          viewportHeight = Math.max($window.innerHeight, docEl.prop('clientHeight'));
          if (scrollTop < sortedElements[0].offsetTop && activeTarget !== sortedElements[0].target) {
            return $scrollspy.$activateElement(sortedElements[0]);
          }
          for (var i = sortedElements.length; i--; ) {
            if (angular.isUndefined(sortedElements[i].offsetTop) || sortedElements[i].offsetTop === null) continue;
            if (activeTarget === sortedElements[i].target) continue;
            if (scrollTop < sortedElements[i].offsetTop) continue;
            if (sortedElements[i + 1] && scrollTop > sortedElements[i + 1].offsetTop) continue;
            return $scrollspy.$activateElement(sortedElements[i]);
          }
        };
        $scrollspy.checkPositionWithEventLoop = function() {
          setTimeout($scrollspy.checkPosition, 1);
        };
        $scrollspy.$activateElement = function(element) {
          if (activeTarget) {
            var activeElement = $scrollspy.$getTrackedElement(activeTarget);
            if (activeElement) {
              activeElement.source.removeClass('active');
              if (nodeName(activeElement.source, 'li') && nodeName(activeElement.source.parent().parent(), 'li')) {
                activeElement.source.parent().parent().removeClass('active');
              }
            }
          }
          activeTarget = element.target;
          element.source.addClass('active');
          if (nodeName(element.source, 'li') && nodeName(element.source.parent().parent(), 'li')) {
            element.source.parent().parent().addClass('active');
          }
        };
        $scrollspy.$getTrackedElement = function(target) {
          return trackedElements.filter(function(obj) {
            return obj.target === target;
          })[0];
        };
        $scrollspy.checkOffsets = function() {
          angular.forEach(trackedElements, function(trackedElement) {
            var targetElement = document.querySelector(trackedElement.target);
            trackedElement.offsetTop = targetElement ? dimensions.offset(targetElement).top : null;
            if (options.offset && trackedElement.offsetTop !== null) trackedElement.offsetTop -= options.offset * 1;
          });
          sortedElements = trackedElements.filter(function(el) {
            return el.offsetTop !== null;
          }).sort(function(a, b) {
            return a.offsetTop - b.offsetTop;
          });
          debouncedCheckPosition();
        };
        $scrollspy.trackElement = function(target, source) {
          trackedElements.push({
            target: target,
            source: source
          });
        };
        $scrollspy.untrackElement = function(target, source) {
          var toDelete;
          for (var i = trackedElements.length; i--; ) {
            if (trackedElements[i].target === target && trackedElements[i].source === source) {
              toDelete = i;
              break;
            }
          }
          trackedElements = trackedElements.splice(toDelete, 1);
        };
        $scrollspy.activate = function(i) {
          trackedElements[i].addClass('active');
        };
        $scrollspy.init();
        return $scrollspy;
      }
      return ScrollSpyFactory;
    } ];
  }).directive('bsScrollspy', [ '$rootScope', 'debounce', 'dimensions', '$scrollspy', function($rootScope, debounce, dimensions, $scrollspy) {
    return {
      restrict: 'EAC',
      link: function postLink(scope, element, attr) {
        var options = {
          scope: scope
        };
        angular.forEach([ 'offset', 'target' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var scrollspy = $scrollspy(options);
        scrollspy.trackElement(options.target, element);
        scope.$on('$destroy', function() {
          if (scrollspy) {
            scrollspy.untrackElement(options.target, element);
            scrollspy.destroy();
          }
          options = null;
          scrollspy = null;
        });
      }
    };
  } ]).directive('bsScrollspyList', [ '$rootScope', 'debounce', 'dimensions', '$scrollspy', function($rootScope, debounce, dimensions, $scrollspy) {
    return {
      restrict: 'A',
      compile: function postLink(element, attr) {
        var children = element[0].querySelectorAll('li > a[href]');
        angular.forEach(children, function(child) {
          var childEl = angular.element(child);
          childEl.parent().attr('bs-scrollspy', '').attr('data-target', childEl.attr('href'));
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.select', [ 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions' ]).provider('$select', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'select',
      prefixEvent: '$select',
      placement: 'bottom-left',
      template: 'select/select.tpl.html',
      trigger: 'focus',
      container: false,
      keyboard: true,
      html: false,
      delay: 0,
      multiple: false,
      allNoneButtons: false,
      sort: true,
      caretHtml: '&nbsp;<span class="caret"></span>',
      placeholder: 'Choose among the following...',
      allText: 'All',
      noneText: 'None',
      maxLength: 3,
      maxLengthHtml: 'selected',
      iconCheckmark: 'glyphicon glyphicon-ok'
    };
    this.$get = [ '$window', '$document', '$rootScope', '$tooltip', '$timeout', function($window, $document, $rootScope, $tooltip, $timeout) {
      var bodyEl = angular.element($window.document.body);
      var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
      var isTouch = 'createTouch' in $window.document && isNative;
      function SelectFactory(element, controller, config) {
        var $select = {};
        var options = angular.extend({}, defaults, config);
        $select = $tooltip(element, options);
        var scope = $select.$scope;
        scope.$matches = [];
        if (options.multiple) {
          scope.$activeIndex = [];
        } else {
          scope.$activeIndex = -1;
        }
        scope.$isMultiple = options.multiple;
        scope.$showAllNoneButtons = options.allNoneButtons && options.multiple;
        scope.$iconCheckmark = options.iconCheckmark;
        scope.$allText = options.allText;
        scope.$noneText = options.noneText;
        scope.$activate = function(index) {
          scope.$$postDigest(function() {
            $select.activate(index);
          });
        };
        scope.$select = function(index, evt) {
          scope.$$postDigest(function() {
            $select.select(index);
          });
        };
        scope.$isVisible = function() {
          return $select.$isVisible();
        };
        scope.$isActive = function(index) {
          return $select.$isActive(index);
        };
        scope.$selectAll = function() {
          for (var i = 0; i < scope.$matches.length; i++) {
            if (!scope.$isActive(i)) {
              scope.$select(i);
            }
          }
        };
        scope.$selectNone = function() {
          for (var i = 0; i < scope.$matches.length; i++) {
            if (scope.$isActive(i)) {
              scope.$select(i);
            }
          }
        };
        $select.update = function(matches) {
          scope.$matches = matches;
          $select.$updateActiveIndex();
        };
        $select.activate = function(index) {
          if (options.multiple) {
            $select.$isActive(index) ? scope.$activeIndex.splice(scope.$activeIndex.indexOf(index), 1) : scope.$activeIndex.push(index);
            if (options.sort) scope.$activeIndex.sort(function(a, b) {
              return a - b;
            });
          } else {
            scope.$activeIndex = index;
          }
          return scope.$activeIndex;
        };
        $select.select = function(index) {
          var value = scope.$matches[index].value;
          scope.$apply(function() {
            $select.activate(index);
            if (options.multiple) {
              controller.$setViewValue(scope.$activeIndex.map(function(index) {
                return scope.$matches[index].value;
              }));
            } else {
              controller.$setViewValue(value);
              $select.hide();
            }
          });
          scope.$emit(options.prefixEvent + '.select', value, index, $select);
        };
        $select.$updateActiveIndex = function() {
          if (controller.$modelValue && scope.$matches.length) {
            if (options.multiple && angular.isArray(controller.$modelValue)) {
              scope.$activeIndex = controller.$modelValue.map(function(value) {
                return $select.$getIndex(value);
              });
            } else {
              scope.$activeIndex = $select.$getIndex(controller.$modelValue);
            }
          } else if (scope.$activeIndex >= scope.$matches.length) {
            scope.$activeIndex = options.multiple ? [] : 0;
          }
        };
        $select.$isVisible = function() {
          if (!options.minLength || !controller) {
            return scope.$matches.length;
          }
          return scope.$matches.length && controller.$viewValue.length >= options.minLength;
        };
        $select.$isActive = function(index) {
          if (options.multiple) {
            return scope.$activeIndex.indexOf(index) !== -1;
          } else {
            return scope.$activeIndex === index;
          }
        };
        $select.$getIndex = function(value) {
          var l = scope.$matches.length, i = l;
          if (!l) return;
          for (i = l; i--; ) {
            if (scope.$matches[i].value === value) break;
          }
          if (i < 0) return;
          return i;
        };
        $select.$onMouseDown = function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          if (isTouch) {
            var targetEl = angular.element(evt.target);
            targetEl.triggerHandler('click');
          }
        };
        $select.$onKeyDown = function(evt) {
          if (!/(9|13|38|40)/.test(evt.keyCode)) return;
          evt.preventDefault();
          evt.stopPropagation();
          if (options.multiple && evt.keyCode === 9) {
            return $select.hide();
          }
          if (!options.multiple && (evt.keyCode === 13 || evt.keyCode === 9)) {
            return $select.select(scope.$activeIndex);
          }
          if (!options.multiple) {
            if (evt.keyCode === 38 && scope.$activeIndex > 0) scope.$activeIndex--; else if (evt.keyCode === 38 && scope.$activeIndex < 0) scope.$activeIndex = scope.$matches.length - 1; else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1) scope.$activeIndex++; else if (angular.isUndefined(scope.$activeIndex)) scope.$activeIndex = 0;
            scope.$digest();
          }
        };
        var _show = $select.show;
        $select.show = function() {
          _show();
          if (options.multiple) {
            $select.$element.addClass('select-multiple');
          }
          $timeout(function() {
            $select.$element.on(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
            if (options.keyboard) {
              element.on('keydown', $select.$onKeyDown);
            }
          }, 0, false);
        };
        var _hide = $select.hide;
        $select.hide = function() {
          if (!options.multiple && !controller.$modelValue) {
            scope.$activeIndex = -1;
          }
          $select.$element.off(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
          if (options.keyboard) {
            element.off('keydown', $select.$onKeyDown);
          }
          _hide(true);
        };
        return $select;
      }
      SelectFactory.defaults = defaults;
      return SelectFactory;
    } ];
  }).directive('bsSelect', [ '$window', '$parse', '$q', '$select', '$parseOptions', function($window, $parse, $q, $select, $parseOptions) {
    var defaults = $select.defaults;
    return {
      restrict: 'EAC',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = {
          scope: scope,
          placeholder: defaults.placeholder
        };
        angular.forEach([ 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'placeholder', 'allNoneButtons', 'maxLength', 'maxLengthHtml', 'allText', 'noneText', 'iconCheckmark', 'autoClose', 'id', 'sort', 'caretHtml', 'prefixClass', 'prefixEvent' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container', 'allNoneButtons', 'sort' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        var dataMultiple = element.attr('data-multiple');
        if (angular.isDefined(dataMultiple)) {
          if (falseValueRegExp.test(dataMultiple)) options.multiple = false; else options.multiple = dataMultiple;
        }
        if (element[0].nodeName.toLowerCase() === 'select') {
          var inputEl = element;
          inputEl.css('display', 'none');
          element = angular.element('<button type="button" class="btn btn-default"></button>');
          inputEl.after(element);
        }
        var parsedOptions = $parseOptions(attr.bsOptions);
        var select = $select(element, controller, options);
        var watchedOptions = parsedOptions.$match[7].replace(/\|.+/, '').trim();
        scope.$watchCollection(watchedOptions, function(newValue, oldValue) {
          parsedOptions.valuesFn(scope, controller).then(function(values) {
            select.update(values);
            controller.$render();
          });
        });
        scope.$watch(attr.ngModel, function(newValue, oldValue) {
          select.$updateActiveIndex();
          controller.$render();
        }, true);
        controller.$render = function() {
          var selected, index;
          if (options.multiple && angular.isArray(controller.$modelValue)) {
            selected = controller.$modelValue.map(function(value) {
              index = select.$getIndex(value);
              return angular.isDefined(index) ? select.$scope.$matches[index].label : false;
            }).filter(angular.isDefined);
            if (selected.length > (options.maxLength || defaults.maxLength)) {
              selected = selected.length + ' ' + (options.maxLengthHtml || defaults.maxLengthHtml);
            } else {
              selected = selected.join(', ');
            }
          } else {
            index = select.$getIndex(controller.$modelValue);
            selected = angular.isDefined(index) ? select.$scope.$matches[index].label : false;
          }
          element.html((selected ? selected : options.placeholder) + (options.caretHtml ? options.caretHtml : defaults.caretHtml));
        };
        if (options.multiple) {
          controller.$isEmpty = function(value) {
            return !value || value.length === 0;
          };
        }
        scope.$on('$destroy', function() {
          if (select) select.destroy();
          options = null;
          select = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.tab', []).provider('$tab', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      template: 'tab/tab.tpl.html',
      navClass: 'nav-tabs',
      activeClass: 'active'
    };
    var controller = this.controller = function($scope, $element, $attrs) {
      var self = this;
      self.$options = angular.copy(defaults);
      angular.forEach([ 'animation', 'navClass', 'activeClass' ], function(key) {
        if (angular.isDefined($attrs[key])) self.$options[key] = $attrs[key];
      });
      $scope.$navClass = self.$options.navClass;
      $scope.$activeClass = self.$options.activeClass;
      self.$panes = $scope.$panes = [];
      self.$activePaneChangeListeners = self.$viewChangeListeners = [];
      self.$push = function(pane) {
        if (angular.isUndefined(self.$panes.$active)) {
          $scope.$setActive(pane.name || 0);
        }
        self.$panes.push(pane);
      };
      self.$remove = function(pane) {
        var index = self.$panes.indexOf(pane);
        var active = self.$panes.$active;
        var activeIndex;
        if (angular.isString(active)) {
          activeIndex = self.$panes.map(function(pane) {
            return pane.name;
          }).indexOf(active);
        } else {
          activeIndex = self.$panes.$active;
        }
        self.$panes.splice(index, 1);
        if (index < activeIndex) {
          activeIndex--;
        } else if (index === activeIndex && activeIndex === self.$panes.length) {
          activeIndex--;
        }
        if (activeIndex >= 0 && activeIndex < self.$panes.length) {
          self.$setActive(self.$panes[activeIndex].name || activeIndex);
        } else {
          self.$setActive();
        }
      };
      self.$setActive = $scope.$setActive = function(value) {
        self.$panes.$active = value;
        self.$activePaneChangeListeners.forEach(function(fn) {
          fn();
        });
      };
      self.$isActive = $scope.$isActive = function($pane, $index) {
        return self.$panes.$active === $pane.name || self.$panes.$active === $index;
      };
    };
    this.$get = function() {
      var $tab = {};
      $tab.defaults = defaults;
      $tab.controller = controller;
      return $tab;
    };
  }).directive('bsTabs', [ '$window', '$animate', '$tab', '$parse', function($window, $animate, $tab, $parse) {
    var defaults = $tab.defaults;
    return {
      require: [ '?ngModel', 'bsTabs' ],
      transclude: true,
      scope: true,
      controller: [ '$scope', '$element', '$attrs', $tab.controller ],
      templateUrl: function(element, attr) {
        return attr.template || defaults.template;
      },
      link: function postLink(scope, element, attrs, controllers) {
        var ngModelCtrl = controllers[0];
        var bsTabsCtrl = controllers[1];
        if (ngModelCtrl) {
          bsTabsCtrl.$activePaneChangeListeners.push(function() {
            ngModelCtrl.$setViewValue(bsTabsCtrl.$panes.$active);
          });
          ngModelCtrl.$formatters.push(function(modelValue) {
            bsTabsCtrl.$setActive(modelValue);
            return modelValue;
          });
        }
        if (attrs.bsActivePane) {
          var parsedBsActivePane = $parse(attrs.bsActivePane);
          bsTabsCtrl.$activePaneChangeListeners.push(function() {
            parsedBsActivePane.assign(scope, bsTabsCtrl.$panes.$active);
          });
          scope.$watch(attrs.bsActivePane, function(newValue, oldValue) {
            bsTabsCtrl.$setActive(newValue);
          }, true);
        }
      }
    };
  } ]).directive('bsPane', [ '$window', '$animate', '$sce', function($window, $animate, $sce) {
    return {
      require: [ '^?ngModel', '^bsTabs' ],
      scope: true,
      link: function postLink(scope, element, attrs, controllers) {
        var ngModelCtrl = controllers[0];
        var bsTabsCtrl = controllers[1];
        element.addClass('tab-pane');
        attrs.$observe('title', function(newValue, oldValue) {
          scope.title = $sce.trustAsHtml(newValue);
        });
        scope.name = attrs.name;
        if (bsTabsCtrl.$options.animation) {
          element.addClass(bsTabsCtrl.$options.animation);
        }
        attrs.$observe('disabled', function(newValue, oldValue) {
          scope.disabled = scope.$eval(newValue);
        });
        bsTabsCtrl.$push(scope);
        scope.$on('$destroy', function() {
          bsTabsCtrl.$remove(scope);
        });
        function render() {
          var index = bsTabsCtrl.$panes.indexOf(scope);
          $animate[bsTabsCtrl.$isActive(scope, index) ? 'addClass' : 'removeClass'](element, bsTabsCtrl.$options.activeClass);
        }
        bsTabsCtrl.$activePaneChangeListeners.push(function() {
          render();
        });
        render();
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.tooltip', [ 'mgcrea.ngStrap.helpers.dimensions' ]).provider('$tooltip', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      customClass: '',
      prefixClass: 'tooltip',
      prefixEvent: 'tooltip',
      container: false,
      target: false,
      placement: 'top',
      template: 'tooltip/tooltip.tpl.html',
      contentTemplate: false,
      trigger: 'hover focus',
      keyboard: false,
      html: false,
      show: false,
      title: '',
      type: '',
      delay: 0,
      autoClose: false,
      bsEnabled: true,
      viewport: {
        selector: 'body',
        padding: 0
      }
    };
    this.$get = [ '$window', '$rootScope', '$compile', '$q', '$templateCache', '$http', '$animate', '$sce', 'dimensions', '$$rAF', '$timeout', function($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $sce, dimensions, $$rAF, $timeout) {
      var trim = String.prototype.trim;
      var isTouch = 'createTouch' in $window.document;
      var htmlReplaceRegExp = /ng-bind="/gi;
      var $body = angular.element($window.document);
      function TooltipFactory(element, config) {
        var $tooltip = {};
        var nodeName = element[0].nodeName.toLowerCase();
        var options = $tooltip.$options = angular.extend({}, defaults, config);
        $tooltip.$promise = fetchTemplate(options.template);
        var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
        if (options.delay && angular.isString(options.delay)) {
          var split = options.delay.split(',').map(parseFloat);
          options.delay = split.length > 1 ? {
            show: split[0],
            hide: split[1]
          } : split[0];
        }
        $tooltip.$id = options.id || element.attr('id') || '';
        if (options.title) {
          scope.title = $sce.trustAsHtml(options.title);
        }
        scope.$setEnabled = function(isEnabled) {
          scope.$$postDigest(function() {
            $tooltip.setEnabled(isEnabled);
          });
        };
        scope.$hide = function() {
          scope.$$postDigest(function() {
            $tooltip.hide();
          });
        };
        scope.$show = function() {
          scope.$$postDigest(function() {
            $tooltip.show();
          });
        };
        scope.$toggle = function() {
          scope.$$postDigest(function() {
            $tooltip.toggle();
          });
        };
        $tooltip.$isShown = scope.$isShown = false;
        var timeout, hoverState;
        if (options.contentTemplate) {
          $tooltip.$promise = $tooltip.$promise.then(function(template) {
            var templateEl = angular.element(template);
            return fetchTemplate(options.contentTemplate).then(function(contentTemplate) {
              var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
              if (!contentEl.length) contentEl = findElement('[ng-bind="title"]', templateEl[0]);
              contentEl.removeAttr('ng-bind').html(contentTemplate);
              return templateEl[0].outerHTML;
            });
          });
        }
        var tipLinker, tipElement, tipTemplate, tipContainer, tipScope;
        $tooltip.$promise.then(function(template) {
          if (angular.isObject(template)) template = template.data;
          if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
          template = trim.apply(template);
          tipTemplate = template;
          tipLinker = $compile(template);
          $tooltip.init();
        });
        $tooltip.init = function() {
          if (options.delay && angular.isNumber(options.delay)) {
            options.delay = {
              show: options.delay,
              hide: options.delay
            };
          }
          if (options.container === 'self') {
            tipContainer = element;
          } else if (angular.isElement(options.container)) {
            tipContainer = options.container;
          } else if (options.container) {
            tipContainer = findElement(options.container);
          }
          bindTriggerEvents();
          if (options.target) {
            options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
          }
          if (options.show) {
            scope.$$postDigest(function() {
              options.trigger === 'focus' ? element[0].focus() : $tooltip.show();
            });
          }
        };
        $tooltip.destroy = function() {
          unbindTriggerEvents();
          destroyTipElement();
          scope.$destroy();
        };
        $tooltip.enter = function() {
          clearTimeout(timeout);
          hoverState = 'in';
          if (!options.delay || !options.delay.show) {
            return $tooltip.show();
          }
          timeout = setTimeout(function() {
            if (hoverState === 'in') $tooltip.show();
          }, options.delay.show);
        };
        $tooltip.show = function() {
          if (!options.bsEnabled || $tooltip.$isShown) return;
          scope.$emit(options.prefixEvent + '.show.before', $tooltip);
          var parent, after;
          if (options.container) {
            parent = tipContainer;
            if (tipContainer[0].lastChild) {
              after = angular.element(tipContainer[0].lastChild);
            } else {
              after = null;
            }
          } else {
            parent = null;
            after = element;
          }
          if (tipElement) destroyTipElement();
          tipScope = $tooltip.$scope.$new();
          tipElement = $tooltip.$element = tipLinker(tipScope, function(clonedElement, scope) {});
          tipElement.css({
            top: '-9999px',
            left: '-9999px',
            right: 'auto',
            display: 'block',
            visibility: 'hidden'
          });
          if (options.animation) tipElement.addClass(options.animation);
          if (options.type) tipElement.addClass(options.prefixClass + '-' + options.type);
          if (options.customClass) tipElement.addClass(options.customClass);
          after ? after.after(tipElement) : parent.prepend(tipElement);
          $tooltip.$isShown = scope.$isShown = true;
          safeDigest(scope);
          $tooltip.$applyPlacement();
          if (angular.version.minor <= 2) {
            $animate.enter(tipElement, parent, after, enterAnimateCallback);
          } else {
            $animate.enter(tipElement, parent, after).then(enterAnimateCallback);
          }
          safeDigest(scope);
          $$rAF(function() {
            if (tipElement) tipElement.css({
              visibility: 'visible'
            });
          });
          if (options.keyboard) {
            if (options.trigger !== 'focus') {
              $tooltip.focus();
            }
            bindKeyboardEvents();
          }
          if (options.autoClose) {
            bindAutoCloseEvents();
          }
        };
        function enterAnimateCallback() {
          scope.$emit(options.prefixEvent + '.show', $tooltip);
        }
        $tooltip.leave = function() {
          clearTimeout(timeout);
          hoverState = 'out';
          if (!options.delay || !options.delay.hide) {
            return $tooltip.hide();
          }
          timeout = setTimeout(function() {
            if (hoverState === 'out') {
              $tooltip.hide();
            }
          }, options.delay.hide);
        };
        var _blur;
        var _tipToHide;
        $tooltip.hide = function(blur) {
          if (!$tooltip.$isShown) return;
          scope.$emit(options.prefixEvent + '.hide.before', $tooltip);
          _blur = blur;
          _tipToHide = tipElement;
          if (angular.version.minor <= 2) {
            $animate.leave(tipElement, leaveAnimateCallback);
          } else {
            $animate.leave(tipElement).then(leaveAnimateCallback);
          }
          $tooltip.$isShown = scope.$isShown = false;
          safeDigest(scope);
          if (options.keyboard && tipElement !== null) {
            unbindKeyboardEvents();
          }
          if (options.autoClose && tipElement !== null) {
            unbindAutoCloseEvents();
          }
        };
        function leaveAnimateCallback() {
          scope.$emit(options.prefixEvent + '.hide', $tooltip);
          if (tipElement === _tipToHide) {
            if (_blur && options.trigger === 'focus') {
              return element[0].blur();
            }
            destroyTipElement();
          }
        }
        $tooltip.toggle = function() {
          $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
        };
        $tooltip.focus = function() {
          tipElement[0].focus();
        };
        $tooltip.setEnabled = function(isEnabled) {
          options.bsEnabled = isEnabled;
        };
        $tooltip.setViewport = function(viewport) {
          options.viewport = viewport;
        };
        $tooltip.$applyPlacement = function() {
          if (!tipElement) return;
          var placement = options.placement, autoToken = /\s?auto?\s?/i, autoPlace = autoToken.test(placement);
          if (autoPlace) {
            placement = placement.replace(autoToken, '') || defaults.placement;
          }
          tipElement.addClass(options.placement);
          var elementPosition = getPosition(), tipWidth = tipElement.prop('offsetWidth'), tipHeight = tipElement.prop('offsetHeight');
          if (autoPlace) {
            var originalPlacement = placement;
            var container = options.container ? findElement(options.container) : element.parent();
            var containerPosition = getPosition(container);
            if (originalPlacement.indexOf('bottom') >= 0 && elementPosition.bottom + tipHeight > containerPosition.bottom) {
              placement = originalPlacement.replace('bottom', 'top');
            } else if (originalPlacement.indexOf('top') >= 0 && elementPosition.top - tipHeight < containerPosition.top) {
              placement = originalPlacement.replace('top', 'bottom');
            }
            if ((originalPlacement === 'right' || originalPlacement === 'bottom-left' || originalPlacement === 'top-left') && elementPosition.right + tipWidth > containerPosition.width) {
              placement = originalPlacement === 'right' ? 'left' : placement.replace('left', 'right');
            } else if ((originalPlacement === 'left' || originalPlacement === 'bottom-right' || originalPlacement === 'top-right') && elementPosition.left - tipWidth < containerPosition.left) {
              placement = originalPlacement === 'left' ? 'right' : placement.replace('right', 'left');
            }
            tipElement.removeClass(originalPlacement).addClass(placement);
          }
          var tipPosition = getCalculatedOffset(placement, elementPosition, tipWidth, tipHeight);
          applyPlacement(tipPosition, placement);
        };
        $tooltip.$onKeyUp = function(evt) {
          if (evt.which === 27 && $tooltip.$isShown) {
            $tooltip.hide();
            evt.stopPropagation();
          }
        };
        $tooltip.$onFocusKeyUp = function(evt) {
          if (evt.which === 27) {
            element[0].blur();
            evt.stopPropagation();
          }
        };
        $tooltip.$onFocusElementMouseDown = function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          $tooltip.$isShown ? element[0].blur() : element[0].focus();
        };
        function bindTriggerEvents() {
          var triggers = options.trigger.split(' ');
          angular.forEach(triggers, function(trigger) {
            if (trigger === 'click') {
              element.on('click', $tooltip.toggle);
            } else if (trigger !== 'manual') {
              element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
              element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
              nodeName === 'button' && trigger !== 'hover' && element.on(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
            }
          });
        }
        function unbindTriggerEvents() {
          var triggers = options.trigger.split(' ');
          for (var i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if (trigger === 'click') {
              element.off('click', $tooltip.toggle);
            } else if (trigger !== 'manual') {
              element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
              element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
              nodeName === 'button' && trigger !== 'hover' && element.off(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
            }
          }
        }
        function bindKeyboardEvents() {
          if (options.trigger !== 'focus') {
            tipElement.on('keyup', $tooltip.$onKeyUp);
          } else {
            element.on('keyup', $tooltip.$onFocusKeyUp);
          }
        }
        function unbindKeyboardEvents() {
          if (options.trigger !== 'focus') {
            tipElement.off('keyup', $tooltip.$onKeyUp);
          } else {
            element.off('keyup', $tooltip.$onFocusKeyUp);
          }
        }
        var _autoCloseEventsBinded = false;
        function bindAutoCloseEvents() {
          $timeout(function() {
            tipElement.on('click', stopEventPropagation);
            $body.on('click', $tooltip.hide);
            _autoCloseEventsBinded = true;
          }, 0, false);
        }
        function unbindAutoCloseEvents() {
          if (_autoCloseEventsBinded) {
            tipElement.off('click', stopEventPropagation);
            $body.off('click', $tooltip.hide);
            _autoCloseEventsBinded = false;
          }
        }
        function stopEventPropagation(event) {
          event.stopPropagation();
        }
        function getPosition($element) {
          $element = $element || (options.target || element);
          var el = $element[0], isBody = el.tagName === 'BODY';
          var elRect = el.getBoundingClientRect();
          var rect = {};
          for (var p in elRect) {
            rect[p] = elRect[p];
          }
          if (rect.width === null) {
            rect = angular.extend({}, rect, {
              width: elRect.right - elRect.left,
              height: elRect.bottom - elRect.top
            });
          }
          var elOffset = isBody ? {
            top: 0,
            left: 0
          } : dimensions.offset(el), scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.prop('scrollTop') || 0
          }, outerDims = isBody ? {
            width: document.documentElement.clientWidth,
            height: $window.innerHeight
          } : null;
          return angular.extend({}, rect, scroll, outerDims, elOffset);
        }
        function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
          var offset;
          var split = placement.split('-');
          switch (split[0]) {
           case 'right':
            offset = {
              top: position.top + position.height / 2 - actualHeight / 2,
              left: position.left + position.width
            };
            break;

           case 'bottom':
            offset = {
              top: position.top + position.height,
              left: position.left + position.width / 2 - actualWidth / 2
            };
            break;

           case 'left':
            offset = {
              top: position.top + position.height / 2 - actualHeight / 2,
              left: position.left - actualWidth
            };
            break;

           default:
            offset = {
              top: position.top - actualHeight,
              left: position.left + position.width / 2 - actualWidth / 2
            };
            break;
          }
          if (!split[1]) {
            return offset;
          }
          if (split[0] === 'top' || split[0] === 'bottom') {
            switch (split[1]) {
             case 'left':
              offset.left = position.left;
              break;

             case 'right':
              offset.left = position.left + position.width - actualWidth;
            }
          } else if (split[0] === 'left' || split[0] === 'right') {
            switch (split[1]) {
             case 'top':
              offset.top = position.top - actualHeight;
              break;

             case 'bottom':
              offset.top = position.top + position.height;
            }
          }
          return offset;
        }
        function applyPlacement(offset, placement) {
          var tip = tipElement[0], width = tip.offsetWidth, height = tip.offsetHeight;
          var marginTop = parseInt(dimensions.css(tip, 'margin-top'), 10), marginLeft = parseInt(dimensions.css(tip, 'margin-left'), 10);
          if (isNaN(marginTop)) marginTop = 0;
          if (isNaN(marginLeft)) marginLeft = 0;
          offset.top = offset.top + marginTop;
          offset.left = offset.left + marginLeft;
          dimensions.setOffset(tip, angular.extend({
            using: function(props) {
              tipElement.css({
                top: Math.round(props.top) + 'px',
                left: Math.round(props.left) + 'px',
                right: ''
              });
            }
          }, offset), 0);
          var actualWidth = tip.offsetWidth, actualHeight = tip.offsetHeight;
          if (placement === 'top' && actualHeight !== height) {
            offset.top = offset.top + height - actualHeight;
          }
          if (/top-left|top-right|bottom-left|bottom-right/.test(placement)) return;
          var delta = getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
          if (delta.left) {
            offset.left += delta.left;
          } else {
            offset.top += delta.top;
          }
          dimensions.setOffset(tip, offset);
          if (/top|right|bottom|left/.test(placement)) {
            var isVertical = /top|bottom/.test(placement), arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight, arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';
            replaceArrow(arrowDelta, tip[arrowOffsetPosition], isVertical);
          }
        }
        function getViewportAdjustedDelta(placement, position, actualWidth, actualHeight) {
          var delta = {
            top: 0,
            left: 0
          }, $viewport = options.viewport && findElement(options.viewport.selector || options.viewport);
          if (!$viewport) {
            return delta;
          }
          var viewportPadding = options.viewport && options.viewport.padding || 0, viewportDimensions = getPosition($viewport);
          if (/right|left/.test(placement)) {
            var topEdgeOffset = position.top - viewportPadding - viewportDimensions.scroll, bottomEdgeOffset = position.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
              delta.top = viewportDimensions.top - topEdgeOffset;
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
              delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
            }
          } else {
            var leftEdgeOffset = position.left - viewportPadding, rightEdgeOffset = position.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
              delta.left = viewportDimensions.left - leftEdgeOffset;
            } else if (rightEdgeOffset > viewportDimensions.width) {
              delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
            }
          }
          return delta;
        }
        function replaceArrow(delta, dimension, isHorizontal) {
          var $arrow = findElement('.tooltip-arrow, .arrow', tipElement[0]);
          $arrow.css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isHorizontal ? 'top' : 'left', '');
        }
        function destroyTipElement() {
          clearTimeout(timeout);
          if ($tooltip.$isShown && tipElement !== null) {
            if (options.autoClose) {
              unbindAutoCloseEvents();
            }
            if (options.keyboard) {
              unbindKeyboardEvents();
            }
          }
          if (tipScope) {
            tipScope.$destroy();
            tipScope = null;
          }
          if (tipElement) {
            tipElement.remove();
            tipElement = $tooltip.$element = null;
          }
        }
        return $tooltip;
      }
      function safeDigest(scope) {
        scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest();
      }
      function findElement(query, element) {
        return angular.element((element || document).querySelectorAll(query));
      }
      var fetchPromises = {};
      function fetchTemplate(template) {
        if (fetchPromises[template]) return fetchPromises[template];
        return fetchPromises[template] = $http.get(template, {
          cache: $templateCache
        }).then(function(res) {
          return res.data;
        });
      }
      return TooltipFactory;
    } ];
  }).directive('bsTooltip', [ '$window', '$location', '$sce', '$tooltip', '$$rAF', function($window, $location, $sce, $tooltip, $$rAF) {
    return {
      restrict: 'EAC',
      scope: true,
      link: function postLink(scope, element, attr, transclusion) {
        var options = {
          scope: scope
        };
        angular.forEach([ 'template', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        var dataTarget = element.attr('data-target');
        if (angular.isDefined(dataTarget)) {
          if (falseValueRegExp.test(dataTarget)) options.target = false; else options.target = dataTarget;
        }
        if (!scope.hasOwnProperty('title')) {
          scope.title = '';
        }
        attr.$observe('title', function(newValue) {
          if (angular.isDefined(newValue) || !scope.hasOwnProperty('title')) {
            var oldValue = scope.title;
            scope.title = $sce.trustAsHtml(newValue);
            angular.isDefined(oldValue) && $$rAF(function() {
              tooltip && tooltip.$applyPlacement();
            });
          }
        });
        attr.bsTooltip && scope.$watch(attr.bsTooltip, function(newValue, oldValue) {
          if (angular.isObject(newValue)) {
            angular.extend(scope, newValue);
          } else {
            scope.title = newValue;
          }
          angular.isDefined(oldValue) && $$rAF(function() {
            tooltip && tooltip.$applyPlacement();
          });
        }, true);
        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
          if (!tooltip || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
          newValue === true ? tooltip.show() : tooltip.hide();
        });
        attr.bsEnabled && scope.$watch(attr.bsEnabled, function(newValue, oldValue) {
          if (!tooltip || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
          newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
        });
        attr.viewport && scope.$watch(attr.viewport, function(newValue) {
          if (!tooltip || !angular.isDefined(newValue)) return;
          tooltip.setViewport(newValue);
        });
        var tooltip = $tooltip(element, options);
        scope.$on('$destroy', function() {
          if (tooltip) tooltip.destroy();
          options = null;
          tooltip = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.timepicker', [ 'mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip' ]).provider('$timepicker', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'timepicker',
      placement: 'bottom-left',
      template: 'timepicker/timepicker.tpl.html',
      trigger: 'focus',
      container: false,
      keyboard: true,
      html: false,
      delay: 0,
      useNative: true,
      timeType: 'date',
      timeFormat: 'shortTime',
      timezone: null,
      modelTimeFormat: null,
      autoclose: false,
      minTime: -Infinity,
      maxTime: +Infinity,
      length: 5,
      hourStep: 1,
      minuteStep: 5,
      secondStep: 5,
      roundDisplay: false,
      iconUp: 'glyphicon glyphicon-chevron-up',
      iconDown: 'glyphicon glyphicon-chevron-down',
      arrowBehavior: 'pager'
    };
    this.$get = [ '$window', '$document', '$rootScope', '$sce', '$dateFormatter', '$tooltip', '$timeout', function($window, $document, $rootScope, $sce, $dateFormatter, $tooltip, $timeout) {
      var bodyEl = angular.element($window.document.body);
      var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
      var isTouch = 'createTouch' in $window.document && isNative;
      if (!defaults.lang) defaults.lang = $dateFormatter.getDefaultLocale();
      function timepickerFactory(element, controller, config) {
        var $timepicker = $tooltip(element, angular.extend({}, defaults, config));
        var parentScope = config.scope;
        var options = $timepicker.$options;
        var scope = $timepicker.$scope;
        var lang = options.lang;
        var formatDate = function(date, format, timezone) {
          return $dateFormatter.formatDate(date, format, lang, timezone);
        };
        function floorMinutes(time) {
          var coeff = 1e3 * 60 * options.minuteStep;
          return new Date(Math.floor(time.getTime() / coeff) * coeff);
        }
        var selectedIndex = 0;
        var defaultDate = options.roundDisplay ? floorMinutes(new Date()) : new Date();
        var startDate = controller.$dateValue || defaultDate;
        var viewDate = {
          hour: startDate.getHours(),
          meridian: startDate.getHours() < 12,
          minute: startDate.getMinutes(),
          second: startDate.getSeconds(),
          millisecond: startDate.getMilliseconds()
        };
        var format = $dateFormatter.getDatetimeFormat(options.timeFormat, lang);
        var hoursFormat = $dateFormatter.hoursFormat(format), timeSeparator = $dateFormatter.timeSeparator(format), minutesFormat = $dateFormatter.minutesFormat(format), secondsFormat = $dateFormatter.secondsFormat(format), showSeconds = $dateFormatter.showSeconds(format), showAM = $dateFormatter.showAM(format);
        scope.$iconUp = options.iconUp;
        scope.$iconDown = options.iconDown;
        scope.$select = function(date, index) {
          $timepicker.select(date, index);
        };
        scope.$moveIndex = function(value, index) {
          $timepicker.$moveIndex(value, index);
        };
        scope.$switchMeridian = function(date) {
          $timepicker.switchMeridian(date);
        };
        $timepicker.update = function(date) {
          if (angular.isDate(date) && !isNaN(date.getTime())) {
            $timepicker.$date = date;
            angular.extend(viewDate, {
              hour: date.getHours(),
              minute: date.getMinutes(),
              second: date.getSeconds(),
              millisecond: date.getMilliseconds()
            });
            $timepicker.$build();
          } else if (!$timepicker.$isBuilt) {
            $timepicker.$build();
          }
        };
        $timepicker.select = function(date, index, keep) {
          if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) controller.$dateValue = new Date(1970, 0, 1);
          if (!angular.isDate(date)) date = new Date(date);
          if (index === 0) controller.$dateValue.setHours(date.getHours()); else if (index === 1) controller.$dateValue.setMinutes(date.getMinutes()); else if (index === 2) controller.$dateValue.setSeconds(date.getSeconds());
          controller.$setViewValue(angular.copy(controller.$dateValue));
          controller.$render();
          if (options.autoclose && !keep) {
            $timeout(function() {
              $timepicker.hide(true);
            });
          }
        };
        $timepicker.switchMeridian = function(date) {
          if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) {
            return;
          }
          var hours = (date || controller.$dateValue).getHours();
          controller.$dateValue.setHours(hours < 12 ? hours + 12 : hours - 12);
          controller.$setViewValue(angular.copy(controller.$dateValue));
          controller.$render();
        };
        $timepicker.$build = function() {
          var i, midIndex = scope.midIndex = parseInt(options.length / 2, 10);
          var hours = [], hour;
          for (i = 0; i < options.length; i++) {
            hour = new Date(1970, 0, 1, viewDate.hour - (midIndex - i) * options.hourStep);
            hours.push({
              date: hour,
              label: formatDate(hour, hoursFormat),
              selected: $timepicker.$date && $timepicker.$isSelected(hour, 0),
              disabled: $timepicker.$isDisabled(hour, 0)
            });
          }
          var minutes = [], minute;
          for (i = 0; i < options.length; i++) {
            minute = new Date(1970, 0, 1, 0, viewDate.minute - (midIndex - i) * options.minuteStep);
            minutes.push({
              date: minute,
              label: formatDate(minute, minutesFormat),
              selected: $timepicker.$date && $timepicker.$isSelected(minute, 1),
              disabled: $timepicker.$isDisabled(minute, 1)
            });
          }
          var seconds = [], second;
          for (i = 0; i < options.length; i++) {
            second = new Date(1970, 0, 1, 0, 0, viewDate.second - (midIndex - i) * options.secondStep);
            seconds.push({
              date: second,
              label: formatDate(second, secondsFormat),
              selected: $timepicker.$date && $timepicker.$isSelected(second, 2),
              disabled: $timepicker.$isDisabled(second, 2)
            });
          }
          var rows = [];
          for (i = 0; i < options.length; i++) {
            if (showSeconds) {
              rows.push([ hours[i], minutes[i], seconds[i] ]);
            } else {
              rows.push([ hours[i], minutes[i] ]);
            }
          }
          scope.rows = rows;
          scope.showSeconds = showSeconds;
          scope.showAM = showAM;
          scope.isAM = ($timepicker.$date || hours[midIndex].date).getHours() < 12;
          scope.timeSeparator = timeSeparator;
          $timepicker.$isBuilt = true;
        };
        $timepicker.$isSelected = function(date, index) {
          if (!$timepicker.$date) return false; else if (index === 0) {
            return date.getHours() === $timepicker.$date.getHours();
          } else if (index === 1) {
            return date.getMinutes() === $timepicker.$date.getMinutes();
          } else if (index === 2) {
            return date.getSeconds() === $timepicker.$date.getSeconds();
          }
        };
        $timepicker.$isDisabled = function(date, index) {
          var selectedTime;
          if (index === 0) {
            selectedTime = date.getTime() + viewDate.minute * 6e4 + viewDate.second * 1e3;
          } else if (index === 1) {
            selectedTime = date.getTime() + viewDate.hour * 36e5 + viewDate.second * 1e3;
          } else if (index === 2) {
            selectedTime = date.getTime() + viewDate.hour * 36e5 + viewDate.minute * 6e4;
          }
          return selectedTime < options.minTime * 1 || selectedTime > options.maxTime * 1;
        };
        scope.$arrowAction = function(value, index) {
          if (options.arrowBehavior === 'picker') {
            $timepicker.$setTimeByStep(value, index);
          } else {
            $timepicker.$moveIndex(value, index);
          }
        };
        $timepicker.$setTimeByStep = function(value, index) {
          var newDate = new Date($timepicker.$date);
          var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
          var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
          var seconds = newDate.getSeconds(), secondsLength = formatDate(newDate, secondsFormat).length;
          if (index === 0) {
            newDate.setHours(hours - parseInt(options.hourStep, 10) * value);
          } else if (index === 1) {
            newDate.setMinutes(minutes - parseInt(options.minuteStep, 10) * value);
          } else if (index === 2) {
            newDate.setSeconds(seconds - parseInt(options.secondStep, 10) * value);
          }
          $timepicker.select(newDate, index, true);
        };
        $timepicker.$moveIndex = function(value, index) {
          var targetDate;
          if (index === 0) {
            targetDate = new Date(1970, 0, 1, viewDate.hour + value * options.length, viewDate.minute, viewDate.second);
            angular.extend(viewDate, {
              hour: targetDate.getHours()
            });
          } else if (index === 1) {
            targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute + value * options.length * options.minuteStep, viewDate.second);
            angular.extend(viewDate, {
              minute: targetDate.getMinutes()
            });
          } else if (index === 2) {
            targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute, viewDate.second + value * options.length * options.secondStep);
            angular.extend(viewDate, {
              second: targetDate.getSeconds()
            });
          }
          $timepicker.$build();
        };
        $timepicker.$onMouseDown = function(evt) {
          if (evt.target.nodeName.toLowerCase() !== 'input') evt.preventDefault();
          evt.stopPropagation();
          if (isTouch) {
            var targetEl = angular.element(evt.target);
            if (targetEl[0].nodeName.toLowerCase() !== 'button') {
              targetEl = targetEl.parent();
            }
            targetEl.triggerHandler('click');
          }
        };
        $timepicker.$onKeyDown = function(evt) {
          if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
          evt.preventDefault();
          evt.stopPropagation();
          if (evt.keyCode === 13) return $timepicker.hide(true);
          var newDate = new Date($timepicker.$date);
          var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
          var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
          var seconds = newDate.getSeconds(), secondsLength = formatDate(newDate, secondsFormat).length;
          var sepLength = 1;
          var lateralMove = /(37|39)/.test(evt.keyCode);
          var count = 2 + showSeconds * 1 + showAM * 1;
          if (lateralMove) {
            if (evt.keyCode === 37) selectedIndex = selectedIndex < 1 ? count - 1 : selectedIndex - 1; else if (evt.keyCode === 39) selectedIndex = selectedIndex < count - 1 ? selectedIndex + 1 : 0;
          }
          var selectRange = [ 0, hoursLength ];
          var incr = 0;
          if (evt.keyCode === 38) incr = -1;
          if (evt.keyCode === 40) incr = +1;
          var isSeconds = selectedIndex === 2 && showSeconds;
          var isMeridian = selectedIndex === 2 && !showSeconds || selectedIndex === 3 && showSeconds;
          if (selectedIndex === 0) {
            newDate.setHours(hours + incr * parseInt(options.hourStep, 10));
            hoursLength = formatDate(newDate, hoursFormat).length;
            selectRange = [ 0, hoursLength ];
          } else if (selectedIndex === 1) {
            newDate.setMinutes(minutes + incr * parseInt(options.minuteStep, 10));
            minutesLength = formatDate(newDate, minutesFormat).length;
            selectRange = [ hoursLength + sepLength, minutesLength ];
          } else if (isSeconds) {
            newDate.setSeconds(seconds + incr * parseInt(options.secondStep, 10));
            secondsLength = formatDate(newDate, secondsFormat).length;
            selectRange = [ hoursLength + sepLength + minutesLength + sepLength, secondsLength ];
          } else if (isMeridian) {
            if (!lateralMove) $timepicker.switchMeridian();
            selectRange = [ hoursLength + sepLength + minutesLength + sepLength + (secondsLength + sepLength) * showSeconds, 2 ];
          }
          $timepicker.select(newDate, selectedIndex, true);
          createSelection(selectRange[0], selectRange[1]);
          parentScope.$digest();
        };
        function createSelection(start, length) {
          var end = start + length;
          if (element[0].createTextRange) {
            var selRange = element[0].createTextRange();
            selRange.collapse(true);
            selRange.moveStart('character', start);
            selRange.moveEnd('character', end);
            selRange.select();
          } else if (element[0].setSelectionRange) {
            element[0].setSelectionRange(start, end);
          } else if (angular.isUndefined(element[0].selectionStart)) {
            element[0].selectionStart = start;
            element[0].selectionEnd = end;
          }
        }
        function focusElement() {
          element[0].focus();
        }
        var _init = $timepicker.init;
        $timepicker.init = function() {
          if (isNative && options.useNative) {
            element.prop('type', 'time');
            element.css('-webkit-appearance', 'textfield');
            return;
          } else if (isTouch) {
            element.prop('type', 'text');
            element.attr('readonly', 'true');
            element.on('click', focusElement);
          }
          _init();
        };
        var _destroy = $timepicker.destroy;
        $timepicker.destroy = function() {
          if (isNative && options.useNative) {
            element.off('click', focusElement);
          }
          _destroy();
        };
        var _show = $timepicker.show;
        $timepicker.show = function() {
          _show();
          $timeout(function() {
            $timepicker.$element && $timepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
            if (options.keyboard) {
              element && element.on('keydown', $timepicker.$onKeyDown);
            }
          }, 0, false);
        };
        var _hide = $timepicker.hide;
        $timepicker.hide = function(blur) {
          if (!$timepicker.$isShown) return;
          $timepicker.$element && $timepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
          if (options.keyboard) {
            element && element.off('keydown', $timepicker.$onKeyDown);
          }
          _hide(blur);
        };
        return $timepicker;
      }
      timepickerFactory.defaults = defaults;
      return timepickerFactory;
    } ];
  }).directive('bsTimepicker', [ '$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$timepicker', function($window, $parse, $q, $dateFormatter, $dateParser, $timepicker) {
    var defaults = $timepicker.defaults;
    var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
    return {
      restrict: 'EAC',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = {
          scope: scope,
          controller: controller
        };
        angular.forEach([ 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'timeType', 'timeFormat', 'timezone', 'modelTimeFormat', 'useNative', 'hourStep', 'minuteStep', 'secondStep', 'length', 'arrowBehavior', 'iconUp', 'iconDown', 'roundDisplay', 'id', 'prefixClass', 'prefixEvent' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container', 'autoclose', 'useNative', 'roundDisplay' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
          if (!timepicker || !angular.isDefined(newValue)) return;
          if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(timepicker),?/i);
          newValue === true ? timepicker.show() : timepicker.hide();
        });
        if (isNative && (options.useNative || defaults.useNative)) options.timeFormat = 'HH:mm';
        var timepicker = $timepicker(element, controller, options);
        options = timepicker.$options;
        var lang = options.lang;
        var formatDate = function(date, format, timezone) {
          return $dateFormatter.formatDate(date, format, lang, timezone);
        };
        var dateParser = $dateParser({
          format: options.timeFormat,
          lang: lang
        });
        angular.forEach([ 'minTime', 'maxTime' ], function(key) {
          angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
            timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
            !isNaN(timepicker.$options[key]) && timepicker.$build();
            validateAgainstMinMaxTime(controller.$dateValue);
          });
        });
        scope.$watch(attr.ngModel, function(newValue, oldValue) {
          timepicker.update(controller.$dateValue);
        }, true);
        function validateAgainstMinMaxTime(parsedTime) {
          if (!angular.isDate(parsedTime)) return;
          var isMinValid = isNaN(options.minTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) >= options.minTime;
          var isMaxValid = isNaN(options.maxTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) <= options.maxTime;
          var isValid = isMinValid && isMaxValid;
          controller.$setValidity('date', isValid);
          controller.$setValidity('min', isMinValid);
          controller.$setValidity('max', isMaxValid);
          if (!isValid) {
            return;
          }
          controller.$dateValue = parsedTime;
        }
        controller.$parsers.unshift(function(viewValue) {
          var date;
          if (!viewValue) {
            controller.$setValidity('date', true);
            return null;
          }
          var parsedTime = angular.isDate(viewValue) ? viewValue : dateParser.parse(viewValue, controller.$dateValue);
          if (!parsedTime || isNaN(parsedTime.getTime())) {
            controller.$setValidity('date', false);
            return;
          } else {
            validateAgainstMinMaxTime(parsedTime);
          }
          if (options.timeType === 'string') {
            date = dateParser.timezoneOffsetAdjust(parsedTime, options.timezone, true);
            return formatDate(date, options.modelTimeFormat || options.timeFormat);
          }
          date = dateParser.timezoneOffsetAdjust(controller.$dateValue, options.timezone, true);
          if (options.timeType === 'number') {
            return date.getTime();
          } else if (options.timeType === 'unix') {
            return date.getTime() / 1e3;
          } else if (options.timeType === 'iso') {
            return date.toISOString();
          } else {
            return new Date(date);
          }
        });
        controller.$formatters.push(function(modelValue) {
          var date;
          if (angular.isUndefined(modelValue) || modelValue === null) {
            date = NaN;
          } else if (angular.isDate(modelValue)) {
            date = modelValue;
          } else if (options.timeType === 'string') {
            date = dateParser.parse(modelValue, null, options.modelTimeFormat);
          } else if (options.timeType === 'unix') {
            date = new Date(modelValue * 1e3);
          } else {
            date = new Date(modelValue);
          }
          controller.$dateValue = dateParser.timezoneOffsetAdjust(date, options.timezone);
          return getTimeFormattedString();
        });
        controller.$render = function() {
          element.val(getTimeFormattedString());
        };
        function getTimeFormattedString() {
          return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.timeFormat);
        }
        scope.$on('$destroy', function() {
          if (timepicker) timepicker.destroy();
          options = null;
          timepicker = null;
        });
      }
    };
  } ]);
  angular.module('mgcrea.ngStrap.typeahead', [ 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions' ]).provider('$typeahead', function() {
    var defaults = this.defaults = {
      animation: 'am-fade',
      prefixClass: 'typeahead',
      prefixEvent: '$typeahead',
      placement: 'bottom-left',
      template: 'typeahead/typeahead.tpl.html',
      trigger: 'focus',
      container: false,
      keyboard: true,
      html: false,
      delay: 0,
      minLength: 1,
      filter: 'filter',
      limit: 6,
      autoSelect: false,
      comparator: '',
      trimValue: true
    };
    this.$get = [ '$window', '$rootScope', '$tooltip', '$timeout', function($window, $rootScope, $tooltip, $timeout) {
      var bodyEl = angular.element($window.document.body);
      function TypeaheadFactory(element, controller, config) {
        var $typeahead = {};
        var options = angular.extend({}, defaults, config);
        $typeahead = $tooltip(element, options);
        var parentScope = config.scope;
        var scope = $typeahead.$scope;
        scope.$resetMatches = function() {
          scope.$matches = [];
          scope.$activeIndex = options.autoSelect ? 0 : -1;
        };
        scope.$resetMatches();
        scope.$activate = function(index) {
          scope.$$postDigest(function() {
            $typeahead.activate(index);
          });
        };
        scope.$select = function(index, evt) {
          scope.$$postDigest(function() {
            $typeahead.select(index);
          });
        };
        scope.$isVisible = function() {
          return $typeahead.$isVisible();
        };
        $typeahead.update = function(matches) {
          scope.$matches = matches;
          if (scope.$activeIndex >= matches.length) {
            scope.$activeIndex = options.autoSelect ? 0 : -1;
          }
          if (/^(bottom|bottom-left|bottom-right)$/.test(options.placement)) return;
          $timeout($typeahead.$applyPlacement);
        };
        $typeahead.activate = function(index) {
          scope.$activeIndex = index;
        };
        $typeahead.select = function(index) {
          if (index === -1) return;
          var value = scope.$matches[index].value;
          controller.$setViewValue(value);
          controller.$render();
          scope.$resetMatches();
          if (parentScope) parentScope.$digest();
          scope.$emit(options.prefixEvent + '.select', value, index, $typeahead);
        };
        $typeahead.$isVisible = function() {
          if (!options.minLength || !controller) {
            return !!scope.$matches.length;
          }
          return scope.$matches.length && angular.isString(controller.$viewValue) && controller.$viewValue.length >= options.minLength;
        };
        $typeahead.$getIndex = function(value) {
          var l = scope.$matches.length, i = l;
          if (!l) return;
          for (i = l; i--; ) {
            if (scope.$matches[i].value === value) break;
          }
          if (i < 0) return;
          return i;
        };
        $typeahead.$onMouseDown = function(evt) {
          evt.preventDefault();
          evt.stopPropagation();
        };
        $typeahead.$onKeyDown = function(evt) {
          if (!/(38|40|13)/.test(evt.keyCode)) return;
          if ($typeahead.$isVisible() && !(evt.keyCode === 13 && scope.$activeIndex === -1)) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          if (evt.keyCode === 13 && scope.$matches.length) {
            $typeahead.select(scope.$activeIndex);
          } else if (evt.keyCode === 38 && scope.$activeIndex > 0) scope.$activeIndex--; else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1) scope.$activeIndex++; else if (angular.isUndefined(scope.$activeIndex)) scope.$activeIndex = 0;
          scope.$digest();
        };
        var show = $typeahead.show;
        $typeahead.show = function() {
          show();
          $timeout(function() {
            $typeahead.$element && $typeahead.$element.on('mousedown', $typeahead.$onMouseDown);
            if (options.keyboard) {
              element && element.on('keydown', $typeahead.$onKeyDown);
            }
          }, 0, false);
        };
        var hide = $typeahead.hide;
        $typeahead.hide = function() {
          $typeahead.$element && $typeahead.$element.off('mousedown', $typeahead.$onMouseDown);
          if (options.keyboard) {
            element && element.off('keydown', $typeahead.$onKeyDown);
          }
          if (!options.autoSelect) $typeahead.activate(-1);
          hide();
        };
        return $typeahead;
      }
      TypeaheadFactory.defaults = defaults;
      return TypeaheadFactory;
    } ];
  }).directive('bsTypeahead', [ '$window', '$parse', '$q', '$typeahead', '$parseOptions', function($window, $parse, $q, $typeahead, $parseOptions) {
    var defaults = $typeahead.defaults;
    return {
      restrict: 'EAC',
      require: 'ngModel',
      link: function postLink(scope, element, attr, controller) {
        var options = {
          scope: scope
        };
        angular.forEach([ 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'filter', 'limit', 'minLength', 'watchOptions', 'selectMode', 'autoSelect', 'comparator', 'id', 'prefixEvent', 'prefixClass' ], function(key) {
          if (angular.isDefined(attr[key])) options[key] = attr[key];
        });
        var falseValueRegExp = /^(false|0|)$/i;
        angular.forEach([ 'html', 'container', 'trimValue' ], function(key) {
          if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
        });
        element.attr('autocomplete', 'off');
        var filter = options.filter || defaults.filter;
        var limit = options.limit || defaults.limit;
        var comparator = options.comparator || defaults.comparator;
        var bsOptions = attr.bsOptions;
        if (filter) bsOptions += ' | ' + filter + ':$viewValue';
        if (comparator) bsOptions += ':' + comparator;
        if (limit) bsOptions += ' | limitTo:' + limit;
        var parsedOptions = $parseOptions(bsOptions);
        var typeahead = $typeahead(element, controller, options);
        if (options.watchOptions) {
          var watchedOptions = parsedOptions.$match[7].replace(/\|.+/, '').replace(/\(.*\)/g, '').trim();
          scope.$watchCollection(watchedOptions, function(newValue, oldValue) {
            parsedOptions.valuesFn(scope, controller).then(function(values) {
              typeahead.update(values);
              controller.$render();
            });
          });
        }
        scope.$watch(attr.ngModel, function(newValue, oldValue) {
          scope.$modelValue = newValue;
          parsedOptions.valuesFn(scope, controller).then(function(values) {
            if (options.selectMode && !values.length && newValue.length > 0) {
              controller.$setViewValue(controller.$viewValue.substring(0, controller.$viewValue.length - 1));
              return;
            }
            if (values.length > limit) values = values.slice(0, limit);
            var isVisible = typeahead.$isVisible();
            isVisible && typeahead.update(values);
            if (values.length === 1 && values[0].value === newValue) return;
            !isVisible && typeahead.update(values);
            controller.$render();
          });
        });
        controller.$formatters.push(function(modelValue) {
          var displayValue = parsedOptions.displayValue(modelValue);
          if (displayValue) return displayValue;
          if (modelValue && typeof modelValue !== 'object') {
            return modelValue;
          }
          return '';
        });
        controller.$render = function() {
          if (controller.$isEmpty(controller.$viewValue)) return element.val('');
          var index = typeahead.$getIndex(controller.$modelValue);
          var selected = angular.isDefined(index) ? typeahead.$scope.$matches[index].label : controller.$viewValue;
          selected = angular.isObject(selected) ? parsedOptions.displayValue(selected) : selected;
          var value = selected ? selected.toString().replace(/<(?:.|\n)*?>/gm, '') : '';
          element.val(options.trimValue === false ? value : value.trim());
        };
        scope.$on('$destroy', function() {
          if (typeahead) typeahead.destroy();
          options = null;
          typeahead = null;
        });
      }
    };
  } ]);
})(window, document);
/**
 * angular-strap
 * @version v2.2.4 - 2015-05-30
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('alert/alert.tpl.html', '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default-strap" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default-strap btn-block-strap text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default-strap" style="width: 100%" ng-class="{\'btn-primary-strap\': el.selected, \'btn-info-strap btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default-strap" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('popover/popover.tpl.html', '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default-strap btn-xs-strap" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default-strap btn-xs-strap" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default-strap" ng-class="{\'btn-primary-strap\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default-strap" ng-class="{\'btn-primary-strap\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="showSeconds && row[2].date" style="width: 100%" type="button" class="btn btn-default-strap" ng-class="{\'btn-primary-strap\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary-strap\': !!isAM}" class="btn btn-default-strap" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary-strap\': !isAM}" class="btn btn-default-strap" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default-strap pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap').run([ '$templateCache', function($templateCache) {
    $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
  } ]);
})(window, document);
var app = angular.module('gigwellForm', [ 'formly', 'formlyMaterial', 'ngMessages', 'mgcrea.ngStrap' ] );

app.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

app.config(function($timepickerProvider) {
  angular.extend($timepickerProvider.defaults, {
    timeFormat: 'hh:mm a',
    length: 5,
    autoclose: false,
    placement: 'bottom-left',
    timeType: 'iso'
  });
});

app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'MM/dd/yyyy',
    startWeek: 0,
    autoclose: true,
    placement: 'bottom-left',
    timezone: 'UTC'
  });
})

app.run(function(formlyConfig, formlyValidationMessages) {
	formlyConfig.setType({
    	name : 'columnheader',
		templateUrl : 'columnheader.html'
		/* templateUrl : '/src/resources/fields/columnheader.html' */
    });
    formlyConfig.setType({
    	name : 'input',
		templateUrl : 'input.html',
		overwriteOk: true
    });
    formlyConfig.setType({
    	name : 'select',
		templateUrl : 'select.html',
		overwriteOk: true
    });
	formlyConfig.setType({
    	name : 'autocomplete',
		templateUrl : 'autocomplete.html'
    });
	formlyConfig.setType({
    	name : 'chips',
		templateUrl : 'chips.html'
    });
	formlyConfig.setType({
    	name : 'time',
		templateUrl : 'timepicker.html'
    });
	formlyConfig.setType({
    	name : 'date',
		templateUrl : 'datepicker.html'
    });
	formlyConfig.setType({
    	name : 'switch',
		templateUrl : 'switch.html'
    });
	formlyConfig.setType({
    	name : 'areatext',
		templateUrl : 'areatext.html'
    });
	formlyConfig.setType({
    	name : 'currency',
		templateUrl : 'currency.html'
    });
});
app.factory('external', function($http) {
	return {
		getModelForm : getModelForm,
		getCurrencies : getCurrencies,
		getCountries : getCountries,
		getEventTypes : getEventTypes,
		getArtists : getArtists
	};
	
	function getModelForm() {
		return $http.get('/src/resources/jsonModel.json');
	}
	
	function getCountries() {
		return $http.get('/src/resources/countries.default.json');
	}
	
	function getCurrencies(id) {
		return $http.get('//green.dev.gig-well.com/api/agency/'+id+'/booknow/presets/currencies');
	}
	
	function getEventTypes(id) {
		return $http.get('//green.dev.gig-well.com/api/agency/'+id+'/booknow/presets/eventTypes');
	}
	
	function getArtists(id) {
		return $http.get('//green.dev.gig-well.com/api/agency/'+id+'/roster/artists?filtered=true');
	}
});

app.factory('commons', function($http) {
	return {
		getFromUrl : getFromUrl
	};
	
	function getFromUrl(search) {
		try {
			var query = location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
			    var pair = vars[i].split("=");
			    if (pair.length == 2 && pair[0] == search) {
			    	var aux = pair[1].trim();
			    	return aux == ''? null : aux;
			    }
			}
		} catch (err) {
			return null;
		}
	}
});
/**
 *
 * @ngdoc directive
 * @name notifyIframeParentResize
 * @restrict A
 *
 * @description
 *
 **/
app.directive('notifyIframeParentResize', function(commons) {
	return {
		restrict : 'A',
		link : function($scope, $element, $attrs) {
			var origin = commons.getFromUrl('iframeOrigin');
			if (!origin) return;
			
			window.addEventListener('resize', notifyResize);
			notifyResize();
			
			$scope.$on('$destroy', function() {
				window.removeEventListener('resize', notifyResize);
			});

			function notifyResize() {
				window.setTimeout(function() {
					var data = {
						name : 'gigwell:resize:iframe',
						height : $element[0].scrollHeight+10,
						width : $element[0].scrollWidth
					};
					parent.postMessage(JSON.stringify(data), unescape(origin));
				}, 300);
			}
		}
	};
});
app.controller('MainCtrl', function MainCtrl($scope, external, commons) {
	var vm = this;
	var agencyId = commons.getFromUrl('agency-id');
	if (agencyId == null) return;
	
	vm.model = {
		agency : agencyId,
		lineup : [],
		offer : {
			currencyType: "USD"
		},
		price: {
			currencyType: "USD"
		}/*,
		time : new Date(1970, 0, 1, 10, 30, 40),
		date : new Date() */
	}
	
	var artistId = commons.getFromUrl('artist-id');
	if (artistId!=null) vm.artist_sel = artistId;
	
	external.getModelForm().then(function(response) {
		var hideForm;
		var forms = [];
		angular.forEach(response.data, function(form, i) {
			hideForm = false;
			angular.forEach(form, function(field, idx) {
				if (idx == 0 && field.type == 'columnheader')
					hideForm = (field.hide === true);
				else if (!hideForm) {
					if (artistId != null && field.key == 'artist')
						field.hide = true;
					else if (field.hide !== true && functions[field.key])
						field.controller = functions[field.key];
				}
			});
			if (!hideForm) forms.push(form);
		});
		
		vm.formFields1 = forms[0];
		vm.formFields2 = forms[1];
		vm.formFields3 = forms[2];
		vm.formFields4 = forms[3];
		vm.originalFields = angular.copy( forms );
	});
	
	/* function definitions */
	vm.onSubmit = onSubmit;
	function onSubmit() {
		var data = {};
		angular.forEach(vm.model, function(value, key) {
			if (value == null || key.split('-').length > 1 && key.split('-')[1] == 'tmp') {
				// skip
			} else if (key == 'artist') {
				data['artistEntityId'] = value.entityId;
				
			} else if (key == 'agency') {
				data['agencyEntityId'] = value;
				
			} else if (key.split('_').length > 1) {
				var aux = key.split('_');
				if (!data[aux[0]]) data[aux[0]] = {};
				data[aux[0]][aux[1]] = value;
				
			} else {
				data[key] = value;
			}
		}, data);
		
		if (!data['artistEntityId'] && vm.artist_sel) {
			data['artistEntityId'] = vm.artist_sel;
		}
		
		var post = {};
		post['request'] = data;
		
//		console.log('default', JSON.stringify(vm.model));
//		console.log('parsed', JSON.stringify(post));
		alert(JSON.stringify(post), null, 2);
	};
	
	vm.onCancel = onCancel;
	function onCancel() {
		var origin = commons.getFromUrl('iframeOrigin');
		if (!origin) return;
		var data = {
			name : 'gigwell:close:iframe'
		};
		parent.postMessage(JSON.stringify(data), unescape(origin));
	};
	
	var functions = {};
	functions['artist'] = function($scope, external) {
		// @ngInject
		external.getArtists($scope.model.agency).then(function(response) {
			$scope.to.data = response.data.data[$scope.model.agency].artists;
			// note, the line above is shorthand for:
			// $scope.options.templateOptions.data = [];
			return response;
		});
		
		$scope.to.querySearch = function(query) {
			if (!query || !$scope.to.data ||
				!$scope.to.data.length || $scope.to.data.length == 0) return [];
			var result = $scope.to.data.filter( $scope.to.createFilterFor(query) );
			if (result.length == 0) return $scope.to.data;
			return result;
		}
		
		$scope.to.createFilterFor = function createFilterFor(query) {
		      var lowercaseQuery = angular.lowercase(query);
		      return function filterFn(artist) {
		    	  if (!artist.title || !artist.title.toLowerCase) return false;
		    	  return (artist.title.toLowerCase().indexOf(lowercaseQuery) !== -1);
		      };
		}
	}
	functions['offer'] = function($scope, external) {
		external.getCurrencies($scope.model.agency).then(function(response) {
			$scope.to.data = response.data.data.currencies;
			return response;
		});
	}
	functions['price'] = function($scope, external) {
		external.getCurrencies($scope.model.agency).then(function(response) {
			$scope.to.data = response.data.data.currencies;
			return response;
		});
	}
	functions['type'] = function($scope, external) {
		external.getEventTypes($scope.model.agency).then(function(response) {
			$scope.to.data = response.data.data.eventTypes;
			return response;
		});
	}
	functions['venue_country'] = function($scope, external) {
		external.getCountries().then(function(response) {
			$scope.to.data = response.data;
			return response;
		});
		
		$scope.to.querySearch = function(query) {
			if (!query || !$scope.to.data ||
				!$scope.to.data.length || $scope.to.data.length == 0) return [];
			return $scope.to.data.filter( $scope.to.createFilterFor(query) );
		}
		
		$scope.to.createFilterFor = function createFilterFor(query) {
		      var lowercaseQuery = angular.lowercase(query);
		      return function filterFn(country) {
		    	  if (!country.name || !country.name.toLowerCase) return false;
		    	  return (country.name.toLowerCase().indexOf(lowercaseQuery) == 0);
		      };
		}
	}
	functions['organization_country'] = function($scope, external) {
		external.getCountries().then(function(response) {
			$scope.to.data = response.data;
			return response;
		});
		
		$scope.to.querySearch = function(query) {
			if (!query || !$scope.to.data ||
				!$scope.to.data.length || $scope.to.data.length == 0) return [];
			return $scope.to.data.filter( $scope.to.createFilterFor(query) );
		}
		
		$scope.to.createFilterFor = function createFilterFor(query) {
		      var lowercaseQuery = angular.lowercase(query);
		      return function filterFn(country) {
		    	  if (!country.name || !country.name.toLowerCase) return false;
		    	  return (country.name.toLowerCase().indexOf(lowercaseQuery) == 0);
		      };
		}
	}
});