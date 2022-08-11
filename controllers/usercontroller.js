const User = require('../models/userModel');
const user =require('../models/userModel');
const user_index = (req,res)=>{
    User.find()
      .then((result)=>{
        res.send(result)
      })
      .catch((err)=>{
        console.log(err);
      })
}

const user_check = (req,res)=>{
  console.log(req.body)
  User.findOne({username: req.body.username,email:req.body.useremail,password:req.body.userpassword})
  .then((result)=>{
    if(result){
      res.send(result)
    }else{
      res.send("user not found")
    }
  })
  .catch((err)=>{
    res.send("user is not registered")
  })
}

module.exports = { user_index,
                   user_check}