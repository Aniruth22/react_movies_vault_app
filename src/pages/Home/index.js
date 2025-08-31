import Navbar from '../../components/Navbar';
import MovieCard from '../../components/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../api/movies';
import {Grid,Box} from '@mui/material';

const Home=()=>{
    const dispatch=useDispatch();

    const {movies} = useSelector(state=> state.movies);

    useEffect(()=>{
        dispatch(getMovies());
    },[dispatch]);

    return (
        <>
            <Navbar/>
            <div>
                <Box sx={{ flexGrow: 1, margitop:2 ,padding:2}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        movies?.length>0&&movies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)
                    }
                    </Grid>
                </Box>
            </div>

        </>
    )
}

export default Home;