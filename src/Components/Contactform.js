import React from 'react';
import '../Styles/Contactform.css';
function ContactForm() {
    return (
     
      <div className="card">
      <form>
      <p>Contact Us</p>
      <label>
      Name:
      <input type="text" /> <br />
      </label> 
      <label>
      Email:
      <input type="text" /> <br />
      </label>
      <label>
      Phone:
      <input type="text" /> <br />
      </label>
      <button className='button'>Submit</button>
      </form>
      </div>
      
    )
  }
  export default ContactForm;