import React, { useEffect, useState } from 'react'

export default function Movie({movie, setShowCard, showCard, setCardMovie}) {

    const [movieDetails, setMovieDetails] = useState([])
    const [rating, setRating] = useState("") 
   const getMovie = async (id)=>{
        const res = await fetch(`http://localhost:1500/movie/${id}`,{
            method : "GET",
            headers:{"content-type":"application/json"}
          })
        const data = await res.json()
        setMovieDetails(data)
        try {
            setRating(data.Ratings[0].Value)
        } catch (error) {
            console.log(error);
        }
          }

      useEffect(() => {
        getMovie(movie.imdbID)
      },[])
    return (
        <>
        <div className='movie-card'>
            <h2 className='title-movie-card'>{movieDetails.Title}</h2>
            <div className='movie-img' style={{backgroundImage: `url(${movieDetails.Poster})` }} ></div>
            <h4 className='movie-description'>{movieDetails.Plot}</h4>
            <h4 className='movie-rating' style={{color: rating.charAt(0) >6? "green" : "red"}}>Imdb rating: {rating}</h4>
            <button  className='info-btn' onClick={()=>{setShowCard(!showCard)
                                            setCardMovie({Title:movieDetails.Title,
                                              Year:movieDetails.Year,
                                              Writer:movieDetails.Writer,
                                              Language:movieDetails.Language,
                                              Poster: movieDetails.Poster,
                                              Actors:  movieDetails.Actors,
                                              Runtime: movieDetails.Runtime })}}>More Info</button>

        </div>

        </>
    )
}
