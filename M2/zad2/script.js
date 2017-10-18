var movies = [
  {
    movie_id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: {
      src: './images/harry.jpg',
      alt: 'Harry Potter'
    }
  },
  {
    movie_id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: {
      src: './images/krol_lew.jpg',
      alt: 'Król Lew'
    }
  },
  {
    movie_id: 3,
    title: 'Matrix',
    desc: 'Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.',
    img: {
      src: './images/matrix.jpg',
      alt: 'Matrix'
    }
  },
  {
    movie_id: 4,
    title: 'Uprowadzona',
    desc: 'Bryan, były agent służb specjalnych, rusza do Paryża, by ratować swoją 17-letnią córkę porwaną przez gang handlujący kobietami.',
    img: {
      src: './images/uprowadzona.jpg',
      alt: 'Matrix'
    }
  }
];




// var GalleryItem = React.createClass({
//
//   propTypes: {
//     image: React.PropTypes.object.isRequired,
//   },
//
//
//   render: function() {
//     return (
//       React.createElement('div', {},
//         React.createElement('h2', {}, this.props.image.name),
//         React.createElement('img', {src: this.props.image.src})
//       )
//     )
//   },
// });

// var image = {
//   name: 'Kotek',
//   src: 'http://imgur.com/n8OYCzR.png'
// };

// var element = React.createElement(GalleryItem, { image: image });
// ReactDOM.render(element, document.getElementById('app'));




var Movie =  React.createClass({
  PropTypes: {
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    image: 
  },
  render: function() {
    return (

    )
  }
});

var MovieTitle = React.createClass({
  render: function() {
    return (

    )
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return (

    )
  }
});

var MoviesList = React.createClass({
  render: function() {
    return (

    )
  }
});

var element = React.createElement(Movie, {
  key: movie_id,
  title:
});
ReactDOM.render(element, document.getElementById('app'));



// var moviesElements = movies.map(function(movie){
//   return React.createElement('li', {key: movie.id},
//     React.createElement('img', {
//       src: movie.img.src,
//       alt: movie.img.alt
//     }),
//     React.createElement('h2', {}, movie.title),
//     React.createElement('p', {}, movie.desc)
//   );
// });

// var element =
  // React.createElement('div', {},
    // React.createElement('h1', {}, 'Lista filmów'),
    // React.createElement('ul', {}, moviesElements)
  // );

// ReactDOM.render(element, document.getElementById('app'));
