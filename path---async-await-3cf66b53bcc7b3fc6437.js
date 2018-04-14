(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{408:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-03-async-await/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">ES2017(ECMA-262)</code>에서 새롭게 추가된 <code class="hljs-text">async/await</code>는 비동기 함수를 처리하기 위한 키워드이다.<br />\n처음 제안된 것은 <a href="https://blogs.msdn.microsoft.com/typescript/2015/11/30/announcing-typescript-1-7/">TypeScript 1.7</a>였다.<br />\n또한, <code class="hljs-text">async/await</code>는 <code class="hljs-text">Promise</code>위에 구축되었고, 기존의 모든 프로미스 기반 API와 호환되기 때문에 프로미스와 같이 사용하거나, 프로미스를 대체할 수 있다.<br />\n비동기 동작을 위한 동기식 구문을 제공함으로써 코드 가독성을 높일 수 있으며, 에러 핸들링을 위해 <code class="hljs-text">try/catch</code>를 사용한다.</p>\n<h2>시작하기 전에</h2>\n<p><code class="hljs-text">async</code>와 <code class="hljs-text">await</code>는 키워드이므로 <code class="hljs-text">polyfill</code>이 없으며, 이전 브라우저를 지원하려면, <code class="hljs-text">babel</code> 등 트랜스파일러를 사용해야 한다.<br />\n사용하는 브라우저가 <code class="hljs-text">async</code>, <code class="hljs-text">await</code>를 지원하는지 확인하려면, <a href="http://caniuse.com/">Can I use?</a>에서 해당 키워드를 검색하면 된다.</p>\n<h2>예제 코드를 통해 async/await 살펴보기</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFunc</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> resolvedValue <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> resolvedValue <span class="token operator">+</span> <span class="token number">500</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 42</span>\n<span class="token comment">// 542</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">async</code>키워드는 일반적인 함수를 자동으로 프로미스 형태로 만들며, <code class="hljs-text">async</code>함수를 호출하면 해당 함수가 무엇을 반환하든 <code class="hljs-text">resolve</code>된다. 또한, <code class="hljs-text">async</code> 함수는 <code class="hljs-text">await</code>의 사용을 가능하게 한다.<br />\n<code class="hljs-text">await</code>키워드는 프로미스 객체와 작동하며, 함수의 호출 앞에 사용되면 프로미스가 해결될 때까지 코드 실행을 중단하게 한다. <code class="hljs-text">await</code>는 오직 <code class="hljs-text">async</code>함수와 사용될 수 있다.</p>\n<p><code class="hljs-text">asyncFunc</code>를 일반 프로미스 스타일로 재작성하면, 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">return</span> resolvedValue <span class="token operator">+</span> <span class="token number">500</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>에러 핸들링</h2>\n<p>프로미스는 해결(<code class="hljs-text">resolve</code>)될 수도 있고, 거절(<code class="hljs-text">reject</code>)될 수 있으며, 거절된다면 프로미스 객체의 <code class="hljs-text">Promise.prototype.catch</code>메소드를 통해 처리한다.<br />\n<code class="hljs-text">async/await</code>의 경우에는 <code class="hljs-text">try { ... } catch { ... }</code>를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">\'Error occured!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFunc</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> resolvedValue <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> resolvedValue <span class="token operator">+</span> <span class="token number">500</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token string">\'Error occured when \\\'willBeAwaited\\\' is executed\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Error occured!</span>\n<span class="token comment">// Error occured when \'willBeAwaited\' is executed</span>\n</code></pre>\n      </div>\n<p>만약, <code class="hljs-text">async</code> 함수에서 거절된 프로미스를 반환하려면 <code class="hljs-text">throw</code>를 통해 에러를 던지면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">\'Error occured!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncFunc</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> resolvedValue <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">willBeAwaited</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> resolvedValue <span class="token operator">+</span> <span class="token number">500</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resolvedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Error occured!</span>\n<span class="token comment">// Error occured!</span>\n</code></pre>\n      </div>\n<h2>async/await의 한계</h2>\n<p><em>1. <code class="hljs-text">async</code>가 없이는 <code class="hljs-text">await</code>를 사용할 수 없다.</em></p>\n<p>전역 스코프나 일반 함수 스코프 안에서 <code class="hljs-text">await</code>를 직접 사용할 수 없음을 의미한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// const num = await one();</span>\n<span class="token comment">// can not be executed</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><em>2. <code class="hljs-text">Promise.all</code>과 같은 경우를 대체할 수 없다.</em></p>\n<p>모든 비동기 호출이 끝날 때까지 기다려야 하는 경우, <code class="hljs-text">Promise.all</code>을 사용하는 것이 훨씬 좋다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span>ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">awaitAyncFunctions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> end <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`execution time is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">seconds.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// execution time is 6seconds.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">awaitAyncFunctions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span>\n  Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> end <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`execution time is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">seconds.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// execution time is 3seconds.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>참고</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">MDN : async</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">MDN : await</a></li>\n</ul>',frontmatter:{title:"Async / Await",path:"/async-await/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","async","await","callback","promise","es2017"],date:"2017-09-03T23:52:32.000Z",components:null,tweets:null,summary:"ES2017(ECMA-262)에서 새롭게 추가된 async/await는 비동기 함수를 처리하기 위한 키워드이다. 처음 제안된 것은 TypeScript 1.7였다.  또한, async/await는 Promise위에 구축되었고, 기존의 모든 프로미스 기반 API와 호환되기 때문에 프로미스와 같이 사용하거나, 프로미스를 대체할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---async-await-3cf66b53bcc7b3fc6437.js.map