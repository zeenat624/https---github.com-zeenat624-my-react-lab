import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import ContactForm from './Components/Contactform';
import Footer from './Components/footer';
function App() {
return (
<div>
<Navbar />
<LandingPage />
<ContactForm/>
<Footer/>
</div>
);
}
export default App;
