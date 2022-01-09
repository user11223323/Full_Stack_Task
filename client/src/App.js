import React, { useState, useEffect } from 'react';
import About from './components/About';
import Modal from './components/Modal';
import MovieList from './components/MovieList';
import Search from './components/Search';


export default function App() {


  const [moviesList, setmoviesList] = useState([])
  const [showCard, setShowCard] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [cardMovie, setCardMovie] = useState({})

  useEffect(()=>{getMoviesList("cars")},[])

  const getMoviesList = async (name)=>{
    try {
      const res = await fetch(`http://localhost:1500/movies/${name}`,{
        method : "GET",
        headers:{"content-type":"application/json"}
      })
      const data = await res.json()
      await setmoviesList(data.Search);          
    } catch (error) {
      console.log("err" + error);
    }
  }

  return (
    <div className='mainApp' >
      <div className='nav-bar-top'>
        <div className='logo'>
          MenoraFlix
        </div>
        <div className='about' onClick={()=>{setShowAbout(!showAbout)}} >
          About
        </div>
      </div>
      <Search getMoviesList={getMoviesList}></Search>
      <MovieList moviesList = {moviesList} setShowCard={setShowCard} showCard={showCard} setCardMovie={setCardMovie}></MovieList>
      <div className='nav-bar-footer'></div>
      {showCard? <Modal cardMovie={cardMovie} showCard={showCard} setShowCard={setShowCard}></Modal>: ""}
      {showAbout? <About showAbout={showAbout} setShowAbout={setShowAbout}></About>: ""}
    </div>
  )
}
