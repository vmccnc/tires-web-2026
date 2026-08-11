import { baseApi } from '@/shared/api';
import type { WheelSpacerThicknessParams } from '@/features/filters/model';

const BASE_URL = '/api/rdr/spacer_filter';

export const wheelSpacerFilterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheelSpacerFilterBoltDistance: builder.query<string[], void>({
      query: () => ({
        url: `${BASE_URL}/bolt_distance`,
      }),
    }),

    getWheelSpacerFilterBoltInfo: builder.query<string[], string>({
      query: (boltDistance) => ({
        url: `${BASE_URL}/bolt_info/${boltDistance}`,
      }),
    }),

    getWheelSpacerFilterThickness: builder.query<
      number[],
      WheelSpacerThicknessParams
    >({
      query: ({ boltInfo, boltDistance }) => ({
        url: `${BASE_URL}/thickness/${boltInfo}/${boltDistance}`,
      }),
    }),
  }),
});

export const {
  useGetWheelSpacerFilterBoltDistanceQuery,
  useGetWheelSpacerFilterBoltInfoQuery,
  useGetWheelSpacerFilterThicknessQuery,
} = wheelSpacerFilterApi;
