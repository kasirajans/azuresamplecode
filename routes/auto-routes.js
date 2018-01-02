const router =require('express').Router();
const passport =require('passport');
const ejs =require('ejs');

//Login route
router.get('/login',(req,res)=>{
    res.render('login');
    console.log("Calling Login page");
});


//Logut 
router.get('/logout',(req,res)=>{
    //handle with passport
    console.log("Calling Logout");
    res.send('Logout to azure');
    });

//autg with Azuread
router.get('/azuread',passport.authenticate('azuread-openidconnect'));

//callback route for azuread to redirect to

router.post('/azuread/redirect',(req,res)=>{
    console.log("Id and access token from auzre")
    var encodedId_token=req.body.id_token;
    var decodedId_token=new Buffer(encodedId_token, 'base64').toString('ascii');

console.log("Decoded ID_token"+decodedId_token);
  //  res.send(encodedId_token);
  
    res.render('authcode',{encodedIdToken:encodedId_token});

}

)
module.exports=router;
