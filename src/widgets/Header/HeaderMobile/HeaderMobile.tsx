import { Logo } from '@/shared/ui/Logo/Logo';
import s from './HeaderMobile.module.scss';
import { SearchIcon } from '@/assets/icons';
import { headerRoutes, ROUTES } from '@/app/router';
import { Button } from '@/shared/ui/Button';
import { SearchInput } from '@/features/search/ui/SearchInput';
import { useState } from 'react';
import { BurgerMenu } from '@/shared/ui/BurgerMenu';
import { Sheet } from '@/shared/Sheet';
import { MobileMenu } from './HeaderMobileMenu';
import { HeaderControls } from '../HeaderControls';
import { useNavigate } from 'react-router-dom';

type HeaderMobileProps = {
  onSearchChange: (query: string) => void;
  search: string;
};

export const HeaderMobile = ({ onSearchChange, search }: HeaderMobileProps) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const switchToSearch = () => {
    setShowSearchInput((prev) => !prev);
  };

  const hideSearch = () => {
    setShowSearchInput(false);
    navigate(ROUTES.home);
  };

  return (
    <div className={s.headerMobile}>
      <div className="container">
        {showSearchInput ? (
          <SearchInput
            className={s.input}
            value={search}
            onSearchChange={onSearchChange}
            inputClassName={s.inputField}
            onHideInput={hideSearch}
          />
        ) : (
          <div className={s.wrapper}>
            <Logo />
            <div className={s.controls}>
              {/* <Button asChild variant="unset" className={s.btn}>
                <Link to={ROUTES.cart}>
                  <CartIcon className={s.icon} />
                </Link>
              </Button> */}

              <HeaderControls controls={headerRoutes.controlsMobile} />
              <Button
                variant="unset"
                className={s.btn}
                onClick={switchToSearch}
              >
                <SearchIcon className={s.icon} />
              </Button>
              <Sheet
                side="left"
                trigger={
                  <Button variant="unset" className={s.btn}>
                    <BurgerMenu />
                  </Button>
                }
                open={isMenuOpen}
                onOpenChange={setIsMenuOpen}
                className={s.menuContent}
              >
                <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
              </Sheet>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
