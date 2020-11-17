import React from 'react';
import { render } from '@testing-library/react';

import StateApollo from './state-apollo';

describe('StateApollo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateApollo />);
    expect(baseElement).toBeTruthy();
  });
});
