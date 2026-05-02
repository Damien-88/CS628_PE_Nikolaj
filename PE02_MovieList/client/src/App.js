import React from "react"; // Import React so JSX can be transformed correctly
import MovieList from "./MovieList"; // Import the MovieList component from the local file

// App is a functional component that serves as the application's root
function App() {
  return (
    <div className = "App"> {/* Root div; className="App" allows global App-level styles to be applied */}
      <MovieList /> {/* Render the MovieList component as the sole child of the app */}
    </div>
  );
}

export default App; // Export App so index.js can render it into the DOM