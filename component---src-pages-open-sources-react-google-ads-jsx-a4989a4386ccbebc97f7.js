(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1730:function(e,t,n){var r;e.exports=(r=n(1731),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7),a=r(u),i=r(n(5)),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.PureComponent),o(t,[{key:"componentDidMount",value:function(){var e,t,n,r,o;t="script",r=n=(e=document).getElementsByTagName(t)[0],o=n,(o=e.createElement(t)).id="google-ads-sdk",o.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",r.parentNode.insertBefore(o,r),o.onload=function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},{key:"render",value:function(){return a.default.createElement("ins",{className:"adsbygoogle "+this.props.className,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,style:this.props.style,"data-ad-format":this.props.format})}}]),t}();c.propTypes={client:i.default.string.isRequired,slot:i.default.string.isRequired,format:i.default.string,className:i.default.string,style:i.default.object},c.defaultProps={format:"auto",className:"",style:{display:"block"}},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.default=r.default},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,u,a,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,u,a,i],f=0;(c=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(2),o=n(3),u=n(6);e.exports=function(){function e(e,t,n,r,a,i){i!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=r}]))},1731:function(e,t,n){"use strict";e.exports=n(1732)},1732:function(e,t,n){"use strict";
/** @license React v16.3.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(120),o=n(123),u=n(124),a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,y=a?Symbol.for("react.forward_ref"):60112,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||b}function g(){}function O(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=O.prototype=new g;_.constructor=O,r(_,v.prototype),_.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},u=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,R=[];function S(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function C(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case c:u=!0}}if(u)return n(r,e,""===t?"."+$(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+$(o=e[a],a);u+=C(o,l,n,r)}else if("function"==typeof(l=null===e||void 0===e?null:"function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null))for(e=l.call(e),a=0;!(o=e.next()).done;)u+=C(o=o.value,l=t+$(o,a++),n,r);else"object"===o&&h("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,u.thatReturnsArgument):null!=e&&(k(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n,e={$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function M(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(P,"$&/")+"/"),t=S(t,u,r,o),null==e||C(e,"",N,t),T(t)}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=S(null,null,t,n),null==e||C(e,"",A,t),T(t)},count:function(e){return null==e?0:C(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,u.thatReturnsArgument),t},only:function(e){return k(e)||h("143"),e}},createRef:function(){return{current:null}},Component:v,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:l,StrictMode:f,unstable_AsyncMode:d,createElement:E,cloneElement:function(e,t,n){var o=void 0,u=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1==(o=arguments.length-2))u.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:i,type:e.type,key:a,ref:c,props:u,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.3.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:x,assign:r}},q=Object.freeze({default:I}),B=q&&I||q;e.exports=B.default?B.default:B},452:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1),u=n(490),a=n(483),i=n.n(a),c=n(1730),l=n.n(c),f=n(575),s=n(553),p=n(486),d=n(501),y=(n(502),function(e){var t=e.historyGoBack;return Object(r.createElement)(d.a,null,Object(r.createElement)(i.a,null,Object(r.createElement)("title",null,"WONISM | REACT GOOGLE ADS"),Object(r.createElement)("meta",{name:"og:title",content:"WONISM | REACT GOOGLE ADS"})),Object(r.createElement)(f.Repository,{username:"wonism",repos:"react-google-ads"}),Object(r.createElement)("br",null),Object(r.createElement)("br",null),Object(r.createElement)(l.a,{client:"ca-pub-9697962278873792",slot:"4491507809",style:{display:"inline-block",width:"100%"}}),Object(r.createElement)("br",null),Object(r.createElement)("br",null),Object(r.createElement)("button",{onClick:t},"← Go back"),Object(r.createElement)("br",null),Object(r.createElement)("br",null))});y.propTypes={historyGoBack:o.func.isRequired};var m=Object(u.b)(function(){return{}},{historyGoBack:s.c})(y);t.default=function(e){return Object(r.createElement)(p.a,e,Object(r.createElement)(m,null))}},501:function(e,t,n){"use strict";var r=n(472),o=n.n(r);function u(){var e=o()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 1176px;\n  min-height: 100vh;\n  text-align: center;\n  @media (max-width: 1024px) {\n    padding: 70px 16px 0;\n  }\n\n  article {\n    font-size: 16px;\n    text-align: left;\n  }\n\n  .map {\n    margin: auto;\n    width: 320px;\n    max-width: 100%;\n    height: 320px;\n  }\n\n  a * {\n    cursor: pointer;\n  }\n"]);return u=function(){return e},e}var a=n(473).a.div(u());t.a=a},502:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-open-sources-react-google-ads-jsx-a4989a4386ccbebc97f7.js.map