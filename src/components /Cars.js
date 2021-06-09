import React from 'react';
import './Cars.css'

function Cars({cars}) {
const { id, brand, model, year, img } = cars


    return (
        <div className="Cars">
            <h2>{brand}</h2>
            <div className="Cars-details">
                <p>{model}</p>
                <p>{year}</p>
            </div>
        </div>
    )
} 

export default Cars;