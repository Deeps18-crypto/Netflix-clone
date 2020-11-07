import React from 'react'
import "./App.css"
import Row from './Row'
import request from "./request"
import Banner from './Banner/Banner'
import Nav from "./NavBar/Nav"


function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
      <h1>Helo react</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginal} isLargeRow/>
      <Row title="TERNDING NOW" fetchUrl={request.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="ROMANCCE MOVIES" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="DOCUMENT TARIES" fetchUrl={request.fetchDocumenttaries}/>
    </div>
  )
}

export default App


