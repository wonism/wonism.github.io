(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{417:function(e){e.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2018-04-20-alias-for-rn/index.md absPath of file >>> MarkdownRemark",html:'<p>이전에 작성한 <a href="/resolve-import-path">resolve.alias로 import 개선하기</a>에서 이어지는 글이다.</p>\n<p>보통 <code class="hljs-text">React JS</code>로 웹 애플리케이션을 개발하면 <code class="hljs-text">webpack</code>을 사용하기 마련이지만,\n<code class="hljs-text">React Native</code>로 모바일 애플리케이션을 개발할 땐, <code class="hljs-text">webpack</code>을 사용하지 않는 경우도 많다.</p>\n<p>웹팩을 통해 <code class="hljs-text">alias</code>를 사용하는 방법은 위의 링크를 참고하고,\n웹팩을 사용하지 않는 경우, 어떻게 <code class="hljs-text">alias</code>를 설정하는지 보겠다.</p>\n<p>크게 두 가지 방법이 있다.</p>\n<h2>babel을 사용하는 경우</h2>\n<p>먼저, <a href="https://github.com/tleunen/babel-plugin-module-resolver">babel-plugin-module-resolver</a>를 설치한 뒤, <code class="hljs-text">.babelrc</code>의 <code class="hljs-text">plugins</code>를 다음과 같이 설정한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">{\n  &quot;plugins&quot;: [\n    &quot;module-resolver&quot;,\n    {\n      &quot;root&quot;: [&quot;./src&quot;],\n      &quot;alias&quot;: {\n        &quot;~&quot;: &quot;./src&quot;\n      }\n    }\n  ]\n}</code></pre>\n      </div>\n<p><code class="hljs-text">root</code>를 사용하면, 사용자 정의 프로젝트 루트를 지정한며, 위의 예제의 경우, <code class="hljs-text">src/some/path</code>의 무언가를 가져올 때, <code class="hljs-text">import something from &#39;some/path&#39;;</code>와 같이 가져올 수 있다.</p>\n<p><code class="hljs-text">alias</code>는 웹팩의 <code class="hljs-text">resolve.alias</code>와 같은 역할을 하며, <code class="hljs-text">src/some/path</code>의 무언가를 가져올 때, <code class="hljs-text">import something from &#39;~/some/path&#39;;</code>와 같이 가져올 수 있다.</p>\n<h2>package.json 을 이용하는 방법</h2>\n<p><code class="hljs-text">alias</code>를 지정하기 위한 디렉토리에서 <code class="hljs-text">package.json</code>을 생성한 뒤, <code class="hljs-text">alias</code>로 지정하고자 하는 값을 <code class="hljs-text">name</code>에 준다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">{\n  &quot;name&quot;: &quot;~&quot;\n}</code></pre>\n      </div>',frontmatter:{title:"React Native에서 alias 설정하기",path:"/react-native-alias/",images:["images/reactjs.jpg"],category:"JavaScript",tags:["react js","react native","webpack","babel"],date:"2018-04-20T01:09:07.000Z",components:null,tweets:null,summary:"이전에 작성한 resolve.alias로 import 개선하기에서 이어지는 글이다. 보통 React JS로 웹 애플리케이션을 개발하면 webpack을 사용하기 마련이지만, React Native로 모바일 애플리케이션을 개발할 땐, webpack을 사용하지 않는 경우도 많다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---react-native-alias-4603494456bf189096d6.js.map