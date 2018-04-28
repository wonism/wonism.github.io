(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{409:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-28-nodemailer/index.md absPath of file >>> MarkdownRemark",html:'<h2>Node Mailer</h2>\n<p><code class="hljs-text">nodemailer</code>는 <code class="hljs-text">Node.js</code>에서 <code class="hljs-text">e-mail</code>을 쉽게 보낼 수 있게 도와주는 모듈이다.<br />\n<code class="hljs-text">Gmail</code>뿐만 아니라, <code class="hljs-text">Naver</code>, <code class="hljs-text">Yahoo</code> 등의 서비스도 지원한다.</p>\n<p>지원 리스트는 이 <a href="https://nodemailer.com/smtp/well-known/#supported-services">링크</a>에서 볼 수 있다.</p>\n<h2>사용방법</h2>\n<p><code class="hljs-text">0.x</code> 버전과 <code class="hljs-text">&gt;=1.0</code> 버전은 사용 방법이 다르다.<br />\n이 예제에서는 <code class="hljs-text">4.3.0</code> 버전을 사용한다.</p>\n<h3>모듈 설치</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ npm i -S nodemailer nodemailer-smtp-pool</code></pre>\n      </div>\n<h3>구현하기</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nodemailer\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> smtpPool <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nodemailer-smtp-pool\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// smtpPool는 smtp서버를 사용하기 위한 모듈로</span>\n<span class="token comment">// transporter객체를 만드는 nodemailer의 createTransport메소드의 인자로 사용된다.</span>\n\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mailer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    service<span class="token punctuation">:</span> <span class="token string">\'Gmail\'</span><span class="token punctuation">,</span>\n    host<span class="token punctuation">:</span> <span class="token string">\'localhost\'</span><span class="token punctuation">,</span>\n    port<span class="token punctuation">:</span> <span class="token string">\'465\'</span><span class="token punctuation">,</span>\n    user<span class="token punctuation">:</span> <span class="token string">\'user@email.com\'</span><span class="token punctuation">,</span>\n    password<span class="token punctuation">:</span> <span class="token string">\'PA%%W0RD\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token keyword">from</span> <span class="token operator">=</span> <span class="token string">\'FROM &lt; from@email.com >\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> to <span class="token operator">=</span> <span class="token string">\'to@email.com\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token string">\'This is title\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">\'&lt;p>This is paragraph.&lt;/p>\'</span><span class="token punctuation">;</span>\n<span class="token comment">// const text = \'This is just text.\';</span>\n\n<span class="token keyword">const</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">from</span><span class="token punctuation">,</span>\n  to<span class="token punctuation">,</span>\n  subject<span class="token punctuation">,</span>\n  html<span class="token punctuation">,</span>\n  <span class="token comment">// text,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// 본문에 html이나 text를 사용할 수 있다.</span>\n\n<span class="token keyword">const</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token function">smtpPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  service<span class="token punctuation">:</span> config<span class="token punctuation">.</span>mailer<span class="token punctuation">.</span>service<span class="token punctuation">,</span>\n  host<span class="token punctuation">:</span> config<span class="token punctuation">.</span>mailer<span class="token punctuation">.</span>host<span class="token punctuation">,</span>\n  port<span class="token punctuation">:</span> config<span class="token punctuation">.</span>mailer<span class="token punctuation">.</span>port<span class="token punctuation">,</span>\n  auth<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    user<span class="token punctuation">:</span> config<span class="token punctuation">.</span>mailer<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    pass<span class="token punctuation">:</span> config<span class="token punctuation">.</span>mailer<span class="token punctuation">.</span>password<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  tls<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rejectUnauthorize<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  maxConnections<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  maxMessages<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 메일을 전송하는 부분</span>\ntransporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'failed... => \'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'succeed... => \'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  transporter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>메일이 전송되지 않는 경우</h3>\n<p>메일이 전송되지 않는 경우는 대부분 보안 문제때문 일 것이다.<br />\n메일을 다른 앱을 통해 사용할 수 있도록 설정을 바꾸면 된다.</p>\n<p><code class="hljs-text">Gmail</code>의 경우 <a href="https://myaccount.google.com/lesssecureapps%EC%97%90%EC%84%9C">https://myaccount.google.com/lesssecureapps에서</a> 설정을 변경하면 될 것이다.</p>',frontmatter:{title:"nodemailer로 이메일 전송하기",path:"/nodemailer/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","nodejs","nodemailer"],date:"2017-10-28T00:25:05.000Z",components:null,tweets:null,summary:"nodemailer는 Node.js에서 e-mail을 쉽게 보낼 수 있게 도와주는 모듈이다. Gmail뿐만 아니라, Naver, Yahoo 등의 서비스도 지원한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---nodemailer-b4acd3afabb358b87d27.js.map