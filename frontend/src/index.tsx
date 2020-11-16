import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route component={App} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
