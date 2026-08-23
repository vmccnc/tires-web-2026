import type { Language } from '@/shared/i18/model';
import { useTranslation } from '@/shared/lib/hooks';
import { RadioGroup } from 'radix-ui';
import s from './LanguageRadio.module.scss';
import clsx from 'clsx';
import { Text } from '@/shared/ui/Text';
import { LANGUAGE_OPTIONS } from '../../config';

type LanguageSelectProps = {
  className?: string;
};

export const LanguageSelectRadio = ({ className }: LanguageSelectProps) => {
  const { language, setLanguage } = useTranslation();

  return (
    <RadioGroup.Root
      className={clsx(s.radioGroup, className)}
      value={language}
      onValueChange={(value) => setLanguage(value as Language)}
    >
      {LANGUAGE_OPTIONS.map(({ value, label }) => (
        <label key={value} className={s.radioItem}>
          <RadioGroup.Item value={value} className={s.radioControl}>
            <RadioGroup.Indicator />
          </RadioGroup.Item>

          <Text variant="bodySmall" className={s.radioItemText}>
            {label}
          </Text>
        </label>
      ))}
    </RadioGroup.Root>
  );
};
