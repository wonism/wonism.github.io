---
title: "이벤트 핸들링 모델과 이벤트 버블링/캡쳐링"
date: "2017-10-03T15:57:26.000Z"
path: "/event-bubbling-capturing/"
tags: ["javascript", "event", "이벤트 버블링", "이벤트 캡쳐링"]
summary: "DOM의 event는 이벤트 중심 프로그래밍 언어가 DOM 트리 내의 요소 노드 (HTML, XHTML, SVG 등)에 이벤트 처리기/수신기를 등록할 수 있도록 한다."
components: [{
	rootId: 'event-bubbling-example',
	fileName: 'event-bubbling',
}, {
	rootId: 'prevent-event-bubbling-example',
	fileName: 'prevent-event-bubbling',
}, {
	rootId: 'event-capturing-example',
	fileName: 'event-capturing',
}]
category: "JavaScript"
---

`DOM`의 `event`는 이벤트 중심 프로그래밍 언어가 DOM 트리 내의 요소 노드 (`HTML`, `XHTML`, `SVG` 등)에 `이벤트 처리기/수신기`를 등록할 수 있도록 한다.<br />
하지만, 초창기 다양한 웹 브라우저에서 사용되는 이벤트 모델에는 몇 가지 차이점이 있었는데 이로 인해 호환성 문제가 발생했다. `W3C`는 이를 해결하기 위해 `DOM Level 2`에서 이벤트 모델을 표준화하였다.

## 이벤트 핸들링 모델
### DOM Level 0에서의 이벤트 핸들링 모델
이 이벤트 핸들링 모델은 `Netscape Navigator`에서 소개되었으며, 인라인 모델과 전통적 모델의 두 가지 모델 유형이 있다.

__인라인 모델__

인라인 모델에서는 이벤트 핸들러는 태그의 속성으로 추가된다.
```html
<button onclick="alert('Hello, Event!'); return false;">Click</button>
```

`JavaScript 엔진`이 `onclick`속성의 내용을 포함하는 익명 함수를 생성하며, `<button>`의 onclick 핸들러는 다음 익명 함수에 바인드된다.
```js
function () {
  alert('Hello, Event!');
  return false;
}
```

__전통적 모델__

전통적 모델에서는 스크립트로 이벤트 핸들러를 추가하거나 제거할 수 있다.<br />
이 때, 각 이벤트는 하나의 이벤트 핸들러만 등록할 수 있다.

이벤트는 태그의 이벤트 속성에 핸들러 이름을 할당함으로써 추가되며, 이벤트 핸들러를 제거하려면, `null`을 할당한다.<br />
인자를 넘기기 위해 클로저 개념을 사용할 수도 있다.

```js
window.onload = function () {
  alert('window is loaded');
};
window.onload = null;

document.onload = (function (str) {
  return function () {
    alert(str);
  };
})('Event is fired!');
```

### DOM Level 2에서의 이벤트 핸들링 모델
`W3C`에서는 보다 유연한 이벤트 핸들링 모델을 설계했다.<br />
`addEventListener`를 통해 이벤트 대상에 이벤트 리스너를 등록할 수 있으며, `removeEventListener`를 통해 이벤트 리스너를 제거할 수 있다.<br />
또, `dispatchEvent`를 통해 구독된 이벤트 리스너에 이벤트를 보낼 수 있다.
`DOM Level 0`와 달리 동일한 이벤트에 대해 여러 이벤트 핸들러를 등록할 수 있으며, 다양한 옵션들을 사용할 수 있다.

#### 이벤트 기본 동작 호출 방지
이벤트의 기본 동작이 호출되지 않게 하기위해 이벤트 객체의 `preventDefault`메소드를 호출한다.

#### 이벤트 버블링 방지
뒤에 이벤트 버블링에 대한 설명을 하겠지만, 이벤트가 버블링되지 않게 하기 위해서는 이벤트 객체의 `stopPropagation` 메소드를 호출한다.<br />

#### IE 구버전에서의 이벤트 핸들링 모델
`Internet Explorer 9` 미만의 버전에서는 `addEventListener`대신 `attachEvent`, `removeEventListener`대신 `detachEvent`, `dispatchEvent`대신 `fireEvent`를 사용한다.<br />
이벤트 기본 동작 호출을 방지하기 위해서는 이벤트 객체의 `returnValue` 속성을 `false`로 하며,
이벤트 버블링을 방지하기 위해서는 이벤트 객체의 `cancelBubble` 속성을 `true`로 한다.

#### addEventListener의 옵션
`addEventListener`의 `boolean` 타입 옵션을 통해 이벤트 캡쳐링 방식으로 이벤트 핸들러를 호출하거나,
`object` 타입 옵션을 통해 단 한 번만 이벤트 핸들러를 호출하게 할 수 있다.<br />
(IE Edge에서는 `object` 타입 옵션을 사용할 수 없다.)

