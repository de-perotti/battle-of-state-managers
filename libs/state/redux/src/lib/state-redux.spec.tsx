import React from 'react';
import { render } from '@testing-library/react';

import StateRedux from './state-redux';

describe('StateRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateRedux />);
    expect(baseElement).toBeTruthy();
  });
});
