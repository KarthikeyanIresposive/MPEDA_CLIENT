import React,{useState} from "react";
import vdeo from "../assets/vdro.mp4";
import Formui from "./Formui";



const Body = () => {
  const[isChat,setIsChat]=useState(false)
  const[showbot,setShowBot]=useState(false)


  return (
    <div className="main_component">
      <video autoPlay muted loop>
        <source src={vdeo} type="video/mp4" />
      </video>
      <div class="overlay-content">
        <h1>Welcome to ChatBot</h1>

        <button
          className="btn btn-lg btn-info mt-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={()=>setIsChat(true)}
        >
          Chat with me
        </button>
      </div>
      <Formui show={isChat} setShow={setIsChat} showbot={showbot} setShowBot={setShowBot}/>
    </div>
  );
};

export default Body;
