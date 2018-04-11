---
title: "RxJS로 만든 간단한 예제 프로그램"
date: "2017-11-18T12:57:25.000Z"
path: "/rxjs-ex-1/"
tags: ["javascript", "rxjs", "functional reactive programming", "frp", "reactivex"]
summary: "마우스를 바라보는 3D 효과"
components: [{
  rootId: "lerp-animation",
  fileName: "rx-example/lerp-animation",
}]
category: "RxJS"
images: ["images/rxjs.jpg"]
---

## 마우스를 바라보는 3D 효과

<div id="lerp-animation"></div>

```js
// 리액트 컴퍼넌트를 만드는 코드이지만,
// 분석하기 어려운 코드는 아니다.
import React, { PureComponent } from 'react';
import Rx from 'rxjs';
import styled from 'styled-components';
import * as url from './logan.jpg';

const StyledDiv = styled.div`
  position: relative;
  margin: 10vh auto;
  width: 50%;
  height: 30vh;
  background-color: bisque;
  transform: ${props => (props.transform)};
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
  }
`;

class App extends PureComponent {
  static lerp(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;

    return {
      x: start.x + (dx * 0.1),
      y: start.y + (dy * 0.1),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      transform: '',
    };
    this.rotateElement = this.rotateElement.bind(this);
  }

  componentDidMount() {
    const docEl = document.documentElement;

    const mouseMove$ = Rx.Observable
      .fromEvent(docEl, 'mousemove')
      .map(e => ({ x: e.clientX, y: e.clientY }));
    const touchMove$ = Rx.Observable
      .fromEvent(docEl, 'touchmove')
      .map(e => ({ x: e.touches[0].clientX, y: e.touches[0].clientY }));

    const move$ = Rx.Observable.merge(mouseMove$, touchMove$);

    const animationFrame$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);
    const smoothMove$ = animationFrame$
      .withLatestFrom(move$, (frame, move) => move)
      .scan((current, next) => App.lerp(current, next));

    smoothMove$.subscribe(this.rotateElement);
  }

  rotateElement(pos) {
    const docEl = document.documentElement;
    const rotX = ((pos.y / docEl.clientHeight) * -50) + 25;
    const rotY = ((pos.x / docEl.clientWidth) * 50) - 25;
    const transform = `rotateX(${rotX}deg) rotateY(${rotY}deg);`;

    this.setState({ transform });
  }

  render() {
    return (
      <div>
        <StyledDiv transform={this.state.transform}>
          <img src={url.default} alt="rx example" />
        </StyledDiv>
      </div>
    );
  }
}

export default App;
```
