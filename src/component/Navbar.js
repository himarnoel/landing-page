
import React from 'react';
import  Svg from './svg.js'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand   m-lg-auto m-md-auto" href="#">
    <Svg/>
    </a>
    <span class=" d-lg-none d-md-inline d-none ">
      <ul class="nav justify-content-end">
  <li class="nav-item">
  <button type="button" class="btn non">Signin</button>
  </li>
  <li class="nav-item">
  <button type="button" class="btn btn-danger">Signup</button>
  </li>
  
  
</ul>
      </span>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-lg-3 me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  link" aria-current="page" href="#">Stores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link" href="#">Locations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link link" href="#">Become a Shopper</a>
        </li>
      </ul>

      <span class=" d-md-none d-lg-none">
      <ul class="nav">
  <li class="nav-item">
  <button type="button" class="btn non">Signin</button>
  </li>
  <li class="nav-item">
  <button type="button" class="btn btn-danger">Signup</button>
  </li>

</ul>
      </span>
      
    </div>
    <span class="d-none d-md-none d-lg-block ">
      <ul class="nav">
  <li class="nav-item">
  <button type="button" class="btn non">Signin</button>
  </li>
  <li class="nav-item">
  <button type="button" class="btn btn-danger">Signup</button>
  </li>

</ul>
      </span>
  </div>
 
</nav>
        </div>
    );
}

export default Navbar;
