import {createSlice} from "@reduxjs/toolkit"
const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMoviesResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
         const{movieNames,movieResults}=action.payload
          state.gptMoviesResults=movieResults;
          state.movieNames=movieNames;
        }
    }
})
export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;
// How to put multiple data in same action.payload