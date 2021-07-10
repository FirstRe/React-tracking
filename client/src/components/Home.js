import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
export default function Home({img, data, request, driver2, driver1, setNav}) {
  const requests = useSelector(state => state.status);
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


  let statehome = request.statuscounter == "0" ? "fas fa-1x fa-spinner  fa-spin" : "fas fa-long-arrow-alt-left fa-gradient  ";
  let statehome2 = request.statuscounter == "0" ? "fas fa-1x fa-long-arrow-alt-right fa-gradient " : "fas fa-1x fa-spinner  fa-spin ";
  let statebus = request.Checkrequest != "" ? "fas fa-2x fa-car-side fa-gradient" : "fas fa-2x fa-bus fa-gradient"; 
  let statebus2 = request.Checkrequest != "" ? "fas fa-2x fa-car-side " : "fas fa-2x fa-bus "; 
  return (
    <div className="homepage">
      <div className="head ">
        <div className="container">
        <h3>หน้าหลัก</h3>
        </div>
      </div>
      
      <img src={`img/${img}`} alt="" style={{width:"100%",maxWidth:"200px",margin:"auto",display:"block",borderRadius:"100%",marginTop:"20px"}}/>
         <div className="name-tag">
             <p>{request.name} {request.lname}</p>
         </div>
          
       <div className="status-bar container">
         <h2 style={{padding:"0 0 10px 20px",color:"#e8e8e8e8"}}>สถานะ <span> นักเรียน</span></h2>
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
                   
                    <p style={{marginBottom:"0px",textAlign:"left"}}>ขึ้นรถตู้ : <span style={{color:"#13CE02"}}>{request.tbus}</span></p>
                    <p style={{marginBottom:"0px",textAlign:"left"}}>ถึงโรงเรียน : <span style={{color:"#13CE02"}}>{request.tschool}</span></p>
                    <p style={{marginBottom:"0px",textAlign:"left"}}>ถึงบ้าน : <span style={{color:"#13CE02"}}>{request.thome}</span></p>
                </div>
            </div>
              
       </div> 



       <div className="status-request container">

          <h2>สถานะ คำขอพิเศษ</h2>
            <div style={{textAlign:"left",padding:"30px",verticalAlign:" middle",display:"flex",color:"#e8e8e8e8"}}>
              {request.Checkrequest&&request.timerequest ?  
              <div style={{width:"100%"}}>
                
                  <div className="request_time">
                   <div className="request_time_status">
                    <p style={{textAlign:"left",verticalAlign:" middle",marginBottom:"auto",marginTop:"auto",color:"#383838E8"}}>{request.Checkrequest }<i className="fas fa-child" style={{marginLeft:"5px",color:"#0BB321"}}></i> </p>
                  </div>
                    <p style={{textAlign:"left",verticalAlign:" middle",color:"#e8e8e8e8",marginBottom:"auto",marginTop:"auto"}}>{request.timerequest} น.{String.fromCodePoint(0x1F525)}</p>
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

       <div className="status-driver container">
        <h2>คนขับรถ</h2>
          <div id="driver_1" className="conatainer" style={{maxWidth:"700px"}}> 
                  <h4>รอบเช้า<i className="far fa-sun" style={{marginLeft:"5px",color:"#E3ECFF"}}></i></h4>
                <img src={driver1.img_driver} className="img_driver" /> 
                <div className="driver_data">
                    <h1>{driver1.driver_name + " " + driver1.driver_lname}</h1>  
                    <p>{"เลขทะเบียน " + driver1.license_plate}</p>
                    <p>รถหมายเลข {driver1.number}</p>
                    <i className="fas fa-phone-volume"> <a style={{color:"#ffffff",textDecoration:"none"}} href={"tel: " + driver1.tel}>{driver1.tel}</a></i> 
                </div> 
          </div>

          <div id="driver_2" className="conatainer" style={{maxWidth:"700px"}} > 
                <h4>รอบบ่าย<i className="fas fa-cloud-moon" style={{marginLeft:"5px",color:"#E3ECFF"}}></i></h4>
                <img src={driver2.img_driver} className="img_driver" /> 
                <div className="driver_data">
                    <h1>{driver2.driver_name + " " + driver2.driver_lname}</h1>  
                    <p>{"เลขทะเบียน " +  driver2.license_plate}</p>
                    <p>รถหมายเลข {driver2.number}</p>
                    <i className="fas fa-phone-volume"> <a style={{color:"#ffffff",textDecoration:"none"}} href={"tel: " + driver2.tel}>{driver2.tel}</a></i> 
                </div> 
          </div>
        
       </div>
        
    </div>
  );
}
