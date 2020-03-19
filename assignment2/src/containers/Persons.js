import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../Store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const Persons = (props) => {
        //console.log('Pesrons: ',props.persons)
        return (
            <div>
                <AddPerson personAdded={props.onPersonAdd} />
                {props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={props.onPersonDel.bind(this,person.id)}/>
                ))}
            </div>
        );

}

const mapStateToProps = state => ({
    persons: state.persons,
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    onPersonAdd: (state) => dispatch({type: actionTypes.ADD_PERSON,state: state}),
    onPersonDel: (id) => dispatch({type: actionTypes.DEL_PERSON,id: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);