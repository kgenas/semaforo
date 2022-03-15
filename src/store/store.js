
import { createStore, combineReducers } from 'redux';
import { semaforoReducer } from '../reducers/semaforoReducer';

const reducers = combineReducers({
    semaforo:semaforoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducers,
    composeEnhancers
);
