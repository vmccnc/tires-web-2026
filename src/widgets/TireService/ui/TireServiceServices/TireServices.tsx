import { useTranslation } from '@/shared/lib/hooks';
import { Section } from '@/shared/ui/Section/Section';
import s from './TireServices.module.scss';
import { TIRE_SERVICES } from '../../config';
import useEmblaCarousel from 'embla-carousel-react';

type TireServicesProps = {
  onServiceClick: (value: string) => void;
};
export const TireServices = ({ onServiceClick }: TireServicesProps) => {
  const { t } = useTranslation();
  const title = t('pages.tireService.tireServiceServices.title');
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  return (
    <Section title={title} className={s.tireServices} titleClassName={s.title}>
      <div className={s.tireServiceViewport} ref={emblaRef}>
        <ul className={s.tireServicesList}>
          {TIRE_SERVICES.map(
            ({ value, icon: Icon, title, cardDescription }) => (
              <li key={value} className={s.tireServicesItem}>
                <button
                  className={s.tireServicesCard}
                  onClick={() => onServiceClick(value)}
                >
                  <Icon className={s.tireServicesIcon} />
                  <div className={s.tireServicesContent}>
                    <h3 className={s.tireServicesTitle}>{t(title)}</h3>
                    <p className={s.tireServicesDescription}>
                      {t(cardDescription)}
                    </p>
                  </div>
                </button>
              </li>
            ),
          )}
        </ul>
      </div>
    </Section>
  );
};
