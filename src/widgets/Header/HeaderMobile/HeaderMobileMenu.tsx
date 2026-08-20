import { headerRoutes } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { NavLink } from 'react-router-dom';
import s from './HeaderMobile.module.scss';
import { Arrow } from '@/assets/icons';

type MobileMenuProps = {
  onNavigate: () => void;
};

export const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const { t } = useTranslation();

  const routes = [...headerRoutes.catalog, ...headerRoutes.pages];

  return (
    <nav className={s.menu}>
      {routes.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={s.menuItem}
          onClick={onNavigate}
        >
          <span>{t(item.labelKey)}</span>
          <Arrow className={s.menuIcon} />
        </NavLink>
      ))}
    </nav>
  );
};
