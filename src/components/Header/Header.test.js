import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe(Header.name, () => {
  test('should match snapshot for theme light', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      ,
    );
    expect(container).toMatchSnapshot();
  });
  test('should go to / route when My/record/shelf is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      ,
    );
    const syncLink = screen.getByText('My');
    fireEvent.click(syncLink);
    expect(document.location.href).toBe('http://localhost/');
  });
});
