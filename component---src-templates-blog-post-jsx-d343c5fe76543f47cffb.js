webpackJsonp([0xb92941d84ed6],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-es2015/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/BlogPost.jsx':function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var r=o("./node_modules/react/react.js"),i=s(r),d=o("./node_modules/react-helmet/lib/Helmet.js"),u=s(d),m=o("./node_modules/prop-types/index.js"),c=s(m),p=o("./node_modules/react-google-ads/dist/google-ads.js"),f=s(p),b=o("./node_modules/lodash/fp.js"),g=s(b),h=o("./src/components/Bio.jsx"),w=s(h),j=o("./src/constants/index.js"),y=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=(e.data,e.location),o=g.default.get("pathname")(t),s="discus_config";window[s]=function(){this.page.url=""+j.SITE_URL+o,this.page.identifier=o,this.page.title=g.default.get("markdownRemark.frontmatter.title")(post)};var n=document,a=n.createElement("script");a.src="https://jaewonism.disqus.com/embed.js",a.setAttribute("data-timestamp",+new Date),(n.head||n.body).appendChild(a)},t.prototype.render=function(){var e=this.props,t=e.data,o=e.location,s=g.default.get("markdownRemark")(t),n=g.default.get("site.siteMetadata.title")(t),a=g.default.get("frontmatter.title")(s)+" | "+n,l=g.default.get("pathname")(o);({url:""+j.SITE_URL+l,identifier:l,title:g.default.get("frontmatter.title")(s)});return i.default.createElement("div",{className:"post"},i.default.createElement(u.default,null,i.default.createElement("title",null,a),i.default.createElement("meta",{name:"keyword",content:g.default.join(", ")(g.default.get("frontmatter.tags")(s))}),i.default.createElement("meta",{name:"description",content:g.default.get("frontmatter.summary")(s)}),i.default.createElement("meta",{name:"author",content:"wonism"}),i.default.createElement("meta",{name:"og:title",content:a})),i.default.createElement("h1",null,g.default.get("frontmatter.title")(s)),i.default.createElement("p",null,g.default.get("frontmatter.date")(s)),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:g.default.get("html")(s)}}),i.default.createElement("div",{id:"disqus_thread"}),i.default.createElement("noscript",null,"Please enable JavaScript to view the ",i.default.createElement("a",{href:"https://disqus.com/?ref_noscript"},"comments powered by Disqus.")),i.default.createElement("hr",null),i.default.createElement(f.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}),i.default.createElement("hr",null),i.default.createElement(w.default,null))},t}(r.Component);y.propTypes={data:c.default.shape({date:c.default.object}).isRequired,location:c.default.shape({}).isRequired},t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-jsx-d343c5fe76543f47cffb.js.map