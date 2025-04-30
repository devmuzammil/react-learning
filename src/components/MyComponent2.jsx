import React, { useState } from "react";

function MyComponent2() {
    const [name,setName]=useState('Muzammil Hussain');
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("");
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
  
    return(
        <>
        <input value={name}  onChange={handleNameChange} type="text"/>
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} type="text" placeholder="leave the comment"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="JazzCash">JazzCash</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}/>
            Pick Up
        </label>
        <br />
        <br />
        <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        </>
    );
}
export default MyComponent2;