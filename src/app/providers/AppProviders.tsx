import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { I18nProvider } from '@/shared/i18/context';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <I18nProvider> {children}</I18nProvider>
    </Provider>
  );
};
