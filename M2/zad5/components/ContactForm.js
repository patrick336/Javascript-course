var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return ( <
            form className = {
                'contactForm'
            } >
            <
            input type = {
                'text'
            }
            className = {
                'form-control'
            }
            placeholder = {
                'Imię'
            }
            value = {
                this.props.contact.firstName
            }
            /> <
            input type = {
                'text'
            }
            className = {
                'form-control'
            }
            placeholder = {
                'Nazwisko'
            }
            value = {
                this.props.contact.lastName
            }
            /> <
            input type = {
                'email'
            }
            className = {
                'form-control'
            }
            placeholder = {
                'Email'
            }
            value = {
                this.props.contact.email
            }
            /> <
            button type = {
                'submit'
            }
            className = 'btn btn-primary' > Dodaj kontakt < /button> <
            /form>
        );
    }
})