import { useDispatch} from "react-redux";
import {useSelector} from "react-redux"
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingmovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);

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
    // if nowPlayingMovies didn't have data then we do call 
    if(!nowPlayingMovies)
    getNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useNowPlayingmovies;


// (!nowPlayingMovies&&getNowPlaying)
// Memorization of data in our react app:It means to avoid the api request again and again if data is already in react redux store
