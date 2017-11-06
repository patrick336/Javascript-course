class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(event) {
    var searchText = event.target.value;
    this.setState({
      searchTerm: searchText
    });

    if (searchText.length > 2) {
      this.props.onSearch(searchText);
    }
  }
  handleKeyUp(event) {
    if(event.keyCode === 13) {
      this.props.onSearch(this.state.searchText);
    }
  }
  render(){

    const styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };

    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Tutaj wpisz wyszukiwaną frazę"
        style={styles}
        value={this.state.searchTerm}
      />
    );
  }
}
