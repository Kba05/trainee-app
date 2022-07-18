import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import authReducer from './features/auth/authSlice';
import categoriesReducer from './features/traineePage/Category/categoriesSlice';
import resumesReducer from './features/traineePage/resumeList/resumesSlice';

const store = configureStore({
  reducer:{
    user: authReducer,
    categories: categoriesReducer,
    resumes :  resumesReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
);