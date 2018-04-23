(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{391:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-08-28-closure/index.md absPath of file >>> MarkdownRemark",html:'<p>클로저는 다른 함수의 스코프 안에 있는 변수들에 접근할 수 있는 함수를 뜻한다.</p>\n<h2>특징</h2>\n<ul>\n<li>클로저는 lexical scope로 인해 독립적인 변수를 가리키는 함수로, 클로저 안에 정의된 함수는 만들어진 환경(lexical environment) 를 기억한다.</li>\n<li>클로저는 자신의 스코프에 정의된 변수, 외부 함수의 변수, 전역 변수에 대한 접근으로 구분된다.</li>\n<li>클로저를 통해 함수 내의 지역 변수를 감출 수 있다. (private 와 비슷한 역할)</li>\n<li>함수 안에 함수를 만드는 것은 처리 속도와 메모리 사용량에 좋지 않다.</li>\n</ul>\n<h2>간단한 사용 예제</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">statefulFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    number <span class="token operator">+=</span> param<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> closure <span class="token operator">=</span> <span class="token function">statefulFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">closure</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>\n<span class="token function">closure</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 21</span>\n</code></pre>\n      </div>\n<p>예제를 보면 알 수 있듯이, <code class="hljs-text">closure(parameter);</code> 로 함수 <code class="hljs-text">closure</code>를 호출하면, 내부 변수 <code class="hljs-text">number</code> 가 매 호출마다 다시 생성되지 않고 상태를 유지시키며 참조된다.\n클로저의 참조를 제거하려면 명시적으로 <code class="hljs-text">null</code>을 대입한다. (e.g. <code class="hljs-text">closure = null;</code>)</p>\n<h2>클로저와 클로저가 아닌 함수의 예</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">/* Not a closure */</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> local <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n\n  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>param2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    local <span class="token operator">+=</span> <span class="token punctuation">(</span>param1 <span class="token operator">+</span> param2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 152</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 152</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 152</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">bar</code>함수는 <code class="hljs-text">foo</code>안에 속하기 때문에 <code class="hljs-text">foo</code>스코프를 외부 스코프 참조로 저장한다. 또, <code class="hljs-text">bar</code>함수는 자신의 렉시컬 스코프 체인을 통해 <code class="hljs-text">local</code>을 참조한다. 하지만, <code class="hljs-text">bar</code>은 <code class="hljs-text">foo</code>안에서 정의 및 실행을 하기만 할뿐, 바깥으로 나오지 않으므로 클로저 라고 부르지 않는다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">/* Closure */</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> local <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>param2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    local <span class="token operator">+=</span> <span class="token punctuation">(</span>param1 <span class="token operator">+</span> param2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 57</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 72</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 87</span>\n\n<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">baz</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 57</span>\n<span class="token function">baz</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 72</span>\n<span class="token function">baz</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 87</span>\n</code></pre>\n      </div>\n<p>반면, <code class="hljs-text">const</code>로 선언된 변수 <code class="hljs-text">bar</code>는 <code class="hljs-text">foo</code>내부의 <code class="hljs-text">bar</code>를 가져오며, <code class="hljs-text">bar</code>(param) 로써 외부에서 호출된다.\n또한, <code class="hljs-text">bar</code>, <code class="hljs-text">baz</code>두 가지 변수에 외부함수의 리턴을 대입한 결과를 보면, 또 다른 클로저가 생성되면서 <code class="hljs-text">bar</code>와 <code class="hljs-text">baz</code>의 상태는 서로 다르다는 것을 알 수 있다.</p>\n<h3>for loop 와 closure</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>위 코드의 예상 결과로 <code class="hljs-text">1, 2, 3, ..., 9</code> 를 생각할 수 있다. 하지만, 실제 실행 결과는 <code class="hljs-text">10, 10, 10, ..., 10</code>이다. 반복문 안에 있는 함수는 상위 스코프인 <code class="hljs-text">count</code>함수의 영역에서 <code class="hljs-text">i</code>를 찾는다.<br />\n그런데 이때, 이 익명 함수는 호출 스택에 쌓여있다가, loop 를 다 돌고 난 뒤에 실행된다. 따라서, <code class="hljs-text">10</code>이 되어버린 <code class="hljs-text">i</code>를 출력하게 된다.<br />\n(<code class="hljs-text">setTimeout</code>바로 위에 <code class="hljs-text">console.log(i);</code> 라인을 추가하여 확인해보면 더 쉽게 알 수 있다.)<br />\n이 코드를 정상적으로 수행하게 하기 위해서는 즉시 실행 함수 안에서 <code class="hljs-text">setTimeout</code>를 사용하는 방법 과 블록 스코프를 사용하는 방법 이 있다.</p>\n<p><strong>즉시 실행 함수 사용</strong></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>cnt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">for</code>루프 안에서 실행된 즉시실행함수는 i 를 매개변수로 호출된다.<br />\n<code class="hljs-text">setTimeout</code>안에 있는 익명함수는 매개 변수 <code class="hljs-text">cnt</code>즉, <code class="hljs-text">i</code>를 출력하게 되며, 비로소 원하는 결과인 <code class="hljs-text">1, 2, 3, ..., 9</code> 를 출력하게 되는 것이다.</p>\n<p><strong>블록 스코프 사용</strong></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">var</code>로 선언된 <code class="hljs-text">i</code>를 <code class="hljs-text">let</code>키워드로 선언해주면 해결된다. <code class="hljs-text">let</code>은 함수 스코프가 아닌 블록 스코프를 사용하기 때문이다.</p>\n<p><strong>번외 : 다른 방식(callback)으로 구현해보기</strong></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">count</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>참고</h2>\n<ul>\n<li><a href="http://meetup.toast.com/posts/86">NHN Ent. 기술 블로그 : 자바스크립트의 스코프와 클로저</a></li>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures">MDN : 클로저</a></li>\n</ul>',frontmatter:{title:"자바스크립트 클로저",path:"/closure/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","closure","클로저"],date:"2017-08-28T01:21:39.000Z",components:null,tweets:null,summary:"클로저는 다른 함수의 스코프 안에 있는 변수들에 접근할 수 있는 함수를 뜻한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---closure-2ac8a5bc424e92981c6a.js.map