/**
 * configureStore.js
 */

 import {createStore} from 'redux';
 import { Reducer, initialState } from './reducer';


 /* -----------------
ConfigureStore()
- returns stores 
------------------ */
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}

