const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const md5 = require('md5')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Pusher = require("pusher");
const request = require('request');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://192.168.0.189:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

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

db.connect(function(err) {
  try{
    if (err) throw err;
    console.log("Connected!");
  }catch{
    console.log("nosql");
  }
  
});

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
    db.query('SELECT * FROM student_data,main,room,images WHERE  main.room_no = room.room_no AND student_data.idstudent = ?;SELECT * FROM main,driver WHERE main.1st_round = driver.driver_no AND idstudent = ?; SELECT * FROM main,driver WHERE main.2nd_round = driver.driver_no AND idstudent = ?',
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

// app.get('/data',(req,res)=> {  
//   db.query("SELECT * FROM student_data,main,room,images WHERE  main.room_no = room.room_no AND student_data.idstudent = ?",
//   req.session.user[0].idstudent, 
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//       console.log(result)
//     };
//   });
// });

app.get("/login", (req, res) => {
  if (req.session.user) {

    res.send({ loggedIn: true, user: req.session.user });
    
  } else {

    res.send({ loggedIn: false });

  }
});

app.post("/login", (req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;
  var passmd6 =  md5(password);
    if(req.body.username){
      db.query(
        "SELECT * FROM login WHERE username = ? AND password = ?;",
        [username,passmd6],
        (err, result) => {
          if (err) {
            res.send({ err: err });
          }
          else if(result){
            if (result.length > 0)  {
              req.session.user = result;
              console.log(req.session.user[0].idstudent);
              res.send(result);
        } else {
          res.send({ message: "User doesn't exist" });
          console.log("err");
        }
          }
        }
      );
    }else{
      console.log("error3");
    }
  
});



app.listen(3001, () => {
  console.log("running server");
});
