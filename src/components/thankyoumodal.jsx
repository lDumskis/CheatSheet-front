import React from "react";
import "../App.css";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#002E6E',
    padding: '50px',
    color: '#FFF'
    
}

export const Thankyoumodal = ({showModal, setShowModal}) => {
  return <>{showModal ? 

  <div style= {MODAL_STYLES}>
      <span class="material-icons">done</span><br></br>
      Thank you! We got your request.
      <div className="row-2">
          <button className="btn-module">HOME</button>
          <button className="btn-module">HOT ANOTHER REQUEST?</button>     </div>
    </div> 
: null}</>;
};

export default Thankyoumodal;
