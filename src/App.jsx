import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className='app'>


      <BrowserRouter>
        <Header />
        <div className='container'>


          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/movie/:imdbID' Component={MovieDetails} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
