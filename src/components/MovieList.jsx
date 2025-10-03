import React from 'react'
import FilmCard from './FilmCard'

const MovieList = ({listOfMovies, setDetails, addToFavorites}) => {
  return (
    <>
        <div className='FilmListContainer'>
          <ul className='FilmList'>
            {listOfMovies.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index} setDetails={setDetails} handleFavorite={addToFavorites}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default MovieList