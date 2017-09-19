---
title: "리액트 성능 향상 시키기 - React.PureComponent"
date: "2017-09-13T21:39:50.000Z"
path: "/react-pure-component/"
tags: ["javascript", "optimization", "reactjs", "component", "pure component"]
summary: "React.PureComponent는 React.Component와 매우 유사하다. 하지만 한 가지 다른 점이 있다면, React의 생명주기 메소드 중 하나인 shouldComponentUpdate를 다루는 방식이 다르다는 것이다."
components: [{
	rootId: 'pure-component-example',
	fileName: 'pure-component-vs-component-1',
}, {
	rootId: 'component-example',
	fileName: 'pure-component-vs-component-2',
}]
tweets: [{
	rootId: 'functional-component',
	userId: 'dan_abramov',
	tweetId: '755343749983657986',
}]
---

`React.PureComponent`는 `React.Component`와 매우 유사하다. 하지만 한 가지 다른 점이 있다면, `React`의 생명주기 메소드 중 하나인 `shouldComponentUpdate`를 다루는 방식이 다르다는 것이다.<br />
`React.PureComponent`는 `shouldComponentUpdate`가 이미 구현되어 있는데, `props`와 `state`를 `얕은 비교`를 통해 비교한 뒤 변경된 것이 있을 때만 리렌더링한다.<br />
즉, `React.PureComponent`를 사용하면 `React`애플리케이션 성능을 향상시키는 데 가장 중요한 것 중 하나인 `shouldComponentUpdate`를 신경쓰지 않아도 된다.<br />
하지만 `props`나 `state`가 복잡한 데이터 구조를 포함하고 있다면, `props`와 `state`를 비교하는 과정에서 의도하지 않은 결과가 발생할 수 있다.<br />
(`얕은 비교(shallow comparison)`와 `깊은 비교(deep comparison)`의 차이를 알면 무슨 의미인지 알 것이다.)

## PureComponent vs Component
사용자가 버튼을 클릭하면 카운터가 랜덤하게 증가하는 컴퍼넌트이다.<br />
`PureComponent`와 `Component`의 차이를 비교하려면, 아래 예제 코드에서 단지 `Pure`를 지우거나 다시 쓰면 된다.<br />
`PureComponent`를 `extends`한 컴퍼넌트는 카운터가 증가할 때만 `re-render`되지만, `Component`를 `extends`한 컴퍼넌트는 버튼을 클릭하면 `setState`가 실행되기 때문에 매 클릭마다 `re-render`된다는 것을 볼 수 있다.<br />
(참고로 `PureComponent`를 `extends`한 컴퍼넌트 안에서도 `shouldComponentUpdate` 메소드를 사용할 수 있다.)

```js
import React, { PureComponent } from 'react';
import { render } from 'react-dom';

const root = document.querySelector('#root');
const pTag = document.createElement('p');

const logClosure = () => {
  let clickedCount = 0;
  let reRenderedCount = -1;

  return (isReRendered) => {
    if (isReRendered) {
      reRenderedCount += 1;
    } else {
      clickedCount += 1;
    }

    pTag.textContent = `log -> click count : ${clickedCount} | re-render count : ${reRenderedCount}`;
  };
};

const log = logClosure();

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    root.after(pTag);
  }

  handleClick() {
    log(false);

    if (Math.floor(Math.random() * 10) % 2) {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  }

  render() {
    log(true);

    return (
      <div>
        {this.state.counter}
        <br />
        <input
          type="button"
          onClick={this.handleClick}
          value="click"
        />
      </div>
    );
  }
}

render(<App />, root);
```

### 실행결과
다음 컴퍼넌트는 `PureComponent`를 `extends`한 컴퍼넌트이다.
<div id="pure-component-example"></div>

다음 컴퍼넌트는 `Component`를 `extends`한 컴퍼넌트이다.
<div id="component-example"></div>

## 결론
`functional components`는 아직까지 최적화되어있지 않다. 그 이유는 함수형 컴퍼넌트도 결국엔 클래스 기반 컴퍼넌트로 래핑되기 때문이다.<br />
(하지만 `React Team`은 언젠가 함수형 컴퍼넌트를 최적화하겠다고 했다.)<br />
따라서 현재까지는 최적화가 필요한 컴퍼넌트에서는 클래스 컴퍼넌트의 `shouldComponentUpdate` 메소드를 사용하거나 `PureComponent`를 통해 최적화하는 것이 가장 좋은 방법이라고 할 수 있다.

<div id="functional-component"></div>

## 참조
- [React Top-Level API](https://facebook.github.io/react/docs/react-api.html#react.purecomponent)
- [Dan Abramov's Twitter](https://twitter.com/dan_abramov/status/755343749983657986)
