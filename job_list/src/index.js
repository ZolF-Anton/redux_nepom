import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

//const getRoot = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <>
            <h1>HEader HEader</h1>
            <App />
        </>
    </Provider>
);
