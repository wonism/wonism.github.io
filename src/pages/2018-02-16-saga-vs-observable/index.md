---
title: "redux-saga를 redux-observable와 비교해 살펴보기"
date: "2018-02-16T12:24:12.000Z"
path: "/redux-saga-vs-redux-observable/"
tags: ["javascript", "redux", "state", "rxjs", "saga", "asynchronous"]
summary: "redux-observable과 redux-saga는 redux의 비동기 액션을 처리하기 위한 라이브러리다."
category: "JavaScript"
images: ["images/redux.jpg"]
---

`redux-observable`과 `redux-saga`는 `redux`의 비동기 액션을 처리하기 위한 라이브러리다.<br />
기존에 회사 프로젝트에서는 비동기 액션을 처리하기 위해 `redux-thunk`와 `redux-observable`을 사용하고 있었다.<br />
하지만 팀의 규모도 점점 커지는 상황에서 새로운 프로젝트를 진행하게 되었기 때문에 여러 방안들을 검토하게 되었다.
(개인적으로는 `redux-observable`을 좋아하지만,)<br />
익혀야할 기술(`RxJS`, `Functional programming` 등)이 많고 `러닝커브`도 가파르기 때문이었다.

팀원의 추천으로 먼저 `redux-saga`를 공부해보기로 했고,
`redux-observable`과 비교하면서 `redux-observable`을 그대로 사용할지, `redux-saga`를 새로 적용할지, 아니면 또 다른 라이브러리를 사용할 지 판단하기로 했다.

