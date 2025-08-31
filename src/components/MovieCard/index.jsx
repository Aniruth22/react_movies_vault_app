import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import {setFavourites} from '../../slices/movieSlice';

export default function MovieCard({movie}) {
  const isFav=useSelector(state=>state.movies.favourites.some(fav=>fav.id===movie.id));
  const dispatch=useDispatch();
  
  const OnFavButtonClick=()=>{
    dispatch(setFavourites(movie));
  }

  return (
    <Card sx={{ maxWidth: 280}}>
      <CardMedia
        sx={{ height: 400 }}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          Released on:{movie.release_date}
        </Typography>
        <Typography variant="body4" sx={{ color: 'text.primary' }}>
          Overview:{movie.overview}
        </Typography>
      </CardContent>
      <Box component="section" sx={{ p: 2, pt: 0 }}>
        <CardActions>
          <Button onClick={OnFavButtonClick} size="large" variant="contained" color="primary">
           {isFav ? <FavoriteIcon />:<FavoriteBorderIcon />}
          </Button>
          <Icon sx={{ color: 'gold'}}>
            <StarIcon />
          </Icon>
          <Typography variant="h7" sx={{ color: 'text.primary' }}>
            {movie.vote_average}
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
}
