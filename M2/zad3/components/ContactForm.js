var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    };
  },
  changeFirstName: function(event) {
    this.setState({
      firstName: event.target.value
    });
  },
  changeLastName: function(event) {
    this.setState({
      lastName: event.target.value
    });
  },
  changeEmail: function(event) {
    this.setState({
      email: event.target.value
    });
  },
  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Imię',
          value: this.state.firstName,
          onChange: this.changeFirstName
        }),
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Nazwisko',
          value: this.state.lastName,
          onChange: this.changeLastName
        }),
        React.createElement('input', {
          type: 'email',
          className: 'form-control',
          placeholder: 'Email',
          value: this.state.email,
          onChange: this.changeEmail
        }),
        React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, "Dodaj kontakt")
      )
    )
  }
})
