import React,{useState} from "react";
import '../App.css';
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import Axios from "axios";
import { useHistory } from 'react-router-dom';


export default function Profile({request,img,logout,urllocal}) {
  const [description, SetDescription] = useState("");
  const [selectedFile, SetselectedFile] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpasswordC, setNewpasswordC] = useState("");
  
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const history = useHistory();
  const onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        SetselectedFile(e.target.files[0]);
        break;
      default:
        ;
    }
  }
  const onSubmit = (e) => {
    if(selectedFile != ""){
    e.preventDefault();
   
    let formData = new FormData();

    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    Axios.post(`${urllocal}/uploadImg`, formData)
      .then((result) => {
        // access results...
      });
    }else{
      alert("โปรดเลือกรูป");
    }
  }

  const changePassword = () => {
    if((newpassword && newpasswordC) != ''){
      alert("กรุณาเข้าสู้ระบบใหม่");
      Axios.post(`${urllocal}/newpass`, {
        password: newpassword,
        
      }).then((response) => {
       if(response){
         
        logout();
       }  
      });
    }else{
      alert("โปรดใส่พาสเวิรด์ใหม่")
    }
    
  }
  let buttonconfirm = (newpassword == newpasswordC) &&  (newpassword != " ") ? false : true ;

  return (
    <div className="profile-main">
   
      <div className="p-4 pt-4">
          <div className="profile_top_main ">
            <div class="dropdownf">
                <button className=" edit-profile" onClick={toggle} ><i class="fas fa-cog" style={{fontSize:"12px",marginTop:"-6px",position:"absolute" ,marginLeft:"-6px"}}></i></button>
            
              <div className="">
              
                <Modal  isOpen={dropdownOpen} toggle={toggle} >
                  
                  <ModalBody>
                    <h1 style={{fontFamily:"Kanit, sans-serif",textAlign:"center"}}>ตั้งค่า</h1>
                    <div>
                    <hr/>
                      <h5 style={{fontFamily:"Kanit, sans-serif",textAlign:"center",padding:"10px"}}>เปลี่ยนรูปโปรไฟล์</h5>
                      <div className="mt-4">
                      <form onSubmit={onSubmit}>
                        <div style={{}}>
                            <input
                              type="file"
                              name="selectedFile"
                              className="custom-file-input"
                              onChange={onChange}
                            />
                            <button className="uploadbutton" color="primary" onClick={onSubmit} >บันทึก</button>
                        </div>
                      
                    </form>
                      </div>
                      <hr/>
                      <div>
                            <h5 style={{fontFamily:"Kanit, sans-serif",textAlign:"center",padding:"10px"}}>เปลี่ยนรหัสผ่าน</h5>
                              <input className="input_newpass" type="password" name="" value={newpassword} placeholder="พาสเวิรด์อันใหม่ 6-10 ตัว" onChange={(e)=>{setNewpassword(e.target.value)}} />
                              <input className="input_newpass" type="password" name="" value={newpasswordC} placeholder="พาสเวิรด์อันใหม่อีกครั้ง 6-10 ตัว" onChange={(e)=>{setNewpasswordC(e.target.value)}} />
                              {newpasswordC ?  (newpassword == newpasswordC) &&  (newpassword != " ") ?   "" :   <p style={{color:"red",textAlign:"center",marginTop:"20px"}}>รหัสผ่านไม่ตรงกัน</p> : " "}
                              
                          <button className="uploadbutton" color="primary" onClick={changePassword} disabled={buttonconfirm} >บันทึก</button>
                      </div>
                    </div>
                  </ModalBody>
                
                </Modal>
              </div>
                
          </div>
              
              <h3>โปรไฟล์</h3>
                
                  <img src={`img/${img}`} alt="" className="img_profile" style={{width:"100%",maxWidth:"90px",maxHeight:"90px",height:"100%",borderRadius:"100%",position:"absolute",border:"1px solid #e8e8e8",padding:"10px",backgroundColor:"#ffffff50"}}/>
                  <p style={{marginTop:"10px",fontSize:"12px"}}>เงินคงเหลือในบัตร : 120 บาท</p>
              </div>
      </div>
            
        
              
        
          
        <div className="profile-desk">
        <Container>
          
          
          <div className="profile-name"> 
              <h1>{request.name + " " + request.lname}</h1>
          <div className="mt-2" style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
            
            <div style={{display:"flex"}}>
              <i class="fas fa-archive "></i>
              <p   style={{fontSize:"12px",marginLeft:"5px"}}>อายุ {request.age} ปี</p>
            </div>
            <div style={{display:"flex"}}>
              <i class="fas fa-id-badge "></i>
              <p style={{fontSize:"12px",marginLeft:"5px"}}>รหัสนักเรียน {request.idstudent}</p>
            </div>
            <div style={{display:"flex"}}>
              <i class="fas fa-chalkboard"></i>
              <p style={{fontSize:"12px",marginLeft:"5px"}}>ห้อง  {request.room}</p>
            </div>
          </div>
          
            
              
          

          <form >
            <button className="logout-button" onClick={logout}>ออกจากระบบ</button>
          
            
          </form>

          
          </div>
          </Container>
        </div>
    
    </div> 
  );
}
