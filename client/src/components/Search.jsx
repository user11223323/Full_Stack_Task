import React, { useState } from 'react'


export default function Search({getMoviesList}) {
    
    const [searchText, setSearchText] = useState("")
    
    return (
        <div className='search-comp'>
            <input className='inp-movie' type="text" onChange={(e)=>{setSearchText(e.target.value)}} />
            <button className='btn-search' onClick={()=>{getMoviesList(searchText)}}>Search</button>
        </div>
    )
}
