import React from 'react'

const MovieList = ({listOfMovies}) => {
  return (
    <>
        <div className='FilmList'>
            {listOfMovies.map((movie, index) => (
                <FilmCard movie={movie} index={index}/>
            ))}
        </div>
    </>
  )
}

export default MovieList