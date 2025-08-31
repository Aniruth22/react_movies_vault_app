import {Grid,Box} from '@mui/material';
import {useSelector} from 'react-redux';
import MovieCard from '../../components/MovieCard';

const Favourites=()=>{
    
    const {favourites}=useSelector(state=>state.movies);

    return (
        <>
            <h1 style={{color:"red",}}>Your Favourite Movies List</h1>
            {favourites.length===0 && <h2 style={{color:"blue",}}>No Favourite Movies Added</h2>}
            <div>
                <Box sx={{ flexGrow: 1, margitop:2 ,padding:2}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        favourites?.length>0&&favourites.map((movie)=><MovieCard key={movie.id} movie={movie}/>)
                    }
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Favourites;