import React from 'react';
import { render } from '@testing-library/react';

import StateSweetState from './state-sweet-state';

describe('StateSweetState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateSweetState />);
    expect(baseElement).toBeTruthy();
  });
});
