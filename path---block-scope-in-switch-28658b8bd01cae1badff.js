webpackJsonp([0xcd0fd9f1acdd],{"./node_modules/json-loader/index.js!./.cache/json/block-scope-in-switch.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Wonism ∙ Front-end Developer",author:"wonism"}},markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-10-block-scope-in-switch/index.md absPath of file >>> MarkdownRemark",html:'<p>ES2015 의 <code>let</code>, <code>const</code> 키워드는 변수를 블록 스코프를 가지는 지역변수로 만들어 준다.<br />\n이외에도 <code>let</code>, <code>const</code> 는 TDZ 를 해결해주며, 함수 스코프를 따름으로써 발생하는 문제들을 해결해준다.<br />\n하지만, <code>switch</code> 문 안에서 <code>let</code>, <code>const</code> 를 사용할 떄는 유의할 점이 있다.<br />\n<code>case</code> 문은 별도의 Lexical Scope 가 없기 때문에 다음과 같은 코드에서는 에러가 발생한다는 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">/* ... */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br />\n<p>이런 이슈를 해결하기 위해서는 블록 스코프가 필요한 곳의 <code>case</code> 문을 <code>{}</code> 로 감싸야 한다.<br /></p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>\n    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Switch안에서의 let과 const",path:"/block-scope-in-switch/",tags:["javascript","tdz","let","const","block scope","switch"],category:"JavaScript",date:"September 10, 2017",summary:"let과 const는 TDZ를 해결해주지만, switch문 안에서 이들를 사용할 때는 유의할 점이 있다.",components:null,tweets:null,isNotPost:null}}},pathContext:{path:"/block-scope-in-switch/"}}}});
//# sourceMappingURL=path---block-scope-in-switch-28658b8bd01cae1badff.js.map