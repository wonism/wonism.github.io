webpackJsonp([0xdf3174768b7a3000],{"./node_modules/json-loader/index.js!./.cache/json/implement-bind.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"wonism's blog",author:"wonism"}},markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-08-27-implement-bind/index.md absPath of file >>> MarkdownRemark",html:'<p>.bind()는 호출될 때 인자로 전달된 객체를 this로 하는 함수를 반환하며, 다음과 같이 사용한다.</p>\n<h2>bind란?</h2>\n<p><code>.bind()</code>는 호출될 때 인자로 전달된 객체를 <code>this</code>로 하는 함수를 반환하며, 다음과 같이 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span> num<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>뼈대</h2>\n<p><code>Function.prototype.bind()</code>는 인자로 넘겨받은 객체를 <code>this</code>로 하는 함수를 반환한다.<br />\n즉, 함수를 리턴하게 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code>Function<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bindImplementation <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* ... */</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/* ... */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>실제 구현</h2>\n<p><code>Function.prototype.bind()</code>는 어떤 함수가 가리키는 <code>this</code>를 원하는 객체로 변환한다.<br />\n즉, 어떤 함수를 실행할 때, 이 함수의 <code>this</code>를 원하는 객체로 변환하기 위해 <code>apply</code>메소드를 사용하며, 첫 번째 인자로 <code>bind</code>의 인자를 전달해준다.<br />\n이 때, 인자가 넘어오지 않으면 해당 함수의 <code>this</code>를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code>Function<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> that<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이를 ES2015 문법으로 구현하면, 더 간단하다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code>Function<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"bind 메소드 간단하게 구현하기",date:"August 27, 2017",tags:["javascript","bind","this","object","function"]}}},pathContext:{path:"/implement-bind/"}}}});
//# sourceMappingURL=path---implement-bind-43179001315f159726ad.js.map