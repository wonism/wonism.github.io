(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1208:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var o=n(465),r=n(592),a=(n(129),n(128),n(456)),i=n.n(a),c=n(2),s=n.n(c),p=n(1),l=n.n(p),u=n(458),f=n(464),d=n.n(f),g=n(455),h=n.n(g),m=n(472),b=n.n(m),v=i()(["\n  position: relative;\n  padding: 56.25% 0 0;\n  width: 100%;\n  height: 0;\n  @media (max-width: 414px) {\n    padding: 178% 0 0;\n    padding: 100vh 0 0;\n  }\n"]),y=i()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  ","\n"]),w=u.a.section(v),x=u.a.div(y,function(e){return e.isHome?"":"padding: 100px 0 0;"}),j=function(e){var t=e.children;return s.a.createElement(w,null,s.a.createElement(x,null,t))};j.propTypes={children:l.a.oneOfType([l.a.node,l.a.element,l.a.array,l.a.string])},j.defaultProps={children:null};var O=j,E=n(527),_=n(639),k=(n(1208),i()(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 80%;\n  height: 1.5em;\n  line-height: 1.5em;\n  font-size: 48px;\n  font-size: 10vw;\n  font-family: 'Kaushan Script';\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])),S=u.a.h1(k),M=function(e){var t=e.portfolios;return[s.a.createElement(O,{key:"main",isHome:!0},s.a.createElement(S,null,"I'm Wonism!"),s.a.createElement(b.a,null,s.a.createElement("title",null,"I'm Wonism!"),s.a.createElement("meta",{name:"og:title",content:"I'm Wonism!"}))),h.a.size(t)>=4?s.a.createElement(E.a,{key:"portfolios"},h.a.flow(h.a.slice(0,4),h.a.map(function(e){var t=h.a.get("node.frontmatter")(e),o=t.path,r=t.title,a=t.images,i=h.a.isArray(a)?h.a.first(a):null;return h.a.isEmpty(i)?s.a.createElement(_.a,{key:o},s.a.createElement(d.a,{to:o},s.a.createElement("h4",null,r))):s.a.createElement(_.a,{key:o},s.a.createElement(d.a,{to:o},h.a.includes("//")(i)?s.a.createElement("img",{src:i,alt:"portfolio"}):s.a.createElement("img",{src:n(512)("./"+i),alt:"portfolio"}),s.a.createElement("h6",null,r)))}))(t)):null]};M.propTypes={portfolios:l.a.arrayOf(l.a.shape({}))},M.defaultProps={portfolios:[]};var I=M,R=Object(o.b)(function(e){return{portfolios:r.b(e)}},{})(I);t.default=R},464:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var o=d(n(131)),r=d(n(476)),a=d(n(473)),i=d(n(52)),c=d(n(83)),s=d(n(82));t.withPrefix=h;var p=d(n(2)),l=n(8),u=d(n(1)),f=n(20);function d(e){return e&&e.__esModule?e:{default:e}}var g="/";function h(e){return function(e){return e.replace(/^\/\//g,"/")}(g+e)}function m(e,t){var n=(0,f.createLocation)(e,null,null,t.location);return n.pathname=h(n.pathname),n}g="";var b={activeClassName:u.default.string,activeStyle:u.default.object,exact:u.default.bool,strict:u.default.bool,isActive:u.default.func,location:u.default.object},v=function(e){function t(n,o){(0,i.default)(this,t);var r=(0,c.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var s=o.router.history,p=m(n.to,s);return r.state={path:(0,f.createPath)(p),to:p,IOSupported:a},r.handleRef=r.handleRef.bind(r),r}return(0,s.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=m(e.to,history);this.setState({path:(0,f.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,o,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(o=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t),o.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,i=n.onClick,c=(0,a.default)(n,["onClick"]);return e=(0,r.default)(b).some(function(e){return t.props[e]})?l.NavLink:l.Link,p.default.createElement(e,(0,o.default)({onClick:function(e){if(i&&i(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(o);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},c,{to:this.state.to,innerRef:this.handleRef}))},t}(p.default.Component);v.propTypes=(0,o.default)({},b,{innerRef:u.default.func,onClick:u.default.func,to:u.default.oneOfType([u.default.string,u.default.object]).isRequired}),v.contextTypes={router:u.default.object},t.default=v,t.navigateTo=function(e){window.___navigateTo(e)}},469:function(e,t,n){n(475),e.exports=n(16).Object.keys},473:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},474:function(e,t,n){var o=n(31),r=n(16),a=n(30);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},475:function(e,t,n){var o=n(84),r=n(39);n(474)("keys",function(){return function(e){return r(o(e))}})},476:function(e,t,n){e.exports={default:n(469),__esModule:!0}},484:function(e,t,n){e.exports=n.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},485:function(e,t,n){e.exports=n.p+"static/render-tree-bda36e3a36482fd9bbdeeeee38cbc63b.png"},486:function(e,t,n){e.exports=n.p+"static/dom-6bc80600eaf0bde39f33603a01c3634a.png"},487:function(e,t,n){e.exports=n.p+"static/cssom-05c44fa5586b8bab18091e543f7a06f4.png"},489:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "resume"\n| title: "Resume"')},490:function(e,t,n){e.exports=n.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},491:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Korbit"')},492:function(e,t,n){e.exports=n.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},493:function(e,t,n){e.exports=n.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},494:function(e,t,n){e.exports=n.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},495:function(e,t,n){e.exports=n.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},496:function(e,t,n){e.exports=n.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},497:function(e,t,n){e.exports=n.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},498:function(e,t,n){e.exports=n.p+"static/ide-e14d045a1802dd57eae29e8d0543ac1b.jpg"},499:function(e,t,n){e.exports=n.p+"static/fp-d67e3bc7ef3b19e943f220e76fc30af6.jpg"},500:function(e,t,n){e.exports=n.p+"static/browser-beb2a01cf264084bc7641b3b746a4578.jpg"},501:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Goodoc"')},502:function(e,t,n){e.exports=n.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},503:function(e,t,n){e.exports=n.p+"static/2-c960320e42670dc45aec9d373358879d.png"},504:function(e,t,n){e.exports=n.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},505:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Ciceron"')},506:function(e,t,n){e.exports=n.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},507:function(e,t,n){e.exports=n.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},508:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Camscon"')},509:function(e,t,n){e.exports=n.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},510:function(e,t,n){e.exports=n.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},511:function(e,t,n){e.exports=n.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},512:function(e,t,n){var o={"./camscon/1.png":511,"./camscon/2.png":510,"./camscon/3.png":509,"./camscon/index.md":508,"./ciceron/1.png":507,"./ciceron/2.png":506,"./ciceron/index.md":505,"./goodoc/1.png":504,"./goodoc/2.png":503,"./goodoc/3.png":502,"./goodoc/index.md":501,"./images/browser.jpg":500,"./images/fp.jpg":499,"./images/ide.jpg":498,"./images/js.jpg":497,"./images/posts/critical-rendering-path/cssom.png":487,"./images/posts/critical-rendering-path/dom.png":486,"./images/posts/critical-rendering-path/render-tree.png":485,"./images/reactjs.jpg":496,"./images/redux.jpg":495,"./images/rxjs.jpg":494,"./korbit/1.png":493,"./korbit/2.png":492,"./korbit/index.md":491,"./logo.png":490,"./me.jpg":484,"./resume/index.md":489};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=512},527:function(e,t,n){"use strict";var o=n(456),r=n.n(o),a=n(458),i=r()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]),c=a.a.div(i);t.a=c},547:function(e,t,n){"use strict";function o(e,t){return e===t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e(t[r],n[r]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];var i=0,c=o.pop(),s=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(o),p=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(n)),l=r(function(){for(var e=[],t=s.length,n=0;n<t;n++)e.push(s[n].apply(null,arguments));return p.apply(null,e)});return l.resultFunc=c,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=a,t.createStructuredSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})};var i=t.createSelector=a(r)},592:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return f});var o=n(547),r=n(455),a=n.n(r),i=a.a.get("app"),c=(Object(o.createSelector)(i,a.a.get("isProduction")),Object(o.createSelector)(i,a.a.get("isTickerBarOpened")),Object(o.createSelector)(i,a.a.get("searchKeyword"))),s=Object(o.createSelector)(i,a.a.get("categories")),p=Object(o.createSelector)(i,a.a.get("postInformations")),l=Object(o.createSelector)(i,a.a.get("portfolios")),u=Object(o.createSelector)(i,a.a.get("isMenuOpened")),f=Object(o.createSelector)(i,a.a.get("isSubMenuOpened"))},639:function(e,t,n){"use strict";var o=n(456),r=n.n(o),a=n(458),i=r()(["\n  display: inline-block;\n  position: relative;\n  float: left;\n  padding: 28.125% 0 0;\n  width: 50%;\n  height: 0;\n  background-color: #eee;\n  overflow: hidden;\n  @media (max-width: 414px) {\n    padding: 56.25% 0 0;\n    width: 100%;\n  }\n\n  &:nth-child(4n + 2),\n  &:nth-child(4n + 3) {\n    background-color: #fff;\n  }\n\n  &:hover {\n    img {\n      width: 110%;\n    }\n\n    h4 {\n      font-size: 2.2vw;\n    }\n  }\n\n  a {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #000;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n    transition: all .4s ease 0s;\n  }\n\n  h6 {\n    position: absolute;\n    bottom: 16px;\n    left: 16px;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n\n  h4 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 80%;\n    height: 2em;\n    line-height: 2em;\n    font-size: 2vw;\n    text-align: center;\n    transition: all .4s ease 0s;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]),c=a.a.section(i);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-e67f64a8061a75d75841.js.map