## 이벤트 종류
- [링크](https://en.wikipedia.org/wiki/DOM_events#HTML_events) 참고

## 이벤트 흐름
이벤트 흐름은 이벤트가 전달되는 과정으로 다음 세 단계로 생명주기가 구성된다.
- 이벤트 캡쳐링
- 타겟
- 이벤트 버블링

캡쳐링과 버블링의 차이를 설명하기 위해 다음과 같은 `DOM`이 있다고 가정한다.

```html
<main>
  <section>
    <div>
      <button>Click!</button>
    </div>
  </section>
</main>
```

이 때, `<button>`요소에 `click` 이벤트가 발생하면, `<button>`요소는 물론, `<main>`, `<form>`요소 등도 이벤트를 감지할 수 있다. 이렇게 중첩되는 요소가 있는 구조에서 이벤트가 발생할 때, 다음과 같이 이벤트가 발생한다.

### 이벤트 캡쳐링
이벤트 흐름이 가장 얕은 깊이의 노드(부모 노드)에서 가장 깊은 깊이의 노드(자식 노드)로 향한다.<br />
또한 `button`을 클릭했을 때, 클릭 이벤트는 다음 순서대로 발생한다.

`<main> ▶ <section> ▶ <div> ▶ <button>`

(이벤트 캡쳐링 방식의 흐름을 원할 경우 `addEventListener`의 3번째 인자를 `true`로 넘긴다.)

### 타겟
실제 타겟(`<button>`)이 이벤트를 가져온다.

### 이벤트 버블링
이벤트 흐름이 가장 깊은 깊이의 노드(자식 노드)에서 가장 얕은 깊이의 노드(부모 노드)로 향한다.<br />
또한 `button`을 클릭했을 때, 클릭 이벤트는 다음 순서대로 발생한다.<br />

`<button> ▶ <div> ▶ <section> ▶ <main>`

(이벤트 캡쳐링 방식의 흐름을 원할 경우 `addEventListener`의 3번째 인자를 `false`로 넘기거나, 넘기지 않는다. (기본값은 `false`))

## 이벤트 버블링과 캡쳐링 예제
### 이벤트 버블링 예제
```html
<div id="event-bubbling-example">
  <main>
    <section>
      <div>
        <button>Click!</button>
      </div>
    </section>
  </main>
</div>
```

```js
const handleClick = (e) => {
  alert(e.currentTarget.tagName);
};

document.querySelector('#event-bubbling-example main').addEventListener('click', handleClick);
document.querySelector('#event-bubbling-example section').addEventListener('click', handleClick);
document.querySelector('#event-bubbling-example div').addEventListener('click', handleClick);
document.querySelector('#event-bubbling-example button').addEventListener('click', handleClick);
```

<div id="event-bubbling-example"></div>

이 예제 코드를 실행하면, `BUTTON` ▶ `DIV` ▶ `SECTION` ▶ `MAIN`순서로 경고창이 출력되는 것을 볼 수 있다.

### 이벤트 전파 방지하기 예제
다음과 같은 코드를 작성하면, 이벤트가 전파되지 않는다.<br />
이벤트가 전파되지 않기 때문에 경고창이 `BUTTON`만 출력함을 알 수 있다.

```js
function handleClick(e) {
  alert(e.currentTarget.tagName);

  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}
```

<div id="prevent-event-bubbling-example"></div>

### 이벤트 캡쳐링 예제
`addEventListener`의 3번째 인자를 통해 이벤트 캡쳐링 방식으로 이벤트를 핸들링할 수 있다.

```html
<div id="event-capturing-example">
  <main>
    <section>
      <div>
        <button>Click!</button>
      </div>
    </section>
  </main>
</div>
```

```js
// DOM LEVEL 2 Event Model 처리 함수
const addEvent = (element, type, handler, capture) => {
  type = typeof type === 'string' && type || '';
  handler = handler || function () {};

  if (element.addEventListener) {
    element.addEventListener(type, handler, capture);
  } else if (element.attachEvent) { // For IE8
    element.attachEvent('on' + type, handler);
  }

  return element;
};

addEvent(window, 'load', () => {
  addEvent(document.querySelector('#event-capturing-example main'), 'click', (e) => {
    console.log(e.currentTarget.tagName);
  }, true);

  addEvent(document.querySelector('#event-capturing-example section'), 'click', function (e) {
    console.log(e.currentTarget.tagName);
  }, false);

  addEvent(document.querySelector('#event-capturing-example div'), 'click', function (e) {
    console.log(e.currentTarget.tagName);
  }, false);

  addEvent(document.querySelector('#event-capturing-example button'), 'click', function (e) {
    console.log(e.currentTarget.tagName);
  }, true);
}, false);
```

이 예제 코드를 실행한 뒤 버튼을 클릭하면, `MAIN` ▶ `BUTTON` ▶ `DIV` ▶ `SECTION`이 출력되는 것을 볼 수 있다.<br />
`DIV`와 `SECTION`이 가장 늦게 출력되는 이유는 이벤트 버블링 방식으로 이벤트가 등록되기 때문이다.<br />
구버전의 IE에서 이를 수행하면, 이벤트 버블링 방식으로 `BUTTON` ▶ `DIV` ▶ `SECTION` ▶ `MAIN`이 출력된다.

<div id="event-capturing-example"></div>

## 기타 : 리액트에서의 버블링과 캡쳐링
리액트의 이벤트 핸들러는 버블링 단계의 이벤트에 의해 트리거된다.<br />
캡쳐링 단계에 대한 이벤트 핸들러를 등록하려면, `Capture`를 접미사로 붙인다.<br />
예 : `onClickCapture`, `onKeyPressCapture`

## 참조
- [Wiki : DOM events](https://en.wikipedia.org/wiki/DOM_events)
- [Tutorials Park : Javascript : Event Flow](http://www.tutorialspark.com/javascript/JavaScript_Event_Flow.php)
