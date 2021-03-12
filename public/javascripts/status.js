const getWatched = async (movieId) => {
  const res = await fetch(`${movieId}/status`);
  const parsed = await res.json()

  if (parsed === false) {
    return false;
  } else if (parsed === true) {
    return true;
  } else return;

}

document.addEventListener("DOMContentLoaded", async (event) => {
  const wantButton = document.getElementById('want-btn');
  const watchedButton = document.getElementById('watch-btn');
  const movieContainer = document.querySelector(".movie-container-1");
  const movieId = movieContainer.id;
  const reviewButton = document.getElementById('review')

  const watched = await getWatched(movieId);

  if (watched === true) {
    watchedButton.disabled = true;
    reviewButton.disabled = false;
  } else if (watched === false) {
    watchedButton.disabled = false;
    wantButton.disabled = true;

  }

  // const want = await getWantToWatch(movieId);

  // wantButton.hidden = want;

  // if (want) {
  //   (wantButton.hidden = true) && (watchedButton.hidden = false)
  // }
  // if (watched) {
  //   watchedButton.hidden = true
  // }







})