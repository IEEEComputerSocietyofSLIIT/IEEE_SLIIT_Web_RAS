import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-scroll";

export default function Header() {
    return(
        <header class="" id="nav">
  <div class="relative flex px-2 sm:px-20 flex-col overflow-hidden  py-1 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <img src={logo} alt="Logo" className="w-32"/>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all  md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col  items-center  space-y-2 md:ml-auto md:flex-row md:space-y-0 font-semibold" >
      <Link to="nav" smooth={true} duration={1000}>
        <li class="text-gray-600 md:ml-auto hover:text-primary"><a href="#">Home</a></li></Link>
        <Link to="about" smooth={true} duration={1000}>
        <li class="text-gray-600 md:ml-12 hover:text-primary"><a href="#">About Us</a></li></Link>
        <Link to="join" smooth={true} duration={1000}>
        <li class="text-gray-600 md:ml-12 hover:text-primary"><a href="#">Join Us</a></li></Link>
        
        <Link to="committee" smooth={true} duration={1000}>
        <li class="text-gray-600 md:ml-12 hover:text-primary"><a href="#">Committee</a></li></Link>
        <Link to="contact" smooth={true} duration={1000}>
        <li class="text-gray-600 md:ml-12 hover:text-primary"><a href="#">Contact</a></li></Link>
      </ul>
    </nav>
  </div>
</header>

    )
}