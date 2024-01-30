import {createSlice} from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowTrendingMovies:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.nowTrendingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.nowPopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.nowTopRatedMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
           state.trailerVideo=action.payload;
        }
    },
});
export const {addNowPlayingMovies,addTrendingMovies,addPopularMovies,addTopRatedMovies,addTrailerVideo}=movieSlice.actions; 
export default movieSlice.reducer;