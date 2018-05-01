---
title: "Anchor 태그의 mailto 사용하기"
date: "2018-05-01T23:30:56.000Z"
path: "/email-with-anchor/"
tags: ["html", "anchor", "email", "mailto"]
summary: "<a /> 태그의 href 속성에 mailto:를 접두사로 사용한다. 여러 사람에게 메일을 보내고자 할 때는 받는 사람 사이에 ,를 추가한다."
category: "HTML/CSS"
images: ["images/html.jpg"]
---

## 기본 사용 방법
`<a />` 태그의 `href` 속성에 `mailto:`를 접두사로 사용한다.<br />
여러 사람에게 메일을 보내고자 할 때는 받는 사람 사이에 `,`를 추가한다.

```html
<a href="mailto:yocee57@gmail.com">Send</a>
```

## 참조 및 숨은 참조
참조받는 주소를 추가하고자 할 땐 `cc`를 추가한다.
숨은 참조를 위해서는 `bcc`를 추가한다.

```js
<a href="mailto:yocee57@gmail.com?cc=yocee57@gmail.com2&bcc=yocee57@gmail.com3">Send</a>
```

## 제목과 내용
제목을 추가할 땐 `subject`를 추가하며, 본문 내용을 추가할 땐 `body`를 추가한다.

```js
<a href="mailto:yocee57@gmail.com?subject=Hello, Mailto&body=Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Send</a>
```

### 본문 내용의 줄바꿈
`%0D%0A`를 사용하면 줄바꿈을 할 수 있다.

## 활용 사례
[링크](/contacts)에서 확인할 수 있다.
