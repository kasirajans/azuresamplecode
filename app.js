const express =require('express');
const authRoutes=require('./routes/auto-routes');
const app =express();
const passportsetup=require('./config/passport-setup');

//set up view engine 
app.set('view engine','ejs');

//set up routes
app.use('/auth',authRoutes);
//create home route 
app.get('/',(req,res)=>{
  res.render('home');
});
app.listen(3000,()=>{
console.log('app listening on port 3000');
});