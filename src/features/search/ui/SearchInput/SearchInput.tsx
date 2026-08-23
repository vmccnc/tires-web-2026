import clsx from 'clsx';
import { type ChangeEvent } from 'react';

import { CloseIcon, SearchIcon } from '@/assets/icons';

import s from './SearchInput.module.scss';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';

export type SearchInputProps = {
  className?: string;
  inputClassName?: string;
  value: string;
  // defaultValue?: string;
  placeholder?: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: (query: string) => void;
  onHideInput?: () => void;
};

export const SearchInput = ({
  className,
  inputClassName,
  value,
  placeholder,
  onSearchChange,
  onHideInput,
}: SearchInputProps) => {
  const { t } = useTranslation();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.currentTarget.value;
    onSearchChange(nextValue);
  };

  const resolvedPlaceholder = placeholder ?? t('header.search.placeholder');
  const handleResetInput = () => {
    if (value) {
      onSearchChange('');
      return;
    }
    onHideInput?.();

    // setShowSearchInput(false);
  };

  return (
    <div className={clsx(s.searchInput, className)}>
      <SearchIcon className={s.searchIcon} aria-hidden="true" />

      <Input
        className={clsx(s.searchInputField, inputClassName)}
        type="search"
        value={value}
        placeholder={resolvedPlaceholder}
        aria-label={resolvedPlaceholder}
        autoComplete="off"
        onChange={handleChange}
      />
      <Button
        variant="unset"
        className={s.searchCloseBtn}
        onClick={handleResetInput}
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
