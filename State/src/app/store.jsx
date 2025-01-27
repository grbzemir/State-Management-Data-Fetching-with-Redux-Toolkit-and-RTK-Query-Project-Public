import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { productsApi } from './service/dummyData';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer, //Reducer'ı tanımlar
    },

    // Middleware, API istekleri yapılırken gerekli işlemleri (önbellekleme, yenileme vb.) yönetir.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});