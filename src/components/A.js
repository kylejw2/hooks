import React, { useState } from 'react';
import B from './B';

export const arrayContext = React.createContext();

const A = () => {
    const [array, setArray] = useState([1, 2, 3, 4]);
    return (
        <arrayContext.Provider value={array}>
            <B />
        </arrayContext.Provider>
    )
}

export default A;