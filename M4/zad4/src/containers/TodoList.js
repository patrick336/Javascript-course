import React from 'react';
import style from './TodoList.css';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

// @Presentation component

const TodoList = (props) => {
    return (
        <ul className = {style.TodoList}>
            {
                props.data.map(item =>
                    <Todo key = {item.id} item = {item} removeTodo = { props.removeTodo } />
                )
            }
        </ul>
    );
}

TodoList.propTypes = {
    data: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList;
