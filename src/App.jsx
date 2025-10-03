import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import MovieList from './components/MovieList';
import FilmDetails from './components/FilmDetails';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  const [movieList, SetFilmList] = useState([]);
  const [favoriteList, SetFavoriteList] = useState([]);
  const [movieDetails, SetDetails] = useState([]);
  const [detailsShown, SetShown] = useState(false)

  const handleFilmListChange = (searchedMovies) => {
    SetFilmList(searchedMovies);
  }

  const handleDetailsChange = (details) => {
    SetDetails(details)
    SetShown(true)
  }

  const addToFavorites = (movie) => {
    SetFavoriteList([...favoriteList, movie])
  }

  const removeFromFavorite = (movie) => {
    favoriteList.filter((existingMovie, index) => 
      existingMovie.Title !== movie.Title && existingMovie.Year !== movie.Year)
  }

  return (
    <>
      <SearchBar setFilmList={handleFilmListChange}/>
      {detailsShown && <FilmDetails movie={movieDetails} />}
      <MovieList listOfMovies={movieList} setDetails={handleDetailsChange} addMovieToFavorites={addToFavorites}/>
      <FavoriteMovies favoriteList={favoriteList} setDetails={handleDetailsChange} removeMovieFromFavorite={removeFromFavorite} />
    </>
  )
}

export default App
