(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{413:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2018-04-22-reflow-repaint/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">reflow</code>와 <code class="hljs-text">repaint</code>는 수정된 렌더 트리를 다시 렌더링하는 과정에서 발생하는 것으로 웹 애플리케이션의 성능을 떨어뜨리는 주된 요인이다. 극단적인 경우, CSS 효과로 인해 Java Script 의 실행 속도가 느려질 수도 있다.</p>\n<h2>Repaint</h2>\n<p><code class="hljs-text">리페인트</code>는 <code class="hljs-text">레이아웃</code>에는 영향을 주지 않지만, 가시성에는 영향을 주는 엘리먼트가 변경되면 발생한다.<br />\n예를 들면, <code class="hljs-text">opacity</code>, <code class="hljs-text">background-color</code>, <code class="hljs-text">visibility</code>, <code class="hljs-text">outline</code></p>\n<p><a href="https://dev.opera.com/articles/efficient-javascript/?page=3#reflow">오페라</a>에 따르면, “브라우저가 DOM 트리에 있는 다른 모든 노드의 가시성을 확인해야 하므로 리페인트는 비용이 많이 든다.”고 한다.</p>\n<h2>Reflow</h2>\n<p>“리플로우”는 모든 엘리먼트의 위치와 길이 등을 다시 계산하는 것으로 문서의 일부 혹은 전체를 다시 렌더링한다.<br />\n단일 엘리먼트 하나를 변경해도, 하위 엘리먼트나 상위 엘리먼트 등에 영향을 미칠 수 있다.</p>\n<h3>리플로우가 트리거되는 경우</h3>\n<ul>\n<li>DOM 엘리먼트 추가, 제거 또는 변경</li>\n<li>\n<p>CSS 스타일 추가, 제거 또는 변경</p>\n<ul>\n<li>CSS 스타일을 직접 변경하거나, 클래스를 추가함으로써 레이아웃이 변경될 수 있다. 엘리먼트의 길이를 변경하면, DOM 트리에 있는 다른 노드에 영향을 줄 수 있다.</li>\n</ul>\n</li>\n<li>\n<p>CSS3 애니메이션과 트랜지션</p>\n<ul>\n<li>애니메이션의 모든 프레임에서 리플로우가 발생한다.</li>\n</ul>\n</li>\n<li>\n<p>offsetWidth 와 offsetHeight 의 사용</p>\n<ul>\n<li>offsetWidth 와 offsetHeight 속성을 읽으면, 초기 리플로우가 트리거되어 수치가 계산된다.</li>\n</ul>\n</li>\n<li>\n<p>유저 행동</p>\n<ul>\n<li>유저 인터랙션으로 발생하는 <code class="hljs-text">hover</code> 효과, 필트에 텍스트 입력, 창 크기 조정, 글꼴 크기 변경, 스타일시트 또는 글꼴 전환등을 활성화하여 리플로우를 트리거할 수 있다.</li>\n</ul>\n</li>\n</ul>\n<h2>성능 저하 최소화하기</h2>\n<ul>\n<li>\n<p>클래스 변경을 통해 스타일을 변경할 경우, 최대한 말단의 노드의 클래스를 변경한다.</p>\n<ul>\n<li>최대한 말단에 있는 노드를 변경함으로써, 리플로우의 영향을 최소화한다.</li>\n</ul>\n</li>\n<li>\n<p>인라인 스타일을 사용하지 않는다.</p>\n<ul>\n<li>스타일 속성을 통해 스타일을 설정하면, 리플로우가 발생한다.</li>\n<li>엘리먼트의 클래스가 변경될 때 엘리먼트는 하나의 리플로우만 발생시킨다.</li>\n<li>인라인 스타일은 HTML 이 다운로드될 때, 레이아웃에 영향을 미치면서 추가 리플로우를 발생시킨다.</li>\n</ul>\n</li>\n<li>\n<p>애니메이션이 들어간 엘리먼트는 <code class="hljs-text">position: fixed</code> 또는 <code class="hljs-text">position: absolute</code> 로 지정한다.</p>\n<ul>\n<li><code class="hljs-text">absolute</code> 또는 <code class="hljs-text">fixed</code> 위치인 엘리먼트는 다른 엘리먼트의 레이아웃에 영향을 미치지 않는다. (리플로우가 아닌 리페인트가 발생하는데, 이것은 훨씬 적은 비용이 든다.)</li>\n</ul>\n</li>\n<li>\n<p>부드러운 애니메이션이 성능을 저하시킨다.</p>\n<ul>\n<li>한 번에 1px 씩 엘리먼트를 이동하면 부드러워 보이지만, 성능이 떨어지는 디바이스는 말썽일 수 있다.</li>\n<li>엘리먼트를 한 프레임당 4px 씩 이동하면 덜 부드럽게 보이겠지만, 리플로우 처리의 <code class="hljs-text">1/4</code>만 필요하다.</li>\n</ul>\n</li>\n<li>\n<p>레이아웃을 위한 <code class="hljs-text">&lt;table&gt;</code> 은 피한다.</p>\n<ul>\n<li><code class="hljs-text">&lt;table&gt;</code> 은 점진적으로 렌더링되지 않고, 모두 불려지고 계산된 다음에서야 렌더링이 된다. 또한, 작은 변경만으로도 테이블의 다른 모든 노드에 대한 리플로우가 발생한다.</li>\n<li>레이아웃 용도가 아닌 데이터 표시 용도의 <code class="hljs-text">&lt;table&gt;</code> 을 사용하더라고, <code class="hljs-text">table-layout: fixed</code> 속성을 주는 것이 좋다. <code class="hljs-text">table-layout: fixed</code> 를 사용하면, 열 너비가 머리글 행 내용을 기반으로 계산되기 때문이다.</li>\n</ul>\n</li>\n<li>\n<p><code class="hljs-text">CSS</code> 에서 Java Script 표현식을 사용하지 않는다.</p>\n<ul>\n<li>IE 와 FF 는 모두 CSS 에서 Java Script 를 실행할 수 있다. IE 에서는 표현 기법과 HTC 동작 방법이 있고, FF 에서는 XBL 을 사용하는 방법이 있다. (이 방법은 CSS 에서 Java Script 를 직접 실행하지는 않지만, 그 효과는 동일하다.)</li>\n<li>문서가 리플로우될 때마다 Java Script 표현식이 다시 계산된다.</li>\n</ul>\n</li>\n<li>\n<p>CSS 하위 셀렉터를 최소화한다.</p>\n<ul>\n<li>사용하는 규칙이 적을수록 리플로우가 빠르다.</li>\n<li><code class="hljs-text">gulp-uncss</code>, <code class="hljs-text">grunt-uncss</code> 와 같은 도구로 스타일 정의 및 파일 크기를 줄인다.</li>\n</ul>\n</li>\n<li>\n<p>숨겨진 엘리먼트를 변경한다.</p>\n<ul>\n<li><code class="hljs-text">display: none;</code> 으로 숨겨진 엘리먼트는 변경될 때, 리페인트나 리플로우를 일으키지 않는다. 그렇기 때문에 엘리먼트를 표시하기 전에 엘리먼트를 변경한다.</li>\n</ul>\n</li>\n<li>\n<p>Java Script 를 통해 스타일을 변경할 경우, <code class="hljs-text">.cssText</code> 를 사용하거나, 클래스를 변경한다.</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'reflow-test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token string">\'8px\'</span><span class="token punctuation">;</span>\nel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">\'320px\'</span><span class="token punctuation">;</span>\nel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">\'240px\'</span><span class="token punctuation">;</span>\n<span class="token comment">// 3 번의 리플로우 발생</span>\n\n<span class="token comment">/////////</span>\n<span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'reflow-test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token string">\'padding: 8px; width: 320px; height: 240px;\'</span><span class="token punctuation">;</span>\n<span class="token comment">/* or */</span>\nel<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">\'changed\'</span><span class="token punctuation">;</span>\n<span class="token comment">// 1 번의 리플로우 발생</span>\n\n<span class="token comment">/**\n * Style of `changed` class\n * .changed {\n *   padding: 8px;\n *   width: 320px;\n *   height: 240px;\n * }\n */</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>Java Script 를 통해 리스트를 추가하는 경우, DOM Fragment 를 통해 추가한다.</p>\n<ul>\n<li>3 개의 리스트를 추가하는 경우, 한 번에 하나씩 추가하면 최대 7 개의 리플로우가 발생한다.<br />\n<code class="hljs-text">&lt;ul&gt;</code> 이 추가될 때<br />\n<code class="hljs-text">&lt;li&gt;</code> 에 대해 3번<br />\n텍스트 노드에 대해 3번</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">const</span> frag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ul <span class="token operator">=</span> frag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'ul\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  li <span class="token operator">=</span> ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'li\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  li<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token string">`item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> i <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>frag<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>캐쉬를 활용한 Reflow 최소화.</p>\n<ul>\n<li>브라우저는 레이아웃 변경을 큐에 저장했다가 한 번에 실행함으로써 리플로우를 최소화하는데, offset, scrollTop 과 같은 계산된 스타일 정보를 요청할 때마다 정확한 정보를 제공하기 위해 큐를 비우고, 모든 변경을 다시 적용한다.</li>\n<li>이를 최소화하기 위해 수치에 대한 스타일 정보를 변수에 저장하여 정보 요청 횟수를 줄임으로써 리플로우를 최소화한다.</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// Bad practice</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> el<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> <span class="token number">10</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> el<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token number">10</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Good practice</span>\n<span class="token keyword">let</span> top <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetTop<span class="token punctuation">,</span> left <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">,</span> elStyle <span class="token operator">=</span> el<span class="token punctuation">.</span>style<span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  top <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n  left <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n  elStyle<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> top <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n  elStyle<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> left <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>브라우저 도구로 리페인트 이슈 분석하기</p>\n<ul>\n<li>모든 주류 브라우저는 리플로우가 성능에 미치는 영향을 보여주는 [타임라인] 도구를 제공한다.</li>\n<li><code class="hljs-text">IE</code> 의 경우에는 <code class="hljs-text">dynaTrace AJAX Edition</code>, <code class="hljs-text">Webkit Browser</code> 의 경우에는 <code class="hljs-text">Google Chrome SpeedTracer</code> 가 있다.</li>\n</ul>\n</li>\n</ul>\n<h2>참고</h2>\n<ul>\n<li><a href="http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/">Stubbornella : REFLOWS &#x26; REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?</a></li>\n<li><a href="https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/">Sitepoint : 10 Ways to Minimize Reflows and Improve Performance</a></li>\n<li><a href="https://dev.opera.com/articles/efficient-javascript/?page=3#reflow">Opera : Efficient JavaScript</a></li>\n<li><a href="http://stackoverflow.com/questions/476276/using-javascript-in-css">SO : Using Javascript in CSS</a></li>\n</ul>',frontmatter:{title:"Reflow 와 Repaint",path:"/reflow-repaint/",images:["images/browser.jpg"],category:"Browser",tags:["browser","reflow","repain","dom","css"],date:"2018-04-22T21:09:09.000Z",components:null,tweets:null,summary:"이전에 작성한 resolve.alias로 import 개선하기에서 이어지는 글이다. 보통 React JS로 웹 애플리케이션을 개발하면 webpack을 사용하기 마련이지만, React Native로 모바일 애플리케이션을 개발할 땐, webpack을 사용하지 않는 경우도 많다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---reflow-repaint-287716db54c4faca1239.js.map