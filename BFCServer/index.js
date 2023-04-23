require("dotenv").config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app =express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/client/build')));
console.log(__dirname);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

mongoose.connect("mongodb+srv://"+process.env.USERNAME+":"+process.env.PASSWORD+"@bfcsite.nb1ysrx.mongodb.net/?retryWrites=true&w=majority" , { useNewUrlParser: true , useUnifiedTopology: true });

const NewMemberScheme = new mongoose.Schema({
  Name: String ,
  FatherName: String ,
  Address: String ,
  Number: Number,
  Dob:Date,
  Pic:String
});

const NewMember = mongoose.model("NewMember" , NewMemberScheme );

app.post("/" , (req,res) => {

  try{


   const Member = new NewMember({
     Name: req.body.Name ,
     FatherName: req.body.Father_Name,
     Address:req.body.address,
     Number:req.body.num,
     Dob:req.body.dob,
     Pic:req.body.pic
   });

   Member.save((err, info) => {
     if(err){

      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
       console.log(err);
       
     } else{
         
      res.send({
        success: true,
        message: 'Thanks for contacting us. We will get back to you shortly'
      });

       console.log("Successfully Added a New Member");
     }

   });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
    console.log(err);
  }

  
  
});


app.listen(process.env.PORT || 4000 , () => console.log("Server is successfully started on port 4000"));
