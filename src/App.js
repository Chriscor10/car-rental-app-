import './App.css';
import Carscontainer from './components /CarsContainer';
import CarsDetails from './components /CarsDetails.js/CarsDetails';
import { Switch, Route } from  "react-router-dom";
import Formcontainer from './components /FormContainer';
import Home from './components /Home/Home';



function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/">
          </Route>
          {/* <Home/>
      <Carscontainer/>
      <Formcontainer/>
      <CarsDetails/> */}
      </Switch>
     </main>
  );
}

export default App;
