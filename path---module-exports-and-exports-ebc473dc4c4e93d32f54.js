webpackJsonp([24892680592219],{"./node_modules/json-loader/index.js!./.cache/json/module-exports-and-exports.json":function(e,o){e.exports={data:{site:{siteMetadata:{title:"Wonism ∙ Front-end Developer",author:"wonism"}},markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-10-module-exports-and-exports/index.md absPath of file >>> MarkdownRemark",html:'<p><code>module</code>은 <code>exports</code>속성이 있는 자바스크립트 객체이며, <code>exports</code>는 보통 <code>module.exports</code>로 설정되는 일반적인 자바스크립트 변수이다.<br />\n<code>exports.a = 42;</code>와 같이 <code>exports</code>의 속성을 설정하면, <code>module.exports.a</code>도 설정이 된다. 자바스크립트에서는 객체가 참조로 전달되기 때문이다.<br />\n즉, <code>exports</code>와 <code>module.exports</code>는 같은 객체를 참조하며, <code>this</code> 또한 마찬가지이다.<br />\n다음과 같은 예제를 통해 확인할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-sh"><code># write file with printf\n$ printf "// module.exports\\nmodule.exports.add = function (a, b) { return a + b; };\\n\\n// exports\\nexports.add = function (a, b) { return a + b; };\\n\\n// this\\nthis.add = function (a, b) { return a + b; };" > math.js\n\n# execute node.js\n$ node\n\n> const math = require(\'./math\');\nundefined\n> math\n{ add: [Function] }\n> math.add(42, 5);\n47</code></pre>\n      </div>',frontmatter:{title:"module.exports와 exports",path:"/module-exports-and-exports/",tags:["javascript","exports","import","require"],category:"JavaScript",date:"September 10, 2017",summary:"module은 exports속성이 있는 자바스크립트 객체이며, exports는 보통 module.exports로 설정되는 일반적인 자바스크립트 변수이다.",components:null,tweets:null,isNotPost:null}}},pathContext:{path:"/module-exports-and-exports/"}}}});
//# sourceMappingURL=path---module-exports-and-exports-ebc473dc4c4e93d32f54.js.map