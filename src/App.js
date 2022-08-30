import './App.css';
import React from "react";
import  Navbar from "./component/Navbar";
import Main from './component/main.js'
import Grid from './component/grid.js'
import Midcard from './component/test.js'
import Benefit from './component/benefit.js'
import Plus from './component/plus.js'
import Svg from './component/svg.js';
import Svg2 from './component/svg.js';
import  Shopplus from './component/Shopplus.js'
import img1 from './images/ios.svg';
import img2 from './images/and.svg';
function App() {

  return (
    <div className="App" >
      <Navbar/>
      <Main/>
    <Grid/>
    <Midcard/>
  <Benefit/>
 <Plus/>
 <Shopplus/>
<br />

<div className="text-center"><div className="fs-1">FAQ</div> <br />
Have questions? We're here to help.
</div>
<br /><br />
<div className="d-flex justify-content-center align-items-center flex-column">

  <ul class="list-group list-group-flush w-75 ">
  <li class="list-group-item float-center d-flex justify-content-between"><span>How does Shopascart work?</span>
  <a class="btn btn-light"  data-bs-toggle="collapse" href="#collapseExample"  role="button" aria-expanded="true" aria-controls="collapseExample">
Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  Shopascart helps you save time and money by connecting you with a personal shopper
   in your area. You can shop at your favorite stores and get your groceries delivered to
    your door step.
  </div>
</div>


<li class="list-group-item float-center d-flex justify-content-between"><span>How do I become a Shopascart Shopper?</span>
  <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  To become a Shopascart Shopper, you need to register with us. You can do this by clicking on the button below.

<a href="" className="lagos">Become a Shopper</a>
  </div>
</div>



<li class="list-group-item float-center d-flex justify-content-between"><span>Why is Shopascart not available in my area?</span>
  <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  Shopascart is available to only select areas of Lagos. We are working to expand our reach to other parts of the country.
  </div>
</div>


<li class="list-group-item float-center d-flex justify-content-between"><span>How do I pay for my order?</span>
  <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  You can pay with your debit or credit card.
  </div>
</div>


<li class="list-group-item float-center d-flex justify-content-between"><span>What happens if something is out of stock?</span>
  <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  <p>You can always set a substitution preference for when something is out of stock as well as chat with your shopper to see if they have any other available options.</p>

<p>You can tell your shopper to:</p>

<p>- Pick a substitution: Your shopper will contact you directly and you can pick a substitution for the item that is out of stock.</p>

<p>- Find the best substitute: Your shopper will find the best substitute for you.</p>

<p>- Don't substitute: Your shopper will not substitute anything and a refund will be issued for the item.</p>
  </div>
</div>

<li class="list-group-item float-center d-flex justify-content-between"><span>Is there a limit to the amount of orders I can place in a day?</span>
  <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link
  </a></li>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
  No, you can place as many orders as you want in a day.
  </div>
</div>

</ul></div>
<br />
<br />
<footer className="text-light">
<div className="container-fluid mn h-50  border-bottom  border-1 border-opacity-10">
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col-lg-2">
    <Svg/>
  </div>
  <div class="col-lg-2">
<div className="row">
  <div className="col-lg-12">Top Cities</div>
  <div className="col-lg-12"><a href="" className="flink">Victoria Island</a></div>
  <div className="col-lg-12"><a href="" className="flink">Lekki</a></div>
  <div className="col-lg-12"><a href="" className="flink">Ikeja</a></div>
  <div className="col-lg-12"><a href="" className="flink">Yaba</a></div>
</div>
  </div>
  <div class="col-lg-2">
  <div className="row">
  <div className="col-lg-12">Work with us</div>
  <div className="col-lg-12"><a href="" className="flink">Become a Shopper</a></div>
  <div className="col-lg-12"><a href="" className="flink">Be a Partner Store</a></div>
  <div className="col-lg-12"><a href="" className="flink">In-Store Shopper</a></div>
  <div className="col-lg-12"><a href="" className="flink">Shopascart Ambassador Program</a></div>
</div>
  </div>

<div class="col-lg-2">
  <div className="row">
  <div className="col-lg-12">Get to know us</div>
  <div className="col-lg-12"><a href="" className="flink">Careers</a></div>
  <div className="col-lg-12"><a href="" className="flink">Investors</a></div>
  <div className="col-lg-12"><a href=""className="flink">Press</a></div>
</div>
  </div>
  <div class="col-lg-2">
  <div className="row">
  <div className="col-lg-12">Legal</div>
  <div className="col-lg-12 "><a href="" className="flink">Terms of Use</a></div>
  <div className="col-lg-12"><a href="" className="flink">Privacy Policy</a></div>
</div>
  </div>
  <div class="col-lg-2">
  <div className="row">
  <div className="col-lg-12">Support</div>
  <div className="col-lg-12"><a href="" className="flink">FAQs</a></div>
  <div className="col-lg-12 "><a href="" className="flink">Contact Us</a></div>
</div>
  </div>
</div>  
</div>

<div className="container    h-25">
<div className="row justify-content-end  mt-5 fs-6 coe"><p className="coe">© 2022 Shopascart, inc. All rights reserved.</p>
<p className="coe">Offer only available to new members. Use code FIRSTORDER at checkout to get your first delivery free.</p>
</div>

<div className="float-start"><div className="container w-25  hs d-flex justify-content-evenly pb-5">
    <img src={img1} alt="" className="imgn pe-1" />
<img src={img2} className="imgn" />
</div></div>

</div>
<br />

<div className="container"><p className="float-start">Coming soon</p></div>
</footer>
    </div>
  );
}

export default App;
