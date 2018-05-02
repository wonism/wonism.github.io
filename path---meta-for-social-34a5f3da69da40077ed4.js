(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{422:function(a){a.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2017-10-29-social-meta/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">Facebook</code>이나 <code class="hljs-text">Twitter</code>에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다.<br />\n이와 같은 속성을 설정하기 위해 <code class="hljs-text">&lt;meta&gt;</code>태그를 사용한다.<br />\n페이스북은 Open Graph protocol 을 사용하는데, 자세한 정보는 <a href="http://ogp.me/">Open Graph 공식 홈페이지</a>에서 볼 수 있다.<br />\n많은 속성들이 보이는데, 자주 쓰이게 되는 속성은 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>제목<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>설명<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>대표 이미지<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:url<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>표준 링크(같은 콘텐츠를 가리키는 여러 개의 URL 중 대표 URL)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p><code class="hljs-text">트위터</code>는 <code class="hljs-text">Open Graph protocal</code>과 유사한 <code class="hljs-text">&lt;meta&gt;</code>태그를 사용하며, 다음과 같은 속성을 사용하면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>제목<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>설명<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>대표 이미지<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter:card<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>트위터 카드 타입<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">&lt;!-- 트위터 카드 타입은 summary_large_image, summary, photo 중 하나를 선택할 수 있다. --\x3e</span>\n</code></pre>\n      </div>\n<p>이 때, title, description, image 는 prefix 만 다르고, 모두 같은데, 두 번씩 써줘야 하나? 라는 의문이 생길 수 있다.<br />\n<code class="hljs-text">트위터</code>는 트위터용 메타태그를 <code class="hljs-text">Open Graph</code>로 대체할 수 있도록 허용하기 때문에 다음과 같이 설정하면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-html"><code class="hljs-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>제목<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>설명<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>대표 이미지<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:url<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>표준 링크(같은 콘텐츠를 가리키는 여러 개의 URL 중 대표 URL)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter:card<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>트위터 카드 타입<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>이미지에 대한 가이드라인이 있는데 각각 다음과 같다.<br />\n페이스북은 이미지의 사이즈가 최소 1200x630 픽셀보다 크기를 권장하며, 1.91:1 의 비율인 이미지가 오길 권장한다.<br />\n트위터는 파일 사이즈가 1MB 보다 크기를 권장한다.</p>\n<p><strong>메타 태그 검증하기</strong></p>\n<ul>\n<li>페이스북 : <a href="https://developers.facebook.com/tools/debug/sharing">https://developers.facebook.com/tools/debug/sharing</a></li>\n<li>트위터 : <a href="https://cards-dev.twitter.com/validator">https://cards-dev.twitter.com/validator</a></li>\n</ul>\n<p>이 외에도 다양한 meta 태그들이 있으며, <a href="https://github.com/joshbuchea/HEAD">https://github.com/joshbuchea/HEAD</a> 에서 더 많은 정보를 알아볼 수 있다.</p>',frontmatter:{title:"SNS를 위한 meta태그",path:"/meta-for-social/",images:["images/html.jpg"],category:"HTML/CSS",tags:["html","meta","open graph","SEO","검색 엔진 최적화"],date:"2017-10-29T14:58:32.000Z",components:null,tweets:null,summary:"Facebook이나 Twitter에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다. 이와 같은 속성을 설정하기 위해 <meta>태그를 사용한다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---meta-for-social-34a5f3da69da40077ed4.js.map