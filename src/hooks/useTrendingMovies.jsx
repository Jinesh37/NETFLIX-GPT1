import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import{addTrendingMovies} from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getNowTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    dispatch(addTrendingMovies(json.results));
    console.log("Khatushyam");
  };
  useEffect(() => {
    getNowTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useTrendingMovies;

// "https://api.themoviedb.org/3/movie/top_rated?page=1"