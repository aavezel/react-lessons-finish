import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({type: action});
    }
    return next(action);
}

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;