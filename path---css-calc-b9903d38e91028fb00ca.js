(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{417:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-15-css-calc/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">CSS</code> 함수 <code class="hljs-text">calc()</code>는 <code class="hljs-text">CSS3</code>에 추가된 기능 중 하나로, 계산을 해주는 속성이다.<br />\n<code class="hljs-text">calc()</code>는 <code class="hljs-text">&lt;length&gt;</code> <code class="hljs-text">&lt;frequency&gt;</code>, <code class="hljs-text">&lt;angle&gt;</code>, <code class="hljs-text">&lt;time&gt;</code>, <code class="hljs-text">&lt;number&gt;</code>, 또는 <code class="hljs-text">&lt;integer&gt;</code> 가 필요한 곳 어디서든 사용 가능하며,\n기존에 자바스크립트로 하던 계산을 대신 해줄 수 있다.<br />\n예를 들어, <code class="hljs-text">&quot;100% 너비에서 50px 만큼을 뺀 만큼의 너비를 사용하고 싶다&quot;</code>면, 다음과 같이 코드를 작성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-css"><code class="hljs-css"><span class="token selector">*</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> 95%<span class="token punctuation">;</span> <span class="token comment">/* calc() 를 지원하지 않는 브라우저를 위한 fallback */</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> <span class="token function">-webkit-calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* WebKit */</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> <span class="token function">-moz-calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Firefox */</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> <span class="token function">-ms-calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* MS Explorer */</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> <span class="token function">-o-calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Opera */</span>\n  <span class="token property">width</span> <span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Standard */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">calc()</code>내부에서는 <code class="hljs-text">+</code>, <code class="hljs-text">-</code>, <code class="hljs-text">*</code>, <code class="hljs-text">/</code> 등의 사칙 연산이 가능하다.<br />\n이 때, 주의할 것은 <code class="hljs-text">+</code> 연산과 <code class="hljs-text">-</code> 연산 시, 반드시 연산자의 양쪽에 공백이 한 칸 있어야 한다는 것이다.<br />\n또한, 같은 형식(길이는 길이 끼리, 각도는 각도끼리)을 갖는 피연산자 끼리만 연산이 가능하다.</p>\n<p>다음 코드펜은 <code class="hljs-text">calc()</code>와 <code class="hljs-text">vh</code>(View Height, 높이값의 100분의 1 값) 등 <code class="hljs-text">CSS</code>만을 사용하여 구현한 Scroll Indicator 이다.</p>\n<div class="render-codepen" id="css-calc-example"></div>',frontmatter:{title:"CSS의 calc()",path:"/css-calc/",images:["images/browser.jpg"],category:"CSS",tags:["css","calc"],date:"2017-10-15T19:46:11.000Z",components:[{rootId:"css-calc-example",fileName:"render-codepens/css-calc/index"}],tweets:null,summary:"CSS 함수 calc()는 CSS3에 추가된 기능 중 하나로, 계산을 해주는 속성이다.  calc()는 <length> <frequency>, <angle>, <time>, <number>, 또는 <integer> 가 필요한 곳 어디서든 사용 가능하며,"}}},pageContext:{}}}}]);
//# sourceMappingURL=path---css-calc-b9903d38e91028fb00ca.js.map