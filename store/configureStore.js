import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../slices'

const reducer = rootReducer;
const middleware = getDefaultMiddleware();

const makeStore = (context) => {
    const store = configureStore({
        reducer,
        middleware,
        devTools: true,
    });
    return store;
}

const wrapper = createWrapper(makeStore, {
    debug: true,
});

export default wrapper;

