const express =require('express');
const authRoutes=require('./routes/auto-routes');
const app =express();
const passportsetup=require('./config/passport-setup');
var bodyParser = require('body-parser');
//set up view engine 
app.set('view engine','ejs');
//Json use 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
//set up routes
app.use('/auth',authRoutes);
//create home route 
app.get('/',(req,res)=>{
  res.render('home');
});
app.listen(3000,()=>{
console.log('app listening on port 3000');
});