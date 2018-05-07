(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{416:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-11-20-rxjs-5/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Ctrl+Shift+J</code> (Windows / Linux) 또는 <code class="hljs-text">Cmd+Opt+J</code> (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 <code class="hljs-text">Rx</code>를 사용하여 예제 코드를 실행할 수 있다.<br />\n(* 참고 : <code class="hljs-text">subscription.unsubscribe();</code>을 통해 옵저버블 관찰을 취소할 수 있다.)</p>\n<div class="none" id="register-rx"></div>\n<h2>Transform Operators</h2>\n<p><code class="hljs-text">변형</code> 연산자는 옵저버블의 값의 형태를 변형하는 작업을 한다</p>\n<h3>buffer</h3>\n<p>제공된 값이 방출될 때까지 값들을 모은 뒤, 배열로 한꺼번에 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> buffer$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">490</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\nRx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">290</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bufferedInterval$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">buffer</span><span class="token punctuation">(</span>buffer$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> bufferedInterval$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// [0, 1, 2, 3], [4, 5, 6]</span>\n</code></pre>\n      </div>\n<h3>bufferTime</h3>\n<p>주어진 시간이 지날 때까지 방출된 값을 모은 뒤, 배열로 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bufferTime$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">bufferTime</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> bufferedInterval$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [0, 1, 2], [3, 4, 5, 6], [7, 8, 9, 10], ...</span>\n</code></pre>\n      </div>\n<h3>concatMap</h3>\n<p>내부 옵저버블에 값을 매핑하고, 구독한며 순서대로 값을 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token string">\'Goodbye\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> concatMap$ <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">concatMap</span><span class="token punctuation">(</span>val <span class="token operator">=></span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, World!`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> concatMap$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Hello, World!</span>\n<span class="token comment">// Goodbye, World!</span>\n</code></pre>\n      </div>\n<h3>map</h3>\n<p>각 값에 투영함수를 적용하여 값을 변형한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> map$ <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>val <span class="token operator">=></span> val <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> map$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 2 4 6 8</span>\n</code></pre>\n      </div>\n<h3>mapTo</h3>\n<p>방출되는 값을 일정한 값으로 매핑한다. (방출되는 값이 상수로 변환된다고 보면 된다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mapTo$ <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token string">\'CONSTANT\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> mapTo$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// CONSTANT</span>\n<span class="token comment">// CONSTANT</span>\n<span class="token comment">// CONSTANT</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<h3>mergeMap</h3>\n<p>내부 옵저버블이 방출되면, 해당 값을 바깥 옵저버블과 함께 병합한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> outer$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> inner$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mergeMap$ <span class="token operator">=</span> outer$<span class="token punctuation">.</span><span class="token function">mergeMap</span><span class="token punctuation">(</span>\n  outer <span class="token operator">=></span> inner$<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n    inner <span class="token operator">=></span>\n      <span class="token template-string"><span class="token string">`Outer : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> / Inner: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>inner<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> mergeMap$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// after 1s</span>\n<span class="token comment">// Outer : a / Inner : 0</span>\n<span class="token comment">// Outer : b / Inner : 0</span>\n<span class="token comment">// after 2s</span>\n<span class="token comment">// Outer : a / Inner : 1</span>\n<span class="token comment">// Outer : b / Inner : 1</span>\n<span class="token comment">// after 3s</span>\n<span class="token comment">// Outer : a / Inner : 2</span>\n<span class="token comment">// Outer : b / Inner : 2</span>\n</code></pre>\n      </div>\n<h3>pluck</h3>\n<p>프로퍼티를 선택한다. (중첩된 프로퍼티를 가져오기 위해서는 <code class="hljs-text">n</code>개의 프로퍼티를 전달한다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> click$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> pluck$ <span class="token operator">=</span> click$<span class="token punctuation">.</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string">\'target\'</span><span class="token punctuation">,</span> <span class="token string">\'value\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> pluck$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>위 코드는 <code class="hljs-text">pluck</code>을 통해 클릭된 노드의 내용을 가져온다.<br />\n이를 <code class="hljs-text">map</code>을 통해 구현하면 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> click$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> map$ <span class="token operator">=</span> click$<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> map$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">map</code>보다는 <code class="hljs-text">pluck</code>이 좀 더 간결하다.\n(물론, <code class="hljs-text">lodash</code>의 <code class="hljs-text">fp</code>를 사용하면, <code class="hljs-text">map(fp.get(&#39;target.value&#39;))</code>처럼 <code class="hljs-text">pluck</code>과 유사하게 사용할 수 있다.)</p>\n<h3>reduce</h3>\n<p>소스가 완료될 때, 한 개의 값으로 줄여진 값을 방출한다.<br />\n<code class="hljs-text">Array.prototype.reduce</code>처럼 순회하면서 실행할 콜백함수와 초기값을 전달받는다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> reduce$ <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+</span> curr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> reduce$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 10</span>\n</code></pre>\n      </div>\n<h3>scan</h3>\n<p>소스가 완료되어 하나의 값을 방출할 때까지의 값들을 차례로 방출한다.<br />\n<code class="hljs-text">reduce</code>와 하는 일이 거의 유사하지만, 중간 과정의 값들이 방출된다는 점이 다르다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> scan$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+</span> curr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> scan$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 0 1 3 6 10</span>\n</code></pre>\n      </div>\n<h3>switchMap</h3>\n<p>mergeMap과 비슷하지만, 외부 옵저버블이 내부 옵저버블의 이전 구독을 취소할 때 발생한다.<br />\n즉, 외부 옵저버블이 발생될 때마다 내부 옵저버블의 새로운 구독이 시작된다.</p>\n<p>예를 들어 아래와 같은 코드는 클릭을 할 때마다 이전의 구독이 취소되고 새 구독이 시작된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> click$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> inner$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> switchMap$ <span class="token operator">=</span> click$<span class="token punctuation">.</span><span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> inner$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> switchMap$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// click</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// click</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// click</span>\n<span class="token comment">// 0</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p>자주 사용되거나 알아두면 좋을 <code class="hljs-text">변형 연산자</code>에 대한 간단한 설명과 사용 예제를 정리하였다.<br />\n더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="http://reactivex.io/rxjs">http://reactivex.io/rxjs</a></li>\n<li><a href="https://www.learnrxjs.io">https://www.learnrxjs.io</a></li>\n</ul>\n<p>※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.</p>',frontmatter:{title:"RxJS 살펴보기- 5",path:"/rxjs-5/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-20T23:48:32.000Z",components:[{rootId:"register-rx",fileName:"register-rx"}],tweets:null,summary:"Transform Operators 변형 연산자는 옵저버블의 값의 형태를 변형하는 작업을 한다 buffer 제공된 값이 방출될 때까지 값들을 모은 뒤, 배열로 한꺼번에 방출한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-5-41f9346e7cab797af7c7.js.map