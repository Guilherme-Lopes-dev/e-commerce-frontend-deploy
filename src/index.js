import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from "react-redux"
import productsReducer, { productsFetch } from "./features/productsSlice"
import { productsApi } from './features/productsApi';
import cartSlice, {getTotals} from './features/cartSlice';


const store = configureStore({
  reducer: {
    products: productsReducer, 
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  }, 
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch())
store.dispatch(getTotals())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


