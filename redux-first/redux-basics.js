const redux = require('redux');
const createStore = redux.createStore;

const initialSatte = {
    couter: 0
};

//Reducer
const rootReducer = (state = initialSatte, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log('store state: ',store.getState());

//Dispaching Action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 14});
console.log("store state upgraded: ", store.getState());

//Subscription