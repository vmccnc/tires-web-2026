import { CircleCheck } from '@/assets/icons';
import { Text } from '@/shared/ui/Text';
import s from './SupportRequestStatus.module.scss';
import clsx from 'clsx';

type SupportRequestStatusProps = {
  title: string;
  text: string;
  className?: string;
  iconType: 'success' | 'error';
};

export const SupportRequestStatus = ({
  title,
  text,
  iconType,
  className,
}: SupportRequestStatusProps) => {
  return (
    <div className={clsx(className, s.status)}>
      <Text as={'h2'} variant="h2" className={s.statusTitle}>
        {title}
      </Text>
      <Text variant="bodySmall" className={s.statusText}>
        {text}
      </Text>

      <span className={s.statusIconWrapper}>
        {iconType === 'success' && (
          <CircleCheck className={clsx(s.statusIcon, s.statusIconSuccess)} />
        )}
      </span>
    </div>
  );
};
