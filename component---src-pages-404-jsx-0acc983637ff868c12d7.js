(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{396:function(t,e,n){"use strict";n.r(e);var o=n(410),a=n.n(o),r=n(2),i=n.n(r),u=n(414),c=n.n(u),l=n(463),s=n.n(l),f=n(471),d=a()(["\n  padding: 100px 0 0;\n  min-height: 100vh;\n  text-align: center;\n  @media (max-width: 414px) {\n    padding: 70px 0 0;\n  }\n\n  h1 {\n    margin: 0 0 .67em;\n    font-size: 24px;\n  }\n\n  a {\n    text-decoration: underline;\n  }\n"]),p=f.a.extend(d);e.default=function(){return i.a.createElement(p,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"WONISM | PAGE NOT FOUND"),i.a.createElement("meta",{name:"og:title",content:"WONISM | PAGE NOT FOUND"})),i.a.createElement("h1",null,"Page Not Found"),i.a.createElement(c.a,{to:"/"},"← Go Home"))}},414:function(t,e,n){"use strict";e.__esModule=!0,e.navigateTo=void 0;var o=p(n(430)),a=p(n(425)),r=p(n(422)),i=p(n(51)),u=p(n(82)),c=p(n(81));e.withPrefix=v;var l=p(n(2)),s=n(8),f=p(n(1)),d=n(20);function p(t){return t&&t.__esModule?t:{default:t}}var h="/";function v(t){return function(t){return t.replace(/^\/\//g,"/")}(h+t)}function m(t,e){var n=(0,d.createLocation)(t,null,null,e.location);return n.pathname=v(n.pathname),n}var b={activeClassName:f.default.string,activeStyle:f.default.object,exact:f.default.bool,strict:f.default.bool,isActive:f.default.func,location:f.default.object},_=function(t){function e(n,o){(0,i.default)(this,e);var a=(0,u.default)(this,t.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var c=o.router.history,l=m(n.to,c);return a.state={path:(0,d.createPath)(l),to:l,IOSupported:r},a.handleRef=a.handleRef.bind(a),a}return(0,c.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=m(t.to,history);this.setState({path:(0,d.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e,n,o,a=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue(a.state.to.pathname)},(o=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(e),o.disconnect(),n())})})).observe(e))},e.prototype.render=function(){var t,e=this,n=this.props,i=n.onClick,u=(0,r.default)(n,["onClick"]);return t=(0,a.default)(b).some(function(t){return e.props[t]})?s.NavLink:s.Link,l.default.createElement(t,(0,o.default)({onClick:function(t){if(i&&i(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},u,{to:this.state.to,innerRef:this.handleRef}))},e}(l.default.Component);_.propTypes=(0,o.default)({},b,{innerRef:f.default.func,onClick:f.default.func,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired}),_.contextTypes={router:f.default.object},e.default=_,e.navigateTo=function(t){window.___navigateTo(t)}},419:function(t,e,n){n(424),t.exports=n(19).Object.keys},422:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},423:function(t,e,n){var o=n(38),a=n(19),r=n(37);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",i)}},424:function(t,e,n){var o=n(126),a=n(50);n(423)("keys",function(){return function(t){return a(o(t))}})},425:function(t,e,n){t.exports={default:n(419),__esModule:!0}},426:function(t,e,n){"use strict";var o=n(50),a=n(83),r=n(52),i=n(126),u=n(129),c=Object.assign;t.exports=!c||n(37)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=i(t),c=arguments.length,l=1,s=a.f,f=r.f;c>l;)for(var d,p=u(arguments[l++]),h=s?o(p).concat(s(p)):o(p),v=h.length,m=0;v>m;)f.call(p,d=h[m++])&&(n[d]=p[d]);return n}:c},427:function(t,e,n){var o=n(38);o(o.S+o.F,"Object",{assign:n(426)})},428:function(t,e,n){n(427),t.exports=n(19).Object.assign},429:function(t,e,n){t.exports={default:n(428),__esModule:!0}},430:function(t,e,n){"use strict";e.__esModule=!0;var o,a=(o=n(429))&&o.__esModule?o:{default:o};e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},471:function(t,e,n){"use strict";var o=n(410),a=n.n(o),r=n(411),i=a()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]);e.a=r.a.div(i)}}]);
//# sourceMappingURL=component---src-pages-404-jsx-0acc983637ff868c12d7.js.map