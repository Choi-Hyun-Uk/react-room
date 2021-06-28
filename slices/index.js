import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import registerSlice from './registerSlice';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    default: {
      const combinedReducer = combineReducers({
        register: registerSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;