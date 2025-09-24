import React from 'react'

const MovieCard = (movie, index) => {
  return (
    <div key={index} className='MovieCard'>
        <img src={movie.Poster} alt="Poster for movie" />
        <p>Title: {movie.Title}</p>
        <p>Release Year: {movie.Year}</p>
    </div>
  )
}

export default MovieCard