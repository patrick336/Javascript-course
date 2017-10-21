var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactItem img-responsive'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pXtTYRK1QP9pfEhmQd2JsdL3I7yENp5IOGI934vijUIOJD2P'}/>
        <p className={'contactLabel'}>
          Imię: { this.props.item.firstName }
        </p>
        <p className={'contactLabel'}>
          Nazwisko: { this.props.item.lastName }
        </p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email }>{this.props.item.email}</a>
      </div>
    );
  }
});
