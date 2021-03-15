import React from 'react';
import groupByGenre from './helper';
import { mockSongsArray, mockResultSongByCatgeory } from '../mockdata/appdata';

describe(groupByGenre.name, () => {
  test('should return items grouped in categories for tag-products', () => {
    const responseProducts = groupByGenre(mockSongsArray);
    expect(responseProducts).toEqual(mockResultSongByCatgeory);
  });
});
