import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-2 text-white  font-bold ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex flex-shrink sm:flex-shrink-0 gap-2 sm:gap-5">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

