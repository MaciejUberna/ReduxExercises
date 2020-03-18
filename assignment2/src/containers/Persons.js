import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const persons =
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

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: persons[Math.floor(Math.random()*20)],
            age: Math.ceil( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => { 
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

export default Persons;