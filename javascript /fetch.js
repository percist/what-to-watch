const fetch = require('node-fetch');


const movieKey = 'af0e0b9e5171ca21c10f3ae9b2e9d751';

const url = `https://api.themoviedb.org/3/movie/550?api_key=${movieKey}`;

fetch(url)
  .then(res => res.json())
  .then(json => console.log(json.original_title));