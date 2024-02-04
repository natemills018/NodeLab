const path = require('path');
const fs = require('fs');
const https = require('https')
const download = require('images-downloader').images;

const downloadsPath = path.join(__dirname,'/downloads');
const imgURLArray = [];
const getUrls = () => {
    for(let i = 0; i < imgURLArray.length; i++ ) {
        const links = imgURLArray[i];
        console.log(links);
    }
}

fetch('https://api-ghibli.herokuapp.com/films')
.then((res) => res.json())
.then((banners) => {
    banners.forEach(banner => {
        imgURLArray.push([banner.movie_banner]);
    })
    fetch(getUrls())
    .then((res) => res.buffer())
    .then((buffer) => {
    // Write the buffer to a file
    fs.writeFile(path.join(__dirPath, '/downloads'), buffer, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Image downloaded successfully");
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
})

// const options = {
//     url: getUrls(),
//     dest:'/downloads'
// }

// download.image(options)
// .then(({ filename }) => {
//     console.log('Saved to', filename);
// })
// .catch((err) => console.log(err))


const axios = require('axios');
const fs = require('fs');
const path = require('path')

const downloadDir = path.join(__dirname, 'downloads');
const url = pokemon.

fetch()
.then(res => res.json())
.then(async pokemon => {

})

