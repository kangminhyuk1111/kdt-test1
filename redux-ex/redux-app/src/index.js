import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  number: 9,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 };
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
}

const store = configureStore({ reducer: reducer });

const root = ReactDOM.createRoot(document.getElementById('root'), composeWithDevTools());
root.render(
  // Provider 컴포넌트 :  store 라는 props를 반드시 가져야함
  // Provider 하위 컴포넌트들은 store에 저장된 state들을 사용가능
  <Provider store={store}>
    <App2 />
  </Provider>
);
