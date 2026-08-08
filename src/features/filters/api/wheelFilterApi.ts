import { baseApi } from '@/shared/api';
import type {
  WheelBoltSpacingParams,
  WheelCentralBoreDiameterParams,
  WheelEtParams,
} from '@/features/filters/model';

const BASE_URL = '/api/rdr/wheel_filter';

export const wheelFilterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheelFilterWidth: builder.query<number[], void>({
      query: () => ({
        url: `${BASE_URL}/width`,
      }),
    }),

    getWheelFilterDiameter: builder.query<number[], number>({
      query: (width) => ({
        url: `${BASE_URL}/diameter/${width}`,
      }),
    }),

    getWheelFilterCentralBoreDiameter: builder.query<
      number[],
      WheelCentralBoreDiameterParams
    >({
      query: ({ diameter, width }) => ({
        url: `${BASE_URL}/central_bore_diameter/${diameter}/${width}`,
      }),
    }),

    getWheelFilterBoltSpacing: builder.query<string[], WheelBoltSpacingParams>({
      query: ({ centralBoreDiameter, diameter, width }) => ({
        url: `${BASE_URL}/bolt_spacing/${centralBoreDiameter}/${diameter}/${width}`,
      }),
    }),

    getWheelFilterEt: builder.query<number[], WheelEtParams>({
      query: ({ boltSpacing, centralBoreDiameter, diameter, width }) => ({
        url: `${BASE_URL}/et/${boltSpacing}/${centralBoreDiameter}/${diameter}/${width}`,
      }),
    }),
  }),
});

export const {
  useGetWheelFilterWidthQuery,
  useGetWheelFilterDiameterQuery,
  useGetWheelFilterCentralBoreDiameterQuery,
  useGetWheelFilterBoltSpacingQuery,
  useGetWheelFilterEtQuery,
} = wheelFilterApi;
