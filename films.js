var path = require('path');
var fs = require('fs');

const favoriteFilms = path.join(__dirname, './favorite-films.json');
const filmsArray = [];

fetch('https://api-ghibli.herokuapp.com/films')
.then((res) => res.json())
.then((films) => {
    films.forEach(film => {
        filmsArray.push([film.id, film.title, film.description])
    })

    console.log(filmsArray);

    fs.writeFile(favoriteFilms, JSON.stringify(filmsArray), (err) => {
        if(err) {
            console.log(err)
        }
    })
})