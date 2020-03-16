import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const controls = {
    inc: {
        label: 'Increment',
        action: 'INCREMENT',
    },
    dec: {
        label: 'Decrement',
        action: 'DECREMENT',
    },
    add: {
        label: 'Add 5',
        action: 'ADD',
        value: 5,
    },
    sub: {
        label: 'Subtract 5',
        action: 'SUBTRACT',
        value: 5,
    }
}
 
const Counter = props => (
    <div>
        <CounterOutput value={props.ctr} />
        {Object.keys(controls).map(key => (
            <CounterControl
                key={key}
                label={controls[key].label}
                clicked={props.onModifyCounter.bind(this,controls[key].action, controls[key].value)} />
        ))}
        <hr />
        <button onClick={props.onStoreResult}>Store result</button>
        <ul>
            {props.storedResults.map(result => (
                <li onClick={props.onDeleteResult.bind(this,result.id)} key={result.id}>{result.value}</li>
            ))}
        </ul>
    </div>
);
 
const mapStateToProps = state => ({ 
    ctr: state.counter,
    storedResults: state.results
});
 
const mapDispatchToProps = dispatch => ({
    onModifyCounter: (type, value) => dispatch({ type, value }),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: (elementId) => dispatch({type: 'DELETE_RESULT',resultElementId: elementId})
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);