import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
    const { gptMoviesResults, movieNames } = useSelector((store) => store.gpt);
    
    // Check if movieNames is undefined or an empty array
    if (!movieNames || movieNames.length === 0) return null;
  
    // Check if movieResults is undefined or not an array
    if (!gptMoviesResults || !Array.isArray(gptMoviesResults)) {
      console.error('Invalid movieResults data:', gptMoviesResults);
      return null;
    }
  
    return (
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieNames.map((movieName, index) => {
            // Check if movieResults[index] is undefined before accessing it
            const movieResultAtIndex = gptMoviesResults[index];
  
            return (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResultAtIndex}
              />
            );
          })}
        </div>
      </div>
    );
  };
  
  
export default GptMovieSuggestion;
