import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/images/user.png'
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice';
const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('');
    }
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>
            <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search Movies & Series' value={term} onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="" />
            </div>


        </div>
    )
}

export default Header
