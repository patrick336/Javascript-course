import React from 'react';
import style from './Todo.css';
import PropTypes from 'prop-types';

// @Presentation component

const Todo = (props) => {
    return (
        <li key = {props.id} onClick={() => props.removeTodo(props.id)}>
            {props.text}
        </li>
    );
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default Todo;