## 어디에 기반을 두었나?
`redux-saga`는 [Generator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) 기반이며,
`redux-observable`은 이름에서 알 수 있듯 [RxJS](http://reactivex.io/rxjs/) 기반이다.

먼저, `redux-saga`를 살펴보면 `Worker + Watcher`라는 구조를 가진다.<br />
`redux-observable`은 `Epic`이라는 구조를 가지며, 이는 `Type`과 `Operators`로 구성된다.

## 기본적인 사용 방법
### redux-saga
```js
import { call, put, take, fork, cancel } from 'redux-saga/effects'

// Worker
function* worker(action) {
  try {
    yield put({ type: 'START_TO_DO' });
    const data = yield call(fetch, action.payload.url);
    yield put({ type: 'DONE_SUCCESSFULLY', data });
  } catch (e) { // Error handling
    yield put({ type: 'FAILED', error: e });
  }
}

// Watcher
function* watcher() {
  while(yield take('DO_SOMETHING')) {
    const backgroundSyncTask = yield fork(worker);
    yield take('STOP_DO_THAT'); // Cancelable
    yield cancel(backgroundSyncTask);
  }
  // ...
}
```

### redux-observable
```js
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, takeUntil, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';

const epic = action$ =>
  action$.pipe(
    ofType('DO_SOMETHING'),
    map(() => ({ type: 'START_TO_DO' })),
    switchMap(() =>
      ajax({
        url: '/end-points',
      })
      .pipe(
        map(res => ({
          type: 'DONE_SUCCESSFULLY',
          data: res,
        })),
        takeUntil(action$.ofType('STOP_DO_THAT')), // Cancelable
        catchError((e) => of({ // Error handling
          type: 'FAILED'
          error: e,
        }))
      )
    )
  );

const epics = combineEpics(
  epic,
  // ...
);
```

## 여러 개의 비동기 액션 처리하기

### redux-saga
`worker`를 작성하고, `watcher`에 나열한다.
```js
function* worker1() { /* ... */ };
function* worker2() { /* ... */ };
function* worker3() { /* ... */ };

function* watcher() {
  const res1 = yield* worker1();
  yield put({ type: 'WORKER_1', res1 });

  const res2 = yield* worker2();
  yield put({ type: 'WORKER_2', res2 });

  const res3 = yield* worker3();
  yield put({ type: 'WORKER_3', res3 });
}
```

### redux-observable
각 `epic`을 작성하고, `combinEpics`를 통해 결합한다.
```js
const epic1 = action$ =>
  action$.pipe(
    ofType('EPIC_1'),
    /* ... */
  );

const epic2 = action$ =>
  action$.pipe(
    ofType('EPIC_2'),
    /* ... */
  );

const epic3 = action$ =>
  action$.pipe(
    ofType('EPIC_3'),
    /* ... */
  );

const epics = combineEpics(
  epic1,
  epic2,
  epic3,
);
```

## 여러 개의 비동기 액션 병렬 처리하기

### redux-saga
처리할 비동기 작업을 배열에 넣고, 비구조화 할당(`Destructuring Assignment`)을 한다.
```js
function* worker() {
  const [users, accounts] = yield [
    call(fetch, '/users'),
    call(fetch, '/accounts'),
  ];

  // ...
}

```

### redux-observable
`RxJS`의 `merge`를 사용한다.
```js
action$
  // ...
  .switchMap(() => merge(Promise1, Promise2));
```

## Throttling, Debouncing, Retrying
### redux-saga
```js
// throttling
import { throttle } from 'redux-saga/effects';

function* worker() {
  // ...
}

function* watcher() {
  yield throttle(500, 'THROTTLED_ACTION_TYPE', worker);
}

// debouncing
import { delay } from 'redux-saga'
import { call, cancel, fork, take } from 'redux-saga/effects'

function* worker() {
  yield call(delay, 500);
}

function* watcher() {
  let task;

  while (true) {
    const { data } = yield take('DEBOUNCED_ACTION_TYPE');

    if (task) {
      yield cancel(task);
    }

    task = yield fork(worker, data);
  }
}

// delay can be replaced with this
const customDelay = ms => new Promise(resolve => setTimeout(resolve, ms));

// debouncing 2
import { delay } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';

function* worker({ input }) {
  yield call(delay, 500);
}

function* watcher() {
  yield takeLatest('DEBOUNCED_ACTION_TYPE', worker);
}

// retrying
function* worker(data) {
  for (let i = 0; i < 3; i += 1) {
    try {
      const result = yield call(fetch, '/end-point');
      return result;
    } catch (e) {
      if (i < 5) {
        yield call(delay, 2000);
      }
    }
  }

  throw new Error('API request failed');
}

function* watcher() {
  while (true) {
    const { data } = yield take('START_REQUEST');

    try {
      const result = yield call(worker, data);

      yield put({
        type: 'RECEIVE_RESPONSE',
        payload: result.body,
      });
    } catch (e) {
      yield put({
        type: 'GET_FAILED_RESPONSE',
        error: e,
      });
    }
  }
}
```

### redux-observable
```js
// throttling
action$
  .ofType('THROTTLED_ACTION_TYPE')
  // ...
  .throtleTime(1000)

// debouncing
action$
  .ofType('DEBOUNCED_ACTION_TYPE')
  // ...
  .debouncing(1000)

// retrying
action$
  // ...
  .retry(3)

```

## 로그 사용하기
### redux-saga
```js
function* watcher() {
  // ...

  while (true) {
    const action = yield take('*');
    const state = yield select();
    console.log('action: %s', action);
    console.log('state: %s', state);
  }
}
```

### redux-observable
```js
action$
  // ...
  .do(console.log)
```

## redux-saga 정리
`call`, `apply`는 부작용을 표현하는 객체를 만드는데 사용되며, `put`, `select`, `take`는 `redux`의 `store`와 상호작용함으로써, 부작용을 처리한다.(아래 다이어그램 참고)

```
┌───────────────┐
│ Side Effects  │
└───────┬───────┘
        |
   apply, call
        |
┌───────┴───────┐
│  Redux Saga   │ <----> call, apply, fork,
└───────┬───────┘        spawn, join, cancel
        |
  put, select,
take(every, latest)
        |
┌───────┴───────┐
│  Redux Store  │
└───────────────┘
```

몇 가지 기능들만 알면 모든 부작용을 처리할 수 있으며, 코드 또한 간결해진다.<br />
`redux-saga`는 `redux-observable`만큼 기능들이 강력하지 않는 단점이 있지만,
`액션`을 `dispatch`하기도 쉬우며, 무엇보다 배우기 쉽다는 장점이 있다.<br />
생산성, 난이도 등 여러 가지를 고려했을 때 부작용을 다루기 위한 충분한 라이브러리이다.
