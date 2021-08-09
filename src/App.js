import {Container} from '@material-ui/core';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Movie from './Pages/Movie/Movie';
import UltimosLanzamientos from './Pages/UltimosLanzamientos/UltimosLanzamientos';
import Populares from './Pages/Populares/Populares'
import Series from './Pages/Series/Series';
import Busqueda from './Pages/Busqueda/Busqueda';
import Footer from './Pages/Home/Footer';
import Error404 from './Pages/Error404';

function App() {

  return (
    <HashRouter basename="/">
    <Header/>
    
    <Container maxWidth={false}>
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        {/* <Route path="/" component={Trending} /> */}
        <Route path="/ultimosLanzamientos" exact={true} component={UltimosLanzamientos}/>
        <Route path="/populares" exact={true} component={Populares}/>
        <Route path="/series" exact={true} component={Series}/>
        <Route path="/busqueda" exact={true} component={Busqueda}/>
        <Route path="/movie/:id" exact={true} component={Movie} />
        <Route path="*" component={Error404} />

      </Switch>
    </Container>

   
    <Footer />
    </HashRouter>

  );
}

export default App;