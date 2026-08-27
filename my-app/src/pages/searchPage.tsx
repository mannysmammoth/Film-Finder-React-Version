import Nav from "../components/nav";
import Footer from "../components/footer";
import { FaMagnifyingGlass, FaGear } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

/* Global Storage */
type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
};

async function fetchMovieData(searchTerm: string): Promise<Movie[]> {
    const response = await fetch(`https://www.omdbapi.com/?apikey=8e59a55&s=${encodeURIComponent(searchTerm)}`);
    const movieData = await response.json();
    if (!movieData || movieData.Response === "False") return [];
    return movieData.Search;
}

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function performSearch() {
    const searchTerm = searchQuery.trim();
    if (!searchTerm) return;

    setIsLoading(true);
    setHasSearched(true);
    try {
      const movies = await fetchMovieData(searchTerm);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResults(movies);
    } finally {
      setIsLoading(false);
    }
  }

  function sortResults(sortType: string) {
    let sorted = [...results];

    if (sortType === "movie") {
      sorted = results.filter(movie => movie.Type === "movie");
    } else if (sortType === "tv") {
      sorted = results.filter(movie => movie.Type === "series");
    } else if (sortType === "year__newest_to_oldest") {
      sorted.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortType === "year__oldest_to_newest") {
      sorted.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    setResults(sorted);
  }

  return (
    <section>
      <div>    
        <Nav />
      </div>
      <div className='text-center'>
        <h2 className='text-white text-4xl font-bold mt-25'>Take a Look<span className='absolute ml-1'><FaMagnifyingGlass /></span></h2>    
      </div>
      <form className='flex justify-center mt-7' onSubmit={(event) => { event.preventDefault(); void performSearch(); }}>
        <input id="searchQuery" 
          value={searchQuery} 
          onChange={(event) => setSearchQuery(event.target.value)} 
          type="text" 
          placeholder="Search for a movie or show..." 
          className='
            text-3xl 
            text-gray-300 
            border-4 
            border-yellow-300 
            rounded-xl 
            p-1 
            min-w-120'>
        </input>
        <button
          type="submit"
          className='
          ml-5 
          text-3xl 
          border-4 
          rounded-4xl 
          border-yellow-300 
          px-5 
          yellow-button
          button-transform
          scale-100 
          hover:scale-110
          cursor-pointer
            '>{isLoading ? "Searching..." : "Search"}</button>
          </form>
      <div className='m-10'>
        <h2 className='text-white text-5xl font-bold mt-30'>Sort by:</h2>
        <select className='text-yellow-300 min-w-50 mt-4' id = 'sortOptions' defaultValue="" onChange = {(event) => sortResults(event.target.value)}>
          <option value="" disabled>Sort</option>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
          <option value="year__newest_to_oldest">Year, Recent to Older</option>
          <option value="year__oldest_to_newest">Year, Older to Recent</option>    
        </select>
      </div>
      <div className='m-10'>
        <h2 className='text-white text-5xl font-bold mt-30'>Results:</h2>
        {isLoading ? 
            <section className='w-full'>
              <div className='text-center py-30'>
                <span className='text-yellow-300 text-9xl arrow-rotate'>
                  <FaGear />
                </span>
                <span className='text-yellow-300 text-6xl arrow-rotate'>
                  <FaGear />
                </span>
              </div>
            </section> : !isLoading}
            {!isLoading && hasSearched && results.length === 0 && <p className="w-full text-center mt-40 text-4xl font-bold text-white">No results found.</p>}
        <div className="results__container flex justify-between flex-wrap gap-10 p-20">
          {results.map((movie) => (
            <Link to={`/selected/${movie.imdbID}`} key={`${movie.imdbID}-${movie.Title}`}>
              <div className="border-4 border-yellow-300 rounded-xl shadow-2xl shadow-amber-100 result-effect cursor-pointer">
                <figure>
                  <img className="w-75" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Poster"} alt={`${movie.Title} poster`} />
                </figure>
                <figcaption className="w-75 px-2 text-white text-center text-3xl ">{movie.Title}</figcaption>
                <p className="text-white text-center text-xl">Year: {movie.Year}</p>
                <p className="text-white text-center text-xl">Type: {movie.Type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
    
  );
};

export default SearchPage;