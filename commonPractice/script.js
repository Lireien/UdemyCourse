let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрелии?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрелии?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilmName = prompt('Один из последних просмотренных фильмов?', ''),
      lastFilmRaiting = +prompt('На сколько оцените его?', '');
    if (lastFilmName != null &&
      lastFilmRaiting != null && lastFilmName != '' &&
      lastFilmRaiting != '' && lastFilmName.length < 50) {
      personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
      console.log('ok');
    } else {
      console.log('error');
      i--;
    }
  }

}

// rememberMyFilms();

function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);  
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
for (let i = 1; i <= 3; i++) {
  personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
}
}

writeYourGenres();
