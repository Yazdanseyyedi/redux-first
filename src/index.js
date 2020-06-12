import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import CounterReducer from './reducers/counter'
import resultReducer from './reducers/result'

const reducer=combineReducers({
    ctr:CounterReducer,
    res:resultReducer
})

const store=createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
