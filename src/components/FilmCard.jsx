import React from 'react'

const MovieCard = (movie, index) => {
  return (
    <div key={index} className='MovieCard'>
        <img className='moviePoster' src={`${movie.movie.poster}`} alt="Poster for movie" />
        <p>Title: {movie.movie.title}</p>
        <p>Release Year: {movie.movie.Year}</p>
    </div>
  )
}

export default MovieCard