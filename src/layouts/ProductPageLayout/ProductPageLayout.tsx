import type { ReactNode } from 'react';
import s from './ProductPageLayout.module.scss';
import clsx from 'clsx';

import type { ProductFilterType } from '@/features/filters/model';
import { ProductFilter } from '@/features/filters/ui/ProductFilter';
import { Pagination } from '@/features/pagination/ui';
import { Sort } from '@/features/sort/ui';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { ROUTES } from '@/app/router';
import { getPageState } from '@/layouts/lib';
import { PageStateWidget } from '@/widgets/PageState/ui/PageStateWidget';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { MobileFilterMenu } from '@/features/filters/ui/MobileFilterMenu';
import type { SortOption } from '@/features/sort/model';

type Props = {
  title: string;
  children: ReactNode;
  totalPages: number;
  currentPage: number;
  category?: BreadcrumbItem;
  isError: boolean;
  isLoading: boolean;
  isEmpty?: boolean;
  filterType?: ProductFilterType;
  page?: string;
  actions?: ReactNode;
  className?: string;
  sortOptions: SortOption[];
  showSort?: boolean;
};

export const ProductPageLayout = ({
  title,
  category,
  children,
  totalPages,
  currentPage,
  filterType,
  className,
  page,
  isError,
  isLoading,
  isEmpty,
  sortOptions,
  showSort = true,
}: Props) => {
  // Backend uses 0-based page numbering, Pagination uses 1-based.
  const displayPage = currentPage + 1;
  const { t } = useTranslation();

  const pageState = getPageState({
    isLoading,
    isError,
    isEmpty: false,
  });

  return (
    <section className={clsx(className, s.productPageLayout)}>
      <div className="container">
        {pageState ? (
          <PageStateWidget title={title} variant={pageState} />
        ) : (
          <div className={s.layoutWrapper}>
            <section className={s.header}>
              <div className={s.breadcrumbsBlock}>
                {category && (
                  <Breadcrumbs
                    items={[
                      { label: t('pages.home.title'), to: ROUTES.home },
                      {
                        ...category,
                        label: t(category.label),
                      },
                    ]}
                  />
                )}
                <Text as={'h1'} variant="h1" className={s.title}>
                  {t(title)}
                </Text>
              </div>

              <div className={s.actions}>
                {filterType && (
                  <MobileFilterMenu
                    triggerClassName={s.filterTrigger}
                    filterType={filterType}
                    page={page}
                    t={t}
                  />
                )}

                {showSort && (
                  <Sort
                    sortOptions={sortOptions}
                    className={s.sortFilter}
                    selectClassName={s.sortInner}
                  />
                )}
              </div>
            </section>

            <section
              className={clsx(s.body, !filterType && s.bodyWithoutFilters)}
            >
              {filterType && (
                <aside className={s.filters}>
                  <ProductFilter filterType={filterType} page={page} />
                </aside>
              )}

              <div className={s.content}>
                {isEmpty ? (
                  <PageStateWidget title={title} variant="empty" />
                ) : (
                  children
                )}
              </div>
            </section>

            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={displayPage}
                className={s.layoutPagination}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
