import { Section } from '@/shared/ui/Section/Section';
import s from './TireServiceAdvantages.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
import { TIRE_SERVICE_ADVANTAGES } from '../../config/tiresServiceAdvantages';
import useEmblaCarousel from 'embla-carousel-react';

export const TireServiceAdvantages = () => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  return (
    <Section
      className={s.serviceAdvantages}
      title={
        <>
          <span>
            {t('pages.tireService.tireServiceAdvantages.title.title1')}
          </span>
          <span>
            {t('pages.tireService.tireServiceAdvantages.title.title2')}
          </span>
        </>
      }
      titleClassName={s.serviceAdvantagesTitle}
    >
      <div className={s.serviceAdvantagesViewport} ref={emblaRef}>
        <ul className={s.serviceAdvantagesList}>
          {TIRE_SERVICE_ADVANTAGES.map(({ value, title, description }) => (
            <li key={value} className={s.serviceAdvantagesItem}>
              <div className={s.advantageCard}>
                <h3 className={s.advantageCardTitle}>{t(title)}</h3>
                <p className={s.advantageCardDescription}>{t(description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

// t('pages.tireService.tireServiceAdvantages.title')
