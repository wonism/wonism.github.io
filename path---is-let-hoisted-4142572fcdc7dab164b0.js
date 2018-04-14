(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{404:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-08-26-let-hoisted/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">let</code> 또는 <code class="hljs-text">const</code>가 호이스팅 되는지 여부를 알아보기 전에 <code class="hljs-text">호이스팅</code>과 <code class="hljs-text">Temporal Dead Zone(TDZ)</code>이란 개념에 대해 알아보겠다.</p>\n<h2>Hoisting</h2>\n<p><code class="hljs-text">let</code> 또는 <code class="hljs-text">const</code>가 호이스팅 되는지 여부를 알아보기 전에 <code class="hljs-text">호이스팅</code>과 <code class="hljs-text">Temporal Dead Zone(TDZ)</code>이란 개념에 대해 알아보겠다.<br />\n호이스팅은 말 그대로 끌어올려진다는 의미를 가진다. 스코프 안의 어디에서든 변수 선언은 최상위에서 선언된 것과 동등하다.<br />\n아래 예제에서 출력되는 <code class="hljs-text">x</code>는 <code class="hljs-text">outer scope</code>가 아닌 <code class="hljs-text">undefined</code>이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">\'outer scope\'</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">\'inner scope\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>스코프 안에서 선언된 변수는 항상 최상위에 선언한 것과 동등한 의미를 가지기 때문이다.\n즉, 위 코드는 아래와 같은 의미를 지닌다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">\'outer scope\'</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> x<span class="token punctuation">;</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n  x <span class="token operator">=</span> <span class="token string">\'inner scope\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>여기서 끝나는 것이 아니다. 변수가 선언되기 전에 변수를 사용할 수도 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">foo <span class="token operator">=</span> <span class="token string">\'bar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> foo<span class="token punctuation">;</span>\n\n<span class="token comment">// 위는 아래와 같은 의미를 가진다.</span>\n<span class="token keyword">var</span> foo<span class="token punctuation">;</span>\nfoo <span class="token operator">=</span> <span class="token string">\'bar\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Temporal Dead Zone</h2>\n<h3>var와 let/const의 비교로 보는 TDZ</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throws a ReferenceError</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">\'hey\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">var</code>와 <code class="hljs-text">let/const</code>선언에 대한 범위의 차이 중 하나는 <code class="hljs-text">let/const</code>가 <code class="hljs-text">TDZ</code>에 의해 제약을 받는다는 것이다.<br />\n즉, 변수가 초기화되기 전에 액세스하려고 하면, <code class="hljs-text">var</code>처럼 <code class="hljs-text">undefined</code>를 반환하지 않고, <code class="hljs-text">ReferenceError</code>가 발생한다.\n이는 코드를 예측가능하고 잠재적 버그를 쉽게 찾아낼 수 있도록 한다.</p>\n<p>위 예제를 보면, <code class="hljs-text">let/const</code>선언은 호이스팅을 수행하지 않는다고 생각할 수 있다.<br />\n하지만 이는 잘못된 것이며, Hoisting에 관한 예제 코드에서 <code class="hljs-text">var</code>를 <code class="hljs-text">const</code>으로 바꾸면, 어떤 일이 발생하는지 살펴본다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">\'outer scope\'</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">\'inner scope\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">console.log(x);</code>는 TDZ에 의해 <code class="hljs-text">ReferenceError</code>를 발생하게 된다.<br />\n이는, <code class="hljs-text">let/const</code> 선언은 호이스팅을 수행하기 때문이다.<br />\n<code class="hljs-text">undefined</code>를 반환하는 <code class="hljs-text">var</code>와는 달리, 초기화되기 전에 액세스할 때 에러가 발생한다.</p>\n<h3>TDZ 살펴보기</h3>\n<p><code class="hljs-text">let/const</code>선언은 실행중인 실행 컨텍스트의 <code class="hljs-text">어휘적 환경(Lexical Environment)</code>으로 범위가 지정된 변수를 정의한다.<br />\n변수는 그들의 어휘적 환경에 포함될 때 생성되지만, 어휘적 바인딩이 실행되기 전까지는 액세스할 수 없다.<br />\n새로운 범위에 진입할 때마다 지정된 범위에 속한 모든 <code class="hljs-text">let/const</code>바인딩이 지정된 범위 내부의 코드가 실행되기 전에 실행된다. (즉, <code class="hljs-text">let/const</code>선언이 호이스팅된다.)<br />\n어휘적 바인딩이 실행되기 전까지 액세스할 수 없는 현상을 <code class="hljs-text">TDZ</code>라고 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// const x를 실행하기 전에 x에 접근하면, TDZ에 의해 ReferenceError가</span>\n발생하게 된다<span class="token punctuation">.</span>\n<span class="token comment">// console.log(x);</span>\n\n<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n<span class="token comment">// 위 코드 실행 이후에는 x에 접근할 수 있다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>어휘적 바인딩에 의해 초기화되며 정의된 변수는 변수가 만들어질 때가 아닌, 값이 해당 초기화 구문 어휘적 바인딩이 실행될 때 값을 할당받는다.<br />\n<code class="hljs-text">let/const</code>선언의 어휘적 바인딩에 초기화 구문이 없으면, 어휘적 바인딩을 실행할 때, 변수에 <code class="hljs-text">undefined</code>가 할당된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">let</span> x<span class="token punctuation">;</span> <span class="token comment">// 이는 let x = undefined; 와 같다.</span>\n<span class="token comment">// const 키워드는 반드시 선언과 동시에 값을 할당해야 한다.</span>\n<span class="token comment">// const x; Uncaught SyntaxError: Missing initializer in const declaration</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">let/const</code>변수는 초기화 구문이 완전히 실행된 이후에 우변이 실행되고 그 결과 값이 선언된 변수에 할당된 후 초기화된다.\n우변에서 <code class="hljs-text">let/const</code>로 선언된 변수를 사용하는 경우, 우변은 변수를 읽으려고 시도하지만 초기화 구문이 아직 완전히 실행되지 않은 상태이므로, <code class="hljs-text">ReferenceError</code>가 발생한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\n\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">디폴트 파라미터(Default Parameters)</code>에서도 <code class="hljs-text">TDZ</code>가 적용되는데, 디폴트 파라미터는 주어진 함수의 해당 범위와 내부 범위 사이에 있는 중간 범위에서 실행된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">=</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  a <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n  b <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> undefined<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 디폴트 파라미터는 왼쪽에서 오른쪽으로 실행되며, a의 초기화 구문이 b를 읽을 때, b는 TDZ에 있다.</span>\n<span class="token comment">// 따라서, ReferenceError가 발생한다.</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span>undefined<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\n\n<span class="token comment">// a는 a의 초기화구문이 a를 읽으려고 할 때, TDZ에 있으므로, ReferenceError가 발생한다.</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>a <span class="token operator">=</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">class</code>에서도 <code class="hljs-text">TDZ</code>가 적용된다. 상위 생성자를 호출하기 전에 <code class="hljs-text">this</code>에 액세스하려고 하는 하위 클래스의 생성자는 <code class="hljs-text">ReferenceError</code>를 발생시킨다.\n하위 클래스의 생성자가 <code class="hljs-text">super();</code>를 호출하지 않는 한, <code class="hljs-text">this</code> 바인딩은 초기화되지 않은 것으로 간주된다.\n하위 클래스 생성자에 <code class="hljs-text">super();</code>가 없으면, 생성자는 암시적으로 <code class="hljs-text">return this;</code>를 시도한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">B</span> <span class="token punctuation">{</span> <span class="token comment">// ReferenceError</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">TDZ</code>는 초기화되지 않은 바인딩에 액세스하려는 경우, 예기치 않은 결과를 내는 대신에 개발자에게 에러 피드백을 제공하기 때문에 유용하게 사용된다.</p>\n<h2>결론</h2>\n<p><code class="hljs-text">let/const</code>선언 변수는 호이스팅되지 않는 것이 아니다.\n스코프에 진입할 때 변수가 만들어지고 TDZ(Temporal Dead Zone)가 생성되지만, 코드 실행이 변수가 실제 있는 위치에 도달할 때까지 액세스할 수 없는 것이다.\n<code class="hljs-text">let/const</code>변수가 선언된 시점에서 제어흐름은 <code class="hljs-text">TDZ</code>를 떠난 상태가 되며, 변수를 사용할 수 있게 된다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified">JS ROCKS : TEMPORAL DEAD ZONE (TDZ) DEMYSTIFIED</a></li>\n<li><a href="https://tc39.github.io/ecma262/#sec-let-and-const-declarations">TC39 Github pages : Section 13.3</a></li>\n<li><a href="https://dzone.com/articles/learning-es6-using-let-const-and-temporal-dead-zon">DZone : Learning ES6: Using let, const, and Temporal Dead Zone</a></li>\n<li><a href="https://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth">Pony Foo : ES6 Let, Const and the “Temporal Dead Zone” (TDZ) in Depth</a></li>\n</ul>',frontmatter:{title:"let과 const는 호이스팅 될까?",path:"/is-let-hoisted/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","hoisting","var","let","const","TDZ"],date:"2017-08-26T23:24:08.000Z",components:null,tweets:null,summary:"let 또는 const가 호이스팅 되는지 여부를 알아보기 전에 호이스팅과 Temporal Dead Zone(TDZ)이란 개념에 대해 알아보겠다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---is-let-hoisted-4142572fcdc7dab164b0.js.map