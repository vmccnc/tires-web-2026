import s from './TireServiceBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner } from '@/shared/ui/Banner';

type TireServiceBannerProps = {
  pageTitle: string;
};

export const TireServiceBanner = ({ pageTitle }: TireServiceBannerProps) => {
  const { t } = useTranslation();
  return (
    <Banner
      className={s.tireServiceBanner}
      bannerTitle={t('pages.tireService.tireServiceBanner.title')}
      contentClassName={s.tireServiceBannerContent}
      breadcrumbs={[
        { label: t('pages.home.title'), to: '/' },
        { label: t(pageTitle) },
      ]}
      links={[
        {
          to: ROUTES.contacts,
          linkName: t('general.links.contactUs'),
        },
      ]}
    >
      <span>
        <span>
          {t('pages.tireService.tireServiceBanner.descriptionLine1')}{' '}
        </span>
        <span>{t('pages.tireService.tireServiceBanner.descriptionLine2')}</span>
      </span>
    </Banner>
  );
};
