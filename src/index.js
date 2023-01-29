import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Index';
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>

        <Provider store={store}>
          <App />
          <ToastContainer/>
        </Provider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

