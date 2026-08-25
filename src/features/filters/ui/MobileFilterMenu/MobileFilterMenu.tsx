import { Sheet } from '@/shared/Sheet';
import { Button } from '@/shared/ui/Button';
import s from './MobileFilterMenu.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { FilterIcon } from '@/assets/icons';
import { Text } from '@/shared/ui/Text';
import type { ProductFilterType } from '../../model';
import { ProductFilter } from '../ProductFilter';
type MobileFilterMenuProps = {
  filterType: ProductFilterType;
  page?: string;
  className?: string;
  triggerClassName?: string;
};

export const MobileFilterMenu = ({
  filterType,
  page,
  className,
  triggerClassName,
}: MobileFilterMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Sheet
      side="left"
      trigger={
        <Button variant="unset" className={clsx(triggerClassName, s.btn)}>
          <span>фильтр</span>
          <FilterIcon className={s.icon} />
        </Button>
      }
      open={isMenuOpen}
      onOpenChange={setIsMenuOpen}
      className={clsx(s.sheet, className)}
    >
      <div className="container">
        <div className={s.sheetContent}>
          <Text variant="h2" as={'h3'} className={s.title}>
            фильтры
          </Text>
          <ProductFilter filterType={filterType} page={page} />
        </div>
      </div>
    </Sheet>
  );
};
