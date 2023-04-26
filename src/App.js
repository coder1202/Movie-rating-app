import React from 'react'
import "./App.scss";

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/Page_Not_Found/Page_Not_Found"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="App">
      <Router>
        <Header />

<div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/movie/:imdbID' element={<MovieDetail/>} />
            <Route  element={<PageNotFound/>}/>
          </Routes>
          </div>
        <Footer/>
      </Router>
      </div>
    </>
  )
}

export default App

