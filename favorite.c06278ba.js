!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequired7c6=a),a.register("UL92Z",(function(r,n){t(r.exports,"FavoriteStorage",(function(){return s})),t(r.exports,"ReadStorage",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=function(){"use strict";function t(){e(i)(this,t),this.KEY="FAVORITE_NEWS"}return e(o)(t,[{key:"getNews",value:function(){var e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}},{key:"addNews",value:function(e){var t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}},{key:"hasNews",value:function(e){return this.getNews().some((function(t){return t.url===e.url}))}},{key:"removeNews",value:function(e){var t=this.getNews();t.forEach((function(r,n){r.url===e.url&&t.splice(n,1)})),localStorage.setItem(this.KEY,JSON.stringify(t))}}]),t}(),u=function(){"use strict";function t(){e(i)(this,t),this.KEY="READ_NEWS"}return e(o)(t,[{key:"getNews",value:function(){var e=localStorage.getItem(this.KEY);return e?JSON.parse(e):[]}},{key:"addNews",value:function(e){var t=this.getNews();this.hasNews(e)||(t.push(e),localStorage.setItem(this.KEY,JSON.stringify(t)))}},{key:"hasNews",value:function(e){return this.getNews().some((function(t){return t.url===e.url}))}}]),t}()})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("iLqhe",(function(r,n){t(r.exports,"onCardClick",(function(){return c})),t(r.exports,"onReadClick",(function(){return l}));var i=a("UL92Z"),o=a("jR9u2"),s=new(0,i.FavoriteStorage),u=new(0,i.ReadStorage);function c(e){if("button"===e.target.tagName.toLowerCase()){console.log("Click");var t=e.target.closest("BUTTON");console.log(t);var r=t.closest("li"),n=r.querySelector(".card-title").textContent,i=r.querySelector("img").getAttribute("src"),a=r.querySelector("img").getAttribute("alt"),o=r.querySelector("p").textContent,u=r.querySelector(".card-date").textContent,c=r.querySelector(".card-category").textContent,l={src:i,title:n,url:r.querySelector(".card-url").getAttribute("href"),info:o,published_date:u,alt:a,section:c};return s.hasNews(l)?(s.removeNews(l),t.classList.replace("favorite-button__activ","add-to-favorite"),t.innerHTML='Add to favorite <svg class=" active-news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'):(s.addNews(l),t.classList.replace("add-to-favorite","favorite-button__activ"),t.innerHTML='Remove from favorite  <svg class="news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>'),l}}function l(t){if("a"===t.target.tagName.toLowerCase()){var r=t.target.closest("A");console.log(r);var n=r.closest("li");console.log(n),n.classList.add("opacity");var i=n.querySelector(".card-title").textContent;n.insertAdjacentHTML("beforeend",'<span class="news__read-status">Already read <span class="card-icon"></span></span>');var a=n.querySelector("img").getAttribute("src"),s=n.querySelector("img").getAttribute("alt"),c=n.querySelector("p").textContent,l=n.querySelector("span").textContent,f=n.querySelector(".card-category").textContent,d=n.querySelector(".card-url").getAttribute("href"),h={readDate:e(o)(Date.now()).format("DD/MM/YYYY"),src:a,title:i,url:d,info:c,published_date:l,alt:s,section:f};console.log(h),u.addNews(h)}}})),a.register("jR9u2",(function(t,r){var n=a("l5bVx");t.exports=function(){"use strict";var r,i;function a(){return r.apply(null,arguments)}function o(e){r=e}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(c(e,t))return!1;return!0}function f(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function p(e,t){var r,n=[],i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function v(e,t){for(var r in t)c(t,r)&&(e[r]=t[r]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function m(e,t,r,n){return Kr(e,t,r,n,!0).utc()}function y(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=y()),e._pf}function _(e){if(null==e._isValid){var t=g(e),r=i.call(t.parsedDateParts,(function(e){return null!=e})),n=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r);if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function k(e){var t=m(NaN);return null!=e?v(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){var t,r=Object(this),n=r.length>>>0;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};var b=a.momentProperties=[],w=!1;function x(e,t){var r,n,i,a=b.length;if(f(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),f(t._i)||(e._i=t._i),f(t._f)||(e._f=t._f),f(t._l)||(e._l=t._l),f(t._strict)||(e._strict=t._strict),f(t._tzm)||(e._tzm=t._tzm),f(t._isUTC)||(e._isUTC=t._isUTC),f(t._offset)||(e._offset=t._offset),f(t._pf)||(e._pf=g(t)),f(t._locale)||(e._locale=t._locale),a>0)for(r=0;r<a;r++)f(i=t[n=b[r]])||(e[n]=i);return e}function S(e){x(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,a.updateOffset(this),w=!1)}function I(e){return e instanceof S||null!=e&&null!=e._isAMomentObject}function T(e){!1===a.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function O(e,t){var r=!0;return v((function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,e),r){var n,i,o,s=[],u=arguments.length;for(i=0;i<u;i++){if(n="","object"==typeof arguments[i]){for(o in n+="\n["+i+"] ",arguments[0])c(arguments[0],o)&&(n+=o+": "+arguments[0][o]+", ");n=n.slice(0,-2)}else n=arguments[i];s.push(n)}T(e+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),r=!1}return t.apply(this,arguments)}),t)}var E,D={};function M(e,t){null!=a.deprecationHandler&&a.deprecationHandler(e,t),D[e]||(T(t),D[e]=!0)}function N(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function R(e){var t,r;for(r in e)c(e,r)&&(N(t=e[r])?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function A(e,t){var r,n=v({},e);for(r in t)c(t,r)&&(u(e[r])&&u(t[r])?(n[r]={},v(n[r],e[r]),v(n[r],t[r])):null!=t[r]?n[r]=t[r]:delete n[r]);for(r in e)c(e,r)&&!c(t,r)&&u(e[r])&&(n[r]=v({},n[r]));return n}function C(e){null!=e&&this.set(e)}a.suppressDeprecationWarnings=!1,a.deprecationHandler=null,E=Object.keys?Object.keys:function(e){var t,r=[];for(t in e)c(e,t)&&r.push(t);return r};var P={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function L(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return N(n)?n.call(t,r):n}function U(e,t,r){var n=""+Math.abs(e),i=t-n.length;return(e>=0?r?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+n}var Y=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,j=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,F={},W={};function V(e,t,r,n){var i=n;"string"==typeof n&&(i=function(){return this[n]()}),e&&(W[e]=i),t&&(W[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),r&&(W[r]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function H(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function B(e){var t,r,n=e.match(Y);for(t=0,r=n.length;t<r;t++)W[n[t]]?n[t]=W[n[t]]:n[t]=H(n[t]);return function(t){var i,a="";for(i=0;i<r;i++)a+=N(n[i])?n[i].call(t,e):n[i];return a}}function z(e,t){return e.isValid()?(t=G(t,e.localeData()),F[t]=F[t]||B(t),F[t](e)):e.localeData().invalidDate()}function G(e,t){var r=5;function n(e){return t.longDateFormat(e)||e}for(j.lastIndex=0;r>=0&&j.test(e);)e=e.replace(j,n),j.lastIndex=0,r-=1;return e}var q={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function J(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Y).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])}var K="Invalid date";function Z(){return this._invalidDate}var Q="%d",$=/\d{1,2}/;function X(e){return this._ordinal.replace("%d",e)}var ee={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function te(e,t,r,n){var i=this._relativeTime[r];return N(i)?i(e,t,r,n):i.replace(/%d/i,e)}function re(e,t){var r=this._relativeTime[e>0?"future":"past"];return N(r)?r(t):r.replace(/%s/i,t)}var ne={};function ie(e,t){var r=e.toLowerCase();ne[r]=ne[r+"s"]=ne[t]=e}function ae(e){return"string"==typeof e?ne[e]||ne[e.toLowerCase()]:void 0}function oe(e){var t,r,n={};for(r in e)c(e,r)&&(t=ae(r))&&(n[t]=e[r]);return n}var se={};function ue(e,t){se[e]=t}function ce(e){var t,r=[];for(t in e)c(e,t)&&r.push({unit:t,priority:se[t]});return r.sort((function(e,t){return e.priority-t.priority})),r}function le(e){return e%4==0&&e%100!=0||e%400==0}function fe(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function de(e){var t=+e,r=0;return 0!==t&&isFinite(t)&&(r=fe(t)),r}function he(e,t){return function(r){return null!=r?(ve(this,e,r),a.updateOffset(this,t),this):pe(this,e)}}function pe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function ve(e,t,r){e.isValid()&&!isNaN(r)&&("FullYear"===t&&le(e.year())&&1===e.month()&&29===e.date()?(r=de(r),e._d["set"+(e._isUTC?"UTC":"")+t](r,e.month(),tt(r,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](r))}function me(e){return N(this[e=ae(e)])?this[e]():this}function ye(e,t){if("object"==typeof e){var r,n=ce(e=oe(e)),i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(N(this[e=ae(e)]))return this[e](t);return this}var ge,_e=/\d/,ke=/\d\d/,be=/\d{3}/,we=/\d{4}/,xe=/[+-]?\d{6}/,Se=/\d\d?/,Ie=/\d\d\d\d?/,Te=/\d\d\d\d\d\d?/,Oe=/\d{1,3}/,Ee=/\d{1,4}/,De=/[+-]?\d{1,6}/,Me=/\d+/,Ne=/[+-]?\d+/,Re=/Z|[+-]\d\d:?\d\d/gi,Ae=/Z|[+-]\d\d(?::?\d\d)?/gi,Ce=/[+-]?\d+(\.\d{1,3})?/,Pe=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Le(e,t,r){ge[e]=N(t)?t:function(e,n){return e&&r?r:t}}function Ue(e,t){return c(ge,e)?ge[e](t._strict,t._locale):new RegExp(Ye(e))}function Ye(e){return je(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,r,n,i){return t||r||n||i})))}function je(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}ge={};var Fe={};function We(e,t){var r,n,i=t;for("string"==typeof e&&(e=[e]),d(t)&&(i=function(e,r){r[t]=de(e)}),n=e.length,r=0;r<n;r++)Fe[e[r]]=i}function Ve(e,t){We(e,(function(e,r,n,i){n._w=n._w||{},t(e,n._w,n,i)}))}function He(e,t,r){null!=t&&c(Fe,e)&&Fe[e](t,r._a,r,e)}var Be,ze=0,Ge=1,qe=2,Je=3,Ke=4,Ze=5,Qe=6,$e=7,Xe=8;function et(e,t){return(e%t+t)%t}function tt(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=et(t,12);return e+=(t-r)/12,1===r?le(e)?29:28:31-r%7%2}Be=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},V("M",["MM",2],"Mo",(function(){return this.month()+1})),V("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),V("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),ie("month","M"),ue("month",8),Le("M",Se),Le("MM",Se,ke),Le("MMM",(function(e,t){return t.monthsShortRegex(e)})),Le("MMMM",(function(e,t){return t.monthsRegex(e)})),We(["M","MM"],(function(e,t){t[Ge]=de(e)-1})),We(["MMM","MMMM"],(function(e,t,r,n){var i=r._locale.monthsParse(e,n,r._strict);null!=i?t[Ge]=i:g(r).invalidMonth=e}));var rt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),it=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,at=Pe,ot=Pe;function st(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||it).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone}function ut(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[it.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ct(e,t,r){var n,i,a,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)a=m([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(a,"").toLocaleLowerCase();return r?"MMM"===t?-1!==(i=Be.call(this._shortMonthsParse,o))?i:null:-1!==(i=Be.call(this._longMonthsParse,o))?i:null:"MMM"===t?-1!==(i=Be.call(this._shortMonthsParse,o))||-1!==(i=Be.call(this._longMonthsParse,o))?i:null:-1!==(i=Be.call(this._longMonthsParse,o))||-1!==(i=Be.call(this._shortMonthsParse,o))?i:null}function lt(e,t,r){var n,i,a;if(this._monthsParseExact)return ct.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(i=m([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),r||this._monthsParse[n]||(a="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[n]=new RegExp(a.replace(".",""),"i")),r&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n;if(r&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function ft(e,t){var r;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=de(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return r=Math.min(e.date(),tt(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,r),e}function dt(e){return null!=e?(ft(this,e),a.updateOffset(this,!0),this):pe(this,"Month")}function ht(){return tt(this.year(),this.month())}function pt(e){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=at),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function vt(e){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=ot),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function mt(){function e(e,t){return t.length-e.length}var t,r,n=[],i=[],a=[];for(t=0;t<12;t++)r=m([2e3,t]),n.push(this.monthsShort(r,"")),i.push(this.months(r,"")),a.push(this.months(r,"")),a.push(this.monthsShort(r,""));for(n.sort(e),i.sort(e),a.sort(e),t=0;t<12;t++)n[t]=je(n[t]),i[t]=je(i[t]);for(t=0;t<24;t++)a[t]=je(a[t]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function yt(e){return le(e)?366:365}V("Y",0,0,(function(){var e=this.year();return e<=9999?U(e,4):"+"+e})),V(0,["YY",2],0,(function(){return this.year()%100})),V(0,["YYYY",4],0,"year"),V(0,["YYYYY",5],0,"year"),V(0,["YYYYYY",6,!0],0,"year"),ie("year","y"),ue("year",1),Le("Y",Ne),Le("YY",Se,ke),Le("YYYY",Ee,we),Le("YYYYY",De,xe),Le("YYYYYY",De,xe),We(["YYYYY","YYYYYY"],ze),We("YYYY",(function(e,t){t[ze]=2===e.length?a.parseTwoDigitYear(e):de(e)})),We("YY",(function(e,t){t[ze]=a.parseTwoDigitYear(e)})),We("Y",(function(e,t){t[ze]=parseInt(e,10)})),a.parseTwoDigitYear=function(e){return de(e)+(de(e)>68?1900:2e3)};var gt=he("FullYear",!0);function _t(){return le(this.year())}function kt(e,t,r,n,i,a,o){var s;return e<100&&e>=0?(s=new Date(e+400,t,r,n,i,a,o),isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,r,n,i,a,o),s}function bt(e){var t,r;return e<100&&e>=0?((r=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function wt(e,t,r){var n=7+t-r;return-(7+bt(e,0,n).getUTCDay()-t)%7+n-1}function xt(e,t,r,n,i){var a,o,s=1+7*(t-1)+(7+r-n)%7+wt(e,n,i);return s<=0?o=yt(a=e-1)+s:s>yt(e)?(a=e+1,o=s-yt(e)):(a=e,o=s),{year:a,dayOfYear:o}}function St(e,t,r){var n,i,a=wt(e.year(),t,r),o=Math.floor((e.dayOfYear()-a-1)/7)+1;return o<1?n=o+It(i=e.year()-1,t,r):o>It(e.year(),t,r)?(n=o-It(e.year(),t,r),i=e.year()+1):(i=e.year(),n=o),{week:n,year:i}}function It(e,t,r){var n=wt(e,t,r),i=wt(e+1,t,r);return(yt(e)-n+i)/7}function Tt(e){return St(e,this._week.dow,this._week.doy).week}V("w",["ww",2],"wo","week"),V("W",["WW",2],"Wo","isoWeek"),ie("week","w"),ie("isoWeek","W"),ue("week",5),ue("isoWeek",5),Le("w",Se),Le("ww",Se,ke),Le("W",Se),Le("WW",Se,ke),Ve(["w","ww","W","WW"],(function(e,t,r,n){t[n.substr(0,1)]=de(e)}));var Ot={dow:0,doy:6};function Et(){return this._week.dow}function Dt(){return this._week.doy}function Mt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Nt(e){var t=St(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Rt(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function At(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ct(e,t){return e.slice(t,7).concat(e.slice(0,t))}V("d",0,"do","day"),V("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),V("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),V("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),V("e",0,0,"weekday"),V("E",0,0,"isoWeekday"),ie("day","d"),ie("weekday","e"),ie("isoWeekday","E"),ue("day",11),ue("weekday",11),ue("isoWeekday",11),Le("d",Se),Le("e",Se),Le("E",Se),Le("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Le("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Le("dddd",(function(e,t){return t.weekdaysRegex(e)})),Ve(["dd","ddd","dddd"],(function(e,t,r,n){var i=r._locale.weekdaysParse(e,n,r._strict);null!=i?t.d=i:g(r).invalidWeekday=e})),Ve(["d","e","E"],(function(e,t,r,n){t[n]=de(e)}));var Pt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Lt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ut="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Yt=Pe,jt=Pe,Ft=Pe;function Wt(e,t){var r=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ct(r,this._week.dow):e?r[e.day()]:r}function Vt(e){return!0===e?Ct(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ht(e){return!0===e?Ct(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Bt(e,t,r){var n,i,a,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)a=m([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(a,"").toLocaleLowerCase();return r?"dddd"===t?-1!==(i=Be.call(this._weekdaysParse,o))?i:null:"ddd"===t?-1!==(i=Be.call(this._shortWeekdaysParse,o))?i:null:-1!==(i=Be.call(this._minWeekdaysParse,o))?i:null:"dddd"===t?-1!==(i=Be.call(this._weekdaysParse,o))||-1!==(i=Be.call(this._shortWeekdaysParse,o))||-1!==(i=Be.call(this._minWeekdaysParse,o))?i:null:"ddd"===t?-1!==(i=Be.call(this._shortWeekdaysParse,o))||-1!==(i=Be.call(this._weekdaysParse,o))||-1!==(i=Be.call(this._minWeekdaysParse,o))?i:null:-1!==(i=Be.call(this._minWeekdaysParse,o))||-1!==(i=Be.call(this._weekdaysParse,o))||-1!==(i=Be.call(this._shortWeekdaysParse,o))?i:null}function zt(e,t,r){var n,i,a;if(this._weekdaysParseExact)return Bt.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(i=m([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(a="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[n]=new RegExp(a.replace(".",""),"i")),r&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n;if(r&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n;if(r&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function Gt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Rt(e,this.localeData()),this.add(e-t,"d")):t}function qt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Jt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=At(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Kt(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||$t.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Yt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Zt(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||$t.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=jt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Qt(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||$t.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ft),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function $t(){function e(e,t){return t.length-e.length}var t,r,n,i,a,o=[],s=[],u=[],c=[];for(t=0;t<7;t++)r=m([2e3,1]).day(t),n=je(this.weekdaysMin(r,"")),i=je(this.weekdaysShort(r,"")),a=je(this.weekdays(r,"")),o.push(n),s.push(i),u.push(a),c.push(n),c.push(i),c.push(a);o.sort(e),s.sort(e),u.sort(e),c.sort(e),this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Xt(){return this.hours()%12||12}function er(){return this.hours()||24}function tr(e,t){V(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function rr(e,t){return t._meridiemParse}function nr(e){return"p"===(e+"").toLowerCase().charAt(0)}V("H",["HH",2],0,"hour"),V("h",["hh",2],0,Xt),V("k",["kk",2],0,er),V("hmm",0,0,(function(){return""+Xt.apply(this)+U(this.minutes(),2)})),V("hmmss",0,0,(function(){return""+Xt.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)})),V("Hmm",0,0,(function(){return""+this.hours()+U(this.minutes(),2)})),V("Hmmss",0,0,(function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)})),tr("a",!0),tr("A",!1),ie("hour","h"),ue("hour",13),Le("a",rr),Le("A",rr),Le("H",Se),Le("h",Se),Le("k",Se),Le("HH",Se,ke),Le("hh",Se,ke),Le("kk",Se,ke),Le("hmm",Ie),Le("hmmss",Te),Le("Hmm",Ie),Le("Hmmss",Te),We(["H","HH"],Je),We(["k","kk"],(function(e,t,r){var n=de(e);t[Je]=24===n?0:n})),We(["a","A"],(function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e})),We(["h","hh"],(function(e,t,r){t[Je]=de(e),g(r).bigHour=!0})),We("hmm",(function(e,t,r){var n=e.length-2;t[Je]=de(e.substr(0,n)),t[Ke]=de(e.substr(n)),g(r).bigHour=!0})),We("hmmss",(function(e,t,r){var n=e.length-4,i=e.length-2;t[Je]=de(e.substr(0,n)),t[Ke]=de(e.substr(n,2)),t[Ze]=de(e.substr(i)),g(r).bigHour=!0})),We("Hmm",(function(e,t,r){var n=e.length-2;t[Je]=de(e.substr(0,n)),t[Ke]=de(e.substr(n))})),We("Hmmss",(function(e,t,r){var n=e.length-4,i=e.length-2;t[Je]=de(e.substr(0,n)),t[Ke]=de(e.substr(n,2)),t[Ze]=de(e.substr(i))}));var ir=/[ap]\.?m?\.?/i,ar=he("Hours",!0);function or(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var sr,ur={calendar:P,longDateFormat:q,invalidDate:K,ordinal:Q,dayOfMonthOrdinalParse:$,relativeTime:ee,months:rt,monthsShort:nt,week:Ot,weekdays:Pt,weekdaysMin:Ut,weekdaysShort:Lt,meridiemParse:ir},cr={},lr={};function fr(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function dr(e){return e?e.toLowerCase().replace("_","-"):e}function hr(e){for(var t,r,n,i,a=0;a<e.length;){for(t=(i=dr(e[a]).split("-")).length,r=(r=dr(e[a+1]))?r.split("-"):null;t>0;){if(n=vr(i.slice(0,t).join("-")))return n;if(r&&r.length>=t&&fr(i,r)>=t-1)break;t--}a++}return sr}function pr(e){return null!=e.match("^[^/\\\\]*$")}function vr(e){var r=null;if(void 0===cr[e]&&t&&t.exports&&pr(e))try{r=sr._abbr,(void 0)("./locale/"+e),mr(r)}catch(t){cr[e]=null}return cr[e]}function mr(e,t){var r;return e&&((r=f(t)?_r(e):yr(e,t))?sr=r:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),sr._abbr}function yr(e,t){if(null!==t){var r,n=ur;if(t.abbr=e,null!=cr[e])M("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=cr[e]._config;else if(null!=t.parentLocale)if(null!=cr[t.parentLocale])n=cr[t.parentLocale]._config;else{if(null==(r=vr(t.parentLocale)))return lr[t.parentLocale]||(lr[t.parentLocale]=[]),lr[t.parentLocale].push({name:e,config:t}),null;n=r._config}return cr[e]=new C(A(n,t)),lr[e]&&lr[e].forEach((function(e){yr(e.name,e.config)})),mr(e),cr[e]}return delete cr[e],null}function gr(e,t){if(null!=t){var r,n,i=ur;null!=cr[e]&&null!=cr[e].parentLocale?cr[e].set(A(cr[e]._config,t)):(null!=(n=vr(e))&&(i=n._config),t=A(i,t),null==n&&(t.abbr=e),(r=new C(t)).parentLocale=cr[e],cr[e]=r),mr(e)}else null!=cr[e]&&(null!=cr[e].parentLocale?(cr[e]=cr[e].parentLocale,e===mr()&&mr(e)):null!=cr[e]&&delete cr[e]);return cr[e]}function _r(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return sr;if(!s(e)){if(t=vr(e))return t;e=[e]}return hr(e)}function kr(){return E(cr)}function br(e){var t,r=e._a;return r&&-2===g(e).overflow&&(t=r[Ge]<0||r[Ge]>11?Ge:r[qe]<1||r[qe]>tt(r[ze],r[Ge])?qe:r[Je]<0||r[Je]>24||24===r[Je]&&(0!==r[Ke]||0!==r[Ze]||0!==r[Qe])?Je:r[Ke]<0||r[Ke]>59?Ke:r[Ze]<0||r[Ze]>59?Ze:r[Qe]<0||r[Qe]>999?Qe:-1,g(e)._overflowDayOfYear&&(t<ze||t>qe)&&(t=qe),g(e)._overflowWeeks&&-1===t&&(t=$e),g(e)._overflowWeekday&&-1===t&&(t=Xe),g(e).overflow=t),e}var wr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,xr=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sr=/Z|[+-]\d\d(?::?\d\d)?/,Ir=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Tr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Or=/^\/?Date\((-?\d+)/i,Er=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Dr={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mr(e){var t,r,n,i,a,o,s=e._i,u=wr.exec(s)||xr.exec(s),c=Ir.length,l=Tr.length;if(u){for(g(e).iso=!0,t=0,r=c;t<r;t++)if(Ir[t][1].exec(u[1])){i=Ir[t][0],n=!1!==Ir[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,r=l;t<r;t++)if(Tr[t][1].exec(u[3])){a=(u[2]||" ")+Tr[t][0];break}if(null==a)return void(e._isValid=!1)}if(!n&&null!=a)return void(e._isValid=!1);if(u[4]){if(!Sr.exec(u[4]))return void(e._isValid=!1);o="Z"}e._f=i+(a||"")+(o||""),Vr(e)}else e._isValid=!1}function Nr(e,t,r,n,i,a){var o=[Rr(e),nt.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(i,10)];return a&&o.push(parseInt(a,10)),o}function Rr(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ar(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Cr(e,t,r){return!e||Lt.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(g(r).weekdayMismatch=!0,r._isValid=!1,!1)}function Pr(e,t,r){if(e)return Dr[e];if(t)return 0;var n=parseInt(r,10),i=n%100;return(n-i)/100*60+i}function Lr(e){var t,r=Er.exec(Ar(e._i));if(r){if(t=Nr(r[4],r[3],r[2],r[5],r[6],r[7]),!Cr(r[1],t,e))return;e._a=t,e._tzm=Pr(r[8],r[9],r[10]),e._d=bt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Ur(e){var t=Or.exec(e._i);null===t?(Mr(e),!1===e._isValid&&(delete e._isValid,Lr(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:a.createFromInputFallback(e)))):e._d=new Date(+t[1])}function Yr(e,t,r){return null!=e?e:null!=t?t:r}function jr(e){var t=new Date(a.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Fr(e){var t,r,n,i,a,o=[];if(!e._d){for(n=jr(e),e._w&&null==e._a[qe]&&null==e._a[Ge]&&Wr(e),null!=e._dayOfYear&&(a=Yr(e._a[ze],n[ze]),(e._dayOfYear>yt(a)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),r=bt(a,0,e._dayOfYear),e._a[Ge]=r.getUTCMonth(),e._a[qe]=r.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=n[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Je]&&0===e._a[Ke]&&0===e._a[Ze]&&0===e._a[Qe]&&(e._nextDay=!0,e._a[Je]=0),e._d=(e._useUTC?bt:kt).apply(null,o),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Je]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}function Wr(e){var t,r,n,i,a,o,s,u,c;null!=(t=e._w).GG||null!=t.W||null!=t.E?(a=1,o=4,r=Yr(t.GG,e._a[ze],St(Zr(),1,4).year),n=Yr(t.W,1),((i=Yr(t.E,1))<1||i>7)&&(u=!0)):(a=e._locale._week.dow,o=e._locale._week.doy,c=St(Zr(),a,o),r=Yr(t.gg,e._a[ze],c.year),n=Yr(t.w,c.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+a,(t.e<0||t.e>6)&&(u=!0)):i=a),n<1||n>It(r,a,o)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(s=xt(r,n,i,a,o),e._a[ze]=s.year,e._dayOfYear=s.dayOfYear)}function Vr(e){if(e._f!==a.ISO_8601)if(e._f!==a.RFC_2822){e._a=[],g(e).empty=!0;var t,r,n,i,o,s,u,c=""+e._i,l=c.length,f=0;for(u=(n=G(e._f,e._locale).match(Y)||[]).length,t=0;t<u;t++)i=n[t],(r=(c.match(Ue(i,e))||[])[0])&&((o=c.substr(0,c.indexOf(r))).length>0&&g(e).unusedInput.push(o),c=c.slice(c.indexOf(r)+r.length),f+=r.length),W[i]?(r?g(e).empty=!1:g(e).unusedTokens.push(i),He(i,r,e)):e._strict&&!r&&g(e).unusedTokens.push(i);g(e).charsLeftOver=l-f,c.length>0&&g(e).unusedInput.push(c),e._a[Je]<=12&&!0===g(e).bigHour&&e._a[Je]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[Je]=Hr(e._locale,e._a[Je],e._meridiem),null!==(s=g(e).era)&&(e._a[ze]=e._locale.erasConvertYear(s,e._a[ze])),Fr(e),br(e)}else Lr(e);else Mr(e)}function Hr(e,t,r){var n;return null==r?t:null!=e.meridiemHour?e.meridiemHour(t,r):null!=e.isPM?((n=e.isPM(r))&&t<12&&(t+=12),n||12!==t||(t=0),t):t}function Br(e){var t,r,n,i,a,o,s=!1,u=e._f.length;if(0===u)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<u;i++)a=0,o=!1,t=x({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Vr(t),_(t)&&(o=!0),a+=g(t).charsLeftOver,a+=10*g(t).unusedTokens.length,g(t).score=a,s?a<n&&(n=a,r=t):(null==n||a<n||o)&&(n=a,r=t,o&&(s=!0));v(e,r||t)}function zr(e){if(!e._d){var t=oe(e._i),r=void 0===t.day?t.date:t.day;e._a=p([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),Fr(e)}}function Gr(e){var t=new S(br(qr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function qr(e){var t=e._i,r=e._f;return e._locale=e._locale||_r(e._l),null===t||void 0===r&&""===t?k({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),I(t)?new S(br(t)):(h(t)?e._d=t:s(r)?Br(e):r?Vr(e):Jr(e),_(e)||(e._d=null),e))}function Jr(e){var t=e._i;f(t)?e._d=new Date(a.now()):h(t)?e._d=new Date(t.valueOf()):"string"==typeof t?Ur(e):s(t)?(e._a=p(t.slice(0),(function(e){return parseInt(e,10)})),Fr(e)):u(t)?zr(e):d(t)?e._d=new Date(t):a.createFromInputFallback(e)}function Kr(e,t,r,n,i){var a={};return!0!==t&&!1!==t||(n=t,t=void 0),!0!==r&&!1!==r||(n=r,r=void 0),(u(e)&&l(e)||s(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=r,a._i=e,a._f=t,a._strict=n,Gr(a)}function Zr(e,t,r,n){return Kr(e,t,r,n,!1)}a.createFromInputFallback=O("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),a.ISO_8601=function(){},a.RFC_2822=function(){};var Qr=O("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Zr.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:k()})),$r=O("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Zr.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:k()}));function Xr(e,t){var r,n;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Zr();for(r=t[0],n=1;n<t.length;++n)t[n].isValid()&&!t[n][e](r)||(r=t[n]);return r}function en(){return Xr("isBefore",[].slice.call(arguments,0))}function tn(){return Xr("isAfter",[].slice.call(arguments,0))}var rn=function(){return Date.now?Date.now():+new Date},nn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function an(e){var t,r,n=!1,i=nn.length;for(t in e)if(c(e,t)&&(-1===Be.call(nn,t)||null!=e[t]&&isNaN(e[t])))return!1;for(r=0;r<i;++r)if(e[nn[r]]){if(n)return!1;parseFloat(e[nn[r]])!==de(e[nn[r]])&&(n=!0)}return!0}function on(){return this._isValid}function sn(){return Mn(NaN)}function un(e){var t=oe(e),r=t.year||0,n=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,o=t.day||0,s=t.hour||0,u=t.minute||0,c=t.second||0,l=t.millisecond||0;this._isValid=an(t),this._milliseconds=+l+1e3*c+6e4*u+36e5*s,this._days=+o+7*a,this._months=+i+3*n+12*r,this._data={},this._locale=_r(),this._bubble()}function cn(e){return e instanceof un}function ln(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function fn(e,t,r){var n,i=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;for(n=0;n<i;n++)(r&&e[n]!==t[n]||!r&&de(e[n])!==de(t[n]))&&o++;return o+a}function dn(e,t){V(e,0,0,(function(){var e=this.utcOffset(),r="+";return e<0&&(e=-e,r="-"),r+U(~~(e/60),2)+t+U(~~e%60,2)}))}dn("Z",":"),dn("ZZ",""),Le("Z",Ae),Le("ZZ",Ae),We(["Z","ZZ"],(function(e,t,r){r._useUTC=!0,r._tzm=pn(Ae,e)}));var hn=/([\+\-]|\d\d)/gi;function pn(e,t){var r,n,i=(t||"").match(e);return null===i?null:0===(n=60*(r=((i[i.length-1]||[])+"").match(hn)||["-",0,0])[1]+de(r[2]))?0:"+"===r[0]?n:-n}function vn(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(I(e)||h(e)?e.valueOf():Zr(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),a.updateOffset(r,!1),r):Zr(e).local()}function mn(e){return-Math.round(e._d.getTimezoneOffset())}function yn(e,t,r){var n,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=pn(Ae,e)))return this}else Math.abs(e)<16&&!r&&(e*=60);return!this._isUTC&&t&&(n=mn(this)),this._offset=e,this._isUTC=!0,null!=n&&this.add(n,"m"),i!==e&&(!t||this._changeInProgress?Pn(this,Mn(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:mn(this)}function gn(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function _n(e){return this.utcOffset(0,e)}function kn(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(mn(this),"m")),this}function bn(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=pn(Re,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wn(e){return!!this.isValid()&&(e=e?Zr(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function xn(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Sn(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e,t={};return x(t,this),(t=qr(t))._a?(e=t._isUTC?m(t._a):Zr(t._a),this._isDSTShifted=this.isValid()&&fn(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function In(){return!!this.isValid()&&!this._isUTC}function Tn(){return!!this.isValid()&&this._isUTC}function On(){return!!this.isValid()&&this._isUTC&&0===this._offset}a.updateOffset=function(){};var En=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Dn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Mn(e,t){var r,n,i,a=e,o=null;return cn(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:d(e)||!isNaN(+e)?(a={},t?a[t]=+e:a.milliseconds=+e):(o=En.exec(e))?(r="-"===o[1]?-1:1,a={y:0,d:de(o[qe])*r,h:de(o[Je])*r,m:de(o[Ke])*r,s:de(o[Ze])*r,ms:de(ln(1e3*o[Qe]))*r}):(o=Dn.exec(e))?(r="-"===o[1]?-1:1,a={y:Nn(o[2],r),M:Nn(o[3],r),w:Nn(o[4],r),d:Nn(o[5],r),h:Nn(o[6],r),m:Nn(o[7],r),s:Nn(o[8],r)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=An(Zr(a.from),Zr(a.to)),(a={}).ms=i.milliseconds,a.M=i.months),n=new un(a),cn(e)&&c(e,"_locale")&&(n._locale=e._locale),cn(e)&&c(e,"_isValid")&&(n._isValid=e._isValid),n}function Nn(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Rn(e,t){var r={};return r.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function An(e,t){var r;return e.isValid()&&t.isValid()?(t=vn(t,e),e.isBefore(t)?r=Rn(e,t):((r=Rn(t,e)).milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Cn(e,t){return function(r,n){var i;return null===n||isNaN(+n)||(M(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=n,n=i),Pn(this,Mn(r,n),e),this}}function Pn(e,t,r,n){var i=t._milliseconds,o=ln(t._days),s=ln(t._months);e.isValid()&&(n=null==n||n,s&&ft(e,pe(e,"Month")+s*r),o&&ve(e,"Date",pe(e,"Date")+o*r),i&&e._d.setTime(e._d.valueOf()+i*r),n&&a.updateOffset(e,o||s))}Mn.fn=un.prototype,Mn.invalid=sn;var Ln=Cn(1,"add"),Un=Cn(-1,"subtract");function Yn(e){return"string"==typeof e||e instanceof String}function jn(e){return I(e)||h(e)||Yn(e)||d(e)||Wn(e)||Fn(e)||null==e}function Fn(e){var t,r,n=u(e)&&!l(e),i=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o=a.length;for(t=0;t<o;t+=1)r=a[t],i=i||c(e,r);return n&&i}function Wn(e){var t=s(e),r=!1;return t&&(r=0===e.filter((function(t){return!d(t)&&Yn(e)})).length),t&&r}function Vn(e){var t,r,n=u(e)&&!l(e),i=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<a.length;t+=1)r=a[t],i=i||c(e,r);return n&&i}function Hn(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function Bn(e,t){1===arguments.length&&(arguments[0]?jn(arguments[0])?(e=arguments[0],t=void 0):Vn(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||Zr(),n=vn(r,this).startOf("day"),i=a.calendarFormat(this,n)||"sameElse",o=t&&(N(t[i])?t[i].call(this,r):t[i]);return this.format(o||this.localeData().calendar(i,this,Zr(r)))}function zn(){return new S(this)}function Gn(e,t){var r=I(e)?e:Zr(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=ae(t)||"millisecond")?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf())}function qn(e,t){var r=I(e)?e:Zr(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=ae(t)||"millisecond")?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf())}function Jn(e,t,r,n){var i=I(e)?e:Zr(e),a=I(t)?t:Zr(t);return!!(this.isValid()&&i.isValid()&&a.isValid())&&("("===(n=n||"()")[0]?this.isAfter(i,r):!this.isBefore(i,r))&&(")"===n[1]?this.isBefore(a,r):!this.isAfter(a,r))}function Kn(e,t){var r,n=I(e)?e:Zr(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=ae(t)||"millisecond")?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf()))}function Zn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Qn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function $n(e,t,r){var n,i,a;if(!this.isValid())return NaN;if(!(n=vn(e,this)).isValid())return NaN;switch(i=6e4*(n.utcOffset()-this.utcOffset()),t=ae(t)){case"year":a=Xn(this,n)/12;break;case"month":a=Xn(this,n);break;case"quarter":a=Xn(this,n)/3;break;case"second":a=(this-n)/1e3;break;case"minute":a=(this-n)/6e4;break;case"hour":a=(this-n)/36e5;break;case"day":a=(this-n-i)/864e5;break;case"week":a=(this-n-i)/6048e5;break;default:a=this-n}return r?a:fe(a)}function Xn(e,t){if(e.date()<t.date())return-Xn(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(r,"months");return-(r+(t-n<0?(t-n)/(n-e.clone().add(r-1,"months")):(t-n)/(e.clone().add(r+1,"months")-n)))||0}function ei(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ti(e){if(!this.isValid())return null;var t=!0!==e,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?z(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):N(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+6e4*this.utcOffset()).toISOString().replace("Z",z(r,"Z")):z(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ri(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,r,n,i="moment",a="";return this.isLocal()||(i=0===this.utcOffset()?"moment.utc":"moment.parseZone",a="Z"),e="["+i+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",n=a+'[")]',this.format(e+t+r+n)}function ni(e){e||(e=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var t=z(this,e);return this.localeData().postformat(t)}function ii(e,t){return this.isValid()&&(I(e)&&e.isValid()||Zr(e).isValid())?Mn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ai(e){return this.from(Zr(),e)}function oi(e,t){return this.isValid()&&(I(e)&&e.isValid()||Zr(e).isValid())?Mn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function si(e){return this.to(Zr(),e)}function ui(e){var t;return void 0===e?this._locale._abbr:(null!=(t=_r(e))&&(this._locale=t),this)}a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ci=O("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function li(){return this._locale}var fi=1e3,di=60*fi,hi=60*di,pi=3506328*hi;function vi(e,t){return(e%t+t)%t}function mi(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-pi:new Date(e,t,r).valueOf()}function yi(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-pi:Date.UTC(e,t,r)}function gi(e){var t,r;if(void 0===(e=ae(e))||"millisecond"===e||!this.isValid())return this;switch(r=this._isUTC?yi:mi,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=vi(t+(this._isUTC?0:this.utcOffset()*di),hi);break;case"minute":t=this._d.valueOf(),t-=vi(t,di);break;case"second":t=this._d.valueOf(),t-=vi(t,fi)}return this._d.setTime(t),a.updateOffset(this,!0),this}function _i(e){var t,r;if(void 0===(e=ae(e))||"millisecond"===e||!this.isValid())return this;switch(r=this._isUTC?yi:mi,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=hi-vi(t+(this._isUTC?0:this.utcOffset()*di),hi)-1;break;case"minute":t=this._d.valueOf(),t+=di-vi(t,di)-1;break;case"second":t=this._d.valueOf(),t+=fi-vi(t,fi)-1}return this._d.setTime(t),a.updateOffset(this,!0),this}function ki(){return this._d.valueOf()-6e4*(this._offset||0)}function bi(){return Math.floor(this.valueOf()/1e3)}function wi(){return new Date(this.valueOf())}function xi(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Si(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ii(){return this.isValid()?this.toISOString():null}function Ti(){return _(this)}function Oi(){return v({},g(this))}function Ei(){return g(this).overflow}function Di(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Mi(t,r){var i,o,s,u=this._eras||_r("en")._eras;for(i=0,o=u.length;i<o;++i)switch("string"===e(n)(u[i].since)&&(s=a(u[i].since).startOf("day"),u[i].since=s.valueOf()),e(n)(u[i].until)){case"undefined":u[i].until=1/0;break;case"string":s=a(u[i].until).startOf("day").valueOf(),u[i].until=s.valueOf()}return u}function Ni(e,t,r){var n,i,a,o,s,u=this.eras();for(e=e.toUpperCase(),n=0,i=u.length;n<i;++n)if(a=u[n].name.toUpperCase(),o=u[n].abbr.toUpperCase(),s=u[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(o===e)return u[n];break;case"NNNN":if(a===e)return u[n];break;case"NNNNN":if(s===e)return u[n]}else if([a,o,s].indexOf(e)>=0)return u[n]}function Ri(e,t){var r=e.since<=e.until?1:-1;return void 0===t?a(e.since).year():a(e.since).year()+(t-e.offset)*r}function Ai(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e){if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until)return n[e].name;if(n[e].until<=r&&r<=n[e].since)return n[e].name}return""}function Ci(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e){if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until)return n[e].narrow;if(n[e].until<=r&&r<=n[e].since)return n[e].narrow}return""}function Pi(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e){if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until)return n[e].abbr;if(n[e].until<=r&&r<=n[e].since)return n[e].abbr}return""}function Li(){var e,t,r,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(r=i[e].since<=i[e].until?1:-1,n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until||i[e].until<=n&&n<=i[e].since)return(this.year()-a(i[e].since).year())*r+i[e].offset;return this.year()}function Ui(e){return c(this,"_erasNameRegex")||Bi.call(this),e?this._erasNameRegex:this._erasRegex}function Yi(e){return c(this,"_erasAbbrRegex")||Bi.call(this),e?this._erasAbbrRegex:this._erasRegex}function ji(e){return c(this,"_erasNarrowRegex")||Bi.call(this),e?this._erasNarrowRegex:this._erasRegex}function Fi(e,t){return t.erasAbbrRegex(e)}function Wi(e,t){return t.erasNameRegex(e)}function Vi(e,t){return t.erasNarrowRegex(e)}function Hi(e,t){return t._eraYearOrdinalRegex||Me}function Bi(){var e,t,r=[],n=[],i=[],a=[],o=this.eras();for(e=0,t=o.length;e<t;++e)n.push(je(o[e].name)),r.push(je(o[e].abbr)),i.push(je(o[e].narrow)),a.push(je(o[e].name)),a.push(je(o[e].abbr)),a.push(je(o[e].narrow));this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}function zi(e,t){V(0,[e,e.length],0,t)}function Gi(e){return $i.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function qi(e){return $i.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ji(){return It(this.year(),1,4)}function Ki(){return It(this.isoWeekYear(),1,4)}function Zi(){var e=this.localeData()._week;return It(this.year(),e.dow,e.doy)}function Qi(){var e=this.localeData()._week;return It(this.weekYear(),e.dow,e.doy)}function $i(e,t,r,n,i){var a;return null==e?St(this,n,i).year:(t>(a=It(e,n,i))&&(t=a),Xi.call(this,e,t,r,n,i))}function Xi(e,t,r,n,i){var a=xt(e,t,r,n,i),o=bt(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function ea(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}V("N",0,0,"eraAbbr"),V("NN",0,0,"eraAbbr"),V("NNN",0,0,"eraAbbr"),V("NNNN",0,0,"eraName"),V("NNNNN",0,0,"eraNarrow"),V("y",["y",1],"yo","eraYear"),V("y",["yy",2],0,"eraYear"),V("y",["yyy",3],0,"eraYear"),V("y",["yyyy",4],0,"eraYear"),Le("N",Fi),Le("NN",Fi),Le("NNN",Fi),Le("NNNN",Wi),Le("NNNNN",Vi),We(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,r,n){var i=r._locale.erasParse(e,n,r._strict);i?g(r).era=i:g(r).invalidEra=e})),Le("y",Me),Le("yy",Me),Le("yyy",Me),Le("yyyy",Me),Le("yo",Hi),We(["y","yy","yyy","yyyy"],ze),We(["yo"],(function(e,t,r,n){var i;r._locale._eraYearOrdinalRegex&&(i=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[ze]=r._locale.eraYearOrdinalParse(e,i):t[ze]=parseInt(e,10)})),V(0,["gg",2],0,(function(){return this.weekYear()%100})),V(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),zi("gggg","weekYear"),zi("ggggg","weekYear"),zi("GGGG","isoWeekYear"),zi("GGGGG","isoWeekYear"),ie("weekYear","gg"),ie("isoWeekYear","GG"),ue("weekYear",1),ue("isoWeekYear",1),Le("G",Ne),Le("g",Ne),Le("GG",Se,ke),Le("gg",Se,ke),Le("GGGG",Ee,we),Le("gggg",Ee,we),Le("GGGGG",De,xe),Le("ggggg",De,xe),Ve(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,r,n){t[n.substr(0,2)]=de(e)})),Ve(["gg","GG"],(function(e,t,r,n){t[n]=a.parseTwoDigitYear(e)})),V("Q",0,"Qo","quarter"),ie("quarter","Q"),ue("quarter",7),Le("Q",_e),We("Q",(function(e,t){t[Ge]=3*(de(e)-1)})),V("D",["DD",2],"Do","date"),ie("date","D"),ue("date",9),Le("D",Se),Le("DD",Se,ke),Le("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),We(["D","DD"],qe),We("Do",(function(e,t){t[qe]=de(e.match(Se)[0])}));var ta=he("Date",!0);function ra(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}V("DDD",["DDDD",3],"DDDo","dayOfYear"),ie("dayOfYear","DDD"),ue("dayOfYear",4),Le("DDD",Oe),Le("DDDD",be),We(["DDD","DDDD"],(function(e,t,r){r._dayOfYear=de(e)})),V("m",["mm",2],0,"minute"),ie("minute","m"),ue("minute",14),Le("m",Se),Le("mm",Se,ke),We(["m","mm"],Ke);var na=he("Minutes",!1);V("s",["ss",2],0,"second"),ie("second","s"),ue("second",15),Le("s",Se),Le("ss",Se,ke),We(["s","ss"],Ze);var ia,aa,oa=he("Seconds",!1);for(V("S",0,0,(function(){return~~(this.millisecond()/100)})),V(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),V(0,["SSS",3],0,"millisecond"),V(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),V(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),V(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),V(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),V(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),V(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),ie("millisecond","ms"),ue("millisecond",16),Le("S",Oe,_e),Le("SS",Oe,ke),Le("SSS",Oe,be),ia="SSSS";ia.length<=9;ia+="S")Le(ia,Me);function sa(e,t){t[Qe]=de(1e3*("0."+e))}for(ia="S";ia.length<=9;ia+="S")We(ia,sa);function ua(){return this._isUTC?"UTC":""}function ca(){return this._isUTC?"Coordinated Universal Time":""}aa=he("Milliseconds",!1),V("z",0,0,"zoneAbbr"),V("zz",0,0,"zoneName");var la=S.prototype;function fa(e){return Zr(1e3*e)}function da(){return Zr.apply(null,arguments).parseZone()}function ha(e){return e}la.add=Ln,la.calendar=Bn,la.clone=zn,la.diff=$n,la.endOf=_i,la.format=ni,la.from=ii,la.fromNow=ai,la.to=oi,la.toNow=si,la.get=me,la.invalidAt=Ei,la.isAfter=Gn,la.isBefore=qn,la.isBetween=Jn,la.isSame=Kn,la.isSameOrAfter=Zn,la.isSameOrBefore=Qn,la.isValid=Ti,la.lang=ci,la.locale=ui,la.localeData=li,la.max=$r,la.min=Qr,la.parsingFlags=Oi,la.set=ye,la.startOf=gi,la.subtract=Un,la.toArray=xi,la.toObject=Si,la.toDate=wi,la.toISOString=ti,la.inspect=ri,"undefined"!=typeof Symbol&&null!=Symbol.for&&(la[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),la.toJSON=Ii,la.toString=ei,la.unix=bi,la.valueOf=ki,la.creationData=Di,la.eraName=Ai,la.eraNarrow=Ci,la.eraAbbr=Pi,la.eraYear=Li,la.year=gt,la.isLeapYear=_t,la.weekYear=Gi,la.isoWeekYear=qi,la.quarter=la.quarters=ea,la.month=dt,la.daysInMonth=ht,la.week=la.weeks=Mt,la.isoWeek=la.isoWeeks=Nt,la.weeksInYear=Zi,la.weeksInWeekYear=Qi,la.isoWeeksInYear=Ji,la.isoWeeksInISOWeekYear=Ki,la.date=ta,la.day=la.days=Gt,la.weekday=qt,la.isoWeekday=Jt,la.dayOfYear=ra,la.hour=la.hours=ar,la.minute=la.minutes=na,la.second=la.seconds=oa,la.millisecond=la.milliseconds=aa,la.utcOffset=yn,la.utc=_n,la.local=kn,la.parseZone=bn,la.hasAlignedHourOffset=wn,la.isDST=xn,la.isLocal=In,la.isUtcOffset=Tn,la.isUtc=On,la.isUTC=On,la.zoneAbbr=ua,la.zoneName=ca,la.dates=O("dates accessor is deprecated. Use date instead.",ta),la.months=O("months accessor is deprecated. Use month instead",dt),la.years=O("years accessor is deprecated. Use year instead",gt),la.zone=O("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gn),la.isDSTShifted=O("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Sn);var pa=C.prototype;function va(e,t,r,n){var i=_r(),a=m().set(n,t);return i[r](a,e)}function ma(e,t,r){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return va(e,t,r,"month");var n,i=[];for(n=0;n<12;n++)i[n]=va(e,n,r,"month");return i}function ya(e,t,r,n){"boolean"==typeof e?(d(t)&&(r=t,t=void 0),t=t||""):(r=t=e,e=!1,d(t)&&(r=t,t=void 0),t=t||"");var i,a=_r(),o=e?a._week.dow:0,s=[];if(null!=r)return va(t,(r+o)%7,n,"day");for(i=0;i<7;i++)s[i]=va(t,(i+o)%7,n,"day");return s}function ga(e,t){return ma(e,t,"months")}function _a(e,t){return ma(e,t,"monthsShort")}function ka(e,t,r){return ya(e,t,r,"weekdays")}function ba(e,t,r){return ya(e,t,r,"weekdaysShort")}function wa(e,t,r){return ya(e,t,r,"weekdaysMin")}pa.calendar=L,pa.longDateFormat=J,pa.invalidDate=Z,pa.ordinal=X,pa.preparse=ha,pa.postformat=ha,pa.relativeTime=te,pa.pastFuture=re,pa.set=R,pa.eras=Mi,pa.erasParse=Ni,pa.erasConvertYear=Ri,pa.erasAbbrRegex=Yi,pa.erasNameRegex=Ui,pa.erasNarrowRegex=ji,pa.months=st,pa.monthsShort=ut,pa.monthsParse=lt,pa.monthsRegex=vt,pa.monthsShortRegex=pt,pa.week=Tt,pa.firstDayOfYear=Dt,pa.firstDayOfWeek=Et,pa.weekdays=Wt,pa.weekdaysMin=Ht,pa.weekdaysShort=Vt,pa.weekdaysParse=zt,pa.weekdaysRegex=Kt,pa.weekdaysShortRegex=Zt,pa.weekdaysMinRegex=Qt,pa.isPM=nr,pa.meridiem=or,mr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===de(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),a.lang=O("moment.lang is deprecated. Use moment.locale instead.",mr),a.langData=O("moment.langData is deprecated. Use moment.localeData instead.",_r);var xa=Math.abs;function Sa(){var e=this._data;return this._milliseconds=xa(this._milliseconds),this._days=xa(this._days),this._months=xa(this._months),e.milliseconds=xa(e.milliseconds),e.seconds=xa(e.seconds),e.minutes=xa(e.minutes),e.hours=xa(e.hours),e.months=xa(e.months),e.years=xa(e.years),this}function Ia(e,t,r,n){var i=Mn(t,r);return e._milliseconds+=n*i._milliseconds,e._days+=n*i._days,e._months+=n*i._months,e._bubble()}function Ta(e,t){return Ia(this,e,t,1)}function Oa(e,t){return Ia(this,e,t,-1)}function Ea(e){return e<0?Math.floor(e):Math.ceil(e)}function Da(){var e,t,r,n,i,a=this._milliseconds,o=this._days,s=this._months,u=this._data;return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*Ea(Na(s)+o),o=0,s=0),u.milliseconds=a%1e3,e=fe(a/1e3),u.seconds=e%60,t=fe(e/60),u.minutes=t%60,r=fe(t/60),u.hours=r%24,o+=fe(r/24),s+=i=fe(Ma(o)),o-=Ea(Na(i)),n=fe(s/12),s%=12,u.days=o,u.months=s,u.years=n,this}function Ma(e){return 4800*e/146097}function Na(e){return 146097*e/4800}function Ra(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if("month"===(e=ae(e))||"quarter"===e||"year"===e)switch(t=this._days+n/864e5,r=this._months+Ma(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(Na(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return 24*t+n/36e5;case"minute":return 1440*t+n/6e4;case"second":return 86400*t+n/1e3;case"millisecond":return Math.floor(864e5*t)+n;default:throw new Error("Unknown unit "+e)}}function Aa(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*de(this._months/12):NaN}function Ca(e){return function(){return this.as(e)}}var Pa=Ca("ms"),La=Ca("s"),Ua=Ca("m"),Ya=Ca("h"),ja=Ca("d"),Fa=Ca("w"),Wa=Ca("M"),Va=Ca("Q"),Ha=Ca("y");function Ba(){return Mn(this)}function za(e){return e=ae(e),this.isValid()?this[e+"s"]():NaN}function Ga(e){return function(){return this.isValid()?this._data[e]:NaN}}var qa=Ga("milliseconds"),Ja=Ga("seconds"),Ka=Ga("minutes"),Za=Ga("hours"),Qa=Ga("days"),$a=Ga("months"),Xa=Ga("years");function eo(){return fe(this.days()/7)}var to=Math.round,ro={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function no(e,t,r,n,i){return i.relativeTime(t||1,!!r,e,n)}function io(e,t,r,n){var i=Mn(e).abs(),a=to(i.as("s")),o=to(i.as("m")),s=to(i.as("h")),u=to(i.as("d")),c=to(i.as("M")),l=to(i.as("w")),f=to(i.as("y")),d=a<=r.ss&&["s",a]||a<r.s&&["ss",a]||o<=1&&["m"]||o<r.m&&["mm",o]||s<=1&&["h"]||s<r.h&&["hh",s]||u<=1&&["d"]||u<r.d&&["dd",u];return null!=r.w&&(d=d||l<=1&&["w"]||l<r.w&&["ww",l]),(d=d||c<=1&&["M"]||c<r.M&&["MM",c]||f<=1&&["y"]||["yy",f])[2]=t,d[3]=+e>0,d[4]=n,no.apply(null,d)}function ao(e){return void 0===e?to:"function"==typeof e&&(to=e,!0)}function oo(e,t){return void 0!==ro[e]&&(void 0===t?ro[e]:(ro[e]=t,"s"===e&&(ro.ss=t-1),!0))}function so(e,t){if(!this.isValid())return this.localeData().invalidDate();var r,n,i=!1,a=ro;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(a=Object.assign({},ro,t),null!=t.s&&null==t.ss&&(a.ss=t.s-1)),n=io(this,!i,a,r=this.localeData()),i&&(n=r.pastFuture(+this,n)),r.postformat(n)}var uo=Math.abs;function co(e){return(e>0)-(e<0)||+e}function lo(){if(!this.isValid())return this.localeData().invalidDate();var e,t,r,n,i,a,o,s,u=uo(this._milliseconds)/1e3,c=uo(this._days),l=uo(this._months),f=this.asSeconds();return f?(e=fe(u/60),t=fe(e/60),u%=60,e%=60,r=fe(l/12),l%=12,n=u?u.toFixed(3).replace(/\.?0+$/,""):"",i=f<0?"-":"",a=co(this._months)!==co(f)?"-":"",o=co(this._days)!==co(f)?"-":"",s=co(this._milliseconds)!==co(f)?"-":"",i+"P"+(r?a+r+"Y":"")+(l?a+l+"M":"")+(c?o+c+"D":"")+(t||e||u?"T":"")+(t?s+t+"H":"")+(e?s+e+"M":"")+(u?s+n+"S":"")):"P0D"}var fo=un.prototype;return fo.isValid=on,fo.abs=Sa,fo.add=Ta,fo.subtract=Oa,fo.as=Ra,fo.asMilliseconds=Pa,fo.asSeconds=La,fo.asMinutes=Ua,fo.asHours=Ya,fo.asDays=ja,fo.asWeeks=Fa,fo.asMonths=Wa,fo.asQuarters=Va,fo.asYears=Ha,fo.valueOf=Aa,fo._bubble=Da,fo.clone=Ba,fo.get=za,fo.milliseconds=qa,fo.seconds=Ja,fo.minutes=Ka,fo.hours=Za,fo.days=Qa,fo.weeks=eo,fo.months=$a,fo.years=Xa,fo.humanize=so,fo.toISOString=lo,fo.toString=lo,fo.toJSON=lo,fo.locale=ui,fo.localeData=li,fo.toIsoString=O("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",lo),fo.lang=ci,V("X",0,0,"unix"),V("x",0,0,"valueOf"),Le("x",Ne),Le("X",Ce),We("X",(function(e,t,r){r._d=new Date(1e3*parseFloat(e))})),We("x",(function(e,t,r){r._d=new Date(de(e))})),
//! moment.js
a.version="2.29.4",o(Zr),a.fn=la,a.min=en,a.max=tn,a.now=rn,a.utc=m,a.unix=fa,a.months=ga,a.isDate=h,a.locale=mr,a.invalid=k,a.duration=Mn,a.isMoment=I,a.weekdays=ka,a.parseZone=da,a.localeData=_r,a.isDuration=cn,a.monthsShort=_a,a.weekdaysMin=wa,a.defineLocale=yr,a.updateLocale=gr,a.locales=kr,a.weekdaysShort=ba,a.normalizeUnits=ae,a.relativeTimeRounding=ao,a.relativeTimeThreshold=oo,a.calendarFormat=Hn,a.prototype=la,a.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},a}()})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("jLIpX",(function(e,r){function n(){var e=document.querySelector(".search-form__icon-search"),t=document.querySelector(".search"),r=document.querySelector(".search-form__button");e.addEventListener("click",(function(e){e.stopPropagation(),t.classList.add("search--active")})),r.addEventListener("click",(function(){t.classList.remove("search--active")}))}t(e.exports,"searchInputAnimation",(function(){return n}))})),a.register("cs7FV",(function(e,r){function n(){var e=a("gnsaF"),t=(e.disableBodyScroll,e.enableBodyScroll,document.querySelector(".js-menu-container")),r=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=function(){var n="true"===r.getAttribute("aria-expanded")||!1;r.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),e[n?"enableBodyScroll":"disableBodyScroll"](document.body)};r.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(t.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),e.enableBodyScroll(document.body))}))}t(e.exports,"oNmobileMenu",(function(){return n}))})),a.register("gnsaF",(function(e,r){t(e.exports,"disableBodyScroll",(function(){return m})),t(e.exports,"clearAllBodyScrollLocks",(function(){return y})),t(e.exports,"enableBodyScroll",(function(){return g}));var n=!1;if("undefined"!=typeof window){var i={get passive(){n=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=[],s=!1,u=-1,c=void 0,l=void 0,f=void 0,d=function(e){return o.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},h=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)},v=function(){if(void 0!==l){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=l.position,document.body.style.top=l.top,document.body.style.left=l.left,window.scrollTo(t,e),l=void 0}},m=function(e,t){if(e){if(!o.some((function(t){return t.targetElement===e}))){var r={targetElement:e,options:t||{}};o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o),[r]),a?window.requestAnimationFrame((function(){if(void 0===l){l={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,r=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-r,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===f){var t=!!e&&!0===e.reserveScrollBarGap,r=window.innerWidth-document.documentElement.clientWidth;if(t&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);f=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(t),a&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var r=e.targetTouches[0].clientY-u;!d(e.target)&&(t&&0===t.scrollTop&&r>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&r<0?h(e):e.stopPropagation())}(t,e)},s||(document.addEventListener("touchmove",h,n?{passive:!1}:void 0),s=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},y=function(){a&&(o.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),s=!1),u=-1),a?v():p(),o=[]},g=function(e){e?(o=o.filter((function(t){return t.targetElement!==e})),a&&(e.ontouchstart=null,e.ontouchmove=null,s&&0===o.length&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),s=!1)),a?v():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),a.register("5ZJZA",(function(r,n){t(r.exports,"monitorAuthState",(function(){return y}));var i=a("bpxeT"),o=a("2TvXO"),s=a("75lqP");a("gQOBw");var u=a("bsAey");a("gQOBw");u=a("bsAey");var c=a("5xtVg");a("2xDiJ");var l=document.querySelector(".order-form");l.addEventListener("submit",(function(e){return v.apply(this,arguments)})),document.getElementById("register-button").addEventListener("click",(function(){return p.apply(this,arguments)}));var f=document.querySelector(".loginState"),d=document.querySelector(".button-authorization"),h=document.getElementById("modal-error-message-area");function p(){return(p=e(i)(e(o).mark((function t(){var r,n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.email.value.trim(),n=l.password.value,i=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,n.match(i)){e.next=9;break}return h.textContent="A password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter.",h.classList.contains("modal-err-message")&&h.classList.remove("modal-err-message"),h.classList.contains("modal-ok-message")&&h.classList.remove("modal-ok-message"),h.classList.add("modal-err-message"),e.abrupt("return");case 9:(0,u.a5)(s.auth,r,n).then((function(e){e.user&&(0,u.ab)(s.auth.currentUser).then((function(){h.textContent="Email verification sent.",console.log("Email verification sent!"),h.classList.contains("modal-err-message")&&h.classList.remove("modal-err-message"),h.classList.contains("modal-ok-message")&&h.classList.remove("modal-ok-message"),h.classList.add("modal-ok-message")}))})).catch((function(e){var t=e.code,r=e.message;console.log(t),console.log(r),h.textContent=r}));case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=e(i)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n=r.target.email.value,i=r.target.password.value,e.prev=3,e.next=6,(0,u.a6)(s.auth,n,i).then((function(e){e.user&&((0,c.toggleModal)(),l.reset(),h.textContent="")}));case 6:e.sent,e.next=16;break;case 9:e.prev=9,e.t0=e.catch(3),h.textContent="Wrong email or password. Please, try again.",console.log(e.t0.message),h.classList.contains("modal-err-message")&&h.classList.remove("modal-err-message"),h.classList.contains("modal-ok-message")&&h.classList.remove("modal-ok-message"),h.classList.add("modal-err-message");case 16:case"end":return e.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function m(e){f.innerHTML="<p>".concat(e.email,"</p>")}function y(){return g.apply(this,arguments)}function g(){return(g=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.v)(s.auth,(function(e){e?(d.textContent="Logout",m(e)):(d.textContent="Log In",f.innerHTML="")}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,u,"next",e)}function u(e){r(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new E(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return M()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var _={};u(_,a,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(D([])));b&&b!==r&&n.call(b,a)&&(_=b);var w=g.prototype=m.prototype=Object.create(_);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function D(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=g,u(w,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(S.prototype),u(S.prototype,o,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=D,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("75lqP",(function(e,r){t(e.exports,"auth",(function(){return s})),a("fkNhc");var n=a("MjY8E");a("gQOBw");var i=a("bsAey"),o=(0,n.initializeApp)({apiKey:"AIzaSyBSt5AK9ankO22Qk0ytWWjzBr4utQCOgH8",authDomain:"fir-test-4ec8b.firebaseapp.com",projectId:"fir-test-4ec8b",storageBucket:"fir-test-4ec8b.appspot.com",messagingSenderId:"941413940221",appId:"1:941413940221:web:19b2f749a8bacf86113794"}),s=(0,i.n)(o)})),a.register("fkNhc",(function(e,r){t(e.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),t(e.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.18.0","app")})),a.register("MjY8E",(function(r,n){t(r.exports,"_registerComponent",(function(){return T})),t(r.exports,"_getProvider",(function(){return O})),t(r.exports,"SDK_VERSION",(function(){return N})),t(r.exports,"initializeApp",(function(){return R})),t(r.exports,"getApp",(function(){return A})),t(r.exports,"registerVersion",(function(){return C}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),d=a("kZfxc"),h=a("2xDiJ"),p=a("ajgRO"),v=(h=a("2xDiJ"),function(){"use strict";function t(r){e(o)(this,t),this.container=r}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}());var m,y,g="@firebase/app",_="0.9.5",k=new(0,d.Logger)("@firebase/app"),b="[DEFAULT]",w=(m={},e(u)(m,g,"fire-core"),e(u)(m,"@firebase/app-compat","fire-core-compat"),e(u)(m,"@firebase/analytics","fire-analytics"),e(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(m,"@firebase/app-check","fire-app-check"),e(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(m,"@firebase/auth","fire-auth"),e(u)(m,"@firebase/auth-compat","fire-auth-compat"),e(u)(m,"@firebase/database","fire-rtdb"),e(u)(m,"@firebase/database-compat","fire-rtdb-compat"),e(u)(m,"@firebase/functions","fire-fn"),e(u)(m,"@firebase/functions-compat","fire-fn-compat"),e(u)(m,"@firebase/installations","fire-iid"),e(u)(m,"@firebase/installations-compat","fire-iid-compat"),e(u)(m,"@firebase/messaging","fire-fcm"),e(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(m,"@firebase/performance","fire-perf"),e(u)(m,"@firebase/performance-compat","fire-perf-compat"),e(u)(m,"@firebase/remote-config","fire-rc"),e(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(m,"@firebase/storage","fire-gcs"),e(u)(m,"@firebase/storage-compat","fire-gcs-compat"),e(u)(m,"@firebase/firestore","fire-fst"),e(u)(m,"@firebase/firestore-compat","fire-fst-compat"),e(u)(m,"fire-js","fire-js"),e(u)(m,"firebase","fire-js-all"),m),x=new Map,S=new Map;function I(e,t){try{e.container.addComponent(t)}catch(r){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function T(e){var t=e.name;if(S.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;S.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=x.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){I(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function O(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E=(y={},e(u)(y,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(u)(y,"bad-app-name","Illegal App name: '{$appName}"),e(u)(y,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(y,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(y,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(y,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(y,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(y,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(y,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(y,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(y,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),y),D=new(0,h.ErrorFactory)("app","Firebase",E),M=function(){"use strict";function t(r,n,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}]),t}(),N="9.18.0";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw D.create("bad-app-name",{appName:String(a)});if(r||(r=(0,h.getDefaultAppConfig)()),!r)throw D.create("no-options");var o=x.get(a);if(o){if((0,h.deepEqual)(r,o.options)&&(0,h.deepEqual)(i,o.config))return o;throw D.create("duplicate-app",{appName:a})}var s=new(0,f.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var d,p=S.values()[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var v=d.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var m=new M(r,i,s);return x.set(a,m),m}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=x.get(e);if(!t&&e===b)return R();if(!t)throw D.create("no-app",{appName:e});return t}function C(e,t,r){var n,i=null!==(n=w[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}T(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P="firebase-heartbeat-store",L=null;function U(){return L||(L=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(P)}}).catch((function(e){throw D.create("idb-open",{originalErrorMessage:e.message})}))),L}function Y(e){return j.apply(this,arguments)}function j(){return(j=e(i)(e(l).mark((function t(r){var n,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return n=e.sent,e.abrupt("return",n.transaction(P).objectStore(P).get(V(r)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof h.FirebaseError?k.warn(e.t0.message):(i=D.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function F(e,t){return W.apply(this,arguments)}function W(){return(W=e(i)(e(l).mark((function t(r,n){var i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return i=e.sent,a=i.transaction(P,"readwrite"),o=a.objectStore(P),e.next=8,o.put(n,V(r));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof h.FirebaseError?k.warn(e.t0.message):(s=D.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function V(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H=function(){"use strict";function t(r){var n=this;e(o)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(l).mark((function r(){var n,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=B(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(l).mark((function r(){var n,i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=B(),i=z(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,h.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function B(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),J(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),J(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var G,q=function(){"use strict";function t(r){e(o)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,h.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,h.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Y(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(i)(e(l).mark((function n(){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",F(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(i)(e(l).mark((function n(){var i,a;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",F(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(c)(a.heartbeats).concat(e(c)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function J(e){return(0,h.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G="",T(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,f.Component)("heartbeat",(function(e){return new H(e)}),"PRIVATE")),C(g,_,G),C(g,_,"esm2017"),C("fire-js","")})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||o.default(e)||i.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("6ExWU",(function(r,n){t(r.exports,"Component",(function(){return d})),t(r.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),d=function(){"use strict";function t(r,n,i){e(o)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),h="[DEFAULT]",p=function(){"use strict";function t(r,n){e(o)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new(0,f.Deferred);if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:h})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});l.resolve(d)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(l).mark((function r(){var n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(c)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(c)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var d=e(u)(l.value,2),h=d[0],p=d[1],v=this.normalizeInstanceIdentifier(h);i===v&&p.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===h?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.component?this.component.multipleInstances?e:h:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var v=function(){"use strict";function t(r){e(o)(this,t),this.name=r,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||o.default(e,t)||i.default()};var r=s(a("8slrw")),n=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(n,i){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return y})),t(n.exports,"base64Decode",(function(){return g})),t(n.exports,"getDefaultEmulatorHost",(function(){return b})),t(n.exports,"getDefaultAppConfig",(function(){return w})),t(n.exports,"getExperimentalSetting",(function(){return x})),t(n.exports,"Deferred",(function(){return S})),t(n.exports,"getUA",(function(){return I})),t(n.exports,"isMobileCordova",(function(){return T})),t(n.exports,"isBrowserExtension",(function(){return O})),t(n.exports,"isReactNative",(function(){return E})),t(n.exports,"isIE",(function(){return D})),t(n.exports,"isIndexedDBAvailable",(function(){return M})),t(n.exports,"validateIndexedDBOpenable",(function(){return N})),t(n.exports,"FirebaseError",(function(){return R})),t(n.exports,"ErrorFactory",(function(){return A})),t(n.exports,"isEmpty",(function(){return L})),t(n.exports,"deepEqual",(function(){return U})),t(n.exports,"querystring",(function(){return j})),t(n.exports,"querystringDecode",(function(){return F})),t(n.exports,"extractQuerystring",(function(){return W})),t(n.exports,"createSubscribe",(function(){return V})),t(n.exports,"getModularInstance",(function(){return z}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),f=(a("8nrFW"),a("4c7YB")),d=a("2MbLg"),h=a("6qd2L"),p=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new m;var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},m=function(t){"use strict";e(c)(n,t);var r=e(d)(n);function n(){var t;return e(s)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return n}(e(f)(Error)),y=function(e){return function(e){var t=p(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},k=function(){try{return _()||function(){if(void 0!==h&&void 0!==h.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&g(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},b=function(e){var t,r;return null===(r=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},w=function(){var e;return null===(e=k())||void 0===e?void 0:e.config},x=function(e){var t;return null===(t=k())||void 0===t?void 0:t["_".concat(e)]},S=function(){"use strict";function t(){var r=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(u)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function O(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function D(){var e=I();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function M(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=function(t){"use strict";e(c)(n,t);var r=e(d)(n);function n(t,i,a){var u;return e(s)(this,n),(u=r.call(this,i)).code=t,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(e(o)(u),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(o)(u),A.prototype.create),u}return n}(e(f)(Error)),A=function(){"use strict";function t(r,n,i){e(s)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(u)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?C(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new R(a,u,i);return c}}]),t}();function C(e,t){return e.replace(P,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Y(l)&&Y(f)){if(!U(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function Y(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(l)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function F(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(l)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function W(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){var r=new H(e,t);return r.subscribe.bind(r)}var H=function(){"use strict";function t(r,n){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(u)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=B),void 0===n.error&&(n.error=B),void 0===n.complete&&(n.complete=B);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var r=s(a("ge8co")),n=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!n.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return r.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(r,n){t(r.exports,"LogLevel",(function(){return i})),t(r.exports,"Logger",(function(){return y})),t(r.exports,"setLogLevel",(function(){return g})),t(r.exports,"setUserLogHandler",(function(){return _}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var d,h={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},p=i.INFO,v=(d={},e(c)(d,i.DEBUG,"log"),e(c)(d,i.VERBOSE,"log"),e(c)(d,i.INFO,"info"),e(c)(d,i.WARN,"warn"),e(c)(d,i.ERROR,"error"),d),m=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=v[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},y=function(){"use strict";function t(r){e(s)(this,t),this.name=r,this._logLevel=p,this._logHandler=m,this._userLogHandler=null,f.push(this)}return e(u)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?h[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(e(l)(r))),this._logHandler.apply(this,[this,i.DEBUG].concat(e(l)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(e(l)(r))),this._logHandler.apply(this,[this,i.VERBOSE].concat(e(l)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(e(l)(r))),this._logHandler.apply(this,[this,i.INFO].concat(e(l)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(e(l)(r))),this._logHandler.apply(this,[this,i.WARN].concat(e(l)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(e(l)(r))),this._logHandler.apply(this,[this,i.ERROR].concat(e(l)(r)))}}]),t}();function g(e){f.forEach((function(t){t.setLogLevel(e)}))}function _(e,t){var r=!0,n=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=null;t&&t.level&&(c=h[t.level]),u.userLogHandler=null===e?null:function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=c?c:t.logLevel)&&e({level:i[r].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){n=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}}})),a.register("ajgRO",(function(r,n){t(r.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],h=new Map;function p(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(h.get(r))return h.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,o=d.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(n))){var c,l=(c=e(i)(e(u).mark((function t(r){var i,c,l,f,d,h,p=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=p[l];return d=this.transaction(r,o?"readwrite":"readonly"),h=d.store,a&&(h=h.index(c.shift())),t.next=7,Promise.all([(f=h)[n].apply(f,e(s)(c)),o&&d.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return c.apply(this,arguments)});return h.set(r,l),l}}}(0,c.r)((function(t){return e(o)({},t,{get:function(e,r,n){return p(e,r)||t.get(e,r,n)},has:function(e,r){return!!p(e,r)||t.has(e,r)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=a("hKHmD"))&&r.__esModule?r:{default:r}})),a.register("kKOTz",(function(r,n){t(r.exports,"w",(function(){return y})),t(r.exports,"r",(function(){return p}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;var h={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return y(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){h=e(h)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(g(this),r),y(u.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return y(t.apply(g(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,u=(o=t).call.apply(o,[g(this),r].concat(e(s)(i)));return l.set(u,r.sort?r.sort():[r]),y(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,h):e);var t}function y(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(y(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(r,t),r;var t,r;if(f.has(e))return f.get(e);var n=m(e);return n!==e&&(f.set(e,n),d.set(n,e)),n}var g=function(e){return d.get(e)}})),a.register("gQOBw",(function(e,r){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("bsAey").a5})),t(e.exports,"sendEmailVerification",(function(){return a("bsAey").ab})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("bsAey").a6})),t(e.exports,"onAuthStateChanged",(function(){return a("bsAey").v})),t(e.exports,"getAuth",(function(){return a("bsAey").n})),a("eMcUM")})),a.register("eMcUM",(function(e,r){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("bsAey").a5})),t(e.exports,"getAuth",(function(){return a("bsAey").n})),t(e.exports,"onAuthStateChanged",(function(){return a("bsAey").v})),t(e.exports,"sendEmailVerification",(function(){return a("bsAey").ab})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("bsAey").a6})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("bsAey")})),a.register("bsAey",(function(r,n){t(r.exports,"a5",(function(){return Vt})),t(r.exports,"a6",(function(){return Bt})),t(r.exports,"ab",(function(){return zt})),t(r.exports,"v",(function(){return Kt})),t(r.exports,"n",(function(){return Ln}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),d=a("eYQtU"),h=a("1t1Wn"),p=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),y=a("2xDiJ"),g=a("MjY8E"),_=a("kZfxc"),k=a("4tSb9"),b=a("6ExWU");function w(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var x=w,S=new(0,y.ErrorFactory)("auth","Firebase",w()),I=new(0,_.Logger)("@firebase/auth");function T(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;I.logLevel<=_.LogLevel.ERROR&&(a=I).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(t)].concat(e(p)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw M.apply(void 0,[t].concat(e(p)(n)))}function E(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return M.apply(void 0,[t].concat(e(p)(n)))}function D(t,r,n){var i=Object.assign(Object.assign({},x()),e(c)({},r,n));return new(0,y.ErrorFactory)("auth","Firebase",i).create(r,{appName:t.name})}function M(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(p)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(p)(u)))}return(a=S).create.apply(a,[t].concat(e(p)(n)))}function N(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw M.apply(void 0,[r].concat(e(p)(i)))}function R(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function A(e,t){e||R(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C=new Map;function P(e){A(e instanceof Function,"Expected a class definition");var t=C.get(e);return t?(A(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,C.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){var r=(0,g._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if((0,y.deepEqual)(i,null!=t?t:{}))return n;O(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Y(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=function(){"use strict";function t(r,n){e(s)(this,t),this.shortDelay=r,this.longDelay=n,A(n>r,"Short delay should be less than long delay!"),this.isMobile=(0,y.isMobileCordova)()||(0,y.isReactNative)()}return e(u)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Y()||(0,y.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){A(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V,H=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void R("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void R("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void R("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),B=(V={},e(c)(V,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(V,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(V,"INVALID_IDENTIFIER","invalid-email"),e(c)(V,"MISSING_CONTINUE_URI","internal-error"),e(c)(V,"INVALID_PASSWORD","wrong-password"),e(c)(V,"MISSING_PASSWORD","internal-error"),e(c)(V,"EMAIL_EXISTS","email-already-in-use"),e(c)(V,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(V,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(V,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(V,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(V,"MISSING_REQ_TYPE","internal-error"),e(c)(V,"EMAIL_NOT_FOUND","user-not-found"),e(c)(V,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(V,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(V,"INVALID_OOB_CODE","invalid-action-code"),e(c)(V,"MISSING_OOB_CODE","internal-error"),e(c)(V,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(V,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(V,"TOKEN_EXPIRED","user-token-expired"),e(c)(V,"USER_NOT_FOUND","user-token-expired"),e(c)(V,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(V,"INVALID_CODE","invalid-verification-code"),e(c)(V,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(V,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(V,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(V,"SESSION_EXPIRED","code-expired"),e(c)(V,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(V,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(V,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(V,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(V,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(V,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(V,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(V,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(V,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(V,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(V,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),V),z=new F(3e4,6e4);function G(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function q(e,t,r,n){return J.apply(this,arguments)}function J(){return J=e(o)(e(m).mark((function t(r,n,i,a){var s,u=arguments;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",K(r,s,e(o)(e(m).mark((function t(){var o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),u=(0,y.querystring)(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",H.fetch()(X(r,r.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}function K(e,t,r){return Z.apply(this,arguments)}function Z(){return(Z=e(o)(e(m).mark((function t(r,n,i){var a,o,s,u,c,l,f,d,p;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},B),n),t.prev=2,o=new ee(r),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw te(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(h)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw te(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw te(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw te(r,"user-disabled",u);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw D(r,p,d);case 34:O(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof y.FirebaseError)){t.next=41;break}throw t.t0;case 41:O(r,"internal-error",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Q(e,t,r,n){return $.apply(this,arguments)}function $(){return $=e(o)(e(m).mark((function t(r,n,i,a){var o,s,u=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,q(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&O(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),$.apply(this,arguments)}function X(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?W(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function t(r){var n=this;e(s)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(E(r.auth,"network-request-failed"))}),z.get())}))}return e(u)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function te(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=E(e,t,n);return i.customData._tokenResponse=r,i}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ie(e,t){return ae.apply(this,arguments)}function ae(){return(ae=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return se=e(o)(e(m).mark((function t(r){var n,i,a,o,s,u,c=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=(0,y.getModularInstance)(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,N((o=ce(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:oe(ue(o.auth_time)),issuedAtTime:oe(ue(o.iat)),expirationTime:oe(ue(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),se.apply(this,arguments)}function ue(e){return 1e3*Number(e)}function ce(t){var r=e(h)(t.split("."),3),n=r[0],i=r[1],a=r[2];if(void 0===n||void 0===i||void 0===a)return T("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,y.base64Decode)(i);return o?JSON.parse(o):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function le(e,t){return fe.apply(this,arguments)}function fe(){return fe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){var i=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof y.FirebaseError&&de(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),fe.apply(this,arguments)}function de(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function t(r){e(s)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(u)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}}]),t}(),pe=function(){"use strict";function t(r,n){e(s)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(u)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r){var n,i,a,o,s,u,c,l,f,d,h;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,le(r,ie(i,{idToken:a}));case 7:N(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?_e(s.providerUserInfo):[],c=ge(r.providerData,u),l=r.isAnonymous,f=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new pe(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(r,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ye(){return(ye=e(o)(e(m).mark((function t(r){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,y.getModularInstance)(r),e.next=3,ve(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ge(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(p)(n).concat(e(p)(r))}function _e(e){return e.map((function(e){var t=e.providerId,r=(0,k.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function ke(e,t){return be.apply(this,arguments)}function be(){return(be=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){var i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(r,{},e(o)(e(m).mark((function t(){var i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,y.querystring)({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,u=X(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",H.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(u)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){N(e.idToken,"internal-error"),N(void 0!==e.idToken,"internal-error"),N(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,N(r=ce(t),"internal-error"),N(void 0!==r.exp,"internal-error"),N(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(o)(e(m).mark((function i(){var a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(t,r);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return R("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(N("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(N("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(N("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t){N("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Se=function(){"use strict";function t(r){e(s)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=(0,k.__rest)(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(p)(o.providerData):[],this.metadata=new pe(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(u)(t,[{key:"getIdToken",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(N(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return se.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ye.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var r=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}},{key:"_onReload",value:function(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(m).mark((function i(){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,ve(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,le(t,re(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=r.createdAt)&&void 0!==c?c:void 0,g=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,_=r.uid,k=r.emailVerified,b=r.isAnonymous,w=r.providerData,x=r.stsTokenManager;N(_&&x,e,"internal-error");var S=we.fromJSON(this.name,x);N("string"==typeof _,e,"internal-error"),xe(f,e.name),xe(d,e.name),N("boolean"==typeof k,e,"internal-error"),N("boolean"==typeof b,e,"internal-error"),xe(h,e.name),xe(p,e.name),xe(v,e.name),xe(m,e.name),xe(y,e.name),xe(g,e.name);var I=new t({uid:_,auth:e,email:d,emailVerified:k,displayName:f,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:S,createdAt:y,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(e(m).mark((function a(){var o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new we).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),e.next=5,ve(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Ie=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(u)(t,[{key:"_isAvailable",value:function(){return e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.type="NONE";var Te=Ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Ee=function(){"use strict";function t(r,n,i){e(s)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Oe(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oe("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(u)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?Se._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(o)(e(m).mark((function a(){var s,u,c,l,f,d,h,p,v,y,g,_,k;return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(P(Te),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(o)(e(m).mark((function t(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||P(Te),c=Oe(i,r.config.apiKey,r.name),l=null,f=!0,d=!1,h=void 0,a.prev=9,p=n[Symbol.iterator]();case 11:if(f=(v=p.next()).done){a.next=29;break}return y=v.value,a.prev=13,a.next=16,y._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return _=Se._fromJSON(r,g),y!==u&&(l=_),u=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,h=a.t1;case 35:a.prev=35,a.prev=36,f||null==p.return||p.return();case 38:if(a.prev=38,!d){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new t(u,r,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(o)(e(m).mark((function t(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ae(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pe(t))return"Blackberry";if(Le(t))return"Webos";if(Ne(t))return"Safari";if((t.includes("chrome/")||Re(t))&&!t.includes("edge/"))return"Chrome";if(Ce(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/firefox\//i.test(e)}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/crios\//i.test(e)}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/iemobile/i.test(e)}function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/android/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/blackberry/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ye(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,y.isIE)()&&10===document.documentMode}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getUA)();return Ue(e)||Ce(e)||Le(e)||Pe(e)||/windows phone/i.test(e)||Ae(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=De((0,y.getUA)());break;case"Worker":t="".concat(De((0,y.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve=function(){"use strict";function t(r){e(s)(this,t),this.auth=r,this.queue=[]}return e(u)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a,o,s,u,c,l,f,d,h,p,v,y;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=r.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){e.next=15;break}return l=c.value,e.next=11,l(t);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,h=void 0,e.prev=35,p=i[Symbol.iterator]();!(f=(v=p.next()).done);f=!0){y=v.value;try{y()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,h=e.t2;case 43:e.prev=43,e.prev=44,f||null==p.return||p.return();case 46:if(e.prev=46,!d){e.next=49;break}throw h;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),He=function(){"use strict";function t(r,n,i){e(s)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ze(this),this.idTokenSubscription=new ze(this),this.beforeStateQueue=new Ve(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(u)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=P(r));var n=this;return this._initializationPromise=this.queue(e(o)(e(m).mark((function i(){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ee.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return N(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 9:return e.abrupt("return",r.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?(0,y.getModularInstance)(t):null)&&N(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&N(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(P(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,y.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(o)(e(m).mark((function i(){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return N(i=t&&P(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,Ee.create(r,[P(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a;return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=We(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n,i,a;return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return(0,y.getModularInstance)(e)}var ze=function(){"use strict";function t(r){var n=this;e(s)(this,t),this.auth=r,this.observer=null,this.addObserver=(0,y.createSubscribe)((function(e){return n.observer=e}))}return e(u)(t,[{key:"next",get:function(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Ge(t,r,n){var i=Be(t);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=qe(r),s=function(t){var r=qe(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Je(i.substr(o.length+1))}}var s=e(h)(i.split(":"),2);return{host:s[0],port:Je(s[1])}}(r),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function qe(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Je(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Ke=function(){"use strict";function t(r,n){e(s)(this,t),this.providerId=r,this.signInMethod=n}return e(u)(t,[{key:"toJSON",value:function(){return R("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return R("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return R("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return R("not implemented")}}]),t}();function Ze(e,t){return Qe.apply(this,arguments)}function Qe(){return(Qe=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $e(e,t){return Xe.apply(this,arguments)}function Xe(){return(Xe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithPassword",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(r,"POST","/v1/accounts:sendOobCode",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",et(r,n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function it(e,t){return at.apply(this,arguments)}function at(){return(at=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithEmailLink",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ot(e,t){return st.apply(this,arguments)}function st(){return(st=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithEmailLink",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(u)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",$e(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",it(t,{email:r._email,oobCode:r._password}));case 5:O(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ze(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",ot(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:O(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Ke);function ct(e,t){return lt.apply(this,arguments)}function lt(){return(lt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithIdp",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){var t;return e(s)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(u)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ct(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,ct(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,y.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):O("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=(0,k.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Ke);function dt(e,t){return ht.apply(this,arguments)}function ht(){return(ht=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(r,"POST","/v1/accounts:sendVerificationCode",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function pt(){return(pt=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vt(){return(vt=e(o)(e(m).mark((function t(r,n){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var mt=e(c)({},"USER_NOT_FOUND","user-not-found");function yt(){return(yt=e(o)(e(m).mark((function t(r,n){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Q(r,"POST","/v1/accounts:signInWithPhoneNumber",G(r,i),mt));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t){var i;return e(s)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(u)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return pt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return vt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return yt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Ke);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(){"use strict";function t(r){var n,i,a,o,u,c;e(s)(this,t);var l=(0,y.querystringDecode)((0,y.extractQuerystring)(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);N(f&&d&&h,"argument-error"),this.apiKey=f,this.operation=h,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(u)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=(0,y.querystringDecode)((0,y.extractQuerystring)(e)).link,r=t?(0,y.querystringDecode)((0,y.extractQuerystring)(t)).deep_link_id:null,n=(0,y.querystringDecode)((0,y.extractQuerystring)(e)).deep_link_id;return(n?(0,y.querystringDecode)((0,y.extractQuerystring)(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kt=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(u)(t,null,[{key:"credential",value:function(e,t){return ut._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=_t.parseLink(t);return N(r,"argument-error"),ut._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();kt.PROVIDER_ID="password",kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=function(){"use strict";function t(r){e(s)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(u)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),wt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){var t;return e(s)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(u)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),n}(bt),xt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){return e(s)(this,n),r.call(this,"facebook.com")}return e(u)(n,null,[{key:"credential",value:function(e){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(wt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){var t;return e(s)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(u)(n,null,[{key:"credential",value:function(e,t){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(wt);St.GOOGLE_SIGN_IN_METHOD="google.com",St.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){return e(s)(this,n),r.call(this,"github.com")}return e(u)(n,null,[{key:"credential",value:function(e){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(wt);It.GITHUB_SIGN_IN_METHOD="github.com",It.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){return e(s)(this,n),r.call(this,"twitter.com")}return e(u)(n,null,[{key:"credential",value:function(e,t){return ft._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(wt);function Ot(e,t){return Et.apply(this,arguments)}function Et(){return(Et=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(r,"POST","/v1/accounts:signUp",G(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.TWITTER_SIGN_IN_METHOD="twitter.com",Tt.PROVIDER_ID="twitter.com";var Dt=function(){"use strict";function t(r){e(s)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(u)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(o)(e(m).mark((function o(){var s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se._fromIdTokenResponse(r,i,a);case 2:return s=e.sent,u=Mt(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:n}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return e(o)(e(m).mark((function a(){var o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=Mt(i),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Mt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t,a,o,u){var c,l;return e(s)(this,n),(c=r.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(e(i)(c),n.prototype),c.customData={appName:t.name,tenantId:null!==(l=t.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return e(u)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(y.FirebaseError);function Rt(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Nt._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){return Ct.apply(this,arguments)}function Ct(){return Ct=e(o)(e(m).mark((function t(r,n){var i,a,o=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=le,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Dt._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),Ct.apply(this,arguments)}function Pt(e,t){return Lt.apply(this,arguments)}function Lt(){return Lt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){var i,a,o,s,u,c,l=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=r.auth,o="reauthenticate",e.prev=3,e.next=6,le(r,Rt(a,o,n,r),i);case 6:return N((s=e.sent).idToken,a,"internal-error"),N(u=ce(s.idToken),a,"internal-error"),c=u.sub,N(r.uid===c,a,"user-mismatch"),e.abrupt("return",Dt._forOperation(r,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&O(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Lt.apply(this,arguments)}function Ut(e,t){return Yt.apply(this,arguments)}function Yt(){return Yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r,n){var i,a,o,s,u=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Rt(r,a,n);case 4:return o=e.sent,e.next=7,Dt._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Yt.apply(this,arguments)}function jt(e,t){return Ft.apply(this,arguments)}function Ft(){return(Ft=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ut(Be(r),n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t,r){var n;N((null===(n=r.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),N(void 0===r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(N(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(N(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}function Vt(e,t,r){return Ht.apply(this,arguments)}function Ht(){return(Ht=e(o)(e(m).mark((function t(r,n,i){var a,o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Be(r),e.next=3,Ot(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,Dt._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bt(e,t,r){return jt((0,y.getModularInstance)(e),kt.credential(t,r))}function zt(e,t){return Gt.apply(this,arguments)}function Gt(){return(Gt=e(o)(e(m).mark((function t(r,n){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,y.getModularInstance)(r),e.next=3,r.getIdToken();case 3:return a=e.sent,o={requestType:"VERIFY_EMAIL",idToken:a},n&&Wt(i.auth,o,n),e.next=8,rt(i.auth,o);case 8:if(e.sent.email===r.email){e.next=12;break}return e.next=12,r.reload();case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qt(e,t,r,n){return(0,y.getModularInstance)(e).onIdTokenChanged(t,r,n)}function Jt(e,t,r){return(0,y.getModularInstance)(e).beforeAuthStateChanged(t,r)}function Kt(e,t,r,n){return(0,y.getModularInstance)(e).onAuthStateChanged(t,r,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:start",G(e,t))}new WeakMap;var Qt="__sak",$t=function(){"use strict";function t(r,n){e(s)(this,t),this.storageRetriever=r,this.type=n}return e(u)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Qt,"1"),this.storage.removeItem(Qt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){var t,i;return e(s)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Ne(i=(0,y.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Fe(),t._shouldAllowMigration=!0,t}return e(u)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);je()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(o)(e(m).mark((function o(){return e(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(l)(e(f)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(o)(e(m).mark((function a(){var o;return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(n.prototype),"_get",r).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(o)(e(m).mark((function a(){return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}($t);Xt.type="LOCAL";var er=Xt,tr=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(){return e(s)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(u)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}($t);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr.type="SESSION";var rr=tr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return Promise.all(t.map((r=e(o)(e(m).mark((function t(r){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir=function(){"use strict";function t(r){e(s)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(u)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a,s,u,c,l,f,d;return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=r.handlersMap[u])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var t=e(o)(e(m).mark((function t(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,nr(f);case 9:d=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.receivers=[];var or=function(){"use strict";function t(r){e(s)(this,t),this.target=r,this.handlers=new Set}return e(u)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(o)(e(m).mark((function a(){var o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=ar("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ur(){return void 0!==sr().WorkerGlobalScope&&"function"==typeof sr().importScripts}function cr(){return lr.apply(this,arguments)}function lr(){return(lr=e(o)(e(m).mark((function t(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fr="firebaseLocalStorageDb",dr="firebaseLocalStorage",hr="fbase_key",pr=function(){"use strict";function t(r){e(s)(this,t),this.request=r}return e(u)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function vr(e,t){return e.transaction([dr],t?"readwrite":"readonly").objectStore(dr)}function mr(){var e=indexedDB.deleteDatabase(fr);return new pr(e).toPromise()}function yr(){var t=indexedDB.open(fr,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(dr,{keyPath:hr})}catch(e){n(e)}})),t.addEventListener("success",e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(dr)){e.next=12;break}return i.close(),e.next=5,mr();case 5:return e.t0=r,e.next=8,yr();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function gr(e,t,r){return _r.apply(this,arguments)}function _r(){return(_r=e(o)(e(m).mark((function t(r,n,i){var a,o;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=vr(r,!0).put((a={},e(c)(a,hr,n),e(c)(a,"value",i),a)),t.abrupt("return",new pr(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function kr(e,t){return br.apply(this,arguments)}function br(){return(br=e(o)(e(m).mark((function t(r,n){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=vr(r,!1).get(n),e.next=3,new pr(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wr(e,t){var r=vr(e,!0).delete(t);return new pr(r).toPromise()}var xr=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(u)(t,[{key:"_openDb",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,yr();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=ir._getInstance(ur()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(o)(e(m).mark((function r(n,i){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(o)(e(m).mark((function t(r,n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n,i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,cr();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new or(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(o)(e(m).mark((function t(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,yr();case 5:return r=e.sent,e.next=8,gr(r,Qt,"1");case 8:return e.next=10,wr(r,Qt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return gr(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return kr(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return wr(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n,i,a,o,s,u,c,l,f,d,h,p,v,y,g,_,k;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=vr(e,!1).getAll();return new pr(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,d=f.fbase_key,h=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(h)&&(t.notifyListeners(d,h),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,v=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(_=g.next()).done);p=!0)k=_.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,y=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!v){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();xr.type="LOCAL";var Sr=xr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:start",G(e,t))}function Tr(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=E("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function Or(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Or("rcb"),new F(3e4,6e4);var Er="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e,t,r){return Mr.apply(this,arguments)}function Mr(){return(Mr=e(o)(e(m).mark((function t(r,n,i){var a,o,s,u,c,l,f,d;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,N("string"==typeof o,r,"argument-error"),N(i.type===Er,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return N("enroll"===u.type,r,"internal-error"),e.next=15,Zt(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return N("signin"===u.type,r,"internal-error"),N(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ir(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,dt(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nr=function(){"use strict";function t(r){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Be(r)}return e(u)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Dr(this.auth,e,(0,y.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return gt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?gt._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(e,t){return t?P(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr.PROVIDER_ID="phone",Nr.PHONE_SIGN_IN_METHOD="phone";var Ar=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t){var i;return e(s)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(u)(n,[{key:"_getIdTokenResponse",value:function(e){return ct(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ct(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ct(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Ke);function Cr(e){return Ut(e.auth,new Ar(e),e.bypassAuthState)}function Pr(e){var t=e.auth,r=e.user;return N(r,t,"internal-error"),Pt(r,new Ar(e),e.bypassAuthState)}function Lr(e){return Ur.apply(this,arguments)}function Ur(){return(Ur=e(o)(e(m).mark((function t(r){var n,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,N(i=r.user,n,"internal-error"),e.abrupt("return",At(i,new Ar(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(u)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(o)(e(m).mark((function t(n,i){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return l={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cr;case"linkViaPopup":case"linkViaRedirect":return Lr;case"reauthViaPopup":case"reauthViaRedirect":return Pr;default:O(this.auth,"internal-error")}}},{key:"resolve",value:function(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){A(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),jr=new F(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t,a,o,u,c){var l;return e(s)(this,n),(l=r.call(this,t,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(i)(l),l}return e(u)(n,[{key:"executeNotNull",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return N(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(1===t.filter.length,"Popup operations only handle one event"),n=ar(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(E(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(E(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(E(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,jr.get())};t()}}]),n}(Yr);Fr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wr=new Map,Vr=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(u)(n,[{key:"execute",value:function(){var t=this,r=this;return e(o)(e(m).mark((function i(){var a,o;return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Wr.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Hr(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(l)(e(f)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Wr.set(r.auth._key(),a);case 21:return r.bypassAuthState||Wr.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(l)(e(f)(n.prototype),"onAuthEvent",r)};return e(o)(e(m).mark((function r(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(Yr);function Hr(e,t){return Br.apply(this,arguments)}function Br(){return(Br=e(o)(e(m).mark((function t(r,n){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=qr(n),a=Gr(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zr(e,t){Wr.set(e._key(),t)}function Gr(e){return P(e._redirectPersistence)}function qr(e){return Oe("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t){return Kr.apply(this,arguments)}function Kr(){return Kr=e(o)(e(m).mark((function t(r,n){var i,a,o,s,u,c=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Be(r),o=Rr(a,n),s=new Vr(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Kr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zr=function(){"use strict";function t(r){e(s)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(u)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $r(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!$r(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(E(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Qr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function $r(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Xr(e){return en.apply(this,arguments)}function en(){return en=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(r){var n,i=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",q(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),en.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rn=/^https?/;function nn(){return(nn=e(o)(e(m).mark((function t(r){var n,i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Xr(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!an(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:O(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function an(e){var t=U(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!rn.test(n))return!1;if(tn.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on=new F(3e4,6e4);function sn(){var t=sr().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var un=null;function cn(e){return un=un||function(e){return new Promise((function(t,r){var n,i,a;function o(){sn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){sn(),r(E(e,"network-request-failed"))},timeout:on.get()})}if(null===(i=null===(n=sr().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=sr().gapi)||void 0===a?void 0:a.load)){var s=Or("iframefcb");return sr()[s]=function(){gapi.load?o():r(E(e,"network-request-failed"))},Tr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw un=null,e}))}(e),un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln=new F(5e3,15e3),fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hn(e){var t=e.config;N(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?W(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=dn.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat((0,y.querystring)(n).slice(1))}function pn(e){return vn.apply(this,arguments)}function vn(){return vn=e(o)(e(m).mark((function t(r){var n,i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,cn(r);case 2:return n=t.sent,N(i=sr().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:hn(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fn,dontclear:!0},(function(t){return new Promise((n=e(o)(e(m).mark((function n(i,a){var o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){sr().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=E(r,"network-request-failed"),s=sr().setTimeout((function(){a(o)}),ln.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),vn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yn="_blank",gn="http://localhost",_n=function(){"use strict";function t(r){e(s)(this,t),this.window=r,this.associatedEvent=null}return e(u)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function kn(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},mn),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,y.getUA)().toLowerCase();n&&(u=Re(l)?yn:n),Me(l)&&(r=r||gn,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(h)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Ye(l)&&"_self"!==u)return bn(r||"",u),new _n(null);var d=window.open(r||"",u,f);N(d,t,"popup-blocked");try{d.focus()}catch(e){}return new _n(d)}function bn(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn="__/auth/handler",xn="emulator/auth/handler";function Sn(t,r,n,i,a,o){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:g.SDK_VERSION,eventId:a};if(r instanceof bt){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",(0,y.isEmpty)(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=e(h)(f.value,2),v=p[0],m=p[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof wt){var _=r.getScopes().filter((function(e){return""!==e}));_.length>0&&(s.scopes=_.join(","))}t.tenantId&&(s.tid=t.tenantId);var k,b,w=s,x=!0,S=!1,I=void 0;try{for(var T,O=Object.keys(w)[Symbol.iterator]();!(x=(T=O.next()).done);x=!0){var E=T.value;void 0===w[E]&&delete w[E]}}catch(e){S=!0,I=e}finally{try{x||null==O.return||O.return()}finally{if(S)throw I}}return"".concat((k=t,b=k.config,b.emulator?W(b,xn):"https://".concat(b.authDomain,"/").concat(wn)),"?").concat((0,y.querystring)(w).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var In="webStorageSupport",Tn=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rr,this._completeRedirectFn=Jr,this._overrideRedirectResult=zr}return e(u)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(o)(e(m).mark((function o(){var s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Sn(t,r,n,U(),i),e.abrupt("return",kn(t,u,ar()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(o)(e(m).mark((function o(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Sn(t,r,n,U(),i),sr().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(A(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pn(t);case 2:return i=e.sent,a=new Zr(t),i.register("authEvent",(function(e){return N(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(In,{type:In},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),O(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return nn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Fe()||Ne()||Ue()}}]),t}(),On=Tn,En=function(t){"use strict";e(d)(n,t);var r=e(v)(n);function n(t){var i;return e(s)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(u)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(s)(this,t),this.factorId=r}return e(u)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return R("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertion",value:function(e){return En._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Dn="@firebase/auth",Mn="0.21.5",Nn=function(){"use strict";function t(r){e(s)(this,t),this.auth=r,this.internalListeners=new Map}return e(u)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(o)(e(m).mark((function n(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rn,An=(0,y.getExperimentalSetting)("authIdTokenMaxAge")||300,Cn=null,Pn=function(t){return r=e(o)(e(m).mark((function r(n){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>An)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,Cn!==o){e.next=12;break}return e.abrupt("return");case 12:return Cn=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),r)}))),function(e){return r.apply(this,arguments)};var r};function Ln(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var r=L(e,{popupRedirectResolver:On,persistence:[Sr,er,rr]}),n=(0,y.getExperimentalSetting)("authTokenSyncURL");if(n){var i=Pn(n);Jt(r,i,(function(){return i(r.currentUser)})),qt(r,(function(e){return i(e)}))}var a=(0,y.getDefaultEmulatorHost)("auth");return a&&Ge(r,"http://".concat(a)),r}Rn="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){N(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),N(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Rn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:We(Rn)},i=new He(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(P);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=Be(e.getProvider("auth").getImmediate());return new Nn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(Dn,Mn,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Rn)),(0,g.registerVersion)(Dn,Mn,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return i(e,t,r)};var r,n=(r=a("2mz0K"))&&r.__esModule?r:{default:r};function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=n.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(r||e):a.value}})(e,t,r)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a.register("4tSb9",(function(e,r){t(e.exports,"__rest",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create})),a.register("5xtVg",(function(r,n){t(r.exports,"toggleModal",(function(){return c}));var i=a("bpxeT"),o=a("2TvXO"),s=a("75lqP"),u={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn2:document.querySelector("[data-modal-open2]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function c(){u.modal.classList.toggle("is-hidden")}function l(){"Logout"===u.openModalBtn.textContent?function(){f.apply(this,arguments)}():c()}function f(){return(f=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.auth.signOut();case 2:e.sent;case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}u.openModalBtn.addEventListener("click",l),u.openModalBtn2.addEventListener("click",l),u.closeModalBtn.addEventListener("click",(function(){c(),document.getElementById("modal-error-message-area").textContent="",document.querySelector(".order-form").reset()}))}))}();
//# sourceMappingURL=favorite.c06278ba.js.map
