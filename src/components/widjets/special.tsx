import React from 'react'
import '@/styles/special.css'
import Image from 'next/image'



const specialImages=[{
    src:"/order1.png",
    img2:"/G1.png",
    header1:"Kebab",
    header2:"⭐ (4.5)",
    paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",
  
  },{
  
    src:"/order2.png",
    img2:"/G3.png",
    header1:"Chicken Tikka ",
    header2:"⭐ (4.8)",
    paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",
  
  },{
  
    src:"/order3.png",
    img2:"/G2.png",
    header1:"Desi Chowmein",
    header2:"⭐ (4.6)",
    paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",
  
  
  },{
  
    src:"/order4.png",
    img2:"/G1.png",
    header1:"Chicken Chargha",
    header2:"⭐ (4.2)",
    paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",
  
  }
  ]
  


const Special = () => {
  return (
    <>
    <section className='top-special-section' data-aos="zoom-in">


<div className='special-section'>

<h3>Today special offers</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

</div>
<div className='special-images'>

    {
specialImages.map((images,i)=>(

<div key={i}>


<Image src={images.src} alt='special-section-images' height={200} width={200} className='image1'/>
<div className='short-images'>

<Image src={images.img2} alt='short-images ' height={50} width={50} className='image-2'/>
<h3>{images.header2}</h3>

</div>
<h5 className='header5'>{images.header1}</h5>
<p className='paragraph1'>{images.paragraph}</p>

<div className='special-button'>

<button>orderNow</button>

</div>

</div>


))

    }

</div>



    </section>
    
    
    </>
  )
}

export default Special