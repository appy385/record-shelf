import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sync from './Sync';

describe(Sync.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Sync /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  test('should have message ', () => {
    render(<BrowserRouter><Sync /></BrowserRouter>);
    screen.getByText('Seems a bit empty in here...');
    screen.getByText(':((');
  });
  test('should have button sync', () => {
    render(<BrowserRouter><Sync /></BrowserRouter>);
    const syncButton = screen.getByText('Sync');
    expect(syncButton.tagName).toBe('BUTTON');
  });
  test('should go to route /songs', () => {
    render(<BrowserRouter><Sync /></BrowserRouter>);
    const syncButton = screen.getByText('Sync');
    fireEvent.click(syncButton);
    expect(document.location.href).toBe('http://localhost/songs');
  });
});
