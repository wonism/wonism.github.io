(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{408:function(e){e.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-29-innerhtml-insertadjacenthtml/index.md absPath of file >>> MarkdownRemark",html:'<p>DOM 노드의 내용을 수정할 때, <code class="hljs-text">[DOM Element].innerHTML = VALUE</code>를 사용하는 경우가 있다.</p>\n<p>이 방식은 <code class="hljs-text">DOOM</code>을 파싱하는 과정에서 기존의 하위 노드들의 노드 트리가 삭제되고 재구성되는 과정이 추가된다.<br />\n따라서, 실행 시간이 많이 낭비된다.</p>\n<p><code class="hljs-text">insertAdjacentHTML</code>은 이를 개선하기 위한 메소드, <code class="hljs-text">인접(Adjacent)</code>한 위치에 <code class="hljs-text">HTML</code> 태그를 삽입해준다.<br />\n어떤 <code class="hljs-text">DOM Element</code>에 대한 상대적인 위치를 지정하여 노드를 추가하는 방식으로 기존의 하위 노드는 건드리지 않기 때문에 속도가 상당히 빠르다.</p>\n<p><code class="hljs-text">insertAdjacentHTML</code>에는 <code class="hljs-text">2</code>개의 인자가 필요하며, 첫 번째 인자는 <code class="hljs-text">DOM Element</code>의 상대적인 위치를 지정한다.\n<code class="hljs-text">beforebegin</code>, <code class="hljs-text">afterbegin</code>, <code class="hljs-text">beforeend</code>, <code class="hljs-text">afterend</code> <code class="hljs-text">4</code>가지 중 하나이다.</p>\n<p>아래에서 각 메소드를 <code class="hljs-text">1000</code>번씩 수행하는 데 걸린 시간을 확인할 수 있다.<br />\n개발환경 특성 상(<code class="hljs-text">Virtual DOM</code>을 사용하기 때문에) 실행 시간이 다소 짧을 수 있다.</p>\n<div id="dom-manipulation-performance"></div>',frontmatter:{title:"innerHTML과 insertAdjacentHTML의 차이",path:"/innerhtml-insertadjacenthtml/",images:["images/js.jpg"],category:"JavaScript",tags:["javascript","dom manipulation","dom","html"],date:"2017-10-29T01:04:03.000Z",components:[{rootId:"dom-manipulation-performance",fileName:"dom-manipulation-performance"}],tweets:null,summary:"DOM 노드의 내용을 수정할 때, [DOM Element].innerHTML = VALUE를 사용하는 경우가 있다. 이 방식은 DOOM을 파싱하는 과정에서 기존의 하위 노드들의 노드 트리가 삭제되고 재구성되는 과정이 추가된다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---innerhtml-insertadjacenthtml-0e1ba66063a1eba64e41.js.map