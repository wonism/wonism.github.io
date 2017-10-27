webpackJsonp([0xe921d1ebc498],{"./node_modules/instafeed.js/instafeed.js":function(t,e,o){var n,i,s;(function(){var o;o=function(){function t(t,e){var o,n;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(o in t)n=t[o],this.options[o]=n;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var o,n,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=e||this._buildUrl(),o=document.getElementsByTagName("head"),o[0].appendChild(i),n="instafeedCache"+this.unique,window[n]=new t(this.options,this),window[n].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,n,i,s,r,a,l,c,p,u,d,h,f,m,g,b,y,w,_,j,x,k,v,E,I,U,N,O,T,B,C,q;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(B="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),T="least"===B[0],B[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",T);break;case"liked":t.data=this._sortBy(t.data,"likes.count",T);break;case"commented":t.data=this._sortBy(t.data,"comments.count",T);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(g=t.data,O=parseInt(this.options.limit,10),null!=this.options.limit&&g.length>O&&(g=g.slice(0,O)),a=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(g=this._filter(g,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(c="",f="",_="",q=document.createElement("div"),u=0,E=g.length;u<E;u++){if(d=g[u],h=d.images[this.options.resolution],"object"!=typeof h)throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);j=h.width,y=h.height,w="square",j>y&&(w="landscape"),j<y&&(w="portrait"),m=h.url,p=window.location.protocol.indexOf("http")>=0,p&&!this.options.useHttp&&(m=m.replace(/https?:\/\//,"//")),f=this._makeTemplate(this.options.template,{model:d,id:d.id,link:d.link,type:d.type,image:m,width:j,height:y,orientation:w,caption:this._getObjectProperty(d,"caption.text"),likes:d.likes.count,comments:d.comments.count,location:this._getObjectProperty(d,"location.name")}),c+=f}for(q.innerHTML=c,i=[],n=0,o=q.childNodes.length;n<o;)i.push(q.childNodes[n]),n+=1;for(k=0,I=i.length;k<I;k++)N=i[k],a.appendChild(N)}else for(v=0,U=g.length;v<U;v++){if(d=g[v],b=document.createElement("img"),h=d.images[this.options.resolution],"object"!=typeof h)throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);m=h.url,p=window.location.protocol.indexOf("http")>=0,p&&!this.options.useHttp&&(m=m.replace(/https?:\/\//,"//")),b.src=m,this.options.links===!0?(e=document.createElement("a"),e.href=d.link,e.appendChild(b),a.appendChild(e)):a.appendChild(b)}if(C=this.options.target,"string"==typeof C&&(C=document.getElementById(C)),null==C)throw r='No element with id="'+this.options.target+'" on page.',new Error(r);C.appendChild(a),l=document.getElementsByTagName("head")[0],l.removeChild(document.getElementById("instafeed-fetcher")),x="instafeedCache"+this.unique,window[x]=void 0;try{delete window[x]}catch(t){s=t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=t+"/"+e,o+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(o+="&count="+this.options.limit),o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,n,i,s,r;for(n=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;n.test(o);)s=o.match(n)[1],r=null!=(i=this._getObjectProperty(e,s))?i:"",o=o.replace(n,function(){return""+r});return o},t.prototype._getObjectProperty=function(t,e){var o,n;for(e=e.replace(/\[(\w+)\]/g,".$1"),n=e.split(".");n.length;){if(o=n.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var n;return n=function(t,n){var i,s;return i=this._getObjectProperty(t,e),s=this._getObjectProperty(n,e),o?i>s?1:-1:i<s?1:-1},t.sort(n.bind(this)),t},t.prototype._filter=function(t,e){var o,n,i,s,r;for(o=[],n=function(t){if(e(t))return o.push(t)},i=0,r=t.length;i<r;i++)s=t[i],n(s);return o},t}(),function(o,r){return i=[],n=r,s="function"==typeof n?n.apply(e,i):n,!(void 0!==s&&(t.exports=s))}(this,function(){return o})}).call(this)},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-flow/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-1/lib/index.js",["/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/wonism/project/wonism.github.io-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-decorators-legacy/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/wonism/project/wonism.github.io-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/Photos.jsx':function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.photoQuery=e.default=void 0;var a,l,c=o("./node_modules/react/react.js"),p=n(c),u=o("./node_modules/prop-types/index.js"),d=n(u),h=o("./node_modules/react-helmet/lib/Helmet.js"),f=n(h),m=o("./node_modules/lodash/fp.js"),g=n(m),b=o("./node_modules/react-google-ads/dist/google-ads.js"),y=n(b),w=o("./node_modules/instafeed.js/instafeed.js"),_=n(w);o("./src/pages/photos.scss");var j=(l=a=function(t){function e(o){i(this,e);var n=s(this,t.call(this,o));return n.feed=new _.default({get:"user",userId:"self",target:"instafeed",limit:20,resolution:"standard_resolution",accessToken:"1591191525.212f7be.140265653b0a48bc8c09ec043402d9e3",clientId:"212f7be0b6d643318eda9413aecb1cf3",template:'\n        <figure class="insta-card">\n          <a href="{{link}}" target="_blank" rel="noreferrer noopener">\n            <img class="insta-card-image" src="{{image}}" />\n          </a>\n        </figure>\n      ',after:function(){}}),n}return r(e,t),e.prototype.componentDidMount=function(){this.feed.run()},e.prototype.render=function(){var t=this.props.data,e=g.default.get("site.siteMetadata.title")(t);return p.default.createElement("div",{className:"main-container"},p.default.createElement(f.default,null,p.default.createElement("title",null,e),p.default.createElement("meta",{name:"keyword",content:"JavaScript, Front-end, Developer"}),p.default.createElement("meta",{name:"og:title",content:e})),p.default.createElement("section",{className:"instafeed",id:"instafeed"}),p.default.createElement(y.default,{client:"ca-pub-1777052704513089",slot:"4491507809",style:{display:"inline-block",width:"100%"}}))},e}(c.PureComponent),a.propTypes={data:d.default.shape({}).isRequired},l);e.default=j;e.photoQuery="** extracted graphql fragment **"},"./src/pages/photos.scss":function(t,e){}});
//# sourceMappingURL=component---src-pages-photos-jsx-75d9b1a8627e492a8c4b.js.map