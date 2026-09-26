import s from './TireServiceBanner.module.scss';
import { useAppDispatch } from '@/app/store';
import { openModal } from '@/app/store/slices';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner, type BannerLink } from '@/shared/ui/Banner';

type TireServiceBannerProps = {
  pageTitle: string;
};

export const TireServiceBanner = ({ pageTitle }: TireServiceBannerProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const links: BannerLink[] = [
    {
      linkName: t('general.links.contactUs'),
      onClick: () => {
        dispatch(openModal({ type: 'SupportRequest' }));
      },
    },
  ];
  return (
    <Banner
      className={s.tireServiceBanner}
      bannerTitle={t('pages.tireService.tireServiceBanner.title')}
      contentClassName={s.tireServiceBannerContent}
      breadcrumbs={[
        { label: t('pages.home.title'), to: '/' },
        { label: t(pageTitle) },
      ]}
      links={links}
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
