import React from 'react';
import style from './TodoList.css';


// @Presentation component

TodoList.propTypes = {
    data: React.PropTypes.array.isRequired,
    removeTodo: React.PropTypes.func.isRequired
}

const TodoList = (props) => {
    return (
        <ul className = {style.TodoList}>
            {
                props.data.map(item => {
                    return <li key={item.id} onClick={props.removeTodo(key)}>{item.text}</li>
                })
            }
        </ul>
    );
}
export default TodoList;
