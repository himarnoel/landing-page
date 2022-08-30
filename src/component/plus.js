import React from 'react'
import img1 from '../images/ios.svg'
import img2 from '../images/and.svg'
const Plus = () => {
  return (
    <div>
         <div className="text-center"><h4>Shop on the go</h4></div>
          <br />
<div className="text-center"><span className="">Get the best Shopascart experience all in one app.</span></div>
<br />
<div className="container w-25  d-flex justify-content-evenly pb-5">
    <img src={img1} alt="" className="img pe-2" />
<img src={img2} className="img" />
</div>
    </div>
  )
}

export default Plus