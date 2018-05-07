(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{420:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-11-19-rxjs-4/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Ctrl+Shift+J</code> (Windows / Linux) 또는 <code class="hljs-text">Cmd+Opt+J</code> (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 <code class="hljs-text">Rx</code>를 사용하여 예제 코드를 실행할 수 있다.<br />\n(* 참고 : <code class="hljs-text">subscription.unsubscribe();</code>을 통해 옵저버블 관찰을 취소할 수 있다.)</p>\n<div class="none" id="register-rx"></div>\n<h2>Filtering Operators</h2>\n<p><code class="hljs-text">필터</code> 연산자는 옵저버블의 원하는 값만을 선택해 여과하게 해준다.<br />\n바로 아래 있는 컴퍼넌트는 몇 가지 옵저버블 예제를 직접 확인할 수 있는 컴퍼넌트이다.</p>\n<div id="rx-with-input"></div>\n<h3>debounceTime</h3>\n<p>출력 사이의 지정된 시간보다 적은 시간에 방출된 모든 값들을 버린다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> input$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Ovservable\n  <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string">\'target\'</span><span class="token punctuation">,</span> <span class="token string">\'value\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">debounceTime</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> input$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>distinctUntilChanged</h3>\n<p>현재 값이 이전의 마지막 값과 다른 경우에만 값을 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> input$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Ovservable\n  <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string">\'target\'</span><span class="token punctuation">,</span> <span class="token string">\'value\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">debounceTime</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">distinctUntilChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> input$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>(충분한 <code class="hljs-text">debounceTime</code>이 주어졌다고 가정하고) <code class="hljs-text">Hello</code>를 입력한 뒤, 다시 <code class="hljs-text">Hello</code>를 입력하면 옵저버는 아무런 반응을 하지 않는다는 것을 볼 수 있다.</p>\n<h3>throttleTime</h3>\n<p>지정된 시간동안 처음의 값을 제외한 모든 값들을 버린다.<br />\n스크롤 이벤트를 제어하는 데 주로 사용된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> input$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Ovservable\n  <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">throttleTime</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string">\'target\'</span><span class="token punctuation">,</span> <span class="token string">\'value\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> input$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> scroll$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n  <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'scroll\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">throttleTime</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> scroll$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>filter</h3>\n<p><code class="hljs-text">filter</code>에 전달된 값을 통해 수행된 연산의 결과가 <code class="hljs-text">true</code>를 반환하는 값들만 방출시킨다.<br />\n(<code class="hljs-text">Array.prototype.filter</code>와 같은 역할을 한다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> filtered$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n  <span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>value <span class="token operator">=></span> value <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> filtered$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 2, 4</span>\n</code></pre>\n      </div>\n<h3>take</h3>\n<p><code class="hljs-text">take</code>에 전달된 값과 같은 개수의 값들만을 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> take5$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n  <span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> take5$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>takeUntil</h3>\n<p>주어진 옵저버블이 방출될 때까지 값을 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> filter$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>i <span class="token operator">=></span> i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> takeUntil$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">takeUntil</span><span class="token punctuation">(</span>filter$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> takeUntil$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1, 2, 3, 4, 5</span>\n\n<span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> timer$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> takeUntil$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">takeUntil</span><span class="token punctuation">(</span>timer$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> takeUntil$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 0, 1, 2, 3</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p>자주 사용되거나 알아두면 좋을 <code class="hljs-text">필터링 연산자</code>에 대한 간단한 설명과 사용 예제를 정리하였다.<br />\n더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br /></p>\n<p>다음에는 <code class="hljs-text">Observable</code>의 <code class="hljs-text">Transformation</code> 연산에 대해 알아보겠다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="http://reactivex.io/rxjs">http://reactivex.io/rxjs</a></li>\n<li><a href="https://www.learnrxjs.io">https://www.learnrxjs.io</a></li>\n</ul>\n<p>※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.</p>',frontmatter:{title:"RxJS 살펴보기- 4",path:"/rxjs-4/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-19T23:03:27.000Z",components:[{rootId:"register-rx",fileName:"register-rx"},{rootId:"rx-with-input",fileName:"rx-example/rx-with-input"}],tweets:null,summary:"Filtering Operators 필터 연산자는 옵저버블의 원하는 값만을 선택해 여과하게 해준다. 바로 아래 있는 컴퍼넌트는 몇 가지 옵저버블 예제를 직접 확인할 수 있는 컴퍼넌트이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-4-9a9a2c6efd7c8a461a13.js.map