const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { title } = require('process');



const downloadsPath = path.join(__dirname, 'downloads');


fetch('https://api-ghibli.herokuapp.com/films')
    .then((res) => res.json())
    .then((films) => {
        films.forEach( async film => {
            const title = film.title
            const extension = path.extname(film.movie_banner)
            const filename = path.join(downloadsPath, `${title}${extension}`);

            console.log(title);
            
            const rawData = await axios.get(film.movie_banner, { responseType: 'arraybuffer' });
           

            
            fs.writeFile(filename, rawData.data, (err) => {
                if (err) {
                    console.log("Error please try again");
                    console.log(err)
                } else {
                    console.log("Successfully downloaded images");
                }
            })
        })

           
    })


            // const urls = getUrls
        // const name = banners.name
        // // const extension = path.extname(urls)

        // const filename = path.join(downloadsPath, `This is ${name}`);

        // // const rawData = await axios.get(banner.movie_banner, { responseType: 'arraybuffer'})

        // fs.writeFile(filename, rawData.data, (err) => {
        //     if (err) {
        //         console.log("Error please try again");
        //         console.log(err)
        //     } else {
        //         console.log("Successfully downloaded images");
        //     }
        // })