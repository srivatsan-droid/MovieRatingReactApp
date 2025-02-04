import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../service/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]); // Popular movies
  const [searchResults, setSearchResults] = useState([]); // Search results
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load search results.");
    } finally {
      setLoading(false);
    }
  };

  // Decide which movies to display
  const displayedMovies = searchQuery ? searchResults : movies;

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <div className="no-results">No movies found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
