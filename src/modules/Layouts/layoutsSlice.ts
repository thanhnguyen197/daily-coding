import {createSlice} from '@reduxjs/toolkit';
import {Layouts} from 'src/type/react-redux';

const initialState:Layouts = {
    value: 0
};

export const layoutsSlice = createSlice({
    name: 'layouts',
    initialState,
    reducers: {
        increment: (state) => {
            state.value ++;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = layoutsSlice.actions;
export default layoutsSlice.reducer;