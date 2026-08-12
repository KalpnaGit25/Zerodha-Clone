import React from 'react'


function CreateTicket() {
    return (
     
     <div className="container">
        <div className="row p-5 mt-5 mb-5">
            <h1 className="fs-2 text-center ">
                To create a ticket, select a relevent topic
            </h1>
              <div className="container">
               <div className="col-4 mt-5 mb-5">
                  <h4 className=" ">
                 <i class="fas fa-plus-circle"></i> Account Opening
                  </h4>
            </div>
            <div className="col-4 mt-5 mb-5">
                  <h4 className=" ">
                    To create a ticket, select a relevent topic
                  </h4>
            </div>
          </div>
        </div>
    </div>
    )
}

export default CreateTicket;