import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export default function FavouriteButton() {

  const OnFavButtonClick=()=>{
    
  }

  return (
      <Button onClick={OnFavButtonClick} component={Link} to="/favourites" variant="contained" endIcon={<FavoriteIcon />}>
        Favourites
      </Button>
  );
}
