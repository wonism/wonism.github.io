import React from 'react';
import Rx from 'rxjs';

if (typeof window !== 'undefined') {
  window.Rx = Rx;
}

if (typeof global !== '!undefined') {
  global.Rx = Rx;
}

export default () => <div />;
