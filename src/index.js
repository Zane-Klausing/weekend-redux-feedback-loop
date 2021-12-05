import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const startingState = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments:''
}

const infoForm = (state = startingState, action) => {
    if (action.type === 'INFO_FORM') {
        console.log('action payload',action.payload);
        state = {...state, ...action.payload};
        console.log('THIS IS THE NEW STATE',state)
        return state;
    
}
return state;
}

const reduxStore = createStore(
combineReducers({
    infoForm
}),
applyMiddleware(logger)
);






ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();