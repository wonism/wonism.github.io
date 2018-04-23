(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{403:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-08-28-apply-bind-call/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">.apply()</code>, <code class="hljs-text">.bind()</code>, <code class="hljs-text">.call()</code>는 일급 객체인 <code class="hljs-text">Function</code>의 메소드로 함수의 <code class="hljs-text">this</code>를 바꿔준다. (즉, 이 메소드들을 통해 호출된 함수의 스코프를 변경하는 것과 같다.)</p>\n<h2>apply</h2>\n<p><code class="hljs-text">.apply()</code> 메소드는 주어진 <code class="hljs-text">this</code>값과 <code class="hljs-text">arguments</code>혹은 <code class="hljs-text">array</code>로 함수를 호출한다. (<code class="hljs-text">arguments</code>는 유사배열 객체로 <code class="hljs-text">.length</code>등의 <code class="hljs-text">property</code>가 있다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">personContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    personName<span class="token punctuation">:</span> <span class="token string">\'Jaewon\'</span><span class="token punctuation">,</span>\n    say<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> says </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  person<span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arguments[0] : Hi, arguments[1] : Hello</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">personContainer</span><span class="token punctuation">(</span><span class="token string">\'Hi\'</span><span class="token punctuation">,</span> <span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Jaewon says Hello</span>\n</code></pre>\n      </div>\n<h2>call</h2>\n<p><code class="hljs-text">.apply()</code>와 유사하지만, <code class="hljs-text">.call()</code> 은 (유사)배열 대신, 값들을 하나하나 전달하여 함수를 호출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> john <span class="token operator">=</span> <span class="token punctuation">{</span>\n  personName<span class="token punctuation">:</span> <span class="token string">\'John\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  personName<span class="token punctuation">:</span> <span class="token string">\'Jaewon\'</span><span class="token punctuation">,</span>\n  say<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>personName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> says </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> str <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nperson<span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>john<span class="token punctuation">,</span> <span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'John says Hello.\'</span>\nperson<span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'Jaewon says Hello.\'</span>\n</code></pre>\n      </div>\n<h2>bind</h2>\n<p><code class="hljs-text">.bind()</code>는 호출될 때 인자로 전달된 객체를 <code class="hljs-text">this</code>로 하는 함수를 반환한다. 즉, 함수가 가리키는 <code class="hljs-text">this</code>를 바꾼다고 봐도 된다.<br />\n(함수 안에서 <code class="hljs-text">this</code>는 해당 함수를 호출한 객체이다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> num<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">power</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1764</span>\npower<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>\n</code></pre>\n      </div>\n<p>아래 예제에서는 객체의 메소드를 일반 함수로 추출한 뒤, 이 함수의 실행 컨텍스트를 알아볼 수 있는 코드다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  personName<span class="token punctuation">:</span> <span class="token string">\'Jaewon\'</span><span class="token punctuation">,</span>\n  say<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personName<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personName<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personName <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> says </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> str <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> func <span class="token operator">=</span> person<span class="token punctuation">.</span>say<span class="token punctuation">;</span>\n<span class="token function">func</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'undefined says Hello\'</span>\n<span class="token comment">// \'undefined\' undefined window</span>\n\n<span class="token keyword">const</span> func2 <span class="token operator">=</span> person<span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">func2</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'Jaewon says Hello\'</span>\n<span class="token comment">// \'string\' Jaewon { personName: \'Jaewon\', say: function }</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">func</code>의 <code class="hljs-text">this</code>는 <code class="hljs-text">window</code>이기 때문에 <code class="hljs-text">this.personName</code>은 <code class="hljs-text">undefined</code>이다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">MDN : apply</a></li>\n<li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call">MDN : call</a></li>\n<li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">MDN : bind</a></li>\n</ul>',frontmatter:{title:"Function 객체의 apply, bind, call",path:"/apply-bind-call/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","apply","bind","call","this"],date:"2017-08-28T20:49:39.000Z",components:null,tweets:null,summary:".apply(), .bind(), .call() 는 일급 객체인 Function 의 메소드로 함수에 this 를 바꿔준다. (즉, 이 메소드들을 통해 호출된 함수의 스코프를 변경하는 것과 같다.)"}}},pageContext:{}}}}]);
//# sourceMappingURL=path---apply-bind-call-3a648d33375f1a975b65.js.map