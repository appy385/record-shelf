import React from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import Music from './Music';
import { getSongs, getLikes, updateLike } from '../../utils/api';
import { mockgetSongsApi, mockLikeData } from '../../mockdata/apidata';

jest.mock('../../utils/api');

describe(Music.name, () => {
  beforeEach(() => {
    getSongs.mockResolvedValue(mockgetSongsApi.data);
    getLikes.mockResolvedValue(mockLikeData.data);
    updateLike.mockResolvedValue();
  });
  afterEach(() => {
    jest.clearAllMocks();
    getSongs.mockClear();
  });
  test('should match snapshot', async () => {
    const { container } = await waitFor(() => render(<Music />));
    expect(container).toMatchSnapshot();
  });
  test('should display text All songs', async () => {
    await waitFor(() => render(<Music />));
    screen.getByText('All Songs');
  });
});
