import { Circle } from '@/assets/icons';
import s from './ReturnProcessSection.module.scss';
import { RETURN_STEPS } from '@/widgets/Guarantee/config';
import { Section } from '@/shared/ui/Section/Section';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import useEmblaCarousel from 'embla-carousel-react';

export const ReturnProcessSection = () => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  return (
    <Section
      className={s.returnProcess}
      title={t('pages.guarantee.returnSteps.title')}
    >
      <div className={s.returnStepsViewport} ref={emblaRef}>
        <ul className={s.returnSteps}>
          {RETURN_STEPS.map((text, index) => (
            <li key={text} className={s.returnStep}>
              <Circle className={s.returnStepIcon} />
              <div className={s.returnStepDescription}>
                <span className={s.returnStepNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Text
                  as={'span'}
                  variant="ultraSmall"
                  className={s.returnStepText}
                >
                  {t(text)}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
