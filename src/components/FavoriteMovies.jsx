import React from 'react'

const FavoriteMovies = ({favoriteList}) => {
  return (
    <div className='FavoriteListContainer'>
        <h3>Favorites</h3>
          <ul className='FavoriteList'>
            {favoriteList.map((movie, index) => (
                <li key={index}>
                  <FilmCard movie={movie} index={index} setDetails={setDetails} handleFavorite={addMovieToFavorites}/>
                </li>
            ))}
            </ul>
        </div>
  )
}

export default FavoriteMovies