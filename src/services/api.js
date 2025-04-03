// MovieDB API
const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

// Popular Movies
export const getPopularMovies = async () => {
    // Fetching Popular Movies
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    // Validating Response
    const data = await response.json();
    return data.results;
};

// Search Movies
export const searchMovies = async (query) => {
    // Fetching Searched Movies
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );

    // Validating Response
    const data = await response.json();
    return data.results;
};
