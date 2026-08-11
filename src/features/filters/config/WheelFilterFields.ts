import type { FilterField } from '@/features/filters/model';

export const WheelFilterFields: FilterField[] = [
  {
    name: 'width',
    placeholder: 'filter.wheels.width',
    options: [],
    disabled: true,
  },
  {
    name: 'diameter',
    placeholder: 'filter.wheels.diameter',
    options: [],
    disabled: true,
  },
  {
    name: 'centralBoreDiameter',
    placeholder: 'DIA',
    options: [],
    disabled: true,
  },
  {
    name: 'boltSpacing',
    placeholder: 'PCD',
    options: [],
    disabled: true,
  },
  {
    name: 'et',
    placeholder: 'ET',
    options: [],
    disabled: true,
  },
];
