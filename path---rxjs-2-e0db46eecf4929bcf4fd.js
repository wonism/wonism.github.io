(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{389:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-11-14-rxjs-2/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Ctrl+Shift+J</code> (Windows / Linux) 또는 <code class="hljs-text">Cmd+Opt+J</code> (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 <code class="hljs-text">Rx</code>를 사용하여 예제 코드를 실행할 수 있다.<br />\n(* 참고 : <code class="hljs-text">subscription.unsubscribe();</code>을 통해 옵저버블 관찰을 취소할 수 있다.)</p>\n<div class="none" id="register-rx"></div>\n<h2>Combination Operators</h2>\n<p><code class="hljs-text">조합</code> 연산자는 여러 <code class="hljs-text">옵저버블</code>을 결합할 수 있게 해준다.</p>\n<h3>combineAll</h3>\n<p>외부 옵저버블이 완료되면, 내부 옵저버블(옵저버블의 옵저버블)의 최근 값들을 출력한다.</p>\n<p><code class="hljs-text">combineAll</code>에 함수가 전달되면, 각각의 내부 옵저버블의 최근 값과 함께 호출된다.<br />\n그리고, 함수가 전달되지 않으면, 가장 최근 값의 배열이 옵저버블 출력에 의해 방출된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// Pass the function in `combineAll`</span>\n<span class="token keyword">var</span> arr$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> example$ <span class="token operator">=</span> arr$<span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span>Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token string">\'World\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> combined$ <span class="token operator">=</span> example$<span class="token punctuation">.</span><span class="token function">combineAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> combined$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>val <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Value from inner Observable:\'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Value from inner Observable: ["Hello"]</span>\n<span class="token comment">// Value from inner Observable: ["World"]</span>\n\n<span class="token comment">// Does not Pass the function in `combineAll`</span>\n<span class="token comment">// Does not Pass the function in `combineAll`</span>\n<span class="token keyword">var</span> arr$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> example$ <span class="token operator">=</span> arr$<span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span>Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token string">\'World\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> combined$ <span class="token operator">=</span> example$<span class="token punctuation">.</span><span class="token function">combineAll</span><span class="token punctuation">(</span>val <span class="token operator">=></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Wonism!`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> combined$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>val <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Value with delivered function to `combineAll`:\'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Value with delivered function to `combineAll`: Hello, Wonism!</span>\n<span class="token comment">// Value with delivered function to `combineAll`: Bye, Wonism!</span>\n</code></pre>\n      </div>\n<h3>combineLatest</h3>\n<p>여러 옵저버블의 그룹이 주어지고 그 중 하나가 방출될 때, 각각의 최신 값들을 방출한다.<br />\n두 옵저버블을 <code class="hljs-text">combineLatest</code>로 조합한 옵저버벌을 시간축에 그리면 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">---a------b--------------c------&gt;\n-1-----2-----3----4---5-----6---&gt;\n\nvvvvvvvvv combineLatest vvvvvvvvv\n\n---a1--a2-b2-b3---b4--b5-c5-c6--&gt;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> firstOb$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> secondOb$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> combined$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">combineLatest</span><span class="token punctuation">(</span>firstOb$<span class="token punctuation">,</span> secondOb$<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> combined$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 0, 0</span>\n<span class="token comment">// 1, 0</span>\n<span class="token comment">// 1, 1</span>\n<span class="token comment">// 1, 2</span>\n<span class="token comment">// 2, 2</span>\n<span class="token comment">// 2, 3</span>\n<span class="token comment">// 2, 4</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<h3>concat</h3>\n<p>옵저버블을 순서대로 구독한다. 이 때, 이전 시퀀스가 완료되어야만 다음 시퀀스가 시작된다.<br />\n이전 시퀀스가 끝나지 않으면 다음 시퀀스가 실행되지 않는다.<br /></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">----a--b--c--&gt;\n              --1--2----3--4-&gt;\n\nvvvvvvvvvvv concat vvvvvvvvvvv\n\n----a--b--c-----1--2----3--4-&gt;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> one$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> two$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> concatenated$ <span class="token operator">=</span> one$<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>two$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> concatenated$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// a</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// b</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> one$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> two$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> delayedOne$ <span class="token operator">=</span> one$<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> concatenated$ <span class="token operator">=</span> delayedOne$<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>two$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> concatenated$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// after 1s</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// a</span>\n<span class="token comment">// 2</span>\n<span class="token comment">// b</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> unfinishableOne$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> two$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token string">\'This won\\\'t not be finished\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> concatenated$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n  <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>\n    unfinishableOne$<span class="token punctuation">,</span>\n    two$<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> concatenated$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>forkJoin</h3>\n<p><code class="hljs-text">forkJoin</code>은 <code class="hljs-text">Promise.all</code>과 비슷하다.<br />\n모든 옵저버블이 완료되면, 마지막에 각각의 값을 방출한다.<br />\n옵저버블을 병렬로 실행하고자 할 때 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> one$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'one\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> two$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'two\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> joined$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">forkJoin</span><span class="token punctuation">(</span>one$<span class="token punctuation">,</span> two$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> joined$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>merge</h3>\n<p>여러 옵저버블을 하나로 줄인다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">---a-----b----c----d----&gt;\n-----1-----2----3-------&gt;\n\nvvvvvvvvv merge vvvvvvvvv\n\n---a-1---b-2--c-3--d----&gt;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> firstOb$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> secondOb$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> thirdOb$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> merged$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>\n  firstOb$<span class="token punctuation">,</span>\n  secondOb$<span class="token punctuation">,</span>\n  thirdOb$<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> merged$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// C, B, A, C, B, A, ...</span>\n\n<span class="token keyword">var</span> mergedWithInstance$ <span class="token operator">=</span> firstOb$<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>thirdOb$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> mergedWithInstance$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// C, A, C, A, C, C, A, ...</span>\n</code></pre>\n      </div>\n<h3>pairwise</h3>\n<p>이전 값과 현재 값을 배열로 방출한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> interval$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> pairwise$ <span class="token operator">=</span> interval$<span class="token punctuation">.</span><span class="token function">pairwise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> pairwise$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [0, 1], [1, 2], [2, 3], [3, 4]</span>\n</code></pre>\n      </div>\n<h3>startWith</h3>\n<p><code class="hljs-text">startWith</code>는 해당 값을 먼저 방출하게 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> source$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token keyword">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> sourceWithStart$ <span class="token operator">=</span> source$<span class="token punctuation">.</span><span class="token function">startWith</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> sourceWithStart$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// -10, -9, 1, 2, 3</span>\n</code></pre>\n      </div>\n<h3>withLatestFrom</h3>\n<p>옵저버블과 <code class="hljs-text">withLatestFrom</code>에 전달된 옵저버블이 결합하는데, 이 때 만들어진 옵저버블은 <code class="hljs-text">withLatestFrom</code>을 호출한 옵저버블이 방출될때만 각각의 최신 값을 통해서만 만들어진다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> slower$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> faster$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> combined$ <span class="token operator">=</span> slower$\n  <span class="token punctuation">.</span><span class="token function">withLatestFrom</span><span class="token punctuation">(</span>faster$<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> combined$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 0 1</span>\n<span class="token comment">// 1 4</span>\n<span class="token comment">// 2 7</span>\n<span class="token comment">// 3 10</span>\n<span class="token comment">// ...</span>\n\n<span class="token keyword">var</span> combined2$ <span class="token operator">=</span> faster$\n  <span class="token punctuation">.</span><span class="token function">withLatestFrom</span><span class="token punctuation">(</span>slower$<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subscription <span class="token operator">=</span> combined2$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 2 0</span>\n<span class="token comment">// 3 0</span>\n<span class="token comment">// 4 1</span>\n<span class="token comment">// 5 1</span>\n<span class="token comment">// 6 2</span>\n<span class="token comment">// 7 2</span>\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p>자주 사용되거나 알아두면 좋을 <code class="hljs-text">조합 연산자</code>에 대한 간단한 설명과 사용 예제를 정리하였다.<br />\n더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br /></p>\n<p>다음에는 <code class="hljs-text">Observable</code>의 <code class="hljs-text">Conditional</code> 연산과 <code class="hljs-text">Creation</code> 연산에 대해 알아보겠다.</p>\n<h2>참고</h2>\n<ul>\n<li><a href="http://reactivex.io/rxjs">http://reactivex.io/rxjs</a></li>\n<li><a href="https://www.learnrxjs.io">https://www.learnrxjs.io</a></li>\n</ul>\n<p>※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.</p>',frontmatter:{title:"RxJS 살펴보기- 2",path:"/rxjs-2/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-14T23:52:58.000Z",components:[{rootId:"register-rx",fileName:"register-rx"}],tweets:null,summary:"Combination Operators 조합 연산자는 여러 옵저버블을 결합할 수 있게 해준다. combineAll 외부 옵저버블이 완료되면, 내부 옵저버블(옵저버블의 옵저버블)의 최근 값들을 출력한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-2-e0db46eecf4929bcf4fd.js.map