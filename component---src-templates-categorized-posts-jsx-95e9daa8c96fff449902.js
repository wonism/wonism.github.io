webpackJsonp([39454122954850],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-flow/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-es2015/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/CategorizedPosts.jsx':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a("./node_modules/react/react.js"),n=l(s),u=a("./node_modules/prop-types/index.js"),d=l(u),r=a("./node_modules/gatsby-link/index.js"),o=l(r),i=a("./node_modules/lodash/fp.js"),f=l(i),c=a("./node_modules/react-helmet/lib/Helmet.js"),m=l(c),g=a("./node_modules/react-google-ads/dist/google-ads.js"),p=l(g),b=a("./node_modules/react-truncate/lib/Truncate.CommonJS.js"),E=l(b),y=a("./src/components/Bio.jsx"),j=l(y),h=a("./src/constants/index.js"),w=a("./src/utils/getQueryString.js"),_=l(w);a("./src/pages/posts.scss");var x=function(e){var t=e.data,a=e.location,l=f.default.get("site.siteMetadata.title")(t),s=f.default.flow(f.default.get("allMarkdownRemark.edges"),f.default.filter(f.default.flow(f.default.get("node.frontmatter.isNotPost"),function(e){return!e})))(t),u=f.default.flow(f.default.get("pathname"),f.default.replace(/(?:\/?categories\/)(\S+)/,function(e,t){return t}))(a),d=f.default.filter(function(e){var t=f.default.get("node.frontmatter.category")(e);return f.default.includes(u)(t)})(s),r=f.default.get("length")(d),i=r?Math.ceil(r/h.PAGING_COUNT):0,c=f.default.range(1,i+1),g=f.default.toNumber((0,_.default)("p",f.default.get("search")(a)))||1,b=i>=h.MAX_PAGES,y=b?f.default.filter(function(e){var t=g-e;return Math.abs(t)<=Math.floor(h.MAX_PAGES/2)})(c):c,w=f.default.includes(1)(y),x=f.default.includes(i)(y),N=f.default.slice((g-1)*h.PAGING_COUNT,g*h.PAGING_COUNT)(d);return n.default.createElement("div",{className:"main-container"},n.default.createElement(m.default,null,n.default.createElement("title",null,l),n.default.createElement("meta",{name:"keyword",content:"JavaScript, Front-end, Developer, "+u}),n.default.createElement("meta",{name:"og:title",content:l})),n.default.createElement(j.default,null),n.default.createElement("div",{className:"posts"},f.default.isEmpty(N)?n.default.createElement("div",{className:"no-results text-center"},"검색된 게시물이 없습니다."):null,f.default.map(function(e){if("/404/"!==e.node.path){var t=!f.default.isEmpty(f.default.get("node.frontmatter.tags")(e));return n.default.createElement("section",{key:f.default.get("node.frontmatter.path")(e),className:"post-card"},n.default.createElement("div",{className:"card-content clearfix"},n.default.createElement(o.default,{to:f.default.get("node.frontmatter.path")(e)},n.default.createElement("h3",null,f.default.get("node.frontmatter.title")(e)),n.default.createElement("small",null,f.default.get("node.frontmatter.date")(e)),n.default.createElement("p",null,n.default.createElement(E.default,{lines:3,ellipsis:n.default.createElement("span",null,"...")},f.default.get("node.frontmatter.summary")(e)))),t?n.default.createElement("div",{className:"clearfix"},n.default.createElement("i",{className:"fa fa-tags tag-icon"}),n.default.createElement("div",{className:"tags"},f.default.map(function(e){return n.default.createElement(o.default,{key:e,to:"/tags/"+e},n.default.createElement("small",null,e))})(f.default.get("node.frontmatter.tags")(e)))):null))}return null})(N)),f.default.isEmpty(c)?null:n.default.createElement("nav",{className:"pagination"},n.default.createElement("ul",{className:"list-layout"},b&&!w?[n.default.createElement("li",{key:"first"},n.default.createElement(o.default,{to:"/categories/"+u+"?p=1"},n.default.createElement("i",{className:"fa fa-angle-double-left"}))),n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"}))]:null,f.default.isEqual(1)(g)?null:n.default.createElement("li",null,n.default.createElement(o.default,{to:"/pages/"+(g-1)},n.default.createElement("i",{className:"fa fa-angle-left"}))),f.default.map(function(e){return f.default.isEqual(e)(g)?n.default.createElement("li",{key:e,className:f.default.isEqual(e)(g)?"active":""},e):n.default.createElement("li",{key:e,className:f.default.isEqual(e)(g)?"active":""},n.default.createElement(o.default,{to:"/categories/"+u+"?p="+e},e))})(y),f.default.isEqual(i)(g)?null:n.default.createElement("li",null,n.default.createElement(o.default,{to:"/pages/"+(g+1)},n.default.createElement("i",{className:"fa fa-angle-right"}))),b&&!x?[n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"})),n.default.createElement("li",{key:"last"},n.default.createElement(o.default,{to:"/categories/"+u+"?p="+i},n.default.createElement("i",{className:"fa fa-angle-double-right"})))]:null)),n.default.createElement(p.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))};x.propTypes={data:d.default.shape({}).isRequired,location:d.default.shape({}).isRequired},t.default=x;t.pageQuery="** extracted graphql fragment **"},"./src/utils/getQueryString.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var a=e.replace(/[[\]]/g,"\\$&"),l=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),s=l.exec(t);return s?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-categorized-posts-jsx-95e9daa8c96fff449902.js.map