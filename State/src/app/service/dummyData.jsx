import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Redux Toolkit Query createApi parçasıdır. Bu, API'yi tanımlamak için kullanılır.
//fetchBaseQuery: Basit bir fetch wrapper'ıdır. baseUrl belirterek, belirli bir API'ye istek göndermek için temel yapı sağlar.
export const productsApi = createApi({
    reducerPath: "products", //Api için kulanılcak isim
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }), //Tüm isteklerde kullanılacak temel URL'dir
    endpoints: (builder) => ({ //endpoint yapılcak işlemleri gösteriyor
        getAllProduct: builder.query({
            query: () => "/products",
            // query: bir get isteğini temsil eder
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products/add",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newProduct,
            }),
        }),
    }),
});

// `use${GetAllProduct}Query`

export const { useGetAllProductQuery, useGetProductByIdQuery, useAddNewProductMutation } = productsApi;