const redux = require('redux');
const createStore = redux.createStore;

const initialSatte = {
    counter: 0
};

//Reducer
const rootReducer = (state = initialSatte, action) => {
    if(action.type === 'INC_COUNTER') {
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log('store state: ',store.getState());

//Subscription

store.subscribe(() => {
    console.log('[subscribtion]',store.getState())
});

//Dispaching Action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 14});
console.log("store state upgraded: ", store.getState());