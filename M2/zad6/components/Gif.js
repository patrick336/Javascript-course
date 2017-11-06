var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

class Gif extends React.Component {
  
  constructor(props){
    super(props);

    this.getUrl = this.getUrl.bind(this);
  }

  getUrl() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  }

  render() {
    let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    const styles = {
      minHeight: '310px',
      margin: '0.5em'
    };

    return (
      <div style={styles}>
       <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={ url } style={{ width: '100%', maxWidth: '350px'}} />
       </a>
      </div>
    );
  }
}
