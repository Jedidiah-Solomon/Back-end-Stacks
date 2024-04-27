(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.A=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.l=0;this.R=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.v}
xa.prototype.return=function(a){this.j={return:a};this.h=this.v};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.v=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Da(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.v:void 0!=b.B&&a.v<b.B?(a.h=b.B,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.m;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ia(a)}a.h.m=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m.next,b,a.h.D):(a.h.D(b),b=Ia(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ha(a,a.h.m["throw"],b,a.h.D):(za(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.m(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ta(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.R()};
b.prototype.ea=function(){var g=this;e(function(){if(g.V()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.V=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(y){try{l(r(y))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(z){r[y]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h.toString()};
var tb={};var ub=new sb("about:invalid#zClosurez",tb);function vb(a){this.ue=a}
function wb(a){return new vb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[wb("data"),wb("http"),wb("https"),wb("mailto"),wb("ftp"),new vb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],yb=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
function zb(a){a instanceof sb?a instanceof sb&&a.constructor===sb?a=a.h:(Pa(a),a="type_error:SafeUrl"):a=yb.test(a)?a:void 0;return a}
;function Ab(a,b){b=zb(b);void 0!==b&&(a.href=b)}
;var Bb={};function Cb(){}
function Db(a){this.h=a}
w(Db,Cb);Db.prototype.toString=function(){return this.h};var Eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Kb(a,b){b=Eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Nb(a){var b=Ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Pb(a){for(var b in a)return!1;return!0}
function Qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ub(a[c]);return b}
var Vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Vb.length;f++)c=Vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Xb=Oa(610401301),Yb=Oa(188588736);function Zb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var $b,ac=C.navigator;$b=ac?ac.userAgentData||null:null;function bc(a){return Xb?$b?$b.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Zb().indexOf(a)}
;function cc(){return Xb?!!$b&&0<$b.brands.length:!1}
function dc(){return cc()?!1:F("Opera")}
function ec(){return cc()?!1:F("Trident")||F("MSIE")}
function fc(){return F("Firefox")||F("FxiOS")}
function hc(){return cc()?bc("Chromium"):(F("Chrome")||F("CriOS"))&&!(cc()?0:F("Edge"))||F("Silk")}
;function ic(a){this.h=a}
ic.prototype.toString=function(){return this.h.toString()};function jc(a){var b="true".toString(),c=[new Db(kc[0].toLowerCase(),Bb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Db)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function lc(){throw Error("unknown trace type");}
;var mc="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function nc(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===mc.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=zb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function oc(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function pc(){}
pc.prototype.toString=function(){return this.ud.toString()};function qc(a){var b=oc(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function rc(a,b){if(b instanceof pc)b=b.ud;else throw Error("");a.textContent=b;qc(a)}
function sc(a,b){a.src=kb(b);qc(a)}
;function tc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function uc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=vc(a,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};function yc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(a){return a?decodeURI(a):a}
function Bc(a,b){return b.match(zc)[a]||null}
function Cc(a){return Ac(Bc(3,a))}
function Dc(a){var b=a.match(zc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function Fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Gc(a){var b=[],c;for(c in a)Fc(c,a[c],b);return b.join("&")}
function Hc(a,b){b=Gc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Jc=/#|$/,Kc=/[?&]($|#)/;function Lc(a,b){for(var c=a.search(Jc),d=0,e,f=[];0<=(e=Ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Kc,"$1")}
;function Mc(a){this.h=a}
;function Nc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=Nc.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new Mc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.Vc(B.apply(1,arguments));this.h.set(b,[new Mc(a)])};
m.yc=function(){var a=this.Vc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.je=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Vc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Oc(a,b){Nc.call(this,a,3,b)}
w(Oc,Nc);Oc.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.je(b);d&&(c=d.h);this.Cd(c+a,b)};function Pc(a,b){Nc.call(this,a,2,b)}
w(Pc,Nc);Pc.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function Qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Rc.apply(null,d):Qc(d)}}
;function H(){this.ob=this.ob;this.v=this.v}
m=H.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function Sc(a,b){a.addOnDisposeCallback(Ya(Qc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Xa(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Tc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Tc.prototype.stopPropagation=function(){this.j=!0};
Tc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Uc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Vc(){return Xb?!!$b&&!!$b.platform:!1}
function Wc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Xc(a){Xc[" "](a);return a}
Xc[" "]=function(){};var Yc=dc(),Zc=ec(),$c=F("Edge"),ad=F("Gecko")&&!(-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),bd=-1!=Zb().toLowerCase().indexOf("webkit")&&!F("Edge");bd&&F("Mobile");Vc()||F("Macintosh");Vc()||F("Windows");(Vc()?"Linux"===$b.platform:F("Linux"))||Vc()||F("CrOS");var cd=Vc()?"Android"===$b.platform:F("Android");Wc();F("iPad");F("iPod");Wc()||F("iPad")||F("iPod");Zb().toLowerCase().indexOf("kaios");
function dd(){var a=C.document;return a?a.documentMode:void 0}
var ed;a:{var fd="",gd=function(){var a=Zb();if(ad)return/rv:([^\);]+)(\)|;)/.exec(a);if($c)return/Edge\/([\d\.]+)/.exec(a);if(Zc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bd)return/WebKit\/(\S+)/.exec(a);if(Yc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
gd&&(fd=gd?gd[1]:"");if(Zc){var hd=dd();if(null!=hd&&hd>parseFloat(fd)){ed=String(hd);break a}}ed=fd}var id=ed,jd;if(C.document&&Zc){var kd=dd();jd=kd?kd:parseInt(id,10)||void 0}else jd=void 0;var ld=jd;function md(a,b){Tc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(md,Tc);var nd={2:"touch",3:"pen",4:"mouse"};
md.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ad){a:{try{Xc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:nd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&md.Aa.preventDefault.call(this)};
md.prototype.stopPropagation=function(){md.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
md.prototype.preventDefault=function(){md.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var od="closure_listenable_"+(1E6*Math.random()|0);var pd=0;function qd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++pd;this.Mb=this.Vb=!1}
function rd(a){a.Mb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function sd(a){this.src=a;this.listeners={};this.h=0}
sd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=td(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new qd(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
sd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=td(e,b,c,d);return-1<b?(rd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ud(a,b){var c=b.type;c in a.listeners&&Kb(a.listeners[c],b)&&(rd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function td(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Mb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var vd="closure_lm_"+(1E6*Math.random()|0),wd={},xd=0;function yd(a,b,c,d,e){if(d&&d.once)zd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Bd(a,b,c,!1,d,e)}
function Bd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Cd(a);h||(a[vd]=h=new sd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Dd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Uc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ed(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xd++}}
function Dd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fd;return a}
function zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Bd(a,b,c,!0,d,e)}
function Gd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Ad(c),a&&a[od])?a.h.remove(String(b),c,d,e):a&&(a=Cd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=td(b,c,d,e)),(c=-1<a?b[a]:null)&&Hd(c))}
function Hd(a){if("number"!==typeof a&&a&&!a.Mb){var b=a.src;if(b&&b[od])ud(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ed(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xd--;(c=Cd(b))?(ud(c,a),0==c.h&&(c.src=null,b[vd]=null)):rd(a)}}}
function Ed(a){return a in wd?wd[a]:wd[a]="on"+a}
function Fd(a,b){if(a.Mb)a=!0;else{b=new md(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&Hd(a);a=c.call(d,b)}return a}
function Cd(a){a=a[vd];return a instanceof sd?a:null}
var Id="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ad(a){if("function"===typeof a)return a;a[Id]||(a[Id]=function(b){return a.handleEvent(b)});
return a[Id]}
;function Jd(){H.call(this);this.h=new sd(this);this.Za=this;this.ga=null}
$a(Jd,H);Jd.prototype[od]=!0;m=Jd.prototype;m.addEventListener=function(a,b,c,d){yd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Gd(this,a,b,c,d)};
function Kd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new Tc(b,a):b instanceof Tc?b.target=b.target||a:(e=b,b=new Tc(c,a),Wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ld(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ld(g,c,!0,b)&&e,b.j||(e=Ld(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ld(g,c,!1,b)&&e}
m.S=function(){Jd.Aa.S.call(this);this.removeAllListeners();this.ga=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,rd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ld(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Mb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&ud(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Md(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Md.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Nd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Od(){}
function Pd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Qd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Qd.prototype;m.clone=function(){return new Qd(this.x,this.y)};
m.equals=function(a){return a instanceof Qd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Rd(a,b){this.width=a;this.height=b}
m=Rd.prototype;m.clone=function(){return new Rd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Sd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Td(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ud(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Vd;function Wd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Td("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ec()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Xd(a){C.setTimeout(function(){throw a;},0)}
;function Yd(){this.i=this.h=null}
Yd.prototype.add=function(a,b){var c=Zd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Yd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Zd=new Md(function(){return new $d},function(a){return a.reset()});
function $d(){this.next=this.scope=this.h=null}
$d.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
$d.prototype.reset=function(){this.next=this.scope=this.h=null};var ae,be=!1,ce=new Yd;function de(a,b){ae||ee();be||(ae(),be=!0);ce.add(a,b)}
function ee(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);ae=function(){a.then(fe)}}else ae=function(){var b=fe;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(cc()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Vd||(Vd=Wd()),Vd(b)):C.setImmediate(b)}}
function fe(){for(var a;a=ce.remove();){try{a.h.call(a.scope)}catch(b){Xd(b)}Nd(Zd,a)}be=!1}
;function ge(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=Od)try{var b=this;a.call(void 0,function(c){he(b,2,c)},function(c){he(b,3,c)})}catch(c){he(this,3,c)}}
function ie(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ie.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var je=new Md(function(){return new ie},function(a){a.reset()});
function ke(a,b,c){var d=je.get();d.i=a;d.h=b;d.context=c;return d}
function le(a){return new ge(function(b,c){c(a)})}
ge.prototype.then=function(a,b,c){return me(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ge.prototype.$goog_Thenable=!0;m=ge.prototype;m.oc=function(a,b){return me(this,null,a,b)};
m.catch=ge.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new ne(a);de(function(){oe(this,b)},this)}};
function oe(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?oe(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):pe(c),qe(c,e,3,b)))}a.j=null}else he(a,3,b)}
function re(a,b){a.i||2!=a.h&&3!=a.h||se(a);a.l?a.l.next=b:a.i=b;a.l=b}
function me(a,b,c,d){var e=ke(null,null,null);e.child=new ge(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ne?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;re(a,e);return e.child}
m.kf=function(a){this.h=0;he(this,2,a)};
m.lf=function(a){this.h=0;he(this,3,a)};
function he(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kf,f=a.lf;if(d instanceof ge){re(d,ke(e||Od,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){te(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,se(a),3!=b||c instanceof ne||ue(a,c))}}
function te(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function se(a){a.m||(a.m=!0,de(a.be,a))}
function pe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=pe(this);)qe(this,a,this.h,this.A);this.m=!1};
function qe(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ve(b,c,d);else try{b.j?b.i.call(b.context):ve(b,c,d)}catch(e){we.call(null,e)}Nd(je,b)}
function ve(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ue(a,b){a.v=!0;de(function(){a.v&&we.call(null,b)})}
var we=Xd;function ne(a){bb.call(this,a)}
$a(ne,bb);ne.prototype.name="cancel";function xe(a,b){Jd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.hf,this);this.m=Za()}
$a(xe,Jd);m=xe.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.hf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),Kd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){xe.Aa.S.call(this);this.stop();delete this.i};
function ye(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ze(a){H.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new xe(this.flushInterval);this.h.listen("tick",this.Oa,!1,this);Sc(this,this.h)}
w(ze,H);m=ze.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Ae(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Oa()}
m.Oa=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);Be(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oc(a,b))};
m.uc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pc(a,b))};
function Ce(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.pc=function(a){this.Od(a,1,B.apply(1,arguments))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=Ce(this,a);d&&d instanceof Oc&&(d.i(b,c),Ae(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Ce(this,a);d&&d instanceof Pc&&(d.record(b,c),Ae(this))};
function Be(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function De(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{na:3,ma:"ke"})}
function Ee(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{na:3,ma:"rk"},{na:3,ma:"ke"},{na:2,ma:"ec"},{na:3,ma:"em"})}
function Fe(a){this.h=a;this.h.uc("/client_streamz/bg/fil",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Fe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function Ge(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{na:2,ma:"ph"},{na:3,ma:"ke"})}
function He(a){this.h=a;this.h.uc("/client_streamz/bg/fcd",{na:2,ma:"ph"},{na:3,ma:"ke"})}
He.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Ie(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{na:3,ma:"rk"},{na:3,ma:"ke"})}
function Je(a){this.h=a;this.h.uc("/client_streamz/bg/fsl",{na:3,ma:"rk"},{na:3,ma:"ke"})}
Je.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var Ke={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Le(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Me(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ne(a,h),d+=Ne(a,h+4),e+=Ne(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Ke.toString(e)}
function Me(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ne(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;fc();var Oe=Wc()||F("iPod"),Pe=F("iPad");!F("Android")||hc()||fc()||dc()||F("Silk");hc();var Qe=F("Safari")&&!(hc()||(cc()?0:F("Coast"))||dc()||(cc()?0:F("Edge"))||(cc()?bc("Microsoft Edge"):F("Edg/"))||(cc()?bc("Opera"):F("OPR"))||fc()||F("Silk")||F("Android"))&&!(Wc()||F("iPad")||F("iPod"));var Re={},Se=null;function Te(a,b){Qa(a);void 0===b&&(b=0);Ue();b=Re[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ve(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;We(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function We(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Se[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ue();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ue(){if(!Se){Se={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Re[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Se[f]&&(Se[f]=e)}}}}
;var Xe="undefined"!==typeof Uint8Array,Ye=!Zc&&"function"===typeof btoa;function Ze(a){if(!Ye)return Te(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var $e=/[-_.]/g,af={"-":"+",_:"/",".":"="};function bf(a){return af[a]||""}
function cf(a){return Xe&&null!=a&&a instanceof Uint8Array}
var df={};var ef;function ff(a){if(a!==df)throw Error("illegal external caller");}
function gf(a,b){ff(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
gf.prototype.sizeBytes=function(){ff(df);var a=this.h;if(null!=a&&!cf(a))if("string"===typeof a)if(Ye){$e.test(a)&&(a=a.replace($e,bf));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ve(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function hf(){return"function"===typeof BigInt}
;function jf(a){return Array.prototype.slice.call(a)}
;function kf(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var lf=kf(),mf=kf("2ex");Math.max.apply(Math,ma(Object.values({Nf:1,Lf:2,Kf:4,Qf:8,Pf:16,Of:32,Bf:64,Sf:128,Jf:256,If:512,Mf:1024,Gf:2048,Rf:4096,Hf:8192})));var nf=lf?function(a,b){a[lf]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function of(a,b,c){return c?a|b:a&~b}
var pf=lf?function(a){return a[lf]|0}:function(a){return a.Sa|0},qf=lf?function(a){return a[lf]}:function(a){return a.Sa},rf=lf?function(a,b){a[lf]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function sf(a,b){rf(b,(a|0)&-14591)}
function tf(a,b){rf(b,(a|34)&-14557)}
function uf(a){a=a>>14&1023;return 0===a?536870912:a}
;var vf={},wf={};function xf(a){return!(!a||"object"!==typeof a||a.h!==wf)}
function yf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var zf;function Af(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=pf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;rf(a,d|1);return!0}
var Bf,Cf=[];rf(Cf,55);Bf=Object.freeze(Cf);function Df(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var Ef=0,Ff=0;function Gf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(Hf(c,a)),b=c.next().value,a=c.next().value,c=b);Ef=c>>>0;Ff=a>>>0}
function If(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else hf()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Jf(c)+Jf(a));return c}
function Jf(a){a=String(a);return"0000000".slice(a.length)+a}
function Kf(){var a=Ef,b=Ff;b&2147483648?hf()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(Hf(a,b)),a=b.next().value,b=b.next().value,a="-"+If(a,b)):a=If(a,b);return a}
function Hf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var Lf;function Mf(a){a=Error(a);tc(a,"warning");return a}
;function Nf(a){return a.displayName||a.name||"unknown type name"}
function Of(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Pf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Pf.test(a)}
function Rf(a){if(null!=a){if("number"!==typeof a)throw Mf("int32");if(!Number.isFinite(a))throw Mf("int32");a|=0}return a}
function Sf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Tf(a){if(null!=a){var b=!!b;if(!Qf(a))throw Mf("int64");a="string"===typeof a?Uf(a):b?Vf(a):Wf(a)}return a}
function Xf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Wf(a){Qf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Gf(a);var b=Ef,c=Ff;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Vf(a){Qf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Xf(b)?a=b:(Gf(a),a=Kf())}return a}
function Uf(a){Qf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Xf(a)){if(16>a.length)Gf(Number(a));else if(hf())a=BigInt(a),Ef=Number(a&BigInt(4294967295))>>>0,Ff=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Ff=Ef=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Ff*=1E6,Ef=1E6*Ef+d,4294967296<=Ef&&(Ff+=Math.trunc(Ef/4294967296),Ff>>>=0,Ef>>>=0);b&&(b=v(Hf(Ef,Ff)),
a=b.next().value,b=b.next().value,Ef=a,Ff=b)}a=Kf()}return a}
function Yf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Zf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Nf(b)+" but got "+(a&&Nf(a.constructor)));}
function $f(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===vf)return a;if(Array.isArray(a)){var d=pf(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&rf(a,e);return new b(a)}}
;var ag;function bg(a,b){pf(b);ag=b;a=new a(b);ag=void 0;return a}
function I(a,b,c){null==a&&(a=ag);ag=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=pf(a);if(d&2048)throw Error();if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(yf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}rf(a,d);return a}
;function cg(a,b){return dg(b)}
function dg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Af(a,void 0,0))return}else{if(cf(a))return Ze(a);if(a instanceof gf){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ze(b)}}}return a}
;function eg(a,b,c){a=jf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function fg(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=Af(a,void 0,0)?void 0:e&&pf(a)&2?a:gg(a,b,c,void 0!==d,e);else if(yf(a)){var f={},g;for(g in a)f[g]=fg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function gg(a,b,c,d,e){var f=d||c?pf(a):0;d=d?!!(f&32):void 0;a=jf(a);for(var g=0;g<a.length;g++)a[g]=fg(a[g],b,c,d,e);c&&c(f,a);return a}
function hg(a){return a.Jc===vf?a.toJSON():dg(a)}
;function ig(a,b,c){c=void 0===c?tf:c;if(null!=a){if(Xe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=pf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?rf(a,(d|34)&-12293):gg(a,ig,d&4?tf:c,!0,!0)}a.Jc===vf&&(c=a.F,d=qf(c),a=d&2?a:bg(a.constructor,jg(c,d,!0)));return a}}
function jg(a,b,c){var d=c||b&2?tf:sf,e=!!(b&32);a=eg(a,b,function(f){return ig(f,e,d)});
nf(a,32|(c?2:0));return a}
function kg(a){var b=a.F,c=qf(b);return c&2?bg(a.constructor,jg(b,c,!1)):a}
;function lg(a,b){a=a.F;return mg(a,qf(a),b)}
function ng(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function mg(a,b,c,d){if(-1===c)return null;var e=uf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(ng(a,b,e,c)&&null!=mf){var g;a=null!=(g=Lf)?g:Lf={};g=a[mf]||0;4<=g||(a[mf]=g+1,g=Error(),tc(g,"incident"),Xd(g))}return d}return ng(a,b,e,c)}}
function og(a,b,c){var d=a.F,e=qf(d);Df(e);pg(d,e,b,c);return a}
function pg(a,b,c,d,e){yf(d);var f=uf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&rf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function qg(a){return void 0!==rg(a,sg,11,!1)}
function tg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ug(a,b,c,d){a=a.F;var e=qf(a);Df(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=mg(a,f,k)&&(0!==g&&(f=pg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=pg(a,e,c));pg(a,e,b,d)}
function rg(a,b,c,d){a=a.F;var e=qf(a),f=mg(a,e,c,d);b=$f(f,b,e);b!==f&&null!=b&&pg(a,e,c,b,d);return b}
function vg(a,b,c,d){d=void 0===d?!1:d;b=rg(a,b,c,d);if(null==b)return b;a=a.F;var e=qf(a);if(!(e&2)){var f=kg(b);f!==b&&(b=f,pg(a,e,c,b,d))}return b}
function wg(a,b,c,d){null!=d?Zf(d,b):d=void 0;return og(a,c,d)}
function xg(a,b,c,d){var e=a.F,f=qf(e);Df(f);if(null==d)return pg(e,f,c),a;if(!Array.isArray(d))throw Mf();for(var g=pf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var y=d[t];Zf(y,b);k||(y=!!(pf(y.F)&2),p&&(p=!y),r&&(r=y))}k||(g=of(g,5,!0),g=of(g,8,p),g=of(g,16,r));if(n||l&&g!==h)d=jf(d),h=0,g=yg(g,f,!0);g!==h&&rf(d,g);pg(e,f,c,d);return a}
function yg(a,b,c){a=of(a,2,!!(2&b));a=of(a,32,!!(32&b)&&c);return a=of(a,2048,!1)}
function zg(a,b){a=lg(a,b);var c;null==a?c=a:Qf(a)?"number"===typeof a?c=Wf(a):c=Uf(a):c=void 0;return c}
function Ag(a){a=lg(a,1);var b=void 0===b?!1:b;b=null==a?a:Qf(a)?"string"===typeof a?Uf(a):b?Vf(a):Wf(a):void 0;return b}
function Bg(a){a=lg(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function Cg(a,b,c){return og(a,b,Yf(c))}
function Dg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Mf("enum");c|=0}return og(a,b,c)}
;function K(a,b,c){this.F=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(zf)var a=Eg(this,this.F,!1);else a=gg(this.F,hg,void 0,void 0,!1),a=Eg(this,a,!0);return a};
m.serialize=function(){zf=!0;try{return JSON.stringify(this.toJSON(),cg)}finally{zf=!1}};
function Fg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);nf(b,32);return bg(a,b)}
m.clone=function(){var a=this.F,b=qf(a);return bg(this.constructor,jg(a,b,!1))};
m.Jc=vf;m.toString=function(){return Eg(this,this.F,!1).toString()};
function Eg(a,b,c){var d=Yb?void 0:a.constructor.Ua;var e=qf(c?a.F:b);a=b.length;if(!a)return b;var f;if(yf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(Af(n,d,+l)||xf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||Af(c,d,r)||xf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Gg(a){this.F=I(a)}
w(Gg,K);var Hg=[1,2,3];function Ig(a){this.F=I(a)}
w(Ig,K);var Jg=[1,2,3];function Kg(a){this.F=I(a)}
w(Kg,K);Kg.Ua=[1];function Lg(a){this.F=I(a)}
w(Lg,K);Lg.Ua=[3,6,4];function Mg(a){this.F=I(a)}
w(Mg,K);Mg.Ua=[1];function Ng(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Og(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],x=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=x^y&(z^x);var R=1518500249}else G=y^z^x,R=1859775393;else 60>t?(G=y&z|x&(y|z),R=2400959708):(G=y^z^x,R=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+R+r[t]&4294967295;J=x;x=z;z=(y<<30|y>>>2)&4294967295;y=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],y=0,z=p.length;y<z;++y)t.push(p.charCodeAt(y));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var y=24;0<=y;y-=8)p[r++]=e[t]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function Pg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Qg(Ng(d),a,c||null)].join(" "):null}
function Qg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Fb(d,function(h){e.push(h)}),Rg(e.join(" "));
var f=[],g=[];Fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Fb(d,function(h){e.push(h)});
a=Rg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Rg(a){var b=Og();b.update(a);return b.Xd().toLowerCase()}
;var Ug={};function Vg(a){this.h=a||{cookie:""}}
m=Vg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Kb:0,path:b,domain:c});return d};
m.Bc=function(){return Wg(this).keys};
m.clear=function(){for(var a=Wg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Wg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Xg=new Vg("undefined"==typeof document?null:document);function Yg(a){return!!Ug.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Yg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Vg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Yg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function $g(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Vg(document)).get(b));return a?Pg(a,c,d):null}
function ah(a,b){b=void 0===b?!1:b;var c=Ng(String(C.location.href)),d=[];if(Zg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Vg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Pg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Yg(b)&&((b=$g("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$g("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function bh(a){this.F=I(a)}
w(bh,K);bh.Ua=[2];function ch(a){Jd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Za()};
this.j=this.i()}
w(ch,Jd);ch.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ch.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
ch.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ch.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),Kd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function dh(a){this.F=I(a)}
w(dh,K);function eh(a){this.F=I(a)}
w(eh,K);function fh(a){this.h=this.i=this.j=a}
fh.prototype.reset=function(){this.h=this.i=this.j};
fh.prototype.getValue=function(){return this.i};function gh(a){this.F=I(a)}
w(gh,K);gh.prototype.ac=function(){return Bg(this)};function hh(a){this.F=I(a)}
w(hh,K);function ih(a){this.F=I(a)}
w(ih,K);function jh(a,b){xg(a,hh,1,b)}
ih.Ua=[1];function sg(a){this.F=I(a)}
w(sg,K);var kh=["platform","platformVersion","architecture","model","uaFullVersion"],lh=new ih,mh=null;function nh(a,b){b=void 0===b?kh:b;if(!mh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new hh;f=Cg(f,1,e.brand);return Cg(f,2,e.version)});
jh(og(lh,2,Of(a.mobile)),c);mh=a.getHighEntropyValues(b)}var d=new Set(b);return mh.then(function(e){var f=lh.clone();d.has("platform")&&Cg(f,3,e.platform);d.has("platformVersion")&&Cg(f,4,e.platformVersion);d.has("architecture")&&Cg(f,5,e.architecture);d.has("model")&&Cg(f,6,e.model);d.has("uaFullVersion")&&Cg(f,7,e.uaFullVersion);return f}).catch(function(){return lh.clone()})}
;function oh(a){this.F=I(a)}
w(oh,K);function ph(a){this.F=I(a,4)}
w(ph,K);function qh(a){this.F=I(a,35)}
w(qh,K);qh.Ua=[3,20,27];function rh(a){this.F=I(a,19)}
w(rh,K);rh.prototype.Nb=function(a){return Dg(this,2,a)};
rh.Ua=[3,5];function sh(a){this.F=I(a,8)}
w(sh,K);var th=function(a){return function(b){return Fg(a,b)}}(sh);
sh.Ua=[5,6,7];function uh(a){this.F=I(a)}
w(uh,K);var vh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=vg;this.defaultValue=void 0}(175237375,uh);function wh(a){H.call(this);var b=this;this.componentId="";this.j=[];this.ba="";this.pageId=null;this.ea=this.Y=-1;this.experimentIds=null;this.V=this.m=0;this.ga=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new xh(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.A=a.mf||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.R="undefined"!==typeof URLSearchParams&&!!(new URL(yh())).searchParams&&!!(new URL(yh())).searchParams.set;var c=Dg(new oh,1,1);zh(this.i,c);this.l=new fh(1E4);this.h=new ch(this.l.getValue());a=Ah(this,a.Xc);yd(this.h,"tick",a,!1,this);this.D=new ch(6E5);yd(this.D,"tick",
a,!1,this);this.Eb||this.D.start();this.eb||(yd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.wc()}),yd(document,"pagehide",this.wc,!1,this))}
w(wh,H);function Ah(a,b){return a.R?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=wh.prototype;m.S=function(){this.wc();this.h.stop();this.D.stop();H.prototype.S.call(this)};
m.log=function(a){if(this.R){a=a.clone();var b=this.ga++;a=og(a,21,Tf(b));this.componentId&&Cg(a,26,this.componentId);if(!Ag(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";og(b,1,Tf(c))}null==zg(a,15)&&og(a,15,Tf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),wg(b,bh,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ea>d&&this.Y<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.ac?Bh(this.i,this.network.ac()):Bh(this.i,0));var e=Ch(this.i,this.j,this.m,this.V,this.yb);d={};var f=this.Gb();f&&(d.Authorization=f);this.A||(this.A=yh());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ba===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Vf:1,yd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=th(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=Ag(l);k=k(null!=p?p:n);0<k&&(c.Y=Date.now(),c.ea=c.Y+k);l=vh.ctor?vh.i(l,vh.ctor,vh.h,!0):vh.i(l,vh.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=Sf(lg(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new fh(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.V=0};
h=function(k,l){var n=e.F;var p=qf(n),r=p,t=!(2&p),y=!!(2&r),z=y?1:2;p=1===z;z=2===z;t&&(t=!y);y=mg(n,r,3);y=Array.isArray(y)?y:Bf;var x=pf(y),J=!!(4&x);if(!J){var G=x;0===G&&(G=yg(G,r,!1));G=of(G,1,!0);x=y;var R=r,N=!!(2&G);N&&(R=of(R,2,!0));for(var da=!N,Ca=!0,O=0,ea=0;O<x.length;O++){var ka=$f(x[O],qh,R);if(ka instanceof qh){if(!N){var pa=!!(pf(ka.F)&2);da&&(da=!pa);Ca&&(Ca=pa)}x[ea++]=ka}}ea<O&&(x.length=ea);G=of(G,4,!0);G=of(G,16,Ca);G=of(G,8,da);rf(x,G);N&&Object.freeze(x);x=G}G=!!(8&x)||p&&
!y.length;if(t&&!G){tg(x)&&(y=jf(y),x=yg(x,r,!1),r=pg(n,r,3,y));t=y;for(G=0;G<t.length;G++)R=t[G],N=kg(R),R!==N&&(t[G]=N);x=of(x,8,!0);x=of(x,16,!t.length);rf(t,x)}tg(x)||(t=x,p?x=of(x,!y.length||16&x&&(!J||32&x)?2:2048,!0):x=of(x,32,!1),x!==t&&rf(y,x),p&&Object.freeze(y));z&&tg(x)&&(y=jf(y),x=yg(x,r,!1),rf(y,x),pg(n,r,3,y));n=y;r=zg(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());401===k&&f&&(c.ba=f);r&&(c.m+=r);void 0===
l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.V};
c.network&&c.network.send(d,g,h)}}}};
m.wc=function(){Dh(this.i,!0);this.flush();Dh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function yh(){return"https://play.google.com/log?format=json&hasfast=true"}
function xh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new rh;Number.isInteger(a)&&this.h.Nb(a);b||(this.locale=document.documentElement.getAttribute("lang"));zh(this,new oh)}
xh.prototype.Nb=function(a){this.h.Nb(a);return this};
function zh(a,b){wg(a.h,oh,1,b);Bg(b)||Dg(b,1,1);if(!a.eb){b=Eh(a);var c=lg(b,5);(null==c||"string"===typeof c)&&c||Cg(b,5,a.locale)}a.uach&&(b=Eh(a),vg(b,ih,9)||wg(b,ih,9,a.uach))}
function Bh(a,b){qg(Fh(a))&&(a=Gh(a),Dg(a,1,b))}
function Dh(a,b){qg(Fh(a))&&(a=Gh(a),og(a,2,Of(b)))}
function Fh(a){return vg(a.h,oh,1)}
function Hh(a){var b=void 0===b?kh:b;var c=a.eb?void 0:window;c?nh(c,b).then(function(d){a.uach=d;d=Eh(a);wg(d,ih,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Eh(a){a=Fh(a);var b=vg(a,sg,11);b||(b=new sg,wg(a,sg,11,b));return b}
function Gh(a){a=Eh(a);var b=vg(a,gh,10);b||(b=new gh,og(b,2,Of(!1)),wg(a,gh,10,b));return b}
function Ch(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(qg(Fh(a))){var h=Gh(a);og(h,3,Rf(d))}qg(Fh(a))&&(d=Gh(a),og(d,4,Rf(f)));qg(Fh(a))&&(f=Gh(a),og(f,5,Rf(g)));a=a.h.clone();g=Date.now().toString();a=og(a,4,Tf(g));b=xg(a,qh,3,b);e&&(a=new dh,e=og(a,13,Rf(e)),a=new eh,e=wg(a,dh,2,e),a=new ph,e=wg(a,eh,1,e),e=Dg(e,2,9),wg(b,ph,18,e));c&&og(b,14,Tf(c));return b}
;function Ih(){this.Pd="undefined"!==typeof AbortController}
Ih.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:return f=(e=d.Pd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(x,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.yd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(200!==h.status){null==(k=c)||k(h.status);x.B(3);break}if(null==(l=b)){x.B(7);break}p=n=l;return x.yield(h.text(),8);case 8:p(x.i);case 7:case 3:x.R=[x.j];x.l=0;x.v=0;clearTimeout(f);Da(x);break;case 2:r=Ba(x);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(y=c)||y(408);break;default:null==(z=c)||z(400)}x.B(3)}})};
Ih.prototype.ac=function(){return 4};function Jh(){}
Jh.prototype.serialize=function(a){var b=[];Kh(this,a,b);return b.join("")};
function Kh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Lh(d,c),c.push(":"),Kh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Lh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Mh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Nh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Lh(a,b){b.push('"',a.replace(Nh,function(c){var d=Mh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Mh[c]=d);return d}),'"')}
;function Oh(){}
Oh.prototype.h=null;Oh.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ph(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Qh;function Rh(){}
$a(Rh,Oh);function Sh(a){return(a=Ph(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ph(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Qh=new Rh;function Th(a){Jd.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.Y=!1;this.m=0;this.D=null;this.Pa="";this.ta=this.Ba=!1}
$a(Th,Jd);var Uh=/^https?$/i,Vh=["POST","PUT"],Wh=[];function Xh(a,b,c,d,e,f,g){var h=new Th;Wh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.Ba=g);h.send(a,c,d,e)}
m=Th.prototype;m.Vd=function(){this.dispose();Kb(Wh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.Y=!1;this.i=!0;this.J=this.V?Sh(this.V):Sh(Qh);this.R=this.V?this.V.getOptions():Qh.getOptions();this.J.onreadystatechange=Xa(this.rd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Yh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Eb(Vh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Pa&&(this.J.responseType=this.Pa);"withCredentials"in this.J&&this.J.withCredentials!==this.Ba&&(this.J.withCredentials=this.Ba);try{Zh(this),0<this.m&&(this.ta=$h(this.J),this.getStatus(),this.ta?(this.J.timeout=this.m,this.J.ontimeout=Xa(this.Hd,
this)):this.D=ye(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Yh(this,g)}};
function $h(a){return Zc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof Na&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),Kd(this,"timeout"),this.abort(8))};
function Yh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;ai(a);bi(a)}
function ai(a){a.Y||(a.Y=!0,Kd(a,"complete"),Kd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,Kd(this,"complete"),Kd(this,"abort"),bi(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),bi(this,!0));Th.Aa.S.call(this)};
m.rd=function(){this.Z()||(this.ba||this.A||this.j?ci(this):this.Ee())};
m.Ee=function(){ci(this)};
function ci(a){if(a.i&&"undefined"!=typeof Na)if(a.R[1]&&4==di(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==di(a))ye(a.rd,0,a);else if(Kd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ei(a))Kd(a,"complete"),Kd(a,"success");else{try{var b=2<di(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";ai(a)}}finally{bi(a)}}}
function bi(a,b){if(a.J){Zh(a);var c=a.J,d=a.R[0]?function(){}:null;
a.J=null;a.R=null;b||Kd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Zh(a){a.J&&a.ta&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==di(this)};
function ei(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Bc(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Uh.test(a?a.toLowerCase():"");c=b}return c}
function di(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<di(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function fi(){}
fi.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Xh(a.url,function(d){d=d.target;if(ei(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yd,a.timeoutMillis,a.withCredentials)};
fi.prototype.ac=function(){return 1};function gi(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.yb=null}
w(gi,H);gi.prototype.ed=function(){this.l=!0;return this};function hi(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new gi(a,"0"),a.componentId=b,Sc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),a.network||(a.network=.01>Math.random()?new Ih:new fi),b=new wh({logSource:a.logSource,Gb:a.Gb?a.Gb:ah,sessionIndex:a.sessionIndex,mf:a.i,eb:a.j,Eb:!1,ed:a.l,Xc:a.Xc,network:a.network?a.network:void 0}),Sc(a,b),a.h&&(c=a.h,d=Eh(b.i),
Cg(d,7,c)),a.componentId&&(b.componentId=a.componentId),a.yb&&(b.yb=a.yb),a.pageId&&(b.pageId=a.pageId),Hh(b.i),a.network.Nb&&a.network.Nb(a.logSource),a.network.Ze&&a.network.Ze(b),a=b);this.h=a}
w(hi,H);
hi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Mg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Lg;f=Cg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].ma);h=f.F;var k=qf(h);Df(k);if(null==g)pg(h,k,3);else{if(!Array.isArray(g))throw Mf();var l=pf(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=jf(g),n=0,l=yg(l,k,!0)),t=0;t<g.length;t++){p=g;var y=t,z=g[t];if("string"!==typeof z)throw Error();p[y]=z}r&&(g=jf(g),n=0,l=yg(l,
k,!0));l!==n&&rf(g,l);pg(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.j;r=e.yc(l)||[];t=[];for(p=0;p<r.length;p++){z=(y=r[p])&&y.h;y=new Ig;switch(n){case 3:z=Number(z);Number.isFinite(z)&&ug(y,1,Jg,Tf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);ug(y,2,Jg,z)}t.push(y)}n=t;for(r=0;r<n.length;r++){t=n[r];p=new Kg;t=
wg(p,Ig,2,t);p=l;y=[];z=[];for(var x=0;x<e.fields.length;x++)z.push(e.fields[x].na);for(x=0;x<z.length;x++){var J=z[x],G=p[x],R=new Gg;switch(J){case 3:ug(R,1,Hg,Yf(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&ug(R,2,Hg,Rf(J));break;case 1:ug(R,3,Hg,Of("true"===G))}y.push(R)}xg(t,Gg,1,y);g.push(t)}}xg(f,Kg,4,g);c.push(f);e.clear()}xg(a,Lg,1,c);b=this.h;b.R&&(a instanceof qh?b.log(a):(c=new qh,a=a.serialize(),a=Cg(c,8,a),b.log(a)));this.h.flush()}};function ii(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=ji()}
ii.prototype.start=function(){this.h=ji()};
ii.prototype.done=function(){null!=this.h&&this.logger.od(this.event,ji()-this.h)};
function ki(){}
ki.prototype.Gc=function(){};
ki.prototype.od=function(){};
ki.prototype.fc=function(){};
ki.prototype.Oa=function(){};
function li(a,b){this.i=b;this.l=new hi(1828,"","",!1,"",void 0,new fi);this.h=new ze(this.l);this.m=new Fe(this.h);this.A=new Ie(this.h);this.D=new Je(this.h);this.v=new Ee(this.h);new Ge(this.h);new He(this.h);this.j=Le(a);(new De(this.h)).h.pc("/client_streamz/bg/fic",this.i)}
li.prototype.Gc=function(){this.A.h.pc("/client_streamz/bg/fsc",this.j,this.i)};
li.prototype.od=function(a,b){0===a?this.m.record(b,this.j,this.i):1===a&&this.D.record(b,this.j,this.i)};
li.prototype.fc=function(a,b){this.v.h.pc("/client_streamz/bg/fiec",this.j,this.i,a,b)};
li.prototype.Oa=function(){this.h.Oa()};
function ji(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function mi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ni(a){function b(n,p,r){Promise.resolve().then(function(){k.done();h.resolve({Sd:n,cf:p,ig:r})})}
function c(){}
this.h=!1;var d=a.program;var e=a.le;if(!1!==a.Ke){var f,g;this.qa=null!=(g=a.qa)?g:new li(e,null!=(f=a.Be)?f:"_")}else this.qa=new ki;var h=new mi;this.i=h.promise;var k=new ii(this.qa,0,!1);C[e]?C[e].a||(this.qa.fc(2,""),this.qa.Oa()):(this.qa.fc(1,""),this.qa.Oa());try{var l=C[e].a;k.start();this.j=v(l(d,b,!0,a.rg,c)).next().value;this.bf=h.promise.then(function(){})}catch(n){throw this.qa.fc(4,n.message),this.qa.Oa(),n;
}}
ni.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.qa.Gc();return this.i.then(function(c){var d=c.Sd;return new Promise(function(e){var f=new ii(b.qa,1);d(function(g){f.done();e(g)},[a.dd,
a.df,a.pf,a.ef])})})};
ni.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.qa.Gc();var b=new ii(this.qa,1);a=this.j([a.dd,a.df,a.pf,a.ef]);b.done();return a};
ni.prototype.dispose=function(){this.qa.Oa();this.h=!0;this.i.then(function(a){(a=a.cf)&&a()})};
ni.prototype.Z=function(){return this.h};var oi=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function pi(a){var b=qi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ri(){var a=[];pi(function(b){a.push(b)});
return a}
var qi={qf:"allow-forms",rf:"allow-modals",sf:"allow-orientation-lock",tf:"allow-pointer-lock",uf:"allow-popups",vf:"allow-popups-to-escape-sandbox",wf:"allow-presentation",xf:"allow-same-origin",yf:"allow-scripts",zf:"allow-top-navigation",Af:"allow-top-navigation-by-user-activation"},si=Pd(function(){return ri()});
function ti(){var a=ui(),b={};Fb(si(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ui(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function vi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var wi=(new Date).getTime();function xi(a){Jd.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(yi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||zi(this)}
w(xi,Jd);function Ai(){var a=Bi;xi.h||(xi.h=new xi(a));return xi.h}
xi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.pa(this.A);delete xi.h};
xi.prototype.wa=function(){return this.i};
function zi(a){a.A=a.Da.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(yi(a),3):c.yield(yi(a),3);zi(a);c.h=0})},3E4)}
function yi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.l=0;h.v=0;a.m=void 0;a.j&&(a.Da.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Kd(a,"networkstatus-online"):Kd(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ci(){this.data=[];this.h=-1}
Ci.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ci.prototype.get=function(a){return!!this.data[a]};
function Di(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ei(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Ei.prototype[Symbol.iterator]=function(){return this};
Ei.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Fi(a,b){return new Ei(a,b)}
;function Gi(){this.blockSize=-1}
;function Hi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Hi,Gi);Hi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ii(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Hi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Ii(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ii(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ii(this,e);f=0;break}}this.i=f;this.l+=b}};
Hi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Ii(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ji(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ki(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Li(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ji(a).match(/\S+/g)||[],b=0<=Eb(a,b));return b}
function Mi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Li(a,"inverted-hdpi")&&Ki(a,Array.prototype.filter.call(a.classList?a.classList:Ji(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ni(){}
Ni.prototype.next=function(){return Oi};
var Oi={done:!0,value:void 0};function Pi(a){return{value:a,done:!1}}
Ni.prototype.Fa=function(){return this};function Qi(a){if(a instanceof Ri||a instanceof Si||a instanceof Ti)return a;if("function"==typeof a.next)return new Ri(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ri(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Ri(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Ri(a){this.i=a}
Ri.prototype.Fa=function(){return new Si(this.i())};
Ri.prototype[Symbol.iterator]=function(){return new Ti(this.i())};
Ri.prototype.h=function(){return new Ti(this.i())};
function Si(a){this.i=a}
w(Si,Ni);Si.prototype.next=function(){return this.i.next()};
Si.prototype[Symbol.iterator]=function(){return new Ti(this.i)};
Si.prototype.h=function(){return new Ti(this.i)};
function Ti(a){Ri.call(this,function(){return a});
this.j=a}
w(Ti,Ri);Ti.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
$a(L,H);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Ui(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function Ui(a,b,c){de(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.Aa.S.call(this);this.clear();this.j.length=0};function Vi(a){this.h=a}
Vi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Jh).serialize(b))};
Vi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vi.prototype.remove=function(a){this.h.remove(a)};function Wi(a){this.h=a}
$a(Wi,Vi);function Xi(a){this.data=a}
function Yi(a){return void 0===a||a instanceof Xi?a:new Xi(a)}
Wi.prototype.set=function(a,b){Wi.Aa.set.call(this,a,Yi(b))};
Wi.prototype.i=function(a){a=Wi.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zi(a){this.h=a}
$a(Zi,Wi);Zi.prototype.set=function(a,b,c){if(b=Yi(b)){if(c){if(c<Za()){Zi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Zi.Aa.set.call(this,a,b)};
Zi.prototype.i=function(a){var b=Zi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Zi.prototype.remove.call(this,a);else return b}};function $i(){}
;function aj(){}
$a(aj,$i);aj.prototype[Symbol.iterator]=function(){return Qi(this.Fa(!0)).h()};
aj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function bj(a){this.h=a;this.i=null}
$a(bj,aj);m=bj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){cj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){cj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){cj(this);this.h.removeItem(a)};
m.Fa=function(a){cj(this);var b=0,c=this.h,d=new Ni;d.next=function(){if(b>=c.length)return Oi;var e=c.key(b++);if(a)return Pi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pi(e)};
return d};
m.clear=function(){cj(this);this.h.clear()};
m.key=function(a){cj(this);return this.h.key(a)};
function cj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Xd(Error("Storage mechanism: Storage unavailable"))}
;function dj(){var a=null;try{a=C.localStorage||null}catch(b){}bj.call(this,a)}
$a(dj,bj);function ej(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ej)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=ej.prototype;m.Bc=function(){fj(this);return this.h.concat()};
m.has=function(a){return gj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||hj;fj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function hj(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return gj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&fj(this),!0):!1};
function fj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];gj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],gj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return gj(this.i,a)?this.i[a]:b};
m.set=function(a,b){gj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ej(this)};
m.keys=function(){return Qi(this.Fa(!0)).h()};
m.values=function(){return Qi(this.Fa(!1)).h()};
m.entries=function(){var a=this;return Fi(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){fj(this);var b=0,c=this.Wa,d=this,e=new Ni;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Oi;var f=d.h[b++];return Pi(a?f:d.i[f])};
return e};
function gj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ij(a,b){this.i=a;this.h=null;var c;if(c=Zc)c=!(9<=Number(ld));if(c){jj||(jj=new ej);this.h=jj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),jj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(ij,aj);var kj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},jj=null;function lj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return kj[b]})}
m=ij.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(lj(a),b);mj(this)};
m.get=function(a){a=this.h.getAttribute(lj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(lj(a));mj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ni;d.next=function(){if(b>=c.length)return Oi;var e=c[b++];if(a)return Pi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Pi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);mj(this)};
function mj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function nj(a,b){this.i=a;this.h=b+"::"}
$a(nj,aj);nj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
nj.prototype.get=function(a){return this.i.get(this.h+a)};
nj.prototype.remove=function(a){this.i.remove(this.h+a)};
nj.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ni;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Pi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},oj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var pj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},qj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
M.af=function(){oj?(M.lb=Uint8Array,M.Ha=Uint16Array,M.Nd=Int32Array,M.assign(M,pj)):(M.lb=Array,M.Ha=Array,M.Nd=Array,M.assign(M,qj))};
M.af();var rj=!0;try{new Uint8Array(1)}catch(a){rj=!1}
function sj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var tj={};tj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var uj={},vj,wj=[],xj=0;256>xj;xj++){vj=xj;for(var yj=0;8>yj;yj++)vj=vj&1?3988292384^vj>>>1:vj>>>1;wj[xj]=vj}uj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^wj[(a^b[d])&255];return a^-1};var zj={};zj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Aj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Bj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Cj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Dj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ej=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Fj=Array(576);Aj(Fj);var Gj=Array(60);Aj(Gj);var Hj=Array(512);Aj(Hj);var Ij=Array(256);Aj(Ij);var Jj=Array(29);Aj(Jj);var Kj=Array(30);Aj(Kj);function Lj(a,b,c,d,e){this.Fd=a;this.ee=b;this.de=c;this.Yd=d;this.Ae=e;this.ld=a&&a.length}
var Mj,Nj,Oj;function Pj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Qj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Rj(a,b,c){a.fa>16-c?(a.la|=b<<a.fa&65535,Qj(a,a.la),a.la=b>>16-a.fa,a.fa+=c-16):(a.la|=b<<a.fa&65535,a.fa+=c)}
function Sj(a,b,c){Rj(a,c[2*b],c[2*b+1])}
function Tj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Uj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Tj(d[e]++,e))}
function Vj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.ra[512]=1;a.Na=a.zb=0;a.ya=a.matches=0}
function Wj(a){8<a.fa?Qj(a,a.la):0<a.fa&&(a.W[a.pending++]=a.la);a.la=0;a.fa=0}
function Xj(a,b,c){Wj(a);Qj(a,c);Qj(a,~c);M.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function Yj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Zj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.La;){e<a.La&&Yj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Yj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function ak(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Db+2*d]<<8|a.W[a.Db+2*d+1];var f=a.W[a.Fc+d];d++;if(0===e)Sj(a,f,b);else{var g=Ij[f];Sj(a,g+256+1,b);var h=Bj[g];0!==h&&(f-=Jj[g],Rj(a,f,h));e--;g=256>e?Hj[e]:Hj[256+(e>>>7)];Sj(a,g,c);h=Cj[g];0!==h&&(e-=Kj[g],Rj(a,e,h))}}while(d<a.ya)}Sj(a,256,b)}
function bk(a,b){var c=b.gd,d=b.Va.Fd,e=b.Va.ld,f=b.Va.Yd,g,h=-1;a.La=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.X[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.vb=h;for(g=a.La>>1;1<=g;g--)Zj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.La--],Zj(a,c,1),d=a.X[1],a.X[--a.qb]=g,a.X[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Zj(a,c,1);while(2<=a.La);a.X[--a.qb]=
a.X[1];g=b.gd;k=b.vb;d=b.Va.Fd;e=b.Va.ld;f=b.Va.ee;var l=b.Va.de,n=b.Va.Ae,p,r=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.X[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var t=a.X[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ia[p]++;var y=0;t>=l&&(y=f[t-l]);var z=g[2*t];a.Na+=z*(p+y);e&&(a.zb+=z*(d[2*t+1]+y))}}if(0!==r){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ia[p];0!==t;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Uj(c,h,a.Ia)}
function ck(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function dk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Sj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Sj(a,l,a.ha),g--),Sj(a,16,a.ha),Rj(a,g-3,2)):10>=g?(Sj(a,17,a.ha),Rj(a,g-3,3)):(Sj(a,18,a.ha),Rj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ek(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var fk=!1;function gk(a,b,c){a.W[a.Db+2*a.ya]=b>>>8&255;a.W[a.Db+2*a.ya+1]=b&255;a.W[a.Fc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Ij[c]+256+1)]++,a.bb[2*(256>b?Hj[b]:Hj[256+(b>>>7)])]++);return a.ya===a.Ib-1}
;function hk(a,b){a.msg=zj[b];return b}
function ik(a){for(var b=a.length;0<=--b;)a[b]=0}
function jk(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.mb(a.output,b.W,b.Lb,c,a.wb),a.wb+=c,b.Lb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Lb=0))}
function kk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.vc&&(a.I.vc=ek(a));bk(a,a.ec);bk(a,a.Yb);ck(a,a.ra,a.ec.vb);ck(a,a.bb,a.Yb.vb);bk(a,a.Yc);for(e=18;3<=e&&0===a.ha[2*Ej[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Rj(a,b?1:0,3),Xj(a,c,d);else if(4===a.strategy||g===f)Rj(a,2+(b?1:0),3),ak(a,Fj,Gj);else{Rj(a,4+(b?1:0),3);c=a.ec.vb+1;d=a.Yb.vb+1;e+=1;Rj(a,c-257,5);Rj(a,d-1,5);Rj(a,e-4,4);for(f=0;f<e;f++)Rj(a,a.ha[2*
Ej[f]+1],3);dk(a,a.ra,c-1);dk(a,a.bb,d-1);ak(a,a.ra,a.bb)}Vj(a);b&&Wj(a);a.va=a.o;jk(a.I)}
function P(a,b){a.W[a.pending++]=b}
function lk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function mk(a,b){var c=a.pd,d=a.o,e=a.xa,f=a.qd,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Xa,l=a.Ga,n=a.o+258,p=h[d+e-1],r=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function nk(a){var b=a.ja,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.ka)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=tj(e.H,c,g,f):2===e.state.wrap&&(e.H=uj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.K=a.window[d],
a.K=(a.K<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.K=(a.K<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.I.ka)}
function ok(a,b){for(var c;;){if(262>a.u){nk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.P=mk(a,c));if(3<=a.P)if(c=gk(a,a.o-a.ub,a.P-3),a.u-=a.P,a.P<=a.Hc&&3<=a.u){a.P--;do a.o++,a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.K=a.window[a.o],a.K=(a.K<<a.Ka^a.window[a.o+1])&a.Ja;else c=gk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(kk(a,!1),0===a.I.M))return 1}a.sa=2>a.o?a.o:2;return 4===b?(kk(a,!0),0===a.I.M?3:4):a.ya&&(kk(a,!1),0===a.I.M)?1:2}
function pk(a,b){for(var c,d;;){if(262>a.u){nk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.xa=a.P;a.td=a.ub;a.P=2;0!==c&&a.xa<a.Hc&&a.o-c<=a.ja-262&&(a.P=mk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.ub)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=gk(a,a.o-1-a.td,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.xa);a.fb=0;a.P=2;a.o++;if(c&&(kk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=gk(a,0,a.window[a.o-1]))&&kk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(gk(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(kk(a,!0),0===a.I.M?3:4):a.ya&&(kk(a,!1),0===a.I.M)?1:2}
function qk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){nk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=gk(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=gk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(kk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(kk(a,!0),0===a.I.M?3:4):
a.ya&&(kk(a,!1),0===a.I.M)?1:2}
function rk(a,b){for(var c;;){if(0===a.u&&(nk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=gk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(kk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(kk(a,!0),0===a.I.M?3:4):a.ya&&(kk(a,!1),0===a.I.M)?1:2}
function sk(a,b,c,d,e){this.me=a;this.ze=b;this.De=c;this.ye=d;this.he=e}
var tk;tk=[new sk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){nk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,kk(a,!1),0===a.I.M)return 1;if(a.o-a.va>=a.ja-262&&(kk(a,!1),0===a.I.M))return 1}a.sa=0;if(4===b)return kk(a,!0),0===a.I.M?3:4;a.o>a.va&&kk(a,!1);return 1}),
new sk(4,4,8,4,ok),new sk(4,5,16,8,ok),new sk(4,6,32,32,ok),new sk(4,4,16,16,pk),new sk(8,16,32,32,pk),new sk(8,16,128,128,pk),new sk(8,32,128,256,pk),new sk(32,128,258,1024,pk),new sk(32,258,258,4096,pk)];
function uk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Lb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ja=0;this.window=null;this.Ld=0;this.head=this.Ga=null;this.qd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.xa=this.u=this.ub=this.o=this.fb=this.td=this.P=this.va=this.Ka=this.Ja=this.Cc=this.dc=this.K=0;this.ra=new M.Ha(1146);this.bb=new M.Ha(122);this.ha=new M.Ha(78);ik(this.ra);ik(this.bb);ik(this.ha);this.Yc=this.Yb=this.ec=
null;this.Ia=new M.Ha(16);this.X=new M.Ha(573);ik(this.X);this.qb=this.La=0;this.depth=new M.Ha(573);ik(this.depth);this.fa=this.la=this.sa=this.matches=this.zb=this.Na=this.Db=this.ya=this.Ib=this.Fc=0}
function vk(a,b){if(!a||!a.state||5<b||0>b)return a?hk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return hk(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=uj(a.H,c.W,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;lk(c,e+(31-e%31));0!==c.o&&(lk(c,a.H>>>16),lk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=uj(a.H,c.W,c.pending-e,e)),jk(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=uj(a.H,c.W,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=uj(a.H,c.W,c.pending-e,e)),jk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=uj(a.H,c.W,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=uj(a.H,c.W,c.pending-e,e)),jk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=uj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&jk(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(jk(a),0===a.M)return c.sb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return hk(a,-5);if(666===c.status&&0!==a.ka)return hk(a,-5);if(0!==a.ka||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?rk(c,b):3===c.strategy?qk(c,b):tk[c.level].he(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Rj(c,2,3),Sj(c,256,Fj),16===c.fa?(Qj(c,c.la),c.la=0,c.fa=0):8<=c.fa&&
(c.W[c.pending++]=c.la&255,c.la>>=8,c.fa-=8)):5!==b&&(Rj(c,0,3),Xj(c,0,0),3===b&&(ik(c.head),0===c.u&&(c.o=0,c.va=0,c.sa=0))),jk(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.kb&255),P(c,a.kb>>8&255),P(c,a.kb>>16&255),P(c,a.kb>>24&255)):(lk(c,a.H>>>16),lk(c,a.H&65535));jk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var wk={};wk=function(){this.input=null;this.kb=this.ka=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.vc=2;this.H=0};var xk=Object.prototype.toString;
function yk(a){if(!(this instanceof yk))return new yk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new wk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=hk(b,-2);else{8===e&&(e=9);var k=new uk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ja=1<<k.Uc;k.Xa=k.ja-1;k.Cc=f+7;k.dc=1<<k.Cc;k.Ja=k.dc-1;k.Ka=~~((k.Cc+3-1)/3);k.window=new M.lb(2*k.ja);k.head=new M.Ha(k.dc);k.Ga=new M.Ha(k.ja);k.Ib=1<<f+6;k.za=4*k.Ib;k.W=new M.lb(k.za);k.Db=1*k.Ib;k.Fc=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.vc=2;c=b.state;c.pending=0;c.Lb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!fk){d=Array(16);for(f=g=0;28>f;f++)for(Jj[f]=g,e=0;e<1<<Bj[f];e++)Ij[g++]=f;Ij[g-1]=f;for(f=g=0;16>f;f++)for(Kj[f]=g,e=0;e<1<<Cj[f];e++)Hj[g++]=f;for(g>>=7;30>f;f++)for(Kj[f]=g<<7,e=0;e<1<<Cj[f]-7;e++)Hj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Fj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Fj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Fj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Fj[2*e+1]=8,e++,d[8]++;Uj(Fj,287,d);for(e=0;30>e;e++)Gj[2*e+1]=5,Gj[2*e]=Tj(e,5);Mj=new Lj(Fj,Bj,257,286,15);Nj=new Lj(Gj,
Cj,0,30,15);Oj=new Lj([],Dj,0,19,7);fk=!0}c.ec=new Pj(c.ra,Mj);c.Yb=new Pj(c.bb,Nj);c.Yc=new Pj(c.ha,Oj);c.la=0;c.fa=0;Vj(c);c=0}else c=hk(b,-2);0===c&&(b=b.state,b.Ld=2*b.ja,ik(b.head),b.Hc=tk[b.level].ze,b.kd=tk[b.level].me,b.qd=tk[b.level].De,b.pd=tk[b.level].ye,b.o=0,b.va=0,b.u=0,b.sa=0,b.P=b.xa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(zj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=sj(a.dictionary):
"[object ArrayBuffer]"===xk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=tj(a.H,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(ik(l.head),l.o=0,l.va=0,l.sa=0),c=new M.lb(l.ja),M.mb(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.ka;d=a.hb;e=a.input;a.ka=g;a.hb=0;a.input=f;for(nk(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;nk(l)}l.o+=l.u;l.va=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.ka=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(zj[b]);this.Tf=!0}}
yk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=sj(a):"[object ArrayBuffer]"===xk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ka=c.input.length;do{0===c.M&&(c.output=new M.lb(d),c.wb=0,c.M=d);a=vk(c,e);if(1!==a&&0!==a)return zk(this,a),this.ended=!0,!1;if(0===c.M||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=M.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&rj||!b.subarray))b=
String.fromCharCode.apply(null,M.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.ka||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=hk(c,-2):(c.state=null,a=113===d?hk(c,-3):0)):a=-2,zk(this,a),this.ended=!0,0===a;2===e&&(zk(this,0),c.M=0);return!0};
function zk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Ak(a,b){b=b||{};b.gzip=!0;b=new yk(b);b.push(a,!0);if(b.err)throw b.msg||zj[b.err];return b.result}
;function Bk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Ck(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function Dk(a){this.name=a}
;var Ek=new Dk("rawColdConfigGroup");var Fk=new Dk("rawHotConfigGroup");function Gk(a){this.F=I(a)}
w(Gk,K);var Hk=new Dk("continuationCommand");var Ik=new Dk("webCommandMetadata");var Jk=new Dk("signalServiceEndpoint");var Kk={Ff:"EMBEDDED_PLAYER_MODE_UNKNOWN",Cf:"EMBEDDED_PLAYER_MODE_DEFAULT",Ef:"EMBEDDED_PLAYER_MODE_PFP",Df:"EMBEDDED_PLAYER_MODE_PFL"};var Lk=new Dk("feedbackEndpoint");function Mk(a){this.F=I(a)}
w(Mk,K);Mk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new gf(a,df):ef||(ef=new gf(null,df));else if(a.constructor!==gf)if(cf(a))a=a.length?new gf(new Uint8Array(a),df):ef||(ef=new gf(null,df));else throw Error();return og(this,1,a)};var Nk=new Dk("webPlayerShareEntityServiceEndpoint");var Ok=new Dk("playlistEditEndpoint");var Pk=new Dk("modifyChannelNotificationPreferenceEndpoint");var Qk=new Dk("unsubscribeEndpoint");var Rk=new Dk("subscribeEndpoint");function Sk(){var a=Tk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Uk(a){D("yt.ads.biscotti.lastId_",a)}
;function Vk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Wk=C.window,Xk,Yk,Zk=(null==Wk?void 0:null==(Xk=Wk.yt)?void 0:Xk.config_)||(null==Wk?void 0:null==(Yk=Wk.ytcfg)?void 0:Yk.data_)||{};D("yt.config_",Zk);function $k(){Vk(Zk,arguments)}
function S(a,b){return a in Zk?Zk[a]:b}
function al(a){var b=Zk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var bl=[];function cl(a){bl.forEach(function(b){return b(a)})}
function dl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){el(b)}}:a}
function el(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),$k("ERRORS",b));cl(a)}
function fl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),$k("ERRORS",f))}
;var gl=/^[\w.]*$/,hl={q:!0,search_query:!0};function il(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=jl(f[0]||""),h=jl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Lb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(il);l.args=[{key:n,value:f[1],query:a,method:kl===p?"unchanged":p}];hl.hasOwnProperty(n)||fl(l)}}return c}
var kl=String(il);function ll(a){var b=[];Mb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Fb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ml(a){"?"===a.charAt(0)&&(a=a.substring(1));return il(a,"&")}
function nl(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ml(1<a.length?a[1]:a[0])):{}}
function ol(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ml(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Hc(a,e)+d}
function pl(a){if(!b)var b=window.location.href;var c=Bc(1,a),d=Cc(a);c&&d?(a=a.match(zc),b=b.match(zc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Cc(b)===d&&(Number(Bc(4,b))||null)===(Number(Bc(4,a))||null):!0;return a}
function jl(a){return a&&a.match(gl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ql(a){var b=rl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=wi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ga){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?oi:g;try{var h=g.history.length}catch(Ga){h=0}e.u_his=h;var k;e.u_h=null==(k=oi.screen)?void 0:k.height;var l;e.u_w=null==(l=oi.screen)?void 0:l.width;var n;e.u_ah=null==(n=oi.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=oi.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=oi.screen)?void 0:r.colorDepth}catch(Ga){}h=b.h;try{var t=h.screenX;var y=h.screenY}catch(Ga){}try{var z=h.outerWidth;var x=h.outerHeight}catch(Ga){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Ga){}try{var R=h.screenLeft;var N=h.screenTop}catch(Ga){}try{J=h.innerWidth,G=h.innerHeight}catch(Ga){}try{var da=h.screen.availWidth;var Ca=h.screen.availTop}catch(Ga){}t=[R,N,t,y,da,Ca,z,x,J,G];try{var O=(b.h.top||window).document,ea="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var ka=(new Rd(ea.clientWidth,ea.clientHeight)).round()}catch(Ga){ka=new Rd(-12245933,-12245933)}O=ka;ka={};var pa=void 0===pa?C:pa;ea=new Ci;"SVGElement"in pa&&"createElementNS"in pa.document&&ea.set(0);y=ti();y["allow-top-navigation-by-user-activation"]&&ea.set(1);y["allow-popups-to-escape-sandbox"]&&ea.set(2);pa.crypto&&pa.crypto.subtle&&ea.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&ea.set(4);pa=Di(ea);ka.bc=pa;ka.bih=O.height;ka.biw=O.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!oi.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var rl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ll(ql(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var sl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function tl(){if(!sl)return null;var a=sl();return"open"in a?a:null}
function ul(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function vl(a,b){"function"===typeof a&&(a=dl(a));return window.setTimeout(a,b)}
;var wl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(wl),["client_dev_set_cookie"]);function T(a){a=xl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=xl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function xl(a){return S("EXPERIMENT_FLAGS",{})[a]}
function yl(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var zl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Al="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(wl)),Bl=!1;
function Cl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&dl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=tl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Dl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=El(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){fl(p)}}l.send(d);return l}
function El(a,b){b=void 0===b?{}:b;var c=pl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in zl){var f=S(zl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Cc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Cc(a)||(b["X-YouTube-Ad-Signals"]=ll(ql()));return b}
function Fl(a,b){b.method="POST";b.postParams||(b.postParams={});return Gl(a,b)}
function Gl(a,b){var c=b.format||"JSON";a=Hl(a,b);var d=Il(a,b),e=!1,f=Jl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=ul(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Kl(a,c,k,b.convertToSafeHtml);l&&(l=Ll(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=vl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Hl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ol(a,b||{},!0);return a}
function Il(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Cc(a)&&!b.withCredentials&&Cc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ml(e),Wb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):Gc(e));f=e||f&&!Pb(f);!Bl&&f&&"POST"!==b.method&&(Bl=!0,el(Error("AJAX request with postData should use POST")));return e}
function Kl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,fl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ml(a):null)e={},Fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nl(g)})}d&&Ol(e);
return e}
function Ol(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new ic(d)}else Ol(a[b])}}
function Ll(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Ml(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nl(a){var b="";Fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dl(a){var b=window.location.search,c=Cc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&pl(a)&&(c=document.location.hostname);var d=Ac(Bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ml(b),f={};Fb(Al,function(g){e[g]&&(f[g]=e[g])});
return ol(a,f||{},!1)}
var Jl=Cl;var Pl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rl={Ta:[],Qa:[{callback:Ql,weight:500}]};function Ql(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sl(){this.Qa=[];this.Ta=[]}
var Tl;function Ul(){if(!Tl){var a=Tl=new Sl;a.Ta.length=0;a.Qa.length=0;Rl.Ta&&a.Ta.push.apply(a.Ta,Rl.Ta);Rl.Qa&&a.Qa.push.apply(a.Qa,Rl.Qa)}return Tl}
;var Vl=new L;function Wl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Xl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Xl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Xl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Yl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Wl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Zl(f+".ve",g,h,k):0;d+=f;d+=Zl(e,a[e],b,c);if(500<d)break}}else c[b]=$l(a),d+=c[b].length;else c[b]=$l(a),d+=c[b].length;return d}
function Zl(a,b,c,d){c+="."+a;a=$l(b);d[c]=a;return c.length+a.length}
function $l(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function am(){this.ff=!0}
function bm(){am.h||(am.h=new am);return am.h}
function cm(a,b){a={};var c=ah([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Zk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Zk&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var dm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function em(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function fm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gm(a,b,c,d,e){Xg.set(""+a,b,{Kb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function hm(a){return Xg.get(""+a,void 0)}
function im(a,b,c){Xg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function jm(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Xg.isEnabled())return!1;if(Xg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Xg.set("TESTCOOKIESENABLED","1",{Kb:60,Qe:"none",secure:!0}):Xg.set("TESTCOOKIESENABLED","1",{Kb:60});if("1"!==Xg.get("TESTCOOKIESENABLED"))return!1;Xg.remove("TESTCOOKIESENABLED");return!0}
;var km=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",km);function lm(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hm(this.h);a&&this.parse(a)}
var mm;function nm(){mm||(mm=new lm);return mm}
m=lm.prototype;m.get=function(a,b){om(a);pm(a);a=void 0!==km[a]?km[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){om(a);pm(a);if(null==b)throw Error("ExpectedNotNull");km[a]=b.toString()};
function qm(a){return!!((rm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){om(a);pm(a);delete km[a]};
m.clear=function(){for(var a in km)delete km[a]};
function pm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function om(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function rm(a){a=void 0!==km[a]?km[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(km[d]=c.toString())}};var sm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},tm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function um(){var a=C.navigator;return a?a.connection:void 0}
function wm(){var a=um();if(a){var b=sm[a.type||"unknown"]||"CONN_UNKNOWN";a=sm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function xm(){var a=um();if(null!=a&&a.effectiveType)return tm.hasOwnProperty(a.effectiveType)?tm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(V,Error);function ym(){try{return zm(),!0}catch(a){return!1}}
function zm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function Am(){}
function Bm(a,b){return Bi.ab(a,0,b)}
Am.prototype.oa=function(a,b){return this.ab(a,1,b)};
Am.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Cm=U("web_emulated_idle_callback_delay",300),Dm=1E3/60-3,Em=[8,5,4,3,2,1,0];
function Fm(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.ba=this.h=0;this.Y=this.m=!1;this.R=[];this.V=this.ea=!1;for(var b=v(Em),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.sc=a.timeout||1;this.D=Dm;this.A=0;this.ta=this.Fe.bind(this);this.qc=this.jf.bind(this);this.Pa=this.Rd.bind(this);this.Za=this.ne.bind(this);this.Qb=this.Ie.bind(this);this.Ba=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ga=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
w(Fm,H);m=Fm.prototype;m.Bb=function(a){var b=Za();Gm(this,a);a=Za()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.m||(0!==this.h&&Hm(this)!==this.A&&this.stop(),this.start()));return d};
m.pa=function(a){delete this.j[a]};
function Im(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Jm(a){return!a.isHidden()&&a.ga}
function Hm(a){if(a.i[8].length){if(a.V)return 4;if(Jm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Jm(a)?3:2:1;return 0}
m.Jb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Gm(a,b){try{b()}catch(c){a.Jb(c)}}
function Km(a){for(var b=v(Em),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.ne=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Lm(this,b);this.ea=!1};
m.jf=function(){Lm(this)};
m.Rd=function(){Mm(this)};
m.Ie=function(a){this.V=!0;var b=Hm(this);4===b&&b!==this.A&&(this.stop(),this.start());Lm(this,void 0,a);this.V=!1};
m.Fe=function(){this.isHidden()||Mm(this);this.h&&(this.stop(),this.start())};
function Mm(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Gm(a,e)}Nm(a);a.m=!1;Km(a)&&a.start();b=Za()-b;a.D-=b}
function Nm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Lm(a,b,c){a.V&&4===a.A&&a.h||a.stop();a.m=!0;b=Za()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Jb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Gm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Gm(a,c)}while(c&&Za()<b)}a.m=!1;Nm(a);a.D=Dm;Km(a)&&a.start()}
m.start=function(){this.Y=!1;if(0===this.h)switch(this.A=Hm(this),this.A){case 1:var a=this.Za;this.h=this.Ba?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Cm);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.Y=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ba?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Im(this);this.stop();this.ga&&document.removeEventListener("visibilitychange",this.ta);H.prototype.S.call(this)};var Om=E("yt.scheduler.instance.timerIdMap_")||{},Pm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Qm=0,Rm=0;function Sm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Fm(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Tm(){Um();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Qc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Um(){Im(Sm());for(var a in Om)Om.hasOwnProperty(a)&&delete Om[Number(a)]}
function Vm(a,b,c){if(!c)return c=void 0===c,-Sm().ab(a,b,c);var d=window.setTimeout(function(){var e=Sm().ab(a,b);Om[d]=e},c);
return d}
function Wm(a){Sm().Bb(a)}
function Xm(a){var b=Sm();if(0>a)b.pa(-a);else{var c=Om[a];c?(b.pa(c),delete Om[a]):window.clearTimeout(a)}}
function Ym(){Zm()}
function Zm(){window.clearTimeout(Qm);Sm().start()}
function $m(){Sm().pause();window.clearTimeout(Qm);Qm=window.setTimeout(Ym,Pm)}
function an(){window.clearTimeout(Rm);Rm=window.setTimeout(function(){bn(0)},Pm)}
function bn(a){an();var b=Sm();b.l=a;b.start()}
function cn(a){an();var b=Sm();b.l>a&&(b.l=a,b.start())}
function dn(){window.clearTimeout(Rm);var a=Sm();a.l=0;a.start()}
function en(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Tm),D("yt.scheduler.instance.addJob",Vm),D("yt.scheduler.instance.addImmediateJob",Wm),D("yt.scheduler.instance.cancelJob",Xm),D("yt.scheduler.instance.cancelAllJobs",Um),D("yt.scheduler.instance.start",Zm),D("yt.scheduler.instance.pause",$m),D("yt.scheduler.instance.setPriorityThreshold",bn),D("yt.scheduler.instance.enablePriorityThreshold",cn),D("yt.scheduler.instance.clearPriorityThreshold",dn),D("yt.scheduler.initialized",
!0))}
;function fn(){Am.apply(this,arguments)}
w(fn,Am);function gn(){fn.h||(fn.h=new fn);return fn.h}
fn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vl(a,c||0)};
fn.prototype.pa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
fn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Bi=gn();T("web_scheduler_auto_init")&&en();function hn(a){var b=new dj;(b=b.isAvailable()?a?new nj(b,a):b:null)||(a=new ij(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Zi(a):null;this.i=document.domain||window.location.hostname}
hn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Jh).serialize(b))}catch(f){return}else e=escape(b);gm(a,e,c,this.i)};
hn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=hm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hn.prototype.remove=function(a){this.h&&this.h.remove(a);im(a,"/",this.i)};var jn=function(){var a;return function(){a||(a=new hn("ytidb"));return a}}();
function kn(){var a;return null==(a=jn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ln=[],mn,nn=!1;function on(){var a={};for(mn=new pn(void 0===a.handleError?qn:a.handleError,void 0===a.logEvent?rn:a.logEvent);0<ln.length;)switch(a=ln.shift(),a.type){case "ERROR":mn.Jb(a.payload);break;case "EVENT":mn.logEvent(a.eventType,a.payload)}}
function sn(a){nn||(mn?mn.Jb(a):(ln.push({type:"ERROR",payload:a}),10<ln.length&&ln.shift()))}
function tn(a,b){nn||(mn?mn.logEvent(a,b):(ln.push({type:"EVENT",eventType:a,payload:b}),10<ln.length&&ln.shift()))}
;function un(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function vn(a){return a.substr(0,a.indexOf(":"))||a}
;var wn=Oe||Pe;function xn(a){var b=Zb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var yn={},zn=(yn.AUTH_INVALID="No user identifier specified.",yn.EXPLICIT_ABORT="Transaction was explicitly aborted.",yn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",yn.MISSING_INDEX="Index not created.",yn.MISSING_OBJECT_STORES="Object stores not created.",yn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",yn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",yn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
yn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",yn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",yn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",yn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",yn),An={},Bn=(An.AUTH_INVALID="ERROR",An.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",An.EXPLICIT_ABORT="IGNORED",An.IDB_NOT_SUPPORTED="ERROR",An.MISSING_INDEX=
"WARNING",An.MISSING_OBJECT_STORES="ERROR",An.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",An.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",An.QUOTA_EXCEEDED="WARNING",An.QUOTA_MAYBE_EXCEEDED="WARNING",An.UNKNOWN_ABORT="WARNING",An.INCOMPATIBLE_DB_VERSION="WARNING",An),Cn={},Dn=(Cn.AUTH_INVALID=!1,Cn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Cn.EXPLICIT_ABORT=!1,Cn.IDB_NOT_SUPPORTED=!1,Cn.MISSING_INDEX=!1,Cn.MISSING_OBJECT_STORES=!1,Cn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Cn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Cn.QUOTA_EXCEEDED=!1,Cn.QUOTA_MAYBE_EXCEEDED=!0,Cn.UNKNOWN_ABORT=!0,Cn.INCOMPATIBLE_DB_VERSION=!1,Cn);function En(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?zn[a]:c;d=void 0===d?Bn[a]:d;e=void 0===e?Dn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,En.prototype)}
w(En,V);function Fn(a,b){En.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},zn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Fn.prototype)}
w(Fn,En);function Gn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Gn.prototype)}
w(Gn,Error);var Hn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function In(a,b,c,d){b=vn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof En)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new En("QUOTA_EXCEEDED",a);if(Qe&&"UnknownError"===e.name)return new En("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Gn)return new En("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Hn.some(function(f){return e.message.includes(f)}))return new En("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new En("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function Jn(a,b,c){var d=kn();return new En("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Kn(a){if(!a)throw Error();throw a;}
function Ln(a){return a}
function Mn(a){this.h=a}
function Nn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Nn.all=function(a){return new Nn(new Mn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Nn.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Nn.resolve=function(a){return new Nn(new Mn(function(b,c){a instanceof Nn?a.then(b,c):b(a)}))};
Nn.reject=function(a){return new Nn(new Mn(function(b,c){c(a)}))};
Nn.prototype.then=function(a,b){var c=this,d=null!=a?a:Ln,e=null!=b?b:Kn;return new Nn(new Mn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){On(c,c,d,f,g)}),c.i.push(function(){Pn(c,c,e,f,g)})):"FULFILLED"===c.state.status?On(c,c,d,f,g):"REJECTED"===c.state.status&&Pn(c,c,e,f,g)}))};
Nn.prototype.catch=function(a){return this.then(void 0,a)};
function On(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Nn?Qn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Nn?Qn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Nn?Qn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Rn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Sn(a){return new Promise(function(b,c){Rn(a,b,c)})}
function Tn(a){return new Nn(new Mn(function(b,c){Rn(a,b,c)}))}
;function Un(a,b){return new Nn(new Mn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Vn=window,W=Vn.ytcsi&&Vn.ytcsi.now?Vn.ytcsi.now:Vn.performance&&Vn.performance.timing&&Vn.performance.now&&Vn.performance.timing.navigationStart?function(){return Vn.performance.timing.navigationStart+Vn.performance.now()}:function(){return(new Date).getTime()};function Wn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Wn.prototype;m.add=function(a,b,c){return Xn(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Xn(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Xn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Yn(a,b,c){a=a.h.createObjectStore(b,c);return new Zn(a)}
m.delete=function(a,b){return Xn(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Xn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function $n(a,b,c){return Xn(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return Tn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Xn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,y,z;return A(function(x){switch(x.h){case 1:var J={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){x.B(4);break}g++;k=Math.round(W());Aa(x,5);l=a.h.transaction(b,e.mode);J=x.yield;var G=new ao(l);G=bo(G,d);return J.call(x,G,7);case 7:return n=x.i,p=Math.round(W()),co(a,k,p,g,void 0,b.join(),e),x.return(n);case 5:r=Ba(x);t=Math.round(W());y=In(r,
a.h.name,b.join(),a.h.version);if((z=y instanceof En&&!y.h)||g>=f)co(a,k,t,g,y,b.join(),e),h=y;x.B(2);break;case 4:return x.return(Promise.reject(h))}})}
function co(a,b,c,d,e,f,g){b=c-b;e?(e instanceof En&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&tn("QUOTA_EXCEEDED",{dbName:vn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof En&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),tn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),eo(a,!1,d,f,b,g.tag),sn(e)):eo(a,!0,d,f,b,g.tag)}
function eo(a,b,c,d,e,f){tn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Zn(a){this.h=a}
m=Zn.prototype;m.add=function(a,b){return Tn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Tn(this.h.clear()).then(function(){})};
function fo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Tn(this.h.count(a))};
function go(a,b){return ho(a,{query:b},function(c){return c.delete().then(function(){return io(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?go(this,a):Tn(this.h.delete(a))};
m.get=function(a){return Tn(this.h.get(a))};
m.index=function(a){try{return new jo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Gn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ho(a,b,c){a=a.h.openCursor(b.query,b.direction);return ko(a).then(function(d){return Un(d,c)})}
function ao(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=En;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function bo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
ao.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new En("EXPLICIT_ABORT");};
ao.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Zn(a),this.i.set(a,b));return b};
function jo(a){this.h=a}
m=jo.prototype;m.count=function(a){return Tn(this.h.count(a))};
m.delete=function(a){return lo(this,{query:a},function(b){return b.delete().then(function(){return io(b)})})};
m.get=function(a){return Tn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function lo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ko(a).then(function(d){return Un(d,c)})}
function mo(a,b){this.request=a;this.cursor=b}
function ko(a){return Tn(a).then(function(b){return b?new mo(a,b):null})}
function io(a){a.cursor.continue(void 0);return ko(a.request)}
mo.prototype.delete=function(){return Tn(this.cursor.delete()).then(function(){})};
mo.prototype.getValue=function(){return this.cursor.value};
mo.prototype.update=function(a){return Tn(this.cursor.update(a))};function no(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Wn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Td,k=c.blocking,l=c.gf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&tn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:vn(a)});var y=f(),z=new ao(g.transaction);
n&&n(y,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){tn("IDB_UNEXPECTEDLY_CLOSED",{dbName:vn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function oo(a,b,c){c=void 0===c?{}:c;return no(a,b,c)}
function po(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Td)&&c.addEventListener("blocked",function(){e()}),g.yield(Sn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),In(f,a,"",-1);})}
;function qo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
qo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return oo(a,b,c)};
qo.prototype.delete=function(a){a=void 0===a?{}:a;return po(this.name,a)};
function ro(a,b){return new En("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function so(a,b){if(!b)throw Jn("openWithToken",vn(a.name));return a.open()}
qo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,y;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,J=c.options,G=[],R=v(Object.keys(J.xb)),N=R.next();!N.done;N=R.next()){N=N.value;var da=J.xb[N],Ca=void 0===da.Le?Number.MAX_VALUE:da.Le;!(x.h.version>=da.Cb)||x.h.version>=Ca||x.h.objectStoreNames.contains(N)||G.push(N)}k=G;if(0===k.length){z.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),sn(new En("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.B(6);break}c.l++;return z.yield(c.delete(),7);case 7:return sn(new En("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new Fn(n,l);case 5:return z.return(h);case 2:p=Ba(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,ro(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),In(p,c.name,"",null!=(y=c.options.version)?y:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ro(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,gf:b,upgrade:this.options.upgrade};return this.h=d=a()};var to=new qo("YtIdbMeta",{xb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Yn(a,"databases",{keyPath:"actualName"})}});
function uo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(so(to,b),2);c=d.i;return d.return(Xn(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Tn(f.h.put(a,void 0)).then(function(){})})}))})}
function vo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(so(to,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(so(to,b),2)):3!=e.h?(d=e.i,e.yield(Xn(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return ho(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return io(g)})}),3)):e.return(c)})}
function xo(a){return wo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yo(a,b,c){return wo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zo(a){var b,c;return A(function(d){if(1==d.h)return b=zm("YtIdbMeta hasAnyMeta other"),d.yield(wo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Ao,Bo=new function(){}(new function(){});
function Co(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=kn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=wn)f=/WebKit\/([0-9]+)/.exec(Zb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Zb()),f=!(f&&602<=parseInt(f[1],10)));if(f||$c)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(uo(d,Bo),4);case 4:return e.yield(vo("yt-idb-test-do-not-use",Bo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Do(){if(void 0!==Ao)return Ao;nn=!0;return Ao=Co().then(function(a){nn=!1;var b;if(null!=(b=jn())&&b.h){var c;b={hasSucceededOnce:(null==(c=kn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=jn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Eo(){return E("ytglobal.idbToken_")||void 0}
function Fo(){var a=Eo();return a?Promise.resolve(a):Do().then(function(b){(b=b?Bo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Go=0;function Ho(a,b){Go||(Go=Bi.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Fo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(yo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(po(f.actualName),7);case 7:return h.yield(vo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),sn(g),d=!1;case 4:Bi.pa(Go),Go=0,d&&Ho(a,b),h.h=0}})}))}
function Io(){var a;return A(function(b){return 1==b.h?b.yield(Fo(),2):(a=b.i)?b.return(zo(a)):b.return(!1)})}
new mi;function Jo(a){if(!ym())throw a=new En("AUTH_INVALID",{dbName:a}),sn(a),a;var b=zm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ko(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Fo(),2);case 2:g=n.i;if(!g)throw h=Jn("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sn(h),h;un(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jo(a);Aa(n,3);return n.yield(uo(k,g),5);case 5:return n.yield(oo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(vo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Lo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!1,c)}
function Mo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!0,c)}
function No(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Fo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();un(a);d=Jo(a);return e.yield(po(d.actualName,b),3)}return e.yield(vo(d.actualName,c),0)})}
function Oo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(po(d.actualName,b),2):e.yield(vo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Po(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();un("LogsDatabaseV2");return d.yield(xo(b),3)}c=d.i;return d.yield(Oo(c,a,b),0)})}
function Qo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();un(a);return d.yield(po(a,b),3)}return d.yield(vo(a,c),0)})}
;function Ro(a,b){qo.call(this,a,b);this.options=b;un(a)}
w(Ro,qo);function So(a,b){var c;return function(){c||(c=new Ro(a,b));return c}}
Ro.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Mo:Lo)(a,b,Object.assign({},c))};
Ro.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Qo:No)(this.name,a)};
function To(a,b){return So(a,b)}
;var Uo={},Vo=To("ytGcfConfig",{xb:(Uo.coldConfigStore={Cb:1},Uo.hotConfigStore={Cb:1},Uo),nc:!1,upgrade:function(a,b){b(1)&&(fo(Yn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),fo(Yn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wo(a){return so(Vo(),a)}
function Xo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Wo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield($n(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Wo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield($n(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Xn(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return lo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $o(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Xn(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return lo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ap(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(ap,H);ap.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function bp(){this.h=0;this.i=new ap}
function cp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function dp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Eo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield($o(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Xo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ep(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Eo())?c?h.B(4):h.yield(Zo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Yo(c,b,g,d),0)})}
function fp(){if(!bp.h){var a=new bp;bp.h=a}a=bp.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
bp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function gp(){return"INNERTUBE_API_KEY"in Zk&&"INNERTUBE_API_VERSION"in Zk}
function hp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),oe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),cg:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:S("INNERTUBE_CONTEXT_HL"),pe:S("INNERTUBE_CONTEXT_GL"),re:S("INNERTUBE_HOST_OVERRIDE")||"",te:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ip(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=yl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=fm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=wm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=xm())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=fp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(ml(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function jp(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Uf:(a=cm(bm()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var kp="undefined"!==typeof TextEncoder?new TextEncoder:null,lp=kp?function(a){return kp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mp(a,b){this.version=a;this.args=b}
mp.prototype.serialize=function(){return{version:this.version,args:this.args}};function np(a,b){this.topic=a;this.h=b}
np.prototype.toString=function(){return this.topic};var op=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",op);var pp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",pp);var qp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",qp);var rp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",rp);
D("ytPubsub2Pubsub2SkipSubKey",null);function sp(a,b){var c=tp();c&&c.publish.call(c,a.toString(),a,b)}
function up(a){var b=vp,c=tp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(pp[d])try{if(f&&b instanceof np&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(x){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var y=Array(t);for(k=0;k<t;k++)y[k]=r[k];var z=y}else z=[];f=p.call(n,h,z)}catch(x){throw x.message="yt.pubsub2.Data.deserialize(): "+x.message,x;}}catch(x){throw x.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+x.message,x;}a.call(window,f)}catch(x){el(x)}},rp[b.toString()]?E("yt.scheduler.instance")?Bi.oa(g):vl(g,0):g())});
pp[d]=!0;qp[b.toString()]||(qp[b.toString()]=[]);qp[b.toString()].push(d);return d}
function wp(){var a=xp,b=up(function(c){a.apply(void 0,arguments);yp(b)});
return b}
function yp(a){var b=tp();b&&("number"===typeof a&&(a=[a]),Fb(a,function(c){b.unsubscribeByKey(c);delete pp[c]}))}
function tp(){return E("ytPubsub2Pubsub2Instance")}
;function zp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&sp("meta_logging_csi_event",{timerName:a,qg:b})}
;var Ap=void 0,Bp=void 0;function Cp(){Bp||(Bp=Bk(S("WORKER_SERIALIZATION_URL")));return Bp||void 0}
function Dp(){var a=Cp();Ap||void 0===a||(Ap=new Worker(kb(a),void 0));return Ap}
;var Ep=U("max_body_size_to_compress",5E5),Fp=U("min_body_size_to_compress",500),Gp=!0,Hp=0,Ip=0,Jp=U("compression_performance_threshold_lr",250),Kp=U("slow_compressions_before_abandon_count",4),Lp=!1,Mp=new Map,Np=1,Op=!0;function Pp(){if("function"===typeof Worker&&Cp()&&!Lp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Mp.get(c.key);d&&(Qp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Mp.delete(c.key))}},b=Dp();
b&&(b.addEventListener("message",a),b.onerror=function(){Mp.clear()},Lp=!0)}}
function Rp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Gp)try{var g=Sp(b);if(null!=g&&(g>Ep||g<Fp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Op||!T("initial_gzip_use_main_thread"))){Lp||Pp();var h=Dp();if(h&&!e){Mp.set(Np,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Np});Np++;return}}var k=Ak(lp(b));Qp(k,f,a,c,d)}}catch(l){fl(l),d(a,c)}else d(a,c)}
function Qp(a,b,c,d,e){Op=!1;var f=W();b.ticks.gelc=f;Ip++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Jp&&(Hp++,T("abandon_compression_after_N_slow_zips")?Ip===U("compression_disable_point")&&Hp>Kp&&(Gp=!1):Gp=!1);Tp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Up(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Gp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Sp(g);if(null!=h&&(h>Ep||h<Fp))return a;c=b?{level:1}:void 0;f=Ak(lp(g),c);var k=W();e.ticks.gelc=k;if(b){Ip++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Jp)if(Hp++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Hp/Ip;var l=Kp/U("compression_disable_point");0<Ip&&0===Ip%U("compression_disable_point")&&b>=l&&(Gp=!1)}else Gp=!1;Tp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return fl(n),a}}else return a}
function Sp(a){try{return(new Blob(a.split(""))).size}catch(b){return fl(b),null}}
function Tp(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||zp("gel_compression",a,{sampleRate:.1})}
;function Vp(a){a=Object.assign({},a);delete a.Authorization;var b=ah();if(b){var c=new Hi;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Te(c.digest(),3)}return a}
;var Wp;function Xp(){Wp||(Wp=new hn("yt.innertube"));return Wp}
function Yp(a,b,c,d){if(d)return null;d=Xp().get("nextId",!0)||1;var e=Xp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vp(c),requestTime:Math.round(W())};Xp().set("nextId",d+1,86400,!0);Xp().set("requests",e,86400,!0);return d}
function Zp(a){var b=Xp().get("requests",!0)||{};delete b[a];Xp().set("requests",b,86400,!0)}
function $p(a){var b=Xp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Vp(jp(!1));Sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),aq(a,d.method,e,{}));delete b[c]}}Xp().set("requests",b,86400,!0)}}
;function bq(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Fb&&(this.Fb=a.Fb);a.Ub&&(this.Ub=a.Ub);this.U=a.U;this.Da=a.Da;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;cq(this)&&(!this.U||this.U("networkless_logging"))&&dq(this)}
function dq(a){cq(a)&&!a.Fb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Ud(a.T),eq(a),a.aa.wa()&&a.Pb(),a.aa.listen(a.Oc,a.Pb.bind(a)),a.aa.listen(a.Lc,a.Zc.bind(a)))}
m=bq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&fq(c,d)}).catch(function(e){fq(c,d);
gq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.T).catch(function(l){gq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
gq(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.T):e=!0;c.aa.gb&&c.U&&c.U("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.T).then(function(g){d.id=g;e&&c.da.nb(d.id,c.T)}).catch(function(g){gq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Pb=function(){var a=this;if(!cq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(fq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Gd))};
m.Zc=function(){this.Da.pa(this.i);this.i=0};
function fq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!cq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.xe(b.id,a.T),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(hq(a,b,a.xd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=iq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function iq(a,b){if(!cq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=jq(f);(h=kq(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.T),8);case 12:a.Da.oa(function(){a.aa.wa()&&a.Pb()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.T),2);a.aa.gb&&a.U&&a.U("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function hq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function eq(a){if(!cq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.T).then(function(b){b&&!hq(a,b,a.vd)?a.Da.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.T),2);eq(a);c.h=0})}):a.aa.wa()&&a.Pb()})}
function gq(a,b){a.Md&&!a.aa.wa()?a.Md(b):a.handleError(b)}
function cq(a){return!!a.T||a.Ub}
function jq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function kq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var lq;
function mq(){if(lq)return lq();var a={};lq=To("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Yn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),fo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return lq()}
;function nq(a){return so(mq(),a)}
function oq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(nq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield($n(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();pq(c);return g.return(f)})}
function qq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(nq(b),2);if(3!=n.h)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(Xn(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(p){return lo(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();pq(c);return n.return(l)})}
function rq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(Xn(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Tn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function sq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(nq(b),2);e=f.i;return f.return(Xn(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Tn(h.h.put(k,void 0)).then(function(){return k})):Nn.resolve(void 0)})}))})}
function tq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function uq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(nq(a),2);b=d.i;c=W()-2592E6;return d.yield(Xn(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return ho(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return io(f)})})}),0)})}
function vq(){A(function(a){return a.yield(Po(),0)})}
function pq(a){T("nwl_csi_killswitch")||zp("networkless_performance",a,{sampleRate:1})}
;var wq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var xq={},yq=To("ServiceWorkerLogsDatabase",{xb:(xq.SWHealthLog={Cb:1},xq),nc:!0,upgrade:function(a,b){b(1)&&fo(Yn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function zq(a){return so(yq(),a)}
function Aq(a){var b,c;A(function(d){if(1==d.h)return d.yield(zq(a),2);b=d.i;c=W()-2592E6;return d.yield(Xn(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return ho(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return io(f)})})}),0)})}
function Bq(a){var b;return A(function(c){if(1==c.h)return c.yield(zq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Cq={},Dq=0;function Eq(a){var b=new Image,c=""+Dq++;Cq[c]=b;b.onload=b.onerror=function(){delete Cq[c]};
b.src=a}
;function Fq(){this.h=new Map;this.i=!1}
function Gq(){if(!Fq.h){var a=E("yt.networkRequestMonitor.instance")||new Fq;D("yt.networkRequestMonitor.instance",a);Fq.h=a}return Fq.h}
Fq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Fq.prototype.removeParams=function(a){return a.split("?")[0]};
Fq.prototype.removeParams=Fq.prototype.removeParams;Fq.prototype.isEndpointCFR=Fq.prototype.isEndpointCFR;Fq.prototype.requestComplete=Fq.prototype.requestComplete;Fq.getInstance=Gq;var Hq;function Iq(){Hq||(Hq=new hn("yt.offline"));return Hq}
function Jq(a){if(T("offline_error_handling")){var b=Iq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Iq().set("errors",b,2592E3,!0)}}
;function Kq(){Jd.call(this);var a=this;this.j=!1;this.i=Ai();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Iq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;el(d)}Iq().set("errors",{},2592E3,!0)}}})}
w(Kq,Jd);function Lq(){if(!Kq.h){var a=E("yt.networkStatusManager.instance")||new Kq;D("yt.networkStatusManager.instance",a);Kq.h=a}return Kq.h}
m=Kq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ke=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=yi(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Gq().requestComplete("generate_204",b)});
return a};
Kq.prototype.sendNetworkCheckRequest=Kq.prototype.mc;Kq.prototype.listen=Kq.prototype.listen;Kq.prototype.enableErrorFlushing=Kq.prototype.Zd;Kq.prototype.getWindowStatus=Kq.prototype.ke;Kq.prototype.networkStatusHint=Kq.prototype.gb;Kq.prototype.isNetworkAvailable=Kq.prototype.wa;Kq.getInstance=Lq;function Mq(a){a=void 0===a?{}:a;Jd.call(this);var b=this;this.i=this.m=0;this.j=Lq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Nq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Nq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Kd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Kd(b,"publicytnetworkstatus-offline")})))}
w(Mq,Jd);Mq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Mq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Mq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Gq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Nq(a,b){a.rateLimit?a.i?(Bi.pa(a.m),a.m=Bi.oa(function(){a.l!==b&&(Kd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(Kd(a,b),a.l=b,a.i=W()):Kd(a,b)}
;var Oq;function Pq(){var a=bq.call;Oq||(Oq=new Mq({gg:!0,Zf:!0}));a.call(bq,this,{da:{Ud:uq,nb:tq,jd:qq,xe:rq,Pc:sq,set:oq},aa:Oq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;fl(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else el(b)},
pb:fl,sendFn:Qq,now:W,Md:Jq,Da:gn(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:U("potential_esf_error_limit",10),U:T,Fb:!(ym()&&Rq())});this.j=new mi;T("networkless_immediately_drop_all_requests")&&vq();Qo("LogsDatabaseV2")}
w(Pq,bq);function Sq(){var a=E("yt.networklessRequestController.instance");a||(a=new Pq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Fo().then(function(b){a.T=b;dq(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.T&&Aq(a.T);T("networkless_immediately_drop_sw_health_store")&&Tq(a)}));
return a}
Pq.prototype.writeThenSend=function(a,b){b||(b={});b=Uq(a,b);ym()||(this.h=!1);bq.prototype.writeThenSend.call(this,a,b)};
Pq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Uq(a,b);ym()||(this.h=!1);bq.prototype.sendThenWrite.call(this,a,b,c)};
Pq.prototype.sendAndWrite=function(a,b){b||(b={});b=Uq(a,b);ym()||(this.h=!1);bq.prototype.sendAndWrite.call(this,a,b)};
Pq.prototype.awaitInitialization=function(){return this.j.promise};
function Tq(a){var b;A(function(c){if(!a.T)throw b=Jn("clearSWHealthLogsDb"),b;return c.return(Bq(a.T).catch(function(d){a.handleError(d)}))})}
function Qq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Vq(a,b);if(T("use_request_time_ms_header"))b.headers&&pl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Cl(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Cl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=Ac(Bc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(Jc),r=Ic(a,0,"ri",p);if(0>r)var t=null;else{var y=a.indexOf("&",r);if(0>y||y>p)y=p;t=decodeURIComponent(a.slice(r+3,-1!==y?y:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(J){}x=!1}c=x?!0:!1}else c=
!1;c||Eq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Rp(a,b.postBody,b,Gl,d)):Rp(a,JSON.stringify(b.postParams),b,Fl,d):Gl(a,b)}
function Uq(a,b){T("use_event_time_ms_header")&&pl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Vq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gq().requestComplete(a,!0);d(e,f)}}
function Rq(){return"www.youtube-nocookie.com"!==Cc(document.location.toString())}
;var Wq=!1,Xq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Wq};D("ytNetworklessLoggingInitializationOptions",Xq);function Yq(){var a;A(function(b){if(1==b.h)return b.yield(Fo(),2);a=b.i;if(!a||!ym()&&!T("nwl_init_require_datasync_id_killswitch")||!Rq())return b.B(0);Wq=!0;Xq.isNwlInitialized=Wq;return b.yield(Sq().awaitInitialization(),0)})}
;function Zq(a){var b=this;this.config_=null;a?this.config_=a:gp()&&(this.config_=hp());Bm(function(){$p(b)},5E3)}
Zq.prototype.isReady=function(){!this.config_&&gp()&&(this.config_=hp());return!!this.config_};
function aq(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Yp(b,c,l,k)),z)){var x=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(N,da){Zp(z);x(N,da)};
c.onFetchSuccess=function(N,da){Zp(z);J(N,da)}}try{if(y&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Sq().writeThenSend(t,g):Sq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Rp(t,R,g,Gl,G)}else Rp(t,JSON.stringify(g.postParams),g,Fl,G)}else T("web_all_payloads_via_jspb")?Gl(t,g):Fl(t,g)}catch(N){if("InvalidAccessError"===N.name)z&&(Zp(z),z=0),fl(Error("An extension is blocking network request."));else throw N;}z&&Bm(function(){$p(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&fl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);el(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=jp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.se&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=ol(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Xq.isNwlInitialized:Wq)?Do().then(function(y){e(y)}):e(!1)}
;var $q=0,ar=bd?"webkit":ad?"moz":Zc?"ms":Yc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++$q});var br={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function cr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in br||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function dr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
cr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
cr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
cr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Ob);var er=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",er);
function fr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function gr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=fr(a,b,c,d);if(e)return e;e=++er.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new cr(h);if(!Ud(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new cr(h);
h.currentTarget=a;return c.call(a,h)};
g=dl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ob[e]=[a,b,c,g,d];return e}
function ir(a){a&&("string"==typeof a&&(a=[a]),Fb(a,function(b){if(b in Ob){var c=Ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ob[b]}}))}
var hr=Pd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function jr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.V=gr(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=dl(a));this.ba=window.setInterval(a,25)}
$a(jr,H);jr.prototype.Y=function(a){void 0===a.h&&dr(a);var b=a.h;void 0===a.i&&dr(a);this.h=new Qd(b,a.i)};
jr.prototype.R=function(){if(this.h){var a=W();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
jr.prototype.S=function(){window.clearInterval(this.ba);ir(this.V)};var kr={};
function lr(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&mr();gr(document,"keydown",mr);gr(document,"keyup",mr);gr(document,"mousedown",mr);gr(document,"mouseup",mr);a?gr(window,"touchmove",function(){nr("touchmove",200)},{passive:!0}):(gr(window,"resize",function(){nr("resize",200)}),b&&gr(window,"scroll",function(){nr("scroll",200)}));
new jr(function(){nr("mouse",100)});
gr(document,"touchstart",mr,{passive:!0});gr(document,"touchend",mr,{passive:!0})}}
function nr(a,b){kr[a]||(kr[a]=!0,Bi.oa(function(){mr();kr[a]=!1},b))}
function mr(){null==E("_lact",window)&&lr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function or(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var pr=C.ytPubsubPubsubInstance||new L,qr=C.ytPubsubPubsubSubscribedKeys||{},rr=C.ytPubsubPubsubTopicToKeys||{},sr=C.ytPubsubPubsubIsSynchronous||{};function tr(a,b){var c=ur();if(c&&b){var d=c.subscribe(a,function(){function e(){qr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{sr[a]?e():vl(e,0)}catch(g){el(g)}},void 0);
qr[d]=!0;rr[a]||(rr[a]=[]);rr[a].push(d);return d}return 0}
function vr(a){var b=ur();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Fb(a,function(c){b.unsubscribeByKey(c);delete qr[c]}))}
function zr(a,b){var c=ur();c&&c.publish.apply(c,arguments)}
function Ar(a){var b=ur();if(b)if(b.clear(a),a)Br(a);else for(var c in rr)Br(c)}
function ur(){return C.ytPubsubPubsubInstance}
function Br(a){rr[a]&&(a=rr[a],Fb(a,function(b){qr[b]&&delete qr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",pr);D("ytPubsubPubsubTopicToKeys",rr);D("ytPubsubPubsubIsSynchronous",sr);D("ytPubsubPubsubSubscribedKeys",qr);var Cr=Symbol("injectionDeps");function Dr(a){this.name=a}
Dr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Er(a){this.key=a}
function Fr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Gr(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.mg(a.resolve(b.lc))}
Fr.prototype.resolve=function(a){return a instanceof Er?Hr(this,a.key,[],!0):Hr(this,a,[])};
function Hr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.nf)e=d[Cr]?Ir(a,d[Cr],c):[],e=d.nf.apply(d,ma(e));else if(d.Id){e=d.Id;var f=e[Cr]?Ir(a,e[Cr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.pg||a.h.set(b,e);return e}
function Ir(a,b,c){return b?b.map(function(d){return d instanceof Er?Hr(a,d.key,c,!0):Hr(a,d,c)}):[]}
;var Jr;function Kr(){Jr||(Jr=new Fr);return Jr}
;var Lr=window;function Mr(){var a,b;return"h5vcc"in Lr&&(null==(a=Lr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Lr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Lr&&Lr.performance.mark&&Lr.performance.measure?2:0}
function Nr(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Lr.performance.mark(a+"-start");break;case 0:break;default:lc()}}
function Or(a){switch(Mr()){case 1:Lr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Lr.performance.mark(c);Lr.performance.measure(a,b,c);break;case 0:break;default:lc()}}
;var Pr=T("web_enable_lifecycle_monitoring")&&0!==Mr(),Qr=T("web_enable_lifecycle_monitoring");function Rr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?gn():d;this.j=c;this.scheduler=d;this.i=new mi;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Sr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.pa(c.jobId),a.scheduler.ab(c.Ec,10))}
Rr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.pa(b.jobId),b.kc=!0;this.i.resolve()};
Rr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Tr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Pr&&Nr(this.state)}
m=Tr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Pr&&Or(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Sr(this.j),this.j=void 0);Ur(this,a,b);this.state=a;Pr&&Nr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Vr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Vr(a,b){var c=b.filter(function(e){return 10===Wr(a,e)}),d=b.filter(function(e){return 10!==Wr(a,e)});
return a.A.og?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Oe.apply(a,[c].concat(ma(e))),2);a.Dd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Pe.apply(a,[c].concat(ma(e)));a.Dd.apply(a,[d].concat(ma(e)))}}
m.Pe=function(a){for(var b=B.apply(1,arguments),c=gn(),d=v(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Bb(function(g){return function(){Xr(g.Hb.name);g.Hb.callback.apply(g.Hb,ma(b));Yr(g.Hb.name)}}(f))};
m.Oe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=gn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Xr(k.tb.name);var l=k.tb.callback.apply(k.tb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Yr(k.tb.name)}):Yr(k.tb.name)}}(f);
c.Bb(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Xr(e.name);e.callback.apply(e,ma(b));Yr(e.name)},
priority:Wr(c,e)}});
d.length&&(this.j=new Rr(d))};
function Wr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Xr(a){Pr&&a&&Nr(a)}
function Yr(a){Pr&&a&&Or(a)}
function Ur(a,b,c){Qr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Tr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Zr(a){Tr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var $r;w(Zr,Tr);Zr.prototype.i=function(a,b){var c=this;this.h=Bm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Zr.prototype.v=function(a,b){this.h&&(Bi.pa(this.h),this.h=null);a(null==b?void 0:b.event)};
function as(){$r||($r=new Zr);return $r}
;var bs=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return bs});function cs(){this.store={};this.h={}}
cs.prototype.storePayload=function(a,b){a=ds(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
cs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=es(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
cs.prototype.extractMatchingEntries=function(a){a=es(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
cs.prototype.getSequenceCount=function(a){a=es(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function es(a,b){var c=ds(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&ds(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(gs(b.auth,g[0])){var h=b.isJspb;gs(void 0===h?"undefined":h?"true":"false",g[1])&&gs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),gs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function gs(a,b){return void 0===a||"undefined"===a?!0:a===b}
cs.prototype.getSequenceCount=cs.prototype.getSequenceCount;cs.prototype.extractMatchingEntries=cs.prototype.extractMatchingEntries;cs.prototype.smartExtractMatchingEntries=cs.prototype.smartExtractMatchingEntries;cs.prototype.storePayload=cs.prototype.storePayload;function ds(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function hs(a,b){if(a)return a[b.name]}
;var is=U("initial_gel_batch_timeout",2E3),js=U("gel_queue_timeout_max_ms",6E4),ks=Math.pow(2,16)-1,ls=U("gel_min_batch_size",5),ms=void 0;function ns(){this.l=this.h=this.i=0;this.j=!1}
var ps=new ns,qs=new ns,rs=new ns,ss=new ns,ts,us=!0,vs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",vs);var ws={};function xs(){var a=E("yt.logging.ims");a||(a=new cs,D("yt.logging.ims",a));return a}
function ys(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=Bs(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=wq[d||""];var f,g,h,k=null==Kr().resolve(new Er(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=Cs(e.tier);if(400===k){Ds(a,b);return}}ws[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};xs().storePayload(e,a.payload);Es(b,c,e,"gelDebuggingEvent"===d)}}
function Es(a,b,c,d){function e(){Fs({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ms=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=Gs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=xs().getSequenceCount(c));1E3<=d?e():d>=a?ts||(ts=Hs(function(){e();ts=void 0},0)):10<=g-k&&(Is(f,c.tier),h.l=g)}
function Ds(a,b){if("log_event"===a.endpoint){zs();var c=As(a),d=new Map;d.set(c,[a.payload]);var e=Bs(a.payload)||"";b&&(ms=new b);return new ge(function(f,g){ms&&ms.isReady()?Js(d,ms,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function As(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);vs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Fs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new ge(function(e,f){var g=Gs(c,d),h=g.j;g.j=!1;Ks(g.i);Ks(g.h);g.h=0;ms&&ms.isReady()?void 0===d&&T("enable_web_tiered_gel")?Ls(e,f,a,b,c,300,h):Ls(e,f,a,b,c,d,h):(Is(c,d),e())})}
function Ls(a,b,c,d,e,f,g){var h=ms;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):xs().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(ws)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?xs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):xs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete ws[l];Js(k,h,a,b,c,!1,g)}
function Is(a,b){function c(){Fs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Gs(a,b),e=d===ss||d===rs?5E3:js;T("web_gel_timeout_cap")&&!d.h&&(e=Hs(function(){c()},e),d.h=e);
Ks(d.i);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&us&&(e=is);e=Hs(function(){0<U("gel_min_batch_size")?xs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ls&&c():c()},e);
d.i=e}
function Js(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Ub({context:ip(b.config_||hp())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=vs[n])&&
Ms(g.batchRequest,n,p);delete vs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ns(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(r){T("start_client_gcf")&&Bi.oa(function(){return A(function(t){return t.yield(Os(r),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(r){return function(){r.Kc++;if(e.bypassNetworkless&&1===r.Kc)try{aq(b,l,r.batchRequest,Ps({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Nc,r.Mc,f)),us=!1}catch(t){el(t),d()}k--;k||c()}}(g);
try{aq(b,l,g.batchRequest,Ps(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),us=!1}catch(r){el(r),d()}}}
function Ps(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Wf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Qs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Ns(a,b,c){Qs()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ks/2)),c++,c>ks&&(c=1),$k("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ms(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function zs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=xl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(bs=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",bs),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Qs(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Hs(a,b){return!1===T("embeds_transport_use_scheduler")?vl(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Bm(function(){if("none"===as().currentState)a();else{var c={};as().install((c.none={callback:a},c))}},b):Bm(a,b)}
function Ks(a){T("transport_use_scheduler")?Bi.pa(a):window.clearTimeout(a)}
function Os(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=hs(d,Fk),g=null==(f=d)?void 0:f.hotHashData,h=hs(d,Ek),l=null==(k=d)?void 0:k.coldHashData,(n=Kr().resolve(new Er(bp)))?g?e?p.yield(dp(n,g,e),2):p.yield(dp(n,g),2):p.B(2):p.return()):l?h?p.yield(ep(n,l,h),0):p.yield(ep(n,l),0):p.B(0)})}
function Gs(a,b){b=void 0===b?200:b;return a?300===b?ss:qs:300===b?rs:ps}
function Bs(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,wq[b])return b}
function Cs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Rs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Rs);
function Ss(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=or();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Rs[b]=b in Rs?Rs[b]+1:0,a.sequence={index:Rs[b],groupKey:b},d.endOfSequence&&delete Rs[d.sequenceGroup]);(d.sendIsolatedPayload?Ds:ys)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function rn(a,b,c){c=void 0===c?{}:c;var d=Zq;S("ytLoggingEventsDefaultDisabled",!1)&&Zq===Zq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=or(),c.timestamp=W());Ss(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ts=new Set,Us=0,Vs=0,Ws=0,Xs=[],Ys=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qn(a){Zs(a)}
function $s(a){Zs(a,"WARNING")}
function at(a){a instanceof Error?Zs(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",$s(a))}
function Zs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Us))){d=Xs;var k=uc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Yl(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var y="params."+r,z=$l(t[r]);c[y]=z;p+=y.length+z.length;if(500<p)break}}else c.params=$l(t)}if(d.length)for(r=0;r<d.length&&!(p=Yl(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Ul();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.hg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Pl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=v(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ic(f);break}r.params||(r.params={});a=Ul();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Ts.has(r.message)){if(g&&T("web_enable_error_204"))bt(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Vl.Ya("handleError",r),T("record_app_crashed_web")&&0===Ws&&1===r.sampleWeight&&(Ws++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),rn("appCrashed",g)),Vs++):"WARNING"===b&&Vl.Ya("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ys);for(c=a.next();!c.done;c=a.next())if(xn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!al("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(rn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&Fs(void 0,void 0,!1))}T("suppress_error_204_logging")||bt(b,r)}try{Ts.add(r.message)}catch(x){}Us++}}}
function bt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Gl(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ct(){this.register=new Map}
function dt(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.kg("ABORTED")}
ct.prototype.clear=function(){dt(this);this.register.clear()};
var et=new ct;var ft=Date.now().toString();
function gt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ft)for(a=1,b=0;b<ft.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ft.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ht,jt=C.ytLoggingDocDocumentNonce_;jt||(jt=gt(),D("ytLoggingDocDocumentNonce_",jt));ht=jt;function kt(a){this.h=a}
m=kt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Mk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&og(a,2,Rf(this.h.veType)),void 0!==this.h.veCounter&&og(a,6,Rf(this.h.veCounter)),void 0!==this.h.elementIndex&&og(a,3,Rf(this.h.elementIndex)),this.h.isCounterfactual&&og(a,5,Of(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();wg(a,Mk,7,b)}void 0!==this.h.youtubeData&&wg(a,Gk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function lt(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function mt(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},$k("client-screen-nonce-store",c));c[b]=a}
function nt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ot(a){return S(nt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",ot);function pt(){var a=S("csn-to-ctt-auth-info");a||(a={},$k("csn-to-ctt-auth-info",a));return a}
function qt(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function rt(a){a=lt(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",rt);function st(a,b,c){var d=pt();(c=rt(c))&&delete d[c];b&&(d[a]=b)}
function tt(a){return pt()[a]}
D("yt_logging_screen.getCttAuthInfo",tt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==lt(c)||b!==S(nt(c)))if(st(a,d,c),mt(a,c),$k(nt(c),b),b=function(){setTimeout(function(){a&&rn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ht,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function ut(){var a=Tb(vt),b;return(new ge(function(c,d){a.onSuccess=function(e){ul(e)?c(new wt(e)):d(new xt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new xt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new xt("Request timed out","net.timeout",e))};
b=Gl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof ne){var d;
null==(d=b)||d.abort()}return le(c)})}
function xt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(xt,bb);function wt(a){this.xhr=a}
;function zt(){this.h=0;this.i=null}
zt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:At(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Bt(a):this};
zt.prototype.getValue=function(){return this.i};
zt.prototype.isRejected=function(){return 2==this.h};
zt.prototype.$goog_Thenable=!0;function Bt(a){var b=new zt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function At(a){var b=new zt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Ct(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:pl(a)?"same-origin":"cors",credentials:pl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Dt(){return Zg()||(Oe||Pe)&&xn("applewebkit")&&!xn("version")&&(!xn("safari")||xn("gsa/"))||cd&&xn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Et(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Kk)if(Kk[d]==c.embeddedPlayerMode){b=Kk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ft(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Gt;this.isTimeout=a instanceof xt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ne}
w(Ft,bb);Ft.prototype.name="BiscottiError";function Gt(){bb.call(this,"Biscotti ID is missing from server")}
w(Gt,bb);Gt.prototype.name="BiscottiMissingError";var vt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ht=null;function It(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Dt())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==Rb(a))return Error("Biscotti ID is not available in private embed mode");if(Et(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Tk(){var a=It();if(void 0!==a)return le(a);Ht||(Ht=ut().then(Jt).oc(function(b){return Kt(2,b)}));
return Ht}
function Jt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Gt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Gt;a=a.id;Uk(a);Ht=At(a);Lt(18E5,2);return a}
function Kt(a,b){b=new Ft(b);Uk("");Ht=Bt(b);0<a&&Lt(12E4,a-1);throw b;}
function Lt(a,b){vl(function(){ut().then(Jt,function(c){return Kt(b,c)}).oc(Od)},a)}
function Mt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Tk()}catch(b){return le(b)}}
;var kc=ja(["data-"]);function Nt(a){a&&(a.dataset?a.dataset[Ot()]="true":jc(a))}
function Pt(a){return a?a.dataset?a.dataset[Ot()]:a.getAttribute("data-loaded"):null}
var Qt={};function Ot(){return Qt.loaded||(Qt.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Rt(a,b,c){H.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
w(Rt,H);Rt.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){fl(d)}}};
Rt.prototype.S=function(){window.removeEventListener("message",this.A);H.prototype.S.call(this)};function St(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Tb(b);this.assets=a.assets||{};this.attrs=a.attrs||Tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
St.prototype.clone=function(){var a=new St,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Tb(c):a[b]=c}return a};var Tt=["share/get_web_player_share_panel"],Ut=["feedback"],Vt=["notification/modify_channel_preference"],Wt=["browse/edit_playlist"],Xt=["subscription/subscribe"],Yt=["subscription/unsubscribe"];var Zt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Zt);function $t(a){Vk(Zt,arguments)}
;var au=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,bu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function cu(a,b,c){c=void 0===c?null:c;if(T("web_simple_scriptloader"))du(a,b,c);else if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(au,""),c=c.replace(bu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else du(a,b,c)}
function du(a,b,c){c=void 0===c?null:c;var d=eu(a),e=document.getElementById(d),f=e&&Pt(e),g=e&&!f;f?b&&b():(b&&(f=tr(d,b),b=""+Sa(b),fu[b]=f),g||(e=gu(a,d,function(){Pt(e)||(Nt(e),zr(d),vl(function(){Ar(d)},0))},c)))}
function gu(a,b,c,d){d=void 0===d?null:d;var e=Td("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);sc(e,Ck(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function hu(a){a=eu(a);var b=document.getElementById(a);b&&(Ar(a),b.parentNode.removeChild(b))}
function iu(a,b){a&&b&&(a=""+Sa(b),(a=fu[a])&&vr(a))}
function eu(a){var b=document.createElement("a");Ab(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+yc(a)}
var fu={};var ju=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ku(a){a=a||"";if(T("web_simple_styleloader"))lu(a);else if(window.spf){var b=a.match(ju);spf.style.load(a,b?b[1]:"",void 0)}else lu(a)}
function lu(a){var b=mu(a),c=document.getElementById(b),d=c&&Pt(c);d||c&&!d||(c=nu(a,b,function(){if(!Pt(c)){Nt(c);zr(b);var e=Ya(Ar,b);vl(e,0)}}))}
function nu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ck(a);nc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mu(a){var b=Td("A");Ab(b,new sb(a,tb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+yc(a)}
;function ou(a){var b=B.apply(1,arguments);if(!pu(a)||b.some(function(d){return!pu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())qu(a,c.value)}
function qu(a,b){for(var c in b)if(pu(b[c])){if(c in a&&!pu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qu(a[c],b[c])}else if(ru(b[c])){if(c in a&&!ru(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);su(a[c],b[c])}else a[c]=b[c];return a}
function su(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,pu(c)?a.push(qu({},c)):ru(c)?a.push(su([],c)):a.push(c);return a}
function pu(a){return"object"===typeof a&&!Array.isArray(a)}
function ru(a){return"object"===typeof a&&Array.isArray(a)}
;function tu(a){a=void 0===a?!1:a;H.call(this);this.h=new L(a);Sc(this,this.h)}
$a(tu,H);tu.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
tu.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
tu.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};var uu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function vu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Cc(window.location.href);e&&d.push(e);e=Cc(a);if(0<=Eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Ab(d,a),a=d.href)if(a=Dc(a),a=Ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:rt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&wu(a,b,f)}else wu(a,b)}
function wu(a,b,c){a=xu(a);b=b?Gc(b):"";c=c||5;Dt()&&gm(a,b,c)}
function xu(a){for(var b=v(uu),c=b.next();!c.done;c=b.next())a=Lc(a,c.value);return"ST-"+yc(a).toString(36)}
;function yu(a){mp.call(this,1,arguments);this.csn=a}
w(yu,mp);var vp=new np("screen-created",yu),zu=[],Au=0,Bu=new Map,Cu=new Map,Du=new Map;
function Eu(a,b,c,d,e){e=void 0===e?!1:e;if(!T("do_not_send_empty_attach_payloads")||d&&!(1>d.length)){for(var f=Fu({cttAuthInfo:tt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Pb(k)||!k.trackingParams&&!k.veType)&&$s(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Gu(h,b);if(k.veType&&!Cu.has(l)&&!Du.has(l)&&!e){if(!T("il_attach_cache_limit")||1E3>Bu.size){Bu.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&1E3<Bu.size&&
$s(new V("IL Attach cache exceeded limit"))}h=Gu(c,b);Bu.has(h)?Hu(c,b):Du.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Iu("visualElementAttached",f,c):a?Ss("visualElementAttached",c,a,f):rn("visualElementAttached",c,f)}}
function Iu(a,b,c){zu.push({Ge:a,payload:c,dg:void 0,options:b});Au||(Au=wp())}
function xp(a){if(zu){for(var b=v(zu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,rn(c.Ge,c.payload,c.options));zu.length=0}Au=0}
function Gu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Hu(a,b){a=Gu(a,b);Bu.has(a)&&(b=Bu.get(a)||[],Eu(b[0],b[1],b[2],[b[3]],!0),Bu.delete(a))}
function Fu(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Ju(){try{return!!self.localStorage}catch(a){return!1}}
;function Ku(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Lu(a){if(Ju()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ku(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Mu(){if(!Ju())return!1;var a=zm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Ku(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Nu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return T("copy_login_info_to_st_cookie")&&("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function Ou(a){if(S("LOGGED_IN",!0)&&Nu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=Cc(window.location.href);c&&b.push(c);c=Cc(a);0<=Eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=Dc(a),(b=Ec(b))?(b=xu(b),b=(b=hm(b)||null)?ml(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Nu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&vu(a,b)}}
;function Pu(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&vu(a,b);if(c)return!1;Ou(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=Hc(a,e);Ou(a);f=a+f;var h=void 0===h?xb:h;a:if(h=void 0===h?xb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof vb&&b.ue(f)){h=new sb(f,tb);break a}h=void 0}g=g.location;h=zb(h||ub);void 0!==h&&(g.href=h);return!0}
;function Qu(a){if("1"!=Rb(S("PLAYER_VARS",{}))){a&&Sk();try{Mt().then(function(){},function(){}),vl(Qu,18E5)}catch(b){el(b)}}}
;var Ru=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Su(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;Ac(Bc(5,a));try{var b=nl(a).theme;return Ru.get(b)||null}catch(c){}return null}
;function Tu(){this.h={};if(this.i=jm()){var a=hm("CONSISTENCY");a&&Uu(this,{encryptedTokenJarContents:a})}}
Tu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Uu(this,a)}};
function Uu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&gm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Vu=window.location.hostname.split(".").slice(-2).join(".");function Wu(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Xu(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Yu;function Zu(){Yu=E("yt.clientLocationService.instance");Yu||(Yu=new Wu,D("yt.clientLocationService.instance",Yu));return Yu}
m=Wu.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Xu(this))&&this.h.set("yt-location-playability-token",a,15552E3):gm("YT_CL",JSON.stringify({loctok:a}),15552E3,Vu,!0))};
function Xu(a){return void 0===a.h?new hn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Xu(this))&&this.h.remove("yt-location-playability-token"):im("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function $u(a,b){var c,d=null==(c=hs(a,Jk))?void 0:c.signal;if(d&&b.Ob&&(c=b.Ob[d]))return c();var e;if((c=null==(e=hs(a,Hk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
function av(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function bv(a){return function(){return new a}}
;var cv={},dv=(cv.WEB_UNPLUGGED="^unplugged/",cv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",cv.WEB_UNPLUGGED_OPS="^unplugged/",cv.WEB_UNPLUGGED_PUBLIC="^unplugged/",cv.WEB_CREATOR="^creator/",cv.WEB_KIDS="^kids/",cv.WEB_EXPERIMENTS="^experiments/",cv.WEB_MUSIC="^music/",cv.WEB_REMIX="^music/",cv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",cv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",cv);
function ev(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=dv[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(dv).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function fv(){}
fv.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?dm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;nm();var l="USER_INTERFACE_THEME_LIGHT";qm(165)?l="USER_INTERFACE_THEME_DARK":qm(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Su()||l;h.userInterfaceTheme=k;if(!f){if(k=wm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=xm())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=fp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=nl(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&em.h&&(p=em.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=fm(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=r:delete h.experimentsToken;r=yl();Tu.h||(Tu.h=new Tu);h=Tu.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=nm();t=qm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=rt())&&
(g.clientScreenNonce=f):!f&&(f=rt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Zu().setLocationOnInnerTubeContext(g);try{var y=ql(),z=y.bid;delete y.bid;g.adSignalsInfo={params:[],bid:z};var x=v(Object.entries(y));for(var J=x.next();!J.done;J=x.next()){var G=v(J.value),R=G.next().value,N=G.next().value;y=R;z=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+z})}var da;if(T("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var Ca=S("INNERTUBE_CONTEXT");Ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ca.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ca.adSignalsInfo.limitAdTracking)}}catch(ea){Zs(ea)}x=g}else Zs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),x={};x={context:x};if(J=this.i(a)){this.h(x,J,b);var O;b="/youtubei/v1/"+ev(this.j());(J=null==(O=hs(a.commandMetadata,
Ik))?void 0:O.apiUrl)&&(b=J);O=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(Dc(O)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");O=ol(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,ib:Ct(O),Ma:x,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Zs(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(fv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function gv(){}
w(gv,fv);function hv(){}
w(hv,gv);hv.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Ct("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
hv.prototype.j=function(){return[]};
hv.prototype.i=function(){};
hv.prototype.h=function(){};var iv={},jv=(iv.GET_DATASYNC_IDS=bv(hv),iv);function kv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function lv(){var a=kv();a.info||(a.info={});return a.info}
function mv(a){a=kv(a);a.metadata||(a.metadata={});return a.metadata}
function nv(a){a=kv(a);a.tick||(a.tick={});return a.tick}
function ov(a){a=kv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pv(a){a=ov(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function qv(a){var b=kv(a).nonce;b||(b=gt(),kv(a).nonce=b);return b}
;function rv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function sv(a){a=a||"";var b=E("ytcsi.reference");b||(rv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=rv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},tv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function uv(a,b){mp.call(this,1,arguments);this.timer=b}
w(uv,mp);var vv=new np("aft-recorded",uv);var wv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",wv);function xv(){this.h=0}
function yv(){xv.h||(xv.h=new xv);return xv.h}
xv.prototype.tick=function(a,b,c,d){zv(this,"tick_"+a+"_"+b)||rn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
xv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");zv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,rn("latencyActionInfo",a,{cttAuthInfo:c}))};
xv.prototype.jspbInfo=function(){};
xv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");zv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,rn("latencyActionSpan",a,{cttAuthInfo:c}))};
function zv(a,b){wv[b]=wv[b]||{count:0};var c=wv[b];c.count++;c.time=W();a.h||(a.h=Bm(function(){var d=W(),e;for(e in wv)wv[e]&&6E4<d-wv[e].time&&delete wv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||$s(c)),!0):!1}
;var Av=window;function Bv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Cv(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Dv(e.requestStart),e.responseEnd=Dv(e.responseEnd),e.redirectStart=Dv(e.redirectStart),e.redirectEnd=Dv(e.redirectEnd),e.domainLookupEnd=Dv(e.domainLookupEnd),e.connectStart=Dv(e.connectStart),e.connectEnd=
Dv(e.connectEnd),e.responseStart=Dv(e.responseStart),e.secureConnectionStart=Dv(e.secureConnectionStart),e.domainLookupStart=Dv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function Dv(a){return Math.round(Ev()+a)}
function Ev(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Av.performance||Av.mozPerformance||Av.msPerformance||Av.webkitPerformance||new Bv;var Fv=!1,Gv=!1,Hv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Od,Y);function Iv(a,b){if(!T("web_csi_action_sampling_enabled")||!kv(b).actionDisabled){var c=sv(b||"");ou(c.info,a);a.loadType&&(c=a.loadType,mv(b).loadType=c);ou(pv(b),a);c=qv(b);b=kv(b).cttAuthInfo;yv().info(a,c,b)}}
function Jv(){var a,b,c,d;return(null!=(d=null==Kr().resolve(new Er(bp))?void 0:null==(a=cp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!kv(c).actionDisabled){var d=qv(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Kr().resolve(new Er(bp))?0:cp())&&!Gv&&(Gv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Kr().resolve(new Er(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Jv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;kv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Iv(f,c));kv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=sv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=ov(c);e.gelTicks&&(e.gelTicks[a]=!0);f=nv(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=kv(c).cttAuthInfo;"_start"===a?(a=yv(),zv(a,"baseline_"+d)||rn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):yv().tick(a,d,b,f);Kv(c);return e}}}
function Lv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ar+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Mv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Nv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oc(window)&&a.setAttribute("nonce",oc(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ev(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ov(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Dv(b.startTime)),Z("wffe",Dv(b.responseEnd)))}
function Pv(a){var b=Qv("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Qv(b[d],a);if(e)return e}return NaN}
function Qv(a,b){if(a=nv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Kv(a){var b=Qv("_start",a),c=Pv(a);b&&c&&!Fv&&(sp(vv,new uv(Math.round(c-b),a)),Fv=!0)}
function Rv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Jb(a,function(b){return"first-paint"===b.name}))return Dv(a.startTime)}a=Y.timing;
return a.Ce?Math.max(0,a.Ce):0}
;function Sv(a,b){dl(function(){sv("").info.actionType=a;b&&$k("TIMING_AFT_KEYS",b);$k("TIMING_ACTION",a);var c=Mv();0<Object.keys(c).length&&Iv(c);c={isNavigation:!0,actionType:tv[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=tv[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=rt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Lv();if(1===d||-1===d)c.isVisible=!0;mv();lv();
c.loadType="cold";d=lv();var e=Cv(),f=Ev(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Rv();0<d&&Z("fpt",d);d=Cv();d.isPerformanceNavigationTiming&&Iv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Ev()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ov();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Hv)Hv.hasOwnProperty(h)&&(e=Hv[h],
Nv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Iv(c);c=ov();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=pv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===mv().loadType&&("cold"===c.loadType||"cold"===d)){d=nv();e=ov();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Qv(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,ou(c,d),ou(k,d),d=!0;d&&Iv(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Tv()&&Pv()&&Kv()})()}
function Uv(a,b,c){dl(Iv)(a,b,void 0===c?!1:c)}
function Vv(a,b,c){return dl(Z)(a,b,c)}
function Tv(){return dl(function(){return"_start"in nv()})()}
function Wv(){dl(function(){var a=qv();requestAnimationFrame(function(){setTimeout(function(){a===qv()&&Vv("ol",void 0,void 0)},0)})})()}
var Xv=window;Xv.ytcsi&&(Xv.ytcsi.infoGel=Uv,Xv.ytcsi.tick=Vv);var Yv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Zv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function $v(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},jv,a.Ob)}
function aw(a,b,c,d){if(void 0!==$v.h){if(d=$v.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else $v.h=new $v(a,b,c,d)}
function bw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?dm:c;var d=$u(b,a.v);if(!d)return le(new V("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(Ou(e.input),new ge(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.ff){var n=e.config,p;n=null==n?void 0:null==(p=n.Tb)?void 0:p.sessionIndex;p=cm(0,{sessionIndex:n});k=Object.assign({},av(h),p);return l.B(2)}return l.yield(cw(e.config,
h),3)}2!=l.h&&(k=l.i);f(dw(a,e,k));l.h=0})})):le(new V("Error: Failed to build request for command.",b))}
function ew(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(Yv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function dw(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,y,z,x,J,G,R,N,da,Ca,O,ea,ka,pa,Ga,Sg,Tg,wr,xr,yr;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Ma)?0:g.context)){ha.B(4);break}h=b.Ma.context;ha.B(5);break;case 5:k=v([]),l=k.next();case 7:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.jg(h),8);case 8:l=k.next();ha.B(7);break;case 4:if(null==(p=a.i)||!p.ng(b.input,b.Ma)){ha.B(11);break}return ha.yield(a.i.fg(b.input,
b.Ma),12);case 12:return r=ha.i,T("kevlar_process_local_innertube_responses_killswitch")||ew(a,r,b),ha.return(r);case 11:return(z=null==(y=b.config)?void 0:y.lg)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Ma),R=null!=(G=null==(J=b.ib)?void 0:J.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},R,c)}),N=Object.assign({},b.ib),"POST"===b.ib.method&&(N=Object.assign({},N,{body:x})),(null==(da=b.config)?0:da.Me)&&Vv(b.config.Me),Ca=function(){return a.aa.fetch(b.input,N,b.config)},t=
Ca(),z&&a.h.set(z,t)),ha.yield(t,13);
case 13:if((O=ha.i)&&"error"in O&&(null==(ea=O)?0:null==(ka=ea.error)?0:ka.details))for(pa=O.error.details,Ga=v(pa),Sg=Ga.next();!Sg.done;Sg=Ga.next())Tg=Sg.value,(wr=Tg["@type"])&&-1<Zv.indexOf(wr)&&(delete Tg["@type"],O=Tg);z&&a.h.has(z)&&a.h.delete(z);(null==(xr=b.config)?0:xr.Ne)&&Vv(b.config.Ne);if(O||null==(yr=a.i)||!yr.Xf(b.input,b.Ma)){ha.B(14);break}return ha.yield(a.i.eg(b.input,b.Ma),15);case 15:O=ha.i;case 14:return ew(a,O,b),d(),ha.return(O||void 0)}})}
function cw(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=cm(0,{sessionIndex:e});if(!(k instanceof ge)){var l=new ge(Od);he(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},av(b),f)))})}
;var fw=new Dr("INNERTUBE_TRANSPORT_TOKEN");function gw(){}
w(gw,gv);gw.prototype.j=function(){return Xt};
gw.prototype.i=function(a){return hs(a,Rk)||void 0};
gw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(gw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function hw(){}
w(hw,gv);hw.prototype.j=function(){return Yt};
hw.prototype.i=function(a){return hs(a,Qk)||void 0};
hw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(hw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function iw(){}
w(iw,gv);iw.prototype.j=function(){return Ut};
iw.prototype.i=function(a){return hs(a,Lk)||void 0};
iw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(iw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jw(){}
w(jw,gv);jw.prototype.j=function(){return Vt};
jw.prototype.i=function(a){return hs(a,Pk)||void 0};
jw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function kw(){}
w(kw,gv);kw.prototype.j=function(){return Wt};
kw.prototype.i=function(a){return hs(a,Ok)||void 0};
kw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function lw(){}
w(lw,gv);lw.prototype.j=function(){return Tt};
lw.prototype.i=function(a){return hs(a,Nk)};
lw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function mw(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(mw,V);var nw=new Dr("NETWORK_SLI_TOKEN");function ow(a){this.h=a}
ow.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=pw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){$s(g);
if((null==c?0:c.ce)&&g instanceof mw&&1===g.errorType)return Promise.reject(g)}))})};
function pw(a,b,c){if(a.h){var d=Ac(Bc(5,Lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Up(c));return new window.Request(b,a)}
ow.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.we)&&a.ok)return Fg(b.we,d);d=d.replace(")]}'","");if((null==b?0:b.ce)&&d)try{var e=JSON.parse(d)}catch(g){throw new mw(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.ag(),c=c.then(function(d){$s(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
ow[Cr]=[new Er(nw)];var qw=new Dr("NETWORK_MANAGER_TOKEN");var rw;function sw(){var a,b,c;return A(function(d){if(1==d.h)return a=Kr().resolve(fw),a?d.yield(bw(a),2):($s(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return $s(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Yf;return d.return(c)}$s(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var tw=C.caches,uw;function vw(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ww(){return A(function(a){if(void 0!==uw)return a.return(uw);uw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(tw.open("test-only"),4);case 4:return d.yield(tw.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(uw)})}
function xw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(ww(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(tw.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=vw(f),h=g.datasyncId,!h||a.includes(h)||b.push(tw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function yw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(ww(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=zm("cache contains other");return h.yield(tw.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=vw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function zw(){sw().then(function(a){a&&(Ho(a),xw(a),Lu(a))})}
function Aw(){var a=new Mq;Bi.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=zm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Ho(g);xw(g);Lu(g);return f.return()}c=Mu();return f.yield(yw(),3);case 3:return d=f.i,f.yield(Io(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?zw():a.h.add("publicytnetworkstatus-online",zw,!0,void 0,void 0),f.h=0}})})}
;function Bw(){this.state=1;this.h=null}
m=Bw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=fb())?d.createScript(f):f,d=new pc,d.ud=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Bk(a.interpreterSafeUrl).toString());Cw(this,d,e,a.program,b,c)}else $s(Error("Cannot initialize botguard without program"))};
function Cw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,cu(c,function(){window[g]?Dw(a,d,g,e):(a.state=3,hu(c),$s(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Td("SCRIPT"),b instanceof pc?rc(f,b):f.textContent=b,f.nonce=oc(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Dw(a,d,g,e):(a.state=4,$s(new V("Unable to load Botguard from JS")))):$s(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Dw(a,b,c,d){a.state=5;try{var e=new ni({program:b,le:c,Ke:T("att_web_record_metrics"),Be:"aGIf"});e.bf.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&$s(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Qc=function(a){Qc(this.h);this.h=a};var Ew=[],Fw=!1;function Gw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Dt()){var a=S("PLAYER_VARS",{});if("1"!=Rb(a)&&!Et(a)){var b=function(){Fw=!0;"google_ad_status"in window?$k("DCLKSTAT",1):$k("DCLKSTAT",2)};
try{cu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ew.push(Bi.oa(function(){if(!(Fw||"google_ad_status"in window)){try{iu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Fw=!0;$k("DCLKSTAT",3)}},5E3))}}}
function Hw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Iw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Jw(){Bw.apply(this,arguments)}
w(Jw,Bw);Jw.prototype.Qc=function(a){var b;null==(b=Iw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Jw.prototype.Tc=function(){return!!Iw()};
Jw.prototype.Kd=function(a){return Iw().bgvmc(a)};function Kw(a){Tr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Kw,Tr);Kw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Kw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Kw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Kw.prototype.i=function(){this.h=new Map};function Lw(a){Tr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Lw,Tr);Lw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Lw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Lw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
Lw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Mw(){this.l=new Kw;this.v=new Lw}
Mw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function Nw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Nw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=rt(void 0===c?0:c)){a=this.client;d=new kt({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Gu(d,c);Cu.set(f,!0);Hu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Fu({cttAuthInfo:tt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Iu("visualElementGestured",f,d):a?Ss("visualElementGestured",d,a,f):rn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Nw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new kt({trackingParams:a}),b,void 0===c?0:c)};
Nw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=rt(d);a||(a=(a=ot(void 0===d?0:d))?new kt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Fu({cttAuthInfo:tt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Iu("visualElementStateChanged",d,b):a?Ss("visualElementStateChanged",b,a,d):rn("visualElementStateChanged",b,d))}};
function Ow(a,b){if(void 0===b)for(var c=qt(),d=0;d<c.length;d++)void 0!==c[d]&&Ow(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Eu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Pw(){Mw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Pw,Mw);Pw.prototype.j=function(){rn("finalPayload",{csn:rt()})};
Pw.prototype.h=function(){dt(et)};
Pw.prototype.i=function(){var a=Ow;Nw.h||(Nw.h=new Nw);a(Nw.h)};function Qw(){}
function Rw(){var a=E("ytglobal.storage_");a||(a=new Qw,D("ytglobal.storage_",a));return a}
Qw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Sw()):d.return()})};
function Sw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Qw);function pn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
pn.prototype.Jb=function(a){this.handleError(a)};
pn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Tw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Tw(a,b){Rw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Uw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Uw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Uw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Vw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Rt(!!S("WIDGET_ID_ENFORCE")),b=this.Je.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Vw.prototype;m.Je=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ge=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");Fb(this.i,this.Bd,this);this.i=[]};
m.Ac=function(){return null};
function Ww(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Xw={},Yw=(Xw["api.invalidparam"]=2,Xw.auth=150,Xw["drm.auth"]=150,Xw["heartbeat.net"]=150,Xw["heartbeat.servererror"]=150,Xw["heartbeat.stop"]=150,Xw["html5.unsupportedads"]=5,Xw["fmt.noneavailable"]=5,Xw["fmt.decode"]=5,Xw["fmt.unplayable"]=5,Xw["html5.missingapi"]=5,Xw["html5.unsupportedlive"]=5,Xw["drm.unavailable"]=5,Xw["mrm.blocked"]=151,Xw);var Zw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function $w(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ax(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Zw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function bx(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function cx(a){Vw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.We.bind(this));this.addEventListener("onVolumeChange",this.Xe.bind(this));this.addEventListener("onApiChange",this.Re.bind(this));this.addEventListener("onPlaybackQualityChange",this.Te.bind(this));this.addEventListener("onPlaybackRateChange",this.Ue.bind(this));this.addEventListener("onStateChange",this.Ve.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ye.bind(this))}
w(cx,Vw);m=cx.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&$w(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=ax(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=ax(e);break;case "loadPlaylist":case "cuePlaylist":e=bx(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);$w(a)&&Ww(this,this.Ac())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Vw.prototype.Dc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Vw.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ge.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Yw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();Kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ve=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ww(this,a)};
m.Te=function(a){Ww(this,{playbackQuality:a})};
m.Ue=function(a){Ww(this,{playbackRate:a})};
m.Re=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Xe=function(){Ww(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.We=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ww(this,a)};
m.Ye=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ww(this,a)};
m.dispose=function(){Vw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function dx(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(dx,H);m=dx.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=ex(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=fx(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Se.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Se=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function gx(a,b){dx.call(this,b);this.api=a;this.start()}
w(gx,dx);gx.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
gx.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function ex(a,b){switch(a){case "loadVideoById":return a=ax(b),[a];case "cueVideoById":return a=ax(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=bx(b),[a];case "cuePlaylist":return a=bx(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function fx(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
gx.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return dx.prototype.zc.call(this,a,b)};
gx.prototype.S=function(){dx.prototype.S.call(this);delete this.api};function hx(a,b,c){tu.call(this);this.j=a;this.i=b;this.id=c}
w(hx,tu);hx.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
hx.prototype.S=function(){this.i=this.j=null;tu.prototype.S.call(this)};function ix(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=gr(window,"message",this.j.bind(this));this.connection=new hx(this,a,b);Sc(this,this.connection)}
w(ix,H);ix.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
ix.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
ix.prototype.S=function(){ir(this.i);this.h=null;H.prototype.S.call(this)};var jx=new Jw;function kx(){return jx.Tc()}
function lx(a){a=void 0===a?{}:a;return jx.invoke(a)}
;function mx(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.qc=e;this.Pa=!1;this.api={};this.ga=this.m=null;this.V=new L;this.h={};this.ba=this.ta=this.elementId=this.Za=this.config=null;this.Y=!1;this.j=this.D=null;this.Ba={};this.sc=["onReady"];this.lastError=null;this.Qb=NaN;this.R={};this.ea=0;this.i=this.l=a;Sc(this,this.V);nx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ox(this),px(this))}
w(mx,H);m=mx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof St||(b=new St(b));this.config=b;this.setConfig(a);px(this);this.isReady()&&qx(this)}};
function ox(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=rx(a);ox(this);if(!this.ta){var b;this.ta=sx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=vi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=vi(Number(a)||a))};
function qx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function tx(a){var b=!0,c=ux(a);c&&a.config&&(b=c.dataset.version===vx(a));return b&&!!E("yt.player.Application.create")}
function px(a){if(!a.Z()&&!a.Y){var b=tx(a);if(b&&"html5"===(ux(a)?"html5":null))a.ba="html5",a.isReady()||wx(a);else if(xx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),wx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=yx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?rx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.qc);wx(a)};
a.Y=!0;b?a.D():(cu(vx(a),a.D),(b=zx(a))&&ku(b),Ax(a)&&!c&&D("yt.player.Application.create",null))}}}
function ux(a){var b=Sd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function wx(a){if(!a.Z()){var b=ux(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!yx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Bx(a)}else a.Qb=setTimeout(function(){wx(a)},50)}}
function Bx(a){nx(a);a.Pa=!0;var b=ux(a);if(b){a.m=Cx(a,b,"addEventListener");a.ga=Cx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Cx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);qx(a);a.ta&&a.ta(a.api);a.V.Ya("onReady",a.api)}
function Cx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function nx(a){a.Pa=!1;if(a.ga)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ga(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.m=null;a.ga=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=sx(this,b);d&&(0<=Eb(this.sc,a)||this.h[a]||(b=Dx(this,a),this.m&&this.m(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=sx(this,b))&&this.V.unsubscribe(a,b)};
function sx(a,b){var c=b;if("string"===typeof b){if(a.Ba[b])return a.Ba[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ba[b]=c}return c?c:null}
function Dx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.V.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.R;var g=String(e);g in f&&delete f[g]}},0);
Qb(a.R,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(ux(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function xx(a){a.cancel();nx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=ux(a);b&&(tx(a)||!Ax(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&iu(vx(this),this.D);clearTimeout(this.Qb);this.Y=!1};
m.S=function(){xx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ba=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;H.prototype.S.call(this)};
function Ax(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function vx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function zx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function yx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function rx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Tb(e):e}return b}
;var Ex={},Fx="player_uid_"+(1E9*Math.random()>>>0);function Gx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Sd(c):c;var e=Fx+"_"+Sa(c),f=Ex[e];if(f&&d)return Hx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new mx(c,e,a,b,void 0);Ex[e]=f;f.addOnDisposeCallback(function(){delete Ex[f.getId()]});
return f.api}
function Hx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ix=null,Jx=null,Kx=null;
function Lx(){Wv();var a=nm(),b=qm(119),c=1<window.devicePixelRatio;if(document.body&&Li(document.body,"exp-invert-logo"))if(c&&!Li(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Li(d,"inverted-hdpi")){var e=Ji(d);Ki(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Li(document.body,"inverted-hdpi")&&Mi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=rm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete km[b]:(c=d.toString(16),km[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in km)km.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(km[f])));var f=d.join("&");gm(b,f,63072E3,a.i,c)}}
function Mx(){Nx()}
function Ox(){Vv("ep_init_pr");Nx()}
function Nx(){var a=Ix.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Px(){Ix&&Ix.sendAbandonmentPing&&Ix.sendAbandonmentPing();S("PL_ATT")&&jx.dispose();for(var a=Bi,b=0,c=Ew.length;b<c;b++)a.pa(Ew[b]);Ew.length=0;hu("//static.doubleclick.net/instream/ad_status.js");Fw=!1;$k("DCLKSTAT",0);Rc(Kx,Jx);Ix&&(Ix.removeEventListener("onVideoDataChange",Mx),Ix.destroy())}
;D("yt.setConfig",$k);D("yt.config.set",$k);D("yt.setMsg",$t);D("yt.msgs.set",$t);D("yt.logging.errors.log",Zs);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Qu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Sv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=nl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Sv("watch",["pbs","pbu","pbp"]);Ix=Gx(a,c);Ix.addEventListener("onVideoDataChange",Mx);Ix.addEventListener("onReady",Ox);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Kx=new cx(Ix):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Jx=new ix(window.parent,a,b),Kx=new gx(Ix,Jx.connection));Gw();T("ytidb_create_logger_embed_killswitch")||on();a={};Pw.h||(Pw.h=new Pw);
Pw.h.install((a.flush_logs={callback:function(){Fs()}},a));
Yq();T("ytidb_clear_embedded_player")&&Bi.oa(function(){var f,g;if(!rw){var h=Kr();Gr(h,{lc:qw,Id:ow});var k={cd:{feedbackEndpoint:bv(iw),modifyChannelNotificationPreferenceEndpoint:bv(jw),playlistEditEndpoint:bv(kw),subscribeEndpoint:bv(gw),unsubscribeEndpoint:bv(hw),webPlayerShareEntityServiceEndpoint:bv(lw)}},l=Zu(),n={};l&&(n.client_location=l);void 0===f&&(f=bm());void 0===g&&(g=h.resolve(qw));aw(k,g,f,n);Gr(h,{lc:fw,Jd:$v.h});rw=h.resolve(fw)}Aw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||kx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||lx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Hw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Pu);D("yt.util.activity.init",E("yt.util.activity.init")||lr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||or);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||mr);window.addEventListener("load",dl(function(){Lx()}));
window.addEventListener("pageshow",dl(function(a){a.persisted||Lx()}));
window.addEventListener("pagehide",dl(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Px():a.persisted||Px()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=al("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Zs(e):$s(e))};
we=at;window.addEventListener("unhandledrejection",function(a){at(a.reason)});
Fb(S("ERRORS")||[],function(a){Zs.apply(null,a)});
$k("ERRORS",[]);T("embeds_web_enable_scheduler_to_player_binary")&&en();}).call(this);
