(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{419:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-28-js-patterns-4/index.md absPath of file >>> MarkdownRemark",html:'<h2>Iterator</h2>\n<p><code class="hljs-text">반복자 패턴</code>은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다.<br />\n<code class="hljs-text">반복자 패턴</code>을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다.</p>\n<h2>구현</h2>\n<p><code class="hljs-text">Iterator</code> 객체는 컬렉션 및 현재 위치에 대한 참조를 관리하며, <code class="hljs-text">first</code>, <code class="hljs-text">current</code>, <code class="hljs-text">next</code>, <code class="hljs-text">hasNext</code>, <code class="hljs-text">reset</code>, <code class="hljs-text">each</code>같은 메소드를 제공한다.\n<code class="hljs-text">반복자 패턴</code>에서는 특히 <code class="hljs-text">next</code>메소드가 중요한데, <code class="hljs-text">next()</code>를 호출하면 다음 순서의 요소를 반환하게 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">Iterator</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nIterator<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 맨 처음 요소를 가져온다.</span>\n  first<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 현재 요소를 가져온다.</span>\n  current<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      done<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 현재 요소를 가져오며, 다음 호출 시 다음 값을 가져오게 된다.</span>\n  next<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        done<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> done<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 다음 요소가 있는지 확인한다.</span>\n  hasNext<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 첫 요소를 가리키게 한다.</span>\n  reset<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 객체를 순회하며 인자로 받은 함수를 실행하도록 한다.</span>\n  each<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token function">each</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'one\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">\'삼\'</span><span class="token punctuation">,</span> <span class="token string">\'4\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> iterable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span>iterable<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterable<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// { done: false, value: \'one\' }</span>\n  <span class="token comment">// { done: false, value: 2 }</span>\n  <span class="token comment">// { done: false, value: \'삼\' }</span>\n  <span class="token comment">// { done: false, value: \'4\' }</span>\n  <span class="token comment">// { done: true }</span>\n<span class="token punctuation">}</span>\n\niterable<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { done: false, value: \'one\' }</span>\n\niterable<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// { done: false, value: \'one\' }</span>\n<span class="token comment">// { done: false, value: 2 }</span>\n<span class="token comment">// { done: false, value: \'삼\' }</span>\n<span class="token comment">// { done: false, value: \'4\' }</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p>이처럼 <code class="hljs-text">반복자 패턴</code>을 사용하면, 다양한 메소드를 통해 데이터에 쉽고 편리하게 접근할 수 있다.</p>\n<p>다음엔 <a href="/js-pattern-5">장식자 패턴</a>에 대해 알아보겠다.</p>',frontmatter:{title:"자바스크립트 패턴 - 4",path:"/js-pattern-4/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","pattern","design pattern","디자인패턴","iterator","반복자"],date:"2017-10-28T23:58:29.000Z",components:null,tweets:null,summary:"반복자 패턴은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다. 반복자 패턴을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---js-pattern-4-da3759762f25561a35c9.js.map