"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[663],{2464:function(t,r,e){e.d(r,{aO:function(){return h},cg:function(){return v},z9:function(){return p}});var n=e(2861);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(){c=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(O){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var p={};function v(){}function y(){}function d(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&e.call(w,a)&&(m=w);var b=d.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function i(n,a,c,u){var s=h(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){i(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function k(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=l(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),l(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,s,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}var l=function(t,r,e,n,o){return Number(t.books.totalItems)-Number(r)-Number(e)<0&&(console.log(Number(t.books.totalItems)-Number(e)),r="".concat(Number(t.books.totalItems)-Number(e))),{maxResultsApi:"&maxResults=".concat(r),startIndexApi:"&startIndex=".concat(e),setCategory:function(){return n?"+subject:".concat(n):""},orderByApi:"&orderBy=".concat(o)}},f=function(){var t=s(c().mark((function t(r,e,o,i,a,u){var s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=l(e,a,u,i,o),t.next=3,n.Z.get("https://www.googleapis.com/books/v1/volumes?q="+"".concat(r)+"".concat(s.setCategory())+"".concat(s.orderByApi)+"".concat(s.maxResultsApi)+"".concat(s.startIndexApi)+"&key=".concat("AIzaSyBGsfkXWsf_vXKf3SrvDmjByo0XQ3LvZuM"));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(r,e,n,o,i,a){return t.apply(this,arguments)}}(),h=function(){var t=s(c().mark((function t(r,e){var n,o,i,a,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=u.length>2&&void 0!==u[2]?u[2]:"relevance",o=u.length>3&&void 0!==u[3]?u[3]:"",i=u.length>4&&void 0!==u[4]?u[4]:"10",a=u.length>5&&void 0!==u[5]?u[5]:"0";try{e.setIsLoading(!0),e.setBooks({}),f(r,e,n,o,i,a).then((function(t){e.setBooks(t.data),e.setIsLoading(!1)}))}catch(c){console.log(c)}case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),p=function(){var t=s(c().mark((function t(r,e){var n,o,a,u,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=s.length>2&&void 0!==s[2]?s[2]:"relevance",o=s.length>3&&void 0!==s[3]?s[3]:"",a=s.length>4&&void 0!==s[4]?s[4]:"10",u=s.length>5&&void 0!==s[5]?s[5]:"10";try{e.setIsLoading(!0),Number(e.books.totalItems)-Number(u)>0?f(r,e,n,o,a,u).then((function(t){t.data.items=[].concat(i(e.books.items),i(t.data.items)),e.setBookChangeList(t.data),e.setStartIndexFetchApi("".concat(Number(e.startIndexFetchApi)+Number(a))),e.setIsLoading(!1)})):e.setIsLoading(!1)}catch(c){console.log(c)}case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),v=function(){var t=s(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.Z.get("https://www.googleapis.com/books/v1/volumes/\n            ".concat(r,"?key=AIzaSyBGsfkXWsf_vXKf3SrvDmjByo0XQ3LvZuM"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}()},8755:function(t,r,e){var n=e(7137),o=e(5893);r.Z=function(t){var r=t.className;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)(n.iT,{height:window.innerHeight/8,width:window.innerWidth/8,color:"#18c781",secondaryColor:"#56d3cc",ariaLabel:"three-dots-loading",visible:!0})})}}}]);