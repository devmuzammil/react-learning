import React, { useState } from 'react';

function Car() {
    
    const [car,setCar]=useState({year: 2024, make: "Ford", model: "Mustang" });

    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
    }

    return (
        <>
        <p>Your favourite Car is: {car.make} {car.model} {car.year}</p>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        </>
    );
}
export default Car;