(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{379:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-11-16-rxjs-3/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Ctrl+Shift+J</code> (Windows / Linux) 또는 <code class="hljs-text">Cmd+Opt+J</code> (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 <code class="hljs-text">Rx</code>를 사용하여 예제 코드를 실행할 수 있다.<br />\n(* 참고 : <code class="hljs-text">subscription.unsubscribe();</code>을 통해 옵저버블 관찰을 취소할 수 있다.)</p>\n<div class="none" id="register-rx"></div>\n<h2>Conditional Operators</h2>\n<p><code class="hljs-text">조건</code> 연산자는 특정 조건에서 무언가를 수행할 수 있게 해준다.</p>\n<h3>defaultIfEmpty</h3>\n<p>아무것도 방출되지 않으면, 주어진 값을 방출한다.<br />\n(<code class="hljs-text">of</code>에 <code class="hljs-text">undefined</code>, <code class="hljs-text">null</code>를 넘기면 이들이 방출된 것으로 간주되어 주어진 값이 방출되지 않는다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> empty$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> defaultIfEmpty$ <span class="token operator">=</span> empty$<span class="token punctuation">.</span><span class="token function">defaultIfEmpty</span><span class="token punctuation">(</span><span class="token string">\'Empty Observable\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> defaultIfEmpty$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Empty Observable</span>\n\n<span class="token keyword">var</span> empty$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> defaultIfEmpty$ <span class="token operator">=</span> empty$<span class="token punctuation">.</span><span class="token function">defaultIfEmpty</span><span class="token punctuation">(</span><span class="token string">\'Empty Observable\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> defaultIfEmpty$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Empty Observable</span>\n</code></pre>\n      </div>\n<h3>every</h3>\n<p>모든 값들이 조건을 통과하면 <code class="hljs-text">true</code> 그렇지 않으면 <code class="hljs-text">false</code>가 반환된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> mixed$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> areNotEvens$ <span class="token operator">=</span> mixed$<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>val <span class="token operator">=></span> val <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> areNotEvens$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// false</span>\n\n<span class="token keyword">var</span> evens$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> areEvens$ <span class="token operator">=</span> evens$<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>val <span class="token operator">=></span> val <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> areEvens$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// true</span>\n</code></pre>\n      </div>\n<h2>Creation Operators</h2>\n<p><code class="hljs-text">생성</code> 연산자는 옵저버블을 만들 때 사용된다.<br />\n모든 것들을 스트림으로 바꾸는 게 가능하다.</p>\n<h3>create</h3>\n<p>함수를 통해 옵저버블을 생성한다.<br />\n매개변수로 전달된 <code class="hljs-text">observer</code>의 <code class="hljs-text">next</code> 메소드를 실행할 때마다 값이 생성된다.<br />\n또한, <code class="hljs-text">observer</code>는 <code class="hljs-text">error</code>메소드와 <code class="hljs-text">complete</code>메소드가 있으며, 이름대로 각각 에러를 발생시키거나 옵저버블을 완료시킨다.<br />\n(주의할 것은 <code class="hljs-text">error</code> 또한 옵저버블을 종료시킨다는 것이다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> helloWorld$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    observer<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// observer.next()는 undefined를 반환하기 때문에 체이닝할 수 없다.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// subscribe에 객체를 전달할 수도 있으며,</span>\n<span class="token comment">// 이 객체는 `next`, `error`, `complete` 등의 프로퍼티를 가진다.</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> helloWorld$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">next</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">compelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Hello</span>\n<span class="token comment">// World</span>\n<span class="token comment">// Error</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> interval <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<h3>from</h3>\n<p>배열, 프로미스 등을 옵저버블로 만든다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> array$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> array$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1, 2, 3, 4, 5</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> promise$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'Promise\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> promise$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Promise</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> string$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token string">\'String\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> string$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// S, t, r, i, n, g</span>\n</code></pre>\n      </div>\n<h3>fromEvent</h3>\n<p>이벤트를 옵저버블 시퀀스로 만든다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> event$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> coords$ <span class="token operator">=</span> event$<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> coords$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// DOM Element</span>\n</code></pre>\n      </div>\n<h3>of</h3>\n<p>인자로 전달된 값들을 시퀀스로 만든다.</p>\n<p><strong>※ 주의</strong> : <code class="hljs-text">from</code>에서 배열을 전달하는 것과 헷갈리면 안 된다.<br />\n(<code class="hljs-text">Function.prototype.call</code>과 <code class="hljs-text">Function.prototype.apply</code>의 차이처럼)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">{</span> num<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">\'Hello\'</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// { num: 42 }, [1, 2, 3], function hello() { return \'Hello\'; }</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p>자주 사용되거나 알아두면 좋을 <code class="hljs-text">조건 연산자</code>와 <code class="hljs-text">생성 연산자</code>에 대한 간단한 설명과 사용 예제를 정리하였다.<br />\n더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br /></p>\n<p>다음에는 <code class="hljs-text">Observable</code>의 <code class="hljs-text">Filtering</code> 연산에 대해 알아보겠다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="http://reactivex.io/rxjs">http://reactivex.io/rxjs</a></li>\n<li><a href="https://www.learnrxjs.io">https://www.learnrxjs.io</a></li>\n</ul>\n<p>※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.</p>',frontmatter:{title:"RxJS 살펴보기- 3",path:"/rxjs-3/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-16T22:56:32.000Z",components:[{rootId:"register-rx",fileName:"register-rx"}],tweets:null,summary:"Conditional Operators 조건 연산자는 특정 조건에서 무언가를 수행할 수 있게 해준다.  defaultIfEmpty 완료 전에 아무것도 방출되지 않거나 `null`이 방출되면, 주어진 값을 방출한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-3-02b25ce97f9de41498bc.js.map