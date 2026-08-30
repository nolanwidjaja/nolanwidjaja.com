/**
 * Shared helpers for blog content: date formatting and sorting.
 * Kept framework-agnostic (no Astro imports) so they're easy to unit test.
 */

/** Format a date as e.g. "August 15, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Return a new array sorted newest-first by `data.date`. Does not mutate the input. */
export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
