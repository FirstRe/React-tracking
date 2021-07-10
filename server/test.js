
  // const express = require("express");
  // const mysql = require("mysql");
  // const cors = require("cors");
  // const md5 = require('md5')
  // const bodyParser = require("body-parser");
  // const cookieParser = require("cookie-parser");
  // const session = require("express-session");
  // const Pusher = require("pusher");
  // const request = require('request');
  
  // const app = express();
  
  // app.use(express.json());
  // app.use(
  //   cors({
  //     origin: ["http://localhost:3000"],
  //     methods: ["GET", "POST"],
  //     credentials: true,
  //   })
  // );
  // app.use(cookieParser());
  // app.use(bodyParser.urlencoded({ extended: true }));
  
  // app.use(
  //   session({
  //     key: "userId",
  //     secret: "subscribe",
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       expires: new Date(253402300000000),
  //     },
  //   })
  // );
  // var products = new Array() ;
  // app.get("/test2", (req, res) => {
    
  //   if (products) {

  //       res.status(200).send(products);
        
  //     } else {
    
  //       res.send({ loggedIn: false });
    
  //     }
    
      
    
  // });
  
  // app.post("/test", (req, res) => {
  //   var token = "7454ba0a-cbf4-4282-aee6-56e6125718b2"
  //   var postData = {
  //       "genderCd": "FEMALE",
  //       "dob": "1983-02-21",
  //       "planCode": "T11A20",
  //       "premiumPerYear": 30000,
  //       "paymentFrequency": "YEARLY"
  //   };
  //   request({
  //     url: 'https://api.fwd.co.th/dev-ecommerce/getProduct',
  //     method: 'POST',
  //     headers: {
  //        'Content-Type': 'application/json; charset=utf-8',
  //        'cache-control': 'no-cache',
  //        'Authorization': "Bearer " + token,
  //     },
  //     body: postData,
  //     rejectUnauthorized: true,
  //     json: true
  //   }, function(err, res) {
  //         if(err) {
  //           console.error(err);
  //         } else {

  //           products.push(res.body.quotationProductList);
  //           // products = res.body.quotationProductList;
            
  //           console.log(products);
            
  //         }
    
  //   });
  // });
  
  
  
  // app.listen(3001, () => {
  //   console.log("running server");
  // });
  
let x = 0;
let y = "0";

 x === y ? console.log("true") : console.log("false")