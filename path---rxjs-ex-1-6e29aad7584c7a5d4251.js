(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{360:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-11-18-rxjs-example-1/index.md absPath of file >>> MarkdownRemark",html:'<h2>마우스를 바라보는 3D 효과</h2>\n<div id="lerp-animation"></div>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// 리액트 컴퍼넌트를 만드는 코드이지만,</span>\n<span class="token comment">// 분석하기 어려운 코드는 아니다.</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Rx <span class="token keyword">from</span> <span class="token string">\'rxjs\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> url <span class="token keyword">from</span> <span class="token string">\'./logan.jpg\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> StyledDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n  position: relative;\n  margin: 10vh auto;\n  width: 50%;\n  height: 30vh;\n  background-color: bisque;\n  transform: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props <span class="token operator">=></span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>transform<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  overflow: hidden;\n\n  img {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    margin: auto;\n    width: 100%;\n  }\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> <span class="token function">lerp</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dx <span class="token operator">=</span> end<span class="token punctuation">.</span>x <span class="token operator">-</span> start<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> dy <span class="token operator">=</span> end<span class="token punctuation">.</span>y <span class="token operator">-</span> start<span class="token punctuation">.</span>y<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      x<span class="token punctuation">:</span> start<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token punctuation">(</span>dx <span class="token operator">*</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      y<span class="token punctuation">:</span> start<span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token punctuation">(</span>dy <span class="token operator">*</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      transform<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>rotateElement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rotateElement<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> docEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> mouseMove$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n      <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>docEl<span class="token punctuation">,</span> <span class="token string">\'mousemove\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>e <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> y<span class="token punctuation">:</span> e<span class="token punctuation">.</span>clientY <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> touchMove$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n      <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>docEl<span class="token punctuation">,</span> <span class="token string">\'touchmove\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>e <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> y<span class="token punctuation">:</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>clientY <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> move$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>mouseMove$<span class="token punctuation">,</span> touchMove$<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> animationFrame$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Rx<span class="token punctuation">.</span>Scheduler<span class="token punctuation">.</span>animationFrame<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> smoothMove$ <span class="token operator">=</span> animationFrame$\n      <span class="token punctuation">.</span><span class="token function">withLatestFrom</span><span class="token punctuation">(</span>move$<span class="token punctuation">,</span> <span class="token punctuation">(</span>frame<span class="token punctuation">,</span> move<span class="token punctuation">)</span> <span class="token operator">=></span> move<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> App<span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    smoothMove$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rotateElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">rotateElement</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> docEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> rotX <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token punctuation">.</span>y <span class="token operator">/</span> docEl<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">25</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> rotY <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pos<span class="token punctuation">.</span>x <span class="token operator">/</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">`rotateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rotX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">deg) rotateY(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rotY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">deg);`</span></span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> transform <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>StyledDiv transform<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>transform<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"rx example"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledDiv<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"RxJS로 만든 간단한 예제 프로그램",path:"/rxjs-ex-1/",images:["images/rxjs.jpg"],category:"RxJS",tags:["javascript","rxjs","functional reactive programming","frp","reactivex"],date:"2017-11-18T12:57:25.000Z",components:[{rootId:"lerp-animation",fileName:"rx-example/lerp-animation"}],tweets:null,summary:"마우스를 바라보는 3D 효과"}}},pageContext:{}}}}]);
//# sourceMappingURL=path---rxjs-ex-1-6e29aad7584c7a5d4251.js.map