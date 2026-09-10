import { useGetTiresQuery } from '@/entities/tire/api';
import { TireCard } from '@/entities/tire/ui/TireCard';
import s from './Tires.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import type { TireParams } from '@/entities/tire/model';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import { PRODUCT_SORT_OPTIONS } from '@/features/sort/config';
export const Tires = () => {
  const params = usePaginationParams<TireParams>();
  const { data, isLoading, isError } = useGetTiresQuery(params);
  const tires = data?.content;
  console.log(tires);

  return (
    <ProductPageLayout
      title="pages.tires.title"
      sortOptions={PRODUCT_SORT_OPTIONS}
      filterType={'tires'}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      category={{
        label: 'pages.tires.title',
      }}
      className={s.tiresPage}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!tires?.length}
      page="tires"
    >
      <ProductGrid
        items={tires ?? []}
        getKey={(tire) => tire.id}
        renderItem={(tire) => <TireCard tire={tire} />}
      />
    </ProductPageLayout>
  );
};
