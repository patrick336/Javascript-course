import React from 'react';
import style from './Title.css';

class Title extends React.Component {

    constructor(props) {
        super(props);

        this.printCountTasks = this.printCountTasks.bind(this);
    }
    printCountTasks() {
        return `${this.props.data.length}`;
    }
    render() {
        return (
            <div className={style.Title}>
                <h1>Lista do zrobienia:</h1>
                <span className={style.TitleSpan}>{this.printCountTasks()}</span>
            </div>
        );
    }
}

export default Title;
