import React, { useState, useEffect } from 'react';

function CarsDetails() {
    const [cars, setCars] = useState( {
        "id": 1,
        "brand": "Toyota",
        "model": "Camry",
        "year": "2019",
        "image": "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/05/chrome-image-417908.png"
      })

      console.log(cars)
    return (
        <div>
            <img src={cars.image}/>
        </div>
    )
}

export default CarsDetails