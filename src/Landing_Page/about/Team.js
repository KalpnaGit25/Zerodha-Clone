import React from 'react'


function Team() {
    return (
     
      
     <div className="container">
        <div className="row p-5 mt-5  border-top">
            <h1 className=" text-center  ">
                People
            </h1>
        </div>

         <div className="row p-5 border-top text-muted fs-6"
         style={{ lineHeight:"1.8", fontSize: "1.2em" 
         }}>
            <div className="col-6 p-5 text-center">
              <img src="media\images\nithinKamath.jpg" style={{borderRadius:"100%", width: "60%"}} />
              <h4 className="mt-5">
                Nitin Kamath
              </h4>
              <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-5 ">
         <p>Nitin bootstrapped and founded Zerodha in 2018 to overcome the hurdles
          he faced during his decide long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
         </p>
         <p>He is a member of SEBI Secondary market Advisory Committee (SMAC) and
          the Market Data Advisory <p>Commitee (MDAC)</p>
         </p>
         <p>Playing basketball is his zen.</p>
         <p>Connect  on <a href=""> Homepage</a>
                    /  <a href=""> TradingQ&A</a>
                     /   <a href=""> Twitter </a> </p>
          </div>

            
                
            </div>
        </div>
    );
}

export default Team;