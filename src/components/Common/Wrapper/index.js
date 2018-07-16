/** @jsx createElement */
import { createElement } from 'react';
import { oneOfType, node, element, array, string } from 'prop-types';
import styled from 'styled-components';

const WrapperOuter = styled.section`
  position: relative;
  padding: 56.25% 0 0;
  width: 100%;
  height: 0;
  @media (max-width: 1024px) {
    padding: 178% 0 0;
    padding: 100vh 0 0;
  }
`;

const WrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ isHome }) => (isHome ? '' : 'padding: 100px 0 0;')}
`;

const Wrapper = ({
  children,
}) => (
  <WrapperOuter>
    <WrapperInner>
      {children}
    </WrapperInner>
  </WrapperOuter>
);

Wrapper.propTypes = {
  children: oneOfType([
    node,
    element,
    array,
    string,
  ]),
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
