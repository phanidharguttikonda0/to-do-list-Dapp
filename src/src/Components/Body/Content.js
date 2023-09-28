import React, { useContext, useEffect, useState } from 'react';
import { addressContext, contractContext } from '../../App';
import css from './Content.module.css';
import EachContent from './EachContent';
/*const array = ["String 1", "String 2", "String 3", "String 4", "String 5", "String 6", "String 7", "String 8", "String 9", "String 10"]
;*/

function Content(props) {
    const contract = useContext(contractContext) ;
    const address = useContext(addressContext) ;
    const [tasks, setTasks] = useState([]) ;
    useEffect(() =>{
        const Main = async () =>{
            console.log(`here is the contract ${contract}`) ;
            console.log(contract)
            console.log(`Here is the address ${address}`)
            if(Object.keys(contract).length !== 0 && address !== undefined){
                try{
                    const tasks = await contract.methods.getTasks().call({from: address}) ;
                    setTasks(tasks) ;
                }catch(error){
                    console.log("A casual Error")
                }
            }
        } ; Main() ;
    }, [props.refresh, address, contract]) ;
    return (
            <div className={css.con}>
           <div className={css.Content}>
           {
                tasks.map((item, index) => <EachContent name={item} key={index} />) 
            }
           </div>
        </div>
    );
}

export default Content;