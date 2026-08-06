import { Facebook, Instagram, Telegram, Youtube } from '@/assets/icons';
import type { SocialItem } from '@/shared/ui/Socials';

export const footerSocials: SocialItem[] = [
  {
    Icon: Facebook,
    href: 'https://www.facebook.com/tires4x4',
    label: 'Facebook',
  },
  {
    Icon: Instagram,
    href: 'https://www.instagram.com/insaturbo4x4/',
    label: 'Instagram',
  },
  {
    Icon: Youtube,
    href: 'https://www.youtube.com/@tires4x4',
    label: 'YouTube',
  },
  {
    Icon: Telegram,
    href: 'https://t.me/tires4x4_bot',
    label: 'Telegram',
  },
];
