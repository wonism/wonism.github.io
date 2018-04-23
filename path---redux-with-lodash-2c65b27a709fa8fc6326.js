(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{377:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-10-06-redux-with-lodash/index.md absPath of file >>> MarkdownRemark",html:'<p>일반적으로 리듀서에서 액션의 타입에 따라 다른 작업을 수행하기 위해 <code class="hljs-text">switch</code>를 사용한다.<br />\n이 때, 각 <code class="hljs-text">case</code>마다 블록<code class="hljs-text">{ /* ... */ }</code>으로 사용하지 않는 이상 스코프의 범위는 <code class="hljs-text">switch</code>의 블록이다.\n따라서 여러 <code class="hljs-text">case</code>에서 중복되는 변수명을 사용하려면, 해당 <code class="hljs-text">case</code>마다 명시적으로 블록을 작성해야한다는 불편한 점이 있다.<br />\n(참고 : <a href="/block-scope-in-switch">Switch안에서의 let과 const</a>)</p>\n<p>하지만 지금 설명하고자 하는 방법을 사용하면 이러한 문제를 자연스럽게 해결할 수 있을 뿐만 아니라, 코드 또한 더욱 간결해진다.<br />\n(예제에서 <code class="hljs-text">lodash</code>를 사용하지만, <code class="hljs-text">Ramda</code>를 사용하거나 외부 라이브러리를 사용하지 않고 직접 구현해도 된다.)</p>\n<p><a href="/redux-from-scratch">Redux 튜토리얼</a>의 예제 코드를 수정하면서 코드가 어떻게 변하는지 살펴 보겠다.</p>\n<h2>Reducer 코드 변경하기</h2>\n<p>먼저 리듀서를 생성하는 코드를 작성한다.<br />\n정의되지 않은 <code class="hljs-text">액션 타입</code>에 대해서는 전달받은 상태를 그대로 반환하며, 정의된 <code class="hljs-text">액션 타입</code>에 대해서는 특정 연산을 한 새로운 상태를 반환한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// src/utils/createReducer.js</span>\n<span class="token keyword">import</span> fp <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">createReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reducers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> <span class="token operator">...</span>action <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    fp<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">(</span>reducers<span class="token punctuation">)</span> <span class="token operator">?</span>\n      reducers<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">:</span>\n      state\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> createReducer<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>다음, <code class="hljs-text">src/index.jsx</code>의 리듀서 설정 부분을 변경한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// src/index.jsx</span>\n<span class="token comment">/* ... */</span>\n<span class="token keyword">import</span> createReducer <span class="token keyword">from</span> <span class="token string">\'./utils/createReducer\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> reducers <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span> todos<span class="token punctuation">:</span> <span class="token function">createReducer</span><span class="token punctuation">(</span>TodoReducers<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">/* ... */</span>\n</code></pre>\n      </div>\n<p>마지막으로 <code class="hljs-text">리듀서</code> 코드를 수정한다.<br />\n이 파일은 객체를 <code class="hljs-text">export</code>하기만 하면 된다.</p>\n<p>이 객체는 <code class="hljs-text">액션 타입</code>들을 프로퍼티로 가지며, 이 프로퍼티들의 값은 각각 액션 타입에 따른 연산을 할 함수이다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code class="hljs-js"><span class="token comment">// src/todo/TodoReducers.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  ADD_TODO<span class="token punctuation">,</span>\n  REMOVE_TODO<span class="token punctuation">,</span>\n  TOGGLE_TODO<span class="token punctuation">,</span>\n  FAILED_TO_ADD_TODO<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./TodoActionTypes\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>ADD_TODO<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> todo <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>state<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> todo<span class="token punctuation">,</span> done<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>REMOVE_TODO<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> length <span class="token operator">=</span> state<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n      <span class="token operator">...</span>state<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>state<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>TOGGLE_TODO<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> length <span class="token operator">=</span> state<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> selectedTodo <span class="token operator">=</span> state<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> todo <span class="token punctuation">}</span> <span class="token operator">=</span> selectedTodo<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n      <span class="token operator">...</span>state<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        todo<span class="token punctuation">,</span>\n        done<span class="token punctuation">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>done<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>state<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>FAILED_TO_ADD_TODO<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'중복된 아이템입니다.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>완성된 애플리케이션</h2>\n<div id="redux-with-lodash"></div>',frontmatter:{title:"Lodash로 좀 더 간결한 Reducer 코드 작성하기",path:"/redux-with-lodash/",images:["images/redux.jpg"],category:"JavaScript",tags:["javascript","reactjs","redux","lodash","functional programming"],date:"2017-10-07T00:26:02.000Z",components:[{rootId:"redux-with-lodash",fileName:"redux-with-lodash/index"}],tweets:null,summary:"일반적으로 리듀서에서 액션의 타입에 따라 다른 작업을 수행하기 위해 switch를 사용한다. 이 때, 각 case마다 블록으로 사용하지 않는 이상 스코프의 범위는 switch의 블록이다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---redux-with-lodash-2c65b27a709fa8fc6326.js.map