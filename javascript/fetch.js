const fs = require('fs');
const fetch = require('node-fetch');
const { title } = require('process');
const movieKey = 'af0e0b9e5171ca21c10f3ae9b2e9d751';
let movieNumber = '800';

let movieObject = {};

const fetchMovie = async () => {

for (let i = 0; i < 50; i++) {
    const url = `https://api.themoviedb.org/3/movie/${movieNumber}?api_key=${movieKey}`;

   await fetch(url)
  .then(res => res.json())
  .then(json => {
      movieObject = {
          title: json.title,
          tag: json.tagline,
          posterPath: json.poster_path,
          tmdbId: json.id,
          genres: json.genres[0].name,
          overview: json.overview,
          vote: json.vote_average,
          releaseDate: json.release_date,
          runtime: json.runtime
      }
  });


await fs.writeFile('movies.txt', JSON.stringify(movieObject), function (err) {
    if (err)
        return console.log(err);
    return;
});
movieNumber++;
} 

}
fetchMovie();