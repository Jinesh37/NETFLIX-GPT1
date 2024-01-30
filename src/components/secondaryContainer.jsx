import {useSelector} from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store?.movies)
    console.log(movies);
    return (
        <div className="  bg-black ">
            <div className="-mt-52 pl-12 relative z-20 ">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
            <MovieList title={"Trending"} movies={movies.nowTrendingMovies}/>
            <MovieList title={"Horror"} movies={movies.nowTopRatedMovies}/>
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
           </div>
            {/* MovieList-Popular */}
            {/* MovieList-Now Playing */}
            {/* {MovieList-Trending} */}
            {/* MovieList-Horror */}
        </div>
    )
}
export default SecondaryContainer;