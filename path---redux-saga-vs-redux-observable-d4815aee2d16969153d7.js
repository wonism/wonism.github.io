(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{388:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2018-02-16-saga-vs-observable/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">redux-observable</code>과 <code class="hljs-text">redux-saga</code>는 <code class="hljs-text">redux</code>의 비동기 액션을 처리하기 위한 라이브러리다.<br />\n기존에 회사 프로젝트에서는 비동기 액션을 처리하기 위해 <code class="hljs-text">redux-thunk</code>와 <code class="hljs-text">redux-observable</code>을 사용하고 있었다.<br />\n하지만 팀의 규모도 점점 커지는 상황에서 새로운 프로젝트를 진행하게 되었기 때문에 여러 방안들을 검토하게 되었다.\n(개인적으로는 <code class="hljs-text">redux-observable</code>을 좋아하지만,)<br />\n익혀야할 기술(<code class="hljs-text">RxJS</code>, <code class="hljs-text">Functional programming</code> 등)이 많고 <code class="hljs-text">러닝커브</code>도 가파르기 때문이었다.</p>\n<p>팀원의 추천으로 먼저 <code class="hljs-text">redux-saga</code>를 공부해보기로 했고,\n<code class="hljs-text">redux-observable</code>과 비교하면서 <code class="hljs-text">redux-observable</code>을 그대로 사용할지, <code class="hljs-text">redux-saga</code>를 새로 적용할지, 아니면 또 다른 라이브러리를 사용할 지 판단하기로 했다.</p>\n<h2>어디에 기반을 두었나?</h2>\n<p><code class="hljs-text">redux-saga</code>는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator">Generator</a> 기반이며,\n<code class="hljs-text">redux-observable</code>은 이름에서 알 수 있듯 <a href="http://reactivex.io/rxjs/">RxJS</a> 기반이다.</p>\n<p>먼저, <code class="hljs-text">redux-saga</code>를 살펴보면 <code class="hljs-text">Worker + Watcher</code>라는 구조를 가진다.<br />\n<code class="hljs-text">redux-observable</code>은 <code class="hljs-text">Epic</code>이라는 구조를 가지며, 이는 <code class="hljs-text">Type</code>과 <code class="hljs-text">Operators</code>로 구성된다.</p>\n<h2>기본적인 사용 방법</h2>\n<h3>redux-saga</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put<span class="token punctuation">,</span> take<span class="token punctuation">,</span> fork<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga/effects\'</span>\n\n<span class="token comment">// Worker</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'START_TO_DO\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'DONE_SUCCESSFULLY\'</span><span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Error handling</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'FAILED\'</span><span class="token punctuation">,</span> error<span class="token punctuation">:</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Watcher</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'DO_SOMETHING\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> backgroundSyncTask <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">fork</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'STOP_DO_THAT\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cancelable</span>\n    <span class="token keyword">yield</span> <span class="token function">cancel</span><span class="token punctuation">(</span>backgroundSyncTask<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>redux-observable</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> combineEpics<span class="token punctuation">,</span> ofType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-observable\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> switchMap<span class="token punctuation">,</span> takeUntil<span class="token punctuation">,</span> map<span class="token punctuation">,</span> catchError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rxjs/operators\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ajax <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rxjs/observable/dom/ajax\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">epic</span> <span class="token operator">=</span> action$ <span class="token operator">=></span>\n  action$<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n    <span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'DO_SOMETHING\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'START_TO_DO\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'/end-points\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n        <span class="token function">map</span><span class="token punctuation">(</span>res <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n          type<span class="token punctuation">:</span> <span class="token string">\'DONE_SUCCESSFULLY\'</span><span class="token punctuation">,</span>\n          data<span class="token punctuation">:</span> res<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token function">takeUntil</span><span class="token punctuation">(</span>action$<span class="token punctuation">.</span><span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'STOP_DO_THAT\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Cancelable</span>\n        <span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">of</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// Error handling</span>\n          type<span class="token punctuation">:</span> <span class="token string">\'FAILED\'</span>\n          error<span class="token punctuation">:</span> e<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> epics <span class="token operator">=</span> <span class="token function">combineEpics</span><span class="token punctuation">(</span>\n  epic<span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>여러 개의 비동기 액션 처리하기</h2>\n<h3>redux-saga</h3>\n<p><code class="hljs-text">worker</code>를 작성하고, <code class="hljs-text">watcher</code>에 나열한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">worker1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'WORKER_1\'</span><span class="token punctuation">,</span> res1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">worker2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'WORKER_2\'</span><span class="token punctuation">,</span> res2 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> res3 <span class="token operator">=</span> <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">worker3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'WORKER_3\'</span><span class="token punctuation">,</span> res3 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>redux-observable</h3>\n<p>각 <code class="hljs-text">epic</code>을 작성하고, <code class="hljs-text">combinEpics</code>를 통해 결합한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">epic1</span> <span class="token operator">=</span> action$ <span class="token operator">=></span>\n  action$<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n    <span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'EPIC_1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">epic2</span> <span class="token operator">=</span> action$ <span class="token operator">=></span>\n  action$<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n    <span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'EPIC_2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">epic3</span> <span class="token operator">=</span> action$ <span class="token operator">=></span>\n  action$<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n    <span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'EPIC_3\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> epics <span class="token operator">=</span> <span class="token function">combineEpics</span><span class="token punctuation">(</span>\n  epic1<span class="token punctuation">,</span>\n  epic2<span class="token punctuation">,</span>\n  epic3<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>여러 개의 비동기 액션 병렬 처리하기</h2>\n<h3>redux-saga</h3>\n<p>처리할 비동기 작업을 배열에 넣고, 비구조화 할당(<code class="hljs-text">Destructuring Assignment</code>)을 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> accounts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token punctuation">[</span>\n    <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> <span class="token string">\'/users\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> <span class="token string">\'/accounts\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>redux-observable</h3>\n<p><code class="hljs-text">RxJS</code>의 <code class="hljs-text">merge</code>를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">action$\n  <span class="token comment">// ...</span>\n  <span class="token punctuation">.</span><span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">merge</span><span class="token punctuation">(</span>Promise1<span class="token punctuation">,</span> Promise2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Throttling, Debouncing, Retrying</h2>\n<h3>redux-saga</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// throttling</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga/effects\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">\'THROTTLED_ACTION_TYPE\'</span><span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// debouncing</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> fork<span class="token punctuation">,</span> take <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga/effects\'</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> task<span class="token punctuation">;</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'DEBOUNCED_ACTION_TYPE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">yield</span> <span class="token function">cancel</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    task <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">fork</span><span class="token punctuation">(</span>worker<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// delay can be replaced with this</span>\n<span class="token keyword">const</span> <span class="token function-variable function">customDelay</span> <span class="token operator">=</span> ms <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// debouncing 2</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> takeLatest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga/effects\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">{</span> input <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">takeLatest</span><span class="token punctuation">(</span><span class="token string">\'DEBOUNCED_ACTION_TYPE\'</span><span class="token punctuation">,</span> worker<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// retrying</span>\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">worker</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> <span class="token string">\'/end-point\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>delay<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'API request failed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'START_REQUEST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>worker<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'RECEIVE_RESPONSE\'</span><span class="token punctuation">,</span>\n        payload<span class="token punctuation">:</span> result<span class="token punctuation">.</span>body<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'GET_FAILED_RESPONSE\'</span><span class="token punctuation">,</span>\n        error<span class="token punctuation">:</span> e<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>redux-observable</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// throttling</span>\naction$\n  <span class="token punctuation">.</span><span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'THROTTLED_ACTION_TYPE\'</span><span class="token punctuation">)</span>\n  <span class="token comment">// ...</span>\n  <span class="token punctuation">.</span><span class="token function">throtleTime</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n\n<span class="token comment">// debouncing</span>\naction$\n  <span class="token punctuation">.</span><span class="token function">ofType</span><span class="token punctuation">(</span><span class="token string">\'DEBOUNCED_ACTION_TYPE\'</span><span class="token punctuation">)</span>\n  <span class="token comment">// ...</span>\n  <span class="token punctuation">.</span><span class="token function">debouncing</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n\n<span class="token comment">// retrying</span>\naction$\n  <span class="token comment">// ...</span>\n  <span class="token punctuation">.</span><span class="token function">retry</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>로그 사용하기</h2>\n<h3>redux-saga</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'*\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'action: %s\'</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'state: %s\'</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>redux-observable</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">action$\n  <span class="token comment">// ...</span>\n  <span class="token punctuation">.</span><span class="token keyword">do</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>redux-saga 정리</h2>\n<p><code class="hljs-text">call</code>, <code class="hljs-text">apply</code>는 부작용을 표현하는 객체를 만드는데 사용되며, <code class="hljs-text">put</code>, <code class="hljs-text">select</code>, <code class="hljs-text">take</code>는 <code class="hljs-text">redux</code>의 <code class="hljs-text">store</code>와 상호작용함으로써, 부작용을 처리한다.(아래 다이어그램 참고)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">┌───────────────┐\n│ Side Effects  │\n└───────┬───────┘\n        |\n   apply, call\n        |\n┌───────┴───────┐\n│  Redux Saga   │ &lt;----&gt; call, apply, fork,\n└───────┬───────┘        spawn, join, cancel\n        |\n  put, select,\ntake(every, latest)\n        |\n┌───────┴───────┐\n│  Redux Store  │\n└───────────────┘</code></pre>\n      </div>\n<p>몇 가지 기능들만 알면 모든 부작용을 처리할 수 있으며, 코드 또한 간결해진다.<br />\n<code class="hljs-text">redux-saga</code>는 <code class="hljs-text">redux-observable</code>만큼 기능들이 강력하지 않는 단점이 있지만,\n<code class="hljs-text">액션</code>을 <code class="hljs-text">dispatch</code>하기도 쉬우며, 무엇보다 배우기 쉽다는 장점이 있다.<br />\n생산성, 난이도 등 여러 가지를 고려했을 때 부작용을 다루기 위한 충분한 라이브러리이다.</p>',frontmatter:{title:"redux-saga를 redux-observable와 비교해 살펴보기",path:"/redux-saga-vs-redux-observable/",images:["images/redux.jpg"],category:"JavaScript",tags:["javascript","redux","state","rxjs","saga","asynchronous"],date:"2018-02-16T12:24:12.000Z",components:null,tweets:null,summary:"redux-observable과 redux-saga는 redux의 비동기 액션을 처리하기 위한 라이브러리다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---redux-saga-vs-redux-observable-d4815aee2d16969153d7.js.map