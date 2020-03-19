import * as actionTypes from './actions';

const initialState = {
    persons: [],
    counter: 0
}

const constructPerson = (state,id) => {
    const newPerson = {
        id: id,
        name: state.name,
        age: state.age
    }

    return newPerson;
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: [constructPerson(action.state,state.counter)].concat(state.persons),
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