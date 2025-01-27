import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { productsApi } from './service/dummyData';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },


});