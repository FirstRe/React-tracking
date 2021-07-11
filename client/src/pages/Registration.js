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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [status, setStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [checkstatus, setCheckstatus] = useState("");
  const [checkstatus2, setCheckstatus2] = useState("");
  const urllocal = "http://localhost:3001";
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
    if(!username || !password){

      setCheckstatus2("โปรดใส่ Username หรือ Password !");

    }else{
    Axios.post(`${urllocal}/login`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        // setLoginStatus(response.data.message);
          setCheckstatus("พาสเวิร์ดไม่ถูกต้อง !");
      } else {
        // setLoginStatus(response.data[0].username);
        // alert("login succeess");
        history.push("/Main");
      }
    }); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event: Form Submit');
};

  useEffect(() => {
    Axios.get(`${urllocal}/login`).then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.loggedIn);
        history.push("/Main");
      }else{
        history.push("/");
      }
    });
  }, []);

  

    
  
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
       
        <Form  style={{marginTop:"60px"}}>
          
        <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="Username"  onChange={(e) => { setUsername(e.target.value); }}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password"  onChange={(e) => {setPassword(e.target.value);}}/>
      </FormGroup>
      <p style={{color:"red",marginTop:"15px",position:"absolute"}}>{checkstatus}
        {checkstatus2}</p>
        
        <div className="signin" >
        <h2 style={{margin:"auto",marginLeft:"0px"}}>เข้าสู่ระบบ</h2>
          <Button color="success" onClick={login} style={{display:"block",borderRadius:"50%",width:"60px",height:"60px"}}><FontAwesomeIcon icon={faLongArrowAltRight} style={{fontSize:"32px"}} /></Button>
          
        </div>
      
        <div className="passwordforget"> 
          <a href="">ลืมพาสเวิร์ด</a>
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
