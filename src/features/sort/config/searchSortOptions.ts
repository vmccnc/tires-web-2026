import type { SortOption } from '@/features/sort/model';

export const SEARCH_SORT_OPTIONS: SortOption[] = [
  {
    value: 'default',
    label: 'filter.sort.default',
  },
  {
    value: 'price-asc',
    searchParameter: 'price',
    label: 'filter.sort.cheaper',
    direction: 'asc',
  },
  {
    value: 'price-desc',
    searchParameter: 'price',
    label: 'filter.sort.expensive',
    direction: 'desc',
  },
];
