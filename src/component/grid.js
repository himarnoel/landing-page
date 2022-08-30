import React from 'react';
import img from '../images/img1.png'
import img1 from '../images/img2.png'
import img2 from '../images/img3.png'
import img3 from '../images/img4.png'
const Grid = () => {
    const mystyle = {
        margin:"1rem",
      };
    return (
        <div>
              <div className="text-center fs-2 mt-5">Favorite stores in <span className="lagos">Lagos</span></div>
            <div class="container-fluid mt-5">
      <div style={mystyle}>
        <div class="row row-cols-1 row-cols-md-5 g-4">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <img src={img} class="card-img-top rounded" alt="..."/>
            <div class="card-body">
              <p class="card-text"> Shoprite<br /> Delivery •Pickup.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <img src={img1}  class="card-img-top rounded" alt="..."/>
            <div class="card-body">
              <p class="card-text">Addide<br /> Delivery •Pickup.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <img src={img2}  class="card-img-top rounded" alt="..." />
            <div class="card-body">
            <p class="card-text">Deli <br /> Pickup.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <img src={img3}  class="card-img-top rounded" alt="..." />
            <div class="card-body">
            <p class="card-text">Supermart <br /> Delivery •Pickup.</p>
            </div>
          </div>
        </div>
        
      </div></div>
</div>
        </div>
    );
}

export default Grid;
