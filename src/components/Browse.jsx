import  Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import SecondaryContainer from "./secondaryContainer";
import {useSelector} from "react-redux"
const Browse=()=>{
  // Fetch data from TMDB API and update store
    // calling hooks
    const showGptSearch=useSelector((store)=>store?.gpt?.showGptSearch)
    useNowPlayingMovies();
    useTrendingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return(
       <div className="mt-5 bg-green ">
         <Header/> 
         {showGptSearch?<GptSearch/>:<>
          <MainContainer/>
          <SecondaryContainer/>
         </>}
         {/* <GptSearch/> */}
         {/* 
         MainContainer
          -VideoBackground
          -VideoTitle
         SecondaryContainer
          -MoviesList*N
           -Card*N
         */}
       </div>
    )
}
export default Browse;