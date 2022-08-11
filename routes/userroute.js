const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const usercontroller = require('../controllers/usercontroller')

router.get('/:id',usercontroller.user_index);
router.post('/usercheck',usercontroller.user_check)

router.post('/add-user',function(req,res){
    console.log(req.body)
    var user = new User({
        username:req.body.username,
        email:req.body.useremail,
        password:req.body.userpassword
    })
    user.save()
    .then((result)=>{
        res.send("result here")
    })
    .catch((error)=>{
        console.log(error);
    })
})

router.post('/register',function(req,res,next){
    console.log(req.body)
    res.send("successsssss")
})


router.get('/getallusers',function(req,res){
    
    User.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/user/:id',(req,res)=>{
    const id='62e508681a193aef32b472d5';
    User.findById(id)
    .then((result)=>{
        res.send(result);
        console.log("get single record")
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.put('/userupdate/:id',(req,res)=>{
    console.log(req.params.id);
    User.findOneAndUpdate({_id:req.params.id},req.body)
    .then(function(user){
        User.findOne({_id:req.params.id})
        .then(function(result){
            res.send(result)
        })
    })
})

router.delete('/userdelete/:id',(req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router;
