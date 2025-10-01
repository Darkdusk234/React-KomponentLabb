import React, { useState } from 'react'

const SearchBar = (setFilmList) => {
    const [titleInput, setTitleInput] = useState("");
    const [yearInput, setYearInput] = useState("");

    const Search = async () => {
        //Flytta Api nyckeln till en skyddad variabel t.ex. .env
        const requestUrl = `http://www.omdbapi.com/?apikey=27f4ab05&s=`

        if(titleInput !== "" && yearInput === "")
        {
            requestUrl = requestUrl + `${titleInput}`
        }
        else if(titleInput !== "" && yearInput !== "")
        {
            requestUrl = requestUrl + `${titleInput}` + `&y=${yearInput}`
        }
        else if(titleInput === "" && yearInput !== "")
        {
            return;
        }
        else if(titleInput === "" && yearInput === "")
        {
            return;
        }

        var response = await fetch({requestUrl});
        var searchedFilms = await response.json();
        setFilmList(searchedFilms)
    }

  return (
    <>
    <div className='SearchField'>
        <div className='SearchFieldBox'>
            <h4>Sök med Titel</h4>
            <input type="Sök med Titel" onChange={(e) => setTitleInput=(e.target.value)}/>
        </div>
        <div className='SearchFieldBox'>
            <h4>Sök med släppnings år</h4>
            <input type="Sök med släppnings år" onChange={(e) => setYearInput=(e.target.value)}/>
        </div>
        <div className='SearchButton'>
            <button onClick={Search}>Sök</button>
        </div>
    </div>
    </>
  )
}

export default SearchBar