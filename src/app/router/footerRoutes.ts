import { ROUTES } from './paths';

export const footerRoutes = {
  information: [
    {
      labelKey: 'footer.routes.aboutUs',
      path: ROUTES.aboutUs,
    },
    // {
    //   labelKey: 'footer.routes.contacts',
    //   path: ROUTES.contacts,
    // },

    {
      labelKey: 'footer.routes.feedback',
      path: ROUTES.feedback,
    },
  ],

  support: [
    {
      labelKey: 'footer.routes.guarantee',
      path: ROUTES.guarantee,
    },
  ],

  contacts: [
    {
      labelKey: 'footer.routes.contacts',
      path: ROUTES.contacts,
    },
  ],
  legal: [
    {
      labelKey: 'footer.routes.cookiePreferences',
      path: ROUTES.cookiePreferences,
    },
    {
      labelKey: 'footer.routes.privacyPolicy',
      path: ROUTES.privacyPolicy,
    },
    {
      labelKey: 'footer.routes.terms',
      path: ROUTES.terms,
    },
  ],
} as const;
