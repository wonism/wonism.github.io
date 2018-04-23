---
title: "CSS의 calc()"
date: "2017-10-15T19:46:11.000Z"
path: "/css-calc/"
tags: ["css", "calc"]
summary: "CSS 함수 calc()는 CSS3에 추가된 기능 중 하나로, 계산을 해주는 속성이다.  calc()는 <length> <frequency>, <angle>, <time>, <number>, 또는 <integer> 가 필요한 곳 어디서든 사용 가능하며,"
components: [{
	rootId: 'css-calc-example',
	fileName: 'render-codepens/css-calc/index',
}]
category: "CSS"
images: ["images/browser.jpg"]
---

`CSS` 함수 `calc()`는 `CSS3`에 추가된 기능 중 하나로, 계산을 해주는 속성이다.<br />
`calc()`는 `<length>` `<frequency>`, `<angle>`, `<time>`, `<number>`, 또는 `<integer>` 가 필요한 곳 어디서든 사용 가능하며,
기존에 자바스크립트로 하던 계산을 대신 해줄 수 있다.<br />
예를 들어, `"100% 너비에서 50px 만큼을 뺀 만큼의 너비를 사용하고 싶다"`면, 다음과 같이 코드를 작성한다.

```css
* {
  box-sizing: border-box;
}

p {
  width : 95%; /* calc() 를 지원하지 않는 브라우저를 위한 fallback */
  width : -webkit-calc(100% - 80px); /* WebKit */
  width : -moz-calc(100% - 80px); /* Firefox */
  width : -ms-calc(100% - 80px); /* MS Explorer */
  width : -o-calc(100% - 80px); /* Opera */
  width : calc(100% - 80px); /* Standard */
}
```

`calc()`내부에서는 `+`, `-`, `*`, `/` 등의 사칙 연산이 가능하다.<br />
이 때, 주의할 것은 `+` 연산과 `-` 연산 시, 반드시 연산자의 양쪽에 공백이 한 칸 있어야 한다는 것이다.<br />
또한, 같은 형식(길이는 길이 끼리, 각도는 각도끼리)을 갖는 피연산자 끼리만 연산이 가능하다.

다음 코드펜은 `calc()`와 `vh`(View Height, 높이값의 100분의 1 값) 등 `CSS`만을 사용하여 구현한 Scroll Indicator 이다.

<div class="render-codepen" id="css-calc-example"></div>
