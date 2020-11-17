import React from 'react';
import { render } from '@testing-library/react';

import StateRecoil from './state-recoil';

describe('StateRecoil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateRecoil />);
    expect(baseElement).toBeTruthy();
  });
});
