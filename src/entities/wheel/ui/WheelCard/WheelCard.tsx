import type { Wheel } from '@/entities/wheel/model';
import s from './WheelCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { getProductTitle } from '@/entities/product/lib/helpers';
type Props = {
  wheel: Wheel;
};

export const WheelCard = ({ wheel }: Props) => {
  const { t } = useTranslation();
  const cardTitle = getProductTitle(wheel, t);
  return (
    <ProductCard
      product={wheel}
      className={s.wheelCard}
      title={cardTitle}
      to={`${ROUTES.wheels}/${wheel.id}`}
    >
      {/* <p className={s.text}>
        {wheel.diameter}"
        {wheel.material && wheel.material !== '-'
          ? `, ${wheel.material.toLowerCase()}`
          : ''}
      </p> */}
    </ProductCard>
  );
};
