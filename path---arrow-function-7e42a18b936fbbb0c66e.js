(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{420:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-10-arrow-function/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">화살표함수</code>는 <code class="hljs-text">ES2015</code>에서 사용할 수 있는 함수 표현식으로 익명함수를 축약하여 표현할 수 있다. 이 화살표함수는 편리하면서도 특이한 성질이 있는데, 이에 대해 알아보겠다.</p>\n<h2>표현식</h2>\n<p><code class="hljs-text">ES2015</code>에서는 익명함수를 <code class="hljs-text">=&gt;</code>로 축약하여 나타낼 수 있다. 함수 표현식에 비하면 구문이 상당히 짧다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">/* Function expression */</span>\n<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* Arrow function */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">square</span> <span class="token operator">=</span> n <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* Arrow function without block */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">square</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token comment">// 블록을 사용하지 않는다면, return을 생략한채로 값을 반환할 수 있다.</span>\n\n<span class="token comment">/* Arrow function with multiple parameters */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">power</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=></span> n <span class="token operator">**</span> e<span class="token punctuation">;</span>\n<span class="token comment">// 여러 개의 인자를 사용할 떄에는 파라미터들을 ()로 묶어줘야 한다.</span>\n\n<span class="token comment">/* Arrow function returns simple object */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">createObj</span> <span class="token operator">=</span> n <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  number<span class="token punctuation">:</span> n<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 단순 객체를 반환하기 위해서는 객체 리터럴을 ()로 묶어줘야 한다.</span>\n</code></pre>\n      </div>\n<h2>화살표 함수와 this</h2>\n<p>화살표 함수는 자기 고유의 <code class="hljs-text">this</code>값을 갖지 않으며, <code class="hljs-text">this</code>는 화살표 함수를 감싸는 외부 스코프로부터 계승받는다.<br />\n다음 코드는 함수 표현식과 비교한 예제이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1초마다 t를 확인해보면, passedTime은 0이다.</span>\n<span class="token comment">// setInterval의 인자인 함수 안에 있는 this는 Timer의 생성자에 의해 생성되기 때문이다.</span>\n\n<span class="token comment">// 이를 제대로 동작하게 하기 위해선 this 객체를 다른 변수에 등록하여 사용하거나,</span>\n<span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  that<span class="token punctuation">.</span>passedTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    that<span class="token punctuation">.</span>passedTime<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// bind 메소드를 통해 Timer의 this를 바인딩한다.</span>\n<span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// this를 바인딩하거나, 참조하는 변수를 사용하는 방식대신,</span>\n<span class="token comment">// 화살표 함수를 사용하면, 훨씬 간편하다.</span>\n<span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>passedTime<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> t4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>화살표 함수와 arguments</h2>\n<p>화살표함수에서는 <code class="hljs-text">arguments</code>를 사용할 수 없다.<br />\n일반적인 함수 표현식에서는 전달받은 인자를 <code class="hljs-text">arguments</code>라는 유사배열로써 접근할 수 있었지만, 화살표 함수에서는 이를 사용할 수 없다.<br />\n이와 같은 기능을 사용하고 싶다면, <code class="hljs-text">spread operator</code>를 사용해야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// Function expression</span>\n<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, 2, 3</span>\n\n<span class="token comment">// Arrow function</span>\n<span class="token keyword">const</span> <span class="token function-variable function">func2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Throw error when execute this function</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// func2(1, 2, 3);</span>\n\n<span class="token comment">// Arrow function with rest parameters</span>\n<span class="token keyword">const</span> <span class="token function-variable function">func3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">func3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, 2, 3</span>\n</code></pre>\n      </div>',frontmatter:{title:"화살표 함수에 대해서",path:"/arrow-function/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","arrow function","es2015","this","lambda"],date:"2017-09-10T11:03:12.000Z",components:null,tweets:null,summary:"화살표함수는 ES2015에서 사용할 수 있는 함수 표현식으로 익명함수를 축약하여 표현할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---arrow-function-7e42a18b936fbbb0c66e.js.map