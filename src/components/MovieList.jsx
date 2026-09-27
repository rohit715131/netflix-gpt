import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-5">
      <h1 className="text-lg md:text-3xl px-4 py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll py-2">
        <div className="flex p-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieList={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
