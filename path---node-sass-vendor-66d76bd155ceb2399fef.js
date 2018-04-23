(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{390:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-11-node-sass-vendor/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">node_modules</code> 디렉토리를 삭제하고 다시 패키지들을 설치한 뒤 <code class="hljs-text">js</code> 파일들을 번들링할 일이 있었다.<br />\n하지만 잘 번들링 되던 파일들이 번들링되지 않는 문제가 발생했다.<br />\n무슨 에러인지 봤더니, <code class="hljs-text">node-sass/vendor</code>가 없다는 에러였다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">ENOENT: no such file or directory, scandir &#39;/PROJECT_PATH/node_modules/node-sass/vendor&#39;</code></pre>\n      </div>\n<p><code class="hljs-text">node_modules</code>디렉토리를 확인해보니 <code class="hljs-text">node-sass</code>패키지는 제대로 설치가 되어있는 듯 해보였지만, <code class="hljs-text">node_modules/node-sass/vendor</code> 디렉토리가 존재하지 않았다.<br />\n<a href="https://github.com/sass/node-sass/issues"><code class="hljs-text">node-sass</code></a>의 <code class="hljs-text">Issues</code> 탭에 이미 여러 번 올라와 있는 이슈였다.<br />\n원인은 패키지 설치 이후 <code class="hljs-text">node-sass</code>의 <code class="hljs-text">scripts/install.js</code>를 실행하지 않아서였다.</p>\n<p>해결 방법은 수동으로 <code class="hljs-text">node-sass</code>의 스크립트를 실행하거나, <code class="hljs-text">node-sass</code> 패키지를 리빌드하는 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ node node_modules/node-sass/scripts/install.js\n# or\n$ npm rebuild node-sass</code></pre>\n      </div>',frontmatter:{title:"node-sass/vendor 에러",path:"/node-sass-vendor/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","npm","node-sass","trouble shooting"],date:"2017-09-11T22:57:26.000Z",components:null,tweets:null,summary:"원인은 패키지 설치 이후 `node-sass`의 `scripts/install.js`를 실행하지 않아서였다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---node-sass-vendor-66d76bd155ceb2399fef.js.map