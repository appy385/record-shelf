import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe(App.name, () => {
  test('shoudl match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test('should render button sync', () => {
    render(<App />);
    const syncButton = screen.getByText('Sync');
    expect(syncButton.tagName).toBe('BUTTON');
  });
  test('should go to /songs route on sync button click ', () => {
    render(<App />);
    const syncButton = screen.getByText('Sync');
    fireEvent.click(syncButton);
    expect(document.location.href).toBe('http://localhost/songs');
  });
});
