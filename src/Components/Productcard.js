import React from 'react';
import '../styles/Productcard.css';
function Productcard (props) {
const { title, description, price, imageUrl} = props; 
return (

<div className='card'>
<img className='image' src={imageUrl} /> 
<h2>  {title} </h2>
<div className='content'>
<p >{description}</p>
<p className='Price'> ${price}.00</p>

<button>Add to cart</button>


</div>
</div>
);
}
export default Productcard;
