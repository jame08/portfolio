import React from "react";
import "./Navbar.css"

const Navbar = props =>
<div className= "navbar">

<ul className= "name">
    <li><spam class="active">Jonas Morel</spam></li>
</ul>

<ul>
  <li><a class="active" href="#home">About me</a></li>
  <li><a href="#news">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
 
</ul>


</div>

export default Navbar;