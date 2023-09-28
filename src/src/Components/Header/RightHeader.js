import React, { useContext } from 'react';
import { addressContext } from '../../App';

function RightHeader(props) {
    const address = useContext(addressContext) ;
    console.log(address) ;
    return (
        <div>
            <h3>
                Address : {address}
            </h3>
        </div>
    );
}

export default RightHeader;