import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => `client/products/`,
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => `client/customers/`,
      providesTags: ["Customers"],
    })
  }),
});

export const { useGetUsersQuery, useGetProductsQuery, useGetCustomersQuery } = api;
