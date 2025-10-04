import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList';
import FilmCard from '../components/FilmCard'
import FilmDetails from '../components/FilmDetails';
import FavoriteMovies from '../components/FavoriteMovies';

const Tutorial = () => {
    const movieList = [{
        poster: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg",
        title: "Deadpool",
        year: "2016"
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg",
        title: "Deadpool",
        year: "2016"
    }];

    const movie = {
        poster: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg",
        title: "Deadpool",
        year: "2016"
    }

    const movieDetails = {
            title: "Deadpool",
            year: "2016",
            poster: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg",
            runTime: "108 min",
            genre: "Action, Comedy, Sci-fi",
            director: "Tim Miller",
            actors: "Ryan Reynolds, Morena Baccarin, T.J. Miller",
            plot: "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.",
            rating: "R"
    }

  return (
    <>
        <h1>Tutorial vy</h1>
        <ul>
            <li className='tutorialItem'>
                <h3>Search Bar</h3>
                <SearchBar />
                <p>Search Bar komponenten låter en söka efter filmer och serier från OMDB databasen
                    genom titel och släppnings år. Den kräver en prop som är en metod som används för
                    att sätter listan av filmerna som söktes.
                    För att skapa komponenten i kod skriver man.
                </p>
                <p>
                    {"<SearchBar setFilmList={metod för att sätta film lista} />"}
                </p>
            </li>
            <li className='tutorialItem'>
                <h3>MovieList</h3>
                <MovieList listOfMovies={movieList}/>
                <p>
                    MovieList komponenten är den komponent som skriver ut en lista av alla filmer i variablen som skickas in.
                    Man skickar in en prop som är den lista av filmer man vill skriva ut, en prop som innehåller en metod
                    att kunna sätta in detaljerna i FilmDetails med och sists skickar man in en prop som är en metod för att lägga
                    till en film i favorit listan.
                    För att skapa komponenten i kod skriver man.
                </p>
                <p>
                    {"<MovieList listOfMovies={Listan av filmer} setDetails={Metod för att sätta film detaljer} addMovieToFavorites={Metod för att lägga till favorit}/>"}
                </p>
            </li>
            <li className='tutorialItem'>
                <h3>Film Card</h3>
                <FilmCard movie={movie} index={1}/>
                <p>
                    Film Card komponenten är den komponent som visar enkel information om en film.
                    Den används i MovieList och i FavoriteMovies för att visa postern, titeln och släppnings året av varje film i listan.
                    Den har ackså en knapp för att lägga till/ta bort en film från favoriter.
                    Man skickar in en prop med filmen, en prop med indexen i listan, en prop som innehåller en metod
                    att kunna sätta in detaljerna i FilmDetails med och en metod för att antingen lägga till eller ta bort filmen
                    från favorite listan.
                    För att skapa komponenten i kod skriver man.
                </p>
                <p>
                    {"<FilmCard movie={filmen} index={indexen i listan} setDetails={Metod för att sätta film detaljer} handleFavorite={metod för att antingen lägga till eller ta bort från favoriter}/>"}
                </p>
            </li>
            <li className='tutorialItem'>
                <h3>Film Details</h3>
                <FilmDetails movie={movieDetails}/>
                <p>
                    Film Details komponenten används för att visa mer information om en film.
                    I Film Card om man trycker på postern så kommer manaktivera metoden som sätter detaljerna till useStaten i Home.
                    Man skickar där in filmen som en prop som innehåller all den info man vill visa och så skrivs den infon ut.
                    För att skapa komponenten i kod skriver man.
                </p>
                <p>
                    {"<FilmDetails movie={Film objectet med all info man ska visa}"}
                </p>
            </li>
            <li className='tutorialItem'>
                <h3>Favorite Movies</h3>
                <FavoriteMovies favoriteList={movieList}/>
                <p>
                    Favorite Movies komponenten funkar på samma sätt som Movie List men har andra värden som skickas in.
                    Man skickar in en prop som är den lista av filmer man vill skriva ut, en prop som innehåller en metod
                    att kunna sätta in detaljerna i FilmDetails med och sists skickar man in en prop som är en metod för att ta
                    bort en film från favorit listan.
                    För att skapa komponenten i kod skriver man.
                </p>
                <p>
                    {"<MovieList favoriteList={Listan av filmer} setDetails={Metod för att sätta film detaljer} removeMovieFromFavorites={Metod för att ta bort från favorit listan}/>"}
                </p>
            </li>
        </ul>
    </>
  )
}

export default Tutorial