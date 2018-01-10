let mongoose = require('mongoose');
let passport = require('passport');

let express = require('express');
let app = express.Router();

//module.exports.displayLogin = (req,res,next) => {
 // return res.render('index/login',{
  //title:'Login',
/*messages: req.flash('loginMessage'),
        user:req.user?req.user.username:''*/
 // });
//}

// Just use app.get to attach view files to a route
//--------------------------------- ROUTERS---------------------------------
app.get('/',(req,res,next) => {
  return res.render('index/login',{
  title:'Login'
  });
});

app.get('/menu',(req,res,next) => {
  return res.render('index/menu',{
  title:'Menu'
  });
});

app.get('/restaurant',(req,res,next) => {
  return res.render('index/restaurant',{
  title:'Restaurant'
  });
});

app.get('/restaurants',(req,res,next) => {
  return res.render('index/restaurants',{
  title:'Restaurants'
  });
});

app.get('/addReview',(req,res,next) => {
  return res.render('index/addReview',{
  title:'Add a review'
  });
});

module.exports = app; 



