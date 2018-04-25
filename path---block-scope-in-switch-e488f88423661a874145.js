(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{429:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-10-block-scope-in-switch/index.md absPath of file >>> MarkdownRemark",html:'<p>ES2015 의 <code class="hljs-text">let</code>, <code class="hljs-text">const</code> 키워드는 변수를 블록 스코프를 가지는 지역변수로 만들어 준다.<br />\n이외에도 <code class="hljs-text">let</code>, <code class="hljs-text">const</code> 는 TDZ 를 해결해주며, 함수 스코프를 따름으로써 발생하는 문제들을 해결해준다.<br />\n하지만, <code class="hljs-text">switch</code> 문 안에서 <code class="hljs-text">let</code>, <code class="hljs-text">const</code> 를 사용할 떄는 유의할 점이 있다.<br />\n<code class="hljs-text">case</code> 문은 별도의 Lexical Scope 가 없기 때문에 다음과 같은 코드에서는 에러가 발생한다는 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br />\n<p>이런 이슈를 해결하기 위해서는 블록 스코프가 필요한 곳의 <code class="hljs-text">case</code> 문을 <code class="hljs-text">{}</code> 로 감싸야 한다.<br /></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>\n    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Switch안에서의 let과 const",path:"/block-scope-in-switch/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","tdz","let","const","block scope","switch"],date:"2017-09-10T13:22:48.000Z",components:null,tweets:null,summary:"let과 const는 TDZ를 해결해주지만, switch문 안에서 이들를 사용할 때는 유의할 점이 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---block-scope-in-switch-e488f88423661a874145.js.map