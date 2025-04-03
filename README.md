# Movie App

This is a React-based movie application built with Vite. The app allows users to browse popular movies, search for specific movies, and manage a list of their favorite movies. It leverages The Movie Database ([TMDb](https://www.themoviedb.org/)) API to fetch movie data and provides a clean, responsive user interface.

## Features

- **Browse Popular Movies**: Displays a list of popular movies fetched from the [TMDb](https://www.themoviedb.org/) API.
- **Search Movies**: Allows users to search for movies by title.
- **Favorites Management**: Users can add movies to their favorites list and remove them as needed. Favorites are stored in the browser's local storage for persistence.
- **Responsive Design**: The app is fully responsive and works seamlessly on different screen sizes.
- **Reusable Components**: Components like `MovieCard` and `Navbar` are modular and reusable, helping to elaborate React's essence in concise programs.
- **Context API**: Manages global state for favorites using React's Context API.

## Project Structure

The project is organized as follows:

```t
. ├── public/        # Static assets
├── src/             # Source code
├──├── assets/       # Images and project assets
├──├── components/   # Reusable React components
├──├── contexts/     # Context API for global state management
├──├── css/          # CSS files for styling
├──├── pages/        # Page components for routing
├──├── services/     # API service functions
├──├── App.jsx       # Main application component
├──├── main.jsx      # Entry point for the React app
├── .vscode/         # VS Code settings
├── .gitignore       # Git ignore file
├── index.html       # HTML template
├── package.json     # Project dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```


## Installation

1. Clone the repository:
```bash
git clone https://github.com/KiseraTimon/movie-app-react-js-demo.git
```

```bash
cd movieapp
```

2. Install dependencies
```bash
npm install
```

3. Add your [TMDb](https://www.themoviedb.org/) API key:
- Open src/services/api.js.
- Replace the API_KEY variable with your [TMDb](https://www.themoviedb.org/) API key.

4. Start the development server and run the program from your provided localhost URL:
```bash
npm run dev
```

## Usage
- Home Page: Displays a grid of popular movies.

- Use the search bar to find specific movies.

- Favorites Page: View all your favorite movies.

- Add or remove movies from the favorites list.

## Key Components
`MovieCard`:
Displays individual movie details, including the poster, title, and release year.
Allows users to add or remove movies from favorites.

`Navbar`:
Provides navigation links to the Home and Favorites pages.

`MovieContext`:
Manages the global state for the favorites list.
Provides functions to add, remove, and check if a movie is favorited.

`api.js`:
Contains functions to fetch popular movies and search for movies using the [TMDb](https://www.themoviedb.org/) API.

## Styling
The app uses modular CSS files for styling. Key styles include:

`App.css`: General layout styles.

`Navbar.css`: Styles for the navigation bar.

`MovieCard.css`: Styles for the movie cards.

`Home.css`: Styles for the home page.

`Favourites.css`: Styles for the favorites page.

## Scripts
Starting the development server.
```bash
npm run dev
```

Building the app for production.
```bash
npm run build
```

Previewing the production build.
```bash
npm run preview
```

Runs ESLint to check for code quality issues.
```bash
npm run lint
```

## Dependencies
`React`: Frontend library for building user interfaces.

`React Router`: For routing between pages.

`FontAwesome`: For icons used in the app.

`Vite`: Build tool for fast development and production builds.


## Future Possible Enhancements
- Add user authentication to save favorites across devices.

- Implement pagination for movie lists.

- Display detailed movie information on a separate page.

- Add loading skeletons for better user experience.

## Acknowledgments
- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data.

- [Vite](https://vite.dev/) for the development environment.

- [FontAwesome](https://fontawesome.com/) for the icons.

- [Tim Ruscica](https://github.com/techwithtim) for the tutorial