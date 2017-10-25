var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: {
      src: './images/harry.jpg',
      alt: 'Harry Potter'
    }
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: {
      src: './images/krol_lew.jpg',
      alt: 'Król Lew'
    }
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.',
    img: {
      src: './images/matrix.jpg',
      alt: 'Matrix'
    }
  },
  {
    id: 4,
    title: 'Uprowadzona',
    desc: 'Bryan, były agent służb specjalnych, rusza do Paryża, by ratować swoją 17-letnią córkę porwaną przez gang handlujący kobietami.',
    img: {
      src: './images/uprowadzona.jpg',
      alt: 'Matrix'
    }
  }
];

var MoviesList = React.createClass({

  PropTypes: {
    items: React.PropTypes.array.isRequired
  },
  render: function() {
    var movieItems = this.props.items.map(function(movie){
      return React.createElement(Movie, { item: movie, key: movie.id });
    });

    return (
      React.createElement('ul', { className: 'movies-list' }, movieItems)
    );
  }
});

var Movie = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement('img', {
          className: 'image',
          src: this.props.item.img.src,
          alt: this.props.item.img.alt
        }),
        React.createElement(MovieTitle, { className: 'title', title: this.props.item.title }),
        React.createElement(MovieDescription, { className: 'desc' , desc: this.props.item.desc })
      )
    );
  }
});

var MovieTitle = React.createClass({

  PropTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('h2', { className: 'headers' }, this.props.title)
    );
  }
});

var MovieDescription = React.createClass({

  PropTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('p', { className: 'paragraph' }, this.props.desc)
    );
  }
});

var element =
  React.createElement('div', { className: 'app' },
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MoviesList, { items: movies })
);

ReactDOM.render(element, document.getElementById('app'));
