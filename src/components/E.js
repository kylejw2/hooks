import React, { useContext } from 'react';
import { arrayContext } from './A';

const E = () => {
    const array = useContext(arrayContext);

    return (
        <div>
            {array.map(ele => <div>{ele}</div>)}
            <button>Add Element</button>
        </div>
    )
}

export default E;