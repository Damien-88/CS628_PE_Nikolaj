import React, { Component } from "react"; // Import React and Component base class
import "./MovieList.css"; // Import component-scoped styles

class MovieList extends Component { // Define MovieList as a stateful class component
    constructor(props) { // Constructor receives props from parent
        super(props); // Pass props to the React.Component base constructor

        this.state = {
            selectedGenre: "All" // Default filter shows all genres
        };

        // Static list of movie objects; defined on the instance (not state) since it never changes
        this.movies = [
            { title: "Young Frankenstein", genre: "Comedy", releaseYear: 1974 },
            { title: "RED", genre: "Action", releaseYear: 2010 },
            { title: "The Barefoot Contessa", genre: "Crime", releaseYear: 1954 },
            { title: "Good Bye, Lenin", genre: "Drama", releaseYear: 2003 },
            { title: "Inglourious Basterds", genre: "War", releaseYear: 2009 },
            { title: "John Wick", genre: "Action", releaseYear: 2014 },
            { title: "Frozen", genre: "Animation", releaseYear: 2013 },
            { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
            { title: "Superbad", genre: "Comedy", releaseYear: 2007 },
            { title: "Hereditary", genre: "Horror", releaseYear: 2018 },
            { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
            { title: "Mad Max: Fury Road", genre: "Action", releaseYear: 2015 },
            { title: "The Conjuring", genre: "Horror", releaseYear: 2013 },
            { title: "Se7en", genre: "Crime", releaseYear: 1995 },
            { title: "The Matrix", genre: "Action", releaseYear: 1999 },
            { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
            { title: "Step Brothers", genre: "Comedy", releaseYear: 2008 },
            { title: "Blade Runner 2049", genre: "Sci-Fi", releaseYear: 2017 },
            { title: "Forrest Gump", genre: "Drama", releaseYear: 1994 },
            { title: "Toy Story", genre: "Animation", releaseYear: 1995 },
            { title: "Gladiator", genre: "Action", releaseYear: 2000 },
            { title: "The Grand Budapest Hotel", genre: "Comedy", releaseYear: 2014 },
            { title: "1917", genre: "War", releaseYear: 2019 }
        ];
    }

    // Arrow function so 'this' is automatically bound to the class instance
    handleClick = (title) => {
        alert(`You clicked on: "${title}"`); // Show an alert dialog with the clicked movie's title
    };

    // Called when the user selects a new option in the genre dropdown
    handleGenreChange = (event) => {
        this.setState({ selectedGenre: event.target.value }); // Update state with the newly selected genre
    }

    render() {
        const { selectedGenre } = this.state; // Destructure selected genre from state for convenient access

        const genres = [
            "All", // Prepend a catch-all option before the unique genre values
            ...new Set(this.movies.map(movie => movie.genre)) // Spread a Set to get unique genres from the movies array
        ];

        // If "All" is selected return every movie, otherwise filter to only the matching genre
        const filteredMovies = 
            selectedGenre === "All"
                ? this.movies
                : this.movies.filter(
                    movie => movie.genre === selectedGenre // Keep only movies whose genre matches the selection
                );

        return (
            <div className = "container"> {/* Outer wrapper with centered layout styles */}
                <h1>Movie List</h1> {/* Page heading */}

                {/* Controlled dropdown whose value is kept in sync with state */}
                <select
                    onChange = {this.handleGenreChange} // Fire handler on every selection change
                    value = {selectedGenre} // Controlled value bound to state
                >
                    {/* Render one <option> per unique genre */}
                    {genres.map((genre, index) => (
                        <option key = {index} value = {genre}> {/* key prevents React reconciliation warnings */}
                            {genre === "All" ? "All Genres" : genre} {/* Display friendly label for the catch-all option */}
                        </option>
                    ))}
                </select>

                <div className = "listMovies"> {/* Flex container that lays out movie cards */}
                    {/* Render a card for each movie that passes the current filter */}
                    {filteredMovies.map((movie) => (
                        <div
                            key = {movie.title} // Unique key based on title for React's diffing algorithm
                            className = "movieCard" // Apply card border, padding, and hover styles
                            onClick = {() => this.handleClick(movie.title)} // Pass the title to the click handler
                        >
                            <h2>{movie.title}</h2> {/* Display movie title as a sub-heading */}
                            <p>Genre: {movie.genre}</p> {/* Display the movie's genre */}
                            <p>Year: {movie.releaseYear}</p> {/* Display the movie's release year */}
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
}

export default MovieList; // Export so App.js this component can be imported