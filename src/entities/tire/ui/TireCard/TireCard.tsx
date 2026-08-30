import type { Tire } from '@/entities/tire/model';
import s from './TireCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import clsx from 'clsx';
import { ROUTES } from '@/app/router';
import { getProductTitle } from '@/entities/product/lib/helpers';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
type Props = {
  tire: Tire;
  className?: string;
};

export const TireCard = ({ tire, className }: Props) => {
  const { t } = useTranslation();
  const cardTitle = getProductTitle(tire, t);
  return (
    <ProductCard
      product={tire}
      className={clsx(className, s.tireCard)}
      title={cardTitle}
      to={`${ROUTES.tires}/${tire.id}`}
    >
      <Text variant="ultraSmall">{tire.protector ?? ''}</Text>
    </ProductCard>
  );
};
