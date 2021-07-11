import React from "react";
import '../App.css';
import {Container} from 'reactstrap'

export default function Profile({request,img,logout}) {
  
  return (
    <div className="profile-main">
    
      <div className="profile_top_main">
                  <div className="container">
                      <h3>โปรไฟล์</h3>
                  </div>
              </div>
    <div className="profile-desk">
    <Container>
      
      <img src={`img/${img}`} alt="" style={{width:"100%",maxWidth:"200px",margin:"auto",display:"block",borderRadius:"100%"}}/>
      <div className="profile-name"> 
          <h3>{request.name + " " + request.lname}</h3>
          <p style={{marginTop:"20px"}}>เงินคงเหลือในบัตร : 120 บาท</p>
          <p>รหัสนักเรียน {request.idstudent}</p>
           <p>อายุ {request.age} ปี</p>
           <p>ห้อง ป. {request.room}</p>
      

      <form >
        <button className="logout-button" onClick={logout}>ออกจากระบบ</button>
        <button className="edit-button" onClick="">แก้ไขข้อมูล</button>
        
      </form>
      </div>
      </Container>
    </div>
    
    </div> 
  );
}
