import React from 'react'
import "@/styles/menu.css"
import Image from 'next/image'




const menuImages=[{
  src:"/order1.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.5)",
  paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",

},{

  src:"/order2.png",
  img2:"/G3.png",
  header1:"Kebab",
  header2:"⭐ (4.8)",
  paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",

},{

  src:"/order3.png",
  img2:"/G2.png",
  header1:"Kebab",
  header2:"⭐ (4.6)",
  paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",


},{

  src:"/order4.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.2)",
  paragraph:"15$(4.8)Lorem Ipsum is simply dummy text of the printing and typesetting industryOrder Now",

}
]

const MenuPage = () => {

   const menu="Menu that always make you \n fall in love"
  return (
  <>
  
  <section className='main-section' data-aos="zoom-in">


<div className='main-dev'>

<div className='main1-dev'>

<h5>  OUR MENU</h5>
<h6>{menu}</h6>
  


<div className='images-dev'>

{
menuImages.map((menu,index)=>(

<div key={index}>

<Image src={menu.src} alt='menu-images' height={200} width={200} className='image1'/>

<div className='second-image-dev'>

<Image src={menu.img2} alt='Group1' height={50} width={50} className='image2'/>
<h2 className='header9'>{menu.header2}</h2>

</div>

<h4 className='header5'>{menu.header1} </h4>
<p className='paragraph1'>{menu.paragraph}</p>
<div className='button-dev'>
<button>order Now</button>
</div>
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

export default MenuPage