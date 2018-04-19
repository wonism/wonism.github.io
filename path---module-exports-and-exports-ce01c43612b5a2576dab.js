(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{415:function(e){e.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-10-module-exports-and-exports/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">module</code>은 <code class="hljs-text">exports</code>속성이 있는 자바스크립트 객체이며, <code class="hljs-text">exports</code>는 보통 <code class="hljs-text">module.exports</code>로 설정되는 일반적인 자바스크립트 변수이다.<br />\n<code class="hljs-text">exports.a = 42;</code>와 같이 <code class="hljs-text">exports</code>의 속성을 설정하면, <code class="hljs-text">module.exports.a</code>도 설정이 된다. 자바스크립트에서는 객체가 참조로 전달되기 때문이다.<br />\n즉, <code class="hljs-text">exports</code>와 <code class="hljs-text">module.exports</code>는 같은 객체를 참조하며, <code class="hljs-text">this</code> 또한 마찬가지이다.<br />\n다음과 같은 예제를 통해 확인할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-sh"><code class="hljs-sh"># write file with printf\n$ printf &quot;// module.exports\\nmodule.exports.add = function (a, b) { return a + b; };\\n\\n// exports\\nexports.add = function (a, b) { return a + b; };\\n\\n// this\\nthis.add = function (a, b) { return a + b; };&quot; &gt; math.js\n\n# execute node.js\n$ node\n\n&gt; const math = require(&#39;./math&#39;);\nundefined\n&gt; math\n{ add: [Function] }\n&gt; math.add(42, 5);\n47</code></pre>\n      </div>',frontmatter:{title:"module.exports와 exports",path:"/module-exports-and-exports/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","exports","import","require"],date:"2017-09-10T13:32:32.000Z",components:null,tweets:null,summary:"module은 exports속성이 있는 자바스크립트 객체이며, exports는 보통 module.exports로 설정되는 일반적인 자바스크립트 변수이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---module-exports-and-exports-ce01c43612b5a2576dab.js.map