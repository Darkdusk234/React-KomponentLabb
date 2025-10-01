import React from 'react'
import FilmCard from './FilmCard'

const MovieList = ({listOfMovies}) => {
  return (
    <>
        <div className='FilmListContainer'>
          <ul className='FilmList'>
            {listOfMovies.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default MovieList