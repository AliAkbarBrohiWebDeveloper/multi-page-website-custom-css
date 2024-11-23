"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@/styles/hero.css"
import Image from 'next/image'
import logo from "/public/photo1.png"
import heroposter from "/public/heroPoster.png"

const Hero= () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);


     const headeingChanger="We're Serious For \n Food & Delivery."
  return (
    <>
    
    <section className='top-section' data-aos="zoom-in">

<main className='main-header'>

<div className='img-dev'>

<Image src={logo} alt='logo'/>
<h5>people trust us</h5>


<h1> {headeingChanger}</h1>
<p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
<input type="text" placeholder='Search for Food' />
<div className='button'>
<button>Download App</button>
<h5>Wtach video</h5>

</div>


</div>
<div className='Hero-poster'>
<Image src={heroposter} alt='Hero-poster'/>

</div>


</main>



    </section>
    
    
    
    </>
  )
}

export default Hero