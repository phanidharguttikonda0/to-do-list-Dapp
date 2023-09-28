import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { addressContext, contractContext } from '../../App';
import { refreshContext, refreshValue } from './Body';
import css from './Task.module.css';
function Task(props) {
    const [taskName, changeTask] = useState("") ;
    const address = useContext(addressContext)
    const contract = useContext(contractContext)
    const refresh = useContext(refreshValue) ;
    const refreshChange = useContext(refreshContext) ;
    return ReactDOM.createPortal(
        <div className={css.main}>
            <input type='text' placeholder='add a task' value={taskName} 
            onChange={ (e) => changeTask(e.target.value) }/>
            <div className={css.btn}>
                <button onClick={()=>{props.close(false)}}> close</button>
                <button onClick={async () =>{
                    if(taskName.length !== 0){
                        try{
                            await contract.methods.add(taskName).send({
                                from: address,
                                gas:'300000'
                            }) ;
                            refreshChange(!refresh)
                        }catch(err){
                            if(taskName.length > 12){
                                alert('A taskName should be maximum of 16 characters')
                            }else{
                                alert(`The task ${taskName} is Already Exists`)
                            }
                            console.log('The todo was already exist')
                        }
                        props.close(false)
                    }
                }}> add </button>
            </div>
        </div>, document.getElementById("add")
    );
}

export default Task;