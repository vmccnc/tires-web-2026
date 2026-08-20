import s from './HeaderDesktop.module.scss';
import { headerRoutes } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import { HeaderControls } from '@/widgets/Header/HeaderControls';
import { Logo } from '@/shared/ui/Logo/Logo';
import { SearchInput } from '@/features/search/ui/SearchInput';
import clsx from 'clsx';

type HeaderDesktopProps = {
  onSearchChange: (query: string) => void;
  search: string;
};

export const HeaderDesktop = ({
  onSearchChange,
  search,
}: HeaderDesktopProps) => {
  return (
    <div className={s.headerDesktop}>
      <div className={s.headerTop}>
        <div className={clsx('container', s.headerTopContent)}>
          <NavBar
            items={headerRoutes.pages}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />
          <HeaderControls controls={headerRoutes.controls} />
        </div>
      </div>
      <div className={s.headerBottom}>
        <div className={clsx('container', s.wrapper)}>
          <Logo />
          <NavBar
            items={headerRoutes.catalog}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />

          <SearchInput
            className={s.headerInput}
            value={search}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
    </div>
  );
};
