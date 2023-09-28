import React, { useContext } from 'react';
import { addressContext, contractContext } from '../../App';
import Delete from '../../delete.png';
import { refreshContext, refreshValue } from './Body';
import css from './EachContent.module.css';
function EachContent(props) {
    const contract = useContext(contractContext) ;
    const address = useContext(addressContext) ;
    const refresh = useContext(refreshValue) ;
    const refreshChange = useContext(refreshContext) ;
        return (<div className={css.main}>
            <h5 className={css.in}>
                {
                    props.name
                }
            </h5>
            <button onClick={async () => {
                await contract.methods.markascompleted(props.name).send({from: address,
                gas: '300000'})
                refreshChange(!refresh) ;
                console.log(refresh) ;
            }} className={css.btn}>
                <img src={Delete} alt=''/>
            </button>
        </div>
    );
}

export default EachContent;