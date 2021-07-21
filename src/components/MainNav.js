import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// import MovieIcon from '@material-ui/icons/Movie;'
// import WhatshotIcon from '@material-ui/icons/Whatshot'
// import SearchIcon from '@material-ui/icons/Search';
// import TvIcon from '@material-ui/icons/TV';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import HomeIcon from '@material-ui/icons/Home';
import { Movie, Whatshot, Search, Tv, Favorite, Home } from '@material-ui/icons';

import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    width: 500,
    position: 'fixed',
    bottom: 0,
    backgroundColor:'#2d313a',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value === 0) history.push('/');
    else if(value === 1) history.push('/home');
    else if(value === 2) history.push('/movies');
    else if(value === 3) history.push('/populares');
    else if(value === 4) history.push('/series');
    else if(value === 5) history.push('/search');

  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction 
      style={{color: 'white'}}
      label="TV series"
       icon={<Home />} 
    />
    <BottomNavigationAction
        style={{color: 'white'}}
        label="Trending"
        icon={<Whatshot />}
    />
    <BottomNavigationAction 
      style={{color: 'white'}}
      label="Populares"
       icon={<Favorite />} 
    />
    <BottomNavigationAction 
      style={{color: 'white'}}
      label="Movies"
       icon={<Movie />} 
    />
 
    <BottomNavigationAction 
      style={{color: 'white'}}
      label="TV series"
       icon={<Tv />} 
    />

    <BottomNavigationAction
      style={{color: 'white'}}
      label="Search"
      icon={<Search/>} 
    />

    </BottomNavigation>

  );
}