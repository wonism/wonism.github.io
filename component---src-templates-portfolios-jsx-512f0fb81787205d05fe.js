(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{465:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w}),n(129),n(128);var o=n(470),a=n.n(o),i=n(1),r=n.n(i),c=n(2),p=n.n(c),s=n(483),d=n.n(s),f=n(478),l=n.n(f),u=n(469),g=n.n(u),h=n(546),b=n(658),m=a()(["\n  padding: 100px 0 0;\n  min-height: 100vh;\n  @media (max-width: 1024px) {\n    padding: 70px 0 0;\n  }\n"]),v=h.a.extend(m),x=function(e){var t=e.data,o=g.a.get("allMarkdownRemark.edges")(t);return p.a.createElement(v,null,p.a.createElement(d.a,null,p.a.createElement("title",null,"WONISM | PORTFOLIOS"),p.a.createElement("meta",{name:"og:title",content:"WONISM | PORTFOLIOS"})),g.a.map(function(e){if("/404/"!==e.node.path){var t=g.a.get("node.frontmatter")(e),o=t.path,a=t.title,i=t.images,r=g.a.isArray(i)?g.a.first(i):null;return g.a.isEmpty(r)?p.a.createElement(b.a,{key:o},p.a.createElement(l.a,{to:o},p.a.createElement("h4",null,a))):p.a.createElement(b.a,{key:o},p.a.createElement(l.a,{to:o},g.a.includes("//")(r)?p.a.createElement("img",{src:r,alt:"portfolio"}):p.a.createElement("img",{src:n(531)("./"+r),alt:"portfolio"}),p.a.createElement("h6",null,a)))}return null})(o))};x.propTypes={data:r.a.shape({}).isRequired},t.default=x;var w="** extracted graphql fragment **"},478:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var o=u(n(131)),a=u(n(493)),i=u(n(490)),r=u(n(52)),c=u(n(83)),p=u(n(82));t.withPrefix=h;var s=u(n(2)),d=n(8),f=u(n(1)),l=n(20);function u(e){return e&&e.__esModule?e:{default:e}}var g="/";function h(e){return function(e){return e.replace(/^\/\//g,"/")}(g+e)}function b(e,t){var n=(0,l.createLocation)(e,null,null,t.location);return n.pathname=h(n.pathname),n}g="";var m={activeClassName:f.default.string,activeStyle:f.default.object,exact:f.default.bool,strict:f.default.bool,isActive:f.default.func,location:f.default.object},v=function(e){function t(n,o){(0,r.default)(this,t);var a=(0,c.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var p=o.router.history,s=b(n.to,p);return a.state={path:(0,l.createPath)(s),to:s,IOSupported:i},a.handleRef=a.handleRef.bind(a),a}return(0,p.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=b(e.to,history);this.setState({path:(0,l.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,o,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(a.state.to.pathname)},(o=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t),o.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,r=n.onClick,c=(0,i.default)(n,["onClick"]);return e=(0,a.default)(m).some(function(e){return t.props[e]})?d.NavLink:d.Link,s.default.createElement(e,(0,o.default)({onClick:function(e){if(r&&r(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},c,{to:this.state.to,innerRef:this.handleRef}))},t}(s.default.Component);v.propTypes=(0,o.default)({},m,{innerRef:f.default.func,onClick:f.default.func,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired}),v.contextTypes={router:f.default.object},t.default=v,t.navigateTo=function(e){window.___navigateTo(e)}},487:function(e,t,n){n(492),e.exports=n(16).Object.keys},490:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},491:function(e,t,n){var o=n(31),a=n(16),i=n(30);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],r={};r[e]=t(n),o(o.S+o.F*i(function(){n(1)}),"Object",r)}},492:function(e,t,n){var o=n(84),a=n(39);n(491)("keys",function(){return function(e){return a(o(e))}})},493:function(e,t,n){e.exports={default:n(487),__esModule:!0}},500:function(e,t,n){e.exports=n.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},501:function(e,t,n){e.exports=n.p+"static/render-tree-bda36e3a36482fd9bbdeeeee38cbc63b.png"},502:function(e,t,n){e.exports=n.p+"static/dom-6bc80600eaf0bde39f33603a01c3634a.png"},503:function(e,t,n){e.exports=n.p+"static/cssom-05c44fa5586b8bab18091e543f7a06f4.png"},506:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "resume"\n| title: "Resume"')},507:function(e,t,n){e.exports=n.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},508:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Korbit"')},509:function(e,t,n){e.exports=n.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},510:function(e,t,n){e.exports=n.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},511:function(e,t,n){e.exports=n.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},512:function(e,t,n){e.exports=n.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},513:function(e,t,n){e.exports=n.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},514:function(e,t,n){e.exports=n.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},515:function(e,t,n){e.exports=n.p+"static/ide-e14d045a1802dd57eae29e8d0543ac1b.jpg"},516:function(e,t,n){e.exports=n.p+"static/html-dbbe558213cd6cf57ad5dd49c91a8774.jpg"},517:function(e,t,n){e.exports=n.p+"static/git-00c368fdc6182da2b8a2ed36b436a912.jpg"},518:function(e,t,n){e.exports=n.p+"static/fp-d67e3bc7ef3b19e943f220e76fc30af6.jpg"},519:function(e,t,n){e.exports=n.p+"static/browser-beb2a01cf264084bc7641b3b746a4578.jpg"},520:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Goodoc"')},521:function(e,t,n){e.exports=n.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},522:function(e,t,n){e.exports=n.p+"static/2-c960320e42670dc45aec9d373358879d.png"},523:function(e,t,n){e.exports=n.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},524:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Ciceron"')},525:function(e,t,n){e.exports=n.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},526:function(e,t,n){e.exports=n.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},527:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Camscon"')},528:function(e,t,n){e.exports=n.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},529:function(e,t,n){e.exports=n.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},530:function(e,t,n){e.exports=n.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},531:function(e,t,n){var o={"./camscon/1.png":530,"./camscon/2.png":529,"./camscon/3.png":528,"./camscon/index.md":527,"./ciceron/1.png":526,"./ciceron/2.png":525,"./ciceron/index.md":524,"./goodoc/1.png":523,"./goodoc/2.png":522,"./goodoc/3.png":521,"./goodoc/index.md":520,"./images/browser.jpg":519,"./images/fp.jpg":518,"./images/git.jpg":517,"./images/html.jpg":516,"./images/ide.jpg":515,"./images/js.jpg":514,"./images/posts/critical-rendering-path/cssom.png":503,"./images/posts/critical-rendering-path/dom.png":502,"./images/posts/critical-rendering-path/render-tree.png":501,"./images/reactjs.jpg":513,"./images/redux.jpg":512,"./images/rxjs.jpg":511,"./korbit/1.png":510,"./korbit/2.png":509,"./korbit/index.md":508,"./logo.png":507,"./me.jpg":500,"./resume/index.md":506};function a(e){var t=i(e);return n(t)}function i(e){var t=o[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=531},546:function(e,t,n){"use strict";var o=n(470),a=n.n(o),i=n(471),r=a()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]),c=i.a.div(r);t.a=c},658:function(e,t,n){"use strict";var o=n(470),a=n.n(o),i=n(471),r=a()(["\n  display: inline-block;\n  position: relative;\n  float: left;\n  padding: 28.125% 0 0;\n  width: 50%;\n  height: 0;\n  background-color: #eee;\n  overflow: hidden;\n  @media (max-width: 1024px) {\n    padding: 56.25% 0 0;\n    width: 100%;\n  }\n\n  &:nth-child(4n + 2),\n  &:nth-child(4n + 3) {\n    background-color: #fff;\n  }\n\n  &:hover {\n    img {\n      width: 110%;\n    }\n\n    h4 {\n      font-size: 2.2vw;\n    }\n  }\n\n  a {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #000;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n    transition: all .4s ease 0s;\n  }\n\n  h6 {\n    position: absolute;\n    bottom: 16px;\n    left: 16px;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n\n  h4 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 80%;\n    height: 2em;\n    line-height: 2em;\n    font-size: 2vw;\n    text-align: center;\n    transition: all .4s ease 0s;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]),c=i.a.section(r);t.a=c}}]);
//# sourceMappingURL=component---src-templates-portfolios-jsx-512f0fb81787205d05fe.js.map