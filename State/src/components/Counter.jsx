import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React from 'react'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {

    //Read the data from the "store"
    const count = useSelector(state => state.counter.value);

    //Dispatch the action to the "store"
    const dispatch = useDispatch();

    return (
        <div>

            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount())}></button>

        </div>
    )
}

export default Counter
