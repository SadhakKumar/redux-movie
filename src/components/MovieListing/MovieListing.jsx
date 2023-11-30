import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movie/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";

function MovieListing() {

    const movies = useSelector(getAllMovies);
    let rendermovies = "";

    rendermovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div>{movies.Error}</div>
    )
    console.log('Movies: ', movies);
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{rendermovies}</div>
            </div>
        </div>
    )
}

export default MovieListing