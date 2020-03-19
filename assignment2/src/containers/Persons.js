import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../Store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const names =
    [
        'Max',
        'Maciek',
        'Marek',
        'Ollin',
        'Rysiek',
        'Ola',
        'Monika',
        'Anna',
        'Kasia',
        'Zeus',
        'Ares',
        'Apollo',
        'Poseidon',
        'Atena',
        'Łukasz',
        'Daniel',
        'Aleksandra',
        'Solidariusz',
        'Irena',
        'Paździoch'
    ];

const personAdd = (personId) => {
    const newPerson = {
        id: personId,
        name: names[Math.floor(Math.random()*names.length)],
        age: Math.ceil( Math.random() * 40 )
    }

    return newPerson;
}

const Persons = (props) => {

        return (
            <div>
                <AddPerson personAdded={props.onPersonAdd.bind(this,personAdd(props.counter))} />
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
    onPersonAdd: (personObj) => dispatch({type: actionTypes.ADD_PERSON,newPerson: personObj}),
    onPersonDel: (id) => dispatch({type: actionTypes.DEL_PERSON,id: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);