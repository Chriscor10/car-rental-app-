import React, {useState} from 'react';
import './CarForm.css'


function CarForm({addCar}) {
    const [formState, setFormState] = useState({
        brand: "",
        model: "",
        year: "",
    })

    function handleNewCar (event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

        function handleSubmit(event) {
            event.preventDefault();
            addCar(formState)
            }
        

    return (
        <div className="car-form">
            <h1 className="car-form-heading">Rent your car with us!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Brand:
                    <input 
                    name="brand" 
                    type="text" 
                    value={formState.brand} 
                    onChange={handleNewCar}
                    />
                </label>
                <label>
                    Model:
                    <input 
                    name="model" 
                    type="text" 
                    value={formState.model} 
                    onChange={handleNewCar}
                    />
                </label>
                <label>
                    Year:
                    <input 
                    name="year" 
                    type="text" 
                    value={formState.year} 
                    onChange={handleNewCar}
                    />
                </label>
                <button type="submit">Rent Now</button>
            </form>

        </div>
    )
}     

export default CarForm;