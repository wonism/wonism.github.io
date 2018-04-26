(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{414:function(s){s.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-15-critical-rendering-path/index.md absPath of file >>> MarkdownRemark",html:'<p>이 글은 <a href="https://ireaderinokun.com/">Ire Aderinokun</a>의 허락을 받고\n<a href="https://bitsofco.de/understanding-the-critical-rendering-path/">Understanding the Critical Rendering Path</a>라는 글의 일부를 번역한 것이다.</p>\n<p><code class="hljs-text">Critical Rendering Path(CRP)</code>는 브라우저가 서버로부터 HTML 응답을 받아 화면을 그리기 위해 실행하는 과정이다.<br />\nCRP는 6단계를 거치며 각 단계는 다음과 같다.</p>\n<ol>\n<li><code class="hljs-text">DOM 트리</code> 만들기</li>\n<li><code class="hljs-text">CSSOM 트리</code> 만들기</li>\n<li><code class="hljs-text">JavaScript</code> 실행</li>\n<li><code class="hljs-text">Render 트리</code> 만들기</li>\n<li>레이아웃 생성하기</li>\n<li>페인팅</li>\n</ol>\n<h2>DOM 트리 만들기</h2>\n<p><code class="hljs-text">DOM 트리</code>는 완전하게 파싱된 <code class="hljs-text">HTML</code> 페이지의 Object 표현이다.<br />\n<code class="hljs-text">html</code>로부터 시작되어, 페이지의 각 <code class="hljs-text">element</code>, <code class="hljs-text">text</code>에 대한 노드가 만들어진다.<br />\n다른 요소 내에 중첩된 요소는 자식 노드로 표시되며, 각 노드에는 해당 요소의 특성(attribute)이 포함된다.</p>\n<p>이 예제 코드는 아래 이미지와 같은 <code class="hljs-text">DOM 트리</code>를 구성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Understanding the Critical Rendering Path<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Understanding the Critical Rendering Path<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Introduction<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Copyright 2017<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="render-image" id="crp-dom"></div>\n<p><code class="hljs-text">HTML</code>은 부분적으로 실행될 수 있으며, 페이지에 내용이 표시되기 위해 문서 전체를 로드할 필요가 없다.\n하지만, <code class="hljs-text">CSS</code>와 <code class="hljs-text">JavaScript</code>는 페이지의 렌더링을 차단할 수 있다.</p>\n<h2>CSSOM 트리 만들기</h2>\n<p><code class="hljs-text">CSSOM</code>은 <code class="hljs-text">DOM</code>과 관련된 스타일의 Object 표현이다.<br />\n<code class="hljs-text">CSSOM</code>은 <code class="hljs-text">DOM</code>과 비슷한 방식으로 표현되지만, (명시적으로) 선언되었는지 (암시적으로) 상속되었는지 상관없이 각 노드에 대한 스타일이 포함된다.</p>\n<p>위 <code class="hljs-text">HTML</code> 예제 코드에서 포함된 <code class="hljs-text">style.css</code>는 다음과 같다고 가정하며, 이는 아래 이미지와 같은 <code class="hljs-text">CSSOM 트리</code>를 구성한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-css"><code class="hljs-css"><span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token selector">header</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> plum<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token selector">main</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> firebrick<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">h2</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token selector">footer</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="render-image" id="crp-cssom"></div>\n<p><code class="hljs-text">CSS</code>는 렌더링을 차단하는 리소스로, 완전히 파싱되지 않으면 <code class="hljs-text">Render 트리</code>를 구성할 수 없다.\n<code class="hljs-text">HTML</code>과 달리 <code class="hljs-text">CSS</code>는 상속된 계단식 특성때문에 부분적으로 실행될 수 없으며, 문서의 뒷부분에 정의된 스타일은 이전에 정의된 스타일을 덮어쓰게된다.</p>\n<p>(<code class="hljs-text">CSS</code>전체가 파싱되기 전에 먼저 스타일 시트에 정의한 <code class="hljs-text">CSS</code>스타일을 사용하면, 잘못된 <code class="hljs-text">CSS</code>가 적용되는 상황이 발생할 수 있다.\n하지만, 완전히 파싱되기 전까지 렌더링을 차단함으로써 이와 같은 일이 일어나지 않는다.)</p>\n<p><code class="hljs-text">&lt;link rel=&quot;stylesheet&quot; /&gt;</code> 태그는 미디어 속성을 받을 수 있고, 미디어 속성은 스타일이 적용되는 미디어쿼리를 지정할 수 있다.\n만약, 미디어 속성이 <code class="hljs-text">orientation: landscape</code> 인 스타일 시트가 있고, 페이지를 세로모드로 보고있는 경우 해당 리소스는 렌더링 블로킹으로 간주되지 않는다.\n<code class="hljs-text">CSS</code>는 <code class="hljs-text">스크립트 블로킹</code>일수도 있다. 왜냐하면, <code class="hljs-text">JavaScript</code> 파일은 실행되기 전에 <code class="hljs-text">CSSOM</code>이 생성되는 것을 기다려야 하기 때문이다.</p>\n<h2>JavaScript 실행</h2>\n<p><code class="hljs-text">JavaScript</code>는 <code class="hljs-text">파서 차단 리소스</code>로 간주된다.\n이것은 <code class="hljs-text">HTML</code> 문서 자체의 파싱이 <code class="hljs-text">JavaScript</code>에 의해 차단된다는 뜻이다.</p>\n<p>파서가 내부 태그이든 외부 태그이든 <code class="hljs-text">&lt;script&gt;</code> 태그에 도달하면, (외부 태그라면, 외부 스크립트를 가져오고) 스크립트를 실행한다.\n따라서 문서 내의 요소를 참조하는 <code class="hljs-text">JavaScript</code>파일이 있는 경우, 해당 문서가 표시된 후에 오도록 해야한다.</p>\n<p><code class="hljs-text">JavaScript</code>가 파서를 차단하는 것을 피하기 위해 <code class="hljs-text">async</code> 속성을 사용할 수도 있다.</p>\n<h2>Render 트리 만들기</h2>\n<p><code class="hljs-text">Render 트리</code>는 DOM 과 CSSOM 이 합쳐진 것으로 페이지에서 최종적으로 렌더링할 내용을 나타내는 트리이다.\n<code class="hljs-text">display: none;</code> 으로 숨겨진 요소는 포함되지 않는다.<br />\n위의 <code class="hljs-text">DOM</code>, <code class="hljs-text">CSSOM</code> 예제 코드는 다음 렌더 트리를 생성한다.</p>\n<div class="render-image" id="crp-render-tree"></div>\n<h4>레이아웃 생성하기</h4>\n<p>레이아웃은 뷰포트의 크기를 결정하며, 뷰포트의 크기는 뷰포트의 크기와 관련있는 <code class="hljs-text">CSS</code> 스타일에 대한 컨텍스트를 제공한다.\n뷰포트 크기는 <code class="hljs-text">&lt;meta&gt;</code> 태그의 <code class="hljs-text">viewport</code> 속성을 통해 결정되는데, 기본 뷰포트 너비는 <code class="hljs-text">980px</code> 이다.</p>\n<p>(일반적으로 메타태그의 뷰포트 값은 장치 너비에 맞게 설정한다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width,initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>페인팅</h2>\n<p>그리는 단계에서는 페이지의 가시적인 내용을 픽셀로 변환하여 화면에 표시한다.</p>\n<p>페인팅 단계에서 소요되는 시간은 <code class="hljs-text">DOM</code>의 크기와 적용되는 스타일에 따라 다르다. (예를 들면, 복잡한 gradient 배경은 단순 배경색보다 더 많은 시간이 소요된다.)</p>\n<h2>Reference</h2>\n<ul>\n<li><a href="https://bitsofco.de/understanding-the-critical-rendering-path/">Understanding the Critical Rendering Path</a></li>\n</ul>',frontmatter:{title:"Critical Rendering Path란?",path:"/critical-rendering-path/",images:["images/browser.jpg"],category:"Browser",tags:["javascript","browser","critical rendering path","dom","cssom"],date:"2017-10-15T18:03:16.000Z",components:[{rootId:"crp-dom",fileName:"render-images/critical-rendering-path/dom"},{rootId:"crp-cssom",fileName:"render-images/critical-rendering-path/cssom"},{rootId:"crp-render-tree",fileName:"render-images/critical-rendering-path/render-tree"}],tweets:null,summary:"Critical Rendering Path(CRP)는 브라우저가 서버로부터 HTML 응답을 받아 화면을 그리기 위해 실행하는 과정이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---critical-rendering-path-0c74b69928518d2d404d.js.map