import React, { useState } from "react";

function FoodList() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Mango"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>Food List</h2>
            <ul>
                {
                    foods.map((food, index) =>
                        <li key={index} onClick={() => handleRemoveFood(index)}>
                            {food}
                        </li>
                    )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter the Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );
}


export default FoodList;