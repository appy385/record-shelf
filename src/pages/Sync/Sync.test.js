import React from 'react';
import { render, screen } from '@testing-library/react';
import Sync from './Sync';

describe(Sync.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<Sync />);
    expect(container).toMatchSnapshot();
  });
  test('should have message ', () => {
    render(<Sync />);
    screen.getByText('Seems a bit empty in here...');
    screen.getByText(':((');
  });
  test('should have button sync', () => {
    render(<Sync />);
    const syncButton = screen.getByText('Sync');
    expect(syncButton.tagName).toBe('BUTTON');
  });
});
