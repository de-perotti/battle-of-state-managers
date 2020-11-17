import React from 'react';
import { render } from '@testing-library/react';

import StateJotai from './state-jotai';

describe('StateJotai', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateJotai />);
    expect(baseElement).toBeTruthy();
  });
});
