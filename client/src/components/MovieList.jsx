import React from 'react'
import Movie from './Movie'
export default function MovieList({moviesList,setShowCard, showCard, setCardMovie}) {
    return (
        <>
            <h1 className='topic'>Our Movies</h1>
        <div className='movies-container'>
            {moviesList.map(movie=><Movie movie={movie} showCard={showCard} setShowCard={setShowCard} setCardMovie={setCardMovie} key={movie.imdbID}></Movie>)}

        </div>
        </>
    )
}
