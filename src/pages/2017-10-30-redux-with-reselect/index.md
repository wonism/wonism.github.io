---
title: "Reselect로 Redux 성능 개선하기"
date: "2017-10-30T00:26:02.000Z"
path: "/redux-with-reselect/"
tags: ["javascript", "reactjs", "redux", "reselect", "memoization"]
summary: "selector는 store로부터 온 데이터를 가져오거나 계산하는 역할을 하며, Redux가 상태를 최소한으로 유지할 수 있도록 한다. 이 셀렉터는 인자가 변경될 때까지 다시 계산하는 일이 없기에 효율적이다."
tweets: [{
	rootId: 'redux-tweet',
	userId: 'dan_abramov',
	tweetId: '619531111996223488',
}]
category: "JavaScript"
---

## 셀렉터에 대해
`selector`는 `store`로부터 온 데이터를 가져오거나 계산하는 역할을 하며, `Redux`가 상태를 최소한으로 유지할 수 있도록 한다.<br />
이 `셀렉터`는 인자가 변경될 때까지 다시 계산하는 일이 없기에 효율적이다.<br />
(이 원리를 이해하기 위해 [메모이제이션에 대해 작성한 글](/memoization/)을 참고하면 도움이 될 것이다.)

__+__<br />
`Dan Abramov`는 `Reselect`에 대해 아래 트윗과 같이 말했다.

<div id="redux-tweet"></div>

## 왜 리셀렉터인가?
`Redux`를 사용하면서 데이터를 가져올 때, `mapStateToProps`와 같은 함수를 통해 상태 데이터를 가져온다.

```js
/**
 * STORE
 *
 * {
 *   height: 180,
 *   weight: 60,
 *   bloodPress: { high: 120, low: 80 },
 * }
 */

const getBmi = (height, weight) => (weight / (height ** 2));
const isHypertension = ({ high, low }) => {
  if (high > 140 && low > 90) {
    return true;
  }

  return false;
};

const mapStateToProps = (state) => ({
  bmi: getBmi(state.height, state.weight),
  isHypertension: isHypertension(state.bloodPress),
});
```

`getBmi`는 몸무게와 키를 통해 `bmi`를 구하는 함수이다.<br />
이 함수의 단점은 상태의 일부가 업데이트될 때마다 함수가 데이터를 다시 계산한다는 것이다.<br />
`BMI`와는 상관 없는 `bloodPress`가 업데이트되어도 함수가 실행된다.

하지만, `Reselect`를 사용하면 인자가 변경되지 않으면 재계산을 수행하지 않는다.<br />
`리셀렉터`를 사용하면 함수 인자가 메모된 함수에 캐시되기 때문이다.<br />
오직 함수의 인자가 이전 호출 때의 값과 다를 경우에만 `셀렉터`가 다시 계산을 수행한다.

## 리셀렉터 사용하기
```js
// selectors.js
import { createSelector } from 'reselect';
import fp from 'lodash/fp';

const getHeight = fp.get('height');
const getWeight = fp.get('weight');
const getBloodPress = fp.get('bloodPress');

const getBmi = createSelector(
  // 맨 아래 함수를 제외한 함수들을 Input Selector 라고도 한다.
  getHeight,
  getWeight,
  // 맨 아래 함수를 Result Selector 라고도 한다.
  (height, weight) => (weight / height ** 2)
);

const isHypertension = createSelector(
  getBloodPress,
  ({ high, low }) => {
    if (high > 140 && low > 90) {
      return true;
    }

    return false;
  }
);

const mapStateToProps = state => ({
  bmi: getBmi(state),
  isHypertension: isHypertension(state),
});
```

아래 예제와 같이 `createSelector`를 통해 만들어진 `셀렉터`는 다른 `셀렉터`의 인자로 사용할 수도 있다.<br />
이는 복잡한 계산을 하기 위한 `셀렉터`를 작은 여러 `셀렉터`로 구성하여 읽기 쉽게 작성할 수 있음을 뜻한다.

```js
const isUnderWeight = createSelector(
  getBmi,
  (bmi) => {
    if (bmi < 18) {
      return true;
    }

    return false;
  }
);
```

## 정리
어떤 값을 계산함에 있어 불필요한 연산을 수행하지 않을 수 있다는 것만으로도 성능을 개선할 수 있다.<br />
그리고, `셀렉터`를 중첩할 수 있다는 것은 코드의 유연함을 제공하며, 리팩토링도 수월해진다.

`Reselect`의 러닝커브도 그렇게 높지 않기 때문에 프로젝트에 `Redux`를 사용한다면, `Reselect` 도입을 추천한다.
