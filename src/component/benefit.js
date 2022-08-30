import React from 'react';
import Path from '../images/path.js';
import Path2 from '../images/path2.js'
const Benefit = () => {
    const mystyle = {
        margin:"1rem",
      };
    return (
        <div>
              <div className="text-center fs-2 mb-5">Grocery shopping done right</div>
<div style={mystyle} className="p-5">
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col-lg-4 col-md-4">
    <div class="card cardi">
    <div class="card-body">
        <h5 class="card-title">Choose what you want</h5>
        <p class="card-text">Select items from your favorite grocery stores or local markets.</p>
      </div>
    <Path/>
    </div>
  </div>
  <div class="col-lg-4 col-md-4">
    <div class="card cardi">
    <div class="card-body">
        <h5 class="card-title">Get real-time updates</h5>
        <p class="card-text">We’ll send you real-time updates from every step of the way.</p>
      </div>
      <img src="https://assets.shopascart.com/static/gifs/Real-time%20updates.gif" class="card-img-bottom md" alt="..."/>
      
    </div>
  </div>
  <div class="col-lg-4 col-md-4">
    <div class="card cardi">
    <div class="card-body">
        <h5 class="card-title">Same-day grocery delivery</h5>
        <p class="card-text">Fresh groceries delivered same-day directly to you.</p>
      </div>
      <Path2/>
    </div>
  </div>
</div>
</div>
        </div>
    );
}

export default Benefit;
