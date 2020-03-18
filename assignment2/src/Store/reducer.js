import * as actionTypes from './actions';

const initialState = {
    persons: [],
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat(action.newPerson),
                counter: state.counter + 1
            };
        case actionTypes.DEL_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.id)
            }
        default:
            return state;
    };

};

export default reducer;