---
title: "React Native에서 alias 설정하기"
date: "2018-04-20T01:09:07.000Z"
path: "/react-native-alias/"
tags: ["react js", "react native", "webpack", "babel"]
summary: "이전에 작성한 resolve.alias로 import 개선하기에서 이어지는 글이다. 보통 React JS로 웹 애플리케이션을 개발하면 webpack을 사용하기 마련이지만, React Native로 모바일 애플리케이션을 개발할 땐, webpack을 사용하지 않는 경우도 많다."
category: "JavaScript"
images: ["images/reactjs.jpg"]
---

이전에 작성한 [resolve.alias로 import 개선하기](/resolve-import-path)에서 이어지는 글이다.

보통 `React JS`로 웹 애플리케이션을 개발하면 `webpack`을 사용하기 마련이지만,
`React Native`로 모바일 애플리케이션을 개발할 땐, `webpack`을 사용하지 않는 경우도 많다.

웹팩을 통해 `alias`를 사용하는 방법은 위의 링크를 참고하고,
웹팩을 사용하지 않는 경우, 어떻게 `alias`를 설정하는지 보겠다.

크게 두 가지 방법이 있다.

## babel을 사용하는 경우
먼저, [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)를 설치한 뒤, `.babelrc`의 `plugins`를 다음과 같이 설정한다.

```
{
  "plugins": [
    "module-resolver",
    {
      "root": ["./src"],
      "alias": {
        "~": "./src"
      }
    }
  ]
}
```

`root`를 사용하면, 사용자 정의 프로젝트 루트를 지정한며, 위의 예제의 경우, `src/some/path`의 무언가를 가져올 때, `import something from 'some/path';`와 같이 가져올 수 있다.

`alias`는 웹팩의 `resolve.alias`와 같은 역할을 하며, `src/some/path`의 무언가를 가져올 때, `import something from '~/some/path';`와 같이 가져올 수 있다.

## package.json 을 이용하는 방법
`alias`를 지정하기 위한 디렉토리에서 `package.json`을 생성한 뒤, `alias`로 지정하고자 하는 값을 `name`에 준다.

```
{
  "name": "~"
}
```
