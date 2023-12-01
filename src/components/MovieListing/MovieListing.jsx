import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movie/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";

function MovieListing() {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let rendermovies = "";
    let renderShows = "";

    rendermovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div>{movies.Error}</div>
    )
    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => (
            <MovieCard key={index} data={show} />
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

            <div className='movie-list'>
                <h2>Series</h2>
                <div className='movie-container'>{renderShows}</div>
            </div>
        </div>
    )
}

export default MovieListing