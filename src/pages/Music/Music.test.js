import React from 'react';
import { render, screen } from '@testing-library/react';
import Music from './Music';

describe(Music.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<Music />);
    expect(container).toMatchSnapshot();
  });
  test('should display text All songs', () => {
    render(<Music />);
    screen.getByText('All Songs');
  });
});
