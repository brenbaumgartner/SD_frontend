import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './reducks/store/store';
import { Provider } from 'react-redux';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory, History } from 'history';
import './assets/style.css'


/* const history = History.createBrowserHistory();
export const store = createStore(history); */

export const store = createStore();

ReactDOM.render(
    <Provider store={store}>
       
            <App />
        
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
