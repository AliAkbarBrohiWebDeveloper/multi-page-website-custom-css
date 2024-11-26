import React from 'react'
import "@/styles/contact.css"

const Contact = () => {
  return (
    <div>
<section className='contact-section'>

<h3>Contact Us</h3>
<form action="">
<input type="text" placeholder='Full Name' required/>
<input type="email" placeholder='Email' required />
<input type="text"  placeholder='Phone Number' required/>
<textarea placeholder='Your Message' rows={5} className='textarea-section'></textarea>
<button>Send Message</button>


</form>

</section>


    </div>
  )
}

export default Contact