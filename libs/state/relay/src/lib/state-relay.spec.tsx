import React from 'react';
import { render } from '@testing-library/react';

import StateRelay from './state-relay';

describe('StateRelay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateRelay />);
    expect(baseElement).toBeTruthy();
  });
});
