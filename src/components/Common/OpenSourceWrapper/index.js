import styled from 'styled-components';

const OpenSourceWrapper = styled.div`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1176px;
  min-height: 100vh;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  article {
    font-size: 16px;
    text-align: left;
  }

  .map {
    margin: auto;
    width: 320px;
    max-width: 100%;
    height: 320px;
  }

  a * {
    cursor: pointer;
  }
`;

export default OpenSourceWrapper;
