(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1165:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var o=n(448),r=n(564),a=(n(129),n(128),n(438)),i=n.n(a),c=n(2),l=n.n(c),s=n(1),u=n.n(s),p=n(440),f=n(447),d=n.n(f),h=n(439),g=n.n(h),m=n(460),b=n.n(m),v=i()(["\n  position: relative;\n  padding: 56.25% 0 0;\n  width: 100%;\n  height: 0;\n  @media (max-width: 414px) {\n    padding: 178% 0 0;\n    padding: 100vh 0 0;\n  }\n"]),y=i()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  ","\n"]),w=p.a.section(v),x=p.a.div(y,function(e){return e.isHome?"":"padding: 100px 0 0;"}),j=function(e){var t=e.children;return l.a.createElement(w,null,l.a.createElement(x,null,t))};j.propTypes={children:u.a.oneOfType([u.a.node,u.a.element,u.a.array,u.a.string])},j.defaultProps={children:null};var O=j,E=n(503),_=n(610),k=(n(1165),i()(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 80%;\n  height: 1.5em;\n  line-height: 1.5em;\n  font-size: 48px;\n  font-size: 10vw;\n  font-family: 'Kaushan Script';\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])),S=p.a.h1(k),M=function(e){var t=e.portfolios;return[l.a.createElement(O,{key:"main",isHome:!0},l.a.createElement(S,null,"I'm Wonism!"),l.a.createElement(b.a,null,l.a.createElement("title",null,"I'm Wonism!"),l.a.createElement("meta",{name:"og:title",content:"I'm Wonism!"}))),g.a.size(t)>=4?l.a.createElement(E.a,{key:"portfolios"},g.a.flow(g.a.slice(0,4),g.a.map(function(e){var t=g.a.get("node.frontmatter")(e),o=t.path,r=t.title,a=t.images,i=g.a.isArray(a)?g.a.first(a):null;return g.a.isEmpty(i)?l.a.createElement(_.a,{key:o},l.a.createElement(d.a,{to:o},l.a.createElement("h4",null,r))):l.a.createElement(_.a,{key:o},l.a.createElement(d.a,{to:o},g.a.includes("//")(i)?l.a.createElement("img",{src:i,alt:"portfolio"}):l.a.createElement("img",{src:n(489)("./"+i),alt:"portfolio"}),l.a.createElement("h6",null,r)))}))(t)):null]};M.propTypes={portfolios:u.a.arrayOf(u.a.shape({}))},M.defaultProps={portfolios:[]};var I=M,R=Object(o.b)(function(e){return{portfolios:r.b(e)}},{})(I);t.default=R},447:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var o=d(n(130)),r=d(n(457)),a=d(n(454)),i=d(n(52)),c=d(n(83)),l=d(n(82));t.withPrefix=g;var s=d(n(2)),u=n(8),p=d(n(1)),f=n(20);function d(e){return e&&e.__esModule?e:{default:e}}var h="/";function g(e){return function(e){return e.replace(/^\/\//g,"/")}(h+e)}function m(e,t){var n=(0,f.createLocation)(e,null,null,t.location);return n.pathname=g(n.pathname),n}var b={activeClassName:p.default.string,activeStyle:p.default.object,exact:p.default.bool,strict:p.default.bool,isActive:p.default.func,location:p.default.object},v=function(e){function t(n,o){(0,i.default)(this,t);var r=(0,c.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var l=o.router.history,s=m(n.to,l);return r.state={path:(0,f.createPath)(s),to:s,IOSupported:a},r.handleRef=r.handleRef.bind(r),r}return(0,l.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=m(e.to,history);this.setState({path:(0,f.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,o,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(o=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t),o.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,i=n.onClick,c=(0,a.default)(n,["onClick"]);return e=(0,r.default)(b).some(function(e){return t.props[e]})?u.NavLink:u.Link,s.default.createElement(e,(0,o.default)({onClick:function(e){if(i&&i(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(o);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},c,{to:this.state.to,innerRef:this.handleRef}))},t}(s.default.Component);v.propTypes=(0,o.default)({},b,{innerRef:p.default.func,onClick:p.default.func,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired}),v.contextTypes={router:p.default.object},t.default=v,t.navigateTo=function(e){window.___navigateTo(e)}},451:function(e,t,n){n(456),e.exports=n(16).Object.keys},454:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},455:function(e,t,n){var o=n(31),r=n(16),a=n(30);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},456:function(e,t,n){var o=n(84),r=n(39);n(455)("keys",function(){return function(e){return r(o(e))}})},457:function(e,t,n){e.exports={default:n(451),__esModule:!0}},464:function(e,t,n){e.exports=n.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},465:function(e,t,n){e.exports=n.p+"static/render-tree-bda36e3a36482fd9bbdeeeee38cbc63b.png"},466:function(e,t,n){e.exports=n.p+"static/dom-6bc80600eaf0bde39f33603a01c3634a.png"},467:function(e,t,n){e.exports=n.p+"static/cssom-05c44fa5586b8bab18091e543f7a06f4.png"},469:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "resume"\n| title: "Resume"')},470:function(e,t,n){e.exports=n.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},471:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Korbit"')},472:function(e,t,n){e.exports=n.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},473:function(e,t,n){e.exports=n.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},474:function(e,t,n){e.exports=n.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},475:function(e,t,n){e.exports=n.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},476:function(e,t,n){e.exports=n.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},477:function(e,t,n){e.exports=n.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},478:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Goodoc"')},479:function(e,t,n){e.exports=n.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},480:function(e,t,n){e.exports=n.p+"static/2-c960320e42670dc45aec9d373358879d.png"},481:function(e,t,n){e.exports=n.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},482:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Ciceron"')},483:function(e,t,n){e.exports=n.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},484:function(e,t,n){e.exports=n.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},485:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Camscon"')},486:function(e,t,n){e.exports=n.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},487:function(e,t,n){e.exports=n.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},488:function(e,t,n){e.exports=n.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},489:function(e,t,n){var o={"./camscon/1.png":488,"./camscon/2.png":487,"./camscon/3.png":486,"./camscon/index.md":485,"./ciceron/1.png":484,"./ciceron/2.png":483,"./ciceron/index.md":482,"./goodoc/1.png":481,"./goodoc/2.png":480,"./goodoc/3.png":479,"./goodoc/index.md":478,"./images/js.jpg":477,"./images/posts/critical-rendering-path/cssom.png":467,"./images/posts/critical-rendering-path/dom.png":466,"./images/posts/critical-rendering-path/render-tree.png":465,"./images/reactjs.jpg":476,"./images/redux.jpg":475,"./images/rxjs.jpg":474,"./korbit/1.png":473,"./korbit/2.png":472,"./korbit/index.md":471,"./logo.png":470,"./me.jpg":464,"./resume/index.md":469};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=489},503:function(e,t,n){"use strict";var o=n(438),r=n.n(o),a=n(440),i=r()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]),c=a.a.div(i);t.a=c},564:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return f});var o=n(609),r=n(439),a=n.n(r),i=a.a.get("app"),c=(Object(o.createSelector)(i,a.a.get("isProduction")),Object(o.createSelector)(i,a.a.get("isTickerBarOpened")),Object(o.createSelector)(i,a.a.get("searchKeyword"))),l=Object(o.createSelector)(i,a.a.get("categories")),s=Object(o.createSelector)(i,a.a.get("postInformations")),u=Object(o.createSelector)(i,a.a.get("portfolios")),p=Object(o.createSelector)(i,a.a.get("isMenuOpened")),f=Object(o.createSelector)(i,a.a.get("isSubMenuOpened"))},609:function(e,t,n){"use strict";function o(e,t){return e===t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e(t[r],n[r]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];var i=0,c=o.pop(),l=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(o),s=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(n)),u=r(function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return s.apply(null,e)});return u.resultFunc=c,u.recomputations=function(){return i},u.resetRecomputations=function(){return i=0},u}}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=a,t.createStructuredSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})};var i=t.createSelector=a(r)},610:function(e,t,n){"use strict";var o=n(438),r=n.n(o),a=n(440),i=r()(["\n  display: inline-block;\n  position: relative;\n  float: left;\n  padding: 28.125% 0 0;\n  width: 50%;\n  height: 0;\n  background-color: #eee;\n  overflow: hidden;\n  @media (max-width: 414px) {\n    padding: 56.25% 0 0;\n    width: 100%;\n  }\n\n  &:nth-child(4n + 2),\n  &:nth-child(4n + 3) {\n    background-color: #fff;\n  }\n\n  &:hover {\n    img {\n      width: 110%;\n    }\n\n    h4 {\n      font-size: 2.2vw;\n    }\n  }\n\n  a {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #000;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n    transition: all .4s ease 0s;\n  }\n\n  h6 {\n    position: absolute;\n    bottom: 16px;\n    left: 16px;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n\n  h4 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 80%;\n    height: 2em;\n    line-height: 2em;\n    font-size: 2vw;\n    text-align: center;\n    transition: all .4s ease 0s;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]),c=a.a.section(i);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-9d6ee2ae056e9689de60.js.map