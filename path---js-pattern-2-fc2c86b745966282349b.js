(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{421:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-25-js-patterns-2/index.md absPath of file >>> MarkdownRemark",html:'<h2>Factory</h2>\n<p><code class="hljs-text">공장</code>의 역할은 <code class="hljs-text">물건</code>을 <code class="hljs-text">생산</code>하는 것이다.<br />\n프로그래밍에서도 같은 일을 수행한다. 프로그래밍에서의 <code class="hljs-text">팩토리</code>는 <code class="hljs-text">객체</code>를 <code class="hljs-text">생성</code>한다.</p>\n<p>팩토리 패턴은 클래스 내부나 클래스의 스태틱 메소드로 구현되는데,\n객체를 생성하는 부분을 서브 클래스에 위임한다고 볼 수 있다.</p>\n<h2>팩토리가 하는 일</h2>\n<p>팩토리가 하는 일은 다음과 같다.</p>\n<ul>\n<li>비슷한 객체를 생성하는 반복 작업 수행한다.</li>\n<li>구체적인 타입을 몰라도 객체를 생성할 수 있게 한다.\n(자바스크립트에서는 강타입 언어가 아니기 때문에 두 번째 일을 쉽게 구현할 수 있다.)</li>\n</ul>\n<p><code class="hljs-text">팩토리</code>의 가장 대표적인 예제는 <code class="hljs-text">Object</code>이다.<br />\n전달받은 값에 따라 다른 객체를 생성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token string">\'abc\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token regex">/\\w/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnum<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Number</span>\nstr<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// String</span>\nbool<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Boolean</span>\nobj<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Object</span>\narr<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Array</span>\nreg<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// RegExp</span>\n</code></pre>\n      </div>\n<h2>구현</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">createEmployee</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> employee<span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'fulltime\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      employee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FullTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'parttime\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      employee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PartTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'manager\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      employee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> does not exist.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    employee<span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>\n    employee<span class="token punctuation">.</span><span class="token function-variable function">earn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I\\\'m %s. I get %f dollar per hour\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> employee<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">FullTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">PartTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> e1 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createEmployee</span><span class="token punctuation">(</span><span class="token string">\'fulltime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e2 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createEmployee</span><span class="token punctuation">(</span><span class="token string">\'parttime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e3 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createEmployee</span><span class="token punctuation">(</span><span class="token string">\'manager\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ne1<span class="token punctuation">.</span><span class="token function">earn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I\'m fulltime. I get 10 dollar per hour</span>\ne2<span class="token punctuation">.</span><span class="token function">earn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I\'m parttime. I get 5 dollar per hour</span>\ne3<span class="token punctuation">.</span><span class="token function">earn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I\'m manager. I get 20 dollar per hour</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">createEmployee</code>메소드는 실제 팩토리 메소드로 클라이언트에서 유형을 전달받는다.<br />\n이 팩토리에 의해 만들어진 모든 직원은 동일한 인터페이스를 갖게 된다.</p>\n<h2>정리</h2>\n<p><code class="hljs-text">팩토리 패턴</code>을 사용하면 클라이언트에 객체 생성을 위임하면서 인스턴스화할 형식을 관리할 수 있다.<br />\n또한, 자주 사용되면서 다른 특성을 가지는 객체 컬렉션에서 유용하게 사용될 수 있다.</p>\n<p>다음엔 <a href="/js-pattern-3/">프로토타입 패턴</a>에 대해 알아보겠다.</p>',frontmatter:{title:"자바스크립트 패턴 - 2",path:"/js-pattern-2/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","pattern","design pattern","디자인패턴","factory","팩토리"],date:"2017-10-25T22:47:51.000Z",components:null,tweets:null,summary:"공장의 역할은 물건을 생산하는 것이다.  프로그래밍에서도 같은 일을 수행한다. 프로그래밍에서의 팩토리는 객체들을 생성한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---js-pattern-2-fc2c86b745966282349b.js.map