# MovieList
### Input
The input of this program is a list of movies as objects defined in the MovieList class component. Each movie has a title, genre, and release year. Within the component's state is the selected genre as `this.state.selectedGenre` initialized as "All". `MovieList.css` controls the movie cards, dropdown, and layout display.

### Process
The process occurs when the React application runs and loads the `MovieList` component in `App.js`. React renders the javascript structure and displays it in the web browser. It initializes with all of the movies in the list and genrates each unique genre from the list within the genre utilizing a set. It then applies the styles from `MovieList.css` to control the design and layout. When a genre is selected, the `handleGenreChange` function updates the state and rerenders with only the movies from the list in that genre. It then updates the display with the new render. Clicking any of the movie cards brings up an alert that shows a message with the movie title.

### Output
The output is a basic interactive movie list displayed in the browser. Just below the title "Movie List" the dropdown displays ALL. Users can open the dropdown to see a list of each unique movie genre and click on a any genre to filter the movies in the list by that genre. Below the dropdown is the list of movies that will instantly updates based on the users selection. When a user clicks on a movie card, a pop up displays with an github.dev alert that says, "You clicked on "**movie title**".