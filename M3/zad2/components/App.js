var GIPHY_API_URL = 'http://api.giphy.com';
var GIPHY_PUB_KEY = 'urHOxQPVxu8nN1UXPJPpcXo6f975O4ry';

App = React.createClass({

  getInitialState() {
    return {
      loading: false,
      searchingText: '',
      gif: {}
    };
  },
  handleSearch: function(searchingText) {
    this.setState({
      loading: true
    });

    this.getGif(searchingText)
    .then(response => {
      this.setState({
        loading: false,
        gif: {
          url : response.fixed_width_downsampled_url,
          sourceUrl: response.url
        },
        searchingText: searchingText
      });
    })
    .catch(error => console.error('Something went wrong', error));
  },
  getGif: function(searchText) {
    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchText;

    return new Promise(
      function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
          this.status === 200 ? resolve(this.response) : reject(new Error(this.statusText));
        };
        request.onerror = function () {
          reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
        };
        request.open('GET', url);
        request.send();
      }
    );
  },
  render: function () {
    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div style={styles}>
        <h1> Wyszukiwarka gifów</h1>
        <p>
          Znajdź gifa na <a href={'http://giphy.com'} >Naciskaj ENTER, aby pobrać kolejne gify </a>
        </p>
        <Search onSearch={this.handleSearch} />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
