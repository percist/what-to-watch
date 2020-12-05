const express = require('express');
const { check, validationResult } = require('express-validator')
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils')
const router = express.Router();

const db = require('../db/models');


// land on  users logged in page: 'Welcome to What to Watch! Get watching!'



// if watchlists are empty have a message saying "You don't have anything on your Watchlists :( Start browsing movies!"




router.get('/want', asyncHandler(async(req, res) => {
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: 1,
      },
      through: {
        where: {
          watchStatus: 'want'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);

  // console.log(movies);
  // console.log(movies.genres);

  const movie = movies[0];

  const movieId = movie.id;


  const watchlist = await db.Watchlist.findAll( {
    where: {userId: 1}
  })

  // console.log(watchlist[0].userId);
  const specific = watchlist[0].id;

  const status = await db.WatchedMovie.findAll({
    where: { watchListId: specific}

  })


  
  let watchStatusUpdate = status[0].watchStatus;


  watchStatusUpdate = 'watched';
  
  console.log(watchStatusUpdate + '*******************************');





  // console.log(movies);  
  res.render('watchlist', {
    movies,
  
    
  });

}));


router.get('/watched', asyncHandler(async(req, res) => {
  const object = {
    include: [{
      model: db.Watchlist,
      where: {
        userId: 1,
      },
      through: {
        where: {
          watchStatus: 'watched'
        }
      }
    }]
  }
  const movies = await db.Movie.findAll(object);
  res.render('watchlist', {
    movies,
  });

}));








router.get('/home', asyncHandler(async(req, res) => {
  // const moviesToWatch = await //get list of movies on watchlist
  res.render('watchlist', {title: 'Want to Watch'});
}));














// window.addEventListener('DOMContentLoaded', () => {

  
//   const watchStatusButton = document.querySelector("watchToggler");
//   watchStatusButton.addEventListener("click", async (e) => {
//     // api returning json vs html
    
//     console.log('CLIK')
    
//     const res = await fetch(`http://localhost8080/users/want`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({})
      
//     })
    
//     console.log(res);
    
//   })
  
  
// })


module.exports = router;