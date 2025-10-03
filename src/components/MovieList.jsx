import React from 'react'
import FilmCard from './FilmCard'

const MovieList = ({listOfMovies, setDetails, addMovieToFavorites}) => {
  return (
    <>
        <div className='FilmListContainer'>
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