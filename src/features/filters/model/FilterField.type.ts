import type { FilterSelectValues } from '@/features/filters/model';
export type FilterField = {
  name: keyof FilterSelectValues;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
  disabled: boolean;
};
