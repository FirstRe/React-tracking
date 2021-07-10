import React, {useState} from "react";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Container,Row,Col} from 'reactstrap';
import Requestjson from '../Json/Requestjson';

import {  update } from "../actions";



export default function Request({request}) {
  //redux

    const requests = useSelector(state => state.status);
    const dispatch = useDispatch();


  //state
  
  


  const morn = () => {
    if(requests != ""){
    Axios.post("http://192.168.0.189:3001/request", {
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
         <p style={{position:'absolute',marginLeft:'118px',marginTop:'-23px'}}>x</p>
          <p>ส่งคำขอเเล้ว!  </p>
          <p>ประเภท: {" " + requests}</p>
          
       </div>
      </div> : ''}
      
          

              <div className="request_top_main">
                  <div className="container">
                      <h3>คำขอพิเศษ</h3>
                      
                  </div>
              </div>
        <Container>
           
                  <div className=" request_main_status" >
                    
                       <h5>คำขอเพิ่มเติม</h5>
                       
                        <div className="input_request">
                            <input 
                              placeholder="โปรดใส่คำร้องขอเพื่มเติม"
                              value={requests} 
                              onChange={(e)=> dispatch(update(e.target.value))}
                              style={{width:"100%",maxWidth:"600px",display:"block",margin:"auto",borderRadius:"10px"}}
                            />
                        </div>
                  </div>
                  <div className="request_post">
                     <h5>ใบแจ้งคำร้อง</h5>
                    <p>ด.ช. {request.name} {request.lname} </p>
                    <p>คำร้องที่ขอ {requests}</p>
                  </div>

                  <div className="request-item-grid">
                         <div className="request-flex2">
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
                                   return <Col xs="6" key={index}>
                                        <div className="request-title2" >
                                            <a onClick={()=> dispatch(update(requestest.title))} style={{textAlign:"center",fontSize:"24px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{requestest.title}</a>
                                        </div>
                                    </Col>
                                  })}
                            </Row>
                         </div>
                  </div> 
                  <div className="button-request-bar">
                     <button  className="button-request-send" onClick={morn}>ส่งคำขอ</button>
                  </div>
                  
            
        </Container>
         

    </div>
  );
}
