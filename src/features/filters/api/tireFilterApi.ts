import { baseApi } from '@/shared/api';
import type { TireDiameterParams } from '@/features/filters/model';

const BASE_URL = '/api/rdr/tire_filter';

export const tireFilterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTireFilterWidth: builder.query<number[], void>({
      query: () => ({
        url: `${BASE_URL}/width`,
      }),
    }),
    getTireFilterProfile: builder.query<number[], number>({
      query: (width) => ({
        url: `${BASE_URL}/profile/${width}`,
      }),
    }),
    getTireFilterDiameter: builder.query<number[], TireDiameterParams>({
      query: ({ profile, width }) => ({
        url: `${BASE_URL}/diameter/${profile}/${width}`,
      }),
    }),
  }),
});

export const {
  useGetTireFilterWidthQuery,
  useGetTireFilterProfileQuery,
  useGetTireFilterDiameterQuery,
} = tireFilterApi;
