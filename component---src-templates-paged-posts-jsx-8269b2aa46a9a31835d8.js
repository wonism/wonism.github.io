webpackJsonp([0xc6055050a1a52000],{"./src/constants/index.js":function(e,t){"use strict";t.PAGING_COUNT=10,t.MAX_PAGES=4},"./src/pages/posts.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-es2015/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/paged-posts.jsx':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a("./node_modules/react/react.js"),n=l(s),d=a("./node_modules/prop-types/index.js"),o=l(d),u=a("./node_modules/gatsby-link/index.js"),r=l(u),i=a("./node_modules/lodash/fp.js"),c=l(i),m=a("./node_modules/react-helmet/lib/Helmet.js"),f=l(m),g=a("./node_modules/react-google-ads/dist/google-ads.js"),p=l(g),b=a("./src/components/Bio.jsx"),E=l(b),y=a("./src/constants/index.js"),j=a("./src/utils/getQueryString.js");l(j);a("./src/pages/posts.scss");var h=function(e){var t=e.data,a=e.location,l=c.default.get("site.siteMetadata.title")(t),s=c.default.get("allMarkdownRemark.edges")(t),d=c.default.get("length")(s),o=d?Math.ceil(d/y.PAGING_COUNT):0,u=c.default.range(1,o+1),i=c.default.flow(c.default.get("pathname"),c.default.replace(/(?:\/?pages\/)(\d+)/,function(e,t){return t}),c.default.toNumber)(a)||1,m=o>=y.MAX_PAGES,g=m?c.default.filter(function(e){var t=i-e;return Math.abs(t)<=Math.floor(y.MAX_PAGES/2)})(u):u,b=c.default.includes(1)(g),j=c.default.includes(o)(g),h=c.default.slice((i-1)*y.PAGING_COUNT,i*y.PAGING_COUNT)(s);return n.default.createElement("div",{className:"main-container"},n.default.createElement(f.default,null,n.default.createElement("title",null,l),n.default.createElement("meta",{name:"og:title",content:l})),n.default.createElement(E.default,null),n.default.createElement("div",{className:"posts"},c.default.map(function(e){if("/404/"!==e.node.path){var t=!c.default.isEmpty(c.default.get("node.frontmatter.tags")(e));return n.default.createElement("section",{key:c.default.get("node.frontmatter.path")(e),className:"post-card"},n.default.createElement("div",{className:"card-content clearfix"},n.default.createElement(r.default,{to:c.default.get("node.frontmatter.path")(e)},n.default.createElement("h3",null,c.default.get("node.frontmatter.title")(e)),n.default.createElement("small",null,c.default.get("node.frontmatter.date")(e)),n.default.createElement("p",{dangerouslySetInnerHTML:{__html:c.default.get("node.excerpt")(e)}})),t?n.default.createElement("div",{className:"clearfix"},n.default.createElement("i",{className:"fa fa-tags tag-icon"}),n.default.createElement("div",{className:"tags"},c.default.map(function(e){return n.default.createElement(r.default,{key:e,to:"/tags/"+e},n.default.createElement("small",null,e))})(c.default.get("node.frontmatter.tags")(e)))):null))}return null})(h)),c.default.isEmpty(u)?null:n.default.createElement("nav",{className:"pagination"},n.default.createElement("ul",{className:"list-layout"},m&&!b?[n.default.createElement("li",{key:"first"},n.default.createElement(r.default,{to:"/pages/1"},n.default.createElement("i",{className:"fa fa-angle-double-left"}))),n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"}))]:null,c.default.map(function(e){return c.default.isEqual(e)(i)?n.default.createElement("li",{key:e,className:c.default.isEqual(e)(i)?"active":""},e):n.default.createElement("li",{key:e,className:c.default.isEqual(e)(i)?"active":""},n.default.createElement(r.default,{to:"/pages/"+e},e))})(g),m&&!j?[n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"})),n.default.createElement("li",{key:"last"},n.default.createElement(r.default,{to:"/pages/"+o},n.default.createElement("i",{className:"fa fa-angle-double-right"})))]:null)),n.default.createElement(p.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))};h.propTypes={data:o.default.shape({}).isRequired,location:o.default.shape({}).isRequired},t.default=h;t.pageQuery="** extracted graphql fragment **"},"./src/utils/getQueryString.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){t||(t=document.location.search),e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),l=a.exec(t);return l?l[2]?decodeURIComponent(l[2].replace(/\+/g," ")):"":null},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-paged-posts-jsx-8269b2aa46a9a31835d8.js.map