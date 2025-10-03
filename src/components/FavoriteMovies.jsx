import React from 'react'
import FilmCard from './FilmCard'

const FavoriteMovies = ({favoriteList, setDetails ,removeMovieFromFavorite}) => {
  return (
    <div className='FavoriteListContainer'>
        <h3>Favorites</h3>
          <ul className='FavoriteList'>
            {favoriteList.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index} setDetails={setDetails} handleFavorite={removeMovieFromFavorite}/>
                </li>
            ))}
            </ul>
        </div>
  )
}

export default FavoriteMovies