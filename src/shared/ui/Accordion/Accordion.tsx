import * as RadixAccordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import s from './Accordion.module.scss';
import type { ReactNode } from 'react';

type AccordionItem = {
  value: string;
  header: ReactNode;
  children: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  itemClassName?: string;
  defaultValue?: string;
  activeItem?: string;
  onActiveItemChange?: (value: string) => void;
  contentClassName?: string;
  triggerClassName?: string;
};

export const Accordion = ({
  items,
  className,
  itemClassName,
  triggerClassName,
  defaultValue,
  activeItem,
  onActiveItemChange,
  contentClassName,
}: AccordionProps) => {
  return (
    <RadixAccordion.Root
      type={'single'}
      collapsible
      className={className}
      defaultValue={defaultValue}
      value={activeItem}
      onValueChange={onActiveItemChange}
    >
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.value}
          value={item.value}
          id={item.value}
          className={itemClassName}
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className={triggerClassName}>
              {item.header}
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content
            className={clsx(s.accordionContent, contentClassName)}
          >
            {item.children}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};
