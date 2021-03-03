const getWatched = async () => {
  const res = await fetch("/watchlist/watched");
  return res.json()

}

const getWantToWatch = async () => {
  const res = await fetch("/watchlist/want");
  return res.json();

}

// make api routes to query user's movie lists


document.addEventListener("DOMContentLoaded", async (event) => {
  const wantButton = document.getElementById('want-btn');
  const watchedButton = document.getElementById('watch-btn');

  const watched = await getWatched();
  const want = await getWantToWatch();

  // wantButton.hidden = want;

  if (want) {
    (wantButton.hidden = true) && (watchedButton.hidden = false)
  }
  if (watched) {
    watchedButton.hidden = true
  }







})