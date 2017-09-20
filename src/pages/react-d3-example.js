import React from 'react';
import D3App from '../components/D3App';

const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 13 },
  { label: 'C', value: 5 },
  { label: 'D', value: 8 },
];

const margin = {
  top: 20,
  bottom: 30,
  right: 30,
  left: 40,
};
const width = 480- margin.left - margin.right;
const height = 320 - margin.top - margin.bottom;

const D3AppContainer = () =>
  <D3App
    margin={margin}
    data={data}
    width={width}
    height={height}
  />;

export default D3AppContainer;
