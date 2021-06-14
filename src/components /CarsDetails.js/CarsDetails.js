import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarsDetails.css'

function CarsDetails({deleteCar}) {
    const [cars, setCars] = useState([])
    const params = useParams();
    const id = params.id;
    const URL = `http://localhost:3000/Cars/${id}`;

    
    useEffect (() => {
        fetch(URL)
        .then(r => r.json())
        .then(CarsData => setCars(CarsData))
        }, [])


    return (
        <div className="cars-details">
           <h1>{cars.brand}</h1>
           <h2>{cars.model}</h2>
           <h3>{cars.year}</h3>
           <img alt="rent" src={cars.image}/>
        </div>
    )
}

 export default CarsDetails