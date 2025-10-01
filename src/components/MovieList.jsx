import React from 'react'
import FilmCard from './FilmCard'

const MovieList = ({listOfMovies, setDetails}) => {
  return (
    <>
        <div className='FilmListContainer'>
          <ul className='FilmList'>
            {listOfMovies.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index} setDetails={setDetails}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default MovieList