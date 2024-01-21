
import { createApi, fetchBaseQuery } from '@redux/toolkit/query/react';


export const Api = createApi({
  reducerPath: 'Api',
  BaseQuery: fetchBaseQuery({
    baseUrl: '' ,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '');
      headers.set('X-RapidAPI-Host', '' )

      return headers;
    },
  }),
  endpoints: (builder) => ({
    rockSection: builder.query({
      query: () => {
        'queen'
      },
    }),
  }),
});

export const {
  useRockSectionQuery,
} = Api

/*
handleSection('queen', '#rockSection')
handleSection('katyperry', '#popSection')
handleSection('eminem', '#hipHopSection')

*/
