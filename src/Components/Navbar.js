import React from "react"
import Logo from '../Images/logo.jpg'

function Navbar(){
    return(
        <div className="w-full bg-white">
        <img src={Logo} className='w-32 md:w-22 ml-6 bg-white' alt="logo"/>
        </div>
    )
}



export default Navbar;