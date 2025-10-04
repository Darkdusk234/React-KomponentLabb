import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList';
import FilmDetails from '../components/FilmDetails';
import FavoriteMovies from '../components/FavoriteMovies';

const Home = () => {
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
    const existingCheck = favoriteList.find(m => m.name === movie.name && m.year === movie.year)
    if(existingCheck)
    {
      return;
    }
    SetFavoriteList([...favoriteList, movie])
    localStorage.setItem("favorites", JSON.stringify([...favoriteList, movie]))
  }

  const filterFavorites = (existingMovie, movie) => {
    if(existingMovie.title === movie.title)
    {
      if(existingMovie.year === movie.year)
      {
        return false;
      }
      return true;
    }
    return true;
  }

  const removeFromFavorite = (movie) => {
    const newFavorites = favoriteList.filter((existingMovie, index) => filterFavorites(existingMovie, movie))
    SetFavoriteList(newFavorites)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"))
    if(storedFavorites)
    {
        SetFavoriteList(storedFavorites)
    }
  }, [])

  return (
    <>
      <SearchBar setFilmList={handleFilmListChange}/>
      {detailsShown && <FilmDetails movie={movieDetails} />}
      <MovieList listOfMovies={movieList} setDetails={handleDetailsChange} addMovieToFavorites={addToFavorites}/>
      <FavoriteMovies favoriteList={favoriteList} setDetails={handleDetailsChange} removeMovieFromFavorite={removeFromFavorite} />
    </>
  )
}

export default Home