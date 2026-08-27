

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  BoxOffice: string;
};

function Selected() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      if (!imdbID) return;

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=8e59a55&i=${encodeURIComponent(imdbID)}&plot=full`);
        const movieData = await response.json();
        if (movieData.Response !== "False") setMovie(movieData);
      } finally {
        setIsLoading(false);
      }
    }

    void loadMovie();
  }, [imdbID]);

  if (isLoading) return <p className="text-white text-center text-5xl mt-40">Loading...</p>;
  if (!movie) return <p className="text-white text-center text-4xl mt-40">Movie not found.</p>;

  return (
    <section className='m-auto p-10'>
      <Link to="/search" className="text-yellow-300 text-3xl link__hover--effect">Back to search</Link>
      <div className="mt-10 selected-border glow">
        <svg className="glow-container" aria-hidden="true">
          <rect pathLength="100" className="glow-blur" />
          <rect pathLength="100" className="glow-line" />
        </svg>
        <div className='relative z-10 flex flex-wrap justify-center gap-10 p-20'>
          <img className="w-100 result-effect border-4 border-yellow-300 rounded-xl shadow-2xl shadow-amber-100" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} alt={`${movie.Title} poster`} />
          <div className="max-w-2xl ">
            <h1 className='text-6xl font-bold text-white text-center'>{movie.Title}</h1>
            <p className="text-2xl mt-4 text-white text-center">{movie.Year} | {movie.Runtime} | {movie.Genre}</p>
            <p className="text-xl mt-6 text-white">{movie.Plot}</p>
            <p className="text-xl mt-6 text-white"><strong>Director:</strong> {movie.Director}</p>
            <p className="text-xl text-white"><strong>Cast:</strong> {movie.Actors}</p>
            <p className="text-xl text-white"><strong>Rated:</strong> {movie.Rated}</p>
            <p className="text-xl text-white"><strong>IMDb:</strong> {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selected;