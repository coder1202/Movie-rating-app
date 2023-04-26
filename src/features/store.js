import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";
//index.js ma javanu

export const store=configureStore({
    reducer:
    {
        movies:movieReducer
    },
});