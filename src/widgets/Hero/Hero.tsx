import clsx from 'clsx';
import s from './Hero.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
type HeroProps = {
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
};

export const Hero = ({ children, className, classNameContent }: HeroProps) => {
  const { t } = useTranslation();
  return (
    <section className={clsx(className, s.hero)}>
      <div className="container">
        <div className={clsx(s.heroContent, classNameContent)}>
          <Text as={'h1'} variant="h2" className={s.heroTitle}>
            {t('pages.home.hero.title')}
          </Text>
          {children}
        </div>
      </div>
    </section>
  );
};
