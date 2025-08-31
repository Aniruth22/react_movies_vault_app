import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
    favourites:[],
    value:""
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.payload;
        },
        setFavourites:(state,action)=>{
            const movie=action.payload;
            const exists=state.favourites.find(fav=>fav.id===movie.id);
            if(exists){
                state.favourites=state.favourites.filter(fav=>fav.id!==movie.id);
            }
            else{
                state.favourites.push(movie);
            }
        }
    }
});

export const {setMovies,setFavourites}=movieSlice.actions;

export default movieSlice.reducer;