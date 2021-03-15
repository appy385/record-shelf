import React from 'react';
import { render, screen } from '@testing-library/react';
import Song from './Song';
import { mockSongData } from '../../mockdata/appdata';

describe(Song.name, () => {
  test('shoudld match snapshot', () => {
    const mockHandleLike = jest.fn();
    const { container } = render(<Song song={mockSongData} handleLike={mockHandleLike} />);
    expect(container).toMatchSnapshot();
  });
  test('shoudld have a gray heart image button', () => {
    const mockHandleLike = jest.fn();
    render(<Song song={mockSongData} handleLike={mockHandleLike} />);
    const element = screen.getByTestId('gray-heart');
    expect(element.tagName).toBe('INPUT');
  });
});
