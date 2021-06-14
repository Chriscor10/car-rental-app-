import React from 'react';
import './Cars.css'
import { Link } from 'react-router-dom';

function Cars({cars,deleteCar}) {
const { id, brand, model, year, image} = cars

    function handleRentcar() {
        deleteCar(id)
    }


    return (
        <div className="Cars">
            <h2>
                <Link to={`/Cars/${id}`}>{brand}</Link>
               </h2>
            <div className="Cars-details">
                <p>{model}</p>
                <p>{year}</p>
                <img alt="rent "src={image}/>
                <div>
                <button className="rent-button" onClick={handleRentcar} type="submit">Rent me</button>
                </div>
            </div>
        </div>
    )
} 

export default Cars;