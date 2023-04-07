import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Movies from './Components/Movies'
import MovieDetails from './Components/MovieDetails'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:name' element={<Movies/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
