import React, { useEffect, useState } from 'react'

const FilmDetails = (movie) => {
    
  return (
    <>
        <div>
            <p>Title: {movie.movie.title}</p>
            <p>Release Year: {movie.movie.year}</p>
            <p>Genre: {movie.movie.genre}</p>
            <p>Plot: {movie.movie.plot}</p>
            <p>Length: {movie.movie.runTime}</p>
            <p>Rated: {movie.movie.rating}</p>
            <p>Director: {movie.movie.director}</p>
            <p>Actors: {movie.movie.actors}</p>
        </div>
    </>
  )
}

export default FilmDetails