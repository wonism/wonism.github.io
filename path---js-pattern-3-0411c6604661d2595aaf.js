(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{381:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-25-js-patterns-3/index.md absPath of file >>> MarkdownRemark",html:'<h2>Prototype</h2>\n<p><code class="hljs-text">프로토타입</code>은 프로토타입 인스턴스를 사용하여 만들 객체의 종류를 지정하고, 이 프로토타입을 복사함으로써 새 객체를 만든다.</p>\n<p><code class="hljs-text">프로토타입 패턴</code>은 데이터베이스의 기본값과 일치하는 값을 가지는 객체 초기화에서 유용하게 사용된다.</p>\n<h2>구현</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">CarPrototype</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>proto <span class="token operator">=</span> proto<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    car<span class="token punctuation">.</span>colors <span class="token operator">=</span> proto<span class="token punctuation">.</span>colors<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> car<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> colors<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">go</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'%s car is driven by human.\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> carProto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> carPrototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarPrototype</span><span class="token punctuation">(</span>carProto<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> car <span class="token operator">=</span> carPrototype<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncar<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// red car is driven by human.</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">CarPrototype</code> 객체는 주어진 프로토타입 객체가 주어진 객체를 복제한다.<br />\n또, <code class="hljs-text">clone</code> 메소드를 호출하면 프로토타입으로 초기화된 속성 값들을 가지는 <code class="hljs-text">Car</code> 객체를 생성한다.</p>\n<h2>정리</h2>\n<p><code class="hljs-text">프로토타입 패턴</code>은 새 객체를 생성하지만, 초기화되지 않은 객체를 생성하는 대신 <code class="hljs-text">원형(Prototype)</code>에서 복사한 값으로 초기화되는 객체를 반환한다.<br />\n이를 <code class="hljs-text">Properties 패턴</code>이라고 하기도 한다.</p>\n<p>구현을 통해 사용방법을 알아봤지만, 자바스크립트에 내장된 <code class="hljs-text">prototype</code>기능을 사용하면 훨씬 효과적으로 이 작업을 수행할 수 있다.</p>\n<p>다음엔 <a href="/js-pattern-4">반복자 패턴</a>에 대해 알아보겠다.</p>',frontmatter:{title:"자바스크립트 패턴 - 3",path:"/js-pattern-3/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","pattern","design pattern","디자인패턴","prototype","프로토타입"],date:"2017-10-25T23:15:15.000Z",components:null,tweets:null,summary:"여기서 말하는 프로토타입은 함수를 확장할 수 있는 Function.prototype이 아니다.  프로토타입 패턴에서의 프로토타입은 프로토타입 인스턴스를 사용하여 만들 객체의 종류를 지정하고, 이 프로토타입을 복사함으로써 새 객체를 만든다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---js-pattern-3-0411c6604661d2595aaf.js.map