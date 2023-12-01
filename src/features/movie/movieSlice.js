import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const response = await axios(`https://www.omdbapi.com/?apikey=50a3a0a9&s=Harry&type=movie`)

    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const response = await axios(`https://www.omdbapi.com/?apikey=50a3a0a9&s=Friends&type=series`)

    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await axios(`https://www.omdbapi.com/?apikey=50a3a0a9&i=${id}&Plot=full`)

    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    detail: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeDetails: (state) => {
            state.detail = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, detail: payload };
        },
    }
})

export const { addMovies, removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetail = (state) => state.movies.detail;
export default movieSlice.reducer;