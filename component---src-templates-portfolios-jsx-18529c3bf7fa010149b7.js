(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{400:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return x}),n(128),n(127);var o=n(406),a=n.n(o),i=n(1),r=n.n(i),c=n(2),s=n.n(c),p=n(449),l=n.n(p),f=n(409),u=n.n(f),d=n(405),g=n.n(d),h=n(454),m=n(501),b=a()(["\n  padding: 100px 0 0;\n  @media (max-width: 414px) {\n    padding: 70px 0 0;\n  }\n"]),v=h.a.extend(b),w=function(t){var e=t.data,o=g.a.get("allMarkdownRemark.edges")(e);return s.a.createElement(v,null,s.a.createElement(l.a,null,s.a.createElement("title",null,"WONISM | PORTFOLIOS"),s.a.createElement("meta",{name:"og:title",content:"WONISM | PORTFOLIOS"})),g.a.map(function(t){if("/404/"!==t.node.path){var e=g.a.get("node.frontmatter")(t),o=e.path,a=e.title,i=e.images,r=g.a.isArray(i)?g.a.first(i):null;return g.a.isEmpty(r)?s.a.createElement(m.a,{key:o},s.a.createElement(u.a,{to:o},s.a.createElement("h4",null,a))):s.a.createElement(m.a,{key:o},s.a.createElement(u.a,{to:o},g.a.includes("//")(r)?s.a.createElement("img",{src:r,alt:"portfolio"}):s.a.createElement("img",{src:n(445)("./"+r),alt:"portfolio"}),s.a.createElement("h6",null,a)))}return null})(o))};w.propTypes={data:r.a.shape({}).isRequired},e.default=w;var x="** extracted graphql fragment **"},409:function(t,e,n){"use strict";e.__esModule=!0,e.navigateTo=void 0;var o=d(n(420)),a=d(n(415)),i=d(n(412)),r=d(n(51)),c=d(n(81)),s=d(n(80));e.withPrefix=h;var p=d(n(2)),l=n(8),f=d(n(1)),u=n(20);function d(t){return t&&t.__esModule?t:{default:t}}var g="/";function h(t){return function(t){return t.replace(/^\/\//g,"/")}(g+t)}function m(t,e){var n=(0,u.createLocation)(t,null,null,e.location);return n.pathname=h(n.pathname),n}var b={activeClassName:f.default.string,activeStyle:f.default.object,exact:f.default.bool,strict:f.default.bool,isActive:f.default.func,location:f.default.object},v=function(t){function e(n,o){(0,r.default)(this,e);var a=(0,c.default)(this,t.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var s=o.router.history,p=m(n.to,s);return a.state={path:(0,u.createPath)(p),to:p,IOSupported:i},a.handleRef=a.handleRef.bind(a),a}return(0,s.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=m(t.to,history);this.setState({path:(0,u.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e,n,o,a=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue(a.state.to.pathname)},(o=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(e),o.disconnect(),n())})})).observe(e))},e.prototype.render=function(){var t,e=this,n=this.props,r=n.onClick,c=(0,i.default)(n,["onClick"]);return t=(0,a.default)(b).some(function(t){return e.props[t]})?l.NavLink:l.Link,p.default.createElement(t,(0,o.default)({onClick:function(t){if(r&&r(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},c,{to:this.state.to,innerRef:this.handleRef}))},e}(p.default.Component);v.propTypes=(0,o.default)({},b,{innerRef:f.default.func,onClick:f.default.func,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired}),v.contextTypes={router:f.default.object},e.default=v,e.navigateTo=function(t){window.___navigateTo(t)}},410:function(t,e,n){n(414),t.exports=n(19).Object.keys},412:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},413:function(t,e,n){var o=n(38),a=n(19),i=n(37);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",r)}},414:function(t,e,n){var o=n(126),a=n(50);n(413)("keys",function(){return function(t){return a(o(t))}})},415:function(t,e,n){t.exports={default:n(410),__esModule:!0}},416:function(t,e,n){"use strict";var o=n(50),a=n(82),i=n(52),r=n(126),c=n(129),s=Object.assign;t.exports=!s||n(37)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=o})?function(t,e){for(var n=r(t),s=arguments.length,p=1,l=a.f,f=i.f;s>p;)for(var u,d=c(arguments[p++]),g=l?o(d).concat(l(d)):o(d),h=g.length,m=0;h>m;)f.call(d,u=g[m++])&&(n[u]=d[u]);return n}:s},417:function(t,e,n){var o=n(38);o(o.S+o.F,"Object",{assign:n(416)})},418:function(t,e,n){n(417),t.exports=n(19).Object.assign},419:function(t,e,n){t.exports={default:n(418),__esModule:!0}},420:function(t,e,n){"use strict";e.__esModule=!0;var o,a=(o=n(419))&&o.__esModule?o:{default:o};e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},421:function(t,e,n){t.exports=n.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},422:function(t,e,n){t.exports=n.p+"static/render-tree-bda36e3a36482fd9bbdeeeee38cbc63b.png"},423:function(t,e,n){t.exports=n.p+"static/dom-6bc80600eaf0bde39f33603a01c3634a.png"},424:function(t,e,n){t.exports=n.p+"static/cssom-05c44fa5586b8bab18091e543f7a06f4.png"},425:function(t,e){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "resume"\n| title: "Resume"')},426:function(t,e,n){t.exports=n.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},427:function(t,e){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Korbit"')},428:function(t,e,n){t.exports=n.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},429:function(t,e,n){t.exports=n.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},430:function(t,e,n){t.exports=n.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},431:function(t,e,n){t.exports=n.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},432:function(t,e,n){t.exports=n.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},433:function(t,e,n){t.exports=n.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},434:function(t,e){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Goodoc"')},435:function(t,e,n){t.exports=n.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},436:function(t,e,n){t.exports=n.p+"static/2-c960320e42670dc45aec9d373358879d.png"},437:function(t,e,n){t.exports=n.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},438:function(t,e){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Ciceron"')},439:function(t,e,n){t.exports=n.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},440:function(t,e,n){t.exports=n.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},441:function(t,e){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Camscon"')},442:function(t,e,n){t.exports=n.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},443:function(t,e,n){t.exports=n.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},444:function(t,e,n){t.exports=n.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},445:function(t,e,n){var o={"./camscon/1.png":444,"./camscon/2.png":443,"./camscon/3.png":442,"./camscon/index.md":441,"./ciceron/1.png":440,"./ciceron/2.png":439,"./ciceron/index.md":438,"./goodoc/1.png":437,"./goodoc/2.png":436,"./goodoc/3.png":435,"./goodoc/index.md":434,"./images/js.jpg":433,"./images/posts/critical-rendering-path/cssom.png":424,"./images/posts/critical-rendering-path/dom.png":423,"./images/posts/critical-rendering-path/render-tree.png":422,"./images/reactjs.jpg":432,"./images/redux.jpg":431,"./images/rxjs.jpg":430,"./korbit/1.png":429,"./korbit/2.png":428,"./korbit/index.md":427,"./logo.png":426,"./me.jpg":421,"./resume/index.md":425};function a(t){var e=i(t);return n(e)}function i(t){var e=o[t];if(!(e+1)){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id=445},454:function(t,e,n){"use strict";var o=n(406),a=n.n(o),i=n(407),r=a()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]);e.a=i.a.div(r)},501:function(t,e,n){"use strict";var o=n(406),a=n.n(o),i=n(407),r=a()(["\n  display: inline-block;\n  position: relative;\n  float: left;\n  padding: 28.125% 0 0;\n  width: 50%;\n  height: 0;\n  background-color: #eee;\n  overflow: hidden;\n  @media (max-width: 414px) {\n    padding: 56.25% 0 0;\n    width: 100%;\n  }\n\n  &:nth-child(4n + 2),\n  &:nth-child(4n + 3) {\n    background-color: #fff;\n  }\n\n  &:hover {\n    img {\n      width: 110%;\n    }\n\n    h4 {\n      font-size: 2.2vw;\n    }\n  }\n\n  a {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #000;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n    transition: all .4s ease 0s;\n  }\n\n  h6 {\n    position: absolute;\n    bottom: 16px;\n    left: 16px;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n\n  h4 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 80%;\n    height: 2em;\n    line-height: 2em;\n    font-size: 2vw;\n    text-align: center;\n    transition: all .4s ease 0s;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]);e.a=i.a.section(r)}}]);
//# sourceMappingURL=component---src-templates-portfolios-jsx-18529c3bf7fa010149b7.js.map