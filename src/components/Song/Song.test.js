import React from 'react';
import { render } from '@testing-library/react';
import Song from './Song';
import { mockSongData } from '../../mockdata/appdata';

describe(Song.name, () => {
  test('shoudld match snapshot', () => {
    const { container } = render(<Song song={mockSongData} />);
    expect(container).toMatchSnapshot();
  });
});
