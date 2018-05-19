(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{409:function(t){t.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io/src/pages/2018-05-02-git-tips/index.md absPath of file >>> MarkdownRemark",html:'<h2>깃 커맨드 별칭(alias)</h2>\n<h4>커맨드로 alias 설정하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text"># git command without parameters\n$ git config --global alias.s status\n# same as git status\n$ git s\n\n# git command with parameters\n$ git config --global alias.nb &quot;!f(){ git checkout -b \\&quot;$1\\&quot;; };f&quot;\n# same as git checkout -b &quot;BRANCH_NAME&quot;</code></pre>\n      </div>\n<h4>.gitconfig로 alias 설정하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">[color]\n  ...\n[user]\n  ...\n[core]\n  ...\n[merge]\n  ...\n[push]\n  ...\n[filter &quot;lfs&quot;]\n  ...\n[alias]\n  # add alias here\n  a = add\n  c = commit\n  s = status\n  d = diff\n  b = branch\n  l = log\n  p = push\n  pu = pull\n  co = checkout\n  nb = &quot;!f(){ git checkout -b \\&quot;$1\\&quot;; git push origin \\&quot;$1\\&quot; --set-upstream; };f&quot;</code></pre>\n      </div>\n<h2>특정 브랜치 클로닝하기</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ git clone -b &lt;BRANCH_NAME&gt; git@github.com:&lt;USER_NAME&gt;/&lt;REPOSITORY_NAME&gt;.git</code></pre>\n      </div>\n<h2>깃 커맨드 자동완성</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ cd ~/github\n$ git clone git://git.kernel.org/pub/scm/git/git.git\n$ mkdir -p /usr/local/etc/bash_completion.d\n$ cp git/contrib/completion/git-completion.bash /usr/local/etc/bash_completion.d/\n$ echo -e &#39;# Git command completion\\nsource /usr/local/etc/bash_completion.d/git-completion.bash&#39; &gt;&gt; ~/.bash_profile\n$ source ~/.bash_profile</code></pre>\n      </div>\n<p>터미널에서 <code class="hljs-text">git</code> 을 타이핑한 뒤 <code class="hljs-text">tab</code> 키를 누르면, 사용할 수 있는 명령어들이 나온다.\n또, <code class="hljs-text">git l</code> 까지 타이핑한 뒤 <code class="hljs-text">tab</code> 키를 누르면, <code class="hljs-text">git log</code>가 자동완성된다.</p>\n<h2>풀 리퀘스트와 이슈 템플릿 만들기</h2>\n<p>프로젝트 루트 아래 <code class="hljs-text">.github</code> 디렉토리를 만들고, <code class="hljs-text">ISSUE_TEMPLATE.md</code>(이슈 템플릿), <code class="hljs-text">PULL_REQUEST_TEMPLATE.md</code>(풀 리퀘스트 템플릿)을 생성한다.<br />\n사용 예는 아래 링크에서 확인할 수 있다.</p>\n<p><a href="https://github.com/aframevr/aframe/tree/master/.github">https://github.com/aframevr/aframe/tree/master/.github</a></p>\n<h2>Something went wrong. 에러</h2>\n<p><code class="hljs-text">Github</code>에서 새로운 저장소를 만들기 위해 (<a href="https://github.com/new">https://github.com/new</a> 페이지에서) 저장소 이름의 유효성 검사를 하던 도중,\n<code class="hljs-text">Something went wrong.</code> 이라는 메시지가 출력되었다.</p>\n<p>구글에 검색을 해보니, 같은 문제를 겪은 사람이 또 있었다.</p>\n<p>해결 방법은 <code class="hljs-text">Allow-Control-Allow-Origin</code> 이라는 크롬 확장프로그램을 중지시키는 것이었다.<br />\n(<code class="hljs-text">Allow-Control-Allow-Origin</code> 은 <code class="hljs-text">CORS (Cross-Origin Resource Sharing)</code> 관련 디버깅을 위해 설치했던 확장프로그램이다.)</p>\n<p><strong>참고</strong>\n<a href="http://stackoverflow.com/questions/32851144/cannot-create-repository-on-github">http://stackoverflow.com/questions/32851144/cannot-create-repository-on-github</a></p>\n<h2>서브모듈 관련 명렁어</h2>\n<h4>모든 서브모듈 리셋하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ git submodule foreach git reset --hard\n# or\n$ git submodule foreach --recursive git reset --hard</code></pre>\n      </div>\n<h4>서브모듈이 특정 브랜치를 바라보도록 하기</h4>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text">$ cd &lt;PATH_TO_SUBMODULE&gt;\n$ git fetch --all # if needed\n$ git checkout &lt;SPECIFIC_BRANCH&gt;</code></pre>\n      </div>\n<h2>포크된 저장소를 원래 저장소와 동기화하기</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs-text"><code class="hljs-text"># 1. remote 설정하기\n$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git\n\n# 2. upstream 으로부터 변경된 파일 가져오기\n$ git fetch upstream\n\n# 3. master 브랜치로 이동\n$ git checkout master\n\n# 4. 병합하기\n$ $ git merge upstream/master\n\n# more&gt; 만약, conflict 가 발생했다면, 필요한 부분을 편집한다.</code></pre>\n      </div>\n<h2>깃허브 페이지에 SPA 호스팅하기</h2>\n<p><a href="https://github.com/rafrex/spa-github-pages">https://github.com/rafrex/spa-github-pages</a></p>',frontmatter:{title:"Git 관련 팁",path:"/git-tips/",images:["images/git.jpg"],category:"Git",tags:["git","github","vcs","submodule","alias"],date:"2018-05-02T23:42:22.000Z",components:null,tweets:null,summary:"깃 커맨드 별칭(alias) 커맨드로 alias 설정하기 .gitconfig로 alias 설정하기 특정 브랜치 클로닝하기 깃 커맨드 자동완성 터미널에서 git 을 타이핑한 뒤 tab 키를 누르면, 사용할 수 있는 명령어들이 나온다.  또, git l 까지 타이핑한 뒤 tab 키를 누르면, git log가 자동완성된다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---git-tips-c7c25acc40b520a5381c.js.map