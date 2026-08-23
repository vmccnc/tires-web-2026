import clsx from 'clsx';
import s from './BurgerMenu.module.scss';

type BurgerMenuProps = {
  className?: string;
};

export const BurgerMenu = ({ className }: BurgerMenuProps) => {
  return (
    <div className={clsx(className, s.burgerMenu)}>
      <div className={s.burgerElem} />
    </div>
  );
};
