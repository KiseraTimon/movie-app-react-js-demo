import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';
import { getPopularMovies, searchMovies } from '../services/api';
// import { searchMovies } from '../services/api';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (err) {
                console.error(err);
                setError('[ERR]... Failed To Load Movies');
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const searchmovies = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);

            setMovies(searchResults);
            setError(null);
        }
        catch (err) {
            console.error(err);
            setError('[ERR]... Failed To Load Movies');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='home'>
                <form className='search-form' onSubmit={searchmovies}>
                    <input
                        type='text'
                        placeholder='Search' className='search-input'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}></input>
                    <button type='submit' className='search-button'>Search</button>
                </form>

                {
                    error && <div className='error'>{error}</div>
                }

                {
                    movies.length === 0 && !loading && <div className='no-movies'>No Movies Found</div>
                }

                {
                    loading ?
                        <div className='loading'>Loading...</div> :
                        <div className='movies-grid'>
                            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
                            }
                        </div>
                }

            </div>
        </>
    )
}

export default Home