import { ROUTES } from '@/app/router';
import { getProductTitle } from '@/entities/product/lib/helpers';
import { useGetWheelByIdQuery } from '@/entities/wheel/api';
import { WheelDetailsCard } from '@/entities/wheel/ui/WheelDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useTranslation } from '@/shared/lib/hooks';
import { useParams } from 'react-router-dom';

export const WheelDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetWheelByIdQuery(id!);
  const { t } = useTranslation();
  const title = data ? getProductTitle(data, t) : 'title';
  return (
    <ProductDetailsPageLayout
      title={title}
      category={{
        label: 'pages.wheels.title',
        to: ROUTES.wheels,
      }}
      productDetailsCard={
        data ? <WheelDetailsCard wheel={data} t={t} title={title} /> : null
      }
      isError={isError}
      isLoading={isLoading}
      isEmpty={!data}
    />
  );
};
