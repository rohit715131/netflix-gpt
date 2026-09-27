import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //   console.log(movies.nowPlayingMovies, "test");
  return (
    movies && (
      <div className="bg-black">
        <div className="lg:-mt-56 z-10 relative md:mt-0">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular Now" movies={movies.nowPopularMovies} />
          <MovieList title="Top Rated" movies={movies.nowTopRatedMovies} />
          <MovieList title="Upcoming" movies={movies.nowUpcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
