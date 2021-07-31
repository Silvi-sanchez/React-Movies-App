import {Container} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import UltimosLanzamientos from './Pages/UltimosLanzamientos/UltimosLanzamientos';
import Populares from './Pages/Populares/Populares'
import Series from './Pages/Series/Series';
import Busqueda from './Pages/Busqueda/Busqueda';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <Container maxWidth={false}>
      <Switch>
      <Route path="/home" component={Home} exact/>
        {/* <Route path="/" component={Trending} /> */}
        <Route path="/ultimosLanzamientos" component={UltimosLanzamientos}/>
        <Route path="/populares" component={Populares}/>
        <Route path="/series" component={Series}/>
        <Route path="/busqueda" component={Busqueda}/>

      </Switch>
    </Container>

   
    
    </BrowserRouter>
  );
}

export default App;
