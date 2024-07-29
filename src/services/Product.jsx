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

    })

  }),
})

export  const { useGetAllProductsQuery ,useGetProductsByIdQuery ,useDeleteDataByIdMutation} = productApi