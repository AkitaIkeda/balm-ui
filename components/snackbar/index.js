!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("vue")):"function"===typeof define&&define.amd?define("UiSnackbar",["vue"],e):"object"===typeof exports?exports.UiSnackbar=e(require("vue")):t.UiSnackbar=e(t.Vue)}("undefined"!==typeof self?self:this,(function(t){return function(){"use strict";var e={996:function(t){var e=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===n}(t)}(t)};var n="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?c((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function r(t,e,n){return t.concat(e).map((function(t){return o(t,n)}))}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function a(t,e){try{return e in t}catch(n){return!1}}function s(t,e,n){var r={};return n.isMergeableObject(t)&&i(t).forEach((function(e){r[e]=o(t[e],n)})),i(e).forEach((function(i){(function(t,e){return a(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(a(t,i)&&n.isMergeableObject(e[i])?r[i]=function(t,e){if(!e.customMerge)return c;var n=e.customMerge(t);return"function"===typeof n?n:c}(i,n)(t[i],e[i],n):r[i]=o(e[i],n))})),r}function c(t,n,i){(i=i||{}).arrayMerge=i.arrayMerge||r,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=o;var a=Array.isArray(n);return a===Array.isArray(t)?a?i.arrayMerge(t,n,i):s(t,n,i):o(n,i)}c.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return c(t,n,e)}),{})};var u=c;t.exports=u},895:function(e){e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var r={};return function(){o.d(r,{default:function(){return pt}});var t=o(996),e=o.n(t);const n=/(?:^\[object\s(.*?)\]$)/;var i=t=>Object.prototype.toString.call(t).replace(n,"$1").toLowerCase();const a=t=>{let{componentProps:n,propName:o,props:r}=t,a=r[o];if("object"===i(a)){const t=n[o].default;n[o].default=()=>e()(t,a)}else Array.isArray(a)?n[o].default=()=>a:n[o].default=a},s=t=>{let{componentMixins:e,propName:n,props:o}=t;if(e.length){let t=e.length;for(;t--;)if(e[t].props&&void 0!==e[t].props[n]){a({componentProps:e[t].props,propName:n,props:o});break}}};var c=(t,e)=>{for(const n of Object.keys(e))t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):a({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})};var u=t=>{const e={install(e){c(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),e.component(t.name,t)}};return e},l=o(895),p={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},f={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},d={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},m=d.ARIA_LIVE_DELAY_MS,y=f.ARIA_LIVE_LABEL_TEXT_ATTR;function E(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),o=e.textContent.trim();if(o&&n){t.setAttribute("aria-live","off"),e.textContent="";var r=document.createElement("span");r.setAttribute("style","display: inline-block; width: 0; height: 1px;"),r.textContent="\xa0",e.appendChild(r),e.setAttribute(y,o),setTimeout((function(){t.setAttribute("aria-live",n),e.removeAttribute(y),e.textContent=o}),m)}}var b=function(t,e){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},b(t,e)};function h(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var T=function(){return T=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},T.apply(this,arguments)};Object.create;function O(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a}function S(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}Object.create;var C=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),_=function(){function t(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];this.root=t,this.initialize.apply(this,S([],O(n))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new C({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var o;void 0===n&&(n=!1),"function"===typeof CustomEvent?o=new CustomEvent(t,{bubbles:n,detail:e}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root.dispatchEvent(o)},t}();function A(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(g(n,e))return n;n=n.parentElement}return null}function g(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var v=p.OPENING,N=p.OPEN,M=p.CLOSING,I=f.REASON_ACTION,k=f.REASON_DISMISS,D=function(t){function e(n){var o=t.call(this,T(T({},e.defaultAdapter),n))||this;return o.opened=!1,o.animationFrame=0,o.animationTimer=0,o.autoDismissTimer=0,o.autoDismissTimeoutMs=d.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape=!0,o}return h(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(v),this.adapter.removeClass(N),this.adapter.removeClass(M)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(M),this.adapter.addClass(v),this.adapter.announce(),this.runNextAnimationFrame((function(){t.adapter.addClass(N),t.animationTimer=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),e!==d.INDETERMINATE&&(t.autoDismissTimer=setTimeout((function(){t.close(k)}),e))}),d.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(p.CLOSING),this.adapter.removeClass(p.OPEN),this.adapter.removeClass(p.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),d.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var e=d.MIN_AUTO_DISMISS_TIMEOUT_MS,n=d.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===d.INDETERMINATE||t<=n&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"\u2013"+n+"\n        (or "+d.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(k)},e.prototype.handleActionButtonClick=function(t){this.close(I)},e.prototype.handleActionIconClick=function(t){this.close(k)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(p.OPENING),this.adapter.removeClass(p.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e}(C),L=f.SURFACE_SELECTOR,B=f.LABEL_SELECTOR,j=f.ACTION_SELECTOR,w=f.DISMISS_SELECTOR,x=f.OPENING_EVENT,P=f.OPENED_EVENT,V=f.CLOSING_EVENT,R=f.CLOSED_EVENT,U=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(){return E}),this.announce=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(L),this.labelEl=this.root.querySelector(B),this.actionEl=this.root.querySelector(j),this.handleKeyDown=function(e){t.foundation.handleKeyDown(e)},this.handleSurfaceClick=function(e){var n=e.target;t.isActionButton(n)?t.foundation.handleActionButtonClick(e):t.isActionIcon(n)&&t.foundation.handleActionIconClick(e)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this;return new D({addClass:function(e){t.root.classList.add(e)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(e){return t.emit(R,e?{reason:e}:{})},notifyClosing:function(e){return t.emit(V,e?{reason:e}:{})},notifyOpened:function(){return t.emit(P,{})},notifyOpening:function(){return t.emit(x,{})},removeClass:function(e){return t.root.classList.remove(e)}})},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),e.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},e.prototype.isActionButton=function(t){return Boolean(A(t,j))},e.prototype.isActionIcon=function(t){return Boolean(A(t,w))},e}(_);const F={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return[F.cssClasses.icon,...e]}};function K(t){let{emit:e}=t;return{handleClick:function(t){e(F.EVENTS.CLICK,t)}}}var G=F;const $={icon:{type:String,default:""}};const H=(0,l.createElementVNode)("span",{class:"mdc-button__ripple"},null,-1),z=(0,l.createElementVNode)("span",{class:"mdc-button__focus-ring"},null,-1),X=["textContent"],q={key:1,class:"mdc-button__label"},Y={name:"MdcButton",customOptions:{UI_GLOBAL:G}};var W=Object.assign(Y,{props:{outlined:{type:Boolean,default:!1},unelevated:{type:Boolean,default:!1},...$,noLabel:{type:Boolean,default:!1}},emits:[G.EVENTS.CLICK],setup(t,e){let{emit:n}=e;const o=t,{handleClick:r}=K({emit:n}),{materialIcon:i}=function(t){return{materialIcon:(0,l.computed)((()=>t.icon||!1))}}(o),a=(0,l.computed)((()=>({"mdc-button":!0,"mdc-button--outlined":o.outlined,"mdc-button--unelevated":o.unelevated})));return(e,n)=>((0,l.openBlock)(),(0,l.createElementBlock)("button",{type:"button",class:(0,l.normalizeClass)((0,l.unref)(a)),onClick:n[0]||(n[0]=function(){return(0,l.unref)(r)&&(0,l.unref)(r)(...arguments)})},[H,z,(0,l.renderSlot)(e.$slots,"icon",{},(()=>[(0,l.unref)(i)?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)((0,l.unref)(G).getMaterialIconClass("mdc-button__icon")),"aria-hidden":"true",textContent:(0,l.toDisplayString)((0,l.unref)(i))},null,10,X)):(0,l.createCommentVNode)("",!0)])),t.noLabel?(0,l.renderSlot)(e.$slots,"default",{key:0}):((0,l.openBlock)(),(0,l.createElementBlock)("span",q,[(0,l.renderSlot)(e.$slots,"default")]))],2))}});var J=W;const Q=(0,l.createElementVNode)("div",{class:"mdc-icon-button__ripple"},null,-1),Z=(0,l.createElementVNode)("span",{class:"mdc-icon-button__focus-ring"},null,-1),tt={name:"MdcIconButton",customOptions:{UI_GLOBAL:G}};var et=Object.assign(tt,{emits:[G.EVENTS.CLICK],setup(t,e){let{emit:n}=e;const{handleClick:o}=K({emit:n});return(t,e)=>((0,l.openBlock)(),(0,l.createElementBlock)("button",{type:"button",class:(0,l.normalizeClass)(["mdc-icon-button",(0,l.unref)(G).cssClasses.icon]),onClick:e[0]||(e[0]=function(){return(0,l.unref)(o)&&(0,l.unref)(o)(...arguments)})},[Q,Z,(0,l.renderSlot)(t.$slots,"default")],2))}});var nt=et;const ot={class:"mdc-snackbar__surface",role:"status","aria-relevant":"additions"},rt={class:"mdc-snackbar__label","aria-atomic":"false"},it={class:"mdc-snackbar__actions","aria-atomic":"true"},at=(0,l.createTextVNode)(" close "),st="UiSnackbar",ct={ACTION_TYPE:{ACTION_BUTTON:0,DISMISS_ICON:1},timeoutMs:{MIN:4e3,MAX:1e4,DEFAULTS:5e3},position:{TOP:"top",BOTTOM:"bottom",CENTER:"center"},EVENTS:{CHANGE:"update:modelValue",CLOSED:"closed"}},ut={name:st,customOptions:{name:st,UI_SNACKBAR:ct}};var lt=Object.assign(ut,{props:{actionType:{type:Number,default:ct.ACTION_TYPE.ACTION_BUTTON},modelValue:{type:Boolean,default:!1},timeoutMs:{type:[Number,String],default:ct.timeoutMs.DEFAULTS},message:{type:String,default:""},actionButtonText:{type:String,default:""},stacked:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},position:{type:String,default:ct.position.BOTTOM}},emits:[ct.EVENTS.CHANGE,ct.EVENTS.CLOSED],setup(t,e){let{emit:n}=e;const o=t,r=(0,l.ref)(null),i=(0,l.reactive)({$snackbar:null}),a=(0,l.computed)((()=>["top","center"].includes(o.position)?"mdc-snackbar--".concat(o.position):"")),s=(0,l.computed)((()=>r.value&&r.value.classList.contains("mdc-snackbar--open"))),c=(0,l.computed)((()=>[{"mdc-snackbar":!0,"mdc-snackbar--stacked":o.stacked,"mdc-snackbar--leading":o.leading,"mdc-snackbar--open":s.value},a.value])),u=(0,l.computed)((()=>o.actionType===ct.ACTION_TYPE.DISMISS_ICON)),p=(0,l.computed)((()=>u.value?"mdc-snackbar__dismiss":"mdc-snackbar__action"));function d(t){t>=ct.timeoutMs.MIN&&t<=ct.timeoutMs.MAX?i.$snackbar.timeoutMs=t:console.warn("[".concat(st,"]: The 'timeoutMs' prop must be between ").concat(ct.timeoutMs.MIN," and ").concat(ct.timeoutMs.MAX))}return(0,l.watch)((()=>o.modelValue),(t=>{t&&i.$snackbar.open()})),(0,l.watch)((()=>o.timeoutMs),(t=>{d(+t)})),(0,l.watch)((()=>o.message),(t=>{i.$snackbar.labelText=t})),(0,l.onMounted)((()=>{i.$snackbar=new U(r.value),o.timeoutMs!==ct.timeoutMs.DEFAULTS&&d(+o.timeoutMs),o.message&&(i.$snackbar.labelText=o.message),i.$snackbar.listen(f.CLOSED_EVENT,(()=>{n(ct.EVENTS.CHANGE,!1),n(ct.EVENTS.CLOSED)}))})),(e,n)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{ref_key:"snackbar",ref:r,class:(0,l.normalizeClass)((0,l.unref)(c))},[(0,l.createElementVNode)("div",ot,[(0,l.createElementVNode)("div",rt,[(0,l.renderSlot)(e.$slots,"default",{},(()=>[(0,l.createTextVNode)((0,l.toDisplayString)(t.message),1)]))]),(0,l.createElementVNode)("div",it,[(0,l.renderSlot)(e.$slots,"action",{actionClass:(0,l.unref)(p)},(()=>[(0,l.unref)(u)?((0,l.openBlock)(),(0,l.createBlock)(nt,{key:0,class:(0,l.normalizeClass)((0,l.unref)(p))},{default:(0,l.withCtx)((()=>[at])),_:1},8,["class"])):((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[t.actionButtonText?((0,l.openBlock)(),(0,l.createBlock)(J,{key:0,class:(0,l.normalizeClass)((0,l.unref)(p))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(t.actionButtonText),1)])),_:1},8,["class"])):(0,l.createCommentVNode)("",!0)],64))]))])])],2))}});var pt=u(lt)}(),r=r.default}()}));