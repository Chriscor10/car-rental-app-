import React from 'react';
import RentalCarLG from './RentalCarLG.jpg'
function Home (){
    return(
        <div className="text">
        <h1>Flatiron Car Rental</h1>
        <h2>Renting cars</h2>
        <img alt="Car Rental" src={RentalCarLG}/>
        </div>
    )
}

export default Home;

