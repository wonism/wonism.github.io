(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1436:function(n,t){n.exports="@import url(\"https://fonts.googleapis.com/css?family=Inconsolata\");\n/**\n * based on zenburn.css\n *\n * Zenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>\n * based on dark.css by Ivan Sagalaev\n *\n * change .markdown into .gatsby-highlight\n * remove .hljs- prefix\n */\n.gatsby-highlight pre {\n  display: block;\n  position: relative;\n  padding: 20px 0 0;\n  background: #263238;\n  color: #dcdcdc;\n  border-radius: 5px;\n  overflow-y: hidden; }\n\n.gatsby-highlight pre:before {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  width: 10px;\n  height: 10px;\n  background-color: #ff5f56;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre:after {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 40px;\n  width: 10px;\n  height: 10px;\n  background-color: #ffbd2e;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre code:before {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 60px;\n  width: 10px;\n  height: 10px;\n  background-color: #27c93f;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre code {\n  background: none;\n  border: none;\n  border-radius: 3px;\n  display: inline-block;\n  overflow: inherit;\n  padding: 1.58333rem;\n  white-space: inherit;\n  word-wrap: normal;\n  font-family: Inconsolata, monospace; }\n\ncode {\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -hp-pre-wrap;\n  word-wrap: break-word;\n  background: transparent;\n  color: #3B9CFF;\n  display: inline;\n  font-family: D2Coding, 'D2 coding', monospace, serif;\n  max-width: 100%;\n  overflow: auto;\n  padding: 0 0.1625rem; }\n\n.gatsby-highlight {\n  position: relative; }\n\n.gatsby-highlight pre code {\n  color: #dcdcdc; }\n\n.gatsby-highlight .copy-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 4px 8px;\n  line-height: 12px;\n  color: #263238;\n  background-color: #dcdcdc;\n  background-image: linear-gradient(#ededed, #dcdcdc);\n  outline: 0;\n  border: 1px solid #cbcbcb;\n  border-radius: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  z-index: 3; }\n\n.gatsby-highlight .copy-button:hover {\n  background-color: #dcdcdc;\n  background-image: linear-gradient(#dcdcdc, #cbcbcb);\n  border-color: #cbcbcb; }\n\n.gatsby-highlight .copy-button:active {\n  background-color: #cbcbcb;\n  background-image: linear-gradient(#cbcbcb, #bababa);\n  border-color: #bababa; }\n\n.gatsby-highlight .keyword,\n.gatsby-highlight .tag,\n.gatsby-highlight .css .class,\n.gatsby-highlight .css .id,\n.gatsby-highlight .lisp .title,\n.gatsby-highlight .nginx .title,\n.gatsby-highlight .request,\n.gatsby-highlight .status,\n.gatsby-highlight .clojure .attribute {\n  color: #e3ceab; }\n\n.gatsby-highlight .django .template_tag,\n.gatsby-highlight .django .variable,\n.gatsby-highlight .django .filter .argument {\n  color: #dcdcdc; }\n\n.gatsby-highlight .number,\n.gatsby-highlight .date {\n  color: #8cd0d3; }\n\n.gatsby-highlight .dos .envvar,\n.gatsby-highlight .dos .stream,\n.gatsby-highlight .variable,\n.gatsby-highlight .apache .sqbracket {\n  color: #efdcbc; }\n\n.gatsby-highlight .dos .flow,\n.gatsby-highlight .diff .change,\n.gatsby-highlight .python .exception,\n.gatsby-highlight .python .built_in,\n.gatsby-highlight .literal,\n.gatsby-highlight .tex .special {\n  color: #efefaf; }\n\n.gatsby-highlight .diff .chunk,\n.gatsby-highlight .subst {\n  color: #8f8f8f; }\n\n.gatsby-highlight .dos .keyword,\n.gatsby-highlight .python .decorator,\n.gatsby-highlight .title,\n.gatsby-highlight .haskell .type,\n.gatsby-highlight .diff .header,\n.gatsby-highlight .ruby .class .parent,\n.gatsby-highlight .apache .tag,\n.gatsby-highlight .nginx .built_in,\n.gatsby-highlight .tex .command,\n.gatsby-highlight .prompt {\n  color: #efef8f; }\n\n.gatsby-highlight .dos .winutils,\n.gatsby-highlight .ruby .symbol,\n.gatsby-highlight .ruby .symbol .string,\n.gatsby-highlight .ruby .string {\n  color: #dca3a3; }\n\n.gatsby-highlight .diff .deletion,\n.gatsby-highlight .string,\n.gatsby-highlight .tag .value,\n.gatsby-highlight .preprocessor,\n.gatsby-highlight .pragma,\n.gatsby-highlight .built_in,\n.gatsby-highlight .sql .aggregate,\n.gatsby-highlight .javadoc,\n.gatsby-highlight .smalltalk .class,\n.gatsby-highlight .smalltalk .localvars,\n.gatsby-highlight .smalltalk .array,\n.gatsby-highlight .css .rules .value,\n.gatsby-highlight .attr_selector,\n.gatsby-highlight .pseudo,\n.gatsby-highlight .apache .cbracket,\n.gatsby-highlight .tex .formula,\n.gatsby-highlight .coffeescript .attribute {\n  color: #cc9393; }\n\n.gatsby-highlight .shebang,\n.gatsby-highlight .diff .addition,\n.gatsby-highlight .comment,\n.gatsby-highlight .java .annotation,\n.gatsby-highlight .template_comment,\n.gatsby-highlight .pi,\n.gatsby-highlight .doctype {\n  color: #7f9f7f; }\n\n.gatsby-highlight .coffeescript .javascript,\n.gatsby-highlight .javascript .xml,\n.gatsby-highlight .tex .formula,\n.gatsby-highlight .xml .javascript,\n.gatsby-highlight .xml .vbscript,\n.gatsby-highlight .xml .css,\n.gatsby-highlight .xml .cdata {\n  opacity: 0.5; }\n"},1437:function(n,t){n.exports="@import url(\"https://fonts.googleapis.com/css?family=Inconsolata\");\n/**\n * based on zenburn.css\n *\n * Zenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>\n * based on dark.css by Ivan Sagalaev\n *\n * change .markdown into .gatsby-highlight\n * remove .hljs- prefix\n */\n.gatsby-highlight pre {\n  display: block;\n  position: relative;\n  padding: 20px 0 0;\n  background: #263238;\n  color: #dcdcdc;\n  border-radius: 5px;\n  overflow-y: hidden; }\n\n.gatsby-highlight pre:before {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  width: 10px;\n  height: 10px;\n  background-color: #ff5f56;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre:after {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 40px;\n  width: 10px;\n  height: 10px;\n  background-color: #ffbd2e;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre code:before {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 60px;\n  width: 10px;\n  height: 10px;\n  background-color: #27c93f;\n  border-radius: 50%;\n  content: ''; }\n\n.gatsby-highlight pre code {\n  background: none;\n  border: none;\n  border-radius: 3px;\n  display: inline-block;\n  overflow: inherit;\n  padding: 1.58333rem;\n  white-space: inherit;\n  word-wrap: normal;\n  font-family: Inconsolata, monospace; }\n\ncode {\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -hp-pre-wrap;\n  word-wrap: break-word;\n  background: transparent;\n  color: #3B9CFF;\n  display: inline;\n  font-family: D2Coding, 'D2 coding', monospace, serif;\n  max-width: 100%;\n  overflow: auto;\n  padding: 0 0.1625rem; }\n\n.gatsby-highlight {\n  position: relative; }\n\n.gatsby-highlight pre code {\n  color: #dcdcdc; }\n\n.gatsby-highlight .copy-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 4px 8px;\n  line-height: 12px;\n  color: #263238;\n  background-color: #dcdcdc;\n  background-image: linear-gradient(#ededed, #dcdcdc);\n  outline: 0;\n  border: 1px solid #cbcbcb;\n  border-radius: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  z-index: 3; }\n\n.gatsby-highlight .copy-button:hover {\n  background-color: #dcdcdc;\n  background-image: linear-gradient(#dcdcdc, #cbcbcb);\n  border-color: #cbcbcb; }\n\n.gatsby-highlight .copy-button:active {\n  background-color: #cbcbcb;\n  background-image: linear-gradient(#cbcbcb, #bababa);\n  border-color: #bababa; }\n\n.gatsby-highlight .keyword,\n.gatsby-highlight .tag,\n.gatsby-highlight .css .class,\n.gatsby-highlight .css .id,\n.gatsby-highlight .lisp .title,\n.gatsby-highlight .nginx .title,\n.gatsby-highlight .request,\n.gatsby-highlight .status,\n.gatsby-highlight .clojure .attribute {\n  color: #e3ceab; }\n\n.gatsby-highlight .django .template_tag,\n.gatsby-highlight .django .variable,\n.gatsby-highlight .django .filter .argument {\n  color: #dcdcdc; }\n\n.gatsby-highlight .number,\n.gatsby-highlight .date {\n  color: #8cd0d3; }\n\n.gatsby-highlight .dos .envvar,\n.gatsby-highlight .dos .stream,\n.gatsby-highlight .variable,\n.gatsby-highlight .apache .sqbracket {\n  color: #efdcbc; }\n\n.gatsby-highlight .dos .flow,\n.gatsby-highlight .diff .change,\n.gatsby-highlight .python .exception,\n.gatsby-highlight .python .built_in,\n.gatsby-highlight .literal,\n.gatsby-highlight .tex .special {\n  color: #efefaf; }\n\n.gatsby-highlight .diff .chunk,\n.gatsby-highlight .subst {\n  color: #8f8f8f; }\n\n.gatsby-highlight .dos .keyword,\n.gatsby-highlight .python .decorator,\n.gatsby-highlight .title,\n.gatsby-highlight .haskell .type,\n.gatsby-highlight .diff .header,\n.gatsby-highlight .ruby .class .parent,\n.gatsby-highlight .apache .tag,\n.gatsby-highlight .nginx .built_in,\n.gatsby-highlight .tex .command,\n.gatsby-highlight .prompt {\n  color: #efef8f; }\n\n.gatsby-highlight .dos .winutils,\n.gatsby-highlight .ruby .symbol,\n.gatsby-highlight .ruby .symbol .string,\n.gatsby-highlight .ruby .string {\n  color: #dca3a3; }\n\n.gatsby-highlight .diff .deletion,\n.gatsby-highlight .string,\n.gatsby-highlight .tag .value,\n.gatsby-highlight .preprocessor,\n.gatsby-highlight .pragma,\n.gatsby-highlight .built_in,\n.gatsby-highlight .sql .aggregate,\n.gatsby-highlight .javadoc,\n.gatsby-highlight .smalltalk .class,\n.gatsby-highlight .smalltalk .localvars,\n.gatsby-highlight .smalltalk .array,\n.gatsby-highlight .css .rules .value,\n.gatsby-highlight .attr_selector,\n.gatsby-highlight .pseudo,\n.gatsby-highlight .apache .cbracket,\n.gatsby-highlight .tex .formula,\n.gatsby-highlight .coffeescript .attribute {\n  color: #cc9393; }\n\n.gatsby-highlight .shebang,\n.gatsby-highlight .diff .addition,\n.gatsby-highlight .comment,\n.gatsby-highlight .java .annotation,\n.gatsby-highlight .template_comment,\n.gatsby-highlight .pi,\n.gatsby-highlight .doctype {\n  color: #7f9f7f; }\n\n.gatsby-highlight .coffeescript .javascript,\n.gatsby-highlight .javascript .xml,\n.gatsby-highlight .tex .formula,\n.gatsby-highlight .xml .javascript,\n.gatsby-highlight .xml .vbscript,\n.gatsby-highlight .xml .css,\n.gatsby-highlight .xml .cdata {\n  opacity: 0.5; }\n\n#post-contents table {\n  margin: 16px 0 0; }\n\n#post-contents tr {\n  background-color: #fff; }\n\n#post-contents tr:nth-child(2n) {\n  background-color: #f6f8fa; }\n\n#post-contents th {\n  font-weight: 700; }\n\n#post-contents th,\n#post-contents td {\n  padding: 4px 12px;\n  border: 1px solid #eee; }\n"},457:function(n,t,e){"use strict";e.r(t);var i=e(471),a=e.n(i),r=e(2),o=e.n(r),g=e(472),h=e(485),l=e(489),s=e(636),c=e(60),p=e.n(c),d=e(589),b=e.n(d),u=e(554),f=e.n(u),y=e(479),m=e.n(y),x=e(720),v=e.n(x),w=e(493),k=e.n(w),j=e(487),E=e.n(j),_=e(572),q=e.n(_),z=e(535),R=e.n(z),C=e(480),M=e.n(C),I=e(1),D=e.n(I),S=e(481),O=e.n(S),N=e(482),T=e.n(N),A=e(602),F=e.n(A);function B(){var n=a()(["\n  margin: 1em 0;\n\n  a {\n    color: #000;\n  }\n\n  span,\n  img {\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  img {\n    margin: 0 4px 0 0;\n    border-radius: 50%;\n  }\n\n  small {\n    color: #999;\n    font-size: 90%;\n  }\n"]);return B=function(){return n},n}var J=g.a.section(B()),Y=function(){return o.a.createElement(J,null,o.a.createElement("a",{href:"https://github.com/wonism",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/13835762?s=460&v=4",width:"48",height:"48",alt:""}),o.a.createElement("span",null,"Front-end developer WONISM",o.a.createElement("br",null),o.a.createElement("small",null,"Interested in ReactJS, RxJS and ReasonML."))))},L=e(724),U=e(508),W=e(550);function K(){var n=a()(["\n  position: relative;\n  margin: 0 0 48px;\n  padding: 56.25% 0 0;\n  width: 100%;\n  overflow: hidden;\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n    height: auto;\n  }\n"]);return K=function(){return n},n}function P(){var n=a()(["\n  padding: 1em 0 4em;\n  line-height: 1.6em;\n\n  h2 {\n    margin: 24px 0 10px;\n    font-size: 28px;\n  }\n\n  h3 {\n    margin: 24px 0 10px;\n    font-size: 24px;\n  }\n\n  h4 {\n    margin: 24px 0 10px;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 16px 0 0;\n    font-size: 16px;\n  }\n\n  blockquote {\n    margin: 40px 0 0;\n    padding: 0 0 0 2em;\n    line-height: 1.2em;\n    color: #aaa;\n    font-style: italic;\n    font-family: 'Kaushan Script';\n    font-size: 24px;\n  }\n\n  pre {\n    margin: 20px 0 0;\n  }\n"]);return P=function(){return n},n}function V(){var n=a()(["\n  margin: 1em 0;\n\n  a {\n    margin: 0 0 0 4px;\n    color: #000;\n    text-decoration: blink;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return V=function(){return n},n}function Z(){var n=a()(["\n  ","\n"]);return Z=function(){return n},n}var G=e(1436),H=g.a.div(Z(),G),Q=g.a.div(V()),X=g.a.section(P()),$=g.a.figure(K()),nn=function(n){function t(t){var e,i=(e=n.call(this,t)||this).props,a=i.location,r=i.loadDisqus,o=a.pathname;return r({url:v()(U.SITE_URL,o),identifier:o,title:m()("data.markdownRemark.frontmatter.title")(e.props)}),e}p()(t,n);var i=t.prototype;return i.componentDidMount=function(){var n=this.props,t=n.data,e=n.createCopyButton,i=n.renderTweets,a=n.renderComponents,r=m()("markdownRemark.frontmatter")(t),o=r.tweets,g=r.components;e(),i(o),a(g)},i.render=function(){var n=this.props.data,t=M()(m()("markdownRemark.frontmatter"),b()({}))(n),i=t.title,a=t.tags,r=t.date,g=t.images,h=f()(g);return o.a.createElement(H,null,o.a.createElement(L.a,null,o.a.createElement(T.a,null,o.a.createElement("title",null,"WONISM | "+i),o.a.createElement("meta",{name:"og:title",content:"WONISM | "+i})),q()(h)?null:o.a.createElement($,null,o.a.createElement("img",{src:k()("//")(h)?h:e(509)("./"+h),alt:i})),o.a.createElement("h1",null,i),o.a.createElement("time",null,Object(W.a)(r)),R()(a)?null:o.a.createElement(Q,null,o.a.createElement(F.a,null),E()(function(n){return o.a.createElement(O.a,{key:n,to:"/tags/"+n+"/1"},o.a.createElement("small",null,n))})(a)),o.a.createElement(Y,null),o.a.createElement(X,null,o.a.createElement("div",{id:"post-contents",dangerouslySetInnerHTML:{__html:m()("markdownRemark.html")(n)}})),o.a.createElement("div",{id:"disqus_thread"}),o.a.createElement("noscript",null,"Please enable JavaScript to view the  ",o.a.createElement("a",{href:"https://disqus.com/?ref_noscript"},"comments powered by Disqus."))))},t}(r.PureComponent);nn.propTypes={data:D.a.shape({date:D.a.object}).isRequired,location:D.a.shape({}).isRequired,loadDisqus:D.a.func.isRequired,renderTweets:D.a.func.isRequired,renderComponents:D.a.func.isRequired,createCopyButton:D.a.func.isRequired};var tn=nn,en=Object(l.b)(function(){return{}},{loadDisqus:function(n){var t=n.url,e=n.identifier,i=n.title;return function(n){return n({type:s.i,url:t,identifier:e,title:i})}},renderTweets:function(n){return function(t){return t({type:s.o,tweets:n})}},renderComponents:function(n){return function(t){return t({type:s.l,components:n})}},createCopyButton:function(){return function(n){return n({type:s.a})}}})(tn);function an(){var n=a()(["\n  ","\n"]);return an=function(){return n},n}e.d(t,"pageQuery",function(){return gn});var rn=e(1437),on=g.a.div(an(),rn),gn=(t.default=function(n){return o.a.createElement(h.a,n,o.a.createElement(on,null,o.a.createElement(en,n)))},"2473355993")},493:function(n,t,e){var i=e(470)("includes",e(540));i.placeholder=e(468),n.exports=i},498:function(n,t,e){n.exports=e.p+"static/me-8e1b3765d62e15615d7e3fbcf557f91b.jpg"},509:function(n,t,e){var i={"./camscon/1.png":510,"./camscon/2.png":511,"./camscon/3.png":512,"./camscon/index.md":513,"./ciceron/1.png":514,"./ciceron/2.png":515,"./ciceron/index.md":516,"./goodoc/1.png":517,"./goodoc/2.png":518,"./goodoc/3.png":519,"./goodoc/index.md":520,"./images/browser.jpg":521,"./images/fp.jpg":522,"./images/git.jpg":523,"./images/html.jpg":524,"./images/ide.jpg":525,"./images/js.jpg":526,"./images/posts/critical-rendering-path/cssom.png":557,"./images/posts/critical-rendering-path/dom.png":558,"./images/posts/critical-rendering-path/render-tree.png":559,"./images/reactjs.jpg":527,"./images/redux.jpg":528,"./images/rxjs.jpg":529,"./korbit/1.png":530,"./korbit/2.png":531,"./korbit/index.md":532,"./logo.png":533,"./me.jpg":498,"./resume/index.md":534};function a(n){var t=r(n);return e(t)}function r(n){var t=i[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}a.keys=function(){return Object.keys(i)},a.resolve=r,n.exports=a,a.id=509},510:function(n,t,e){n.exports=e.p+"static/1-9d99f445d61a218c8fdc86cabf58e70d.png"},511:function(n,t,e){n.exports=e.p+"static/2-b0f343281e7891e492aea09009686bb3.png"},512:function(n,t,e){n.exports=e.p+"static/3-ae8e38891267f948c860ba4c39adcff6.png"},513:function(n,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Camscon"')},514:function(n,t,e){n.exports=e.p+"static/1-fe6a4a7379030be785baf37c8df72e62.png"},515:function(n,t,e){n.exports=e.p+"static/2-9e7618865c7aebdfb6aa80db2659e5c7.png"},516:function(n,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Ciceron"')},517:function(n,t,e){n.exports=e.p+"static/1-d93e0ca338000a4315c74ec81f8fc325.png"},518:function(n,t,e){n.exports=e.p+"static/2-c960320e42670dc45aec9d373358879d.png"},519:function(n,t,e){n.exports=e.p+"static/3-be59c38c351133e4b696caaf06e412b5.png"},520:function(n,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Goodoc"')},521:function(n,t,e){n.exports=e.p+"static/browser-beb2a01cf264084bc7641b3b746a4578.jpg"},522:function(n,t,e){n.exports=e.p+"static/fp-d67e3bc7ef3b19e943f220e76fc30af6.jpg"},523:function(n,t,e){n.exports=e.p+"static/git-00c368fdc6182da2b8a2ed36b436a912.jpg"},524:function(n,t,e){n.exports=e.p+"static/html-dbbe558213cd6cf57ad5dd49c91a8774.jpg"},525:function(n,t,e){n.exports=e.p+"static/ide-e14d045a1802dd57eae29e8d0543ac1b.jpg"},526:function(n,t,e){n.exports=e.p+"static/js-401cd01e8522c5d16b93f7a237b81943.jpg"},527:function(n,t,e){n.exports=e.p+"static/reactjs-0cd37998fdd55154083a64432279fc80.jpg"},528:function(n,t,e){n.exports=e.p+"static/redux-205078bb623e46a71e5acaabbb9c727d.jpg"},529:function(n,t,e){n.exports=e.p+"static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg"},530:function(n,t,e){n.exports=e.p+"static/1-d4545b833986f3745cd625e50a905ab7.png"},531:function(n,t,e){n.exports=e.p+"static/2-f92f1eab28bf37f66584ba76683d8e63.png"},532:function(n,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Korbit"')},533:function(n,t,e){n.exports=e.p+"static/logo-02594e4c25aff5c7c43e3762807f2a66.png"},534:function(n,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "resume"\n| title: "Resume"')},536:function(n,t,e){var i=e(470)("slice",e(574));i.placeholder=e(468),n.exports=i},537:function(n,t,e){var i=e(470)("split",e(606));i.placeholder=e(468),n.exports=i},540:function(n,t,e){var i=e(564),a=e(490),r=e(552),o=e(504),g=e(541),h=Math.max;n.exports=function(n,t,e,l){n=a(n)?n:g(n),e=e&&!l?o(e):0;var s=n.length;return e<0&&(e=h(s+e,0)),r(n)?e<=s&&n.indexOf(t,e)>-1:!!s&&i(n,t,e)>-1}},541:function(n,t,e){var i=e(542),a=e(506);n.exports=function(n){return null==n?[]:i(n,a(n))}},542:function(n,t,e){var i=e(548);n.exports=function(n,t){return i(t,function(t){return n[t]})}},543:function(n,t,e){var i=e(566),a=e(490),r=e(551),o=e(503);n.exports=function(n,t,e){if(!o(e))return!1;var g=typeof t;return!!("number"==g?a(e)&&r(t,e.length):"string"==g&&t in e)&&i(e[t],n)}},547:function(n,t){n.exports=function(n,t,e){var i=-1,a=n.length;t<0&&(t=-t>a?0:a+t),(e=e>a?a:e)<0&&(e+=a),a=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(a);++i<a;)r[i]=n[i+t];return r}},550:function(n,t,e){"use strict";var i=e(573),a=e.n(i),r=e(536),o=e.n(r),g=e(480),h=e.n(g),l=e(537),s=e.n(l);t.a=function(n){var t=s()("T")(n),e=t[0],i=t[1];return e+" "+h()(o()(0,5),a()(""))(i)}},572:function(n,t,e){var i=e(470)("isNil",e(604),e(486));i.placeholder=e(468),n.exports=i},573:function(n,t,e){var i=e(470)("join",e(605));i.placeholder=e(468),n.exports=i},574:function(n,t,e){var i=e(547),a=e(543),r=e(504);n.exports=function(n,t,e){var o=null==n?0:n.length;return o?(e&&"number"!=typeof e&&a(n,t,e)?(t=0,e=o):(t=null==t?0:r(t),e=void 0===e?o:r(e)),i(n,t,e)):[]}},585:function(n,t,e){var i=e(547);n.exports=function(n,t,e){var a=n.length;return e=void 0===e?a:e,!t&&e>=a?n:i(n,t,e)}},586:function(n,t,e){var i=e(609),a=e(553),r=e(610);n.exports=function(n){return a(n)?r(n):i(n)}},604:function(n,t){n.exports=function(n){return null==n}},605:function(n,t){var e=Array.prototype.join;n.exports=function(n,t){return null==n?"":e.call(n,t)}},606:function(n,t,e){var i=e(568),a=e(585),r=e(553),o=e(543),g=e(607),h=e(586),l=e(507);n.exports=function(n,t,e){return e&&"number"!=typeof e&&o(n,t,e)&&(t=e=void 0),(e=void 0===e?4294967295:e>>>0)?(n=l(n))&&("string"==typeof t||null!=t&&!g(t))&&!(t=i(t))&&r(n)?a(h(n),0,e):n.split(t,e):[]}},607:function(n,t,e){var i=e(608),a=e(577),r=e(578),o=r&&r.isRegExp,g=o?a(o):i;n.exports=g},608:function(n,t,e){var i=e(538),a=e(496);n.exports=function(n){return a(n)&&"[object RegExp]"==i(n)}},609:function(n,t){n.exports=function(n){return n.split("")}},610:function(n,t){var e="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",g="(?:"+e+"|"+i+")?",h="[\\ufe0e\\ufe0f]?"+g+"(?:\\u200d(?:"+[a,r,o].join("|")+")[\\ufe0e\\ufe0f]?"+g+")*",l="(?:"+[a+e+"?",e,r,o,"[\\ud800-\\udfff]"].join("|")+")",s=RegExp(i+"(?="+i+")|"+l+h,"g");n.exports=function(n){return n.match(s)||[]}},720:function(n,t,e){var i=e(470)("add",e(721));i.placeholder=e(468),n.exports=i},721:function(n,t,e){var i=e(722)(function(n,t){return n+t},0);n.exports=i},722:function(n,t,e){var i=e(723),a=e(568);n.exports=function(n,t){return function(e,r){var o;if(void 0===e&&void 0===r)return t;if(void 0!==e&&(o=e),void 0!==r){if(void 0===o)return r;"string"==typeof e||"string"==typeof r?(e=a(e),r=a(r)):(e=i(e),r=i(r)),o=n(e,r)}return o}}},723:function(n,t,e){var i=e(565);n.exports=function(n){return"number"==typeof n?n:i(n)?NaN:+n}},724:function(n,t,e){"use strict";var i=e(471),a=e.n(i);function r(){var n=a()(["\n  margin: auto;\n  padding: 120px 0 0;\n  max-width: 720px;\n  min-height: 100vh;\n  font-size: 14px;\n  @media (max-width: 1024px) {\n    padding: 70px 16px 0;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: '';\n    clear: both;\n  }\n\n  h1 {\n    margin: .67em 0;\n    font-size: 36px;\n  }\n\n  time {\n    margin: 1em 0;\n    font-size: 14px;\n  }\n"]);return r=function(){return n},n}var o=e(472).a.section(r());t.a=o}}]);
//# sourceMappingURL=component---src-templates-post-jsx-51a75c84e94edd0986ca.js.map