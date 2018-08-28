import React from 'react';
import ReactDOM from 'react-dom';

// import redux components
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import files
import rootReducer from './store/reducers/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux dev tools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// app component wrapped in redux components
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();