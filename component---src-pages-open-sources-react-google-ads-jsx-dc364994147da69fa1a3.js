(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1204:function(t,n,e){var r;t.exports=(r=e(2),function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),u=e(7),i=r(u),a=r(e(5)),c=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,u.PureComponent),o(n,[{key:"componentDidMount",value:function(){var t,n,e,r,o;n="script",r=e=(t=document).getElementsByTagName(n)[0],o=e,(o=t.createElement(n)).id="google-ads-sdk",o.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",r.parentNode.insertBefore(o,r),o.onload=function(){(adsbygoogle=window.adsbygoogle||[]).push({})}}},{key:"render",value:function(){return i.default.createElement("ins",{className:"adsbygoogle "+this.props.className,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,style:this.props.style,"data-ad-format":this.props.format})}}]),n}();c.propTypes={client:a.default.string.isRequired,slot:a.default.string.isRequired,format:a.default.string,className:a.default.string,style:a.default.object},c.defaultProps={format:"auto",className:"",style:{display:"block"}},n.default=c},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(e(0));n.default=r.default},function(t,n,e){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,n,e){"use strict";t.exports=function(t,n,e,r,o,u,i,a){if(!t){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[e,r,o,u,i,a],f=0;(c=new Error(n.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,n,e){"use strict";var r=e(2),o=e(3),u=e(6);t.exports=function(){function t(t,n,e,r,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return e.checkPropTypes=r,e.PropTypes=e,e}},function(t,n,e){t.exports=e(4)()},function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){t.exports=r}]))},443:function(t,n,e){"use strict";e.r(n),e.d(n,"GoogleAdsQuery",function(){return h});var r=e(2),o=e.n(r),u=e(1),i=e.n(u),a=e(465),c=e(472),s=e.n(c),f=e(1204),l=e.n(f),p=e(526),d=e(478),y=e(483),m=(e(482),function(t){var n=t.historyGoBack;return o.a.createElement(y.a,null,o.a.createElement(s.a,null,o.a.createElement("title",null,"WONISM | REACT GOOGLE ADS"),o.a.createElement("meta",{name:"og:title",content:"WONISM | REACT GOOGLE ADS"})),o.a.createElement(p.Repository,{username:"wonism",repos:"react-google-ads"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(l.a,{client:"ca-pub-9697962278873792",slot:"4491507809",style:{display:"inline-block",width:"100%"}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:n},"← Go back"),o.a.createElement("br",null),o.a.createElement("br",null))});m.propTypes={historyGoBack:i.a.func.isRequired},n.default=Object(a.b)(function(){return{}},{historyGoBack:d.c})(m);var h="** extracted graphql fragment **"},467:function(t,n,e){"use strict";e.d(n,"c",function(){return r}),e.d(n,"e",function(){return o}),e.d(n,"d",function(){return u}),e.d(n,"g",function(){return i}),e.d(n,"j",function(){return a}),e.d(n,"l",function(){return c}),e.d(n,"k",function(){return s}),e.d(n,"f",function(){return f}),e.d(n,"h",function(){return l}),e.d(n,"a",function(){return p}),e.d(n,"i",function(){return d}),e.d(n,"b",function(){return y});var r="HISTORY_GO_BACK",o="HISTORY_GO_BACK_SUCCESS",u="HISTORY_GO_BACK_FAILED",i="NAVIGATE_TO_PATH",a="PRINT",c="PRINT_SUCCESS",s="PRINT_FAILED",f="INPUT_KEYWORD",l="OPEN_MENU",p="CLOSE_MENU",d="OPEN_SUB_MENU",y="CLOSE_SUB_MENU"},478:function(t,n,e){"use strict";e.d(n,"c",function(){return o}),e.d(n,"e",function(){return u}),e.d(n,"h",function(){return i}),e.d(n,"d",function(){return a}),e.d(n,"f",function(){return c}),e.d(n,"a",function(){return s}),e.d(n,"g",function(){return f}),e.d(n,"b",function(){return l});var r=e(467),o=function(){return function(t){return t({type:r.c})}},u=function(t){return function(n){return n({type:r.g,path:t})}},i=function(){return function(t){return t({type:r.j})}},a=function(t){return function(n){return n({type:r.f,input:t})}},c=function(){return function(t){return t({type:r.h})}},s=function(){return function(t){return t({type:r.a})}},f=function(){return function(t){return t({type:r.i})}},l=function(){return function(t){return t({type:r.b})}}},482:function(t,n,e){},483:function(t,n,e){"use strict";var r=e(456),o=e.n(r),u=e(458),i=o()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 1176px;\n  min-height: 100vh;\n  text-align: center;\n  @media (max-width: 414px) {\n    padding: 70px 16px 0;\n  }\n\n  article {\n    font-size: 16px;\n    text-align: left;\n  }\n\n  .map {\n    margin: auto;\n    width: 320px;\n    max-width: 100%;\n    height: 320px;\n  }\n\n  a * {\n    cursor: pointer;\n  }\n"]),a=u.a.div(i);n.a=a}}]);
//# sourceMappingURL=component---src-pages-open-sources-react-google-ads-jsx-dc364994147da69fa1a3.js.map