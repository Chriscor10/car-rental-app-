import './App.css';
import { Switch, Route} from  "react-router-dom";
import Carscontainer from './components /CarsContainer';
import CarsDetails from './components /CarsDetails.js/CarsDetails';
import Formcontainer from './components /FormContainer';
import Home from './components /Home/Home';
import NavBar from './components /NavBar/NavBar';



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
          <Route exact path="/Car-detail">
          <CarsDetails/>
          </Route>
          </Switch>
          {/* <CarsDetails/> */}
     </main>
  );
}

export default App;
