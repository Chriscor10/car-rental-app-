import React from 'react';
import RentalCarLG from './RentalCarLG.jpg'
function Home (){
    return(
        <div className="text">
        <h1>Corona's Car Rental</h1>
        <h2>Renting Cars Since 1998</h2>
        <img alt="Car Rental" src={RentalCarLG}/>
        </div>
    )
}

export default Home;

