webpackJsonp([0xc23565d713b7],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-flow/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a("./node_modules/react/react.js"),n=l(s),d=a("./node_modules/prop-types/index.js"),u=l(d),o=a("./node_modules/gatsby-link/index.js"),r=l(o),i=a("./node_modules/lodash/fp.js"),m=l(i),f=a("./node_modules/react-helmet/lib/Helmet.js"),c=l(f),g=a("./node_modules/react-google-ads/dist/google-ads.js"),p=l(g),b=a("./node_modules/react-truncate/lib/Truncate.CommonJS.js"),E=l(b),y=a("./src/components/Bio.jsx"),j=l(y),h=a("./src/constants/index.js");a("./src/pages/posts.scss");var w=function(e){var t=e.data,a=m.default.get("site.siteMetadata.title")(t),l=m.default.flow(m.default.get("allMarkdownRemark.edges"),m.default.filter(m.default.flow(m.default.get("node.frontmatter.isNotPost"),function(e){return!e})))(t),s=m.default.get("length")(l),d=s?Math.ceil(s/h.PAGING_COUNT):0,u=m.default.range(1,d+1),o=1,i=d>=h.MAX_PAGES,f=i?m.default.filter(function(e){var t=o-e;return Math.abs(t)<=Math.floor(h.MAX_PAGES/2)})(u):u,g=m.default.includes(1)(f),b=m.default.includes(d)(f),y=m.default.slice((o-1)*h.PAGING_COUNT,o*h.PAGING_COUNT)(l);return n.default.createElement("div",{className:"main-container"},n.default.createElement(c.default,null,n.default.createElement("title",null,a),n.default.createElement("meta",{name:"keyword",content:"JavaScript, Front-end, Developer"}),n.default.createElement("meta",{name:"og:title",content:a})),n.default.createElement(j.default,null),n.default.createElement("div",{className:"posts"},m.default.map(function(e){if("/404/"!==e.node.path){var t=!m.default.isEmpty(m.default.get("node.frontmatter.tags")(e));return n.default.createElement("section",{key:m.default.get("node.frontmatter.path")(e),className:"post-card"},n.default.createElement("div",{className:"card-content clearfix"},n.default.createElement(r.default,{to:m.default.get("node.frontmatter.path")(e)},n.default.createElement("h3",null,m.default.get("node.frontmatter.title")(e)),n.default.createElement("small",null,m.default.get("node.frontmatter.date")(e)),n.default.createElement("p",null,n.default.createElement(E.default,{lines:3,ellipsis:n.default.createElement("span",null,"...")},m.default.get("node.frontmatter.summary")(e)))),t?n.default.createElement("div",{className:"clearfix"},n.default.createElement("i",{className:"fa fa-tags tag-icon"}),n.default.createElement("div",{className:"tags"},m.default.map(function(e){return n.default.createElement(r.default,{key:e,to:"/tags/"+e},n.default.createElement("small",null,e))})(m.default.get("node.frontmatter.tags")(e)))):null))}return null})(y)),m.default.isEmpty(u)?null:n.default.createElement("nav",{className:"pagination"},n.default.createElement("ul",{className:"list-layout"},i&&!g?[n.default.createElement("li",{key:"first"},n.default.createElement(r.default,{to:"/pages/1"},n.default.createElement("i",{className:"fa fa-angle-double-left"}))),n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"}))]:null,m.default.isEqual(1)(o)?null:n.default.createElement("li",null,n.default.createElement(r.default,{to:"/pages/"+(o-1)},n.default.createElement("i",{className:"fa fa-angle-left"}))),m.default.map(function(e){return m.default.isEqual(e)(o)?n.default.createElement("li",{key:e,className:m.default.isEqual(e)(o)?"active":""},e):n.default.createElement("li",{key:e,className:m.default.isEqual(e)(o)?"active":""},n.default.createElement(r.default,{to:"/pages/"+e},e))})(f),m.default.isEqual(d)(o)?null:n.default.createElement("li",null,n.default.createElement(r.default,{to:"/pages/"+(o+1)},n.default.createElement("i",{className:"fa fa-angle-right"}))),i&&!b?[n.default.createElement("li",{key:"ellipsis"},n.default.createElement("i",{className:"fa fa-ellipsis-h"})),n.default.createElement("li",{key:"last"},n.default.createElement(r.default,{to:"/pages/"+d},n.default.createElement("i",{className:"fa fa-angle-double-right"})))]:null)),n.default.createElement(p.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))};w.propTypes={data:u.default.shape({}).isRequired},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-2437c3f418b75642c096.js.map