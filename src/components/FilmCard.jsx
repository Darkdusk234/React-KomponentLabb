import React, { useState } from 'react'
import FilmDetails from './FilmDetails'


const MovieCard = ({movie, index, setDetails}) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const showDetails = async () => {
        const request = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie.title}&y=${movie.year}`
        const detailResponse = await fetch(`${request}`)
        const detailJson = await detailResponse.json()
        setDetails({
            title: detailJson.Title,
            year: detailJson.Year,
            poster: detailJson.Poster,
            runTime: detailJson.Runtime,
            genre: detailJson.Genre,
            director: detailJson.Director,
            actors: detailJson.Actors,
            plot: detailJson.Plot,
            rating: detailJson.Rated
        })
    }

  return (
    <>
    <div key={index} className='MovieCard'>
        <button onClick={showDetails}><img className='moviePoster' src={`${movie.poster}`} alt="Poster for movie" /></button>
        <p>Title: {movie.title}</p>
        <p>Release Year: {movie.year}</p>
    </div>
    </>
  )
}

export default MovieCard