import React from 'react';
import style from './App.css';

// @Container component

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {style.TodoApp} >
                Tutaj bedzie czat
            </div>
        );
    }
}

export default App;
