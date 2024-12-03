import React from 'react';
import '../styles/Profilecard.css';
function Profilecard (props) {
const { name, age, occupation,location } = props; 
return (
<div className='card'>
<img src="Gutech.png" />
<h1>  {name} </h1>
<div className='content'>
<p >Age: {age}</p>
<p> Occupation: {occupation}.</p>
<p> Location: {location}.</p>
</div>
</div>
);
}
export default Profilecard;