import React from 'react';
import style from './TodoList.css';
import PropTypes from 'prop-types';

// @Presentation component

TodoList.propTypes = {
    data: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired
}

const TodoList = (props) => {
    return (
        <ul className = {style.TodoList}>
            {
                props.data.map(item => {
                    return <li key={item.id} onClick={props.removeTodo(item.id)}>{item.text}</li>
                })
            }
        </ul>
    );
}
export default TodoList;
