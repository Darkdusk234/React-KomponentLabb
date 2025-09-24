import React, { useState } from 'react'

const SearchField = (setFilmList) => {
    const [titleInput, setTitleInput] = useState("");
    const [yearInput, setYearInput] = useState("");
    const [directorInput, setDirectorInput] = useState("");

    const Search = () => {
        
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
        <div className='SearchFieldBox'>
            <h4>Sök med regissör</h4>
            <input type="Sök med regissör" onChange={(e) => setDirectorInput=(e.target.value)}/>
        </div>
        <div className='SearchButton'>
            <button onClick={Search}>Sök</button>
        </div>
    </div>
    </>
  )
}

export default SearchField