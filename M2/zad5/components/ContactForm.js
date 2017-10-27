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
      <form className={"contactForm"}>
        <input type={"text"} className={"form-control"} placeholder={"Imię"} value={this.state.firstName} onChange={this.changeFirstName}/>
        <input type={"text"} className={"form-control"} placeholder={"Nazwisko"} value={this.state.lastName} onChange={this.changeLastName}/>
        <input type={"email"} className={"form-control"} placeholder={"Email"} value={this.state.email}  onChange={this.changeEmail}/>
        <button type={"submit"} className="btn btn-primary">Dodaj kontakt </button>
      </form>
    );
  }
});
