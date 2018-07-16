/** @jsx createElement */
import { createElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 1em 0;

  a {
    color: #000;
  }

  span,
  img {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: #999;
    font-size: 90%;
  }
`;

const Bio = () => (
  <Wrapper>
    <a
      href="https://github.com/wonism"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://avatars0.githubusercontent.com/u/13835762?s=460&v=4"
        width="48"
        height="48"
        alt=""
      />
      <span>
        Front-end developer WONISM
        <br />
        <small>Interested in ReactJS, RxJS and ReasonML.</small>
      </span>
    </a>
  </Wrapper>
);

export default Bio;
