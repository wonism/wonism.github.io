webpackJsonp([39454122954850],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-flow/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/CategorizedPosts.jsx':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a("./node_modules/react/react.js"),n=l(s),d=a("./node_modules/prop-types/index.js"),u=l(d),o=a("./node_modules/gatsby-link/index.js"),r=l(o),i=a("./node_modules/lodash/fp.js"),f=l(i),m=a("./node_modules/react-helmet/lib/Helmet.js"),c=l(m),g=a("./node_modules/react-google-ads/dist/google-ads.js"),p=l(g),b=a("./node_modules/react-truncate/lib/Truncate.CommonJS.js"),E=l(b),y=a("./src/components/Bio.jsx"),j=l(y),h=a("./src/constants/index.js");a("./src/pages/posts.scss");var w=function(e){var t=e.data,a=e.location,l=f.default.get("site.siteMetadata.title")(t),s=f.default.flow(f.default.get("allMarkdownRemark.edges"),f.default.filter(f.default.flow(f.default.get("node.frontmatter.isNotPost"),function(e){return!e})))(t),d=f.default.flow(f.default.get("pathname"),f.default.split("/"),f.default.get("2"))(a),u=f.default.filter(function(e){var t=f.default.get("node.frontmatter.category")(e);return f.default.includes(d)(t)})(s),o=f.default.get("length")(u),i=o?Math.ceil(o/h.PAGING_COUNT):0,m=f.default.range(1,i+1),g=f.default.flow(f.default.get("pathname"),f.default.split("/"),f.default.get("3"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return f.default.toNumber(e)})(a),b=i>=h.MAX_PAGES,y=b?f.default.filter(function(e){var t=g-e;return Math.abs(t)<=Math.floor(h.MAX_PAGES/2)})(m):m,w=f.default.includes(1)(y),_=f.default.includes(i)(y),N=f.default.slice((g-1)*h.PAGING_COUNT,g*h.PAGING_COUNT)(u);return n.default.createElement("div",{className:"main-container"},n.default.createElement(c.default,null,n.default.createElement("title",null,l),n.default.createElement("meta",{name:"keyword",content:"JavaScript, Front-end, Developer, "+d}),n.default.createElement("meta",{name:"og:title",content:l})),n.default.createElement(j.default,null),n.default.createElement("div",{className:"posts"},f.default.isEmpty(N)?n.default.createElement("div",{className:"no-results text-center"},"검색된 게시물이 없습니다."):null,f.default.map(function(e){if("/404/"!==e.node.path){var t=!f.default.isEmpty(f.default.get("node.frontmatter.tags")(e));return n.default.createElement("section",{key:f.default.get("node.frontmatter.path")(e),className:"post-card"},n.default.createElement("div",{className:"card-content clearfix"},n.default.createElement(r.default,{to:f.default.get("node.frontmatter.path")(e)},n.default.createElement("h3",null,f.default.get("node.frontmatter.title")(e)),n.default.createElement("small",null,f.default.get("node.frontmatter.date")(e)),n.default.createElement("p",null,n.default.createElement(E.default,{lines:3,ellipsis:n.default.createElement("span",null,"...")},f.default.get("node.frontmatter.summary")(e)))),t?n.default.createElement("div",{className:"clearfix"},n.default.createElement("i",{className:"fa fa-tags tag-icon"}),n.default.createElement("div",{className:"tags"},f.default.map(function(e){return n.default.createElement(r.default,{key:e,to:"/tags/"+e},n.default.createElement("small",null,e))})(f.default.get("node.frontmatter.tags")(e)))):null))}return null})(N)),f.default.isEmpty(m)?null:n.default.createElement("nav",{className:"pagination"},n.default.createElement("ul",{className:"list-layout"},b&&!w?[n.default.createElement("li",{key:"first"},n.default.createElement(r.default,{to:"/categories/"+d+"/1"},n.default.createElement("i",{className:"fa fa-angle-double-left"}))),n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"}))]:null,f.default.isEqual(1)(g)?null:n.default.createElement("li",null,n.default.createElement(r.default,{to:"/categories/"+d+"/"+(g-1)},n.default.createElement("i",{className:"fa fa-angle-left"}))),f.default.map(function(e){return f.default.isEqual(e)(g)?n.default.createElement("li",{key:e,className:f.default.isEqual(e)(g)?"active":""},e):n.default.createElement("li",{key:e,className:f.default.isEqual(e)(g)?"active":""},n.default.createElement(r.default,{to:"/categories/"+d+"/"+e},e))})(y),f.default.isEqual(i)(g)?null:n.default.createElement("li",null,n.default.createElement(r.default,{to:"/categories/"+d+"/"+(g+1)},n.default.createElement("i",{className:"fa fa-angle-right"}))),b&&!_?[n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"})),n.default.createElement("li",{key:"last"},n.default.createElement(r.default,{to:"/categories/"+d+"/"+i},n.default.createElement("i",{className:"fa fa-angle-double-right"})))]:null)),n.default.createElement(p.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))};w.propTypes={data:u.default.shape({}).isRequired,location:u.default.shape({}).isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-categorized-posts-jsx-bf650181066554724750.js.map