(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{400:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2018-04-14-sequelize-methods/index.md absPath of file >>> MarkdownRemark",html:'<h2>IS NOT NULL 조건 주기</h2>\n<p><code class="hljs-text">where</code>절에 들어갈 객체의 에서 <code class="hljs-text">IS NOT NULL</code>이 되어야 할 <code class="hljs-text">컬럼</code>의 값을 <code class="hljs-text">{ ne: null }</code>로 준다.\n<code class="hljs-text">column_name</code>이 <code class="hljs-text">null</code>이 아닌 <code class="hljs-text">Row</code>들을 구할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">TableName\n  <span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    where <span class="token punctuation">:</span> <span class="token punctuation">{</span> column_name<span class="token punctuation">:</span> <span class="token punctuation">{</span> ne<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// ne : Not Equal</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">ne</code>는 <code class="hljs-text">not equal</code>을 뜻하며, 이외에도 <code class="hljs-text">gt(greater than)</code>, <code class="hljs-text">lt(less than)</code>, <code class="hljs-text">in(where in Array)</code>, <code class="hljs-text">like</code> 등이 있다.</p>\n<h2>INSERT 전에 존재 여부 체크하기</h2>\n<p><code class="hljs-text">findOrCreate</code>메소드는 <code class="hljs-text">Sequelize</code>에서 <code class="hljs-text">Row</code>를 <code class="hljs-text">INSERT</code>하기 전에 존재하는지 여부를 체크한다.<br />\n그 다음, <code class="hljs-text">Row</code>가 존재하면 <code class="hljs-text">INSERT</code>하지 않고, 존재하지 않으면 <code class="hljs-text">INSERT</code>한다.<br />\n이전에 개인 프로젝트를 진행할 때 이러한 처리를 로우 쿼리로써 해결했었지만, <code class="hljs-text">findOrCreate</code>메소드가 있었다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">TableName\n  <span class="token punctuation">.</span><span class="token function">findOrCreate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    where <span class="token punctuation">:</span> <span class="token punctuation">{</span> column_name<span class="token punctuation">:</span> <span class="token string">\'VALUE1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    defaults<span class="token punctuation">:</span> <span class="token punctuation">{</span> column_name<span class="token punctuation">:</span> <span class="token string">\'VALUE1\'</span><span class="token punctuation">,</span> column_name2<span class="token punctuation">:</span> <span class="token string">\'VALUE2\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">TableName</code> 테이블에 <code class="hljs-text">where</code> 에 해당하는 <code class="hljs-text">Row</code>가 있으면, <code class="hljs-text">INSERT</code>하지 않고, 해당하는 <code class="hljs-text">Row</code>가 없으면, <code class="hljs-text">default</code>에 있는 값들을 <code class="hljs-text">INSERT</code>한다.</p>\n<h2>Increment integer 인 값을 1 증가 시키기</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">/* import sequelize from \'sequelize\'; */</span>\n\nTableName\n  <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    increment_attribute<span class="token punctuation">:</span> sequelize<span class="token punctuation">.</span><span class="token function">literal</span><span class="token punctuation">(</span><span class="token string">\'increment_attribute + 1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Query options</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"모르고 지나쳤을 수도 있는 Sequalize 메소드",path:"/unknown-sequelize-methods/",images:["images/js.jpg"],category:"Node.js",tags:["javascript","node.js","sequelize","orm"],date:"2018-04-14T12:04:48.000Z",components:null,tweets:null,summary:"Facebook이나 Twitter에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다. 이와 같은 속성을 설정하기 위해 <meta>태그를 사용한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---unknown-sequelize-methods-f55c723292f2ea53be58.js.map