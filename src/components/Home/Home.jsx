import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss';
import MovieApi from '../../common/api/MovieApi';
import { APIKey } from '../../common/api/MovieApiKey';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movie/movieSlice';

function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMpvies = async () => {
            // const response = await MovieApi.get(`?api_key=${APIKey}&s=Harry&type=movie`)
            //     .catch((err) => {
            //         console.log('Err: ', err);
            //     });


            const response = await axios(`https://www.omdbapi.com/?apikey=50a3a0a9&s=Harry&type=movie`)
                .catch((err) => {
                    console.log('Err: ', err);
                });

            dispatch(addMovies(response.data))
        }
        fetchMpvies();

    }, [])
    return (
        <>
            <div className='banner-img'></div>

            <MovieListing />
        </>

    )
}

export default Home