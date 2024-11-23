import Image from 'next/image'
import React from 'react'
import Ab1 from "/public/Ab1.png"
import "@/styles/about.css"

const Aboutpage = () => {

    const AboutoutComes=["Online Order","24/7 Service","pre-Reesevation","Orgnized food Hut place","Super chef","Clean kitchen"]
  return (
<>

<section className='about-section' data-aos="zoom-in">


<div className='about-heading'>


<h6>About us</h6>


</div>
<div className='main-about-section'>


<div>

<Image src={Ab1} alt='About-poster'/>


</div>
<div className='second-section'>

<h3>We are more than multiple service</h3>
<p>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>

<div className='last-section'>

{

AboutoutComes.map((item,i)=>(

<div key={i} className='last-dev'>

<h2>{item}</h2>
</div>

))

}

</div>

</div>

</div>




</section>





</>
  )
}

export default Aboutpage