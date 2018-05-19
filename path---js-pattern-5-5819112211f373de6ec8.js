(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{429:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-29-js-patterns-5/index.md absPath of file >>> MarkdownRemark",html:'<h2>Decorator</h2>\n<p><code class="hljs-text">장식자 패턴</code>은 객체의 동작을 동적으로 확장한다. 런타임 시 새로운 동작을 추가하는 기능은 원본 객체를 감싸는 <code class="hljs-text">Decorator</code> 객체에 의해 수행된다.<br />\n데코레이터는 컴파일 타임에 발생하는 상속과 달리 런타임 변경을 허용함으로써 정적 언어에 유연성을 제공한다.</p>\n<h2>ES5에서의 구현</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'result is %d\'</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> sum<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmath<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">DecoratedMath</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span>math <span class="token operator">=</span> math<span class="token punctuation">;</span>\n\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`result is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> sum<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>ES2017에서의 구현</h2>\n<p>먼저, 데코레이터를 지원하지 않는 환경이라면, <code class="hljs-text">babel-plugin-transform-decorators-legacy</code> 패키지가 필요하다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// .babelrc.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"env"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"transform-decorators-legacy"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>\n  @log\n  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * target : 클래스의 인스턴스에 매핑된다.\n * name : 데코레이팅할 메소드의 이름\n * descriptor : 동작을 지정하거나, 접근 제한, 캐싱 구현 등을 할 수 있게 도와주는 객체\n */</span>\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\n  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Calling "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>args<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> oldValue<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmath<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Calling "add" with 42,5</span>\n</code></pre>\n      </div>\n<h2>정리</h2>\n<p><code class="hljs-text">반복자 패턴</code>은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다.<br />\n<code class="hljs-text">반복자 패턴</code>을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다.</p>\n<p>다음엔 <code class="hljs-text">퍼사드 패턴</code>에 대해 알아보겠다.</p>',frontmatter:{title:"자바스크립트 패턴 - 5",path:"/js-pattern-5/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","pattern","design pattern","디자인패턴","decorator","장식자"],date:"2017-10-29T00:14:31.000Z",components:null,tweets:null,summary:"반복자 패턴은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다. 반복자 패턴을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---js-pattern-5-5819112211f373de6ec8.js.map