import React from 'react'

export default function Modal({cardMovie,setShowCard,showCard}) {
    return (
        <div>
                  <div className="popup" >
        <div className='popup-card' >
          <button className='btn-close'  onClick={()=>{setShowCard(!showCard)}}>X</button>
          <div className='card-main' >
          <h2 className='title-movie-card'>{cardMovie.Title}</h2>
            <div className='movie-img' style={{backgroundImage: `url(${cardMovie.Poster})` }} ></div>
            <h4 className='movie-description'>Writer: {cardMovie.Writer}</h4>
            <h4 className='movie-description'>Year: {cardMovie.Year}</h4>
            <h4 className='movie-description'>Language: {cardMovie.Language}</h4>
            <h4 className='movie-description'>Actors: {cardMovie.Actors}</h4>
            <h4 className='movie-description'>Runtime: {cardMovie.Runtime}</h4>
          </div>
        </div>
      </div>
        </div>
    )
}
