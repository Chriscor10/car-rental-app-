import React, { useState, useEffect } from 'react';
import Cars from './Cars';
import './CarsContainer.css'



function Carscontainer () {
const [cars, setCars] = useState([])

useEffect (() => {
    const URL = "http://localhost:3001/Cars";
    fetch(URL)
    .then(r => r.json())
    .then(CarsData => setCars(CarsData))
    }, [])
    
return (
        <div className="Car-container">
           { cars.map(cars => {
               return <Cars cars={cars} />
           })

           }
        </div>
    );
}


 export default Carscontainer;