import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Navbar,
  Nav,
   } from 'reactstrap';

import { useHistory } from 'react-router-dom';

import Profile from "../components/Profile";
import Home from "../components/Home";
import Request from "../components/Request";
import { ComponentTransition, AnimationTypes } from "react-component-transition";





export default function Main({}) {
  
  const [data, setData] = useState(""); 
  const [slogin, setSlogin] = useState(false);//status for icon
  const [nav, setNav] = useState("home");
  const [img, setImg] = useState("");
  
  
  const [request, setRequest] = useState([]);
  const [driver1, setDriver1] = useState([]);
  const [driver2, setDriver2] = useState([]);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    getrole();
    getdata();
    
    const interval = setInterval(() => {
      getrole();
      getdata();  
   
      } , 1000);
  
     return () => clearInterval(interval);
   
  }, []);

  
    
  const history = useHistory();
  const filterValue = (obj, key, value)=> obj.find(v => v[key] === value);
  const getdata = () =>{
    Axios.get("http://192.168.0.189:3001/data").then((response) => {
      if (response.data) {
        
        var profilekid = filterValue(response.data[0]);
        var driver1 = filterValue(response.data[1]);
        var driver2 = filterValue(response.data[2]);
        setRequest(profilekid);
        setDriver1(driver1);
        setDriver2(driver2);
        setData(profilekid.statusk);
        setImg(profilekid.image);
      
      }
    });

  }
 
  
  const logout = () => {
    Axios.post("http://192.168.0.189:3001/logout", {
     
    }).then((response) => {
     
    });
    history.push("/");
  };

  const getrole = () =>{
    Axios.get("http://192.168.0.189:3001/login").then((response) => {
      if (response.data.loggedIn == true) { 
        
        
        setSlogin(true);
        
      }else{
        history.push("/");
        
      }
    });
  }
  
  let currentComponent = null;
  if(nav === "home"){
    currentComponent =  <Home img={img} data={data} request={request} driver1={driver1} driver2={driver2} setNav={setNav} />;
  }
  else if(nav === "request"){
    currentComponent = <Request request={request} />;
  }
  else{
    currentComponent =  <Profile request={request} img={img} logout={logout} />;
  }

let btn_home = nav == "home" ? "fas fa-1x fa-home home" : "fas fa-1x fa-home ";
let btn_request = nav == "request" ? "fas fa-1x fa-bell request" : "fas fa-1x fa-bell ";
let btn_profile = nav == "profile" ? "fas fa-1x fa-user profile" : "fas fa-1x fa-user ";


  return (
     

      <div className="main">
        
        <ComponentTransition
            enterAnimation={AnimationTypes.fade.enter}
            exitAnimation={AnimationTypes.fade.exit}
        >
            {currentComponent}
        </ComponentTransition>
        <Navbar className="fixed-bottom navbar-tracking"   expand="md" style={{padding:20}} >
          
            <Nav   style={{display: "flex",flexDirection:"row",justifyContent:"space-around",margin:"auto",maxWidth: "400px",width:"100%"}}>
              
                <a  onClick={() => { setNav("home")}}><i className={btn_home} style={{fontSize:"32px"}}></i></a>
                <a  onClick={() => { setNav("request");}}><i className={btn_request} style={{fontSize:"32px"}}></i></a>
                <a  onClick={() => { setNav("profile")}}><i className={btn_profile} style={{fontSize:"32px" }}></i></a>
              
            </Nav>
          
        </Navbar> 
          
         
      </div>
     
   
  ); 
}

