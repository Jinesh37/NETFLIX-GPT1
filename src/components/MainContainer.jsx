import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle  from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="mt-5 bg-green">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  movieId={id} />
      
    </div>
  );
};
export default MainContainer;

// Jinesh7715
