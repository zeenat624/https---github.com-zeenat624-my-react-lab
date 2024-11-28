import React from 'react';
import '../Styles/footer.css'; 
function Footer() {
return (
<footer> 
<div className="footer-container">
<ul >
<li><a href="/terms">Terms & Conditions</a></li>
<li><a href="/privacy">Privacy Policy</a></li>
<li><a href="/faq">FAQ</a></li>
<li><a href="/support">Support</a></li>
</ul> 
<p>&copy; 2024 CravingGo</p> 
<p>Follow us on:<br/>   
<a href="https://www.facebook.com/CravingGo">Facebook</a>,
<a href="https://www.Twitter.com/CravingGo">Twitter</a>,
<a href="https://www.Twitter.com/CravingGo!">Instagram  <br/> </a>
<img  src= "craving.png"/> <h2 >CravingGo!</h2>  
</p> 

     
    </div> 
  </footer> 
);
}
export default Footer;