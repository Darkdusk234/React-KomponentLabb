import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import MovieList from './components/MovieList';

function App() {
  const [movieList, SetFilmList] = useState([]);

  const handleFilmListChange = (searchedMovies) => {
    SetFilmList(searchedMovies);
  }

  return (
    <>
      <SearchBar setFilmList={handleFilmListChange}/>
      <MovieList listOfMovies={movieList}/>
    </>
  )
}

export default App
