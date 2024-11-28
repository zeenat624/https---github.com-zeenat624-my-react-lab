import React from 'react';
import '../Styles/LandingPage.css'; // Import CSS file
function LandingPage() {
return (
<div className="landing-container">
<h1 className="landing-title">Craving Something? Let Us Bring It to You!</h1>
<p className="landing-subtitle">
CravinngGo! delivers your favorite meals fast and fresh, satisfying every craving with a just few clicks.
</p>
<button className="landing-button">
Learn More
</button>
<img class="pic" src= "food.jpg" />
</div>
);
}
export default LandingPage;