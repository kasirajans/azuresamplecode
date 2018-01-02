const router =require('express').Router();
const passport =require('passport');
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
    res.send('you been logged in ');
}

)
module.exports=router;
