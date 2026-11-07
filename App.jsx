
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const addMovie = () => {
    if (movie !== "") {
      setMovies([...movies, movie]);
      setMovie("");
    }
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Favourite Movies List</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={addMovie}>Add Movie</button>

      <ul>
        {movies.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeMovie(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
