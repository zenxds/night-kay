/*! 2018-10-31 11:08:42 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["react","react-router-dom"],e):"object"==typeof exports?exports.nightKay=e(require("react"),require("react-router-dom")):t.nightKay=e(t.react,t["react-router-dom"])}(window,function(t,e){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){t.exports=n(3).default},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=c(this,l(e).call(this,t,n))).state={mod:null},o}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r.a.Component),n=e,(o=[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){var t=this,e=this.props.bundle;e.prototype instanceof r.a.Component?this.setState({mod:e}):e(function(e){t.setState({mod:e.default||e})})}},{key:"render",value:function(){var t=this.state.mod,e=this.props,n=e.match,o=e.location,i=e.history;return t?r.a.createElement(t,{match:n,location:o,history:i}):null}}])&&u(n.prototype,o),i&&u(n,i),e}();var s=document.head||document.getElementsByTagName("head")[0];function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g,O,w,j=(g=function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.timeout=e.timeout||2e4,e.hour&&(t+=t.indexOf("?")>0?"&":"?",t+="t=".concat(Math.floor(new Date/36e5))),new Promise(function(n,o){var r=document.createElement("script");function i(){r.onreadystatechange=r.onload=null,s.removeChild(r),r=null,n()}r.charset="utf-8",r.async=!0,r.crossOrigin="anonymous","onload"in r?r.onload=i:r.onreadystatechange=function(){/loaded|complete/.test(r.readyState)&&i()},"onerror"in r&&(r.onerror=o),setTimeout(function(){o(new Error("timeout"))},e.timeout),r.src=t,s.appendChild(r)})}(t)},w={},O=O||function(t){return t},function(){var t=O.apply(void 0,arguments),e=w[t];if(e)return e;var n=g.apply(void 0,arguments);return n.then(function(){w[t]=n}),n}),_=function(t){function e(t,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=m(this,b(e).call(this,t,n))).state={routes:t.application.routes||[]},o}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,r.a.Component),n=e,(o=[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){var t=this,e=this.props.application,n=e.entry;n&&j(n).then(function(){t.setState({routes:e.routes||[]})})}},{key:"render",value:function(){var t=this.state.routes,e=this.props,n=e.match,o=e.application;return t.length?r.a.createElement("div",{className:"night-kay-app night-kay-app-".concat(o.name)},t.map(function(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"{1,}","g");return t.join(e).replace(n,e)}([n.path,t.path]);return r.a.createElement(i.Route,{key:t.path,path:e,exact:!!t.exact,render:function(e){return r.a.createElement(p,h({},e,{bundle:t.component}))}})})):null}}])&&d(n.prototype,o),a&&d(n,a),e}();function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var k=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.applications=[],this.applicationMap={},this.modules={},this.permission=null}var e,n,o;return e=t,(n=[{key:"registerApplication",value:function(t,e){this.applicationMap[t]?console.warn("application ".concat(t," has been registered")):(e.name=t,this.applicationMap[t]=e,this.applications.push(e))}},{key:"getApplication",value:function(t){return this.applicationMap[t]}},{key:"registerRoutes",value:function(t,e){var n=this.getApplication(t);n?n.routes=e:console.warn("application ".concat(t," not found"))}},{key:"registerModule",value:function(t,e){this.modules[t]?console.warn("module ".concat(t," has been registered")):this.modules[t]=e}},{key:"getModule",value:function(t){return this.modules[t]}},{key:"routes",value:function(){var t=this.applications.map(function(t){return r.a.createElement(i.Route,{key:t.name,path:t.path,exact:!!t.exact,render:function(e){return r.a.createElement(_,S({},e,{application:t}))}})});return t}}])&&x(e.prototype,n),o&&x(e,o),t}();e.default=new k}])});