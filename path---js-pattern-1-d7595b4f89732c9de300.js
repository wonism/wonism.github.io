(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{415:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-24-js-patterns-1/index.md absPath of file >>> MarkdownRemark",html:'<h2>디자인 패턴이란?</h2>\n<p><code class="hljs-text">디자인 패턴</code>은 특정 문맥에서 공통적으로 발생하는 문제에 대한 재사용가능한 해결책이다.</p>\n<h2>Singleton</h2>\n<p>먼저, 제일 간단한 <code class="hljs-text">싱글톤</code>에 대해 알아보겠다.</p>\n<p>싱글톤은 특정 클래스의 인스턴스를 오직 하나만 유지하게 되는데, 동일한 클래스로 새로운 객체를 생성해도 처음 만들어진 객체를 얻게 된다.</p>\n<h3>객체 리터럴</h3>\n<p>자바스크립트의 리터럴로 객체를 생성하게 되면, 다른 어떤 객체와도 같지 않기 때문에 이 자체만으로 싱글톤이라고 볼 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> num<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> num<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nobj <span class="token operator">==</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>\nobj <span class="token operator">===</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<p>위처럼 동일한 멤버를 가지는 객체를 생성해도 이전에 만들어진 객체와 동일하지 않다.</p>\n<h3>new 연산자로 생성된 객체</h3>\n<p><code class="hljs-text">new</code> 연산자는 <code class="hljs-text">생성자 함수</code> 또는 <code class="hljs-text">클래스</code>를 통해 객체를 만들 수 있게 한다.<br />\n즉, <code class="hljs-text">new Constructor();</code>를 통해 생성된 객체는 항상 처음 만들어진 객체를 가리키게 되며, 다음과 같은 결과가 나와야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\na1 <span class="token operator">===</span> a2<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>이를 위한 방법으로는 여러가지 방법이 있다.</p>\n<h4>스태틱 프로퍼티에 인스턴스 저장하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Person<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Person<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n\n  Person<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'wonism\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'human\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\np1 <span class="token operator">===</span> p2 <span class="token comment">// true</span>\np2<span class="token punctuation">.</span>name <span class="token comment">// wonism</span>\n</code></pre>\n      </div>\n<p>위에 언급한대로 스태틱 프로퍼티에 인스턴스를 저장한다.\n간단한 방법이지만, <code class="hljs-text">instance</code>가 공개되어 있다는 단점이 있다.</p>\n<h4>클래스 키워드 사용하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Person<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> Person<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> Person<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'wonism\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'human\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\np1 <span class="token operator">===</span> p2 <span class="token comment">// true</span>\np2<span class="token punctuation">.</span>name <span class="token comment">// wonism</span>\n</code></pre>\n      </div>\n<p>바로 이전에 살펴본 예제 코드를 <code class="hljs-text">class</code>로 변경한 것 뿐이다.</p>\n<h4>클로저에 인스턴스 저장하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">let</span> Person<span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">iife</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> instance<span class="token punctuation">;</span>\n  <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Singleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> instance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    instance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'wonism\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">\'human\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\np1 <span class="token operator">===</span> p2 <span class="token comment">// true</span>\np2<span class="token punctuation">.</span>name <span class="token comment">// wonism</span>\n</code></pre>\n      </div>\n<p>생성자가 최초로 호출되면 생성자는 객체를 생성하고, 비공개 변수인 <code class="hljs-text">instance</code>를 가리킨다. 두 번째 부터는 <code class="hljs-text">instance</code>를 가리킨다.</p>\n<br />\n<h2>정리</h2>\n<p><code class="hljs-text">싱글톤 패턴</code>은 객체지향 언어에서 여러 개의 인스턴스 생성을 피하는 유용한 패턴이다.<br />\n(하지만 클래스 기반의 언어가 아닌 약타입 프로토타입 언어인 자바스크립트(ES3, ES5 등)에서는 이 패턴이 그렇게 유용한 편은 아니다.)</p>\n<p>다음엔 <a href="/js-pattern-2/">팩토리 패턴</a>에 대해 알아보겠다.</p>',frontmatter:{title:"자바스크립트 패턴 - 1",path:"/js-pattern-1/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","pattern","design pattern","디자인패턴","singleton","싱글톤"],date:"2017-10-24T21:38:57.000Z",components:null,tweets:null,summary:"디자인 패턴은 특정 문맥에서 공통적으로 발생하는 문제에 대한 재사용가능한 해결책이다. 먼저, 제일 간단한 싱글톤에 대해 알아보겠다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---js-pattern-1-d7595b4f89732c9de300.js.map