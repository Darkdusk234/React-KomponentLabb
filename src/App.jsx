import { useState } from 'react'
import SearchField from './components/SearchField'
import './App.css'
import MovieList from './components/MovieList';

function App() {
  const [movieList, SetFilmList] = useState([]);

  const handleFilmListChange = (searchedMovies) => {
    SetFilmList(searchedMovies);
  }

  return (
    <>
      <SearchField setFilmList={SetFilmList}/>
      <MovieList listOfMovies={movieList}/>
    </>
  )
}

export default App
