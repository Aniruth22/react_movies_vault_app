import axios from "axios";
import {setMovies} from "../slices/movieSlice";

const API_KEY="92c1cb16c75569d09b4ae6b3f8647dcd";

export const getMovies=()=>async dispatch=>{
    
    const URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    try{
        const {data} = await axios.get(URL);
        dispatch(setMovies(data.results));
        return data;
    }catch(error){
        return error;
    }
}

export const getMoviesOnSearch=(value)=>async dispatch=>{
    const URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;

    try{
        const{data}=await axios.get(URL);
        dispatch(setMovies(data.results));
        console.log(data.results);
    }
    catch(error){
        return error;
    }
}