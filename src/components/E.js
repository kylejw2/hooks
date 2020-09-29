import React, { useContext } from 'react';
import { arrayContext } from './A';

const E = () => {
    const {arrayState, arrayDispatch} = useContext(arrayContext);

    return (
        <div>
            {arrayState.map(ele => <div key={ele}>{ele}</div>)}
            <button onClick={() => arrayDispatch('Add element')}>Add Element</button>
            <button onClick={() => arrayDispatch('Remove element')}>Remove Element</button>
            <button onClick={() => arrayDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default E;