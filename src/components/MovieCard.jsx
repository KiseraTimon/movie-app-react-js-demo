import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import '../css/MovieCard.css'

const MovieCard = ({ movie }) => {

    const { isFavourited, addToFavourites, removeFromFavourites } = useMovieContext()

    // Check If Movie Is Favourited
    const favourite = isFavourited(movie.id)

    const favclick = (e) => {
        e.preventDefault()

        if (favourite) {
            removeFromFavourites(movie.id)
            alert(`${movie.title} Removed From Favourites`)
        }
        else {
            addToFavourites(movie)
            alert(`${movie.title} Added To Favourites`)
        }
    }

    return (
        <>
            <div className='movie-card'>
                <div className='movie-poster'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className='movie-overlay'>
                        <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={favclick}>
                            {favourite ? <FontAwesomeIcon icon={faHeartCrack} /> : <FontAwesomeIcon icon={faHeart} />}
                        </button>
                    </div>
                </div>

                <div className='movie-info'>
                    <h3>{movie.title}</h3>
                    <p>{movie.date?.split("-")[0]}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard