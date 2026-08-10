import React from 'react'
import Hero from './Hero'; //we want hero from current folder
import OpenAccount from '../OpenAccount'
import Brokerage from './Brokerage';



function PricingPage() {
    return (
     <>
     <Hero />
     <OpenAccount />
     <Brokerage />
     </>
    );
}

export default PricingPage;