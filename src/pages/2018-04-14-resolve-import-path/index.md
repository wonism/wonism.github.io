---
title: "resolve.alias로 import 개선하기"
date: "2018-04-14T11:38:44.000Z"
path: "/resolve-import-path/"
tags: ["javascript", "webpack", "relative path", "absolute path", "resolve", "import"]
summary: "파일의 구조가 복잡한 프로젝트에서 import 또는 require를 사용할 때, 상대적인 경로로 파일을 불러오는 것은 귀찮을 뿐더러 실수를 유발할 수 있다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## 상대경로, 무엇이 문제인가?
파일의 구조가 복잡한 프로젝트에서 `import` 또는 `require`를 사용할 때, 상대적인 경로로 파일을 불러오는 것은 귀찮을 뿐더러 실수를 유발할 수 있다.<br />
상위 폴더로 가기 위해 `..`를 사용하는 데, 아래처럼 수많은 `..`가 필요할 수 있기 때문이다.

```js
// /A_PATH/a.js
import * as userSelectors from '../../../store/user/selectors';
```

또한, 다른 경로에서 같은 파일을 불러올 경우 같은 역할을 하는 코드임에도 불구하고, `..`의 개수가 다르다.

```js
// /B_PATH/b.js
import * as userSelectors from '../store/user/selectors';
```

## 절대경로로 가져오는 방법
`절대경로`로 파일을 불러온 다면, 아래 코드를 어떤 파일에서든 똑같이 사용할 수 있을 것이다.

```js
import * as userSelectors from '~/store/user/selectors';
```

위처럼 `절대경로`로 파일을 불러오려면, `webpack.config.js`의 `resolve.alias`를 설정해주면 된다.

```js
module.esports = {
  ...
  resolve: {
    ...
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
};
```
