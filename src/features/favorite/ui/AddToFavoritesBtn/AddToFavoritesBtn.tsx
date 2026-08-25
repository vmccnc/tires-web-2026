import clsx from 'clsx';

import s from './AddToFavoritesBtn.module.scss';
import { Button } from '@/shared/ui/Button';
import { HeartIcon } from '@/assets/icons';

type LikeBtnProps = {
  id?: number;
  className?: string;
  iconClassName?: string;
};

export const AddToFavoritesBtn = ({
  className,
  iconClassName,
}: LikeBtnProps) => {
  const handeAddToFavorites = () => {};
  return (
    <Button
      variant="unset"
      className={clsx(className, s.addToFavoritesBtn)}
      onClick={handeAddToFavorites}
    >
      <HeartIcon className={clsx(iconClassName, s.icon)} />
    </Button>
  );
};
