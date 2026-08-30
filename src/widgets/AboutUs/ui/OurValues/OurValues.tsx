import { ourValues } from '@/widgets/AboutUs/config';
import s from './OurValues.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import useEmblaCarousel from 'embla-carousel-react';

export const OurValues = () => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  return (
    <section className={s.ourValues}>
      <div className="container">
        <div className={s.ourValuesHeader}>
          <Text as={'span'} variant="ultraSmall" className={s.ourValuesEyebrow}>
            {t('pages.aboutUs.ourValues.eyebrow')}
          </Text>
          <Text as={'h2'} variant="h2" className={s.ourValuesTitle}>
            {t('pages.aboutUs.ourValues.title')}
          </Text>
        </div>

        <div className={s.ourValuesViewport} ref={emblaRef}>
          <ul className={s.ourValuesList}>
            {ourValues.map(({ title, description, Icon, iconSize }) => (
              <li key={title} className={s.ourValuesItem}>
                <div className={s.ourValuesIconWrapper}>
                  <Icon
                    className={s.ourValuesIcon}
                    style={iconSize}
                    aria-hidden="true"
                  />
                </div>

                <div className={s.ourValuesContent}>
                  <Text as={'h3'} variant="h3" className={s.ourValuesItemTitle}>
                    {t(title)}
                  </Text>
                  <p className={s.ourValuesDescription}>{t(description)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
