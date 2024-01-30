import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import{addPopularMovies} from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      options
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
    console.log("Khatushyam");
  };
  useEffect(() => {
    getNowPopular();
  }, []);
};
export default usePopularMovies;