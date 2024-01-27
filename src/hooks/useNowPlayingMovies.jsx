import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingmovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
    console.log("Khatushyam");
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useNowPlayingmovies;
