// import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';

// let reducers = combineReducers({
//     cartReducer: cartReducer,
// })

// const rootReducer = (state,  action) => {
//     return reducers(state, action)
// }

// export default rootReducer;


import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here as needed
});

export default rootReducer;
