import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
    configureStore({
        reducer,
        middleware: [...getDefaultMiddleware()]
    });
}

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== "production",
});