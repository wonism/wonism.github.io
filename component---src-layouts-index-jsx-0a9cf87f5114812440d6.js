webpackJsonp([79611799117203,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-es2015/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},a=l("./node_modules/react/react.js"),n=s(a),r=l("./src/layouts/index.jsx"),u=s(r),i=l("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),d=s(i);t.default=function(e){return n.default.createElement(u.default,o({},e,d.default))},e.exports=t.default},"./src/layouts/Header.jsx":function(e,t,l){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l("./node_modules/react/react.js"),n=o(a),r=l("./node_modules/gatsby-link/index.js"),u=o(r),i=l("./src/resources/logo.png"),d=s(i);l("./src/layouts/header.scss");var c=function(){var e=void 0,t=function(){e.checked=!1};return n.default.createElement("header",{className:"header"},n.default.createElement(u.default,{className:"main",to:"/"},n.default.createElement("img",{src:d.default,alt:"logo",width:"100",height:"18"})),n.default.createElement("nav",{className:"gnb"},n.default.createElement("ul",{className:"list-layout"},n.default.createElement("li",null,n.default.createElement(u.default,{to:"/pages/1"},"Posts")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/portfolios"},"Portfolio")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/resume"},"Resume")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/photos"},"Photos")))),n.default.createElement("input",{className:"hamburger-trigger",id:"hamburger-trigger",type:"checkbox",ref:function(t){e=t}}),n.default.createElement("label",{className:"hamburger",htmlFor:"hamburger-trigger",role:"button",tabIndex:"0",onClick:function(){}},n.default.createElement("span",{className:"hamburger-inner"})),n.default.createElement("nav",{className:"mobile-gnb"},n.default.createElement("ul",{className:"list-layout"},n.default.createElement("li",null,n.default.createElement(u.default,{to:"/pages/1",tabIndex:"0",role:"button",onClick:t},"Posts")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/portfolios",tabIndex:"0",role:"button",onClick:t},"Portfolio")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/resume",tabIndex:"0",role:"button",onClick:t},"Resume")),n.default.createElement("li",null,n.default.createElement(u.default,{to:"/photos",tabIndex:"0",role:"button",onClick:t},"Photos")))),n.default.createElement("label",{className:"mobile-gnb-background",htmlFor:"hamburger-trigger",role:"button",tabIndex:"0",onClick:function(){}}))};t.default=c,e.exports=t.default},"./src/layouts/header.scss":function(e,t){},"./src/layouts/index.jsx":function(e,t,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=l("./node_modules/react/react.js"),a=s(o),n=l("./src/layouts/Header.jsx"),r=s(n),u=l("./src/utils/scroll.js"),i=s(u);l("./src/layouts/index.scss"),l("./src/layouts/main.scss");var d=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement(r.default,null),a.default.createElement("main",{className:"container"},t()),a.default.createElement("nav",{className:"to-top"},a.default.createElement("button",{onClick:function(){(0,i.default)(400)}},"↑")))};d.propTypes={children:a.default.PropTypes.func.isRequired},t.default=d,e.exports=t.default},"./src/layouts/index.scss":function(e,t){},"./src/layouts/main.scss":function(e,t){},"./src/resources/logo.png":function(e,t,l){e.exports=l.p+"static/logo.02594e4c.png"},"./src/utils/scroll.js":function(e,t){"use strict";function l(e){var t=window.scrollY,l=Math.PI/(e/15),s=t/2,o=0,a=void 0,n=setInterval(function(){0!==Number(window.scrollY)?(o+=1,a=s-s*Math.cos(o*l),window.scrollTo(0,t-a)):clearInterval(n)},15)}t.__esModule=!0,t.default=l,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-0a9cf87f5114812440d6.js.map