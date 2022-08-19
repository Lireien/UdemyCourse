const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрелии?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const lastFilmName = prompt('Один из последних просмотренных фильмов?', ''),
      lastFilmRaiting = +prompt('На сколько оцените его?', ''),
      lastFilmName2 = prompt('Один из последних просмотренных фильмов?', ''),
      lastFilmRaiting2 = +prompt('На сколько оцените его?', '');

      personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
      personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;

      console.log(personalMovieDB);