import React from 'react';
import { Provider } from 'react-redux';
import index from './store';
import App from './App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(
        <Provider store={index}>
            <App />
        </Provider>,
        rootElement
    );
}