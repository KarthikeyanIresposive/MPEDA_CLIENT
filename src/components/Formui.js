import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {useNavigate } from "react-router-dom";
import ChatBot from "./MyComponent";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import MyComponent from "./MyComponent";
import Chatbot from "react-chatbot-kit";



const Formui = ({show,setShow,showbot,setShowBot}) => {
 
    const navigate = useNavigate();
    const handleCustomCloseClick = () => {
        setShow(true)
        window.location.reload();
    
      };
  return (
    <>
    <Modal show={show}   onHide={() => setShow(false)}  className="p-3">
    <Modal.Header>
      {showbot ? <Modal.Title className="text-info fw-light">CHAT</Modal.Title>:
      <Modal.Title className="text-info fw-light">USER FORM</Modal.Title>
      }
      <button
        type="button"
        className="close btn btn-sm btn-outline-danger"
        onClick={() => handleCustomCloseClick()}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Modal.Header>
    {showbot == true ?

    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      :<Modal.Body>
      <form action="">
      <input
      type="text"
      name="firstName"
      className="form-control mb-3"
      placeholder="FirstName"
     
    />
    <input
      type="text"
      name="lastName"
      className="form-control mb-3"
      placeholder="LastName"
      
    />
    <input
      type="text"
      name="email"
      className="form-control mb-3"
      placeholder="Email"
    
    />
    <input
      type="text"
      name="phoneNumber"
      className="form-control mb-3"
      placeholder="Phone Number"
      
    />
    <div className="text-center">
    <button className="btn btn-info" onClick={()=>{setShowBot(true)
    }}>
     Start chart
    </button>
    

    </div>
 
      </form>
      
  </Modal.Body> 

 
    }
  </Modal>


  
 
  </>
  );
};

export default Formui;
