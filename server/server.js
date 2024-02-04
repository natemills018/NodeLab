var path = require('path');
var fs = require('fs');

const filmsFile = path.join(__dirname, '../data/films.json');
const chirpsFile = path.join(__dirname, '../chirpsFile.json')
const chirpsArray = [
    {chirp1:"This is chirp1"},
    {chirp2:"This is chirp2"},
    {chirp3:"This is chirp3"},
    {chirp4:"This is chirp4"},
    {chirp5:"This is chirp5"}
]


fs.writeFile(chirpsFile, JSON.stringify(chirpsArray), (err) => {
    if(err) {
        console.log(err)
    }   
    fs.readFile(chirpsFile,{
        encoding: "UTF-8"
    }, (err, chirps) => {
        console.log(chirps);
    });
});



fetch('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json())
    .then((users) => {
        users.forEach(user => {
            delete user.description
        })

        fs.writeFile(filmsFile, JSON.stringify(users), (err) => {
            if(err) {
                console.log(err)
            }
        })
    })