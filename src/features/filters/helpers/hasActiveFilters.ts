import type { ProductFilterFormValues } from '../model';

export const hasActiveFilters = (values: ProductFilterFormValues): boolean => {
  return Object.values(values).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    return Boolean(value);
  });
};
