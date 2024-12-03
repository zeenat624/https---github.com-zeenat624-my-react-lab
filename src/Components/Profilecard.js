import React from 'react';
import './Profilecard.css';
function Profilecard (props) {
const { name, age, occupation,location } = props; 
return (
<div className='caed'>
<h1>  {name} </h1>
<p>Age:{age} </p>
<p> Occupation: {occupation}.</p>
<p> Location: {location}.</p>
</div>
);
}
export default Profilecard;