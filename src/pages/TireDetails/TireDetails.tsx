import { ROUTES } from '@/app/router';
import { getProductTitle } from '@/entities/product/lib/helpers';
import { useGetTireByIdQuery } from '@/entities/tire/api';
import { TireDetailsCard } from '@/entities/tire/ui/TireDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useTranslation } from '@/shared/lib/hooks';
import { useParams } from 'react-router-dom';

export const TireDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetTireByIdQuery(id!);
  const { t } = useTranslation();

  const title = data ? getProductTitle(data, t) : 'title';

  return (
    <ProductDetailsPageLayout
      title={title}
      category={{
        label: 'pages.tires.title',
        to: ROUTES.tires,
      }}
      productDetailsCard={
        data ? <TireDetailsCard t={t} title={title} tire={data} /> : null
      }
      isError={isError}
      isLoading={isLoading}
      isEmpty={!data}
    />
  );
};
