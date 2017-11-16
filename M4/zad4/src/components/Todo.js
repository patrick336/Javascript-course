import React from 'react';
import style from './Todo.css';
import PropTypes from 'prop-types';

// @Presentation component

const Todo = (props) => {
    return (
        <li className = {style.Todo} onClick={() => props.removeTodo(props.item.id)}>
            {props.item.text}
        </li>
    );
}

Todo.propTypes = {
    item: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default Todo;
