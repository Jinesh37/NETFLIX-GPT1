import  Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";
const Browse=()=>{
  // Fetch data from TMDB API and update store
    // calling hooks
    useNowPlayingMovies();
    return(
       <div className="mt-5 bg-green ">
         <Header/> 
         <MainContainer/>
         <SecondaryContainer/>
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