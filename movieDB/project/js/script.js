/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertContainerEl = document.querySelector('.promo__adv'),
        promoBgEl = document.querySelector('.promo__bg'),
        advEl = advertContainerEl.querySelectorAll('img'),
        promoGenreEl = promoBgEl.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        movieForm = document.querySelector('form.add'),
        addInput = movieForm.querySelector('.adding__input'),
        checkbox = movieForm.querySelector('[type="checkbox"]');

    movieForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let newFilm = addInput.value;
        const favFilm = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favFilm) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            renderMovieList(movieDB.movies, movieList);
        }
        evt.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        promoGenreEl.textContent = 'ДРАМА';

        promoBgEl.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    function renderMovieList(films, parent) {
        parent.innerHTML = ``;
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                renderMovieList(films, parent);
            });
        });

    }

    deleteAdv(advEl);
    makeChanges();
    renderMovieList(movieDB.movies, movieList);

});