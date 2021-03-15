import React from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import Music from './Music';
import { getSongs } from '../../utils/api';
import { mockgetSongsApi } from '../../mockdata/apidata';

jest.mock('../../utils/api');

describe(Music.name, () => {
  beforeEach(() => {
    getSongs.mockResolvedValue(mockgetSongsApi.data);
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
