import React from 'react'


function Hero() {
    return (
     
         <section className="container-fluid" id="supportHero">
        <div className=" p-5 mt-5 mb-5" id="spportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>

           <div className=" row  p-5 mt-5 mb-5" > 
             <div className=" col-6 p-5 " >
                <h1 className="fs-3">Search for an answer or browser help topics to create a ticket</h1>
                <input placeholder="Eg. how do i activate F&O, why is my getting rejected."  />

               <a href=""> Track account Opening</a>
               <a href="">Track segment activation</a>  
               <a href="">Intraday margins</a>
               <a href="">Kite user manual</a> 

             </div>
             <div className="col-6 p-5" > 
                <h1 className="fs-3">Featured</h1>
                <ol>

                


                </ol>
                <a href=""> Current Takeovers and Delisting - January 2024</a>
               <a href="">Latest Intraday levengers manual</a> 
             </div>
          </div>
        </section>
    )
}

export default Hero;