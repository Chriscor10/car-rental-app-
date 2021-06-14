import './App.css';
import { Switch, Route} from  "react-router-dom";
import CarsDetails from './components /CarsDetails.js/CarsDetails';
import Carscontainer from './components /CarsContainer';
import Formcontainer from './components /FormContainer';
import Home from './components /Home/Home';
import NavBar from './components /NavBar/NavBar';
import Footer from './components /Footer/Footer';



function App() {
  return (
    <main className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
          <Route exact path="/Cars-for-rent">
          <Carscontainer/>
          </Route>
          <Route exact path="/Rent-with-us">
          <Formcontainer/>
          </Route>
          <Route exact path="/Cars-detail">
          <CarsDetails/>
          </Route>
          <Route exact path="/Cars/:id">
          <CarsDetails/>
          </Route>
          </Switch> 
          <Footer/>
     </main>
  );
}

export default App;
