import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from 'Modules/Layouts/layoutsSlice';
import {RootState} from 'src/type/react-redux';

const Counter = () => {
    const count = useSelector((state:RootState) => {
        return state.layouts.value;
    });
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
