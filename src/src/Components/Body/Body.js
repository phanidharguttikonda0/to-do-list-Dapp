import React, { useState } from 'react';
import AddTask from './AddTask';
import css from './Body.module.css';
import Content from './Content';

export const refreshContext = React.createContext() ;
export const refreshValue = React.createContext() ;
function Body(props) {
    const [refresh, changerefresh] = useState(false);
    return (
        <refreshContext.Provider value={changerefresh}>
        <refreshValue.Provider value={refresh}>
        <div className={css.body}>
            <AddTask />
            <Content refresh={refresh} changerefresh={changerefresh}/>
        </div>
        </refreshValue.Provider>
        </refreshContext.Provider>
    );
}

export default Body;