webpackJsonp([0xc6055050a1a52000],{"./node_modules/react-truncate/lib/Truncate.CommonJS.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n("./node_modules/react/react.js"),c=a(d),f=n("./node_modules/prop-types/index.js"),m=a(f),p=function(e){function t(){var e;s(this,t);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];var i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.refs,t=e.text,n=e.ellipsis,a=this.calcTargetWidth,l=this.onResize,s=document.createElement("canvas");this.canvasContext=s.getContext("2d"),document.body.appendChild(n),a(function(){t&&t.parentNode.removeChild(t)}),window.addEventListener("resize",l)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate()}},{key:"componentWillUnmount",value:function(){var e=this.refs.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],l=document.createElement("div");return l.innerHTML="foo<br/>bar","foo\nbar"!==l[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function e(t){var e=this.props.onTruncate;"function"==typeof e&&(this.timeout=window.requestAnimationFrame(function(){e(t)}))}},{key:"calcTargetWidth",value:function e(t){var n=this.refs.target,e=this.calcTargetWidth,a=this.canvasContext;if(n){var l=n.parentNode.getBoundingClientRect().width;if(!l)return window.requestAnimationFrame(function(){return e(t)});var s=window.getComputedStyle(n),r=[s["font-weight"],s["font-style"],s["font-size"],s["font-family"]].join(" ");a.font=r,this.setState({targetWidth:l},t)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"getLines",value:function(){for(var e=this.refs,t=this.props,n=t.lines,a=t.ellipsis,l=this.state.targetWidth,s=this.innerText,r=this.measureWidth,i=this.onTruncate,o=[],u=s(e.text),d=u.split("\n").map(function(e){return e.split(" ")}),f=!0,m=this.ellipsisWidth(this.refs.ellipsis),p=1;p<=n;p++){var g=d[0];if(0!==g.length){var h=g.join(" ");if(r(h)<=l&&1===d.length){f=!1,o.push(h);break}if(p===n){for(var b=g.join(" "),y=0,v=b.length-1;y<=v;){var E=Math.floor((y+v)/2),w=b.slice(0,E+1);r(w)+m<=l?y=E+1:v=E-1}h=c.default.createElement("span",null,b.slice(0,y),a)}else{for(var j=0,_=g.length-1;j<=_;){var x=Math.floor((j+_)/2),T=g.slice(0,x+1).join(" ");r(T)<=l?j=x+1:_=x-1}if(0===j){p=n-1;continue}h=g.slice(0,j).join(" "),d[0].splice(0,j)}o.push(h)}else o.push(),d.shift(),p--}return i(f),o}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return c.default.createElement("span",{key:t},e);var a=c.default.createElement("br",{key:t+"br"});return e?[c.default.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this.refs.target,t=this.props,n=t.children,a=t.ellipsis,s=t.lines,r=l(t,["children","ellipsis","lines"]),i=this.state.targetWidth,u=this.getLines,d=this.renderLine,f=this.onTruncate,m=void 0,p=!(!e||!i);return"undefined"!=typeof window&&p&&(s>0?m=u().map(d):(m=n,f(!1))),delete r.onTruncate,c.default.createElement("span",o({},r,{ref:"target"}),m,c.default.createElement("span",{ref:"text"},n),c.default.createElement("span",{ref:"ellipsis",style:this.styles.ellipsis},a))}}]),t}(d.Component);p.propTypes={children:m.default.node,ellipsis:m.default.node,lines:m.default.oneOfType([m.default.oneOf([!1]),m.default.number]),onTruncate:m.default.func},p.defaultProps={children:"",ellipsis:"…",lines:1},t.default=p},"./src/constants/index.js":function(e,t){"use strict";t.PAGING_COUNT=10,t.MAX_PAGES=4},"./src/pages/posts.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-es2015/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/PagedPosts.jsx':function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=n("./node_modules/react/react.js"),s=a(l),r=n("./node_modules/prop-types/index.js"),i=a(r),o=n("./node_modules/gatsby-link/index.js"),u=a(o),d=n("./node_modules/lodash/fp.js"),c=a(d),f=n("./node_modules/react-helmet/lib/Helmet.js"),m=a(f),p=n("./node_modules/react-google-ads/dist/google-ads.js"),g=a(p),h=n("./node_modules/react-truncate/lib/Truncate.CommonJS.js"),b=a(h),y=n("./src/components/Bio.jsx"),v=a(y),E=n("./src/constants/index.js"),w=n("./src/utils/getQueryString.js");a(w);n("./src/pages/posts.scss");var j=function(e){var t=e.data,n=e.location,a=c.default.get("site.siteMetadata.title")(t),l=c.default.flow(c.default.get("allMarkdownRemark.edges"),c.default.filter(c.default.flow(c.default.get("node.frontmatter.isNotPost"),function(e){return!e})))(t),r=c.default.get("length")(l),i=r?Math.ceil(r/E.PAGING_COUNT):0,o=c.default.range(1,i+1),d=c.default.flow(c.default.get("pathname"),c.default.replace(/(?:\/?pages\/)(\d+)/,function(e,t){return t}),c.default.toNumber)(n)||1,f=i>=E.MAX_PAGES,p=f?c.default.filter(function(e){var t=d-e;return Math.abs(t)<=Math.floor(E.MAX_PAGES/2)})(o):o,h=c.default.includes(1)(p),y=c.default.includes(i)(p),w=c.default.slice((d-1)*E.PAGING_COUNT,d*E.PAGING_COUNT)(l);return s.default.createElement("div",{className:"main-container"},s.default.createElement(m.default,null,s.default.createElement("title",null,a),s.default.createElement("meta",{name:"keyword",content:"JavaScript, Front-end, Developer"}),s.default.createElement("meta",{name:"og:title",content:a})),s.default.createElement(v.default,null),s.default.createElement("div",{className:"posts"},c.default.map(function(e){if("/404/"!==e.node.path){var t=!c.default.isEmpty(c.default.get("node.frontmatter.tags")(e));return s.default.createElement("section",{key:c.default.get("node.frontmatter.path")(e),className:"post-card"},s.default.createElement("div",{className:"card-content clearfix"},s.default.createElement(u.default,{to:c.default.get("node.frontmatter.path")(e)},s.default.createElement("h3",null,c.default.get("node.frontmatter.title")(e)),s.default.createElement("small",null,c.default.get("node.frontmatter.date")(e)),s.default.createElement("p",null,s.default.createElement(b.default,{lines:3,ellipsis:s.default.createElement("span",null,"...")},c.default.get("node.frontmatter.summary")(e)))),t?s.default.createElement("div",{className:"clearfix"},s.default.createElement("i",{className:"fa fa-tags tag-icon"}),s.default.createElement("div",{className:"tags"},c.default.map(function(e){return s.default.createElement(u.default,{key:e,to:"/tags/"+e},s.default.createElement("small",null,e))})(c.default.get("node.frontmatter.tags")(e)))):null))}return null})(w)),c.default.isEmpty(o)?null:s.default.createElement("nav",{className:"pagination"},s.default.createElement("ul",{className:"list-layout"},f&&!h?[s.default.createElement("li",{key:"first"},s.default.createElement(u.default,{to:"/pages/1"},s.default.createElement("i",{className:"fa fa-angle-double-left"}))),s.default.createElement("li",{key:"ellipsis"},s.default.createElement("i",{className:"fa fa-ellipsis-h"}))]:null,c.default.isEqual(1)(d)?null:s.default.createElement("li",null,s.default.createElement(u.default,{to:"/pages/"+(d-1)},s.default.createElement("i",{className:"fa fa-angle-left"}))),c.default.map(function(e){return c.default.isEqual(e)(d)?s.default.createElement("li",{key:e,className:c.default.isEqual(e)(d)?"active":""},e):s.default.createElement("li",{key:e,className:c.default.isEqual(e)(d)?"active":""},s.default.createElement(u.default,{to:"/pages/"+e},e))})(p),c.default.isEqual(i)(d)?null:s.default.createElement("li",null,s.default.createElement(u.default,{to:"/pages/"+(d+1)},s.default.createElement("i",{className:"fa fa-angle-right"}))),f&&!y?[s.default.createElement("li",{key:"ellipsis"},s.default.createElement("i",{className:"fa fa-ellipsis-h"})),s.default.createElement("li",{key:"last"},s.default.createElement(u.default,{to:"/pages/"+i},s.default.createElement("i",{className:"fa fa-angle-double-right"})))]:null)),s.default.createElement(g.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))};j.propTypes={data:i.default.shape({}).isRequired,location:i.default.shape({}).isRequired},t.default=j;t.pageQuery="** extracted graphql fragment **"},"./src/utils/getQueryString.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),a=n.exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-paged-posts-jsx-f55b4b16ffd558883fed.js.map