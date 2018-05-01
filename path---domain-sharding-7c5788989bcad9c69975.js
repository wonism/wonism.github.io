(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{398:function(t){t.exports={data:{markdownRemark:{id:"/Users/wonism/project/wonism.github.io-gatsby/src/pages/2018-04-22-domain-sharding/index.md absPath of file >>> MarkdownRemark",html:'<p>도메인 샤딩은 정적파일(이미지, CSS, JS 등)의 로딩 속도를 개선하는 방법으로, 여러개의 서브도메인을 생성하여 정적파일을 병렬로 가져온다.</p>\n<p>도메인 샤딩의 등장 배경은 HTTP/1.x에서 도메인 당 동시 요청 갯수의 제한때문이다. (대부분의 모던 브라우저는 <code class="hljs-text">6~8</code>개, IE 하위 버전은 <code class="hljs-text">2</code>개까지 동시 요청을 할 수 있다.(하단의 표 참고) 이러한 제한은 웹서버에 과부하가 걸리지 않도록 IETF(Internet Engineering Task Force)에 의해 <code class="hljs-text">HTTP/1.1 사양</code>으로 정의되었다.)</p>\n<p>동시 요청을 함으로써 웹 페이지 로딩 속도가 무조건 빨라질 것 같지만 그렇지 않다. 각 하위 도메인에 DNS 조회를 함으로써 꽤 많은 시간과 CPU, 전력을 소모하기 때문이다.(“김기정, 이성원. 웹 성능을 향상시키기 위한 DNS Resolution 감소 방안에 대한 연구”에 따르면, 3G환경에서는 평균 361ms, 4G환경에서는 평균 176ms의 왕복 지연시간이 발생한다고 한다.) 따라서, 도메인 샤딩은 동시 요청에 대한 완벽한 솔루션이라고 볼 수 없다.(도메인 샤딩 대신 HTTP/2로 전환하는 것이 좋다. HTTP/2 설정 방법은 <a href="https://github.com/wonism/TIL/tree/master/back-end/nginx/http2">링크</a>를 참고한다.)</p>\n<p>추가로, 많은 모바일 브라우저가 HTTP 파이프라이닝을 구현하고 있다. 따라서, 도메인 샤딩은 더 이상 동시 요청에 대한 좋은 솔루션이 아니다.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Browser      </th>\n<th align="center">Request</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">Firefox 2</td>\n<td align="center">2</td>\n</tr>\n<tr>\n<td align="left">Firefox 3+</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">Opera 9.26</td>\n<td align="center">4</td>\n</tr>\n<tr>\n<td align="left">Opera 12</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">Safari 3</td>\n<td align="center">4</td>\n</tr>\n<tr>\n<td align="left">Sarafi 5</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">IE 7</td>\n<td align="center">2</td>\n</tr>\n<tr>\n<td align="left">IE 8</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">IE 10</td>\n<td align="center">8</td>\n</tr>\n<tr>\n<td align="left">Chrome</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">Safari Mobile</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">Android Browser</td>\n<td align="center">4</td>\n</tr>\n<tr>\n<td align="left">Chrome Mobile</td>\n<td align="center">6</td>\n</tr>\n<tr>\n<td align="left">Firefox Mobile</td>\n<td align="center">4</td>\n</tr>\n</tbody>\n</table>\n<h2>참조</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Connection_management_in_HTTP_1.x">MDN : HTTP/1.x의 커넥션 관리</a></li>\n<li><a href="https://www.kics.or.kr/storage/paper/event/winter2014/publish/3D-5.pdf">웹 성능을 향상시키기 위한 DNS Resolution 감소 방안에 대한 연구</a></li>\n</ul>',frontmatter:{title:"도메인 샤딩",path:"/domain-sharding/",images:["images/browser.jpg"],category:"Browser",tags:["browser","http/2","http","domain sharding"],date:"2018-04-22T21:14:06.000Z",components:null,tweets:null,summary:"도메인 샤딩은 정적파일(이미지, CSS, JS 등)의 로딩 속도를 개선하는 방법으로, 여러개의 서브도메인을 생성하여 정적파일을 병렬로 가져온다."}}},pageContext:{}}}}]);
//# sourceMappingURL=path---domain-sharding-7c5788989bcad9c69975.js.map