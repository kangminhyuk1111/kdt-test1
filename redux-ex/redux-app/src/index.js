import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App4 from './App4';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';

const store = configureStore({ reducer: rootReducer }, composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider 컴포넌트 :  store 라는 props를 반드시 가져야함
  // Provider 하위 컴포넌트들은 store에 저장된 state들을 사용가능
  <Provider store={store}>
    <App4 />
  </Provider>
);
