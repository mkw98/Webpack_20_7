import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
    <ul className={style.TodoList}>
        {props.taskList.map(task => <li key={task.id} onClick={() => props.remove(task.id)}>{task.text}</li>)}
    </ul>
);

export default TodoList;