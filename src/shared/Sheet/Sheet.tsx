import * as Dialog from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '@/assets/icons';
import s from './Sheet.module.scss';

type SheetSide = 'left' | 'right';

type SheetProps = {
  trigger: ReactNode;
  children: ReactNode;
  side?: SheetSide;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Sheet = ({
  trigger,
  children,
  side = 'right',
  className,
  open,
  onOpenChange,
}: SheetProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />

        <Dialog.Content className={clsx(s.content, s[side], className)}>
          <Dialog.Title className={s.visuallyHidden}>Menu</Dialog.Title>

          <Dialog.Close className={s.close}>
            <CloseIcon className={s.closeIcon} />
          </Dialog.Close>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
