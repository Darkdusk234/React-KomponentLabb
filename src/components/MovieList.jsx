import React from 'react'

const MovieList = ({listOfMovies}) => {
  return (
    <>
        <div className='FilmList'>
          <ul>
            {listOfMovies.map((movie, index) => (
                <li>
                  <FilmCard movie={movie} index={index}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default MovieList