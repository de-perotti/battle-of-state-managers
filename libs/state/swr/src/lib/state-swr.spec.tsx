import React from 'react';
import { render } from '@testing-library/react';

import StateSwr from './state-swr';

describe('StateSwr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateSwr />);
    expect(baseElement).toBeTruthy();
  });
});
