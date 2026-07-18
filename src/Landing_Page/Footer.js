import React from 'react'

function Footer() {
    return ( 
            // <h1>Hero <i className="fas fa-user-circle"></i></h1>

  <footer style={{ backgroundColor: "rgb(250, 250, 250"}}>         
   <div className = 'container border-top mt-5' >
    <div className='row mt-5'>
        <div className='col'>
            <img src='media/images/logo.svg' style={{width:"50%"}} />
            <p>
                &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved. 
            </p>
        </div>
        <div className="col" >
            <p>Company</p>
             <a href="">About </a>
             <br/>
             <a href="">Products </a>
             <br/>
             <a href="">Pricing </a>
             <br/>
             <a href="">Refferal programme </a>
             <br/>
             <a href="">Careers </a>
             <br/>
             <a href="">Zerodha tech </a>
             <br/>
             <a href="">Press & media </a>
             <br/>
             <a href="">Zerodha Cares (CSR) </a>
             <br/>
        </div>
        <div className="col">
            <p>Support</p>
              <a href=" " > Contact</a><br/>
              <a href=" " > Z-Connect blog</a><br/> 
              <a href=" " > List of charges</a><br/> 
              <a href=" " > Downloads & resources</a><br/>
        </div>
        <div className="col">
            <p>Account</p>
              <a href=" ">Open an Account</a><br/> 
              <a href=" ">Fund transfer</a><br/> 
              <a href=" ">60 day challenge</a><br/>
        </div>
    </div>
    <div className='mt-5  text-muted'  style={{fontSize:"14pxs"}}>

        <p>
  Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633.
  CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.:
  IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd.
  MCX: 46025. Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
  Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase,
  Bengaluru – 560078, Karnataka, India.
</p>

<p>
  For any complaints pertaining to securities broking please write to
  complaints@zerodha.com. For DP related queries write to dp@zerodha.com.
  Please ensure you carefully read the Risk Disclosure Document as prescribed
  by SEBI and CDSL before investing.
</p>

<p>
  Procedure to file a complaint on SEBI SCORES:
  Register on the SCORES portal. Required details include Name, PAN, Address,
  Mobile Number and E-mail ID. Benefits include effective communication and
  speedy redressal of grievances.
</p>

<p>
  Investments in securities market are subject to market risks.
  Read all the related documents carefully before investing.
</p>

</div>

    </div>
    </footer> 

 );
}

export default Footer;