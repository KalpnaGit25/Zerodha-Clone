import React from 'react'


function Hero() {
    return (
     
          <div className="container ">
       

         <div className="row p-5 mt-5 border-bottom text-center ">
            <h1>Pricing</h1>
            <h3 className="text-muted mt-3 fs-5">Free equity investments and flat ₹20 traday and F&O traders</h3>  
            </div>

            <div className="row p-5 mt-5">
                <div className="col-4 p-5">
                   <img src="media/images/pricingEquity.svg" />
                   <h1>Free equity delivery  </h1>
                   <p className="text-muted">
                    All equity delivery investments (NSE, BSE), ace absolutely free - ₹ 0 brokerage.
                   </p>
                </div>
                   
                <div className="col-4 p-5">
                     <img src="" />
                   <h1></h1>
                   <p></p>
                </div>
                <div className="col-4 p-5">
                     <img src="" />
                   <h1></h1>
                   <p></p>
                </div>
                
            
            </div>

        </div>
    )
}

export default Hero;