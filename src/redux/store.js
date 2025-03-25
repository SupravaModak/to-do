import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: { tasks: taskReducer, auth: authReducer },
  preloadedState: JSON.parse(localStorage.getItem('reduxState')) || {}
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
