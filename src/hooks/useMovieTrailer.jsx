import {useDispatch} from "react-redux";
import{useSelector} from "react-redux";
import {options} from '../utils/constant';
import {useEffect} from "react";
import {addTrailerVideo} from "../utils/movieSlice"; 
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    console.log("Hanuman");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      options
    );
    console.log(data);
    const json = await data.json();
    console.log(json);

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const Trailer =
      filteredData.length !== 0
        ? filteredData.filter((video) => video.name === "Official Trailer")
        : json.results[0];
    console.log(Trailer);
    dispatch(addTrailerVideo(Trailer));
    // setTrailerId(Trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
