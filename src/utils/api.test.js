import React from 'react';
import axios from 'axios';
import { getSongs } from './api';

import { mockgetSongsApi } from '../mockdata/apidata';

describe(getSongs.name, () => {
  test('should return response with "/items" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValue(mockgetSongsApi);
    const response = await getSongs();
    expect(response).toEqual(mockgetSongsApi.data);
  });
});
