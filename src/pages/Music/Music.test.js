import React from 'react';
import { render } from '@testing-library/react';
import Music from './Music';

describe(Music.name, () => {
  test('shoudl match snapshot', () => {
    const { container } = render(<Music />);
    expect(container).toMatchSnapshot();
  });
});
