(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1176:function(t,e,n){var r;t.exports=(r=n(2),function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(7),i=r(u),a=r(n(5)),c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.PureComponent),o(e,[{key:"componentDidMount",value:function(){var t,e,n,r,o;e="script",r=n=(t=document).getElementsByTagName(e)[0],o=n,(o=t.createElement(e)).id="google-ads-sdk",o.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",r.parentNode.insertBefore(o,r),o.onload=function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},{key:"render",value:function(){return i.default.createElement("ins",{className:"adsbygoogle "+this.props.className,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,style:this.props.style,"data-ad-format":this.props.format})}}]),e}();c.propTypes={client:a.default.string.isRequired,slot:a.default.string.isRequired,format:a.default.string,className:a.default.string,style:a.default.object},c.defaultProps={format:"auto",className:"",style:{display:"block"}},e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=r.default},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,u,i,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,u,i,a],f=0;(c=new Error(e.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,e,n){"use strict";var r=n(2),o=n(3),u=n(6);t.exports=function(){function t(t,e,n,r,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){t.exports=n(4)()},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=r}]))},436:function(t,e,n){"use strict";n.r(e),n.d(e,"GoogleAdsQuery",function(){return h});var r=n(2),o=n.n(r),u=n(1),i=n.n(u),a=n(458),c=n(470),s=n.n(c),f=n(1176),l=n.n(f),p=n(517),d=n(469),y=n(475),m=(n(474),function(t){var e=t.historyGoBack;return o.a.createElement(y.a,null,o.a.createElement(s.a,null,o.a.createElement("title",null,"WONISM | React Google Ads"),o.a.createElement("meta",{name:"og:title",content:"WONISM | React Google Ads"})),o.a.createElement(p.Repository,{username:"wonism",repos:"react-google-ads"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.a,{client:"ca-pub-9697962278873792",slot:"4491507809",style:{display:"inline-block",width:"100%"}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:e},"← Go back"),o.a.createElement("br",null),o.a.createElement("br",null))});m.propTypes={historyGoBack:i.a.func.isRequired},e.default=Object(a.b)(function(){return{}},{historyGoBack:d.c})(m);var h="** extracted graphql fragment **"},460:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"e",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"g",function(){return i}),n.d(e,"j",function(){return a}),n.d(e,"l",function(){return c}),n.d(e,"k",function(){return s}),n.d(e,"f",function(){return f}),n.d(e,"h",function(){return l}),n.d(e,"a",function(){return p}),n.d(e,"i",function(){return d}),n.d(e,"b",function(){return y});var r="HISTORY_GO_BACK",o="HISTORY_GO_BACK_SUCCESS",u="HISTORY_GO_BACK_FAILED",i="NAVIGATE_TO_PATH",a="PRINT",c="PRINT_SUCCESS",s="PRINT_FAILED",f="INPUT_KEYWORD",l="OPEN_MENU",p="CLOSE_MENU",d="OPEN_SUB_MENU",y="CLOSE_SUB_MENU"},469:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"h",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"a",function(){return s}),n.d(e,"g",function(){return f}),n.d(e,"b",function(){return l});var r=n(460),o=function(){return function(t){return t({type:r.c})}},u=function(t){return function(e){return e({type:r.g,path:t})}},i=function(){return function(t){return t({type:r.j})}},a=function(t){return function(e){return e({type:r.f,input:t})}},c=function(){return function(t){return t({type:r.h})}},s=function(){return function(t){return t({type:r.a})}},f=function(){return function(t){return t({type:r.i})}},l=function(){return function(t){return t({type:r.b})}}},474:function(t,e,n){},475:function(t,e,n){"use strict";var r=n(448),o=n.n(r),u=n(450),i=o()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 1176px;\n  text-align: center;\n\n  @media (max-width: 414px) {\n    padding: 70px 16px 0;\n  }\n\n  article {\n    font-size: 16px;\n    text-align: left;\n  }\n\n  .map {\n    margin: auto;\n    width: 320px;\n    max-width: 100%;\n    height: 320px;\n  }\n\n  a * {\n    cursor: pointer;\n  }\n"]),a=u.a.div(i);e.a=a}}]);
//# sourceMappingURL=component---src-pages-open-sources-react-google-ads-jsx-4f6db29109187bcd0d9d.js.map