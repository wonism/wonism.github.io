(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{434:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-14-copy-object/index.md absPath of file >>> MarkdownRemark",html:'<h2>객체를 참조하는 복사</h2>\n<p>객체가 아닌 Primitive의 값을 복사하려면 단순히 <code class="hljs-text">b = a</code>와 같이 변수에 복사하고자 하는 변수를 대입하면 된다.<br />\n하지만, 객체에서는 <code class="hljs-text">b = a</code>와 같은 방법을 사용할 수 없다. 객체를 참조하는 복사가 이루어지기 때문이다.<br />\n따라서, <code class="hljs-text">b = a</code>를 수행한 뒤 <code class="hljs-text">a</code>가 수정이 되면, <code class="hljs-text">b</code>까지 수정되는 것을 볼 수 있다.<br /></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span>\n\nobj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 5 }</span>\n</code></pre>\n      </div>\n<h2>얕은 복사하기(Shallow copy)</h2>\n<p>객체를 복사하기 위한 방법으로 다양한 방법이 있다.<br />\n<code class="hljs-text">Object.prototype.constructor</code>메소드를 사용하거나, <code class="hljs-text">Lodash</code>, <code class="hljs-text">Ramda</code>같은 라이브러리를 사용하는 것이다.<br /></p>\n<h3>constructor 메소드 사용하기</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">\'object\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> copiedObject <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      copiedObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nobj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 42 }</span>\n</code></pre>\n      </div>\n<p>위와 같이, 인자가 <code class="hljs-text">null</code>이 아닌 객체일 경우, <code class="hljs-text">constructor</code>메소드로 해당 객체와 똑같은 객체를 생성한다.\n그 다음, <code class="hljs-text">hasOwnProperty</code>를 통해 해당 객체가 인자로 넘긴 프로퍼티를 가지고 있는지 체크하고, 이에 맞는 프로퍼티에 같은 값을 할당한다.</p>\n<h4>참고 : Spread operator 사용하기</h4>\n<p><code class="hljs-text">ES2015</code>의 <code class="hljs-text">...</code>를 사용해도 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1 <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nobj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 42 }</span>\n</code></pre>\n      </div>\n<h3>Lodash &#x26; Ramda</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> fp <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> R <span class="token keyword">from</span> <span class="token string">\'ramda\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> fp<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj4 <span class="token operator">=</span> R<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">Ramda</code>도 <code class="hljs-text">clone</code>이란 메소드가 있지만, <code class="hljs-text">Ramda</code>의 <code class="hljs-text">clone</code>은 깊은 복사를 수행한다.<br />\n따라서 얕은 복사의 목적으로 객체를 복사하고자 할 때는 <code class="hljs-text">merge</code>가 훨씬 빠르다.</p>\n<h2>깊은 복사하기(Deep copy)</h2>\n<p>위 얕은 복사에서는 객체의 한 프로퍼티 값이 객체이고, 해당 객체가 수정이 되면, 원본의 프로퍼티 값이 수정이 되는 문제가 있다.<br />\n이를 피하려면 깊은 복사를 수행한다. 깊은 복사는 얕은 복사와 마찬가지로 <code class="hljs-text">constructor</code>메소드를 사용하거나, 외부 라이브러리를 사용하는 방법이 있다.</p>\n<h3>constructor 메소드 사용하기</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">\'object\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> copiedObject <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      copiedObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> copiedObject<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  deep<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'value\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  shallow<span class="token punctuation">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">copyObject</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbar<span class="token punctuation">.</span>deep<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token string">\'other value\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { deep: { key: \'value\' }, shallow: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { deep: { key: \'other value\' }, shallow: false }</span>\n</code></pre>\n      </div>\n<h3>Lodash &#x26; Ramda</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> fp <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> R <span class="token keyword">from</span> <span class="token string">\'ramda\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> fp<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj4 <span class="token operator">=</span> R<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"JavaScript에서 Object 복사하기",path:"/copy-object/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","object","javascript 기초"],date:"2017-10-14T23:06:33.000Z",components:null,tweets:null,summary:"객체가 아닌 Primitive의 값을 복사하려면 단순히 b = a와 같이 변수에 복사하고자 하는 변수를 대입하면 된다. 하지만, 객체에서는 b = a와 같은 방법을 사용할 수 없다. 객체를 참조하는 복사가 이루어지기 때문이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---copy-object-e08042f4558c3cd9e4f2.js.map