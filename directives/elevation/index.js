!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("vElevation",[],t):"object"===typeof exports?exports.vElevation=t():e.vElevation=t()}("undefined"!==typeof self?self:this,(function(){return function(){"use strict";var e={};const t={MIN:0,MAX:24},o={transition:"mdc-elevation-transition",overlay:"mdc-elevation-overlay"},n=e=>{let o="";return e>=t.MIN&&e<=t.MAX?o="mdc-elevation--z".concat(e):console.warn("[v-shadow]","The elevation values are mapped out in a 'z-space' and range from 0 to 24"),o},a=(e,t,a)=>{let{value:s,modifiers:i}=a,r=[];if(i.transition)if(Array.isArray(s)&&2===s.length){let a=n(s[0]),i=n(s[1]);r.push(a),r.push(o.transition),t["".concat(e,"EventListener")]("mouseenter",(()=>{t.classList.add(i)})),t["".concat(e,"EventListener")]("mouseleave",(()=>{t.classList.remove(i)}))}else console.warn("[v-shadow]","Invalid elevation value");else r.push(n(s));if(t.classList[e](...r),i.overlay){const e=document.createElement("div");e.className=o.overlay,t.insertBefore(e,t.firstChild)}},s={name:"shadow",beforeMount(e,t){a("add",e,t)},beforeUnmount(e,t){a("remove",e,t)}};return e.default=s,e=e.default}()}));