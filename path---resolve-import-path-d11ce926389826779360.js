(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{380:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2018-04-14-resolve-import-path/index.md absPath of file >>> MarkdownRemark",html:'<h2>상대경로, 무엇이 문제인가?</h2>\n<p>파일의 구조가 복잡한 프로젝트에서 <code class="hljs-text">import</code> 또는 <code class="hljs-text">require</code>를 사용할 때, 상대적인 경로로 파일을 불러오는 것은 귀찮을 뿐더러 실수를 유발할 수 있다.<br />\n상위 폴더로 가기 위해 <code class="hljs-text">..</code>를 사용하는 데, 아래처럼 수많은 <code class="hljs-text">..</code>가 필요할 수 있기 때문이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// /A_PATH/a.js</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> userSelectors <span class="token keyword">from</span> <span class="token string">\'../../../store/user/selectors\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>또한, 다른 경로에서 같은 파일을 불러올 경우 같은 역할을 하는 코드임에도 불구하고, <code class="hljs-text">..</code>의 개수가 다르다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// /B_PATH/b.js</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> userSelectors <span class="token keyword">from</span> <span class="token string">\'../store/user/selectors\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>절대경로로 가져오는 방법</h2>\n<p><code class="hljs-text">절대경로</code>로 파일을 불러온 다면, 아래 코드를 어떤 파일에서든 똑같이 사용할 수 있을 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> userSelectors <span class="token keyword">from</span> <span class="token string">\'~/store/user/selectors\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>위처럼 <code class="hljs-text">절대경로</code>로 파일을 불러오려면, <code class="hljs-text">webpack.config.js</code>의 <code class="hljs-text">resolve.alias</code>를 설정해주면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">module<span class="token punctuation">.</span>esports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">\'~\'</span><span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"resolve.alias로 import 개선하기",path:"/resolve-import-path/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","webpack","relative path","absolute path","resolve","import"],date:"2018-04-14T11:38:44.000Z",components:null,tweets:null,summary:"파일의 구조가 복잡한 프로젝트에서 import 또는 require를 사용할 때, 상대적인 경로로 파일을 불러오는 것은 귀찮을 뿐더러 실수를 유발할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---resolve-import-path-d11ce926389826779360.js.map