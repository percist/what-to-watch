const fs = require('fs');
const fetch = require('node-fetch');
const { title } = require('process');
const movieKey = 'af0e0b9e5171ca21c10f3ae9b2e9d751';
let movieNumber = '550';

let movieObject = {};

const fetchMovie = async () => {

for (let i = 0; i < 5; i++) {
    const url = `https://api.themoviedb.org/3/movie/${movieNumber}?api_key=${movieKey}`;

   await fetch(url)
  .then(res => res.json())
  .then(json => {
      movieObject = {
          title: json.title,
          posterPath: json.poster_path,
          tmdbId: json.id,
          genres: json.genres[0].name,
          overview: json.overview,
          releaseDate: json.release_date,
          runtime: json.runtime
      }
  });

console.log(movieObject);

await fs.writeFile('movies.txt', JSON.stringify(movieObject), function (err) {
    if (err)
        return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
    return;
});
movieNumber++;
} 

}
fetchMovie();