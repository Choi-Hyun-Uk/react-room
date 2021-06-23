import { HYDRATE } from 'next-redux-wrapper';
import roomSlice from './roomSlice';

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return combineReducers({
      [roomSlice.name]: roomSlice.reducer,
    })(state, action);
};