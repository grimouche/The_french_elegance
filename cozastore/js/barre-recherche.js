(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={kc:!0},ha={};try{ha.__proto__=fa;ea=ha.kc;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function ja(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function p(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
function na(){na=function(){};
la.Symbol||(la.Symbol=oa)}
var oa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function pa(){na();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
pa=function(){}}
function qa(a){pa();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
p("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
p("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ma(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&g<e;)if(b[g++]!=a[k++])return!1;return k>=f}});
function r(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)r(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||ra});
p("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=b[f];if(g===a||Object.is(g,a))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ma(this,a,"includes").indexOf(a,c||0)}});
p("WeakMap",function(a){function b(a){this.f=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){r(a,f)||ka(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(l){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!r(a,f))throw Error("WeakMap key fail: "+a);a[f][this.f]=b;return this};
b.prototype.get=function(a){return r(a,f)?a[f][this.f]:void 0};
b.prototype.has=function(a){return r(a,f)&&r(a[f],this.f)};
b.prototype["delete"]=function(a){return r(a,f)&&r(a[f],this.f)?delete a[f][this.f]:!1};
return b});
p("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.f;return qa(function(){if(c){for(;c.head!=a.f;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&r(a.l,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,S:k}}return{id:c,list:d,index:-1,S:void 0}}
function e(a){this.l={};this.f=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(q){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.S?c.S.value=b:(c.S={next:this.f,previous:this.f.previous,head:this.f,key:a,value:b},c.list.push(c.S),this.f.previous.next=c.S,this.f.previous=c.S,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.S&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.S.previous.next=a.S.next,a.S.next.previous=a.S.previous,a.S.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).S};
e.prototype.get=function(a){return(a=d(this,a).S)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
p("Set",function(a){function b(a){this.f=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(a){a=0===a?0:a;this.f.set(a,a);this.size=this.f.size;return this};
b.prototype["delete"]=function(a){a=this.f["delete"](a);this.size=this.f.size;return a};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(a){return this.f.has(a)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.f.forEach(function(d){return a.call(b,d,d,c)})};
return b});
var t=this;function u(a){return void 0!==a}
function v(a){return"string"==typeof a}
function sa(a){return"number"==typeof a}
function w(a,b){for(var c=a.split("."),d=b||t,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function va(a){return"array"==ua(a)}
function wa(a){var b=ua(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function xa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ya(a,b,c){return a.call.apply(a.bind,arguments)}
function za(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=ya:x=za;return x.apply(null,arguments)}
function Aa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&u(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ce=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var B=window;var Ba=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(v(a))return v(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=v(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var n=g[k];
b.call(c,n,k,a)&&(e[f++]=n)}return e},Da=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ea(a,b){var c=Ba(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(wa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ha=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ia(a){return decodeURIComponent(a.replace(/\+/g," "))}
var Ja=/&/g,Ka=/</g,La=/>/g,Ma=/"/g,Oa=/'/g,Pa=/\x00/g,Qa=/[\x00&<>"']/;function Ra(){return-1!=Sa.toLowerCase().indexOf("webkit")}
function Ta(a,b){for(var c=0,d=Ha(String(a)).split("."),e=Ha(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",n=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==k[0].length&&0==n[0].length)break;c=Ua(0==k[1].length?0:parseInt(k[1],10),0==n[1].length?0:parseInt(n[1],10))||Ua(0==k[2].length,0==n[2].length)||Ua(k[2],n[2]);k=k[3];n=n[3]}while(0==c)}return c}
function Ua(a,b){return a<b?-1:a>b?1:0}
;var Sa;a:{var Va=t.navigator;if(Va){var Wa=Va.userAgent;if(Wa){Sa=Wa;break a}}Sa=""}function D(a){return-1!=Sa.indexOf(a)}
function Xa(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Za(a,b){return null!==a&&b in a}
function $a(a){for(var b in a)return!1;return!0}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function cb(){return D("Opera")}
function db(){return D("Trident")||D("MSIE")}
function eb(){return D("Safari")&&!(fb()||D("Coast")||cb()||D("Edge")||D("Firefox")||D("FxiOS")||D("Silk")||D("Android"))}
function fb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function gb(){function a(a){a:{var b=d;for(var e=a.length,k=v(a)?a.split(""):a,n=0;n<e;n++)if(n in k&&b.call(void 0,k[n],n,a)){b=n;break a}b=-1}return c[0>b?null:v(a)?a.charAt(b):a[b]]||""}
var b=Sa;if(db())return hb(b);b=Xa(b);var c={};C(b,function(a){c[a[0]]=a[1]});
var d=Aa(Za,c);return cb()?a(["Version","Opera"]):D("Edge")?a(["Edge"]):fb()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function hb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function ib(){return D("Gecko")&&!(Ra()&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge")}
;function jb(a){jb[" "](a);return a}
jb[" "]=ta;var kb=cb(),lb=db(),mb=D("Edge"),nb=ib(),pb=Ra()&&!D("Edge");function qb(){var a=t.document;return a?a.documentMode:void 0}
var rb;a:{var sb="",tb=function(){var a=Sa;if(nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(mb)return/Edge\/([\d\.]+)/.exec(a);if(lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a);if(kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tb&&(sb=tb?tb[1]:"");if(lb){var ub=qb();if(null!=ub&&ub>parseFloat(sb)){rb=String(ub);break a}}rb=sb}var vb=rb,wb={},xb;var yb=t.document;xb=yb&&lb?qb()||("CSS1Compat"==yb.compatMode?parseInt(vb,10):5):void 0;var zb=null,Ab=null;function Bb(a){this.f=a||{cookie:""}}
h=Bb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');u(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ha(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=u(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ha(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Cb=new Bb("undefined"==typeof document?null:document);function Db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function E(){this.f="";this.l=Eb}
E.prototype.Va=!0;E.prototype.Sa=function(){return this.f};
E.prototype.zb=!0;E.prototype.Pa=function(){return 1};
function Fb(a){return a instanceof E&&a.constructor===E&&a.l===Eb?a.f:"type_error:SafeUrl"}
var Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof E)return a;a="object"==typeof a&&a.Va?a.Sa():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return Ib(a)}
var Eb={};function Ib(a){var b=new E;b.f=a;return b}
Ib("about:blank");function F(){this.f="";this.g=Jb;this.l=null}
F.prototype.zb=!0;F.prototype.Pa=function(){return this.l};
F.prototype.Va=!0;F.prototype.Sa=function(){return this.f};
function Kb(a){return a instanceof F&&a.constructor===F&&a.g===Jb?a.f:"type_error:SafeHtml"}
var Jb={};function Lb(a,b){var c=new F;c.f=a;c.l=b;return c}
Lb("<!DOCTYPE html>",0);Lb("",0);Lb("<br>",0);var Mb=Db(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});
function Nb(a,b){var c=b instanceof E?b:Hb(b);a.href=Fb(c)}
;function Ob(a,b){this.width=a;this.height=b}
h=Ob.prototype;h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Pb(){return!(D("iPad")||D("Android")&&!D("Mobile")||D("Silk"))&&(D("iPod")||D("iPhone")||D("Android")||D("IEMobile"))}
;function Qb(a){var b=Rb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Sb(){var a=[];Qb(function(b){a.push(b)});
return a}
var Rb={Pd:"allow-forms",Qd:"allow-modals",Rd:"allow-orientation-lock",Sd:"allow-pointer-lock",Td:"allow-popups",Ud:"allow-popups-to-escape-sandbox",Vd:"allow-presentation",Wd:"allow-same-origin",Xd:"allow-scripts",Yd:"allow-top-navigation",Zd:"allow-top-navigation-by-user-activation"},Tb=Db(function(){return Sb()});
function Ub(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(Tb(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function Vb(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Wb=(new Date).getTime();function Xb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Yb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;l=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var n=1518500249}else m=d^f^k,n=1859775393;else 60>c?(m=d&f|k&(d|f),n=2400959708):(m=d^f^k,n=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+n+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,l+=64;for(;d<c;)if(f[m++]=a[d++],l++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,l+=64}
function d(){var a=[],d=8*l;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var n=24;0<=n;n-=8)a[d++]=e[g]>>n&255;return a}
for(var e=[],f=[],g=[],k=[128],n=1;64>n;++n)k[n]=0;var m,l;a();return{reset:a,update:c,digest:d,oc:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Zb(a,b,c){var d=[],e=[];if(1==(va(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),$b(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=$b(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $b(a){var b=Yb();b.update(a);return b.oc().toLowerCase()}
;function ac(a){var b=Xb(String(t.location.href)),c=t.__OVERRIDE_SID;null==c&&(c=(new Bb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?t.__SAPISID:t.__APISID,null==b&&(b=(new Bb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(t.location.href);return d&&b&&c?[c,Zb(Xb(d),b,a||null)].join(" "):null}return null}
;function bc(a,b){this.g=a;this.i=b;this.l=0;this.f=null}
bc.prototype.get=function(){if(0<this.l){this.l--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};function cc(a){t.setTimeout(function(){throw a;},0)}
var dc;
function ec(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!db()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(u(c.next)){c=c.next;var a=c.jb;c.jb=null;a()}};
return function(a){d.next={jb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){t.setTimeout(a,0)}}
;function fc(){this.l=this.f=null}
var hc=new bc(function(){return new gc},function(a){a.reset()});
fc.prototype.add=function(a,b){var c=hc.get();c.set(a,b);this.l?this.l.next=c:this.f=c;this.l=c};
fc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.l=null),a.next=null);return a};
function gc(){this.next=this.scope=this.f=null}
gc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
gc.prototype.reset=function(){this.next=this.scope=this.f=null};function ic(a){jc||kc();lc||(jc(),lc=!0);mc.add(a,void 0)}
var jc;function kc(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);jc=function(){a.then(nc)}}else jc=function(){var a=nc;
"function"!=ua(t.setImmediate)||t.Window&&t.Window.prototype&&!D("Edge")&&t.Window.prototype.setImmediate==t.setImmediate?(dc||(dc=ec()),dc(a)):t.setImmediate(a)}}
var lc=!1,mc=new fc;function nc(){for(var a;a=mc.remove();){try{a.f.call(a.scope)}catch(c){cc(c)}var b=hc;b.i(a);100>b.l&&(b.l++,a.next=b.f,b.f=a)}lc=!1}
;function oc(){this.l=-1}
;function pc(){this.l=64;this.f=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.l;++a)this.i[a]=0;this.m=this.g=0;this.reset()}
A(pc,oc);pc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function qc(a,b,c){c||(c=0);var d=a.s;if(v(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],n=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+n+m+d[e]&4294967295;n=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+n&4294967295}
pc.prototype.update=function(a,b){if(null!=a){u(b)||(b=a.length);for(var c=b-this.l,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)qc(this,a,d),d+=this.l;if(v(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){qc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){qc(this,e);f=0;break}}this.g=f;this.m+=b}};
pc.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.l-(this.g-56));for(var c=this.l-1;56<=c;c--)this.o[c]=b&255,b/=256;qc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function rc(){this.g=this.g;this.m=this.m}
rc.prototype.g=!1;rc.prototype.dispose=function(){this.g||(this.g=!0,this.ba())};
rc.prototype.ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function sc(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function tc(a,b){if(a.classList)var c=a.classList.contains(b);else c=sc(a),c=0<=Ba(c,b);return c}
function uc(a,b){a.classList?a.classList.add(b):tc(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function vc(a,b){a.classList?a.classList.remove(b):tc(a,b)&&(a.className=Ca(sc(a),function(a){return a!=b}).join(" "))}
;var wc="StopIteration"in t?t.StopIteration:{message:"StopIteration",stack:""};function xc(){}
xc.prototype.next=function(){throw wc;};
xc.prototype.Z=function(){return this};
function yc(a){if(a instanceof xc)return a;if("function"==typeof a.Z)return a.Z(!1);if(wa(a)){var b=0,c=new xc;c.next=function(){for(;;){if(b>=a.length)throw wc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function zc(a,b){if(wa(a))try{C(a,b,void 0)}catch(c){if(c!==wc)throw c;}else{a=yc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==wc)throw c;}}}
function Ac(a){if(wa(a))return Fa(a);a=yc(a);var b=[];zc(a,function(a){b.push(a)});
return b}
;function Bc(a,b){this.g={};this.f=[];this.i=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Bc)for(c=Cc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Cc(a){Dc(a);return a.f.concat()}
h=Bc.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.l!=a.l)return!1;var c=b||Ec;Dc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ec(a,b){return a===b}
h.isEmpty=function(){return 0==this.l};
h.clear=function(){this.g={};this.i=this.l=this.f.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.l--,this.i++,this.f.length>2*this.l&&Dc(this),!0):!1};
function Dc(a){if(a.l!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.l!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.l++,this.f.push(a),this.i++);this.g[a]=b};
h.forEach=function(a,b){for(var c=Cc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.Z=function(a){Dc(this);var b=0,c=this.i,d=this,e=new xc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw wc;var e=d.f[b++];return a?e:d.g[e]};
return e};function Fc(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Gc(a){var b=a.type;switch(v(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;var Hc=!lb||9<=Number(xb),Ic;if(Ic=lb)Ic=!(Object.prototype.hasOwnProperty.call(wb,"9")?wb["9"]:wb["9"]=0<=Ta(vb,"9"));var Jc=Ic,Kc=function(){if(!t.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{t.addEventListener("test",ta,b),t.removeEventListener("test",ta,b)}catch(c){}return a}();function Lc(a,b){this.type=a;this.f=this.target=b;this.l=!1;this.Rb=!0}
Lc.prototype.stopPropagation=function(){this.l=!0};
Lc.prototype.preventDefault=function(){this.Rb=!1};function Mc(a,b){Lc.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(Mc,Lc);var Nc={2:"touch",3:"pen",4:"mouse"};
Mc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(nb){a:{try{jb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=v(a.pointerType)?a.pointerType:Nc[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Mc.prototype.stopPropagation=function(){Mc.Y.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Mc.prototype.preventDefault=function(){Mc.Y.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Oc="closure_listenable_"+(1E6*Math.random()|0),Pc=0;function Qc(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.xa=e;this.key=++Pc;this.fa=this.sa=!1}
function Rc(a){a.fa=!0;a.listener=null;a.f=null;a.src=null;a.xa=null}
;function Sc(a){this.src=a;this.listeners={};this.f=0}
Sc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Tc(a,b,d,e);-1<g?(b=a[g],c||(b.sa=!1)):(b=new Qc(b,this.src,f,!!d,e),b.sa=c,a.push(b));return b};
Sc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Tc(e,b,c,d);return-1<b?(Rc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Uc(a,b){var c=b.type;c in a.listeners&&Ea(a.listeners[c],b)&&(Rc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Tc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.fa&&f.listener==b&&f.capture==!!c&&f.xa==d)return e}return-1}
;var Vc="closure_lm_"+(1E6*Math.random()|0),Wc={},Xc=0;function Yc(a,b,c,d,e){if(d&&d.once)Zc(a,b,c,d,e);else if(va(b))for(var f=0;f<b.length;f++)Yc(a,b[f],c,d,e);else c=$c(c),a&&a[Oc]?a.f.add(String(b),c,!1,xa(d)?!!d.capture:!!d,e):ad(a,b,c,!1,d,e)}
function ad(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=xa(e)?!!e.capture:!!e,k=bd(a);k||(a[Vc]=k=new Sc(a));c=k.add(b,c,d,g,f);if(!c.f){d=cd();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Kc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(dd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Xc++}}
function cd(){var a=ed,b=Hc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Zc(a,b,c,d,e){if(va(b))for(var f=0;f<b.length;f++)Zc(a,b[f],c,d,e);else c=$c(c),a&&a[Oc]?a.f.add(String(b),c,!0,xa(d)?!!d.capture:!!d,e):ad(a,b,c,!0,d,e)}
function fd(a,b,c,d,e){if(va(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else(d=xa(d)?!!d.capture:!!d,c=$c(c),a&&a[Oc])?a.f.remove(String(b),c,d,e):a&&(a=bd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Tc(b,c,d,e)),(c=-1<a?b[a]:null)&&gd(c))}
function gd(a){if(!sa(a)&&a&&!a.fa){var b=a.src;if(b&&b[Oc])Uc(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(dd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Xc--;(c=bd(b))?(Uc(c,a),0==c.f&&(c.src=null,b[Vc]=null)):Rc(a)}}}
function dd(a){return a in Wc?Wc[a]:Wc[a]="on"+a}
function hd(a,b,c,d){var e=!0;if(a=bd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.fa&&(f=id(f,d),e=e&&!1!==f)}return e}
function id(a,b){var c=a.listener,d=a.xa||a.src;a.sa&&gd(a);return c.call(d,b)}
function ed(a,b){if(a.fa)return!0;if(!Hc){var c=b||w("window.event"),d=new Mc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.l&&0<=g;g--){d.f=c[g];var k=hd(c[g],f,!0,d);e=e&&k}for(g=0;!d.l&&g<c.length;g++)d.f=c[g],k=hd(c[g],f,!1,d),e=e&&k}return e}return id(a,new Mc(b,this))}
function bd(a){a=a[Vc];return a instanceof Sc?a:null}
var jd="__closure_events_fn_"+(1E9*Math.random()>>>0);function $c(a){if("function"==ua(a))return a;a[jd]||(a[jd]=function(b){return a.handleEvent(b)});
return a[jd]}
;function G(){rc.call(this);this.f=new Sc(this);this.w=this;this.o=null}
A(G,rc);G.prototype[Oc]=!0;G.prototype.addEventListener=function(a,b,c,d){Yc(this,a,b,c,d)};
G.prototype.removeEventListener=function(a,b,c,d){fd(this,a,b,c,d)};
G.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.w;d=a.type||a;if(v(a))a=new Lc(a,b);else if(a instanceof Lc)a.target=a.target||b;else{var e=a;a=new Lc(d,b);bb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var g=a.f=c[f];e=kd(g,d,!0,a)&&e}a.l||(g=a.f=b,e=kd(g,d,!0,a)&&e,a.l||(e=kd(g,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)g=a.f=c[f],e=kd(g,d,!1,a)&&e;return e};
G.prototype.ba=function(){G.Y.ba.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Rc(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function kd(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.fa&&g.capture==c){var k=g.listener,n=g.xa||g.src;g.sa&&Uc(a.f,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.Rb}
;function ld(a){var b=[];md(new nd,a,b);return b.join("")}
function nd(){}
function md(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(va(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),od(d,c),c.push(":"),md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":od(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function od(a,b){b.push('"',a.replace(qd,function(a){var b=pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),pd[a]=b);return b}),'"')}
;function H(a){rc.call(this);this.s=1;this.i=[];this.o=0;this.f=[];this.l={};this.u=!!a}
A(H,rc);h=H.prototype;h.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
h.gb=function(a){var b=this.f[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.f[a+1]=ta):(c&&Ea(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.vd=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];rd(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.gb(c)}}return 0!=e}return!1};
function rd(a,b,c){ic(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.l[a];b&&(C(b,this.gb,this),delete this.l[a])}else this.f.length=0,this.l={}};
h.ba=function(){H.Y.ba.call(this);this.clear();this.i.length=0};function sd(a){this.f=a}
sd.prototype.set=function(a,b){u(b)?this.f.set(a,ld(b)):this.f.remove(a)};
sd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
sd.prototype.remove=function(a){this.f.remove(a)};function td(a){this.f=a}
A(td,sd);function ud(a){this.data=a}
function vd(a){return!u(a)||a instanceof ud?a:new ud(a)}
td.prototype.set=function(a,b){td.Y.set.call(this,a,vd(b))};
td.prototype.l=function(a){a=td.Y.get.call(this,a);if(!u(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
td.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!u(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function wd(a){this.f=a}
A(wd,td);wd.prototype.set=function(a,b,c){if(b=vd(b)){if(c){if(c<y()){wd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}wd.Y.set.call(this,a,b)};
wd.prototype.l=function(a){var b=wd.Y.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<y()||c&&c>y())wd.prototype.remove.call(this,a);else return b}};function xd(){}
;function yd(){}
A(yd,xd);yd.prototype.clear=function(){var a=Ac(this.Z(!0)),b=this;C(a,function(a){b.remove(a)})};function zd(a){this.f=a}
A(zd,yd);h=zd.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.Z=function(a){var b=0,c=this.f,d=new xc;d.next=function(){if(b>=c.length)throw wc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Ad(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(Ad,zd);function Bd(a,b){this.l=a;this.f=null;if(lb&&!(9<=Number(xb))){Cd||(Cd=new Bc);this.f=Cd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Cd.set(a,this.f));try{this.f.load(this.l)}catch(c){this.f=null}}}
A(Bd,yd);var Dd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cd=null;function Ed(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Dd[a]})}
h=Bd.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(Ed(a),b);Fd(this)};
h.get=function(a){a=this.f.getAttribute(Ed(a));if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(Ed(a));Fd(this)};
h.Z=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new xc;d.next=function(){if(b>=c.length)throw wc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Fd(this)};
function Fd(a){try{a.f.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Gd(a,b){this.l=a;this.f=b+"::"}
A(Gd,yd);Gd.prototype.set=function(a,b){this.l.set(this.f+a,b)};
Gd.prototype.get=function(a){return this.l.get(this.f+a)};
Gd.prototype.remove=function(a){this.l.remove(this.f+a)};
Gd.prototype.Z=function(a){var b=this.l.Z(!0),c=this,d=new xc;d.next=function(){for(var d=b.next();d.substr(0,c.f.length)!=c.f;)d=b.next();return a?d.substr(c.f.length):c.l.get(d)};
return d};function Hd(a,b){G.call(this);this.i=a||1;this.l=b||t;this.s=x(this.Md,this);this.u=y()}
A(Hd,G);h=Hd.prototype;h.enabled=!1;h.V=null;h.setInterval=function(a){this.i=a;this.V&&this.enabled?(this.stop(),this.start()):this.V&&this.stop()};
h.Md=function(){if(this.enabled){var a=y()-this.u;0<a&&a<.8*this.i?this.V=this.l.setTimeout(this.s,this.i-a):(this.V&&(this.l.clearTimeout(this.V),this.V=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.V||(this.V=this.l.setTimeout(this.s,this.i),this.u=y())};
h.stop=function(){this.enabled=!1;this.V&&(this.l.clearTimeout(this.V),this.V=null)};
h.ba=function(){Hd.Y.ba.call(this);this.stop();delete this.l};var Id=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(Id)[a]||null}
function Jd(a,b,c){if(va(b))for(var d=0;d<b.length;d++)Jd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Kd(a){var b=[],c;for(c in a)Jd(c,a[c],b);return b.join("&")}
function Ld(a,b){var c=Kd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Md=/^[6-9]$/,Nd=/<\/?(?:b|em)>/gi;function Od(a){this.f=a}
var Pd=new Od({});function Qd(a,b,c,d,e,f){var g;a instanceof F?g=a:g=Lb(a,null);this.u=g;this.f=b;this.l=c;this.o=d;this.g=e;this.m=f||Pd;this.i=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.i=!0}}
Qd.prototype.getHtml=function(){return Kb(this.u)};
Qd.prototype.s=function(){return this.l};
Qd.prototype.N=function(){return this.o};var Rd=/^\s/,Sd=/\s+/,Td=/\s+/g,Ud=/^\s+|\s+$/g,Vd=/^\s+$/,Wd=/<[^>]*>/g,Xd=/&nbsp;/g,Yd=/&#x3000;/g,Zd=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],$d=document.getElementsByTagName("head")[0],ae=0,be=1;function ce(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function de(a,b){function c(){return b}
void 0===b&&(b=a);return{wa:c,ub:function(){return a},
Dc:c,pe:function(){return a<b},
equals:function(c){return c&&a==c.ub()&&b==c.Dc()}}}
function K(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function ee(a,b){var c=[],d;for(d in a)K(d,a[d],c,b);return c.join("&")}
function fe(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function ge(a){return!!a&&!Vd.test(a)}
function he(a){for(var b=Zd.length,c=0;c<b;c+=2)a=a.replace(Zd[c],Zd[c+1].source);return a}
function ie(a){for(var b=Zd.length,c=0;c<b;c+=2)a=a.replace(Zd[c+1],Zd[c].source);a=a.replace(Xd," ");return a.replace(Yd,"\u3000")}
function je(a,b){return a&&(-1<a.indexOf(" ")||Sd.test(a))?(a=a.replace(Td," "),a.replace(b?Ud:Rd,"")):a}
function ke(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function le(){}
function me(a){var b=ne;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function oe(){return 0}
function pe(a){var b={},c;for(c in a)b[c]=a[c];return b}
function qe(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Ba(b,173)?14:1));return c}
;function re(a,b,c){this.f=a;this.F=b;this.A=c||"";this.s=(ae++).toString(36);this.w=this.f.toLowerCase();this.l=je(this.w);this.D={};this.u={};this.m=this.C=this.i=!1;this.B=1}
re.prototype.getId=function(){return this.s};
function se(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function te(a,b,c,d){a.i||(a.D[b]=c,d&&(a.u[b]=c))}
;function ue(a,b,c,d,e,f){this.l=a;this.f=b;this.g=c;this.m=d;this.i=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].N()&&(this.i=this.o=!1):this.f=[];this.g||(this.g=Pd)}
ue.prototype.N=function(){return this.o};function ve(){}
ve.prototype.search=function(){};
ve.prototype.redirect=function(){};
ve.prototype.Ub=function(){return""};
ve.prototype.Bb=function(){};function we(){this.l={};this.f={}}
we.prototype.set=function(a,b){this.l[a]=b};
we.prototype.has=function(a){return!!this.l[a]};
function L(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function xe(a,b,c,d,e,f){this.u=a;this.w=b;this.A=c;this.m=d;this.g=e;this.o=f;this.s={};this.i={};this.f=[];this.l=!1;a=this.w;d=a.l;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.i[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.i[b]=e}this.f.sort(ye);for(g=0;a=this.f[g++];)a.T(this.A,this.m);this.u.Bb(this.m);this.m.mc();for(g=0;a=this.f[g++];)a.G(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.da(this.o);
for(g=0;a=this.f[g++];)a.H(this.o);this.l=!0}
var ne=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function ze(a){if(a.l){for(var b=0,c;c=a.f[b++];)c.X();a.l=!1}}
xe.prototype.isActive=function(){return this.l};
xe.prototype.get=function(a){return this.s[a]};
function M(a,b){return a.i[b]||[]}
function ye(a,b){var c=me(a.N()),d=me(b.N());return 0>c?1:0>d?-1:c-d}
;function N(a){this.l=a}
h=N.prototype;h.T=function(){};
h.G=function(){};
h.setup=function(){};
h.da=function(){};
h.H=function(){};
h.N=function(){return this.l};
h.X=function(){};var Ae;function Be(){this.l=153}
ja(Be,N);function Ce(a,b){a.length&&b.push({N:function(){return 507},
position:2})}
;function De(a){this.o=a}
De.prototype.N=function(){return this.o};
De.prototype.isSelectable=function(){return!0};function O(a){this.l=152;this.m=a}
A(O,N);O.prototype.Ba=le;var Ee=db(),Fe=Ee&&0<=Ta(gb(),10),Ge=ib();Ge&&gb();var He=cb(),Ie=Ra()&&!D("Edge"),Je=eb(),Ke=fb(),Le=Pb()&&eb(),Me=D("Android"),Ne=D("Macintosh"),Oe=Pb();var Pe=void 0!=document.documentElement.style.opacity,Qe={rtl:"right",ltr:"left"};function Re(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Se(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Fa:b,aa:c}}
function Te(a){try{return Ue(a).activeElement==a}catch(b){}return!1}
function P(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function Q(a){return P("div",a)}
function Ve(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Qe[b])}
function We(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Xe(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return We(a)}
function Ye(a){var b=P("a");b.href="#ifl";b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Ze(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{fc:c,xb:b}}
function Ue(a){return a?a.ownerDocument||a.document:window.document}
function R(a){return a?(a=Ue(a),a.defaultView||a.parentWindow):window}
function $e(){return Pe?"opacity":"filter"}
function af(a){return Pe?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function bf(){this.o=507;cf(this)}
ja(bf,De);bf.prototype.f=function(){return this.g};
function df(a,b,c,d){cf(a,c,d);a.l.innerHTML=b}
function cf(a,b,c){a.g=Q("sbfl_a");a.l=Q("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.l)}
;var ef=[30,35,33,41],ff=[39,10,21];function gf(a,b){O.call(this,507);this.f=a;this.g=b}
ja(gf,O);gf.prototype.G=function(a){this.i=a.get(128)};
gf.prototype.T=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
gf.prototype.ta=function(){return new bf};
function hf(a){return a.map(function(a){return{label:a.f}})}
gf.prototype.Ca=function(a,b){var c=Ca(this.i.g,function(a){a:if(0<=ef.indexOf(a.N()))a=!1;else{a=a.g||[];for(var b=ba(ff),c=b.next();!c.done;c=b.next())if(0<=a.indexOf(c.value)){a=!1;break a}a=!0}return a},this);
0<c.length?(df(b,this.f,hf(c),this.g),b.f().style.display=""):b.f().style.display="none"};function jf(){this.l=157}
A(jf,N);function kf(){this.l=156}
A(kf,N);kf.prototype.g=function(a){var b=fe(Ia(window.location.href));b.v&&te(a,"video_id",b.v,!0);return 1};
kf.prototype.f=function(){return 24};function lf(a,b){this.l=598;this.w=b;this.i="";this.f=a;this.o=!1}
A(lf,N);lf.prototype.G=function(a){this.C=a.get(553);this.s=a.get(128);this.B=a.get(118);this.A=a.get(150)};
lf.prototype.setup=function(a){this.g=a.bb;this.u=a.mb};
function mf(a,b){a.i=b;a.C.eb(a.i)}
;function nf(){this.l=156}
A(nf,N);nf.prototype.G=function(a){this.i=a.get(598)};
nf.prototype.g=function(a){var b=this.i,c;a:{if(b.f&&b.f.getPreviousQuery&&(c=b.f.getPreviousQuery()))break a;c=null}var d;d=(d=fe(Ia(window.location.href)))?(d=d.search_query||d.q)&&d==b.g:!1;c&&c!=b.g?(b.o=!0,b.g=c,mf(b,c)):d||""==b.i?d&&""==b.i&&mf(b,b.g):mf(b,"");if("mousedown"==a.A||"focus"==a.A)if(a=this.i,a.w&&!a.s.isVisible()&&(b=a.B.f)&&0!=b.length&&b==a.g)if(a.f&&a.f.getRefinementsTuple&&(c=a.f.getRefinementsTuple())&&(d=c[0],"ClearBySearchbox"==d?a.m=[]:"FromSearchResponse"==d&&a.o&&(a.m=
c[1],a.o=!1)),a.m){c=[];for(var e=d=0;e<a.m.length&&!(c.length>=a.u);++e){var f=a.m[e];f&&0<f.length&&c.push(new Qd(a.A.bold(b,f),f,d++,0,[71],null))}0<c.length&&of(a.s,c,!1)}return 1};
nf.prototype.f=function(){return 46};function pf(){this.l=149;this.g=$d;this.f={}}
A(pf,N);h=pf.prototype;h.G=function(a){this.C=a.get(127);this.u=a.g.getId()};
h.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
h.H=function(a){this.m=a;0==a.connectionType&&(a=this.C.i,this.s=a.protocol,this.o=a.host,this.B=a.cb,this.w=a.Id,this.A="https:"==document.location.protocol,qf(this,x(this.Bd,this)),(new Image).src=this.s+this.o+"/generate_204")};
h.X=function(){qf(this,null);rf(this)};
h.Ad=le;function rf(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.i=null}
h.Bd=function(a){this.i&&this.i(a)};
function qf(a,b){b||(b=le);var c=window.google;a.m.ec?c.ac.h=b:c.sbox["p"+a.u]=b}
;function sf(){this.l=115;this.m={}}
A(sf,N);var tf={horizontalAlignment:"left",kd:!0,ea:null,marginWidth:0};h=sf.prototype;h.G=function(a){this.i=a.get(116);if(a=M(a,154))for(var b=0,c;c=a[b++];)this.m[uf]=c};
h.H=function(){this.f=!1};
h.X=function(){this.hide()};
h.isVisible=function(){return this.f};
h.getHeight=function(){return this.f?this.i.getHeight():0};
h.show=function(){this.f||(this.i.show(vf(this)),this.f=!0)};
h.hide=function(){this.f&&(this.i.hide(),this.f=!1)};
function vf(a){var b=pe(tf);if(a.g){a=a.g.g;b.ea=a.A;b.marginWidth=a.F;var c=a.w.Kd;c||(c="rtl"==a.A?"right":"left");b.horizontalAlignment=c}return b}
;function wf(){this.l=118}
A(wf,N);h=wf.prototype;h.G=function(a){this.g=a.get(119);this.A=a.get(130);this.M=a.get(145);this.s=a.get(117);this.J=a.get(123);this.B=a.get(374);this.I=a.get(121);this.O=a.get(553);this.i=a.get(128);this.K=a.get(139);this.R=a.get(173);this.U=M(a,160)};
h.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
h.H=function(a){this.o=a;this.w=this.D=!1;xf(this)};
function yf(a){var b={};S(a.s,11,b);!b.cancel&&a.o.Wc&&zf(a.s,function(){a.i.dismiss()})}
function Af(a,b){if(0==a.o.Ea||2==a.o.Ea||3==a.o.Ea&&!a.m&&!b)return!1;a:{if(T(a.i)){if(null!=a.i.i)var c=Bf(a.i);else c=a.i,c=T(c)?c.g[0]:null;if(c.i)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,ke(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Cf(a,c,de(c.length),"",!0),Df(a,c,!0),d=!0):d=!1}return d?(a.B.add(8),!0):!1}
function Cf(a,b,c,d,e){a.o.sc&&!a.i.isVisible()&&"mousedown"==d&&Ef(a.i,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)ke(d,"key")?a.B.add(1):"paste"==d&&a.B.add(2),f=!0,Ff(a,b),S(a.s,1,{qa:d,ea:a.u}),g=y(),a.C||(a.C=g),a.F=g,ge(b)&&(e=!0),g=!0;b=Gf(a.O,b,c,d);switch(b.B){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.m&&!f.s&&(f.s=window.setTimeout(x(f.clear,f),f.w.Xc))),a.D&&te(b,"gs_is",1),Hf(a.J,b)):g&&(a.i.clear(),f=a.J,f.m=f.i);S(a.s,2,{qa:d})}
function If(a,b){Ff(a,b);Jf(a.g);S(a.s,4,{ea:a.u,input:b})}
function Kf(a){a.f!=a.m&&Ff(a,a.m);S(a.s,5,{input:a.m,suggestions:a.i.g,ea:a.u});Jf(a.g)}
h.getHeight=function(){return this.g.getHeight()};
function Lf(a){if(a.R){if(a.o.Ua)return!0;for(var b=0,c;c=a.U[b++];)if(c.isEnabled())return!0}return!1}
h.search=function(a){this.I.search(this.f,a)};
h.clear=function(){this.f&&(Ff(this,""),this.g.clear(),S(this.s,1),S(this.s,16),this.i.clear())};
function Mf(a,b){var c=a.g.s.wa();a.u==b?T(a.i)&&c==a.f.length&&(null!=a.i.i?a.o.va&&a.I.search(Bf(a.i).f,6):a.o.Ab&&Af(a,!0)):a.A&&0==c&&a.A.f()}
function Df(a,b,c){a.f=b||"";xf(a);Jf(a.g);c||S(a.s,4,{ea:a.u,input:a.f})}
function xf(a){var b=Nf(a.M,a.f);if(b!=a.u){var c=a.g;c.A&&(c.A.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.D){var d=c.D;d.s!=b&&(d.f.dir=d.s=b)}if(c.ga){c=c.f;d=0;var e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function Ff(a,b){a.f=a.m=b||"";xf(a)}
;function Of(){this.l=128}
A(Of,N);h=Of.prototype;h.G=function(a){this.o=a.get(129);this.J=a.get(145);this.D=a.get(115);this.K=a.get(123);this.u=a.get(118);this.L=a.get(147);this.I=M(a,153);this.O=a.get(553);this.C=a.get(184);this.R=a.get(157)};
h.setup=function(){this.I.sort(oe)};
h.H=function(a){this.w=a;this.i=this.f=null;this.m=this.B=!1;this.M=!0;this.A="";this.F=0};
h.X=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function of(a,b,c){var d=a.C&&a.C.g(b);a.clear();a.g=b;var e=T(a)?b[0].f:a.u.m;a:{var f=e;if(a.J.f){for(var g=!1,k=!1,n=0,m;n<f.length;++n)if(m=f.charAt(n),!Pf.test(m)&&(Qf.test(m)?k=!0:g=!0,k&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.A=Nf(a.J,e);if(a.w.ud&&T(a)&&c&&!Oe){a.B=!0;c=a.o;if(c.m){c.B=a.A;Rf(c);e=!1;for(f=0;g=b[f++];)Sf(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=ie(e);b=a.L;f=0;e&&(b.f||Tf(b),Uf(b),e in b.i?f=b.i[e]:(f=b.f,g=he(e),f.innerHTML!=g&&(f.innerHTML=g),b.i[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.F=f}else{a.B=!1;b=a.o;if(a.B||!a.w.Ed&&!T(a))c=[];else{c=[];e=[];for(f=0;a.I[f++]&&!Ce(a.g,e););(f=e?e.length:0)&&(f-=Vf(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=Vf(e,c,1));a.w.Tc&&c.push(1);f&&(f-=Vf(e,c,2));f&&Vf(e,c,3);a.w.wb&&c.push(2);a.R&&1<c.length&&5==c[0].N()&&c.splice(1,0,3)}if(b.m){b.B=a.A;Rf(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(k=P("li"),n=k.style,n.position="relative",n.textAlign="center",n.whiteSpace=
"nowrap",k.dir=g.C,g.i=Q(),g.i.className="sbsb_g",g.f.wb&&(g.i.style.paddingBottom="1px"),Wf(g,g.f.searchText,g.i,13),g.f.Sc?Wf(g,g.f.ob,g.i,8):g.f.Uc&&Wf(g,g.f.Dd,g.i,14),k.appendChild(g.i),k.onmousedown=x(g.ab,g),k.className=g.f.Da,g.s=k),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{k=Q("sbsb_j "+g.f.Da);n=P("a");n.id="sbsb_f";Nb(n,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.Xa+"&answer=106230");var l=g.f.nd;if(!(l instanceof F)){if(l instanceof F)m=
l;else{var q="object"==typeof l;m=null;q&&l.zb&&(m=l.Pa());l=q&&l.Va?l.Sa():String(l);Qa.test(l)&&(-1!=l.indexOf("&")&&(l=l.replace(Ja,"&amp;")),-1!=l.indexOf("<")&&(l=l.replace(Ka,"&lt;")),-1!=l.indexOf(">")&&(l=l.replace(La,"&gt;")),-1!=l.indexOf('"')&&(l=l.replace(Ma,"&quot;")),-1!=l.indexOf("'")&&(l=l.replace(Oa,"&#39;")),-1!=l.indexOf("\x00")&&(l=l.replace(Pa,"&#0;")));m=Lb(l,m)}l=Kb(m).replace(/(\r\n|\r|\n)/g,"<br>");l=Lb(l,m.Pa())}m=n;l=Kb(l);if(Mb())for(;m.lastChild;)m.removeChild(m.lastChild);
m.innerHTML=l;k.appendChild(n);k.onmousedown=x(g.ab,g);g.o=k;g.m.appendChild(g.o)}else 3==g?(g=b,k=g.L.pop(),k||(k=P("li"),k.l=!0,n=P("div","sbsb_e"),k.appendChild(n)),g.g.appendChild(k)):Sf(b,g)&&(e=!0);c=e}else c=!1;a.F=0}d&&(a.i=a.C.l(),Xf(a,a.C.f()));c?a.show():a.clear()}
function Xf(a,b){if(a.f!=b){var c=a.f;a.f=b;Yf(a,c)}}
h.Sb=function(){if(T(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.i=this.f=null:null==this.f?this.f=0:++this.f;this.i=this.f;Zf(this,a,x(this.Sb,this))}else this.show()};
h.Tb=function(){if(T(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.i=this.f=null;this.i=this.f;Zf(this,a,x(this.Tb,this))}else this.show()};
h.isVisible=function(){return this.m};
h.isEnabled=function(){return this.M};
function Bf(a){return null!=a.i?a.g[a.i]:null}
function T(a){return!(!a.g||!a.g.length)}
h.show=function(){if(!this.m){a:{var a=this.D,b=uf;if(b in a.m){if(a.g){if(b==uf)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.i;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.C?a!=b.C&&b.o.replaceChild(a,b.C):b.o.appendChild(a),b.C=a)}}this.D.show();this.m=!0}};
h.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.D.hide(),this.m=!1)};
h.clear=function(){this.hide();this.g=null;this.B=!1;null!=this.f&&$f(this.o,this.f);this.i=this.f=null;this.o.clear()};
h.dismiss=function(){var a=this.K;a.m=a.i;this.hide()};
function ag(a){null!=a.f&&$f(a.o,a.f);a.i=a.f=null}
function Ef(a,b,c){if(T(a))a.show();else{var d=a.u.m;d&&(b=Gf(a.O,d,b||a.u.g.s,c),Hf(a.K,b))}}
function Vf(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.gd&&f.gd(b)&&++d:(b.push(f),++d));return d}
function Zf(a,b,c){null==a.f||a.o.isSelectable(a.f)?(Yf(a,b),null==a.f?Kf(a.u):Df(a.u,a.g[a.f].f)):($f(a.o,b),c())}
function Yf(a,b){null!=b&&$f(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var uf=be++;function bg(){this.l=154}
A(bg,N);bg.prototype.G=function(a){this.g=a.get(128);this.f=a.get(129)};function cg(){this.l=145;this.f=Qf.test("x")}
A(cg,N);var Pf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Qf=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");cg.prototype.T=function(a){this.g=a.Qa()};
function Nf(a,b){var c=a.g;a.f&&(Qf.test(b)?c="ltr":Pf.test(b)||(c="rtl"));return c}
;function dg(){this.l=117;this.g=[];this.i={gc:1}}
A(dg,N);var eg=window.postMessage&&!(Ee||Je||He);dg.prototype.X=function(){this.f=null};
function U(a,b,c,d,e,f){var g=fg(a,b);g||(g={},a.g.push({element:b,Oc:g}));var k=g[c];k||(k=g[c]=[],a=gg(a,c,b.gc?window:R(b),k),v(c)?b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a:b[c]=a);k.push({jd:!!f,Ya:!1,priority:e||0,process:d});k.sort(hg);d.zc=c}
function ig(a,b,c){if(a=fg(a,b))if(a=a[c.zc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.Ya=!0;break}}}
function jg(a,b,c){U(a,a.i,b,c,void 0,void 0)}
function S(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.qa)}
function kg(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function zf(a,b){if(eg){if(!a.f){a.f=[];var c=x(a.m,a);kg(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
dg.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function gg(a,b,c,d){return x(function(a,f){if(d.length){var e;if(!(e=a)){e={};var k=c.event;k&&(k.keyCode&&(e.keyCode=k.keyCode),e.hd=!0)}e.qa=f||b;k=e;for(var n,m,l=0,q;q=d[l++];)q.Ya?m=!0:n||(q.jd?lg(this,q,k):n=q.process(k));if(m)for(l=0;q=d[l];)q.Ya?d.splice(l,1):++l;if(e.za)return delete e.za,e.hd&&(e=c.event||e),Xe(e),e.returnValue=!1}},a)}
function fg(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.Oc;return null}
function lg(a,b,c){zf(a,function(){b.process(c)})}
function hg(a,b){return b.priority-a.priority}
;function mg(){this.l=494;this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}}
A(mg,N);mg.prototype.H=function(){this.reset()};
mg.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}};function ng(){this.l=374}
A(ng,N);ng.prototype.H=function(){this.reset()};
ng.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
ng.prototype.reset=function(){this.f={}};function og(){this.l=120;this.B=-1}
A(og,N);var pg=/\.+$/,qg=/\./g,rg=/./g,sg=ce([23]);og.prototype.G=function(a){this.D=a.get(191);this.f=a.get(123);this.m=a.get(118);this.w=a.get(374);this.g=a.get(494);this.A=a.get(126);this.o=a.get(128);this.C=M(a,311)};
og.prototype.setup=function(a){this.u=a.pd};
og.prototype.H=function(a){this.i=a;this.reset()};
function tg(a,b,c,d){var e=a.m.m;c&&(e=e.replace(rg,"#"));c=[];c[27]=64;c[0]=ug(a.i.clientName);c[28]=ug(a.i.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.w;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.i?g=a.o.i+"":10<=a.A.g.u&&(g="o");c[2]=g;g="";if(b=a.o.g){for(var k=f=0,n;n=b[k++];){n=qe(n.N(),n.g||[]);if(n!=m){1<f&&(g+="l"+f);g+=(m?"j":"")+n;f=0;var m=n}++f}1<f&&(g+="l"+f)}c[3]=g;m="";g=a.o.g;b=a.g.o;if(g)for(f=0;k=g[f++];){var l=qe(k.N(),k.g||[]);l in b&&
delete b[l]}if(b)for(l in b)m+=(m?"j":"")+l;c[35]=m;l=a.g.g;c[33]=-1<l?String(l):"";c[4]=Math.max(a.m.C-a.s,0);c[5]=Math.max(a.m.F-a.s,0);c[6]=a.B;c[7]=y()-a.s;c[18]=Math.max(a.m.L-a.s,0);c[8]=a.f.O;m=a.f;m=(l=m.g)?m.f.i:0;c[25]=l?"1"+(a.i.uc?"a":"")+(a.i.kb?"c":""):"";c[10]=m;l=a.f;c[11]=l.g?l.f.m:0;c[12]=a.f.L;g=a.f;l=g.J;m=g.Ha;g=g.K;c[9]=l;c[22]=m;c[17]=g;c[13]=a.f.M;c[14]=a.f.C;c[15]=a.f.F;l=a.f;m=[];for(b=f=0;b<=vg;++b)g=l.D[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",m.push(f+g),f=0);c[16]=m.join("j");
c[36]=a.f.I;l=0;for(var q in a.g.f)l++;c[30]=l;c[31]=a.g.s;c[32]=a.g.m;c[19]=ug(a.i.fb);q=a.g;m=a.A.f;l=!1;m&&(l=m.g.f.e||"");m=0;l?(m|=1,1<q.i&&(m|=2)):0<q.i&&(m|=2);q=m;c[20]=0==q?"":q+"";for(q=0;l=a.C[q++];)m=l.l,sg[m]&&(c[m]=void 0==c[m]?ug(l.f()):"");c=c.join(".").replace(pg,"");if(a.D&&a.u){q=e+c;b:{l=a.u;m=[];if(l)for(f=b=g=0;f<l.length;++f){k=l.charCodeAt(f);if(32>k||127<k||!wg[k-32]){l=[];break b}g<<=6;g|=wg[k-32]-1;b+=6;8<=b&&(m.push(g>>b-8&255),b-=8)}l=m}g=l;l={};l.P=Array(4);l.buffer=
Array(4);l.Od=Array(4);l.padding=Array(64);l.padding[0]=128;for(m=1;64>m;++m)l.padding[m]=0;xg(l);m=Array(64);64<g.length&&(xg(l),yg(l,g),g=zg(l));for(b=0;b<g.length;++b)m[b]=g[b]^92;for(b=g.length;64>b;++b)m[b]=92;xg(l);for(b=0;64>b;++b)l.buffer[b]=m[b]^106;Ag(l,l.buffer);l.total=64;yg(l,Bg(q));q=zg(l);xg(l);Ag(l,m);l.total=64;yg(l,q);q=zg(l);q=q.slice(0,8);v(q)&&(q=Bg(q));l="";if(q){m=q.length;for(f=b=g=0;m--;)for(b<<=8,b|=q[f++],g+=8;6<=g;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}q=l}else q="";e={oq:e,gs_l:c+"."+q};d&&(e.ei=d);a.i.ld&&(e.q=a.m.f);return e}
og.prototype.reset=function(){this.s=y();++this.B;var a=this.m;a.C=0;a.F=0;a.L=0;this.w.reset();a=this.f;if(a.g){var b=a.f;b.i=0;b.m=0}a.O=0;a.u=0;a.L=0;a.J=0;a.Ha=0;a.K=0;a.M=0;a.C=0;a.F=0;a.I=0;a.D=[];for(b=0;b<=vg;++b)a.D[b]=0;for(a=0;b=this.C[a++];)b.reset();this.g.reset()};
function ug(a){return a?a.replace(qg,"-"):""}
;function Cg(){this.l=121}
A(Cg,N);h=Cg.prototype;h.T=function(a){this.m=a.rb()};
h.G=function(a){this.g=a.get(347);this.u=a.get(130);this.C=a.get(117);this.A=a.get(123);this.o=a.get(118);this.D=a.get(120);this.F=a.get(128);this.B=a.get(139);this.w=a.u;this.s=M(a,294)};
h.H=function(a){this.i=a};
h.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(ge(a)||this.i.ca||this.u&&this.u.ca()){if(Md.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.i.Ma&&Dg(this.g,
b);this.w.search(a,b);Eg(this);S(this.C,12,{query:a})}};
h.redirect=function(a){this.g&&this.i.Ma&&Dg(this.g,void 0);this.w.redirect(a);Eg(this)};
function Eg(a){var b=a.A;b.m=b.i;a.A.s=null;a.D.reset();a.F.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.B&&a.B.clear()}
;function Fg(){this.l=553}
A(Fg,N);Fg.prototype.G=function(a){this.g=M(a,156);a.get(126)};
Fg.prototype.setup=function(){this.g.sort(Gg)};
Fg.prototype.H=function(a){this.f=a;this.i=a.bb};
Fg.prototype.eb=function(a){this.i=a};
function Gf(a,b,c,d,e){b=new re(b,c||de(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.B=c;null!=a.f.La&&te(b,"ds",a.f.La,!0);null!=a.f.Yb&&te(b,"swl",a.f.Yb,!0);te(b,"pq",a.i,!0);e&&!b.i&&(b.C=!0);b.i||(b.o=y(),"cp"in b.u||(a=b.F.wa(),te(b,"cp",a,!0)),te(b,"gs_id",b.s),b.g=ee(b.u)+":"+b.w,b.i=!0);return b}
function Gg(a,b){return a.f()-b.f()}
;function Hg(){this.l=123;this.w=!1;this.i=-1}
A(Hg,N);var Ig=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],vg=Ig[Ig.length-1]+1,Jg=100*Ig.length-1;h=Hg.prototype;h.G=function(a){this.f=a.get(133);this.ga=a.get(130);this.ka=a.get(118);this.jc=a.get(120);this.ja=a.get(494);this.ic=a.get(124);this.R=a.get(125);this.U=a.get(230);this.lc=a.get(127)};
h.H=function(a){this.ia=this.lc.f;this.ha=a;this.w=!0;this.o={};this.B=0;this.Ia=a.Bc;this.hc=a.yb;this.m=-1;this.g=this.ha.vc&&!!this.f};
h.X=function(){this.w=!1;Kg(this);this.o=this.s=null;this.m=this.i};
function Hf(a,b){if(!(!a.w||a.hc||a.ga&&a.ga.l())){var c=!0,d=se(b);d>a.i&&(a.i=d);++a.O;a.ja.f[b.getId()]=!0;ge(a.ka.f)||ge(b.f)||(d=a.ja,d.g=Math.max(d.g,0));d=y();for(var e in a.o)2500<d-a.o[e].o&&Lg(a,e);a.g&&(e=a.f.get(b))&&((c=a.Ia||b.C)&&a.ha.Zc&&(b.m=!0),a.R.process(e),e.m&&++a.L,a.s=null);c&&(a.s=b,a.A||a.Kb())}}
function Mg(a,b){x(function(a){this.Xb(a,b)},a)}
h.Kb=function(){Kg(this);var a=this.s;this.s=null;if(a){var b=[],c=a.D;if(c)for(var d in c)K(d,c[d],b);var e=b.join("&");Mg(this,a);b=x(this.Xb,this);c=this.ia;d=a.getId();var f=a.f;c.m.xc||rf(c);e=c.s+c.o+c.B+"?"+(c.w?c.w+"&":"")+(e?e+"&":"");var g=[];K("q",f,g,!0);c.m.ec||K("callback","google.sbox.p"+c.u,g);if(c.A){f="";for(var k=4+Math.floor(32*Math.random()),n=0,m;n<k;++n)m=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),f+=String.fromCharCode(m);
K("gs_gbg",f,g)}f=P("script");f.src=e+g.join("&");f.charset="utf-8";c.f[d]=f;c.i=b;c.g.appendChild(f);a.m||(++this.J,this.o[a.getId()]=a,++this.u);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.B&&(a=this.B);this.A=window.setTimeout(x(this.Kb,this),a)}};
function Kg(a){null!=a.A&&(window.clearTimeout(a.A),a.A=null)}
function Lg(a,b){var c=a.ia,d=c.f[b];d&&(c.g.removeChild(d),delete c.f[b]);delete a.o[b];a.u&&--a.u}
h.Xb=function(a,b){if(this.w){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.ic;var d=b,e=a[0],f=a[1],g={},k=a[2];if(k)for(var n in k){var m=k[n];n in c.f&&(m=c.f[n].parse(m));g[n]=m}var l=m=!1;k=!1;n=0;for(var q;q=f[n++];)if(33==(q[1]||0)?l=!0:m=!0,l&&m){k=!0;break}m=0;l=[];for(n=0;q=f[n++];){var Na=q[1]||0;if(!k||33!=Na){var ob=q[0];c.i&&(ob=c.g.bold(e.toLowerCase(),ie(ob).replace(Wd,"")));l.push(new Qd(ob,ie(ob).replace(Wd,""),m++,Na,q[2]||[],Ng(q)))}}c=new ue(d,l,new Od(g),!1,!0,
!1);this.U&&(c=this.U.f(c,this.ka.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.l.f)&&e&&e.i&&(d.g[e.l.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);se(b)<=this.m?!b||b.f||c.m||(d=b,this.I=y()-d.o):(++this.K,this.R.process(c)||++this.M,d=b,this.B=c.g.f.d||0,d&&(Lg(this,d.getId()),e=d.o,e=y()-e,d.f?(this.F+=e,this.C=Math.max(e,this.C),++this.D[e>Jg?vg:Ig[Math.floor(e/100)]]):this.I=e));c&&(c=c.g.f.q||"")&&(this.jc.u=c)}}};function Og(){this.l=124;this.f={}}
A(Og,N);Og.prototype.G=function(a){this.g=a.get(150);if(a=M(a,158))for(var b=0,c;c=a[b++];)this.f[c.me()]=c};
Og.prototype.H=function(a){this.i=a.Ta};
function Ng(a){return(a=a[3])?new Od(a):Pd}
;function Pg(){this.l=125}
A(Pg,N);Pg.prototype.G=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=M(a,122);this.g=a.get(126);this.i=a.get(128);this.f.sort(Qg)};
Pg.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=je(c);var e=b.l;b=e?e.l:je(b.l.f.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.l.f;e=d.f;this.i.isEnabled()&&of(this.i,e,0==d.N());b=this.o;var g=d.l;f=g.getId();if(f in b.f){var k=d.f.length;0<k&&(ge(g.f)||(b.g=k),g=g.o,g=y()-g,b.m+=g,++b.s);d.g.f.e&&++b.i;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[qe(g.N(),g.g||[])]=!0;S(this.m,3,{input:a,suggestions:e})}return c};
function Qg(a,b){return a.f()-b.f()}
;function Rg(){this.l=126}
A(Rg,N);Rg.prototype.G=function(a){this.g=a.get(123)};
Rg.prototype.H=function(){this.f=null};function Sg(){this.l=127;this.g={}}
A(Sg,N);Sg.prototype.G=function(a){a=M(a,149);for(var b=0,c;c=a[b++];)this.g[0]=c};
Sg.prototype.H=function(a){var b="https:"==document.location.protocol,c=[];K("client",a.clientName,c);K("hl",a.Xa,c);K("gl",a.Zb,c);K("sugexp",a.fb,c);K("gs_rn",64,c);K("gs_ri",a.requestIdentifier,c);a.authuser&&K("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.Pb||"clients1."+a.Ka,cb:a.cb||"/complete/search",Id:c.length?c.join("&"):""};this.f&&0==a.connectionType||(this.f=this.g[a.connectionType])};function Tg(){this.l=191}
A(Tg,N);
var wg=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Ug=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Vg=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Bg(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function xg(a){a.P[0]=1732584193;a.P[1]=4023233417;a.P[2]=2562383102;a.P[3]=271733878;a.ra=a.total=0}
function Ag(a,b){for(var c=a.Od,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.P[0];d=a.P[1];for(var f=a.P[2],g=a.P[3],k,n,m,l=0;64>l;++l)16>l?(k=g^d&(f^g),n=l):32>l?(k=f^g&(d^f),n=5*l+1&15):48>l?(k=d^f^g,n=3*l+5&15):(k=f^(d|~g),n=7*l&15),m=g,g=f,f=d,e=e+k+Vg[l]+c[n]&4294967295,k=Ug[l],d=d+((e<<k|e>>>32-k)&4294967295)&4294967295,e=m;a.P[0]=a.P[0]+e&4294967295;a.P[1]=a.P[1]+d&4294967295;a.P[2]=a.P[2]+f&4294967295;a.P[3]=a.P[3]+g&4294967295}
function yg(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.ra++]=b[d],64==a.ra&&(Ag(a,a.buffer),a.ra=0)}
function zg(a){var b=Array(16),c=8*a.total,d=a.ra;yg(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Ag(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.P[e]>>c&255;return b}
;function Wg(){this.l=150}
A(Wg,N);
Wg.prototype.bold=function(a,b){b=he(b.replace(Nd,""));a=he(je(a,!0));if(ke(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,k;k=b.charAt(f);++f)" "==k||"\t"==k?c.length&&(d.push({t:c,pa:g,e:f+1}),c="",g=-1):(c+=k,-1==g?g=f:f==e&&d.push({t:c,pa:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;k=-1;c=[];var n=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==k,e==n?c.push({pa:g?e:k,e:e}):g&&(k=e)):-1<k&&(c.push({pa:k,e:e-1}),k=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;k=c[f];++f)(n=d[k.pa].pa)&&(e+="<b>"+b.substring(g,n-1)+"</b> "),g=d[k.e].e,e+=b.substring(n,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function Xg(){this.l=146}
A(Xg,N);function Yg(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
Yg("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");Yg("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");Yg("D1,D4,D7,DA,DD");Yg("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");Yg("D1__,D4__,D7__,DA__,DD");Yg("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");Yg("CF,D2,D5,D8,DB");function Zg(){this.l=116;this.J=!0}
A(Zg,N);h=Zg.prototype;
h.T=function(a,b){this.M=a.Qa();b.addRule(".sbdd_a",(Oe?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Oe?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
h.G=function(a){this.K=a.get(130);a.get(115);this.s=a.get(118);this.F=a.get(117);this.R=a.g.getId()};
h.setup=function(a){this.f=a};
h.da=function(a){this.g=Q();this.g.className="gstl_"+this.R+" sbdd_a";$g(this.g,!1);this.L=this.g;this.B=Q("fl");this.g.appendChild(this.B);this.w=Q();this.g.appendChild(this.w);this.o=Q("sbdd_b");this.w.appendChild(this.o);this.U=Q();this.w.appendChild(this.U);this.f.vb&&(this.i=P("iframe","gstl_"+this.R+" sbdd_c"),$g(this.i,!1),(this.f.W||document.body).appendChild(this.i));if(this.m=this.f.tc)sa(this.m)&&(this.m+=this.f.ua[2],this.m-=ah(this)),bh(this,this.g,this.m);ch(this);(a.W||document.body).appendChild(this.g);
jg(this.F,8,x(this.Vb,this))};
h.H=function(a){this.f=a;this.g.style.position=a.la};
h.getHeight=function(){this.A||(this.A=this.o?Math.max(this.o.offsetHeight,0):0);return this.A};
h.show=function(a){dh(this,a.ea||this.M);var b=a.marginWidth;if(this.O!=b){var c=this.B.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.O=b}this.J=a.kd;this.I=a.horizontalAlignment;eh(this.s.g,!0);$g(this.L,!0);$g(this.i,!0);S(this.F,14);this.Vb()};
h.hide=function(){this.A=0;eh(this.s.g,!1);$g(this.L,!1);$g(this.i,!1);dh(this,this.M);S(this.F,9)};
h.Vb=function(){this.A=0;ch(this);if(this.i){var a=this.f.ib[0],b=this.i.style;"relative"!=this.f.la&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.B.offsetWidth+"px");a=this.getHeight()+a;this.i.style.height=Math.max(a,0)+"px";bh(this,this.i,this.o.offsetWidth)}this.u&&Rf(this.u.f)};
function ch(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.Rc||c.C==c.B?c.O:null;var d=(b=c)?b.offsetWidth:fh(a.s.g);var e=a.m;c=ah(a);e?v(e)&&(e=null):a.O||!a.J?a.w.style.display="inline-block":(a.w.style.display="",e=d+a.f.ua[2]-c,bh(a,a.g,e));if("relative"!=a.f.la){var f="rtl"==Vb()!=("rtl"==a.D),g=a.f.W;var k={aa:0,Fa:0};if(f||!g||g==document.body||a.f.pb)k=Se(a.s.g.B),b&&(k.aa=Se(b).aa);b=k;k=e;e=a.f.ua;g=e[1];e=e[0];e=b.Fa+a.s.getHeight()+e;if("right"==a.I){k="rtl"==Vb()!=("rtl"==a.D);var n=a.f.W;g=-g;if(k||
!n||n==document.body)g+=(R(a.g)||window).document.documentElement.clientWidth-d-b.aa;d=g;k=e;b=void 0}else b=b.aa+g,"center"==a.I&&k&&(b+=(d-k)/2),k=e,d=void 0;e={aa:0,Fa:0};"absolute"==a.f.la&&a.f.W&&a.f.W!=document.body&&(f||a.f.pb)&&(e=Se(a.f.W));g=a.g.style;g.top=k-e.Fa+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.aa+"px":(b=0,a.f.W&&f&&(b=document.body.clientWidth-(e.aa+a.f.W.offsetWidth)),g.right=d+c-b+"px")}}
function bh(a,b,c){sa(c)?0<c&&(a.f.Nd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function $g(a,b){a&&(a.style.display=b?"":"none")}
function dh(a,b){if(a.D!=b){a.D=b;var c=a.f.W;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Ve(a.g,b)}}
function ah(a){return a.K&&a.K.g()&&(a=a.s.g.u.offsetWidth,sa(a))?a:0}
;function gh(){this.l=119;this.K=!1;this.s=de(0);this.M=-1;this.O=!1}
A(gh,N);h=gh.prototype;
h.T=function(a,b){this.F=a;this.f=a.sb();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");if(!a.Ja()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Ne&&Ie||Ee?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Fe&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
h.G=function(a){this.g=a.get(118);this.i=a.get(117);this.ka=a.get(128);this.D=a.get(173);this.ga=!!a.get(136);this.Ia=a.g.getId()};
h.setup=function(a){this.w=a;this.I=a.na;this.J=a.fd;this.Ha=a.lb;this.m=Te(this.f);this.Ga();var b=this;Ee&&U(this.i,this.f,"beforedeactivate",function(a){b.O&&(b.O=!1,a.za=!0)},10);
a=(D("iPhone")&&!D("iPod")&&!D("iPad")||D("iPad")||D("iPod"))&&Ke;Ge&&hh(this);(Le||a)&&ih(this);this.B=this.f};
h.da=function(a){var b=!!a.yc[130];if(this.ga||Lf(this.g)||b||a.Cc)(this.o=this.F.get("gs_id"))?(b&&(this.u=this.F.get("sb_chc")),this.A=this.F.get("sb_ifc")):(this.o=Q("gstl_"+this.Ia+" sbib_a"),a=this.o.style,this.J&&(a.width=this.J+"px"),this.I&&(a.height=this.I+"px"),a=this.f.style,a.border="none",a.padding=He||Ee?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.w.Wa,b&&(this.u=Q("sbib_d"),this.u.id=this.F.getId("sb_chc"),this.o.appendChild(this.u)),Lf(this.g)&&this.D&&
(this.D.f.className+=" sbib_c",this.o.appendChild(this.D.f)),this.A=Q("sbib_b"),this.A.id=this.F.getId("sb_ifc"),this.o.appendChild(this.A),jh(this,this.o,this.A)),this.w.Gd||this.w.pc||kh(this,this.o),this.B=this.o;this.Ha&&(b=x(this.Ib,this),U(this.i,this.f,"blur",b,10),b=x(this.Qb,this),U(this.i,this.f,"focus",b,10),this.ja=!0);jg(this.i,8,x(this.Nc,this));lh(this)};
h.H=function(a){this.w=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Cb?"":"none";this.ha=this.f.value;this.ja&&this.Qb();mh(this)};
h.X=function(){this.ja&&this.Ib();nh(this)};
function jh(a,b,c){nh(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.w.wd&&(Ee||Ge?zf(a.i,function(){a.f.focus();Re(a.f,a.s.wa())}):a.f.focus());
mh(a)}
h.getHeight=function(){var a=this.B?this.B.offsetHeight:0;this.I>a&&(a=this.I);return a};
function fh(a){return a.J?a.J:a.B?a.B.offsetWidth:0}
h.select=function(){this.f.select();this.Ga()};
function Jf(a){Me&&(a.f.value="");a.f.value=a.g.f;Me&&(a.f.value=a.f.value);oh(a)}
h.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,oh(this)}catch(a){}};
h.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
h.clear=function(){this.f.value=""};
function oh(a){if(a.m){var b=a.f.value.length;a.s=de(b);Re(a.f,b)}}
function kh(a,b){U(a.i,b,"mouseup",function(){a.f.focus()})}
function lh(a){function b(b){U(a.i,a.f,b,x(a.Mb,a),10,c)}
U(a.i,a.f,"keydown",x(a.Lc,a));(He||a.w.nc)&&U(a.i,a.f,"keypress",x(a.Mc,a));U(a.i,a.f,"select",x(a.Ga,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=x(a.Ic,a);U(a.i,a.f,"compositionstart",d);U(a.i,a.f,"compositionend",d)}
h.Ic=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.w&&(a.w=!0)):"compositionend"==a&&(a=this.g,0!=a.w&&(a.w=!1))};
h.Lc=function(a){var b=a.keyCode;this.M=b;var c=(Ie||Ge)&&(38==b||40==b)&&T(this.ka),d=13==b,e=27==b;this.L=!1;9!=b||a.shiftKey||(this.L=Af(this.g));if(d){var f=this;zf(this.i,function(){f.ka.u.search(a.shiftKey?4:3)})}if(c||d||e||this.L)a.za=!0};
h.Mc=function(a){var b=a.keyCode,c=9==b&&this.L;if(13==b||27==b||c)a.za=!0};
h.Mb=function(a){if(!this.ia){var b=a.qa;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.D=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.M,this.M=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.zd?a.search(5):(a.i.isVisible()?a.i.dismiss():a.g.blur(),Kf(a));break;case 37:Mf(this.g,"rtl");break;case 39:Mf(this.g,"ltr");break;case 38:this.g.i.Tb();break;case 40:a=this.g;c=this.s;T(a.i)?
a.i.Sb():Ef(a.i,c);break;case 46:a=this.g;a.f&&this.s.ub()==a.f.length&&(a.K&&a.K.clear(),a.o.yd&&a.search(2));break;case 8:a=this.g,a.A&&0==this.s.wa()&&a.A.f()}}this.Ga();Cf(this.g,this.f.value,this.s,b)}};
h.Hc=function(){this.m=!0;S(this.g.s,10)};
h.Fc=function(){this.m=!1;yf(this.g)};
function mh(a){a.K||(a.K=!0,a.U=x(a.Hc,a),U(a.i,a.f,"focus",a.U,99),a.R=x(a.Fc,a),U(a.i,a.f,"blur",a.R,99))}
function nh(a){a.K&&(a.K=!1,ig(a.i,a.f,a.U),ig(a.i,a.f,a.R))}
h.Qb=function(){this.C||(this.C=new Hd(this.w.td||50),this.C.f.add("tick",this.sd,!1,void 0,this),this.C.start())};
h.Ib=function(){this.C&&(this.C.stop(),this.C=null)};
h.sd=function(){this.Mb({qa:"polling"})};
h.Nc=function(){if(Ge){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
h.Ga=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Ue(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=de(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function hh(a){var b;kg(window,"pagehide",function(){a.ia=!0;b=a.f.value});
kg(window,"pageshow",function(c){a.ia=!1;(c.persisted||void 0!==b)&&If(a.g,b)})}
function ih(a){kg(window,"pageshow",function(b){b.persisted&&a.ha&&If(a.g,a.ha)})}
function eh(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function ph(){this.l=129;this.F={};this.I=[];this.K=[];this.L=[];this.w=[];this.M=0}
A(ph,N);h=ph.prototype;
h.T=function(a,b){this.R=a;this.C=a.Qa();Oe||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Oe||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g","text-align:center;padding:8px 0 7px;position:relative");
b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Ie?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");Oe&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),
b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
h.G=function(a){this.A=a.get(128);this.u=a.get(118);this.D=a.get(121);a=M(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.U=b};
h.setup=function(a){this.f=a};
h.da=function(){this.m=Q();this.g=P("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
h.H=function(a){this.f=a;var b=a.Lb;b&&(this.O=this.R.qb(b));this.m.className=a.Ld||"sbsb_a";this.J=a.Jd||"sbsb_d"};
h.highlight=function(a){(a=this.w[a])&&a.isSelectable()&&uc(a.f().parentNode,this.J)};
function $f(a,b){var c=a.w[b];c&&vc(c.f().parentNode,a.J)}
h.clear=function(){for(var a,b,c;c=this.I.pop();)a=c.N(),(b=this.F[a])||(b=this.F[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.L.push(a):a!=this.s&&a!=this.o&&this.K.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.w=[]};
h.isSelectable=function(a){return(a=this.w[a])?a.isSelectable():!1};
function Sf(a,b){var c=b.N(),d=a.U[c];if(!d)return!1;c=(c=a.F[c])&&c.pop();if(!c){c=d.ta(a.D);var e=c.f();e.setAttribute("role","option");uc(e,"sbse");e.id="sbse"+a.M;a.M++}d.Ca(b,c);a.I.push(c);e=c.f();var f=qh(a);f.appendChild(e);if(void 0!==b.s){a.w.push(c);var g=a.B;var k=b.l;a.f.Yc&&(e.onmouseover=function(){Xf(a.A,k)},e.onmouseout=function(){ag(a.A)});
var n=c.f();n.onclick=function(c){a.u.g.blur();b.i&&Df(a.u,b.f);ag(a.A);var e=a.A;e.i=e.f=k;c=c||R(n).event;d.Ba(c,b,a.D)}}else g=a.C;
Ve(f,g);return!0}
function Wf(a,b,c,d){var e=P("input");e.type="button";e.value=ie(b);e.onclick=function(){a.D.search(a.u.f,d)};
if(a.f.Qc){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function qh(a){var b=a.K.pop();if(b)return a.g.appendChild(b),b;b=P("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Da;b.onmousedown=x(a.ab,a);a.g.appendChild(b);return b}
h.ab=function(a){a=a||R(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Ee&&!He&&(this.u.g.O=!0);return!1};
function Rf(a){if(a.i){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=fh(a.u.g)-b-3;0<b&&(a.i.style.width=b+"px")}}
;function rh(){this.l=147}
A(rh,N);rh.prototype.T=function(a){this.s=a.rb()||document.body};
rh.prototype.setup=function(a){this.u=a};
rh.prototype.getHeight=function(){this.f||Tf(this);Uf(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function Tf(a){var b=Q(a.u.Wa),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function Uf(a){var b=y();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=R(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.i={},a.g=null,a.o=b)}}
;function sh(){we.call(this);this.set(191,new Tg);this.set(150,new Wg);this.set(146,new Xg);this.set(147,new rh);L(this,149,new pf);this.set(145,new cg);this.set(117,new dg);this.set(494,new mg);this.set(374,new ng);this.set(120,new og);this.set(121,new Cg);this.set(553,new Fg);this.set(124,new Og);this.set(125,new Pg);this.set(123,new Hg);this.set(126,new Rg);this.set(127,new Sg);this.set(115,new sf);this.set(118,new wf);this.set(128,new Of);L(this,154,new bg);this.set(116,new Zg);this.set(119,new gh);
this.set(129,new ph)}
A(sh,we);function th(){this.l=347;this.f=[];this.g=0}
A(th,N);th.prototype.G=function(a){this.o=a.get(120)};
th.prototype.H=function(a){this.m="//"+(a.od||"www."+a.Ka)+"/gen_204?";this.i=a.Hd||{}};
function Dg(a,b){var c=tg(a.o,b,void 0,void 0),d;for(d in a.i)d in c||(c[d]=a.i[d]);c=ee(c,!0);uh(a,a.m+c)}
function uh(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function vh(){this.l=151;this.g=!0;this.f={}}
A(vh,N);h=vh.prototype;h.G=function(a){this.i=a.get(150)};
h.setup=function(){this.o=ce([0])};
h.H=function(a){this.m=a.Ta;this.g=a.kb};
h.X=function(){this.g=!1};
h.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.N()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(ke(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
h.get=function(a){if(this.g){var b=this.f[a.l];if(b){for(var c=a.w,d=a.l,e=b.g,f=this.m||!e.f.k,g=[],k,n,m=b.f,l=0,q;q=m[l++];)n=q.f,k=f?this.i.bold(c,n):he(n),g.push(new Qd(k,n,q.l,q.N(),q.g||[],q.m));delete this.f[d];return new ue(a,g,e,!0,b.i,!1)}}return null};
h.reset=function(){this.f={}};function wh(){this.l=133;this.g={};this.f=[];this.m=this.i=0}
A(wh,N);wh.prototype.G=function(a){this.f=M(a,151);this.f.sort(xh)};
wh.prototype.H=function(){this.m=this.i=0};
wh.prototype.get=function(a){var b=this.g[a.g];if(b)++this.i;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.i&&(this.g[b.l.g]=b);++this.m;break}return b?new ue(a,b.f,b.g,b.m,b.i,b.s):null};
wh.prototype.has=function(a){return!!this.g[a.g]};
function xh(){return 0}
;function yh(a){this.l=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function zh(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.l)}
function Ah(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function Bh(){this.l=570;this.m=!1}
A(Bh,N);h=Bh.prototype;h.T=function(a){this.s=a};
h.G=function(a){this.o=a.get(117);this.u=a.get(118)};
h.setup=function(a){var b=a.ma;if(this.f=b?this.s.qb(b):null)jg(this.o,10,x(this.Gc,this)),jg(this.o,11,x(this.Ec,this)),U(this.o,this.f,"mouseover",x(this.Kc,this)),U(this.o,this.f,"mouseout",x(this.Jc,this)),a.Oa&&(this.i=new yh(a.Oa)),a.Na&&(this.g=new yh(a.Na))};
h.H=function(){this.m=!0;this.f&&this.u.g.m&&this.g&&zh(this.g,this.f)};
h.X=function(){this.m=!1;this.f&&(this.i&&Ah(this.i,this.f),this.g&&Ah(this.g,this.f))};
h.Kc=function(){this.m&&this.i&&zh(this.i,this.f)};
h.Jc=function(){this.m&&this.i&&Ah(this.i,this.f)};
h.Gc=function(){this.m&&this.g&&zh(this.g,this.f)};
h.Ec=function(){this.m&&this.g&&Ah(this.g,this.f)};function Ch(a,b,c,d,e,f,g,k){this.o=35;this.M=a;this.K=b;this.J=c;this.C=d;this.w=e;this.D=g;this.L=k;this.u=!0;this.s=!1;this.l=Q("sbpqs_d");this.m=Q();this.F=P("span","sbpqs_a");this.D&&(this.i=P("a"),this.i.href="#ps",this.i.className="sbsb_i",this.A=Q("fr sbpqs_b"),this.m.appendChild(this.A),this.A.appendChild(this.i),this.g=Q("sbpqs_c"),this.g.innerHTML=this.L);this.m.appendChild(this.F);this.l.appendChild(this.m);this.g&&this.l.appendChild(this.g)}
A(Ch,De);Ch.prototype.f=function(){return this.l};
Ch.prototype.isSelectable=function(){return this.u};
Ch.prototype.I=function(a){this.s=!0;var b=x(this.R,this),c=this.K.g,d=this.O;c.g[d]=b;b=[];"1"===fe(window.location.search).ssl_dbg&&K("ssl_dbg","1",b);K("delq",d,b);K("client",c.o,b);K("callback","google.sbox.d"+c.m,b);d=c.s;K("tok",c.u,b);c.i&&K("authuser",c.i,b);c.f=P("script");c.f.src=d+b.join("&");$d.appendChild(c.f);return Xe(a)};
Ch.prototype.R=function(){if(this.s){var a=this.J;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.N()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}a=this.M;a.f&&a.f.Ad();this.l.onmouseover=this.l.onmouseout=this.l.onclick=null;this.m.style.display="none";this.g.style.display="";this.w.i==this.B&&Kf(this.C);this.w.f==this.B&&(ag(this.w),this.C.g.focus());this.u=!1}};function Dh(){O.call(this,35)}
A(Dh,O);h=Dh.prototype;h.T=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
h.G=function(a){this.g=a.get(123);this.i=a.get(118);this.o=a.get(189);this.u=a.get(127);this.A=a.get(128)};
h.setup=function(a){this.H(a)};
h.H=function(a){this.w=a.Fd;this.f=a.Ob;this.s=a.Nb};
h.ta=function(a){return new Ch(this.u,this.o,this.g,this.i,this.A,a,this.w,this.s)};
h.Ca=function(a,b){var c=a.getHtml(),d=a.f,e=a.l,f=this.f;b.s=!1;b.u=!0;b.O=d;b.B=e;b.m.style.display="";b.F.innerHTML=c;b.D&&(b.g.style.display="none",b.i.innerHTML=f,b.i.onclick=x(b.I,b))};
h.Ba=function(a,b,c){c.search(b.f,1)};function Eh(){this.l=134;this.g={}}
A(Eh,N);h=Eh.prototype;h.G=function(a){this.m=a.g.getId()};
h.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=x(this.Cd,this)};
h.H=function(a){this.s="//"+(a.Pb||"clients1."+a.Ka)+"/complete/deleteitems?";this.u=a.hb;this.i=a.authuser;this.o=a.clientName};
h.X=function(){Fh(this)};
function Fh(a){a.f&&($d.removeChild(a.f),a.f=null)}
h.Cd=function(a){Fh(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};function Gh(){this.l=189}
A(Gh,N);Gh.prototype.G=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.w=a.get(553)};
Gh.prototype.setup=function(a){this.f=a.Ac};
Gh.prototype.H=function(a){this.m=a.hb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(x(this.o,this),a),this.f=!1)};
Gh.prototype.o=function(){var a=Gf(this.w,"",void 0,void 0,!0);Hf(this.i,a);a=this.i;a.m=a.i};function Hh(){this.l=156}
A(Hh,N);Hh.prototype.G=function(a){this.i=a.get(189)};
Hh.prototype.g=function(a){var b=this.i,c={};b.u&&(c.tok=b.m);"1"===fe(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)te(a,d,c[d]);return 1};
Hh.prototype.f=function(){return 12};function Ih(){this.l=156}
A(Ih,N);Ih.prototype.g=function(a){var b=1,c=a.A;ge(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
Ih.prototype.f=function(){return 2};function Jh(){this.l=160}
A(Jh,N);h=Jh.prototype;h.T=function(a,b){this.i=a;a.Ja()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
h.G=function(a){this.w=a.get(374);this.A=a.get(128)};
h.setup=function(a){this.m=!!a.ya;this.o=a.Fb;this.u=a.Aa;this.B=a.rd;this.C=a.qd};
h.da=function(){(this.g=this.i.get("gs_ok"))?this.f=this.g.firstChild:(this.f=P("img"),this.f.src=this.o+"/tia.png",this.g=P("span","gsok_a gsst_e"),this.g.id=this.i.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=x(this.qc,this);this.f.setAttribute("tia_field_name",this.i.sb().name);this.f.setAttribute("tia_disable_swap",!0)};
h.H=function(a){a.Ua&&(this.m=!!a.ya);this.f.setAttribute("tia_property",a.Gb)};
h.isEnabled=function(){return this.m};
h.tb=function(){return{tooltip:this.C}};
h.Wb=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.B+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.w.add(3);else if(this.f.onclick)this.f.onclick(a)};
h.qc=function(){this.A.dismiss()};
var Kh=be++;function Lh(){this.l=173;this.i={}}
A(Lh,N);h=Lh.prototype;
h.T=function(a,b){this.m=a;a.Ja()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+($e()+":"+af(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",$e()+":"+af(.8)+";"),b.addRule(".gsst_a:active .gsst_e",$e()+":"+
af(1)+";"))};
h.G=function(a){this.u=a.get(118);this.g=M(a,160)};
h.setup=function(a){this.o=a.Ua;this.g.sort(Mh)};
h.da=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=Q("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.na)this.f.style.lineHeight=a+"px";Nh(this)}Oh(this)};
h.H=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.i[Kh];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);Nh(this);Oh(this);break}}};
function Mh(){return 0}
function Nh(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Ph(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function Oh(a){a.i={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=Kh,e=c.g.parentNode;e.onclick=x(c.Wb,c);a.i[d]=e;c.tb&&(c=c.tb(),c.se&&(d=a.i[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Ph(a,b,c){b.href="javascript:void(0)";He&&(b.tabIndex=0);b.onkeydown=function(b){b=b||window.event;var d=b.keyCode;if(13==d||32==d)c.Wb(b),a.u.g.focus(),Xe(b)}}
be++;function Qh(){this.o=33;this.l=Q();this.l.className="gspr_a"}
A(Qh,De);Qh.prototype.f=function(){return this.l};function Rh(){O.call(this,33)}
A(Rh,O);Rh.prototype.T=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Rh.prototype.ta=function(){return new Qh};
Rh.prototype.Ca=function(a,b){b.l.innerHTML=a.m.f.b||""};
Rh.prototype.Ba=function(a,b,c){c.search(b.f,1)};function Sh(a,b){this.o=0;this.m=a;this.w=b;this.i=Q();this.l=Q("sbqs_a");this.i.appendChild(this.l);this.u=Q("sbqs_c");this.i.appendChild(this.u)}
A(Sh,De);Sh.prototype.f=function(){return this.i};
function Th(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=Ye(a.l),a.g.onclick=x(function(a){this.m.g.blur();Df(this.m,this.s);this.w.search(this.s,9);return Xe(a)},a));
d?(a.g.innerHTML=d+" &raquo;",a.l.style.display="",a.l.setAttribute("aria-hidden","true")):a.g&&(a.l.style.display="none")}
;function Uh(){O.call(this,0)}
A(Uh,O);h=Uh.prototype;h.T=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
h.G=function(a){this.g=a.get(118)};
h.H=function(a){this.f=a.nb?a.ob:""};
h.ta=function(a){return new Sh(this.g,a)};
h.Ca=function(a,b){Th(b,a.getHtml(),a.f,this.f)};
h.Ba=function(a,b,c){c.search(b.f,1)};function Vh(a){sh.call(this);this.set(347,new th);this.set(133,new wh);L(this,151,new vh);this.set(570,new Bh);this.set(134,new Eh);this.set(189,new Gh);L(this,156,new Hh);L(this,152,new Dh);L(this,152,new Rh);L(this,152,new Uh);this.set(173,new Lh);L(this,160,new Jh);this.set(157,new jf);L(this,156,new kf);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&L(this,156,new Ih);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(L(this,153,new Be),L(this,
152,new gf(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new lf(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST)),L(this,156,new nf))}
A(Vh,sh);function Wh(){return{Ra:function(){return{clientName:"hp",requestIdentifier:"hp",Ka:"google.com",Zb:"",Xa:"en",La:"",bb:"",videoId:"",hb:"",authuser:0,pd:"",He:"",Yb:null,fb:"",xc:!1,Pb:"",cb:"",connectionType:0,Fe:null,ec:!1,ze:!1,yb:!1,vc:!0,mb:10,le:10,uc:!0,kb:!0,he:!1,Bc:!1,ld:!1,md:!1,ue:!1,Wc:!0,sc:!1,Xc:500,Ua:!1,Pc:!0,qe:!0,Be:!1,ya:!1,Aa:"",Fb:"//www.google.com/textinputassistant",Gb:"",rd:7,ne:!1,oe:!1,Tc:!1,Sc:!0,Uc:!1,wb:!1,zd:!1,yd:!1,Ea:1,Ab:!0,va:!1,nb:!1,lb:!1,td:10,Ta:!1,wd:!0,W:document.body,
Vc:!0,cc:null,yc:{},je:{},ye:0,Cc:!1,Zc:!0,ca:!1,Ac:!1,Ed:!1,Ce:null,wc:!1,od:null,Hd:null,Ma:!1,Yc:!0,nc:!1,Ee:1,Cb:!1,searchText:"Search",ob:"I'm  Feeling Lucky",Dd:"",nd:"Learn more",Ob:"Remove",Nb:"This search was removed from your Web History",hintText:"",ge:"Did you mean:",qd:"",Ae:"",Ke:"Search by voice",Je:'Listening for "Ok Google"',Ie:'Say "Ok Google"',ee:"Clear Search",na:0,fd:0,Wa:"",Da:"",isRtl:!1,la:"absolute",Qc:!1,vb:!1,Lb:null,Rc:!0,ua:[0,0,0],tc:null,Kd:null,ib:[0],Fd:!0,dc:"",Ld:"",
Jd:"",ma:null,Oa:"",Na:"",de:1,Nd:!1,pb:!1,we:0,Gd:!1,pc:!1,ie:!1,ud:!0}}}}
;function Xh(a,b,c,d,e){var f=Ge?"-moz-":Ee?"-ms-":He?"-o-":Ie?"-webkit-":"",g=".gstl_"+d,k=new RegExp("(\\.("+e.join("|")+")\\b)"),n=[];return{addRule:function(a,d){if(b){if(c){for(var e=a.split(","),f=[],l=0,m;m=e[l++];)m=k.test(m)?m.replace(k,g+"$1"):g+" "+m,f.push(m);a=f.join(",")}n.push(a,"{",d,"}")}},
mc:function(){if(b&&n.length){b=!1;var c=P("style");c.setAttribute("type","text/css");(a||$d).appendChild(c);var d=n.join("");n=null;c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d))}},
prefix:function(a,b){var c=a+(b||"");f&&(c+=b?a+f+b:f+a);return c}}}
;function Yh(a,b,c,d){this.g=a;this.I=b;this.C=c;this.D=d;this.l=-1;this.w=!1}
h=Yh.prototype;h.install=function(a){if(!this.w){a=Zh(a);0>this.l&&(this.l=$h(a));var b=Ue(this.g),c=ai(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.dc&&f.push(a.dc);f=Xh(a.cc,a.Vc,a.wc,this.l,f);this.o=a.ca;this.f=new xe(this.C,this.D,{Ja:function(){return d},
get:function(a){return b.getElementById(a+e.l)},
qb:function(a){return b.getElementById(a)},
rb:function(){return e.I},
Qa:function(){return c},
getId:function(a){return a+e.l},
sb:function(){return e.g}},f,this,a);
this.f.get(347);this.A=this.f.get(130);this.f.get(115);this.F=this.f.get(117);this.f.get(123);this.J=this.f.get(118);this.u=this.f.get(119);this.f.get(374);this.i=this.f.get(120);this.f.get(189);this.K=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.B=this.f.get(121);a=R(this.g);this.m=Ze(a);this.s=x(this.xd,this);kg(a,"resize",this.s);this.w=!0}};
h.isActive=function(){return!!this.f&&this.f.isActive()};
function bi(a,b){function c(b){a.B.search(a.J.f,12);return We(b)}
kg(b,"keyup",function(a){13!=a.keyCode&&32!=a.keyCode||c(a)});
kg(b,"click",c)}
h.focus=function(){this.u.focus()};
h.blur=function(){this.u.blur()};
h.getId=function(){return this.l};
h.search=function(a,b){this.B.search(a,b)};
h.ca=function(){return this.o||!!this.A&&this.A.ca()};
h.eb=function(a){this.K.eb(a)};
function $h(a){a=R(a.cc||$d);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function ai(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Zh(a){a=pe(a);var b=a.Aa;b?a.Aa=b.toLowerCase():a.ya=!1;a.va&&!a.nb&&(a.va=!1);Ke||(a.md=!1);return a}
h.xd=function(){var a=Ze(R(this.g));if(a.fc!=this.m.fc||a.xb!=this.m.xb)this.m=a,S(this.F,8)};function ci(){this.A=4;this.B=/\/(movie|show)s?($|[?#/])/i;this.C=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.u="sbhcn";this.s="sbfcn";this.i="gsfi";this.m="gsfs";this.w=function(){return!0}}
A(ci,ve);h=ci.prototype;h.search=function(a,b){this.w(tg(this.f.i,b,void 0))&&this.I.submit()};
h.redirect=function(a){this.D(this.Ub(a))};
h.Ub=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=tg(this.f.i,void 0,void 0))||(c=tg(this.f.i,void 0));c=ee(c);return a+b+c};
h.Bb=function(a){if(this.g||this.l)a.addRule(".sbsb_c","padding:4px 24px 4px 10px"),this.F?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0"),["material-centered","material-left"].includes(this.o)?(a.addRule(".sbdd_b","border: 0"),a.addRule(".sbdd_b","box-shadow: 0 4px 8px 0 var(--yt-material-searchbox-active-shadow), 0 0 0 1px var(--yt-material-searchbox-inset);")):a.addRule(".sbdd_b","border-top: 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b",
"padding: 0");this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),["material-centered","material-left"].includes(this.o)?(a.addRule(".sbdd_c","z-index:2030"),a.addRule(".sbdd_a","z-index:2031")):(a.addRule(".sbdd_c","z-index:2010"),a.addRule(".sbdd_a","z-index:2011")),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.i,"font-size:16px;height:100% !important"),
a.addRule(".sbib_b ."+this.i,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.l||(a.addRule(".sbsb_c,.sbsb_c td","line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a",
"padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.u,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.s,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+"outline:none;")))};
h.install=function(a,b,c,d,e,f,g){this.I=a;this.D=f;g&&(this.w=g);f=Wh().Ra();g="youtube";f.clientName=g;f.requestIdentifier=g;f.La="yt";f.Xa=d.REQUEST_LANGUAGE;f.Zb=d.REQUEST_DOMAIN;f.Pc=!1;f.Ea=0;f.Ab=!1;f.va=!1;f.Cb=!1;f.Ta=!0;f.Wa=this.i;f.Da=this.m;f.Oa=this.u;f.Na=this.s;f.te=!0;g=window.location.href;g=this.B.test(g)||this.C.test(g);f.yb=g;f.ya=d.HAS_ON_SCREEN_KEYBOARD;f.Aa=d.REQUEST_LANGUAGE;f.Fb="//www.gstatic.com/inputtools/images";f.Gb="youtube";f.Ma=!0;f.la="fixed";this.g=d.IS_POLYMER;
this.l=d.IS_FUSION;this.F=d.SEARCHBOX_REPORTING;this.o=d.SEARCHBOX_DESIGN_EXPERIMENT;d.PQ&&(f.bb=d.PQ);f.hb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Nb=e.SUGGESTION_DISMISSED_LABEL;f.Ob=e.SUGGESTION_DISMISS_LABEL;f.De=ce([0,33,35]);this.g?(f.ma="search-container",f.na=24):this.l?(f.ma="masthead-search",f.na=24):(f.ma="masthead-search-terms",f.na=30);cb()||(f.vb=!0);-1!=window.location.href.indexOf("/watch?")&&(cb()||D("Windows")&&eb())&&(g="youtube-reduced",f.clientName=g,f.requestIdentifier=
g,f.mb=this.A);f.Lb=f.ma;e=-3;D("Windows")&&db()&&"8.0"==gb()&&(e=-5);this.l?e=17:this.g&&(e=["material-centered","material-left"].includes(this.o)?6:16);f.ua=[e,0,0];e=[0];db()&&"8.0"==gb()&&(e[0]=-1);f.ib=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.lb=!0);if(e=d.SUGG_EXP_ID)f.fb=e;if(this.f){a=this.f;b=f;c=R(a.g);d=a.s;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);ze(a.f);b=Zh(b);a.o=b.ca;a=a.f;ze(a);
for(c=0;d=a.f[c++];)d.H(b);a.l=!0}else d=new Vh(d),this.f=new Yh(b,a,this,d),this.f.install(f),c&&(bi(this.f,c),c.onclick=null)};function di(){this.l=[];this.f=-1}
di.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.l[a]!=b&&(this.l[a]=b,this.f=-1)};
di.prototype.get=function(a){return!!this.l[a]};
function ei(a){-1==a.f&&(a.f=Da(a.l,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.f}
;var fi=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var gi=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",gi);function hi(a){var b=arguments;if(1<b.length)gi[b[0]]=b[1];else{b=b[0];for(var c in b)gi[c]=b[c]}}
function V(a,b){return a in gi?gi[a]:b}
function W(a){return V(a,void 0)}
;var ii={};function ji(){return ii.clicktracking||(ii.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function ki(){}
ki.prototype.f=function(a,b){return li(a,1,b)};function mi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ni(b)}}:a}
function ni(a,b){var c=w("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=V("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),hi("ERRORS",c))}
;function oi(a,b){"function"==ua(a)&&(a=mi(a));return window.setTimeout(a,b)}
;function X(){}
ja(X,ki);function li(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):oi(a,c||0)}
X.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
X.f=void 0;X.Ra=function(){return X.f?X.f:X.f=new X};
var pi=X.Ra();function Y(a){return V("EXPERIMENT_FLAGS",{})[a]}
;var qi=0;z("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++qi});z("ytEventsEventsListeners",w("ytEventsEventsListeners")||{});z("ytEventsEventsCounter",w("ytEventsEventsCounter")||{count:0});var ri=w("ytPubsubPubsubInstance")||new H;H.prototype.subscribe=H.prototype.subscribe;H.prototype.unsubscribeByKey=H.prototype.gb;H.prototype.publish=H.prototype.vd;H.prototype.clear=H.prototype.clear;z("ytPubsubPubsubInstance",ri);z("ytPubsubPubsubSubscribedKeys",w("ytPubsubPubsubSubscribedKeys")||{});z("ytPubsubPubsubTopicToKeys",w("ytPubsubPubsubTopicToKeys")||{});z("ytPubsubPubsubIsSynchronous",w("ytPubsubPubsubIsSynchronous")||{});var si=Math.pow(2,16)-1,ti=null,ui=0,vi={log_event:"events",log_interaction:"interactions"},wi=Object.create(null);wi.log_event="GENERIC_EVENT_LOGGING";wi.log_interaction="INTERACTION_LOGGING";var xi=new Set(["log_event"]),yi={},zi=0,Ai=0,Z=w("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",Z);var Bi=w("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",Bi);var Ci=w("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",Ci);z("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{});function Di(){window.clearTimeout(zi);window.clearTimeout(Ai);Ai=0;if(!$a(Z)){for(var a in Z){var b=yi[a];b&&(Ei(a,b),delete Z[a])}$a(Z)||Fi()}}
function Fi(){Y("web_gel_timeout_cap")&&!Ai&&(Ai=oi(Di,3E4));window.clearTimeout(zi);zi=oi(Di,V("LOGGING_BATCH_TIMEOUT",1E4))}
function Gi(a,b){b=void 0===b?"":b;Z[a]=Z[a]||{};Z[a][b]=Z[a][b]||[];return Z[a][b]}
function Ei(a,b){var c=vi[a],d=Ci[a]||{};Ci[a]=d;var e=Math.round(fi());for(m in Z[a]){var f=b.f;f={client:{hl:f.cd,gl:f.bd,clientName:f.ad,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));V("DELEGATED_SESSION_ID")&&!Y("pageid_as_header_web")&&(f.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});f={context:f};f[c]=Gi(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Bi[m])a:{var k=
m;if(g.videoId)var n="VIDEO";else if(g.playlistId)n="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:n}]}delete Bi[m];f.requestTimeMs=e;if(g=W("EVENT_ID"))n=(V("BATCH_CLIENT_COUNTER",void 0)||0)+1,n>si&&(n=1),hi("BATCH_CLIENT_COUNTER",n),g={serializedEventId:g,clientCounter:n},f.serializedClientEventId=g,ti&&ui&&Y("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:ti,
roundtripMs:ui}),ti=g,ui=0;Hi(b,a,f,{retry:xi.has(a),onSuccess:Ii.bind(this,fi())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function Ii(a){ui=Math.round(fi()-a)}
;function Ji(){var a=Ki,b={};b.dt=Wb;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function Li(){var a=Ki;var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var k=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var n=(c||window).document,m="CSS1Compat"==n.compatMode?n.documentElement:n.body;var l=(new Ob(m.clientWidth,m.clientHeight)).round()}catch(q){l=new Ob(-12245933,-12245933)}n=l;l={};m=new di;
t.SVGElement&&t.document.createElementNS&&m.set(0);c=Ub();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);t.crypto&&t.crypto.subtle&&m.set(3);m=ei(m);l.bc=m;l.bih=n.height;l.biw=n.width;l.brdim=b.join();a=a.l;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!B.WebGLRenderingContext,l}
var Ki=new function(){var a=window.document;this.f=window;this.l=a};y();var Mi=u(XMLHttpRequest)?function(){return new XMLHttpRequest}:u(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ni(){if(!Mi)return null;var a=Mi();return"open"in a?a:null}
;function Oi(a){var b=[];Ya(a,function(a,d){var c=encodeURIComponent(String(d)),f;va(a)?f=a:f=[a];C(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function Pi(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=Ia(e[0]||"");e=Ia(e[1]||"");f in b?va(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Qi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Pi(e[1]||"");for(var f in b)if(c||!Za(e,f))e[f]=b[f];return Ld(a,e)+d}
;var Ri={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Si="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ti=!1;
function Ui(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(Id),d=d.match(Id),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!Y("web_ajax_ignore_global_headers_if_set");for(var f in Ri)e=V(Ri[f]),!e||!c&&!Vi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Vi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();Y("pass_biscotti_id_in_header_ajax")&&(c||Vi(a,"X-YouTube-Ad-Signals"))&&
(f=void 0,f=void 0===f?w("yt.ads.biscotti.lastId_")||"":f,c=Object.assign(Ji(),Li()),c.ca_type="image",f&&(c.bid=f),b["X-YouTube-Ad-Signals"]=Oi(c));return b}
function Wi(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Pi(b),f={};C(Si,function(a){e[a]&&(f[a]=e[a])});
return Qi(a,f||{},!1)}
function Vi(a,b){var c=V("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Ba(c,b):!1:!0}
function Xi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Yi(a,b);var d=Zi(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&window.clearTimeout(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||t;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Za&&b.Za.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Eb&&0<b.timeout&&(f=oi(function(){e||(e=!0,window.clearTimeout(f),b.Eb.call(b.context||t))},b.timeout))}else $i(a,b)}
function $i(a,b){var c=b.format||"JSON";a=Yi(a,b);var d=Zi(a,b),e=!1,f,g=aj(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null,k=400<=a.status&&500>a.status,q=500<=a.status&&600>a.status;if(d||k||q)g=bj(c,a,b.fe);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||
{};k=b.context||t;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.Za&&b.Za.call(k,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Hb&&0<b.timeout&&(f=oi(function(){e||(e=!0,g.abort(),window.clearTimeout(f))},b.timeout))}
function Yi(a,b){b.re&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=W("XSRF_FIELD_NAME"),d=b.Ge;d&&(d[c]&&delete d[c],a=Qi(a,d||{},!0));return a}
function Zi(a,b){var c=W("XSRF_FIELD_NAME"),d=W("XSRF_TOKEN"),e=b.postBody||"",f=b.oa,g=W("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.ke||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.oa&&b.oa[g]||(f||(f={}),f[c]=d);f&&v(e)&&(e=Pi(e),bb(e,f),e=b.Jb&&"JSON"==b.Jb?JSON.stringify(e):Kd(e));f=e||f&&!$a(f);!Ti&&f&&"POST"!=b.method&&(Ti=!0,ni(Error("AJAX request with postData should use POST")));return e}
function bj(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?cj(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=dj(a)})}c&&ej(d);
return d}
function ej(a){if(xa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Lb(a[b],null);a[c]=d}else ej(a[b])}}
function cj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function dj(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function aj(a,b,c,d,e,f,g){function k(){4==(n&&"readyState"in n?n.readyState:0)&&b&&mi(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var n=Ni();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",k,!1):n.onreadystatechange=k;Y("debug_forward_web_query_parameters")&&(a=Wi(a));n.open(c,a,!0);f&&(n.responseType=f);g&&(n.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ui(a,e))for(var m in e)n.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.send(d);
return n}
;function fj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.be||V("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().ae:b=ac([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=V("SESSION_INDEX",0),Y("pageid_as_header_web")&&(d["X-Goog-PageId"]=V("DELEGATED_SESSION_ID")));return d}
function gj(a){a=Object.assign({},a);delete a.Authorization;var b=ac();if(b){var c=new pc;c.update(W("INNERTUBE_API_KEY"));c.update(b);b=c.digest();if(!zb)for(zb={},Ab={},c=0;65>c;c++)zb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Ab[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Ab;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,n=e+2<b.length,m=n?b[e+2]:0,l=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>6;m&=
63;n||(m=64,g||(k=64));d.push(c[l],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function hj(){var a=new Ad;(a=a.isAvailable()?new Gd(a,"yt.innertube"):null)||(a=new Bd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new wd(a):null;this.l=document.domain||window.location.hostname}
hj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,y()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ld(b))}catch(f){return}else e=escape(b);b=this.l;Cb.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
hj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Cb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.l;Cb.remove(""+a,"/",void 0===b?"youtube.com":b)};var ij=new hj;function jj(a,b,c,d){if(d)return null;d=ij.get("nextId",!0)||1;var e=ij.get("requests",!0)||{};e[d]={method:a,request:b,authState:gj(c),requestTime:Math.round(fi())};ij.set("nextId",d+1,86400,!0);ij.set("requests",e,86400,!0);return d}
function kj(a){var b=ij.get("requests",!0)||{};delete b[a];ij.set("requests",b,86400,!0)}
function lj(a){var b=ij.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(fi())-d.requestTime)){var e=d.authState;var f=gj(fj(!1));a:{var g=void 0;for(g in e)if(!(g in f)||e[g]!==f[g]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(fi())),Hi(a,d.method,e,{}));delete b[c]}}ij.set("requests",b,86400,!0)}}
;function mj(a){var b=this;this.f=a||{innertubeApiKey:W("INNERTUBE_API_KEY"),innertubeApiVersion:W("INNERTUBE_API_VERSION"),ad:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:W("INNERTUBE_CONTEXT_CLIENT_VERSION"),cd:W("INNERTUBE_CONTEXT_HL"),bd:W("INNERTUBE_CONTEXT_GL"),dd:W("INNERTUBE_HOST_OVERRIDE")||"",ed:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};li(function(){lj(b)},0,5E3)}
function Hi(a,b,c,d){!V("VISITOR_DATA")&&.01>Math.random()&&ni(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",oa:c,Jb:"JSON",Hb:function(){},
Eb:d.Hb,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Db:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
xe:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.dd;g&&(f=g);g=a.f.ed||!1;var k=fj(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var n=""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.f.innertubeApiKey,m;if(d.retry&&Y("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=jj(b,c,k,g))){var l=e.onSuccess,q=e.Db;e.onSuccess=function(a,b){kj(m);l(a,b)};
c.Db=function(a,b){kj(m);q(a,b)}}try{Y("use_fetch_for_op_xhr")?Xi(n,e):(e.method="POST",e.oa||(e.oa={}),$i(n,e))}catch(Na){if("InvalidAccessError"==Na)m&&(kj(m),m=0),ni(Error("An extension is blocking network request."),"WARNING");
else throw Na;}m&&li(function(){lj(a)},0,5E3)}
;var nj=y().toString();var oj;
if(!(oj=w("ytLoggingTimeDocumentNonce_"))){var pj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var qj=Array(16),rj=new Uint8Array(16);window.crypto.getRandomValues(rj);for(var sj=0;sj<qj.length;sj++)qj[sj]=rj[sj];pj=qj;break a}catch(a){}for(var tj=Array(16),uj=0;16>uj;uj++){for(var vj=y(),wj=0;wj<vj%23;wj++)tj[uj]=Math.random();tj[uj]=Math.floor(256*Math.random())}if(nj)for(var xj=1,yj=0;yj<nj.length;yj++)tj[xj%16]=tj[xj%16]^tj[(xj-1)%16]/4^nj.charCodeAt(yj),xj++;pj=tj}for(var zj=pj,Aj=
[],Bj=0;Bj<zj.length;Bj++)Aj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(zj[Bj]&63));oj=Aj.join("")}var Cj=oj;z("ytLoggingTimeDocumentNonce_",Cj);function Dj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ej(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt.logging.screen.getRootVeType",function(a){return V(Ej(void 0===a?0:a),void 0)});
function Fj(a){a=void 0===a?0:a;var b=V(Dj(a));b||0!=a||(b=V("EVENT_ID"));return b?b:null}
z("yt.logging.screen.getCurrentCsn",Fj);
z("yt.logging.screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==V(Dj(c))||b!==V(Ej(c)))hi(Dj(c),a),hi(Ej(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var b={clientDocumentNonce:Cj,clientScreenNonce:a},c={};c.eventTimeMs=Math.round(fi());c.foregroundHeartbeatScreenAssociated=b;b=String;var f=w("_lact",window);f=null==f?-1:Math.max(y()-f,0);c.context={lastActivityMs:b(f)};b=Gi("log_event");b.push(c);mj&&(yi.log_event=new mj);b.length>=(Number(Y("web_logging_max_batch")||0)||
20)?Di():Fi()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Gj(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Kd(b):"";Cb.set(""+a,b,c||5,"/","youtube.com",!1)}
;function Hj(a,b,c,d,e){if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=w("searchbox.yt.install")(a,b,c,f,g,Ij,d))&&e(a,100)}}
function Jj(a,b){var c=V("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[ji()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";c=a;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=I(J(3,window.location.href));e&&d.push(e);e=I(J(3,c));if(0<=Ba(d,e)||!e&&0==c.lastIndexOf("/",0))if(Y("autoescape_tempdata_url")&&(d=document.createElement("a"),Nb(d,c),c=d.href),c){e=c.match(Id);c=e[5];d=e[6];e=e[7];var f="";c&&(f+=c);d&&
(f+="?"+d);e&&(f+="#"+e);c=f;d=c.indexOf("#");if(c=0>d?c:c.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||Fj();if(g){var g=parseInt(g,10);isFinite(g)&&0<g&&Gj(c,b,g)}else Gj(c,b)}}}}
function Ij(a,b){Jj(a,b?{feature:b}:{});var c=w("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Ld(a,d)+e;d=d instanceof E?d:Hb(d);c.href=Fb(d)}}
function Kj(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d[f];f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Gc(e);if(null!=e)for(var k,n=0;k=e[n];n++)Fc(c,g,k);break;default:k=Gc(e),null!=k&&Fc(c,g,k)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,Fc(c,g,e.value),Fc(c,g+
".x","0"),Fc(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b.hasAttribute("data-is-crosswalk")&&"0"!=b.getAttribute("data-is-crosswalk")&&(c+="&sp=mAEB");b=b.action+"?"+c;Jj(b,a);a=!!V("SPF_SEARCH_BOX");if(!w("ytspf.enabled")||!a)return!0;a=w("yt.window.navigate");try{a(b)}catch(m){return!0}return!1}
;z("searchbox.yt.install",function(a,b,c,d,e,f,g){Ae||(Ae=new ci);Ae.install(a,b,c,d,e,f,g)});
z("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");Hj(a,a.search_query,document.getElementById("search-btn"),Kj,window.setTimeout)});
z("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){Hj(a,b,c,d,pi.f)});}).call(this);
