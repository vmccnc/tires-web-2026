import { TireServiceBanner } from '@/widgets/TireService/ui/TireServiceBanner';
import s from './TireService.module.scss';
import { TireServices } from '@/widgets/TireService/ui/TireServiceServices';
import { TireServicePrice } from '@/widgets/TireService/ui/TireServicePrice';
import { useState } from 'react';
import { TireServiceAdvantages } from '@/widgets/TireService/ui/TireServiceAdvantages/TireServiceAdvantages';
import { ContactsBlock } from '@/widgets/Contacts';

export const TireService = () => {
  const title = 'pages.tireService.title';
  const [activeService, setActiveService] = useState('');

  const handleServiceClick = (value: string) => {
    setActiveService(value);

    requestAnimationFrame(() => {
      document.getElementById(value)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section className={s.tireService}>
      <h1 className="visuallyHidden">{title}</h1>
      <TireServiceBanner pageTitle={title} />
      <TireServices onServiceClick={handleServiceClick} />
      <TireServicePrice
        onActiveItemChange={setActiveService}
        activeItem={activeService}
      />
      <TireServiceAdvantages />
      <ContactsBlock notPage />
    </section>
  );
};
