(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{428:function(e,t,n){"use strict";n.r(t),n.d(t,"openSourceQuery",function(){return p});var a=n(2),r=n.n(a),o=n(447),l=n.n(o),i=n(460),u=n.n(i),c=(n(439),n(504)),s=n(465);n(464),t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"WONISM | Open Sources"),r.a.createElement("meta",{name:"og:title",content:"WONISM | Open Sources"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/gatsby-advanced-blog"},r.a.createElement(c.Repository,{username:"wonism",repos:"gatsby-advanced-blog",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/react-instagram-feed"},r.a.createElement(c.Repository,{username:"wonism",repos:"react-instagram-feed",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/react-google-ads"},r.a.createElement(c.Repository,{username:"wonism",repos:"react-google-ads",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/react-kakao-login"},r.a.createElement(c.Repository,{username:"wonism",repos:"react-kakao-login",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/react-github-info"},r.a.createElement(c.Repository,{username:"wonism",repos:"react-github-info",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/open-sources/easy-map"},r.a.createElement(c.Repository,{username:"wonism",repos:"easy-map",renderOnly:!0})),r.a.createElement("br",null),r.a.createElement("br",null))))};var p="** extracted graphql fragment **"},447:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var a=f(n(130)),r=f(n(457)),o=f(n(454)),l=f(n(52)),i=f(n(83)),u=f(n(82));t.withPrefix=h;var c=f(n(2)),s=n(8),p=f(n(1)),d=n(20);function f(e){return e&&e.__esModule?e:{default:e}}var m="/";function h(e){return function(e){return e.replace(/^\/\//g,"/")}(m+e)}function v(e,t){var n=(0,d.createLocation)(e,null,null,t.location);return n.pathname=h(n.pathname),n}var E={activeClassName:p.default.string,activeStyle:p.default.object,exact:p.default.bool,strict:p.default.bool,isActive:p.default.func,location:p.default.object},b=function(e){function t(n,a){(0,l.default)(this,t);var r=(0,i.default)(this,e.call(this)),o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var u=a.router.history,c=v(n.to,u);return r.state={path:(0,d.createPath)(c),to:c,IOSupported:o},r.handleRef=r.handleRef.bind(r),r}return(0,u.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=v(e.to,history);this.setState({path:(0,d.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,l=n.onClick,i=(0,o.default)(n,["onClick"]);return e=(0,r.default)(E).some(function(e){return t.props[e]})?s.NavLink:s.Link,c.default.createElement(e,(0,a.default)({onClick:function(e){if(l&&l(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var a=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(a);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},i,{to:this.state.to,innerRef:this.handleRef}))},t}(c.default.Component);b.propTypes=(0,a.default)({},E,{innerRef:p.default.func,onClick:p.default.func,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired}),b.contextTypes={router:p.default.object},t.default=b,t.navigateTo=function(e){window.___navigateTo(e)}},451:function(e,t,n){n(456),e.exports=n(16).Object.keys},454:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},455:function(e,t,n){var a=n(31),r=n(16),o=n(30);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",l)}},456:function(e,t,n){var a=n(84),r=n(39);n(455)("keys",function(){return function(e){return r(a(e))}})},457:function(e,t,n){e.exports={default:n(451),__esModule:!0}},464:function(e,t,n){},465:function(e,t,n){"use strict";var a=n(438),r=n.n(a),o=n(440),l=r()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 1176px;\n  text-align: center;\n\n  @media (max-width: 414px) {\n    padding: 70px 16px 0;\n  }\n\n  article {\n    font-size: 16px;\n    text-align: left;\n  }\n\n  .map {\n    margin: auto;\n    width: 320px;\n    max-width: 100%;\n    height: 320px;\n  }\n\n  a * {\n    cursor: pointer;\n  }\n"]),i=o.a.div(l);t.a=i}}]);
//# sourceMappingURL=component---src-pages-open-sources-index-jsx-58312a9b9996b890d028.js.map