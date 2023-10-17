import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Chatbot from 'react-chatbot-kit'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Formui from "./components/Formui";
import config from "./components/config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
import { useState } from "react";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: []
 
  },
  {
    path: "/formui",
    element: <Formui />,
    children: []
 
  },
]);
function App() {
  return (
    <div className="App">
      <Header />
     <Body />
  
      <Footer />
    </div>
  );
}

export default App;
