import { BRAND_STATS, brandSocials } from '@/widgets/Home/config';
import s from './BrandIntro.module.scss';
import { Socials } from '@/shared/ui/Socials';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

export const BrandIntro = () => {
  const { t } = useTranslation();
  return (
    <section className={s.brandIntro}>
      <div className={'container'}>
        <div className={s.brandIntroWrapper}>
          <div className={s.brandIntroLeft}>
            <div className={s.brandIntroLeftTop}>
              <Text variant={'h2'} as={'h2'} className={s.brandIntroTitle}>
                {t('pages.home.brandIntro.title')}
              </Text>
              <Text className={s.brandIntroDescription}>
                {t('pages.home.brandIntro.description.beforeAccent')}{' '}
                <span className={s.accent}>
                  {t('pages.home.brandIntro.description.accent')}{' '}
                </span>
                {t('pages.home.brandIntro.description.afterAccent')}{' '}
              </Text>
            </div>
            <Socials
              items={brandSocials}
              className={s.brandIntroSocials}
              linkClassName={s.brandIntroSocialLink}
              labelBlockClassName={s.brandIntroSocialLabel}
              showLabel
            ></Socials>
          </div>
          <div className={s.brandIntroRight}>
            <ul className={s.introStats}>
              {BRAND_STATS.map(
                ({ id, Icon, iconClassName, value, description }) => (
                  <li key={id} className={s.introItem}>
                    <span className={s.introIcon}>
                      <Icon className={s[iconClassName]} />
                    </span>
                    <div className={s.introContent}>
                      <h3 className={s.introTitle}>{value}</h3>

                      <Text
                        variant={'bodySmall'}
                        className={s.introDescription}
                      >
                        {t(description)}
                      </Text>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className={s.brandIntroBottom}>
          <p className={s.brandIntroBottomText}>
            <span className={s.before}>
              {t('pages.home.brandIntro.bottom.beforeValue')}
            </span>
            <span className={s.large}>500 000+</span>
            <span className={s.after}>
              {t('pages.home.brandIntro.bottom.afterValue')}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
