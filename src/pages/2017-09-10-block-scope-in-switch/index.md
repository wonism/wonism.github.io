---
title: "Switch안에서의 let과 const"
date: "2017-09-10T13:22:48.000Z"
path: "/block-scope-in-switch/"
tags: ["javascript", "tdz", "let", "const", "block scope", "switch"]
summary: "let과 const는 TDZ를 해결해주지만, switch문 안에서 이들를 사용할 때는 유의할 점이 있다."
category: "JavaScript"
images: ["images/js.jpg"]
---

ES2015 의 `let`, `const` 키워드는 변수를 블록 스코프를 가지는 지역변수로 만들어 준다.<br />
이외에도 `let`, `const` 는 TDZ 를 해결해주며, 함수 스코프를 따름으로써 발생하는 문제들을 해결해준다.<br />
하지만, `switch` 문 안에서 `let`, `const` 를 사용할 떄는 유의할 점이 있다.<br />
`case` 문은 별도의 Lexical Scope 가 없기 때문에 다음과 같은 코드에서는 에러가 발생한다는 것이다.

```js
switch (foo) {
  case 1:
    let foo = 1;
    break;
  case 2:
    const foo = 2;
    break;
  /* ... */
}
```

<br />

이런 이슈를 해결하기 위해서는 블록 스코프가 필요한 곳의 `case` 문을 `{}` 로 감싸야 한다.<br />

```js
switch (foo) {
  case 1: {
    let foo = 1;
    break;
  }
  case 2: {
    const foo = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```
