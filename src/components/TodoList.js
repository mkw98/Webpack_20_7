import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    
    const task = props.taskList.map( (task) => 
        <div key={task.id}> 
            <div className={style.taskOnList}>{task.text}
            <button className={style.clearButton} onClick={() => props.remove(task.id)} >X</button>        
            </div>
        </div>
    );

    return (
        <>
            {task}
        </>
    ) 
}

export default TodoList;