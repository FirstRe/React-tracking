import React, {useState} from "react";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Container,Row,Col} from 'reactstrap';
import Requestjson from '../Json/Requestjson';

import {  update } from "../actions";



export default function Request({request,img,urllocal}) {
  //redux

    const requests = useSelector(state => state.status);
    const dispatch = useDispatch();


  //state
  
  


  const morn = () => {
    if(requests != ""){
    Axios.post("http://192.168.1.110:3001/request", {
      idstudent: request.idstudent,
      room_no : request.room,
      username: request.name + " " + request.lname,
      section: requests,

    }).then((res) => {
      if (res) {
        
        
        setVisible(true)
      
      } else{
       
      }
    });
    }else{
      alert("โปรดเลือกประเภทคำร้อง")
    }

  }
  const [visible, setVisible] = useState(false);
  
  return (
    
    <div className="request_main">
      {visible? <div className="alert-box" onClick={()=>{setVisible(false)}}>
       <div className="alert-box-css">
         <p style={{position:'relative',marginLeft:'138px',marginTop:'-23px'}}>x</p>
          <p>ส่งคำขอเเล้ว!  </p>
          <p>ประเภท: {" " + requests}</p>
          
       </div>
      </div> : ''}
      
          

              <div className="request_top_main">
                  <div className="container">
                      <h2 style={{fontSize:"30px",marginTop:"20px"}}>คำขอพิเศษ</h2>
                      
                  </div>
              </div>
        <Container>
           
                  <div className=" request_main_status container-fluid" style={{maxWidth:"620px"}} >
                    
                       
                        <div className="input_request ">
                        <i class="fas fa-angle-double-right input_request_icon"></i>
                            <input 
                              placeholder={"      " + "โปรดใส่คำร้องขอเพื่มเติม"}
                              value={requests} 
                              onChange={(e)=> dispatch(update(e.target.value))}
                              style={{width:"80%",maxWidth:"600px",display:"block",margin:"auto",border:"none"}}
                              className="input_requestcss"
                            />
                        </div>
                  </div>
                  <div className="request_post">
                      <div style={{display:"flex",justifyContent:"start"}}>
                        <div>
                        <img src={`img/${img}`} alt="" style={{width:"100%",maxWidth:"40px",maxHeight:"40px",height:"100%",borderRadius:"100%",marginRight:"10px"}}/>
                        </div>
                        <div>
                        <h5 className="">ใบแจ้งคำร้อง </h5>
                        <p style={{fontSize:"12px",marginBottom:"0px"}}> {request.name} {request.lname} </p>
                        </div>
                      
                      </div>
                      <hr/>
                      
                      <p>คำร้องที่ขอ {requests}</p>


                  </div>

                  <div className="request-item-grid">
                         <div className="request-flex2 mt-5"> 
                            <Row>
                               {/* {Requestjson.map((requestest,index) => {
                             return <div className="request-title" key={index}>
                                      <div className="box" onClick={()=> dispatch(update(requestest.title))}>
                                        
                                      
                                     <img src={requestest.img} alt=""  style={{maxHeight:"80px",borderRadius:"15px"}} />
                                        
                                      </div>
                                      <a onClick={()=> dispatch(update(requestest.title))} style={{textAlign:"center",fontSize:"24px",position:"relative"}}>{requestest.title}</a>
                                    </div>
                                  })} */}
                                  {Requestjson.map((requestest,index) => {
                                   return <Col xs="3"  key={index} onClick={()=> dispatch(update(requestest.title))}>
                                        <div className="request-title2" >
                                          <img src={requestest.img}  style={{width:"100%",maxWidth:"40px"}}/>
                                            
                                        </div>
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{requestest.title}</a>
                                    </Col>
                                  })}
                            </Row>
                         </div>
                  </div> 
                  <div className="container">
                    <div className="button-request-bar ">
                      <div className="request-bar">
                        <p className="m-2"> ! โปรดกดส่งของเฉพาะวันนี้</p>
                        <button  className="button-request-send" onClick={morn}>ส่งคำขอ</button>
                        </div>
                    </div>
                  </div>
                  
                  
            
        </Container>
         

    </div>
  );
}
