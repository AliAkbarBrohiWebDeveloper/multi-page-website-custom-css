"use client"
import React, { useState } from 'react'
import '../../styles/header.css'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Header = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false) ;

const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen)
}
  return (
    <header className='mainHeader'>

<div className='main-div'>

<div >

<h1>Food Hut</h1>

</div>


<ul> 
<li className='ul-list1'>
  <Link href={"/"}>
 Today special offers
  
  </Link>
    <Link href={'/About'}>
    Why FoodHut
    
  
    
    </Link>
    <Link href={'/Menu'}>
    Our Menu
    
    
    </Link>
    
  </li>
  </ul>
  
<div className='navbar-menu-icon' onClick={toggleMenu}>
{isMenuOpen ? <AiOutlineClose size={30}/>: <AiOutlineMenu size={30}/>}



</div>

</div>


{isMenuOpen&&(
 <ul>
 <li className={`ul-list    ${isMenuOpen ? "open" : ""}`}>
 
 <Link href={'/'} onClick={toggleMenu}>TODAY SPECIAL OFFERS</Link>
 
 
 <Link href={"/About"} onClick={toggleMenu}>WHY ABOUT US</Link>
 
 
 
 <Link href={'Menu'} onClick={toggleMenu}> OUR MENU</Link>
 
 </li>
 
     </ul>  

)}




    </header>
  )
}

export default Header