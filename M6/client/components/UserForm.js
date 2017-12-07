import React, { Component } from 'react';
import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
    }
};

export default UserForm;
