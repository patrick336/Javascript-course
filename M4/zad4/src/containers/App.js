import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../containers/TodoList';
import TodoForm from '../components/TodoForm';

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
                text: 'wash the dishes'
            },
            {
                id: 4,
                text: 'feed my cat'
            }]
        };
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
        return (
            <div className = {style.TodoApp} >
                <Title data = {this.state.data} />
                <TodoList data = {this.state.data} removeTodo = {this.removeTodo.bind(this)} />
                <TodoForm data = {this.state.data} addTodo = {this.addTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;
