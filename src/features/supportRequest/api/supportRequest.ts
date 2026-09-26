import { baseApi } from '@/shared/api';
import type { SupportRequestPayloadType } from '../model';

const BASE_URL = '/api/tires/contact';

export const supportRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postRequest: builder.mutation<void, SupportRequestPayloadType>({
      query: (body) => ({
        url: BASE_URL,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { usePostRequestMutation } = supportRequestApi;
