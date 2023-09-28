import React, { useState } from 'react';
import css from './AddTask.module.css';
import Task from './Task';
function AddTask(props) {
    const [clicked, unClicked] = useState(false) ;
    return (
        <div className={css.main}>
            <button onClick={() =>unClicked(true)} className={css.btn}> Add Task</button>
            {
                clicked ? <Task close={unClicked} /> : undefined
            }
        </div>
    );
}

export default AddTask;