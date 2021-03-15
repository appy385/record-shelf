import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Genre from './Genre';
import { mockSongsByCategory } from '../../mockdata/appdata';

describe(Genre.name, () => {
  test('should match snapshot', async () => {
    const { container } = render(<Genre genreSongs={mockSongsByCategory} />);
    expect(container).toMatchSnapshot();
  });

  test('should have number of genres equal to mock data genre', async () => {
    render(<Genre genreSongs={mockSongsByCategory} />);
    const element = screen.getAllByTestId('genre-row');
    const { length } = Object.keys(mockSongsByCategory);
    expect(element.length).toBe(length);
  });
});
