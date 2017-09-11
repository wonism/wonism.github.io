---
title: "ES2015에서 import로 이미지 불러오기"
date: "2017-09-10T13:28:09.000Z"
path: "/import-image-with-import/"
tags: ["javascript", "import", "image"]
summary: "import * as url from '/PATH/TO/IMAGE/filename.extension';"
---

```js
import * as url from '/PATH/TO/IMAGE/filename.extension';
// for example
// import * as logo from '../public/assets/images/logo.png';

/* Native DOM */
const image = document.createElement('img');
img.src = url.default;

/* JSX */
<img src={url.default} />
```
