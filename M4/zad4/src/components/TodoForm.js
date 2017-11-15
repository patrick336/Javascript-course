import React from 'react';
import style from './TodoForm.css';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        };
        this.changeTaskName = this.changeTaskName.bind(this);
    }
    changeTaskName(event) {
        this.setState({
            taskName: event.target.value
        });
    }
    render() {
        return (
            <form className={style.TodoForm}>
                <div className={"form-group"}>
                    <input type={"text"} className={"form-control"} placeholder={"Nowe zadanie..."} value={this.state.taskName} onChange={this.changeTaskName}/>
                </div>
                <button className={"btn btn-primary"} type={"button"} onClick={ () => this.props.addTodo(this.state.taskName)}>Dodaj zadanie</button>
            </form>
        );
    }
}

TodoForm.propTypes = {
    data: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;
