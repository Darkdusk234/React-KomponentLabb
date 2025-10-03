import React from 'react'
import FilmCard from './FilmCard'

const MovieList = ({listOfMovies, setDetails, addMovieToFavorites}) => {
  return (
    <>
        <div className='FilmListContainer'>
          <h3>Search Result</h3>
          <ul className='FilmList'>
            {listOfMovies.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index} setDetails={setDetails} handleFavorite={addMovieToFavorites}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default MovieList