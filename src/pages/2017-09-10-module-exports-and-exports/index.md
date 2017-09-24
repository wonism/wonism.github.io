---
title: "module.exports와 exports"
date: "2017-09-10T13:32:32.000Z"
path: "/module-exports-and-exports/"
tags: ["javascript", "exports", "import", "require"]
summary: "module은 exports속성이 있는 자바스크립트 객체이며, exports는 보통 module.exports로 설정되는 일반적인 자바스크립트 변수이다."
category: "JavaScript"
---

`module`은 `exports`속성이 있는 자바스크립트 객체이며, `exports`는 보통 `module.exports`로 설정되는 일반적인 자바스크립트 변수이다.<br />
`exports.a = 42;`와 같이 `exports`의 속성을 설정하면, `module.exports.a`도 설정이 된다. 자바스크립트에서는 객체가 참조로 전달되기 때문이다.<br />
즉, `exports`와 `module.exports`는 같은 객체를 참조하며, `this` 또한 마찬가지이다.<br />
다음과 같은 예제를 통해 확인할 수 있다.

```sh
# write file with printf
$ printf "// module.exports\nmodule.exports.add = function (a, b) { return a + b; };\n\n// exports\nexports.add = function (a, b) { return a + b; };\n\n// this\nthis.add = function (a, b) { return a + b; };" > math.js

# execute node.js
$ node

> const math = require('./math');
undefined
> math
{ add: [Function] }
> math.add(42, 5);
47
```
