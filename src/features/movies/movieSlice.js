import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi"
import {APIKey} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
  // const movieText="harry";
   const response=await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`
        )
        return response.data;
});

export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async(term)=>{
  //  const seriesText="Friends";
    const response=await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)  
        return response.data;
});

export const fetchAsyncMovieOrShowDetail=createAsyncThunk('movies/fetchAsyncShows',async(id)=>{

    const response=await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`
        )
        
        return response.data;
})

const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{},

}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow={};
        },

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
    

        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fethehed sucessfullly");
            return{...state,movies:payload};

        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Fethehed sucessfullly");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fethehed sucessfullly");
            return{...state,shows:payload};

        },
        [fetchAsyncShows.rejected]:()=>{
            console.log("Rejected Request");
            

        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fethehed sucessfullly");
            return{...state,selectMovieOrShow:payload};

        },
    },
});
export const {removeSelectedMovieOrShow} =movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies;
export const getAllShows=(state)=> state.movies.shows;
//details mate
export const getSelectedMovieOrShow=(state)=> state.movies.selectMovieOrShow;


export default movieSlice.reducer;