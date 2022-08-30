import React from 'react';

const Main = () => {
    return (
        <div>
            
      <section className="container-fluid sect h-100">
  <div className="text-light ms-5">
  <div class="row ">
    <div class="col-12 col-lg-6  col-md-6">
    <div class="row gy-5 mt-3 ">
    <div class="col-12 fs-1 fw-bold ">
    Get your groceries <br />
delivered same-day
    </div>    
    <div class="col-12 d-lg-inline d-none fs-5">
    Order what you want from grocery stores and local market <br/> near you and get it delivered right to your door.
    </div>
    <div class="col-12">
  <form action="">
  <input class="form-control me-2 mb-3 w-75" type="search" placeholder="Search" aria-label="Search"/>
  </form>
    </div>
  </div>
    </div>
    <div class="col-lg-6 col-md-6 d-none d-md-inline d-lg-inline">
 <img src="https://assets.shopascart.com/static/images/Hero.png" alt=""  className="img-fluid"/>
    </div>
   
  </div>
  </div>
      </section>

        </div>
    );
}

export default Main;
