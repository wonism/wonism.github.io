(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{459:function(t,e,n){"use strict";n.r(e);var o=n(468),a=n.n(o),i=n(2),r=n.n(i),u=n(476),l=n.n(u),c=n(483),s=n.n(c),f=n(544),d=a()(["\n  padding: 100px 0 0;\n  min-height: 100vh;\n  text-align: center;\n  @media (max-width: 1024px) {\n    padding: 70px 0 0;\n  }\n\n  h1 {\n    margin: 0 0 .67em;\n    font-size: 24px;\n  }\n\n  a {\n    text-decoration: underline;\n  }\n"]),p=f.a.extend(d);e.default=function(){return r.a.createElement(p,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"WONISM | PAGE NOT FOUND"),r.a.createElement("meta",{name:"og:title",content:"WONISM | PAGE NOT FOUND"})),r.a.createElement("h1",null,"Page Not Found"),r.a.createElement(l.a,{to:"/"},"← Go Home"))}},476:function(t,e,n){"use strict";e.__esModule=!0,e.navigateTo=void 0;var o=p(n(131)),a=p(n(490)),i=p(n(487)),r=p(n(52)),u=p(n(83)),l=p(n(82));e.withPrefix=v;var c=p(n(2)),s=n(8),f=p(n(1)),d=n(20);function p(t){return t&&t.__esModule?t:{default:t}}var h="/";function v(t){return function(t){return t.replace(/^\/\//g,"/")}(h+t)}function m(t,e){var n=(0,d.createLocation)(t,null,null,e.location);return n.pathname=v(n.pathname),n}h="";var w={activeClassName:f.default.string,activeStyle:f.default.object,exact:f.default.bool,strict:f.default.bool,isActive:f.default.func,location:f.default.object},_=function(t){function e(n,o){(0,r.default)(this,e);var a=(0,u.default)(this,t.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var l=o.router.history,c=m(n.to,l);return a.state={path:(0,d.createPath)(c),to:c,IOSupported:i},a.handleRef=a.handleRef.bind(a),a}return(0,l.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=m(t.to,history);this.setState({path:(0,d.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e,n,o,a=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue(a.state.to.pathname)},(o=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(e),o.disconnect(),n())})})).observe(e))},e.prototype.render=function(){var t,e=this,n=this.props,r=n.onClick,u=(0,i.default)(n,["onClick"]);return t=(0,a.default)(w).some(function(t){return e.props[t]})?s.NavLink:s.Link,c.default.createElement(t,(0,o.default)({onClick:function(t){if(r&&r(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},u,{to:this.state.to,innerRef:this.handleRef}))},e}(c.default.Component);_.propTypes=(0,o.default)({},w,{innerRef:f.default.func,onClick:f.default.func,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired}),_.contextTypes={router:f.default.object},e.default=_,e.navigateTo=function(t){window.___navigateTo(t)}},484:function(t,e,n){n(489),t.exports=n(16).Object.keys},487:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},488:function(t,e,n){var o=n(31),a=n(16),i=n(30);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",r)}},489:function(t,e,n){var o=n(84),a=n(39);n(488)("keys",function(){return function(t){return a(o(t))}})},490:function(t,e,n){t.exports={default:n(484),__esModule:!0}},544:function(t,e,n){"use strict";var o=n(468),a=n.n(o),i=n(470),r=a()(["\n  position: relative;\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n"]),u=i.a.div(r);e.a=u}}]);
//# sourceMappingURL=component---src-pages-404-jsx-35fe32672e55ba76bcc8.js.map