(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1152:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var r=n(81),a=n.n(r),o=n(428),i=n.n(o),u=n(2),l=n.n(u),c=n(1),s=n.n(c),f=n(432),d=n.n(f),p=n(448),m=n(429),h=n(476),E=n.n(h),_=n(475),g=n.n(_),v=n(425),S=n.n(v),O=n(514),y=i()(["\n  margin: 1em 0;\n\n  a {\n    color: #000;\n  }\n\n  span,\n  img {\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  img {\n    margin: 0 4px 0 0;\n    border-radius: 50%;\n  }\n\n  small {\n    color: #999;\n    font-size: 90%;\n  }\n"]),T=m.a.section(y),w=function(){return l.a.createElement(T,null,l.a.createElement("a",{href:"https://github.com/wonism",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/13835762?s=460&v=4",width:"48",height:"48",alt:""}),l.a.createElement("span",null,"Front-end developer WONISM",l.a.createElement("br",null),l.a.createElement("small",null,"Interested in ReactJS, RxJS and ReasonML."))))},b=i()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 720px;\n  font-size: 14px;\n  @media (max-width: 414px) {\n    padding: 70px 16px 0;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n\n  h1 {\n    margin: .67em 0;\n    font-size: 36px;\n  }\n\n  time {\n    margin: 1em 0;\n    font-size: 14px;\n  }\n"]),C=m.a.section(b),I=n(439),R=(n(131),function(e){var t=S.a.split("T")(e),n=t[0],r=t[1];return n+" "+S.a.flow(S.a.slice(0,5),S.a.join(""))(r)});n(1152),n.d(t,"pageQuery",function(){return M});var x=i()(["\n  margin: 1em 0;\n\n  a {\n    margin: 0 0 0 4px;\n    color: #000;\n    text-decoration: blink;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]),N=i()(["\n  padding: 1em 0 4em;\n  line-height: 1.6em;\n\n  h2 {\n    margin: 24px 0 10px;\n    font-size: 28px;\n  }\n\n  h3 {\n    margin: 24px 0 10px;\n    font-size: 24px;\n  }\n\n  h4 {\n    margin: 24px 0 10px;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 16px 0 0;\n    font-size: 16px;\n  }\n\n  blockquote {\n    margin: 40px 0 0;\n    padding: 0 0 0 2em;\n    line-height: 1.2em;\n    color: #aaa;\n    font-style: italic;\n    font-family: 'Kaushan Script';\n    font-size: 24px;\n  }\n\n  pre {\n    margin: 20px 0 0;\n  }\n"]),q=i()(["\n  position: relative;\n  width: 100%;\n  padding: 56.25% 0 0;\n  overflow: hidden;\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n  }\n"]),P=m.a.div(x),D=m.a.section(N),j=m.a.figure(q),k=function(e){function t(t){var n,r=(n=e.call(this,t)||this).props.location.pathname,a=S.a.add(I.SITE_URL,r),o=S.a.get("data.markdownRemark.frontmatter.title")(n.props);return n.props.initDisqusConfig({url:a,identifier:r,title:o}),n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.data,t=S.a.get("markdownRemark.frontmatter")(e),n=t.tweets,r=t.components;this.props.createCopyButton(),this.props.renderTweets(n),this.props.renderComponents(r)},n.render=function(){var e=this.props.data,t=S.a.get("markdownRemark")(e),n=t.frontmatter,r=n.title,a=n.tags,o=n.image;return l.a.createElement(C,null,l.a.createElement(E.a,null,l.a.createElement("title",null,"WONISM | ",r),l.a.createElement("meta",{name:"og:title",content:"WONISM | "+r})),S.a.isNil(o)?null:l.a.createElement(j,null,l.a.createElement("img",{src:o,alt:r})),l.a.createElement("h1",null,r),l.a.createElement("time",null,S.a.flow(S.a.get("frontmatter.date"),R)(t)),S.a.isEmpty(a)?null:l.a.createElement(P,null,l.a.createElement(g.a,null),S.a.map(function(e){return l.a.createElement(d.a,{key:e,to:"/tags/"+e+"/1"},l.a.createElement("small",null,e))})(a)),l.a.createElement(w,null),l.a.createElement(D,null,l.a.createElement("div",{id:"post-contents",dangerouslySetInnerHTML:{__html:S.a.get("html")(t)}})),l.a.createElement("div",{id:"disqus_thread"}),l.a.createElement("noscript",null,"Please enable JavaScript to view the ",l.a.createElement("a",{href:"https://disqus.com/?ref_noscript"},"comments powered by Disqus.")))},t}(u.PureComponent);k.propTypes={data:s.a.shape({date:s.a.object}).isRequired,location:s.a.shape({}).isRequired,initDisqusConfig:s.a.func.isRequired,renderTweets:s.a.func.isRequired,renderComponents:s.a.func.isRequired,createCopyButton:s.a.func.isRequired},t.default=Object(p.b)(function(e){return e},{initDisqusConfig:function(e){var t=e.url,n=e.identifier,r=e.title;return function(e){return e({type:O.g,url:t,identifier:n,title:r})}},renderTweets:function(e){return function(t){return t({type:O.p,tweets:e})}},renderComponents:function(e){return function(t){return t({type:O.m,components:e})}},createCopyButton:function(){return function(e){return e({type:O.a})}}})(k);var M="** extracted graphql fragment **"},426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=i(n(2)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n=e.children,o=e.color,i=e.size,u=e.style,l=e.width,c=e.height,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),f=t.reactIconBase,d=void 0===f?{}:f,p=i||d.size||"1em";return a.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||p,width:l||p},d,s,{style:r({verticalAlign:"middle",color:o||d.color},d.style||{},u)}))};u.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number]),width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),style:o.default.object},u.contextTypes={reactIconBase:o.default.shape(u.propTypes)},t.default=u,e.exports=t.default},432:function(e,t,n){"use strict";t.__esModule=!0,t.navigateTo=void 0;var r=p(n(130)),a=p(n(443)),o=p(n(440)),i=p(n(52)),u=p(n(83)),l=p(n(82));t.withPrefix=h;var c=p(n(2)),s=n(8),f=p(n(1)),d=n(20);function p(e){return e&&e.__esModule?e:{default:e}}var m="/";function h(e){return function(e){return e.replace(/^\/\//g,"/")}(m+e)}function E(e,t){var n=(0,d.createLocation)(e,null,null,t.location);return n.pathname=h(n.pathname),n}m="";var _={activeClassName:f.default.string,activeStyle:f.default.object,exact:f.default.bool,strict:f.default.bool,isActive:f.default.func,location:f.default.object},g=function(e){function t(n,r){(0,i.default)(this,t);var a=(0,u.default)(this,e.call(this)),o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var l=r.router.history,c=E(n.to,l);return a.state={path:(0,d.createPath)(c),to:c,IOSupported:o},a.handleRef=a.handleRef.bind(a),a}return(0,l.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=E(e.to,history);this.setState({path:(0,d.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(a.state.to.pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},t.prototype.render=function(){var e,t=this,n=this.props,i=n.onClick,u=(0,o.default)(n,["onClick"]);return e=(0,a.default)(_).some(function(e){return t.props[e]})?s.NavLink:s.Link,c.default.createElement(e,(0,r.default)({onClick:function(e){if(i&&i(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var r=t.state.path.split("#").slice(1).join("#"),a=document.getElementById(r);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},u,{to:this.state.to,innerRef:this.handleRef}))},t}(c.default.Component);g.propTypes=(0,r.default)({},_,{innerRef:f.default.func,onClick:f.default.func,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired}),g.contextTypes={router:f.default.object},t.default=g,t.navigateTo=function(e){window.___navigateTo(e)}},437:function(e,t,n){n(442),e.exports=n(16).Object.keys},439:function(e,t){t.CONTENT_PER_PAGE=8,t.PAGE_PER_SCREEN=4,t.POST="post",t.PORTFOLIO="portfolio",t.RESUME="resume",t.SITE_URL="https://wonism.github.io"},440:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},441:function(e,t,n){var r=n(31),a=n(16),o=n(30);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},442:function(e,t,n){var r=n(84),a=n(39);n(441)("keys",function(){return function(e){return a(r(e))}})},443:function(e,t,n){e.exports={default:n(437),__esModule:!0}},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=i(n(2)),o=i(n(426));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z"})))},e.exports=t.default},514:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"j",function(){return c}),n.d(t,"l",function(){return s}),n.d(t,"k",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"h",function(){return m}),n.d(t,"p",function(){return h}),n.d(t,"r",function(){return E}),n.d(t,"q",function(){return _}),n.d(t,"m",function(){return g}),n.d(t,"o",function(){return v}),n.d(t,"n",function(){return S});var r="INIT_COPY",a="INIT_COPY_SUCCESS",o="INIT_COPY_FAILED",i="CREATE_COPY_BUTTON",u="CREATE_COPY_BUTTON_SUCCESS",l="CREATE_COPY_BUTTON_FAILED",c="LOAD_DISQUS_SCRIPT",s="LOAD_DISQUS_SCRIPT_SUCCESS",f="LOAD_DISQUS_SCRIPT_FAILED",d="INIT_DISQUS_CONFIG",p="INIT_DISQUS_CONFIG_SUCCESS",m="INIT_DISQUS_CONFIG_FAILED",h="RENDER_TWEETS",E="RENDER_TWEETS_SUCCESS",_="RENDER_TWEETS_FAILED",g="RENDER_COMPONENTS",v="RENDER_COMPONENTS_SUCCESS",S="RENDER_COMPONENTS_FAILED"}}]);
//# sourceMappingURL=component---src-templates-post-jsx-bfbbd9402cd0bb119960.js.map