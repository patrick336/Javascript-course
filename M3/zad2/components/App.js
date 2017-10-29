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
    this.getGif(searchingText, function(gif) {
      this.setState({
        loading: false,
        gif: gif,
        searchingText: searchingText
      });
    }.bind(this));
  },
  getGif: function(searchText, callback) {
    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchText;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function(){
      if(xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        var gif = {
          url : data.fixed_width_downsampled_url,
          sourceUrl: data.url
        };
        callback(gif);
      }
    };
    xhr.send();
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
