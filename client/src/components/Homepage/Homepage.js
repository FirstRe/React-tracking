import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Axios from "axios";
import './Homepage.css';
import {  increment } from "../../actions";

export default function Homepage({img, data, request, driver2, driver1, setNav,urllocal}) {

  const requests = useSelector(state => state.status);
  const dispatch = useDispatch();

  const [more, setMore] = useState("hide-status");
  const [bar, setBar] = useState("more-status-hide");
 
  const morestatus = () => {

    if(more == "hide-status"){
      setMore("show-status");
      setBar("more-status-show");
    }else{
      setMore("hide-status");
      setBar("more-status-hide")
    }
  }

  const deleteR = () => {
    Axios.post(`${urllocal}/deleteR`, {
     
    }).then((response) => {
     if(response){
      setVisible(true)
     }
    });
    
  };
  const [visible, setVisible] = useState(false);
  let statehome = request.statuscounter == "0" ? "fas fa-1x fa-spinner  fa-spin" : "fas fa-long-arrow-alt-left fa-gradient  ";
  let statehome2 = request.statuscounter == "0" ? "fas fa-1x fa-long-arrow-alt-right fa-gradient " : "fas fa-1x fa-spinner  fa-spin ";
  let statebus = request.Checkrequest != "" ? "fas fa-2x fa-car-side fa-gradient" : "fas fa-2x fa-bus fa-gradient"; 
  let statebus2 = request.Checkrequest != "" ? "fas fa-2x fa-car-side " : "fas fa-2x fa-bus "; 
  return (
    <div className="homepage">
      {visible? <div className="alert-box" onClick={()=>{setVisible(false)}}>
       <div className="alert-box-css">
         <p style={{position:'relative',marginLeft:'138px',marginTop:'-23px'}}>x</p>
          <p>ยกเลิกคำร้องเเล้ว  </p>
          <p>ประเภท: {" " + requests}</p>
          
       </div>
      </div> : ''}
        <div className="container homepage-profile">
          <h2 className="name_profile">{request.name + " " + request.lname} <span>&#128075;</span></h2>
          <img src={`img/${img}`} alt="" style={{width:"100%",maxWidth:"50px",maxHeight:"50px",marginLeft:"auto",display:"block",borderRadius:"100%"}}/>
          
        </div>
       

        <div className="status_page container">
          <h3>สถานะ นักเรียน</h3>
           <div className="status-out" onClick={morestatus} >
              
              <div className="status">
               
                    <div className="status-icon">
                      
                      {data == "home" ? <i className="fas fa-2x fa-warehouse fa-gradient "></i> : <i className="fas fa-2x fa-warehouse fa-non "></i>}
                        
                        
                    </div> 
                    <div style={{display:"flex",alignItems:"center"}}>
    
                        <i className={statehome} style={{verticalAlign: "middle",fontSize:"14px"}}></i>
                     
                    </div>
                    <div className="status-icon">
                      {data == "bus" ? <i className={statebus}></i> : <i className={statebus2}></i> }
                        
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                         <i className={statehome2} style={{margin:"20 0 20 0",fontSize:"14px"
                        }} ></i>
                    </div>
                    <div className="status-icon">
                      {data == "school" ? <i className="fas fa-2x fa-school  fa-gradient "></i> : <i className="fas fa-2x fa-school fa-non "></i> }
                         
                    </div>
                    <p style={{position:"absolute",marginTop:"30px",}}>{request.Checkrequest}</p>
                  </div>
    
                  
                  
               </div>  
                <div className={bar}>
                    <div className={more}>
                      <h2>เวลา <i className="fas fa-user-clock" style={{color:"#5183F0"}}></i></h2>
                       
                        <p style={{marginBottom:"0px",textAlign:"left"}}>ขึ้นรถตู้ : <span style={{color:"#000000"}}>{request.tbus}</span></p>
                        <p style={{marginBottom:"0px",textAlign:"left"}}>ถึงโรงเรียน : <span style={{color:"#000000"}}>{request.tschool}</span></p>
                        <p style={{marginBottom:"0px",textAlign:"left"}}>ถึงบ้าน : <span style={{color:"#000000"}}>{request.thome}</span></p>
                    </div>
                </div>
        </div>



        <div className="request_page">
          <div className="request_head container">
          <h3>สถานะ คำขอพิเศษ</h3>
              <div className="mt-4">
              
              {request.Checkrequest&&request.timerequest ?  
                  <div className="request_ui">
                      <div className="request_time">
                             <div className="head_request">
                                 <h2 style={{textAlign:"left",verticalAlign:" middle",marginBottom:"auto",marginTop:"auto",color:"#000000"}}>{request.Checkrequest } </h2>
                                 <p style={{color:"#70707075"}}>คำขอที่ขอมา</p>
                             </div>
                             <div className="icon_request">
                                <i className="fas fa-child " ></i>
                             </div>
                            
                      </div> 
                      <hr / >
                      <div className="request_today">
                          <div style={{display:"flex"}}>
                              <i class="far fa-calendar-alt mt-1" style={{color:"#70707075",marginRight:"12px"}}></i>
                              <p> วันนี้</p>
                          </div>
                          <div style={{display:"flex"}}>
                              <i class="far fa-clock mt-1" style={{color:"#70707075",marginRight:"12px"}}></i>
                              <p style={{textAlign:"left",verticalAlign:" middle",color:"#000000"}}>{request.timerequest} น.</p>
                          </div>
                          <div style={{display:"flex"}}>
                              <i class="fas fa-circle mt-2" style={{color:"#4cf755",fontSize:"8px",marginRight:"12px"}}></i>
                              <p>ยืนยันเเล้ว</p>
                          </div>
                            
                      </div>
                          <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px"}}>
                              <button type="" className="btn btn button_req" style={{backgroundColor:"#ffffff",color:"#3771ee"}} onClick={deleteR}>ยกเลิก</button>
                              <button type="" className="btn btn-primary button_req" onClick={() => { setNav("request")}} style={{backgroundColor:"#3771ee"}}>แก้ไข</button>
                              {/* <button type="" className="btn btn-primary button_req" onClick={() => { dispatch(increment())}} style={{backgroundColor:"#3771ee"}}>แก้ไข</button> */}
                              
                          </div>
                      
                  </div>: 
                  <div className="request_nav">

                            <p style={{marginTop:"auto",marginBottom:"auto"}}>ไม่มีคำขอ !</p> 
                        <div className="button-request">
                            <p style={{cursor:"pointer",margin: "0px"}} onClick={() => { setNav("request")}}>ต้องการส่งคำขอ ? <i className="far fa-hand-point-right ml-2" style={{color:"#1C7AD3",fontSize:"24px"}}></i></p>
                        </div>

                  </div>}
              </div>
          </div>

        </div>







        <div className="driver_page container">
          <h3>คนขับรถ</h3>
            <div className="row mt-4">

              <div className="col-6 ">

                  <div className="driver_ui">
                      <img src={driver1.img_driver} alt="" style={{width:"100%",maxWidth:"60px",maxHeight:"60px",margin:"auto",display:"block",borderRadius:"100%"}} />
                      <p style={{marginTop:"5px"}}>รอบเช้า</p>
                      <h6 style={{marginTop:"5px"}}>นาย {driver1.driver_name + " " + driver1.driver_lname}</h6>
                      <p>{"ทะเบียนรถ " + driver1.license_plate}</p>
                      <p>รถหมายเลข {driver1.number}</p>
                      <i className="fas fa-phone-volume"> <a style={{color:"",textDecoration:"none"}} href={"tel: " + driver1.tel}>{driver1.tel}</a></i> 
                  </div>
                  
              </div>
              <div className="col-6 ">

                  <div className="driver_ui">
                        <img src={driver2.img_driver} alt="" style={{width:"100%",maxWidth:"57px",maxHeight:"60px",margin:"auto",display:"block",borderRadius:"100%"}} />
                        <p style={{marginTop:"5px"}}>รอบเย็น</p>
                        <h6 style={{marginTop:"5px"}}>นาย {driver2.driver_name + " " + driver2.driver_lname}</h6>
                        <p>{"ทะเบียนรถ " + driver2.license_plate}</p>
                        <p>รถหมายเลข {driver2.number}</p>
                        <i className="fas fa-phone-volume"> <a style={{color:"",textDecoration:"none"}} href={"tel: " + driver2.tel}>{driver2.tel}</a></i> 
                  </div>

              </div>
              
            </div>
          
        </div>








    </div>
  );
}
