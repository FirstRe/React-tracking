const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const md5 = require('md5')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Pusher = require("pusher");
const request = require('request');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const path = require('path');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, '../client/public/img');
  },
  filename: (req, file, cb) => {
   
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null,newFilename);
    
  },
});

// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://192.168.1.110:3000","*"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// app.use((_, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
app.use(cookieParser());


app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(253402300000000),
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "gpt_nml",
  multipleStatements: true,
});
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gpt_nml'
});
pool.getConnection((err, connection) => {
  if (err) throw err; // not connected
  console.log('Connected!w');
});
db.connect(function(err) {
  try{
    if (err) throw err;
    console.log("Connected!ku");
  }catch{
    console.log("nosql");
  }
  
});
// db.connect((err, connection) => {
//   if (err) throw err; // not connected
//   console.log('Connected!1');
// });

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var passmd5 = md5(password);
 

    db.query(
      "INSERT INTO login (username, password) VALUES (?,?)",
      [username, passmd5],
      (err, result) => {
        console.log(err);
      }
    );
  
});
app.post("/newpass", (req, res) => {
  
  const newpassword = req.body.password;

  var newpassmd5 = md5(newpassword);
 

    db.query(
      "UPDATE login SET password = ? WHERE idstudent = ? ",
      [newpassmd5,req.session.user[0].idstudent],
      (err, result) => {
        console.log(err);
      }
    );
    req.session.destroy();
});

app.post("/logout", (req, res) => {
 
  req.session.destroy();
  
});

app.post('/request',(req,res) =>{
  const idstudent = req.body.idstudent;
  const room = req.body.room_no;
  const username = req.body.username;
  const section = req.body.section;
  const pusher = new Pusher({
    appId: "1179497",
    key: "0a26728be360440108e5",
    secret: "11a50ff9227d9c2599f9",
    cluster: "ap1",
    useTLS: true
  });
  if(req) {
    pusher.trigger("my-channel", "my-event", {
      message: "Event!"
    });
    db.query(
      'UPDATE student_data SET Checkrequest = ?,timerequest = CURTIME() WHERE idstudent = ?;INSERT INTO request (idstudent,  room_no, username, section) VALUES (?,?,?,?)',
      [section,idstudent,idstudent, room, username,section],
      (err, result) => {
        console.log(err);
      }
    );
    res.send({ message: "User doesn't exist" });
 
}else{
  console.log("error");
  res.send({ loggedIn: false });
}
});

app.get('/data',(req,res)=> {  
  if(res){
    db.query('SELECT * FROM student_data,main,images,room WHERE student_data.idstudent = images.idstudent AND main.idstudent = student_data.idstudent AND main.room_no = room.room_no AND student_data.idstudent = ?;SELECT * FROM main,driver WHERE main.1st_round = driver.driver_no AND idstudent = ?; SELECT * FROM main,driver WHERE main.2nd_round = driver.driver_no AND idstudent = ?',
    [req.session.user[0].idstudent, req.session.user[0].idstudent,req.session.user[0].idstudent], 
    (err, result) => {
     
      if (err) throw err;
      else {
  
        res.send(result);
        
      };
    
      
      
    });
  }else{
    console.log("need login");
  }
  
});

app.post("/deleteR", (req, res) => {
  
    db.query(
      "UPDATE  student_data SET Checkrequest = '' WHERE idstudent = ?",
      [req.session.user[0].idstudent],
      (err, result) => {
        console.log(err);
      }
      
    );
    res.send({ message: "deleteR" });

  
});

app.get('/dataD',(req,res)=> {  
  db.query("SELECT student_data.*,images.image FROM main,student_data,images WHERE main.1st_round = ? AND student_data.idstudent = main.idstudent AND main.1st_lap = 1 AND images.idstudent = student_data.idstudent;SELECT student_data.*,images.image FROM main,student_data,images WHERE main.1st_round = ? AND student_data.idstudent = main.idstudent AND main.1st_lap = 2 AND images.idstudent = student_data.idstudent; SELECT student_data.*,images.image FROM main,student_data,images WHERE main.2nd_round = ? AND student_data.idstudent = main.idstudent AND main.2nd_lap = 1 AND images.idstudent = student_data.idstudent;SELECT student_data.*,images.image FROM main,student_data,images WHERE main.2nd_round = ? AND student_data.idstudent = main.idstudent AND main.2nd_lap = 2 AND images.idstudent = student_data.idstudent;SELECT student_data.*,images.image FROM main,student_data,images WHERE main.2nd_round = ? AND student_data.idstudent = main.idstudent AND main.2nd_lap = 3 AND images.idstudent = student_data.idstudent;",
  [req.session.user[0].driver_no, req.session.user[0].driver_no, req.session.user[0].driver_no, req.session.user[0].driver_no, req.session.user[0].driver_no],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result)
    };
  });
});
//SELECT * FROM main,student_data,images WHERE main.1st_round = "D1" AND student_data.idstudent = main.idstudent AND main.1st_lap = 1 AND images.idstudent = student_data.idstudent
app.get("/login", (req, res) => {
  if (req.session.user) {

    res.send({ loggedIn: true, user: req.session.user, loggedrole: role });
    
  } else {

    res.send({ loggedIn: false });

  }
});

app.get("/testapi", (req, res) => {
  if (req.session.user) {

    res.send({ loggedIn: true, user:"test" });
    
  } else {

    res.send({ loggedIn: false,user:"33223eeuy" });

  }
});

let role = null;
app.post("/login", (req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;
  const selectedrole = req.body.selectedrole;
  var passmd6 =  md5(password);
    if(selectedrole == "parents"){
      if(req.body.username){
        db.query(
          "SELECT * FROM login WHERE username = ? AND password = ?;",
          [username,passmd6],
          (err, result) => {
            if (err) {
              res.send({ err: err });
              console.log("error3");
            }
            else if(result){
              if (result.length > 0)  {
                req.session.user = result;
                role = "parents"
                console.log(req.session.user[0].idstudent);
                console.log(result[0].idstudent);
                res.send(result);
          } else {
            res.send({ message: "ไม่พบ user นี้" });
            console.log("err");
          }
            }
          }
        );
      }else{
        console.log("error3");
      }
    }else if(selectedrole == "driver"){
      if(req.body.username){
        db.query(
          "SELECT * FROM loginD WHERE username = ? AND password = ?;",
          [username,passmd6],
          (err, result) => {
            if (err) {
              res.send({ err: err });
              console.log("error3");
            }
            else if(result){
              if (result.length > 0)  {
                req.session.user = result;
                role = "driver"
                console.log(req.session.user[0].driver_no);
                res.send(result);
          } else {
            res.send({ message: "ไม่พบ user นี้" });
            console.log("err");
          }
            }
          }
        );
      }else{
        console.log("error3");
      }
      //
    }
    
  
});

app.post('/uploadImg', upload.single('selectedFile'), (req, res) => {
 
  console.log(req.file.filename);
  const img_name = req.file.filename;
  pool.getConnection((err, connection) => {
    if (err) throw err; // not connected
    console.log('Connected!');

    connection.query('UPDATE images SET image = ? WHERE idstudent = ?',[img_name,req.session.user[0].idstudent], (err, rows) => {
    // Once done, release connection
    connection.release();

    if (!err) {
      res.send();
    } else {
      console.log(err);
    }

  });
});

  
});

app.listen(3001, () => {
  console.log("running server");
});
