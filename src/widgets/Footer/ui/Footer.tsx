import s from './Footer.module.scss';
import { FOOTER_COLUMNS, footerSocials } from '@/widgets/Footer/config';
import { FooterColumn } from './FooterColumn';
import { NavBar } from '@/shared/ui/NavBar';
import { footerRoutes } from '@/app/router/footerRoutes';
import { Socials } from '@/shared/ui/Socials';
import { Logo } from '@/shared/ui/Logo/Logo';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { LanguageSelectRadio } from '@/features/language/ui';

export const Footer = () => {
  const { t } = useTranslation();
  const informationLinks = [
    ...footerRoutes.information,
    ...footerRoutes.support,
    ...footerRoutes.contacts,
  ];
  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={s.footerTop}>
          <ul className={s.footerDesktopColumns}>
            {FOOTER_COLUMNS.map(({ id, title }) => (
              <FooterColumn
                key={id}
                title={t(title)}
                className={s.column}
                titleClassName={s.columnTitle}
              >
                {id === 'information' && (
                  <NavBar
                    items={footerRoutes.information}
                    className={s.footerNavBar}
                    navLinkClassName={s.footerNavBarLink}
                  />
                )}
                {id === 'support' && (
                  <NavBar
                    items={footerRoutes.support}
                    className={s.footerNavBar}
                    navLinkClassName={s.footerNavBarLink}
                  />
                )}
                {id === 'contacts' && (
                  <Text variant="bodySmall">{t('footer.contacts')}</Text>
                )}
                {id === 'address' && (
                  <Text variant="bodySmall">{t('footer.address')}</Text>
                )}
              </FooterColumn>
            ))}
          </ul>
          <Socials
            items={footerSocials}
            className={s.footerSocials}
            linkClassName={s.footerSocialLink}
            iconClassName={s.footerSocialIcon}
          />
          <div className={s.footerMobile}>
            <FooterColumn
              title={t('footer.columns.information')}
              className={s.column}
              titleClassName={s.columnTitle}
            >
              <NavBar
                items={informationLinks}
                className={s.footerNavBar}
                navLinkClassName={s.footerNavBarLink}
              />
            </FooterColumn>
            <FooterColumn
              title={t('footer.columns.address')}
              className={s.column}
              titleClassName={s.columnTitle}
            >
              <Text variant="bodySmall">{t('footer.address')}</Text>
            </FooterColumn>
            <div className={s.column}>
              <LanguageSelectRadio />
            </div>
          </div>
        </div>
        <div className={s.footerBottom}>
          <NavBar
            items={footerRoutes.legal}
            className={s.footerLegalMobile}
            navLinkClassName={s.footerLegalLink}
          />
          <div className={s.wrapper}>
            <p className={s.copyright}>{t('footer.copyright')}</p>
            <NavBar
              items={footerRoutes.legal}
              className={s.footerLegalDesktop}
              navLinkClassName={s.footerLegalLink}
            />
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};
