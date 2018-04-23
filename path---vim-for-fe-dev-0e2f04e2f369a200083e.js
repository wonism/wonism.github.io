(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{365:function(n){n.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2018-03-24-vim-for-fe-dev/index.md absPath of file >>> MarkdownRemark",html:'<h2>Vundle &#x26; Janus 설치</h2>\n<p>플러그인 매니저인 <a href="https://github.com/VundleVim/Vundle.vim">Vundle</a>과\n플러그인 &#x26; 매퍼인 <a href="https://github.com/carlhuda/janus">Janus</a>을 설치해야한다.<br />\n이들은 다음 명령어를 통해 설치할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text"># Vundle\n$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim\n\n# Janus\n$ curl -L https://bit.ly/janus-bootstrap | bash</code></pre>\n      </div>\n<h2>Vundle 설정</h2>\n<p><code class="hljs-text">.vimrc</code>파일의 가장 상단에 다음 설정을 붙여넣는다.<br />\n(<code class="hljs-text">&quot;</code>는 주석이다.)</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">set nocompatible              &quot; be iMproved, required\nfiletype off                  &quot; required\n\nset rtp+=~/.vim/bundle/Vundle.vim\ncall vundle#begin()\n\n&quot; 플러그인들은 vundle#begin과 vundle#end 사이에 있어야한다.\n&quot; 이 플러그인은 반드시 필요한 플러그인이다.\nPlugin &#39;VundleVim/Vundle.vim&#39;\n\ncall vundle#end()            &quot; required\nfiletype plugin indent on    &quot; required</code></pre>\n      </div>\n<h2>Vundle 명령어</h2>\n<p><code class="hljs-text">vim</code> 실행 중일 때, <code class="hljs-text">:PluginList</code> 등의 명령어를 입력할 수 있다.\n|명령어|하는 일|\n|------|-------|\n|:PluginList|설정된 플러그인 리스트|\n|:PluginInstall|플러그인 설치 (<code class="hljs-text">!</code>와 함께 사용하면 업데이트이며, :PluginUpdae도 가능)|\n|:PluginSearch foo|<code class="hljs-text">foo</code>를 검색한다.|\n|:PluginClean|사용되지 않는 플러그인을 삭제한다.|</p>\n<h2>Vundle 플러그인 설치</h2>\n<p>다음과 같은 플러그인을 <code class="hljs-text">.vimrc</code>에 넣고, <code class="hljs-text">:PluginInstall</code>을 실행한다.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">call vundle#begin()\n\nPlugin &#39;VundleVim/Vundle.vim&#39;\nPlugin &#39;vim-airline/vim-airline&#39;\nPlugin &#39;tpope/vim-fugitive&#39;\nPlugin &#39;isRuslan/vim-es6&#39;\nPlugin &#39;pangloss/vim-javascript&#39;\nPlugin &#39;mxw/vim-jsx&#39;\nPlugin &#39;rstacruz/sparkup&#39;, {&#39;rtp&#39;: &#39;vim/&#39;}\n\ncall vundle#end()            &quot; required</code></pre>\n      </div>\n<h2>Janus 설정</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">&quot;&quot;\n&quot;&quot; Janus setup\n&quot;&quot;\n\nif has(&#39;win32&#39;) || has(&#39;win64&#39;) || has(&#39;win32unix&#39;)\n  let g:janus_path = escape(expand(&quot;~/.vim/janus/vim&quot;), &#39; &#39;)\n  let g:janus_vim_path = escape(expand(&quot;~/.vim/janus/vim&quot;), &#39; &#39;)\nelse\n  let g:janus_path = escape(fnamemodify(resolve(expand(&quot;&lt;sfile&gt;:p&quot;)), &quot;:h&quot;), &#39; &#39;)\n  let g:janus_vim_path = escape(fnamemodify(resolve(expand(&quot;&lt;sfile&gt;:p&quot; . &quot;vim&quot;)), &quot;:h&quot;), &#39; &#39;)\nendif\nlet g:janus_custom_path = expand(&quot;~/.janus&quot;)\n\nexe &#39;source &#39; . g:janus_vim_path . &#39;/core/before/plugin/janus.vim&#39;\n\ncall janus#add_group(&quot;tools&quot;)\ncall janus#add_group(&quot;langs&quot;)\ncall janus#add_group(&quot;colors&quot;)\n\nif filereadable(expand(&quot;~/.vimrc.before&quot;))\n  source ~/.vimrc.before\nendif\n\n\nexe &#39;source &#39; . g:janus_vim_path . &#39;/core/plugins.vim&#39;\n\ncall janus#load_pathogen()</code></pre>\n      </div>',frontmatter:{title:"프론트엔드 개발자를 위한 VIM 설정",path:"/vim-for-fe-dev/",images:null,category:"IDE",tags:["vim","vi","text editor"],date:"2018-03-24T13:40:32.000Z",components:null,tweets:null,summary:"플러그인 매니저인 Vundle과 플러그인 & 매퍼인 Janus을 설치해야한다. 이들은 다음 명령어를 통해 설치할 수 있다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---vim-for-fe-dev-0e2f04e2f369a200083e.js.map