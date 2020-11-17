import React from 'react';
import { render } from '@testing-library/react';

import StateMobx from './state-mobx';

describe('StateMobx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateMobx />);
    expect(baseElement).toBeTruthy();
  });
});
