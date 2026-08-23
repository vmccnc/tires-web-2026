import type { ElementType, ReactNode } from 'react';
import clsx from 'clsx';

import s from './Text.module.scss';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption';

type TextProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: TextVariant;
  className?: string;
};

export const Text = ({
  children,
  as: Component = 'p',
  variant = 'body',
  className,
}: TextProps) => {
  return (
    <Component className={clsx(s[variant], className)}>{children}</Component>
  );
};
