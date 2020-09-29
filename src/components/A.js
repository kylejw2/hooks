import React, { useReducer } from 'react';
import B from './B';

export const arrayContext = React.createContext();

const initialState = [1, 2, 3, 4];
const reducer = (state, action) => {
    switch(action) {
        case 'Add element':
            return [...state, state.length + 1];
        case 'Remove element':
            const prev = [...state];
            prev.pop();
            return prev;
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

const A = () => {
    const [array, dispatch] = useReducer(reducer, initialState);
    return (
        <arrayContext.Provider value={{arrayState: array, arrayDispatch: dispatch}}>
            <B />
        </arrayContext.Provider>
    )
}

export default A;