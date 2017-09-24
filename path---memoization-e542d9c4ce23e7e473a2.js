webpackJsonp([1543267897192],{"./node_modules/json-loader/index.js!./.cache/json/memoization.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Wonism ∙ Front-end Developer",author:"wonism"}},markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2017-09-16-memoization/index.md absPath of file >>> MarkdownRemark",html:'<p><code>Memoization</code>은 매번 함수를 다시 계산하는 대신 함수의 값을 저장하는 기술로 연산 결과를 저장하는 객체를 사용함으로써 불필요한 작업을 피할 수 있다.<br />\n즉, 메모는 함수를 위한 캐싱 기법이라고 할 수 있다.<br />\n메모이제이션은 주어진 입력에 대해 항상 동일한 출력을 반환하는 알고리즘에 한해 사용된다. (e.g. <code>Fibonacci</code>, <code>Factorial</code>)</p>\n<h2>피보나치 수열</h2>\n<p>피보나치 수열의 <code>n</code>번째 값을 구하는 함수는 다음과 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">const</span> fibonacci <span class="token operator">=</span> n <span class="token operator">=></span>\n  n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">?</span> n <span class="token punctuation">:</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>만약 이 함수가 여러 번 실행된다면, 이 함수는 수없이 호출되어야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// 직접 호출한 횟수 11 번</span>\n<span class="token comment" spellcheck="true">// 이미 계산한 값들을 다시 계산하기 위해 호출된 횟수 11 번</span>\n<span class="token comment" spellcheck="true">// 총 453 번 호출</span>\n</code></pre>\n      </div>\n<h2>피보나치 수열과 메모이제이션</h2>\n<p>만약 메모이제이션을 적용한다면 작업량을 엄청나게 줄일 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">const</span> fibonacci <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">!==</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> fn<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// 직접 호출한 횟수 11번</span>\n<span class="token comment" spellcheck="true">// 앞선 메모이제이션 결과를 얻기 위해 호출한 18번</span>\n<span class="token comment" spellcheck="true">// 총 29번 호출</span>\n</code></pre>\n      </div>\n<h2>메모이제이션 함수의 구현</h2>\n<p>재귀함수를 <code>memoize</code>할 수 있도록 해주는 함수를 만들어 보겠다.<br />\n(이 함수는 예시일 뿐이며, 얼마든지 커스터마이즈할 수 있다.)<br /></p>\n<h4>구현 전략</h4>\n<ol>\n<li>첫 번째 인자로는 결과를 저장할 배열을 받으며, 두 번째 인자로는 메모이즈할 함수를 받는다.</li>\n<li>반환 값은 함수이며, 구하고자 하는 값이 메모에 없으면 해당 함수를 실행하여 값을 계산한 뒤 메모에 해당 값을 저장한다.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">const</span> memoizer <span class="token operator">=</span> <span class="token punctuation">(</span>memo<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> calc <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">!==</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>calc<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> calc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>구현된 함수는 위와 같으며, <code>fibonacci</code>와 <code>factorial</code>을 <code>memoizer</code>함수를 통해 메모이제이션할 수 있다.</p>\n<h4>피보나치와 팩토리얼의 메모이제이션</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code><span class="token keyword">const</span> fibonacci <span class="token operator">=</span> <span class="token function">memoizer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>calc<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">calc</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">calc</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> factorial <span class="token operator">=</span> <span class="token function">memoizer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>calc<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">calc</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>성능 확인</h4>\n<p>위에서 구현한 <code>fibonacci</code>함수를 통해 성능을 측정해보겠다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-js"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">\'fibonacci - 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">\'fibonacci - 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// fibonacci - 1: 0.076904296875ms</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">\'fibonacci - 2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">\'fibonacci - 2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// fibonacci - 2: 0.005126953125ms</span>\n</code></pre>\n      </div>\n<h2>주의할 점</h2>\n<ol>\n<li>메모이즈된 함수는 오래된 결과를 저장하기 때문에 메모리를 추가적으로 소비하게 된다.</li>\n<li>실행 속도가 빠르거나 자주 실행되지 않는 함수의 경우 실용적이지 않을 수 있다.</li>\n<li>부작용이 없는 순수 함수에만 적용될 수 있다.</li>\n</ol>\n<h2>관련 라이브러리 및 데코레이터</h2>\n<ul>\n<li><a href="https://github.com/developit/decko#memoize">ES 2016 decorators</a></li>\n<li><a href="https://github.com/lodash/lodash/blob/master/memoize.js">Lodash</a></li>\n<li><a href="https://github.com/ramda/ramda/blob/master/src/memoize.js">Ramda</a></li>\n<li><a href="https://github.com/reactjs/reselect">Reselect</a></li>\n</ul>',frontmatter:{title:"Memoization에 대해",path:"/memoization/",tags:["javascript","memoization","functional programmin"],category:"JavaScript",date:"September 16, 2017",summary:"Memoization은 매번 함수를 다시 계산하는 대신 함수의 값을 저장하는 기술로 연산 결과를 저장하는 객체를 사용함으로써 불필요한 작업을 피할 수 있다.",components:null,tweets:null,isNotPost:null}}},pathContext:{path:"/memoization/"}}}});
//# sourceMappingURL=path---memoization-e542d9c4ce23e7e473a2.js.map