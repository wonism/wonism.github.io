---
title: "innerHTML과 insertAdjacentHTML의 차이"
date: "2017-10-29T01:04:03.000Z"
path: "/innerhtml-insertadjacenthtml/"
tags: ["javascript", "dom manipulation", "dom", "html"]
summary: "DOM 노드의 내용을 수정할 때, [DOM Element].innerHTML = VALUE를 사용하는 경우가 있다. 이 방식은 DOOM을 파싱하는 과정에서 기존의 하위 노드들의 노드 트리가 삭제되고 재구성되는 과정이 추가된다."
components: [{
	rootId: 'dom-manipulation-performance',
	fileName: 'dom-manipulation-performance',
}]
category: "JavaScript"
images: ["images/js.jpg"]
---

DOM 노드의 내용을 수정할 때, `[DOM Element].innerHTML = VALUE`를 사용하는 경우가 있다.

이 방식은 `DOOM`을 파싱하는 과정에서 기존의 하위 노드들의 노드 트리가 삭제되고 재구성되는 과정이 추가된다.<br />
따라서, 실행 시간이 많이 낭비된다.

`insertAdjacentHTML`은 이를 개선하기 위한 메소드, `인접(Adjacent)`한 위치에 `HTML` 태그를 삽입해준다.<br />
어떤 `DOM Element`에 대한 상대적인 위치를 지정하여 노드를 추가하는 방식으로 기존의 하위 노드는 건드리지 않기 때문에 속도가 상당히 빠르다.

`insertAdjacentHTML`에는 `2`개의 인자가 필요하며, 첫 번째 인자는 `DOM Element`의 상대적인 위치를 지정한다.
`beforebegin`, `afterbegin`, `beforeend`, `afterend` `4`가지 중 하나이다.

아래에서 각 메소드를 `1000`번씩 수행하는 데 걸린 시간을 확인할 수 있다.<br />
개발환경 특성 상(`Virtual DOM`을 사용하기 때문에) 실행 시간이 다소 짧을 수 있다.

<div id="dom-manipulation-performance"></div>
