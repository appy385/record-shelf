import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Genre from './Genre';
import { mockSongsByCategory } from '../../mockdata/appdata';

describe(Genre.name, () => {
  test('should match snapshot', async () => {
    const mockHandleLike = jest.fn();
    const { container } = render(<Genre
      genreSongs={mockSongsByCategory}
      handleLike={mockHandleLike}
    />);
    expect(container).toMatchSnapshot();
  });

  test('should have number of genres equal to mock data genre', async () => {
    const mockHandleLike = jest.fn();
    render(<Genre genreSongs={mockSongsByCategory} handleLike={mockHandleLike} />);
    const element = screen.getAllByTestId('genre-row');
    const { length } = Object.keys(mockSongsByCategory);
    expect(element.length).toBe(length);
  });
});
