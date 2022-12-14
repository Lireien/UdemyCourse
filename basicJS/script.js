'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt('Сколько фильмов вы уже посмотрелии?', '');

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрелии?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilmName = prompt('Один из последних просмотренных фильмов?', '').trim(),
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let answer = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (answer === '' || answer == null) {
        console.log('Вы ввели некорректные данные или данные отсутствуют');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = answer;
      }
    }

    //или

    // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
    // if (this.genres === '' || genres == null) {
    //   console.log('Вы ввели некорректные данные или данные отсутствуют');
    //   i--;
    // } else {
    //   personalMovieDB.genres = genres.split(', ');
    //   personalMovieDB.genres.sort();
    // }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимй жанр №${i+1} - это ${item}`);
    });
  },

}