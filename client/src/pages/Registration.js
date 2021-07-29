import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default function Registration() {
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  const [selectedrole, setSelectedrole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(true);
  // const [status, setStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [checkstatus, setCheckstatus] = useState("");
  const [checkstatus2, setCheckstatus2] = useState("");
  const urllocal = "http://192.168.1.110:3001";
  Axios.defaults.withCredentials = true;

  // const register = () => {
  //   Axios.post("http://192.168.0.189:3001/test", {
      
  //   }).then((response) => {
  //     console.log(response);  
  //   });
  // }; 
  const history = useHistory();
  const logout = () => {
    Axios.post(`${urllocal}/logout`, {
     
    }).then((response) => {
      if(response){
        alert("text");
        setLoginStatus(false);
      }
      else{
        alert("text2");
      }
    });
   
  };

  const login = () => {
    setCheckstatus("");setCheckstatus2("");
    if(!username || !password || !selectedrole){

      setCheckstatus2("โปรดใส่ข้อมูลให่ครบ !");

    }else{
    Axios.post(`${urllocal}/login`, {
      username: username,
      password: password,
      selectedrole: selectedrole,
    }).then((response) => {
      if (response.data.message) {
       
          setCheckstatus("พาสเวิร์ดไม่ถูกต้อง !");
      }
      
      else  {
        
        // history.push("/");
        checklog();
      }
     
    }); 
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event: Form Submit');
};

  useEffect(() => {
    checklog();
  }, []);

  const checklog = () => {
    Axios.get(`${urllocal}/login`).then((response) => {
      if (response.data.loggedIn == true && response.data.loggedrole == "parents" ) {
        setLoginStatus(response.data.loggedIn);
        history.push("/Main");
      }
      else if(response.data.loggedIn == true && response.data.loggedrole == "driver"){
        history.push("/Driver");
      }
      else{
        history.push("/");
      }
    });
  }

  const showpw = () =>{
    setShowpass(showpass => !showpass);
  }
 
  let toggle = showpass ? "password" : "text";
  let toggleicon = showpass ? "far fa-eye" : "far fa-eye-slash";
    
  
  return (
    <div className="page-header">
      {/* <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div> */}
      { loginStatus ?  <div><form><button type="" onClick={logout}>Logout</button></form></div> :
      <div className="login">
      
        <h1>ยินดีต้อนรับ</h1>
        <h6>เข้าสู่ระบบบัญชีของท่าน</h6>
       
        <Form  style={{marginTop:"20px"}}>
         
        <FormGroup>

        <Label for="exampleEmail" style={{color:"rgba(112, 112, 112, 0.46)"}}>Username</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="Username"  onChange={(e) => { setUsername(e.target.value); }}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword" style={{color:"rgba(112, 112, 112, 0.46)"}}>Password</Label>
        <Input type={toggle} name="password" id="examplePassword" placeholder="Password"  onChange={(e) => {setPassword(e.target.value);}}/>
        <i style={{position:"absolute", marginTop:'-28px',marginLeft:"170px",color:"rgba(112, 112, 112)"}} className={toggleicon} onClick={showpw}></i>
        
        <div className="passwordforget"> 
          <a href="">ลืมพาสเวิร์ด</a>
        </div>
      </FormGroup>
      <p style={{color:"red",marginTop:"-20px",position:"absolute",fontSize:"14px"}}>{checkstatus}
        {checkstatus2}</p>
        
        <FormGroup check>
            <Label check onClick={()=> {setSelectedrole("parents")}}>
              <Input type="radio" name="radio2" />{' '}
              ผู้ปกครอง
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check onClick={()=> {setSelectedrole("driver")}}>
              <Input type="radio" name="radio2" />{' '}
              คนขับรถ
            </Label>
          </FormGroup>



        <div className="signin" >
           <h2 style={{margin:"auto",marginLeft:"0px"}}>เข้าสู่ระบบ</h2>
          <Button color="success" onClick={login} style={{display:"block",borderRadius:"50%",width:"60px",height:"60px"}}><FontAwesomeIcon icon={faLongArrowAltRight} style={{fontSize:"32px"}} /></Button>
          
        </div>
          

        </Form>
        
        
      </div>
      }
      {/* {
        loginStatus ?  <Main /> : <Admin />
      } */}
      
     
    </div>
  );
}
