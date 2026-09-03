import {
  type ProductFilterFormValues,
  type ProductFilterType,
} from '@/features/filters/model';
import { FILTER_VALUES } from '@/features/filters/config';

import s from './ProductFilter.module.scss';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { useSearchParams } from 'react-router-dom';
import {
  createSearchParams,
  getFormValuesFromSearchParams,
} from '@/shared/lib/helpers';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/shared/ui/Checkbox';
import { PriceRangeFilter } from '@/features/filters/ui/PriceRangeFilter';
import { useGetManufacturersQuery } from '@/entities/manufacturer/api';
import { ExpandableFilter } from '@/features/filters/ui/ExpandableFilter';
import { protectors } from '@/shared/config';
import { useTranslation } from '@/shared/lib/hooks';
import { useFilterFields } from '@/features/filters/hooks';
import { hasActiveFilters } from '../../helpers';

const INITIAL_VISIBLE_MANUFACTURERS = 4;
const INITIAL_VISIBLE_PROTECTORS = 4;

export type ProductFilterProps = {
  className?: string;
  filterType: ProductFilterType;
  page?: string;
};

export const ProductFilter = ({
  className,
  filterType,
  page,
}: ProductFilterProps) => {
  const initialFields = FILTER_VALUES[filterType].fields;

  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const defaultValues = {
    ...getFormValuesFromSearchParams(initialFields, searchParams),
    priceFrom: searchParams.get('priceFrom') ?? '',
    priceTo: searchParams.get('priceTo') ?? '',
    inStock: searchParams.get('inStock') === 'true',
    manufacturer: searchParams.getAll('manufacturer'),
    protector: searchParams.getAll('protector'),
  };

  const { register, watch, reset, control, setValue } =
    useForm<ProductFilterFormValues>({
      defaultValues,
    });

  //получаем существующие поля
  const values = watch();
  //получаем от бэка данные для селектов

  const isFilterActive = hasActiveFilters(values);
  const fields = useFilterFields(filterType, values);

  const { data, isLoading, isError } = useGetManufacturersQuery();
  const manufacturers = data ?? [];

  const [initialSelectedProtectors] = useState(() =>
    searchParams.getAll('protector'),
  );

  const sortedProtectors = [
    ...protectors.filter((p) => initialSelectedProtectors.includes(p.name)),
    ...protectors.filter((p) => !initialSelectedProtectors.includes(p.name)),
  ];

  const [visibleManufacturerCount, setVisibleManufacturerCount] = useState(
    INITIAL_VISIBLE_MANUFACTURERS,
  );

  const [visibleProtectorCount, setVisibleProtectorCount] = useState(
    INITIAL_VISIBLE_PROTECTORS,
  );

  const test1 = getFormValuesFromSearchParams(initialFields, searchParams);
  console.log(test1, 'testFields');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const subscription = watch((values, { name }) => {
      clearTimeout(timeoutId);

      const delay = name === 'priceFrom' || name === 'priceTo' ? 700 : 300;

      timeoutId = setTimeout(() => {
        setSearchParams((currentParams) =>
          createSearchParams(values as ProductFilterFormValues, currentParams),
        );
      }, delay);
    });

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, [watch, setSearchParams]);

  const handleReset = () => {
    reset({
      ...getFormValuesFromSearchParams(initialFields, new URLSearchParams()),
      priceFrom: '',
      priceTo: '',
      inStock: false,
      manufacturer: [],
      protector: [],
    });
    setVisibleManufacturerCount(INITIAL_VISIBLE_MANUFACTURERS);
    setVisibleProtectorCount(INITIAL_VISIBLE_PROTECTORS);
    setSearchParams({});
  };

  return (
    <div className={clsx(className, s.productFilter)}>
      <form className={s.productFilterForm}>
        <Checkbox
          className={s.inStockCheckbox}
          labelClassName={s.label}
          label={t('filter.additional.inStock')}
          {...register('inStock')}
        />
        <div className={s.filterFields}>
          {fields.map((filterField) => (
            <Controller
              key={filterField.name}
              name={filterField.name}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={filterField.options!}
                  placeholder={t(filterField.placeholder)}
                  disabled={filterField.disabled}
                  wrapperClassName={s.productFilterSelectWrapper}
                  className={s.productFilterSelect}
                  iconClassName={s.productFilterSelectIcon}
                  value={field.value as string}
                />
              )}
            />
          ))}
        </div>
        {page === 'tires' &&
          !isError &&
          !isLoading &&
          manufacturers.length > 0 && (
            <ExpandableFilter
              filterLabel={t('filter.additional.brand')}
              name="manufacturer"
              visibleCount={visibleManufacturerCount}
              options={manufacturers}
              register={register}
              onShowMore={() =>
                setVisibleManufacturerCount(
                  (c) => c + INITIAL_VISIBLE_MANUFACTURERS,
                )
              }
            />
          )}

        {page === 'tires' && (
          <ExpandableFilter
            filterLabel={t('filter.additional.protector')}
            name="protector"
            visibleCount={visibleProtectorCount}
            options={sortedProtectors}
            register={register}
            onShowMore={() =>
              setVisibleProtectorCount((c) => c + INITIAL_VISIBLE_PROTECTORS)
            }
          />
        )}

        <PriceRangeFilter
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <Button
          type="button"
          variant="dark"
          className={s.resetBtn}
          onClick={handleReset}
          disabled={!isFilterActive}
        >
          {t('filter.actions.reset')}
        </Button>
      </form>
    </div>
  );
};
