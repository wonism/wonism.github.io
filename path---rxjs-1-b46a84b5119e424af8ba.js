(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{391:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-11-11-rxjs/index.md absPath of file >>> MarkdownRemark",html:'<h2>Reactive Programming</h2>\n<p><code class="hljs-text">RxJS</code>는 <code class="hljs-text">MS</code>가 만든 <code class="hljs-text">ReactiveX</code>의 <code class="hljs-text">JS</code> 라이브러리로 이에 대해 공부하기 전에 먼저 <code class="hljs-text">Reactive 프로그래밍</code>에 대해 아는 것이 좋다.<br />\n<code class="hljs-text">Reactive 프로그래밍</code>은 이름 그대로 데이터의 변화에 반응한다는 뜻을 가지며, <code class="hljs-text">비동기 데이터 스트림</code>을 사용하여 프로그래밍한다.</p>\n<p>변수, 이벤트, 데이터 구조 등 어떤 것이든 <code class="hljs-text">비동기 데이터 스트림</code>이 될 수 있다.<br />\n이 <code class="hljs-text">비동기 데이터 스트림</code>이라는 단어가 어색할 수도 있다.\n하지만, 사실 <code class="hljs-text">비동기 데이터 스트림</code>은 전혀 새로운 개념이 아니다.<br />\n이를 간단한 이벤트 처리 예제로 설명해보겠다.</p>\n<p>대부분의 <code class="hljs-text">Plain JavaScript</code>, <code class="hljs-text">jQuery</code> 혹은 <code class="hljs-text">ReactJS</code> 등 어떤 프레임워크/라이브러리를 사용했던지 간에 사용자로부터 발생한 비동기적인 <code class="hljs-text">이벤트</code>를 처리해본 경험이 있을 것이다.<br />\n예를 들어 클릭 이벤트를 처리한다고 가정할 때 다음과 같이 처리할 수 있을 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* DO SOMETHING */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">click stream : ---c---c---c-c---c----c--&gt;</code></pre>\n      </div>\n<p>이벤트 리스너, 이벤트 핸들러 등을 통해 클릭 이벤트를 구독하고, 위와 같은 비동기적인 이벤트를 처리할 수 있다.</p>\n<p><code class="hljs-text">비동기 데이터 스트림</code>도 마찬가지로 구독 가능하며, 이를 통해 <code class="hljs-text">데이터</code> 혹은 <code class="hljs-text">사이드 이펙트</code>를 안전하게 처리할 수 있다.<br />\n<code class="hljs-text">이벤트</code>와 어느 정도 비슷하긴 하지만, <code class="hljs-text">비동기 데이터 스트림</code>는 아래와 같은 많은 연산을 수행할 수 있다.</p>\n<ul>\n<li>스트림은 다른 스트림의 입력이 될 수(map) 있으며,</li>\n<li>여러 스트림은 하나의 스트림으로 합쳐질 수도(merge/reduce) 있다.</li>\n<li>또한, 스트림에 필터를 적용하여 관심 있는 스트림의 데이터만을 처리할 수도(filter) 있다.</li>\n</ul>\n<p>이외에도 수많은 연산들이 존재한다.</p>\n<p>이처럼 <code class="hljs-text">ReactiveX</code>는 데이터를 <code class="hljs-text">효과적</code>이고 안전하게 처리할 수 있게 해준다.</p>\n<h2>Observable</h2>\n<p><code class="hljs-text">RxJS</code>를 사용하기 위해서는 반드시 <code class="hljs-text">옵저버블</code>을 이해해야 한다.<br />\n<code class="hljs-text">옵저버블</code>은 간단히 말하면, 시간축 위의 데이터 집합의 표현이라고 할 수 있다.<br /></p>\n<p>데이터의 형태는 상관 없지만, 쉬운 예시를 위해 클릭 이벤트와 해당 좌표가 비동기적으로 발생한다고 가정한다.\n클릭 이벤트와 그의 좌표를 도식화하면 다음과 같을 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">It is a click stream\n-----c-------c-------c------c------&gt;\n   (0, 5)  (3, 1)  (1, 4) (2, 2)</code></pre>\n      </div>\n<h3>옵저버블의 특징</h3>\n<h4>1. 옵저버블과 배열</h4>\n<p><code class="hljs-text">옵저버블</code>은 배열의 <code class="hljs-text">map</code>, <code class="hljs-text">filter</code>, <code class="hljs-text">reduce</code> 와 비슷한 연산을 수행할 수 있다.<br />\n또한, 위의 도식화를 보면 <code class="hljs-text">옵저버블</code>은 순서가 있는 데이터 집합으로써, <code class="hljs-text">시간</code>을 인덱스로 하며, 배열(불변 배열)과 유사하다는 것을 알 수 있다.</p>\n<h4>2. 불변성</h4>\n<p><code class="hljs-text">옵저버블</code>은 관찰만 가능하다.<br />\n이는 즉, <code class="hljs-text">옵저버블</code>은 불변이라는 뜻이며, <code class="hljs-text">RxJS</code>는 <code class="hljs-text">Functional Programming</code> 패러다임도 사용하고 있다는 것을 알 수 있다.</p>\n<p>따라서, 어떤 <code class="hljs-text">옵저버블</code>을 변형해야 한다면, 새로운 <code class="hljs-text">옵저버블</code>을 만들어야 한다.</p>\n<p><strong>예제 : x 좌표가 2 이상인 새로운 스트림만들기</strong></p>\n<p><code class="hljs-text">[0, 3, 1, 4]</code>와 같은 배열에서 값이 <code class="hljs-text">2</code> 이상인 원소만을 얻고자 할 땐, <code class="hljs-text">filter</code>를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>x <span class="token operator">=></span> <span class="token punctuation">(</span>x <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">옵저버블</code>도 마찬가지로 <code class="hljs-text">filter</code>를 사용하며, 다음과 같이 코드를 작성할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">Rx<span class="token punctuation">.</span>Observable\n  <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>e <span class="token operator">=></span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p><code class="hljs-text">RxJS</code>를 공부하기 전에 알고 있어야 할 <code class="hljs-text">Reactive Programming</code>과 <code class="hljs-text">옵저버블</code>에 대한 간단한 개념을 알아보았다.</p>\n<p>정리하자면,</p>\n<p><code class="hljs-text">Reactive Programming</code>은 데이터의 형태(이벤트, 입력, 변수 등)가 어떻든 간에 이를 효과적이고 안전하게 처리할 수 있다는 장점이 있으며,<br />\n<code class="hljs-text">옵저버블</code>은 인덱스가 시간인 불변 배열과 유사한 형태를 가진다고 볼 수 있다.<br /></p>\n<p>다음에는 <code class="hljs-text">Observable</code>의 <code class="hljs-text">Combination</code> 연산에 대해 알아보겠다.</p>',frontmatter:{title:"RxJS 살펴보기- 1",path:"/rxjs-1/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-11T14:23:26.000Z",components:null,tweets:null,summary:"RxJS는 MS가 만든 ReactiveX의 JS 라이브러리로 이에 대해 공부하기 전에 먼저 Reactive 프로그래밍에 대해 아는 것이 좋다. Reactive 프로그래밍이란 비동기 데이터 스트림을 사용한 프로그래밍 기법이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-1-b46a84b5119e424af8ba.js.map