import { InfoPageLayout } from '@/layouts/InfoPageLayout';
import s from './Contacts.module.scss';
import { ContactsBlock } from '@/widgets/Contacts';

export const Contacts = () => {
  return (
    <InfoPageLayout
      title="pages.contacts.title"
      className={s.contactsPage}
      titleClassName={s.contactsPageTitle}
    >
      <ContactsBlock />
    </InfoPageLayout>
  );
};
