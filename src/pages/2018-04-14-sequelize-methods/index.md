---
title: "모르고 지나쳤을 수도 있는 Sequalize 메소드"
date: "2018-04-14T12:04:48.000Z"
path: "/unknown-sequelize-methods/"
tags: ["javascript", "node.js", "sequelize", "orm"]
summary: "Facebook이나 Twitter에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다. 이와 같은 속성을 설정하기 위해 <meta>태그를 사용한다."
category: "Node.js"
---

## IS NOT NULL 조건 주기
`where`절에 들어갈 객체의 에서 `IS NOT NULL`이 되어야 할 `컬럼`의 값을 `{ ne: null }`로 준다.
`column_name`이 `null`이 아닌 `Row`들을 구할 수 있다.

```js
TableName
  .findAll({
    where : { column_name: { ne: null } }, // ne : Not Equal
  })
  .then((rows) => {
    // Do something
  })
  .catch((err) => {
    // Do something
  });
```

`ne`는 `not equal`을 뜻하며, 이외에도 `gt(greater than)`, `lt(less than)`, `in(where in Array)`, `like` 등이 있다.

## INSERT 전에 존재 여부 체크하기
`findOrCreate`메소드는 `Sequelize`에서 `Row`를 `INSERT`하기 전에 존재하는지 여부를 체크한다.<br />
그 다음, `Row`가 존재하면 `INSERT`하지 않고, 존재하지 않으면 `INSERT`한다.<br />
이전에 개인 프로젝트를 진행할 때 이러한 처리를 로우 쿼리로써 해결했었지만, `findOrCreate`메소드가 있었다.

```js
TableName
  .findOrCreate({
    where : { column_name: 'VALUE1' },
    defaults: { column_name: 'VALUE1', column_name2: 'VALUE2' },
  })
  .then((rows) => {
    // Do something
  })
  .catch((err) => {
    // Do something
  });
```

`TableName` 테이블에 `where` 에 해당하는 `Row`가 있으면, `INSERT`하지 않고, 해당하는 `Row`가 없으면, `default`에 있는 값들을 `INSERT`한다.

## Increment integer 인 값을 1 증가 시키기
```js
/* import sequelize from 'sequelize'; */

TableName
  .update({
    increment_attribute: sequelize.literal('increment_attribute + 1'),
  }, {
    // Query options
  })
  .then((rows) => {
    // Do something
  })
  .catch((err) => {
    // Do something
  });
```
