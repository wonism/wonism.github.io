(window.webpackJsonp=window.webpackJsonp||[]).push([[179,5],{408:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y}),n(84),n(130);var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=n(446),s=n(474),c=n.n(s),u=n(418),p=n.n(u),f=n(511),d=n(510),h=n(508),m=n(502),g=n(478),v=n(432),b=function(e){var t=e.data,n=e.location,a=Object(g.a)(3)(n),i=p.a.flow(p.a.get("pathname"),p.a.split("/"),p.a.get("2"))(n),o=p.a.flow(m.a,p.a.filter(p.a.flow(p.a.get("node.frontmatter.category"),p.a.isEqual(i))))(t),l=p.a.size(o),s=p.a.slice((a-1)*v.CONTENT_PER_PAGE,a*v.CONTENT_PER_PAGE)(o);return[r.a.createElement(f.a,{key:"posts-wrapper"},r.a.createElement(c.a,null,r.a.createElement("title",null,"WONISM | ",p.a.toUpper(i)),r.a.createElement("meta",{name:"og:title",content:"WONISM | "+p.a.toUpper(i)})),p.a.isEmpty(s)?r.a.createElement("div",null,"Posts Not Found."):null,p.a.map(function(e){if("/404/"!==e.node.path){var t=p.a.get("node.frontmatter")(e),n=t.images,a=t.tags,i=t.path;return r.a.createElement(d.a,Object.assign({key:i,path:i,images:n,tags:a},t))}return null})(s)),r.a.createElement(h.a,{key:"pagination",prefix:"/categories/"+i+"/",postCount:l,location:n})]};b.propTypes={data:o.a.shape({}).isRequired,location:o.a.shape({}).isRequired},t.default=Object(l.b)(function(e){return e},{})(b);var y="** extracted graphql fragment **"},419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t){var n=e.children,i=e.color,o=e.size,l=e.style,s=e.width,c=e.height,u=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","color","size","style","width","height"]),p=t.reactIconBase,f=void 0===p?{}:p,d=o||f.size||"1em";return r.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||d,width:s||d},f,u,{style:a({verticalAlign:"middle",color:i||f.color},f.style||{},l)}))};l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number]),width:i.default.oneOfType([i.default.string,i.default.number]),height:i.default.oneOfType([i.default.string,i.default.number]),style:i.default.object},l.contextTypes={reactIconBase:i.default.shape(l.propTypes)},t.default=l,e.exports=t.default},425:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var a=d(n(441)),r=d(n(436)),i=d(n(433)),o=d(n(51)),l=d(n(82)),s=d(n(81));t.withPrefix=m;var c=d(n(2)),u=n(8),p=d(n(1)),f=n(20);function d(e){return e&&e.__esModule?e:{default:e}}var h="/";function m(e){return function(e){return e.replace(/^\/\//g,"/")}(h+e)}function g(e,t){var n=(0,f.createLocation)(e,null,null,t.location);return n.pathname=m(n.pathname),n}var v={activeClassName:p.default.string,activeStyle:p.default.object,exact:p.default.bool,strict:p.default.bool,isActive:p.default.func,location:p.default.object},b=function(e){function t(n,a){(0,o.default)(this,t);var r=(0,l.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var s=a.router.history,c=g(n.to,s);return r.state={path:(0,f.createPath)(c),to:c,IOSupported:i},r.handleRef=r.handleRef.bind(r),r}return(0,s.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=g(e.to,history);this.setState({path:(0,f.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,o=n.onClick,l=(0,i.default)(n,["onClick"]);return e=(0,r.default)(v).some(function(e){return t.props[e]})?u.NavLink:u.Link,c.default.createElement(e,(0,a.default)({onClick:function(e){if(o&&o(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var a=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(a);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},l,{to:this.state.to,innerRef:this.handleRef}))},t}(c.default.Component);b.propTypes=(0,a.default)({},v,{innerRef:p.default.func,onClick:p.default.func,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired}),b.contextTypes={router:p.default.object},t.default=b,t.navigateTo=function(e){window.___navigateTo(e)}},430:function(e,t,n){n(435),e.exports=n(19).Object.keys},432:function(e,t){t.CONTENT_PER_PAGE=8,t.PAGE_PER_SCREEN=4,t.POST="post",t.PORTFOLIO="portfolio",t.RESUME="resume",t.SITE_URL="https://wonism.github.io"},433:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},434:function(e,t,n){var a=n(38),r=n(19),i=n(37);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},435:function(e,t,n){var a=n(126),r=n(50);n(434)("keys",function(){return function(e){return r(a(e))}})},436:function(e,t,n){e.exports={default:n(430),__esModule:!0}},437:function(e,t,n){"use strict";var a=n(50),r=n(83),i=n(52),o=n(126),l=n(129),s=Object.assign;e.exports=!s||n(37)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=a})?function(e,t){for(var n=o(e),s=arguments.length,c=1,u=r.f,p=i.f;s>c;)for(var f,d=l(arguments[c++]),h=u?a(d).concat(u(d)):a(d),m=h.length,g=0;m>g;)p.call(d,f=h[g++])&&(n[f]=d[f]);return n}:s},438:function(e,t,n){var a=n(38);a(a.S+a.F,"Object",{assign:n(437)})},439:function(e,t,n){n(438),e.exports=n(19).Object.assign},440:function(e,t,n){e.exports={default:n(439),__esModule:!0}},441:function(e,t,n){"use strict";t.__esModule=!0;var a,r=(a=n(440))&&a.__esModule?a:{default:a};t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},442:function(e,t,n){e.exports=n.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},443:function(e,t,n){e.exports=n.p+"static/render-tree-bda36e3a36482fd9bbdeeeee38cbc63b.png"},444:function(e,t,n){e.exports=n.p+"static/dom-6bc80600eaf0bde39f33603a01c3634a.png"},445:function(e,t,n){e.exports=n.p+"static/cssom-05c44fa5586b8bab18091e543f7a06f4.png"},448:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "resume"\n| title: "Resume"')},449:function(e,t,n){e.exports=n.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},450:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Korbit"')},451:function(e,t,n){e.exports=n.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},452:function(e,t,n){e.exports=n.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},453:function(e,t,n){e.exports=n.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},454:function(e,t,n){e.exports=n.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},455:function(e,t,n){e.exports=n.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},456:function(e,t,n){e.exports=n.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},457:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Goodoc"')},458:function(e,t,n){e.exports=n.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},459:function(e,t,n){e.exports=n.p+"static/2-c960320e42670dc45aec9d373358879d.png"},460:function(e,t,n){e.exports=n.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},461:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Ciceron"')},462:function(e,t,n){e.exports=n.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},463:function(e,t,n){e.exports=n.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},464:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n| ---\n| type: "portfolio"\n| title: "Camscon"')},465:function(e,t,n){e.exports=n.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},466:function(e,t,n){e.exports=n.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},467:function(e,t,n){e.exports=n.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},468:function(e,t,n){var a={"./camscon/1.png":467,"./camscon/2.png":466,"./camscon/3.png":465,"./camscon/index.md":464,"./ciceron/1.png":463,"./ciceron/2.png":462,"./ciceron/index.md":461,"./goodoc/1.png":460,"./goodoc/2.png":459,"./goodoc/3.png":458,"./goodoc/index.md":457,"./images/js.jpg":456,"./images/posts/critical-rendering-path/cssom.png":445,"./images/posts/critical-rendering-path/dom.png":444,"./images/posts/critical-rendering-path/render-tree.png":443,"./images/reactjs.jpg":455,"./images/redux.jpg":454,"./images/rxjs.jpg":453,"./korbit/1.png":452,"./korbit/2.png":451,"./korbit/index.md":450,"./logo.png":449,"./me.jpg":442,"./resume/index.md":448};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=468},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z"})))},e.exports=t.default},478:function(e,t,n){"use strict";n(130);var a=n(418),r=n.n(a);t.a=function(e){return r.a.flow(r.a.get("pathname"),r.a.split("/"),r.a.get(e),r.a.defaultTo("1"),r.a.toNumber)}},502:function(e,t,n){"use strict";var a=n(418),r=n.n(a),i=n(432),o=r.a.flow(r.a.get("allMarkdownRemark.edges"),r.a.filter(function(e){var t=r.a.get("node.frontmatter")(e),n=t.hide,a=t.type;return!0!==n&&(a||i.POST)===i.POST}));t.a=o},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m13.1 16.4v4.3q0 0.9-0.7 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.7 1.5z m11.4 0v4.3q0 0.9-0.6 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.7-1.5v-4.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5z m11.4 0v4.3q0 0.9-0.6 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5z"})))},e.exports=t.default},504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"})))},e.exports=t.default},505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"})))},e.exports=t.default},506:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z"})))},e.exports=t.default},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(2)),i=o(n(419));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z"})))},e.exports=t.default},508:function(e,t,n){"use strict";n(128),n(127);var a=n(421),r=n.n(a),i=n(1),o=n.n(i),l=n(2),s=n.n(l),c=n(425),u=n.n(c),p=n(422),f=n(507),d=n.n(f),h=n(506),m=n.n(h),g=n(505),v=n.n(g),b=n(504),y=n.n(b),E=n(503),x=n.n(E),w=n(418),O=n.n(w),_=n(432),q=n(478),j=r()(["\n  margin: 1em 0;\n  text-align: center;\n\n  li {\n    display: inline-block;\n    padding: 0 .4em;\n  }\n\n  svg {\n    margin: -2px 0 0;\n  }\n"]),T=p.a.nav(j),k=function(e){var t=e.postCount,n=e.location,a=e.prefix,r=t?Math.ceil(t/_.CONTENT_PER_PAGE):0,i=O.a.range(1,r+1),o="/pages/"===a?2:3,l=Object(q.a)(o)(n),c=r>=_.PAGE_PER_SCREEN,p=c?O.a.filter(function(e){var t=l-e;return Math.abs(t)<=Math.floor(_.PAGE_PER_SCREEN/2)})(i):i,f=O.a.includes(1)(p),h=O.a.includes(r)(p);return O.a.isEmpty(i)?null:s.a.createElement(T,null,s.a.createElement("ul",null,c&&!f?[s.a.createElement("li",{key:"first"},s.a.createElement(u.a,{to:a+"1"},s.a.createElement(d.a,null))),s.a.createElement("li",{key:"ellipsis"},s.a.createElement(x.a,null))]:null,O.a.isEqual(1)(l)?null:s.a.createElement("li",null,s.a.createElement(u.a,{to:""+a+(l-1)},s.a.createElement(v.a,null))),O.a.map(function(e){return O.a.isEqual(e)(l)?s.a.createElement("li",{key:e,className:O.a.isEqual(e)(l)?"active":""},e):s.a.createElement("li",{key:e,className:O.a.isEqual(e)(l)?"active":""},s.a.createElement(u.a,{to:""+a+e},e))})(p),O.a.isEqual(r)(l)?null:s.a.createElement("li",null,s.a.createElement(u.a,{to:""+a+(l+1)},s.a.createElement(y.a,null))),c&&!h?[s.a.createElement("li",{key:"ellipsis"},s.a.createElement(x.a,null)),s.a.createElement("li",{key:"last"},s.a.createElement(u.a,{to:""+a+r},s.a.createElement(m.a,null)))]:null))};k.propTypes={postCount:o.a.number.isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,prefix:o.a.string},k.defaultProps={prefix:"/pages/"},t.a=k},509:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(1),o=n.n(i),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),s(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext;if(t){var r=Math.floor(t.parentNode.getBoundingClientRect().width);if(!r)return window.requestAnimationFrame(function(){return n(e)});var i=window.getComputedStyle(t),o=[i["font-weight"],i["font-style"],i["font-size"],i["font-family"]].join(" ");a.font=o,this.setState({targetWidth:r},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,s=this.measureWidth,c=this.onTruncate,u=this.trimRight,p=[],f=l(e.text).split("\n").map(function(e){return e.split(" ")}),d=!0,h=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var g=f[0];if(0!==g.length){var v=g.join(" ");if(s(v)<=o&&1===f.length){d=!1,p.push(v);break}if(m===n){for(var b=g.join(" "),y=0,E=b.length-1;y<=E;){var x=Math.floor((y+E)/2);s(b.slice(0,x+1))+h<=o?y=x+1:E=x-1}var w=b.slice(0,y);if(i)for(w=u(w);!w.length&&p.length;)w=u(p.pop());v=r.a.createElement("span",null,w,a)}else{for(var O=0,_=g.length-1;O<=_;){var q=Math.floor((O+_)/2);s(g.slice(0,q+1).join(" "))<=o?O=q+1:_=q-1}if(0===O){m=n-1;continue}v=g.slice(0,O).join(" "),f[0].splice(0,O)}p.push(v)}else p.push(),f.shift(),m--}return c(d),p}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,o=n.lines,s=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,u=this.getLines,p=this.renderLine,f=this.onTruncate,d=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(o>0?d=u().map(p):(d=a,f(!1))),delete s.onTruncate,delete s.trimWhitespace,r.a.createElement("span",l({},s,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,d),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();c.propTypes={children:o.a.node,ellipsis:o.a.node,lines:o.a.oneOfType([o.a.oneOf([!1]),o.a.number]),trimWhitespace:o.a.bool,onTruncate:o.a.func},c.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1},t.a=c},510:function(e,t,n){"use strict";n(128),n(127);var a=n(421),r=n.n(a),i=n(2),o=n.n(i),l=n(1),s=n.n(l),c=n(425),u=n.n(c),p=n(509),f=n(473),d=n.n(f),h=n(422),m=n(418),g=n.n(m),v=r()(["\n  position: relative;\n  margin: -14px -14px 14px;\n  padding: 50% 0 0;\n  height: 0;\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=);\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n  }\n"]),b=r()(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]),y=r()(["\n  display: inline-block;\n  padding: 0 16px 16px;\n  width: 25%;\n  font-size: 14px;\n  vertical-align: top;\n  @media (max-width: 414px) {\n    margin: 0 0 16px;\n    padding: 0 0 16px;\n    width: 100%;\n    border-bottom: 1px solid #eee;\n  }\n\n  & > div {\n    position: relative;\n    top: 0;\n    padding: 14px;\n    background-color: #fff;\n    border-radius: 6px;\n    transition: all .4s ease .1s;\n    border: 1px solid #e5e5e5;\n\n    &:hover {\n      top: -8px;\n      background: #efefef;\n    }\n  }\n\n  a {\n    color: #000;\n\n    &:hover {\n      h3,\n      p,\n      small {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  h3 {\n    padding: 0 0 6px;\n    height: 2.4em;\n    line-height: 1.2em;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  time {\n    display: block;\n    margin: 10px 0 0;\n    font-size: 12px;\n  }\n\n  p {\n    padding: 24px 0 16px;\n    height: 106px;\n    line-height: 1.4em;\n    font-size: 16px;\n  }\n\n  small {\n    margin: 0 0 0 4px;\n    font-size: 14px;\n  }\n"]),E=h.a.figure(v),x=h.a.div(b),w=h.a.article(y),O=function(e){var t=e.tags,a=e.path,r=e.images,i=e.title,l=e.date,s=e.summary,c=g.a.first(r);return o.a.createElement(w,null,o.a.createElement("div",null,o.a.createElement(u.a,{to:a},o.a.createElement(E,null,g.a.isNil(c)?null:o.a.createElement("img",{src:g.a.includes("//")(c)?c:n(468)("./"+c),alt:i})),o.a.createElement("h3",null,o.a.createElement(p.a,{lines:2,ellipsis:o.a.createElement("span",null,"...")},i)),o.a.createElement("p",null,o.a.createElement(p.a,{lines:3,ellipsis:o.a.createElement("span",null,"...")},s))),o.a.createElement(x,null,o.a.createElement(d.a,null),g.a.map(function(e){return o.a.createElement(u.a,{key:e,to:"/tags/"+e+"/1"},o.a.createElement("small",null,e))})(t)),o.a.createElement("time",null,l)))};O.propTypes={tags:s.a.arrayOf(s.a.string),path:s.a.string.isRequired,images:s.a.arrayOf(s.a.string),title:s.a.string,date:s.a.string,summary:s.a.string},O.defaultProps={tags:[],images:[],title:"",date:"",summary:""},t.a=O},511:function(e,t,n){"use strict";var a=n(421),r=n.n(a),i=n(422),o=r()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 1176px;\n  font-size: 0;\n  @media (max-width: 414px) {\n    padding: 70px 16px 0;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n\n  h1 {\n    margin: .67em 0;\n    font-size: 32px;\n  }\n\n  time {\n    margin: 1em 0;\n    font-size: 14px;\n  }\n"]);t.a=i.a.section(o)}}]);
//# sourceMappingURL=component---src-templates-categorized-list-jsx-d66615d5c5267b4171bc.js.map