import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    // State To Store Favourites
    const [favourites, setFavourites] = useState([]);

    // Fetching Favourites From Local Storage
    useEffect(() => {
        const storedFavs = localStorage.getItem('favourites');

        if (storedFavs) {
            setFavourites(JSON.parse(storedFavs));
        }
    }, [])

    // Storing Favourites To Local Storage
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites])

    // Operation To Add To Favourites
    const addToFavourites = (movie) => {
        setFavourites((prev) => [...prev, movie]);
    }

    // Operation To Remove From Favourites
    const removeFromFavourites = (movieId) => {
        setFavourites((prev) => prev.filter(movie => movie.id !== movieId));
    }

    // Operation To Check If Movie Is Favourited
    const isFavourited = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    // Context Value
    const contextValue = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourited
    }

    return <MovieContext.Provider value={contextValue}>
        {children}
    </MovieContext.Provider>
}