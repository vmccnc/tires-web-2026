import { Clock, LocationIcon, LongArrow } from '@/assets/icons';
import s from './ContactsBlock.module.scss';
import { Socials } from '@/shared/ui/Socials';
import { contactsData } from './config/contactsData';
import { useTranslation } from '@/shared/lib/hooks';
import { socials } from './config/contactsSocials';
import clsx from 'clsx';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';

type ContactsBlockProps = {
  notPage?: boolean;
  className?: string;
};

export const ContactsBlock = ({ notPage, className }: ContactsBlockProps) => {
  const { t } = useTranslation();
  return (
    <section className={clsx(className, s.contacts)}>
      {notPage && (
        <div className="container">
          <Text variant="h2" as={'h2'} className={s.contactsTitle}>
            {t('pages.contacts.titleComponent')}
          </Text>
        </div>
      )}
      <div className={clsx(s.contactsWrapper, notPage && 'container')}>
        <div className={s.contactsContent}>
          <div className={s.contactsTop}>
            {!notPage && (
              <p className={s.contactsDescription}>
                {t('pages.contacts.description')}
              </p>
            )}
            <div className={s.contactsInfo}>
              {contactsData.map(({ Icon, value, href }) => (
                <a key={href} href={href} className={s.contactsInfoItem}>
                  <span className={s.contactsInfoIconWrapper}>
                    <Icon className={s.contactsInfoIcon} />
                  </span>
                  <span>{value}</span>
                </a>
              ))}

              {notPage && (
                <>
                  <div className={s.contactsInfoItem}>
                    <span className={s.contactsInfoIconWrapper}>
                      <Clock className={s.contactsInfoIcon} />
                    </span>
                    <span>{t('pages.contacts.workingHours')}</span>
                  </div>
                  <Button className={s.contactsInfoButton}>
                    {t('pages.contacts.bookService')}
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className={s.contactsBottom}>
            <h3 className={s.smallTitle}>{t('pages.contacts.titleSocial')}</h3>
            <Socials
              items={socials}
              className={s.contactsSocials}
              linkClassName={s.contactsSocialLink}
              showLabel
            >
              {() => (
                <>
                  <LongArrow className={s.contactsSocialsArrow} />
                </>
              )}
            </Socials>
          </div>
        </div>
        <div className={s.contactsMapWrapper}>
          <h3 className={s.smallTitle}>{t('pages.contacts.titleMap')}</h3>
          <iframe
            className={s.contactsMap}
            src="https://maps.google.com/maps?q=Jerzego%20Badury%2020,%2056-416%20Goszcz,%20Poland&z=16&output=embed"
            title="Mapa lokalizacji INSA Turbo"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={s.contactsAddress}>
            <LocationIcon className={s.contactsIcon} />
            <span>
              <strong> {t('pages.contacts.address')}</strong>{' '}
              {t('pages.contacts.addressValue')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
