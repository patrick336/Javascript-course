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

var moviesElements = movies.map(function(movie){
  return React.createElement('li', {key: movie.id},
    React.createElement('img', {
      src: movie.img.src,
      alt: movie.img.alt
    }),
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc)
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
