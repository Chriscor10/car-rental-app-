import React, { useState, useEffect } from 'react';
// import CarForm from './CarForm/CarForm';
import Cars from './Cars';
import './CarsContainer.css'

const BASE_URL = "http://localhost:3001/Cars";

function Carscontainer () {
const [cars, setCars] = useState([])

useEffect (() => {
  
    fetch(BASE_URL)
    .then(r => r.json())
    .then(CarsData => setCars(CarsData))
    }, [])
    
    function deleteCar(carsId) {
        const URL = `${BASE_URL}/${carsId}`
        const config = {method: "DELETE"};
        fetch(URL, config)
        .then(r => r.json())
        .then(() => {
            const newCars = cars.filter(cars => cars.id !== carsId);
            setCars(newCars);
        })
    }

    // function addCar(car) {
    //     const config = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(car)
    //     }

    //     fetch(BASE_URL, config)
    //     .then(r => r.json())
    //     .then(carRenting => {
    //         const carRent = [...cars, carRenting];
    //         setCars(carRent);
    //     })
    // }

return (
        <div className="Car-container">
            {/* <CarForm addCar={addCar}/> */}
           { cars.map(cars => {
            return <Cars 
                    key={cars.id}
                    cars={cars}
                    deleteCar={deleteCar}
                    // addCar={addCar}
                    />
           })}
           
        </div>
    
    );
}



 export default Carscontainer;