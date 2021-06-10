import React from 'react';
import './Cars.css'

function Cars({cars,deleteCar}) {
const { id, brand, model, year, img } = cars

    function handleRentcar() {
        deleteCar(id)
    }


    return (
        <div className="Cars">
            <h2>{brand}</h2>
            <div className="Cars-details">
                <p>{model}</p>
                <p>{year}</p>
                <button className="rent-button" onClick={handleRentcar} type="submit">Rent me</button>
            </div>
        </div>
    )
} 

export default Cars;