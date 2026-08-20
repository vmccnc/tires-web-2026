import { ROUTES } from '@/app/router';
import { getProductTitle } from '@/entities/product/lib/helpers';
import { useGetWheelSpacerByIdQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacersDetailsCard } from '@/entities/wheelSpacer/ui/WheelSpacerDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useTranslation } from '@/shared/lib/hooks';
import { useParams } from 'react-router-dom';

export const WheelSpacerDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetWheelSpacerByIdQuery(id!);
  const { t } = useTranslation();
  const title = data ? getProductTitle(data, t) : 'title';
  return (
    <ProductDetailsPageLayout
      title={title}
      category={{
        label: 'pages.wheelSpacers.title',
        to: ROUTES.wheelSpacers,
      }}
      productDetailsCard={
        data ? (
          <WheelSpacersDetailsCard spacer={data} t={t} title={title} />
        ) : null
      }
      isError={isError}
      isLoading={isLoading}
      isEmpty={!data}
    />
  );
};
