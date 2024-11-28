import React from 'react';
import '../Styles/Navbar.css'; 
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo"> <img  src= "craving.png"/> <p>CravingGo!</p></div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">About</a></li>
<li><a href="#" className="navbar-link">Services</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
<button className="Login-button">
Login
</button>
<button className=" Signup-button">
Signup
</button>
</ul>

</nav>
);
}
export default Navbar;

