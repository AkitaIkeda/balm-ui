!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("vue")):"function"===typeof define&&define.amd?define("UiIcon",["vue"],t):"object"===typeof exports?exports.UiIcon=t(require("vue")):e.UiIcon=t(e.Vue)}("undefined"!==typeof self?self:this,(function(e){return function(){"use strict";var t={996:function(e){var t=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function c(e,t,r){var o={};return r.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&r.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return u;var r=t.customMerge(e);return"function"===typeof r?r:u}(a,r)(e[a],t[a],r):o[a]=n(t[a],r))})),o}function u(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||o,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?a.arrayMerge(e,r,a):c(e,r,a):n(r,a)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return u(e,r,t)}),{})};var l=u;e.exports=l},895:function(t){t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){n.d(o,{default:function(){return g}});var e=n(996),t=n.n(e);const r=/(?:^\[object\s(.*?)\]$)/;var a=e=>Object.prototype.toString.call(e).replace(r,"$1").toLowerCase();const i=e=>{let{componentProps:r,propName:n,props:o}=e,i=o[n];if("object"===a(i)){const e=r[n].default;r[n].default=()=>t()(e,i)}else Array.isArray(i)?r[n].default=()=>i:r[n].default=i},c=e=>{let{componentMixins:t,propName:r,props:n}=e;if(t.length){let e=t.length;for(;e--;)if(t[e].props&&void 0!==t[e].props[r]){i({componentProps:t[e].props,propName:r,props:n});break}}};var u=(e,t)=>{for(const r of Object.keys(t))e.props?void 0===e.props[r]?c({componentMixins:e.mixins,propName:r,props:t}):i({componentProps:e.props,propName:r,props:t}):c({componentMixins:e.mixins,propName:r,props:t})};var l=e=>{const t={install(t){u(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),t.component(e.name,e)}};return t},p=n(895);const s={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return[s.cssClasses.icon,...t]}};var f=s;var d=(e,t,r)=>e[r]||e.type===t[r]||e.type===r;const m="UiIcon",y={TYPES:{filled:0,outlined:1,round:2,twoTone:3,sharp:4},DEFAULT_SIZE:24},v={name:m,customOptions:{name:m,UI_GLOBAL:f,UI_ICON:y}};var b=Object.assign(v,{props:{type:{type:[String,Number],default:0},outlined:{type:Boolean,default:!1},round:{type:Boolean,default:!1},twoTone:{type:Boolean,default:!1},sharp:{type:Boolean,default:!1},size:{type:[Number,String],default:y.DEFAULT_SIZE},dark:{type:Boolean,default:!1},light:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1}},emits:[f.EVENTS.CLICK],setup(e,t){let{emit:r}=t;const n=e,{handleClick:o}=function(e){let{emit:t}=e;return{handleClick:function(e){t(s.EVENTS.CLICK,e)}}}({emit:r}),a=(0,p.computed)((()=>d(n,y.TYPES,"filled"))),i=(0,p.computed)((()=>d(n,y.TYPES,"outlined"))),c=(0,p.computed)((()=>d(n,y.TYPES,"round"))),u=(0,p.computed)((()=>d(n,y.TYPES,"twoTone"))),l=(0,p.computed)((()=>d(n,y.TYPES,"sharp"))),f=(0,p.computed)((()=>n.dark&&n.light)),v=(0,p.computed)((()=>n.dark||n.light)),b=(0,p.computed)((()=>{let e={"material-icons":a.value,"material-icons-outlined":i.value,"material-icons-round":c.value,"material-icons-two-tone":u.value,"material-icons-sharp":l.value,"md-dark":n.dark&&!n.light,"md-light":n.light&&!n.dark,"md-inactive":n.inactive};return+n.size!==y.DEFAULT_SIZE&&n.size>0&&(e["md-".concat(n.size)]=!0),e}));return(0,p.onBeforeMount)((()=>{(f.value||!v.value&&n.inactive)&&console.warn("[".concat(m,"]: Invalid dark or light icon"))})),(e,t)=>((0,p.openBlock)(),(0,p.createElementBlock)("i",{class:(0,p.normalizeClass)((0,p.unref)(b)),"aria-hidden":"true",onClick:t[0]||(t[0]=function(){return(0,p.unref)(o)&&(0,p.unref)(o)(...arguments)})},[(0,p.renderSlot)(e.$slots,"default")],2))}});var g=l(b)}(),o=o.default}()}));