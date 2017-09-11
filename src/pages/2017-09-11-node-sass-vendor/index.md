---
title: "node-sass/vendor 에러"
date: "2017-09-11T22:57:26.000Z"
path: "/node-sass-vendor/"
tags: ["javascript", "npm", "node-sass", "trouble shooting"]
summary: "원인은 패키지 설치 이후 `node-sass`의 `scripts/install.js`를 실행하지 않아서였다."
---

`node_modules` 디렉토리를 삭제하고 다시 패키지들을 설치한 뒤 `js` 파일들을 번들링할 일이 있었다.<br />
하지만 잘 번들링 되던 파일들이 번들링되지 않는 문제가 발생했다.<br />
무슨 에러인지 봤더니, `node-sass/vendor`가 없다는 에러였다.

```
ENOENT: no such file or directory, scandir '/PROJECT_PATH/node_modules/node-sass/vendor'
```

`node_modules`디렉토리를 확인해보니 `node-sass`패키지는 제대로 설치가 되어있는 듯 해보였지만, `node_modules/node-sass/vendor` 디렉토리가 존재하지 않았다.<br />
[`node-sass`](https://github.com/sass/node-sass/issues)의 `Issues` 탭에 이미 여러 번 올라와 있는 이슈였다.<br />
원인은 패키지 설치 이후 `node-sass`의 `scripts/install.js`를 실행하지 않아서였다.

해결 방법은 수동으로 `node-sass`의 스크립트를 실행하거나, `node-sass` 패키지를 리빌드하는 것이다.

```
$ node node_modules/node-sass/scripts/install.js
# or
$ npm rebuild node-sass
```
