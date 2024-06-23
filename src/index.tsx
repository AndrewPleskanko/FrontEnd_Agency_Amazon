import React from 'react';
import { Provider } from 'react-redux';
import store from '../../agency-amazon-app/src/store';
import App from './App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootElement
    );
}