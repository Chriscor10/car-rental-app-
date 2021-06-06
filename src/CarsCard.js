import React, {useEffect, useState} from 'react';



function Cardcontainer () {
    const [Cars, setCars] = useState([]);
    const id = 1;

    useEffect (() => {
    const URL = ` http://localhost:3001/Cars/${id}`;
    fetch(URL)
    .then(r => r.json())
    .then(CarsData => setCars(CarsData))
    }, [])

    return (
        <div>
            <h2>{Cars.brand}</h2>
            <h3>{Cars.model}</h3>
            <h4>{Cars.year}</h4>
            <img src= {Cars.image} />
        </div>
    )
}
 export default Cardcontainer;