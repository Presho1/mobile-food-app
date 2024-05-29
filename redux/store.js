// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers/index';

// export default function configureStore(initialState) {
//     const store = createStore(reducer, initialState);
//     return store;
// }

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

