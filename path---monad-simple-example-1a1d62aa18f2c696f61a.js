(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{420:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-26-what-is-monad/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Monad</code>는 순서가 있는 연산을 처리할 때 사용되는 디자인 패턴으로 부작용을 관리하기 위해 함수형 프로그래밍 언어에서 사용된다.</p>\n<h2>간단한 모나드 구현</h2>\n<h3>f⋄g(x) = f(g(x))</h3>\n<p>삼각함수 <code class="hljs-text">sine</code>의 값을 구하는 <code class="hljs-text">Math.sin</code>을 래핑하는 함수 <code class="hljs-text">sine</code>과 숫자의 큐브를 구하는 래퍼 함수가 있다고 가정한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">sine</span> <span class="token operator">=</span> x <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">sine</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span>PI <span class="token operator">*</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">cube</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span>x <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 27</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">x</code>를 입력받는 <code class="hljs-text">sine</code>의 반환값을 <code class="hljs-text">cube</code>에 전달하는 함수는 다음과 같이 구성될 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">cubeThenSine</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token function">sine</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">cubeThenSine</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5958232365909556</span>\n</code></pre>\n      </div>\n<p>함수 구성을 캡슐화하는 <code class="hljs-text">compose</code>를 사용한다면 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// posibble to use Ramda\'s or Lodash\'s</span>\n\n<span class="token keyword">const</span> sineCube <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>cube<span class="token punctuation">,</span> sine<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">sineCube</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5958232365909556</span>\n</code></pre>\n      </div>\n<h3>함수 구성</h3>\n<p><strong>로깅</strong></p>\n<p>함수가 호출되었다는 것을 추적하기 위해 <code class="hljs-text">console.log</code>를 사용하는 대신 함수가 한 쌍의 값을 반환하도록 수정한다. (<code class="hljs-text">console.log</code>는 부작용을 일으키기 때문이다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">sine</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'sine was called.\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">cube</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">[</span>x <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">\'cube was called.\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">sine</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0.9092974268256817, \'sine was called.\']</span>\n<span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, \'cube was called.\']</span>\n<span class="token function">compose</span><span class="token punctuation">(</span>sine<span class="token punctuation">,</span> cube<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [NaN, \'sine was called.\']</span>\n</code></pre>\n      </div>\n<p>위 함수는 두 가지 측면에서 예상치 못한 값을 반환한다.</p>\n<ol>\n<li><code class="hljs-text">sine</code>은 <code class="hljs-text">Math.sin</code>을 계산하려고 하지만, 입력받은 인자가 숫자가 아니기 때문에 <code class="hljs-text">NaN</code>을 반환하게 된다.</li>\n<li><code class="hljs-text">cube</code>의 반환값의 2번째 원소인 <code class="hljs-text">cube was called.</code>가 사라진다.</li>\n</ol>\n<p>이를 해결하기 위해 각 함수의 반환값을 분리하고 관심사에 따라 다시 결합한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">composeM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>z<span class="token punctuation">,</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>z<span class="token punctuation">,</span> s <span class="token operator">+</span> t<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">composeM</span><span class="token punctuation">(</span>sine<span class="token punctuation">,</span> cube<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.956375928404503, \'cube was called.sine was called.\'</span>\n</code></pre>\n      </div>\n<h3>Bind</h3>\n<p>각각의 함수를 그대로 사용하려면, 원하는 형식으로 변환하는 도구를 제공하는 것이 좋다.<br />\n이를 <code class="hljs-text">bind</code> 함수라고 하는데, <code class="hljs-text">Haskell</code>에서는 <code class="hljs-text">&gt;&gt;=</code>로 사용된다.<br />\n<code class="hljs-text">bind</code>는 <code class="hljs-text">Number -&gt; (Number, String)</code>함수를 받아 <code class="hljs-text">(Number, String) -&gt; (Number, String)</code>함수를 반환한다.<br />\n(이 <code class="hljs-text">bind</code>는 <code class="hljs-text">Function.prototype.bind</code>와는 전혀 다르다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">bind</span> <span class="token operator">=</span> f <span class="token operator">=></span> <span class="token punctuation">(</span>tuple<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> s<span class="token punctuation">]</span> <span class="token operator">=</span> tuple<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> s <span class="token operator">+</span> t<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이 <code class="hljs-text">bind</code>함수는 다음과 같이 사용할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token function">composeM</span><span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>sine<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">bind</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.956375928404503, \'cube was called.sine was called.\'</span>\n</code></pre>\n      </div>\n<h3>Unit</h3>\n<p><code class="hljs-text">composeM</code>된 함수의 인자로 쓸데 없는 <code class="hljs-text">&#39;&#39;</code>를 넘기고 있다.<br />\n함수를 변환하는 것 뿐만 아니라 값을 수용가능한 형태로 변환하는 것이 필요하다.<br />\n함수 <code class="hljs-text">unit</code>는이를 위한 함수로, 함수가 사용할 수 있는 기본 컨테이너로 래핑하는 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">unit</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">composeM</span><span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>sine<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">bind</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">unit</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.956375928404503, \'cube was called.sine was called.\'</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">composeM(bind(sine), bind(cube))</code>와 <code class="hljs-text">unit</code>을 구성할수도 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">composeM</span><span class="token punctuation">(</span><span class="token function">bind</span><span class="token punctuation">(</span>sine<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">bind</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.956375928404503, \'cube was called.sine was called.\'</span>\n</code></pre>\n      </div>\n<h3>Lift</h3>\n<p><code class="hljs-text">lift</code>는 <code class="hljs-text">Number -&gt; Number</code> 함수를 받아 <code class="hljs-text">Number -&gt; (Number, String)</code> 함수를 반환하며, 다음과 같이 구현할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">lift</span> <span class="token operator">=</span> f <span class="token operator">=></span> <span class="token function">compose</span><span class="token punctuation">(</span>unit<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">lift</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>참조</h2>\n<ul>\n<li><a href="https://blog.jcoglan.com/2011/03/05/translation-from-haskell-to-javascript-of-selected-portions-of-the-best-introduction-to-monads-ive-ever-read/">Translation from Haskell to JavaScript of selected portions of the best introduction to monads I’ve ever read</a></li>\n</ul>',frontmatter:{title:"간단한 Monad 예제",path:"/monad-simple-example/",images:["images/fp.jpg"],category:"JavaScript",tags:["javascript","monad","functional programming"],date:"2017-09-26T23:01:23.000Z",components:null,tweets:null,summary:"Monad는 순서가 있는 연산을 처리할 때 사용되는 디자인 패턴으로 부작용을 관리하기 위해 함수형 프로그래밍 언어에서 사용된다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---monad-simple-example-1a1d62aa18f2c696f61a.js.map