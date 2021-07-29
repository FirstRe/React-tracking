import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Navbar,
  Nav,
   } from 'reactstrap';

import { useHistory } from 'react-router-dom';

import Profile from "../components/Profile";

import Request from "../components/Request";
import { ComponentTransition, AnimationTypes } from "react-component-transition";
import Homepage from "../components/Homepage/Homepage";

//redux

import { useSelector, useDispatch } from 'react-redux';
import {  updateimg,updatedata,updatedriver1,updatedriver2,updaterequest,statuslogin } from "../actions";



export default function Main({}) {
  const slogin = useSelector(state => state.isLogged);
  const img = useSelector(state => state.imguser);
  const data = useSelector(state => state.datauser);
  const request = useSelector(state => state.userrequest);
  const driver1 = useSelector(state => state.datadriver1);
  const driver2 = useSelector(state => state.datadriver2);
  const dispatch = useDispatch();

  
  // const [slogin, setSlogin] = useState(false);//status for icon
  const [nav, setNav] = useState("home");
  // const [img, setImg] = useState("");
  
  const urllocal = "http://192.168.1.110:3001";
  

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    getrole();
    getdata();
    
    const interval = setInterval(() => {
      if(slogin == true){
        getrole();
        getdata();
      }else{
        getrole();
      }
      
      } , 1000);
  
     return () => clearInterval(interval);
   
  }, []);

  
    
  const history = useHistory();
  const filterValue = (obj, key, value)=> obj.find(v => v[key] === value);
  const getdata = () =>{
    Axios.get(`${urllocal}/data`).then((response) => {
      if (response.data) {
        
        var profilekid = filterValue(response.data[0]);
        var driver1 = filterValue(response.data[1]);
        var driver2 = filterValue(response.data[2]);
        
        dispatch(updaterequest(profilekid));
        dispatch(updatedriver1(driver1));
        dispatch(updatedriver2(driver2));
        dispatch(updatedata(profilekid.statusk));
        dispatch(updateimg(profilekid.image));
      
      }
    });

  }
 
  
  const logout = () => {
    Axios.post(`${urllocal}/logout`, {
     
    }).then((response) => {
     
    });
    history.push("/");
  };
  
  const getrole = () =>{
    Axios.get(`${urllocal}/login`).then((response) => {
      if (response.data.loggedIn == true && response.data.loggedrole == "parents" ) { 
        
        
        dispatch(statuslogin(true));
        
      }else{
        history.push("/");
        dispatch(statuslogin(false));
      }
    });
  }
 
  
  let currentComponent = null;
  
  if(nav === "home"){
    currentComponent =  <Homepage img={img} data={data} request={request} driver1={driver1} driver2={driver2} setNav={setNav} urllocal={urllocal} />;
  }
  else if(nav === "request"){
    currentComponent = <Request request={request} img={img} urllocal={urllocal} />;
  }
  else{
    currentComponent =  <Profile request={request} img={img} logout={logout} urllocal={urllocal} />;
  }

let btn_home = nav == "home" ? "fas fa-1x fa-home home" : "fas fa-1x fa-home ";
// let btn_request = nav == "request" ? "fas fa-1x fa-bell request" : "fas fa-1x fa-bell ";
// let btn_profile = nav == "profile" ? "fas fa-1x fa-user profile" : "fas fa-1x fa-user ";
let dotnavmargin = nav == "home" ? "dothome" : nav == "request" ? "dotrequest" : "dotprofile" ;

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

            <i class={`fas fa-circle dotnav ${dotnavmargin}`}></i>

                <a  onClick={() => {window.scrollTo(0, 0); setNav("home")}}>{nav == "home"? 
                
                <div>
                  <p style={{marginBottom:"0px",marginTop:"0px"}}>Home</p>
                  
                </div>
                   : <i className="fas fa-1x fa-home" style={{fontSize:"32px"}}></i>}
                   </a>

                <a  onClick={() => {window.scrollTo(0, 0); setNav("request");}}>{nav == "request"? 
                
                <div>
                  <p style={{marginBottom:"0px",marginTop:"0px"}}>Request</p>
                  
                </div>
                   : <i className="fas fa-1x fa-bell" style={{fontSize:"32px"}}></i>}</a>
                <a  onClick={() => {window.scrollTo(0, 0); setNav("profile")}}>{nav == "profile"? 
                
                <div>
                  <p style={{marginBottom:"0px",marginTop:"0px"}}>Profile</p>
                  
                </div>
                   : <img src={`img/${img}`} alt="" style={{width:"100%",maxWidth:"32px",maxHeight:"32px",height:"100%",marginLeft:"auto",display:"block",borderRadius:"100%"}}/>}</a>
              
            </Nav>
          
        </Navbar> 
          
         
      </div>
     
   
  ); 
}


