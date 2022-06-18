!function(e,r){"object"===typeof exports&&"object"===typeof module?module.exports=r(require("vue")):"function"===typeof define&&define.amd?define("UiDivider",["vue"],r):"object"===typeof exports?exports.UiDivider=r(require("vue")):e.UiDivider=r(e.Vue)}("undefined"!==typeof self?self:this,(function(e){return function(){"use strict";var r={996:function(e){var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)};var t="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,r){return!1!==r.clone&&r.isMergeableObject(e)?u((t=e,Array.isArray(t)?[]:{}),e,r):e;var t}function o(e,r,t){return e.concat(r).map((function(e){return n(e,t)}))}function c(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(r){return e.propertyIsEnumerable(r)})):[]}(e))}function i(e,r){try{return r in e}catch(t){return!1}}function a(e,r,t){var o={};return t.isMergeableObject(e)&&c(e).forEach((function(r){o[r]=n(e[r],t)})),c(r).forEach((function(c){(function(e,r){return i(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,c)||(i(e,c)&&t.isMergeableObject(r[c])?o[c]=function(e,r){if(!r.customMerge)return u;var t=r.customMerge(e);return"function"===typeof t?t:u}(c,t)(e[c],r[c],t):o[c]=n(r[c],t))})),o}function u(e,t,c){(c=c||{}).arrayMerge=c.arrayMerge||o,c.isMergeableObject=c.isMergeableObject||r,c.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(t);return i===Array.isArray(e)?i?c.arrayMerge(e,t,c):a(e,t,c):n(t,c)}u.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,t){return u(e,t,r)}),{})};var p=u;e.exports=p},895:function(r){r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};var o={};return function(){n.d(o,{default:function(){return v}});var e=n(996),r=n.n(e);const t=/(?:^\[object\s(.*?)\]$)/;var c=e=>Object.prototype.toString.call(e).replace(t,"$1").toLowerCase();const i=e=>{let{componentProps:t,propName:n,props:o}=e,i=o[n];if("object"===c(i)){const e=t[n].default;t[n].default=()=>r()(e,i)}else Array.isArray(i)?t[n].default=()=>i:t[n].default=i},a=e=>{let{componentMixins:r,propName:t,props:n}=e;if(r.length){let e=r.length;for(;e--;)if(r[e].props&&void 0!==r[e].props[t]){i({componentProps:r[e].props,propName:t,props:n});break}}};var u=(e,r)=>{for(const t of Object.keys(r))e.props?void 0===e.props[t]?a({componentMixins:e.mixins,propName:t,props:r}):i({componentProps:e.props,propName:t,props:r}):a({componentMixins:e.mixins,propName:t,props:r})};var p=e=>{const r={install(r){u(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r.component(e.name,e)}};return r},s=n(895);var l=(e,r,t)=>e[t]||e.type===r[t]||e.type===t;const f={class:"mdc-divider__text"},d={key:1,class:"mdc-divider__text"},m={TYPES:{horizontal:0,vertical:1}},y={name:"UiDivider",customOptions:{UI_DIVIDER:m}};var v=p(Object.assign(y,{props:{type:{type:[String,Number],default:0}},setup(e){const r=e,t=(0,s.useSlots)(),n=(0,s.computed)((()=>l(r,m.TYPES,"vertical")||"|"===r.type)),o=(0,s.computed)((()=>!!t.default)),c=(0,s.computed)((()=>({"mdc-divider":!0,"mdc-divider--horizontal":!n.value,"mdc-divider--vertical":n.value,"mdc-divider--no-text":!o.value})));return(e,r)=>((0,s.openBlock)(),(0,s.createElementBlock)("div",{class:(0,s.normalizeClass)((0,s.unref)(c))},[(0,s.unref)(o)?((0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,{key:0},[(0,s.unref)(n)?((0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,{key:0},[(0,s.renderSlot)(e.$slots,"left"),(0,s.createElementVNode)("span",f,[(0,s.createElementVNode)("span",null,[(0,s.renderSlot)(e.$slots,"default")])]),(0,s.renderSlot)(e.$slots,"right")],64)):((0,s.openBlock)(),(0,s.createElementBlock)("span",d,[(0,s.createElementVNode)("span",null,[(0,s.renderSlot)(e.$slots,"default")])]))],64)):(0,s.createCommentVNode)("",!0)],2))}}))}(),o=o.default}()}));