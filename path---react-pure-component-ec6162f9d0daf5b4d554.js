(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{412:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-13-react-pure-component/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="hljs-text">React.PureComponent</code>는 <code class="hljs-text">React.Component</code>와 매우 유사하다. 하지만 한 가지 다른 점이 있다면, <code class="hljs-text">React</code>의 생명주기 메소드 중 하나인 <code class="hljs-text">shouldComponentUpdate</code>를 다루는 방식이 다르다는 것이다.<br />\n<code class="hljs-text">React.PureComponent</code>는 <code class="hljs-text">shouldComponentUpdate</code>가 이미 구현되어 있는데, <code class="hljs-text">props</code>와 <code class="hljs-text">state</code>를 <code class="hljs-text">얕은 비교</code>를 통해 비교한 뒤 변경된 것이 있을 때만 리렌더링한다.<br />\n즉, <code class="hljs-text">React.PureComponent</code>를 사용하면 <code class="hljs-text">React</code>애플리케이션 성능을 향상시키는 데 가장 중요한 것 중 하나인 <code class="hljs-text">shouldComponentUpdate</code>를 신경쓰지 않아도 된다.<br />\n하지만 <code class="hljs-text">props</code>나 <code class="hljs-text">state</code>가 복잡한 데이터 구조를 포함하고 있다면, <code class="hljs-text">props</code>와 <code class="hljs-text">state</code>를 비교하는 과정에서 의도하지 않은 결과가 발생할 수 있다.<br />\n(<code class="hljs-text">얕은 비교(shallow comparison)</code>와 <code class="hljs-text">깊은 비교(deep comparison)</code>의 차이를 알면 무슨 의미인지 알 것이다.)</p>\n<h2>PureComponent vs Component</h2>\n<p>사용자가 버튼을 클릭하면 카운터가 랜덤하게 증가하는 컴퍼넌트이다.<br />\n<code class="hljs-text">PureComponent</code>와 <code class="hljs-text">Component</code>의 차이를 비교하려면, 아래 예제 코드에서 단지 <code class="hljs-text">Pure</code>를 지우거나 다시 쓰면 된다.<br />\n<code class="hljs-text">PureComponent</code>를 <code class="hljs-text">extends</code>한 컴퍼넌트는 카운터가 증가할 때만 <code class="hljs-text">re-render</code>되지만, <code class="hljs-text">Component</code>를 <code class="hljs-text">extends</code>한 컴퍼넌트는 버튼을 클릭하면 <code class="hljs-text">setState</code>가 실행되기 때문에 매 클릭마다 <code class="hljs-text">re-render</code>된다는 것을 볼 수 있다.<br />\n(참고로 <code class="hljs-text">PureComponent</code>를 <code class="hljs-text">extends</code>한 컴퍼넌트 안에서도 <code class="hljs-text">shouldComponentUpdate</code> 메소드를 사용할 수 있다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#root\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> pTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">logClosure</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> clickedCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> reRenderedCount <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>isReRendered<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>isReRendered<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      reRenderedCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      clickedCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    pTag<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token string">`log -> click count : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>clickedCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | re-render count : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>reRenderedCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">logClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      counter<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    root<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>pTag<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        counter<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        counter<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>input\n          type<span class="token operator">=</span><span class="token string">"button"</span>\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span>\n          value<span class="token operator">=</span><span class="token string">"click"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>실행결과</h3>\n<p>다음 컴퍼넌트는 <code class="hljs-text">PureComponent</code>를 <code class="hljs-text">extends</code>한 컴퍼넌트이다.</p>\n<div id="pure-component-example"></div>\n<p>다음 컴퍼넌트는 <code class="hljs-text">Component</code>를 <code class="hljs-text">extends</code>한 컴퍼넌트이다.</p>\n<div id="component-example"></div>\n<h2>결론</h2>\n<p><code class="hljs-text">functional components</code>는 아직까지 최적화되어있지 않다. 그 이유는 함수형 컴퍼넌트도 결국엔 클래스 기반 컴퍼넌트로 래핑되기 때문이다.<br />\n(하지만 <code class="hljs-text">React Team</code>은 언젠가 함수형 컴퍼넌트를 최적화하겠다고 했다.)<br />\n따라서 현재까지는 최적화가 필요한 컴퍼넌트에서는 클래스 컴퍼넌트의 <code class="hljs-text">shouldComponentUpdate</code> 메소드를 사용하거나 <code class="hljs-text">PureComponent</code>를 통해 최적화하는 것이 가장 좋은 방법이라고 할 수 있다.</p>\n<div id="functional-component"></div>\n<h2>참조</h2>\n<ul>\n<li><a href="https://facebook.github.io/react/docs/react-api.html#react.purecomponent">React Top-Level API</a></li>\n<li><a href="https://twitter.com/dan_abramov/status/755343749983657986">Dan Abramov’s Twitter</a></li>\n</ul>',frontmatter:{title:"리액트 성능 향상 시키기 - React.PureComponent",path:"/react-pure-component/",images:["images/reactjs.jpg"],category:"JavaScript",tags:["javascript","optimization","reactjs","component","pure component"],date:"2017-09-13T21:39:50.000Z",components:[{rootId:"pure-component-example",fileName:"pure-component-vs-component-1"},{rootId:"component-example",fileName:"pure-component-vs-component-2"}],tweets:[{rootId:"functional-component",userId:"dan_abramov",tweetId:"755343749983657986"}],summary:"React.PureComponent는 React.Component와 매우 유사하다. 하지만 한 가지 다른 점이 있다면, React의 생명주기 메소드 중 하나인 shouldComponentUpdate를 다루는 방식이 다르다는 것이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---react-pure-component-ec6162f9d0daf5b4d554.js.map