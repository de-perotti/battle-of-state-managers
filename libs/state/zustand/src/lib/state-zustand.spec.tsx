import React from 'react';
import { render } from '@testing-library/react';

import StateZustand from './state-zustand';

describe('StateZustand', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateZustand />);
    expect(baseElement).toBeTruthy();
  });
});
