import { describe, it, expect } from 'vitest';
import { formatDate, sortByDateDesc } from './posts';

describe('formatDate', () => {
  it('formats a date as "Month D, YYYY"', () => {
    // Use explicit UTC noon to avoid timezone rollover changing the day.
    expect(formatDate(new Date('2026-08-15T12:00:00Z'))).toBe('August 15, 2026');
  });

  it('does not zero-pad the day', () => {
    expect(formatDate(new Date('2026-01-05T12:00:00Z'))).toBe('January 5, 2026');
  });
});

describe('sortByDateDesc', () => {
  const make = (id: string, iso: string) => ({ id, data: { date: new Date(iso) } });

  it('orders items newest-first', () => {
    const items = [
      make('old', '2024-01-01'),
      make('new', '2026-01-01'),
      make('mid', '2025-01-01'),
    ];
    expect(sortByDateDesc(items).map((i) => i.id)).toEqual(['new', 'mid', 'old']);
  });

  it('does not mutate the original array', () => {
    const items = [make('a', '2024-01-01'), make('b', '2026-01-01')];
    const order = items.map((i) => i.id);
    sortByDateDesc(items);
    expect(items.map((i) => i.id)).toEqual(order);
  });

  it('returns an empty array unchanged', () => {
    expect(sortByDateDesc([])).toEqual([]);
  });
});
