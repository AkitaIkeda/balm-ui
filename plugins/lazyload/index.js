!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("$lazyload",[],t):"object"===typeof exports?exports.$lazyload=t():e.$lazyload=t()}("undefined"!==typeof self?self:this,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{install:function(){return a}});const o={src:"",delay:300,scrollEvent:"scroll"};let n=o,r=!0;const i=(e,t)=>{const o="IMG"===e.tagName?e:e.querySelector("img");if(!o||"IMG"!==o.tagName)throw r=!1,new Error("[v-lazyload]: <image> element not found");t(o)},l={init(e,t){e.setAttribute("data-src",t),e.setAttribute("src",n.src)},observe(e){new IntersectionObserver((t=>{const o=e.dataset.src;t[0].isIntersecting&&o&&(e.src=o,e.removeAttribute("data-src"))})).observe(e)},listenerScroll(e){const t=l.throttle(l.load,n.delay);l.load(e),window.addEventListener(n.scrollEvent,(()=>{t(e)}))},load(e){const t=document.documentElement.clientHeight,o=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom;if(o-t<0&&n>0){const t=e.dataset.src;t&&(e.src=t,e.removeAttribute("data-src"))}},throttle(e,t){let o,n;return function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];const c=Date.now(),a=this;if(n||(n=c),clearTimeout(o),c-n>t)return n=c,e.apply(a,i),void clearTimeout(o);o=setTimeout((function(){n=Date.now(),o=null,e.apply(a,i)}),t)}}},c={name:"lazyload",definition:{beforeMount(e,t){let{value:o}=t;r&&i(e,(e=>{l.init(e,o)}))},mounted(e){r&&i(e,(e=>IntersectionObserver?l.observe(e):l.listenerScroll(e)))}}};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=Object.assign({},o,t),e.directive(c.name,c.definition)}const s={install:a};return t.default=s,t}()}));