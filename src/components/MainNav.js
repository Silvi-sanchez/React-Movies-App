import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//Botones de menu
import { Whatshot, Search, Tv, Favorite, Home } from '@material-ui/icons';

import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'contents',
    backgroundColor:'transparent',
    zIndex: 100,
    top: 62, 
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value === 0) history.push('/home');
    else if(value === 1) history.push('/ultimoslanzamientos');
    else if(value === 2) history.push('/populares');
    else if(value === 3) history.push('/series');
    else if(value === 4) history.push('/search');

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
      label="Inicio"
       icon={<Home />} 
    />
    <BottomNavigationAction
        style={{color: 'white'}}
        label="Lanzamientos"
        icon={<Whatshot />}
    />
    <BottomNavigationAction 
      style={{color: 'white'}}
      label="Populares"
       icon={<Favorite />} 
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