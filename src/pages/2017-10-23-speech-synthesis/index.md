---
title: "자바스크립트 음성 합성"
date: "2017-10-23T20:15:15.000Z"
path: "/speech-synthesis/"
tags: ["javascript", "speech synthesis", "음성 합성"]
summary: "Web Speech API의 SpeechSynthesis는 음성 서비스의 컨트롤러 인터페이스로 이를 사용하여 장치에서 사용할 수 있는 합성 음성에 대한 정보를 가져오고, 음성 재생 등의 역할을 수행할 수 있게 해준다."
components: [{
	rootId: 'speech-synthesis',
	fileName: 'speech-synthesis',
}]
category: "JavaScript"
---

`Web Speech API`의 `SpeechSynthesis`는 음성 서비스의 컨트롤러 인터페이스로 이를 사용하여 장치에서 사용할 수 있는 합성 음성에 대한 정보를 가져오고, 음성 재생 등의 역할을 수행할 수 있게 해준다.

```js
function speak(text) {
  if (typeof SpeechSynthesisUtterance === 'undefined' || typeof speechSynthesis === 'undefined') {
    alert('This browser does not support speech API');
    return;
  }

  const message = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  message.voice = voices[0];
  speechSynthesis.speak(message);
}

speak('Hello, World!');
```

<div id="speech-synthesis"></div>

## 참조
- [MDN : SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
