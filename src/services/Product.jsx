import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
    deleteDataById:builder.mutation({
      query: (id) => {
        return {
          url: `products/${id}`,
          method:"DELETE"
        }
      }
    }),
    createCardData:builder.mutation({
        query: (newData) => ({
          url: 'products',
          method: 'POST',
          body: newData,
        }),
    }),
    updateCardData:builder.mutation({
      query: ({ id, ...newData }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: newData,
      }),
  })

  }),
})

export  const { useGetAllProductsQuery ,useGetProductsByIdQuery ,useDeleteDataByIdMutation ,useCreateCardDataMutation ,useUpdateCardDataMutation} = productApi