import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import MovieList from './components/MovieList';
import FilmDetails from './components/FilmDetails';

function App() {
  const [movieList, SetFilmList] = useState([]);
  const [movieDetails, SetDetails] = useState([]);
  const [detailsShown, SetShown] = useState(false)

  const handleFilmListChange = (searchedMovies) => {
    SetFilmList(searchedMovies);
  }

  const handleDetailsChange = (details) => {
    SetDetails(details)
    SetShown(true)
  }

  return (
    <>
      <SearchBar setFilmList={handleFilmListChange}/>
      {detailsShown && <FilmDetails movie={movieDetails} />}
      <MovieList listOfMovies={movieList} setDetails={handleDetailsChange}/>
    </>
  )
}

export default App
