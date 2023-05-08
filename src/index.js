import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const subInfo = {
    feeling_data: "",
    understanding_data: "",
    supported_data: "",
    comments_data: ""
}

const submissionInformation = (state = subInfo, action) => {
    if (action.type === 'SUB_INFO') {
        return {
            //updates specific propety of the state with out creating a new object
            ...state,
            ...action.payload
        };
    }
    return state;
};

const theStore = createStore(
    combineReducers({
        submissionInformation
    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
