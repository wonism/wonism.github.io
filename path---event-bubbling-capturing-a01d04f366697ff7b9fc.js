(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{431:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-03-javascript-events/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">DOM</code>의 <code class="hljs-text">event</code>는 이벤트 중심 프로그래밍 언어가 DOM 트리 내의 요소 노드 (<code class="hljs-text">HTML</code>, <code class="hljs-text">XHTML</code>, <code class="hljs-text">SVG</code> 등)에 <code class="hljs-text">이벤트 처리기/수신기</code>를 등록할 수 있도록 한다.<br />\n하지만, 초창기 다양한 웹 브라우저에서 사용되는 이벤트 모델에는 몇 가지 차이점이 있었는데 이로 인해 호환성 문제가 발생했다. <code class="hljs-text">W3C</code>는 이를 해결하기 위해 <code class="hljs-text">DOM Level 2</code>에서 이벤트 모델을 표준화하였다.</p>\n<h2>이벤트 핸들링 모델</h2>\n<h3>DOM Level 0에서의 이벤트 핸들링 모델</h3>\n<p>이 이벤트 핸들링 모델은 <code class="hljs-text">Netscape Navigator</code>에서 소개되었으며, 인라인 모델과 전통적 모델의 두 가지 모델 유형이 있다.</p>\n<p><strong>인라인 모델</strong></p>\n<p>인라인 모델에서는 이벤트 핸들러는 태그의 속성으로 추가된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>Hello, Event!<span class="token punctuation">\'</span>); return false;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">JavaScript 엔진</code>이 <code class="hljs-text">onclick</code>속성의 내용을 포함하는 익명 함수를 생성하며, <code class="hljs-text">&lt;button&gt;</code>의 onclick 핸들러는 다음 익명 함수에 바인드된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Hello, Event!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>전통적 모델</strong></p>\n<p>전통적 모델에서는 스크립트로 이벤트 핸들러를 추가하거나 제거할 수 있다.<br />\n이 때, 각 이벤트는 하나의 이벤트 핸들러만 등록할 수 있다.</p>\n<p>이벤트는 태그의 이벤트 속성에 핸들러 이름을 할당함으로써 추가되며, 이벤트 핸들러를 제거하려면, <code class="hljs-text">null</code>을 할당한다.<br />\n인자를 넘기기 위해 클로저 개념을 사용할 수도 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js">window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'window is loaded\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>onload <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span>onload <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">\'Event is fired!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>DOM Level 2에서의 이벤트 핸들링 모델</h3>\n<p><code class="hljs-text">W3C</code>에서는 보다 유연한 이벤트 핸들링 모델을 설계했다.<br />\n<code class="hljs-text">addEventListener</code>를 통해 이벤트 대상에 이벤트 리스너를 등록할 수 있으며, <code class="hljs-text">removeEventListener</code>를 통해 이벤트 리스너를 제거할 수 있다.<br />\n또, <code class="hljs-text">dispatchEvent</code>를 통해 구독된 이벤트 리스너에 이벤트를 보낼 수 있다.\n<code class="hljs-text">DOM Level 0</code>와 달리 동일한 이벤트에 대해 여러 이벤트 핸들러를 등록할 수 있으며, 다양한 옵션들을 사용할 수 있다.</p>\n<h4>이벤트 기본 동작 호출 방지</h4>\n<p>이벤트의 기본 동작이 호출되지 않게 하기위해 이벤트 객체의 <code class="hljs-text">preventDefault</code>메소드를 호출한다.</p>\n<h4>이벤트 버블링 방지</h4>\n<p>뒤에 이벤트 버블링에 대한 설명을 하겠지만, 이벤트가 버블링되지 않게 하기 위해서는 이벤트 객체의 <code class="hljs-text">stopPropagation</code> 메소드를 호출한다.<br /></p>\n<h4>IE 구버전에서의 이벤트 핸들링 모델</h4>\n<p><code class="hljs-text">Internet Explorer 9</code> 미만의 버전에서는 <code class="hljs-text">addEventListener</code>대신 <code class="hljs-text">attachEvent</code>, <code class="hljs-text">removeEventListener</code>대신 <code class="hljs-text">detachEvent</code>, <code class="hljs-text">dispatchEvent</code>대신 <code class="hljs-text">fireEvent</code>를 사용한다.<br />\n이벤트 기본 동작 호출을 방지하기 위해서는 이벤트 객체의 <code class="hljs-text">returnValue</code> 속성을 <code class="hljs-text">false</code>로 하며,\n이벤트 버블링을 방지하기 위해서는 이벤트 객체의 <code class="hljs-text">cancelBubble</code> 속성을 <code class="hljs-text">true</code>로 한다.</p>\n<h4>addEventListener의 옵션</h4>\n<p><code class="hljs-text">addEventListener</code>의 <code class="hljs-text">boolean</code> 타입 옵션을 통해 이벤트 캡쳐링 방식으로 이벤트 핸들러를 호출하거나,\n<code class="hljs-text">object</code> 타입 옵션을 통해 단 한 번만 이벤트 핸들러를 호출하게 할 수 있다.<br />\n(IE Edge에서는 <code class="hljs-text">object</code> 타입 옵션을 사용할 수 없다.)</p>\n<h2>이벤트 종류</h2>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/DOM_events#HTML_events">링크</a> 참고</li>\n</ul>\n<h2>이벤트 흐름</h2>\n<p>이벤트 흐름은 이벤트가 전달되는 과정으로 다음 세 단계로 생명주기가 구성된다.</p>\n<ul>\n<li>이벤트 캡쳐링</li>\n<li>타겟</li>\n<li>이벤트 버블링</li>\n</ul>\n<p>캡쳐링과 버블링의 차이를 설명하기 위해 다음과 같은 <code class="hljs-text">DOM</code>이 있다고 가정한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Click!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>이 때, <code class="hljs-text">&lt;button&gt;</code>요소에 <code class="hljs-text">click</code> 이벤트가 발생하면, <code class="hljs-text">&lt;button&gt;</code>요소는 물론, <code class="hljs-text">&lt;main&gt;</code>, <code class="hljs-text">&lt;form&gt;</code>요소 등도 이벤트를 감지할 수 있다. 이렇게 중첩되는 요소가 있는 구조에서 이벤트가 발생할 때, 다음과 같이 이벤트가 발생한다.</p>\n<h3>이벤트 캡쳐링</h3>\n<p>이벤트 흐름이 가장 얕은 깊이의 노드(부모 노드)에서 가장 깊은 깊이의 노드(자식 노드)로 향한다.<br />\n또한 <code class="hljs-text">button</code>을 클릭했을 때, 클릭 이벤트는 다음 순서대로 발생한다.</p>\n<p><code class="hljs-text">&lt;main&gt; ▶ &lt;section&gt; ▶ &lt;div&gt; ▶ &lt;button&gt;</code></p>\n<p>(이벤트 캡쳐링 방식의 흐름을 원할 경우 <code class="hljs-text">addEventListener</code>의 3번째 인자를 <code class="hljs-text">true</code>로 넘긴다.)</p>\n<h3>타겟</h3>\n<p>실제 타겟(<code class="hljs-text">&lt;button&gt;</code>)이 이벤트를 가져온다.</p>\n<h3>이벤트 버블링</h3>\n<p>이벤트 흐름이 가장 깊은 깊이의 노드(자식 노드)에서 가장 얕은 깊이의 노드(부모 노드)로 향한다.<br />\n또한 <code class="hljs-text">button</code>을 클릭했을 때, 클릭 이벤트는 다음 순서대로 발생한다.<br /></p>\n<p><code class="hljs-text">&lt;button&gt; ▶ &lt;div&gt; ▶ &lt;section&gt; ▶ &lt;main&gt;</code></p>\n<p>(이벤트 버블링 방식의 흐름을 원할 경우 <code class="hljs-text">addEventListener</code>의 3번째 인자를 <code class="hljs-text">false</code>로 넘기거나, 넘기지 않는다. (기본값은 <code class="hljs-text">false</code>))</p>\n<h2>이벤트 버블링과 캡쳐링 예제</h2>\n<h3>이벤트 버블링 예제</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>event-bubbling-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Click!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-bubbling-example main\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-bubbling-example section\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-bubbling-example div\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-bubbling-example button\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div id="event-bubbling-example"></div>\n<p>이 예제 코드를 실행하면, <code class="hljs-text">BUTTON</code> ▶ <code class="hljs-text">DIV</code> ▶ <code class="hljs-text">SECTION</code> ▶ <code class="hljs-text">MAIN</code>순서로 경고창이 출력되는 것을 볼 수 있다.</p>\n<h3>이벤트 전파 방지하기 예제</h3>\n<p>다음과 같은 코드를 작성하면, 이벤트가 전파되지 않는다.<br />\n이벤트가 전파되지 않기 때문에 경고창이 <code class="hljs-text">BUTTON</code>만 출력함을 알 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div id="prevent-event-bubbling-example"></div>\n<h3>이벤트 캡쳐링 예제</h3>\n<p><code class="hljs-text">addEventListener</code>의 3번째 인자를 통해 이벤트 캡쳐링 방식으로 이벤트를 핸들링할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>event-capturing-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Click!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// DOM LEVEL 2 Event Model 처리 함수</span>\n<span class="token keyword">const</span> <span class="token function-variable function">addEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> capture<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  type <span class="token operator">=</span> <span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">\'string\'</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">||</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  handler <span class="token operator">=</span> handler <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> capture<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// For IE8</span>\n    element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">\'on\'</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">addEvent</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">\'load\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">addEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-capturing-example main\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">addEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-capturing-example section\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">addEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-capturing-example div\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">addEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#event-capturing-example button\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이 예제 코드를 실행한 뒤 버튼을 클릭하면, <code class="hljs-text">MAIN</code> ▶ <code class="hljs-text">BUTTON</code> ▶ <code class="hljs-text">DIV</code> ▶ <code class="hljs-text">SECTION</code>이 출력되는 것을 볼 수 있다.<br />\n<code class="hljs-text">DIV</code>와 <code class="hljs-text">SECTION</code>이 가장 늦게 출력되는 이유는 이벤트 버블링 방식으로 이벤트가 등록되기 때문이다.<br />\n구버전의 IE에서 이를 수행하면, 이벤트 버블링 방식으로 <code class="hljs-text">BUTTON</code> ▶ <code class="hljs-text">DIV</code> ▶ <code class="hljs-text">SECTION</code> ▶ <code class="hljs-text">MAIN</code>이 출력된다.</p>\n<div id="event-capturing-example"></div>\n<h2>기타 : 리액트에서의 버블링과 캡쳐링</h2>\n<p>리액트의 이벤트 핸들러는 버블링 단계의 이벤트에 의해 트리거된다.<br />\n캡쳐링 단계에 대한 이벤트 핸들러를 등록하려면, <code class="hljs-text">Capture</code>를 접미사로 붙인다.<br />\n예 : <code class="hljs-text">onClickCapture</code>, <code class="hljs-text">onKeyPressCapture</code></p>\n<h2>참조</h2>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/DOM_events">Wiki : DOM events</a></li>\n<li><a href="http://www.tutorialspark.com/javascript/JavaScript_Event_Flow.php">Tutorials Park : Javascript : Event Flow</a></li>\n</ul>',frontmatter:{title:"이벤트 핸들링 모델과 이벤트 버블링/캡쳐링",path:"/event-bubbling-capturing/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","event","이벤트 버블링","이벤트 캡쳐링"],date:"2017-10-03T15:57:26.000Z",components:[{rootId:"event-bubbling-example",fileName:"event-bubbling"},{rootId:"prevent-event-bubbling-example",fileName:"prevent-event-bubbling"},{rootId:"event-capturing-example",fileName:"event-capturing"}],tweets:null,summary:"DOM의 event는 이벤트 중심 프로그래밍 언어가 DOM 트리 내의 요소 노드 (HTML, XHTML, SVG 등)에 이벤트 처리기/수신기를 등록할 수 있도록 한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---event-bubbling-capturing-a01d04f366697ff7b9fc.js.map