import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import{addTopRatedMovies} from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      options
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results))
    console.log("Khatushyam");
  };
  useEffect(() => {
    getNowTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useTopRatedMovies;