import { useDispatch } from "react-redux";
import { options } from '../utils/constant';
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice"; 

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const Trailer =
      filteredData.length !== 0
        ? filteredData.filter((video) => video.name === "Official Trailer")
        : json.results[0];
    dispatch(addTrailerVideo(Trailer));
    // setTrailerId(Trailer.key);
  };

  useEffect(() => {
    // Calling getMovieVideos function when the component mounts
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependencies needed here because getMovieVideos doesn't depend on any props or state variables

};

export default useMovieTrailer;
