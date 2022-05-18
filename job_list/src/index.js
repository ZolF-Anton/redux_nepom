import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const getRoot = document.getElementById('root');
const root = createRoot(getRoot);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
