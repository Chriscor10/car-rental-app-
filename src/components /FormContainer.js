import React, { useState, useEffect } from 'react';
import CarForm from './CarForm/CarForm';
// import Cars from './Cars';
import './CarsContainer.css'

const BASE_URL = "http://localhost:3001/Cars";

function Formcontainer () {
const [cars, setCars] = useState([])

useEffect (() => {
  
    fetch(BASE_URL)
    .then(r => r.json())
    .then(CarsData => setCars(CarsData))
    }, [])
    

    function addCar(car) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car)
        }

        fetch(BASE_URL, config)
        .then(r => r.json())
        .then(carRenting => {
            const carRent = [...cars, carRenting];
            setCars(carRent);
        })
    }

return (
        <div className="Form-container">
            <CarForm addCar={addCar}/>
        </div>
    
    );
}



 export default Formcontainer;