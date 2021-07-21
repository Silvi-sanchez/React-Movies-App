import {Container} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Populares from './Pages/Populares/Populares'
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import UltimosLanzamientos from './Pages/UltimosLanzamientos/UltimosLanzamientos';
import Series from './Pages/Series/Series';
import Busqueda from './Pages/Busqueda/Busqueda';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app"> </div>
    <Container>
      <Switch>
        <Route path="/" component={Trending} exact/>
        <Route path="/home" component={Home}/>
        <Route path="/populares" component={Populares}/>
        <Route path="/ultimosLanzamientos" component={UltimosLanzamientos}/>
        <Route path="/series" component={Series}/>
        <Route path="/busqueda" component={Busqueda}/>

      </Switch>
    </Container>

    <SimpleBottomNavigation/>
    
    </BrowserRouter>
  );
}

export default App;
