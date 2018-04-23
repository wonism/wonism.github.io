(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{384:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-23-speech-synthesis/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Web Speech API</code>의 <code class="hljs-text">SpeechSynthesis</code>는 음성 서비스의 컨트롤러 인터페이스로 이를 사용하여 장치에서 사용할 수 있는 합성 음성에 대한 정보를 가져오고, 음성 재생 등의 역할을 수행할 수 있게 해준다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> SpeechSynthesisUtterance <span class="token operator">===</span> <span class="token string">\'undefined\'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> speechSynthesis <span class="token operator">===</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'This browser does not support speech API\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpeechSynthesisUtterance</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> voices <span class="token operator">=</span> speechSynthesis<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  message<span class="token punctuation">.</span>voice <span class="token operator">=</span> voices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  speechSynthesis<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">speak</span><span class="token punctuation">(</span><span class="token string">\'Hello, World!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div id="speech-synthesis"></div>\n<h2>참조</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis">MDN : SpeechSynthesis</a></li>\n</ul>',frontmatter:{title:"자바스크립트 음성 합성",path:"/speech-synthesis/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","speech synthesis","음성 합성"],date:"2017-10-23T20:15:15.000Z",components:[{rootId:"speech-synthesis",fileName:"speech-synthesis"}],tweets:null,summary:"Web Speech API의 SpeechSynthesis는 음성 서비스의 컨트롤러 인터페이스로 이를 사용하여 장치에서 사용할 수 있는 합성 음성에 대한 정보를 가져오고, 음성 재생 등의 역할을 수행할 수 있게 해준다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---speech-synthesis-eb53a4369f4c0822f73f.js.map