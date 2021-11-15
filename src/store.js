import reducer from "./reducers";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = ({ getState } ) => (next) => (action) => {
 
    return next(action);
} 

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware( thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELATED_ACTION'
    }), 2000);
}
store.dispatch(delayedActionCreator(3000));

export default store