import { Section } from '@/shared/ui/Section/Section';
import { GUARANTEE_BRANDS } from '../../config';
import s from './GuaranteeBrands.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
import useEmblaCarousel from 'embla-carousel-react';
import { Text } from '@/shared/ui/Text';

export const GuaranteeBrands = () => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  return (
    <Section
      className={s.guaranteeBrands}
      title={t('pages.guarantee.guaranteeBrands.title')}
    >
      <div className={s.guaranteeBrandsViewport} ref={emblaRef}>
        <ul className={s.guaranteeBrandsList}>
          {GUARANTEE_BRANDS.map(({ id, icon: Icon, text }) => (
            <li key={id} className={s.guaranteeBrandsItem}>
              <span className={s.guaranteeBrandsIcon}>
                <Icon />
              </span>
              <Text className={s.guaranteeBrandsText}>{t(text)}</Text>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
