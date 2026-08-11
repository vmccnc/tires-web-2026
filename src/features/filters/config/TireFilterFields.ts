import type { FilterField } from '@/features/filters/model';

export const TireFilterFields: FilterField[] = [
  {
    name: 'width',
    placeholder: 'filter.tires.width',
    options: [],
    disabled: true,
  },
  {
    name: 'profile',
    placeholder: 'filter.tires.profile',
    options: [],
    disabled: true,
  },
  {
    name: 'diameter',
    placeholder: 'filter.tires.diameter',
    options: [],
    disabled: true,
  },
  {
    name: 'season',
    placeholder: 'filter.tires.season',
    options: [{ value: 'All-Season', label: 'Всесезонные' }],
    disabled: true,
  },
];
