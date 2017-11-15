import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../containers/TodoList';

// @Container component

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            },
            {
                id: 2,
                text: 'wash the dishes'
            },
            {
                id: 3,
                text: 'feed my cat'
            }]
        };

        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        console.log(this.state.data);
        return (
            <div className = {style.TodoApp} >
                <Title data = {this.state.data} />
                <TodoList data = {this.state.data} removeTodo = {this.removeTodo.bind(this)} />
                <button className={'btn btn-primary'} onClick=>Add task..</button>
            </div>
        );
    }
}

export default App;
