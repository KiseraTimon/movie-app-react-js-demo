import React from 'react'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'
import '../css/Favourites.css'

const Favourites = () => {

    const { favourites } = useMovieContext()

    if (favourites != null && favourites.length > 0) {
        return (
            <div className='favourites'>
                <h2>Your Favourites</h2>
                <div className='movies-grid'>
                    {favourites.map(movie => <MovieCard movie={movie} key={movie.id} />)
                    }
                </div>

            </div>
        )
    }
    else {
        return (
            <>
                <div className='favourites-empty'>
                    <h2>No favourites yet</h2>
                    <p>All your favourite titles will appear here</p>
                </div>
            </>
        )
    }
}

export default Favourites