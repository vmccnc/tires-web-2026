import clsx from 'clsx';
import s from './Section.module.scss';
import { Text } from '@/shared/ui/Text';
import type { ReactNode } from 'react';

type SectionProps = {
  title: string | ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  wrapperClassName?: string;
  hasWrapper?: boolean;
};

export const Section = ({
  title,
  children,
  className,
  titleClassName,
  wrapperClassName,
  hasWrapper,
}: SectionProps) => {
  return (
    <section className={clsx(s.section, className)}>
      <div className="container">
        <div className={clsx(hasWrapper && s.wrapper, wrapperClassName)}>
          <Text className={clsx(s.title, titleClassName)} as="h2" variant="h2">
            {title}
          </Text>
          {children}
        </div>
      </div>
    </section>
  );
};
