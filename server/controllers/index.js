let mongoose = require('mongoose');
let passport = require('passport');

let express = require('express');
let app = express.Router();
var Client = require('node-rest-client').Client;

var client = new Client();

var bodyParser = require('body-parser');
 
var userid="",usertype="";
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 

//module.exports.displayLogin = (req,res,next) => {
 // return res.render('index/login',{
  //title:'Login',
/*messages: req.flash('loginMessage'),
        user:req.user?req.user.username:''*/
 // });
//}

// Just use app.get to attach view files to a route
//https://api-project-283483524962.appspot.com/api/User
//--------------------------------- ROUTERS---------------------------------
app.get('/',(req,res,next) => {
  return res.render('index/login',{
  title:'Login'
  });
});

app.get('/register',(req,res,next) => {
  return res.render('index/register',{
  title:'Register'
  });
});

  //Example POST method invocation 
var Client = require('node-rest-client').Client;

var client = new Client();





app.post('/register',(req,res,next) => {
  var myObj, i, j, x = "";
  var args = {
    data: { "firstname": req.body.firstname,"lastname":req.body.lastname,"email":req.body.email,"password":req.body.password,"usertype":req.body.usertyperadio},
    headers: { "Content-Type": "application/json" }
  };
  // set content-type header and data as json in args parameter 
  console.log(req.body);
    client.post("http://api-project-283483524962.appspot.com/api/User/", args, function (data, response) {
      // parsed response body as js object 
     console.log(data);
    
    // console.log(data[0].id);
      // raw response 
      //console.log(response);
    });

    // registering remote methods 
    client.registerMethod("postMethod", "http://api-project-283483524962.appspot.com/api/User/", "POST");

    client.methods.postMethod(args, function (data, response) {
      // parsed response body as js object
      console.log(data);
      // raw response 
    
    // console.log(response);
    console.log("=======================================================");
     
    
    x = data.path[0].id;
    y = data.path[0].idTypeCase;
    console.log( x),
    console.log(userid)
      userid=x;
      usertype = y;
    });
    return res.render('index/managemenus',{
        title:'Register',
        userId:userid,
        userType: usertype
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

app.post('/restaurant',(req,res,next) => {
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

app.get('/manageRestaurants',(req,res,next) => {
  return res.render('index/manageRestaurants',{
  title:'Add a Restaurant'
  });
});

app.get('/managemenus',(req,res,next) => {
  var itemid=[],userid=[], restaurantid=[], menuname=[], menudescription=[],calories=[], price=[], timings=[],type=[];
  var isRecommended=[];

  // direct way 
client.get("https://api-project-283483524962.appspot.com/api/MenuItems/5725107787923456", function (data, response) {
  // parsed response body as js object 
  console.log(data);
  // raw response 

 
  console.log(menuname);
  return res.render('index/managemenus',{
    title:'Manage Menu',
    menuItems:data.menuItems
    });
});

  
});

app.get('/delete/:item_id',(req,res,next) => { 
  // set content-type header and data as json in args parameter 
 
    client.post("https://api-project-283483524962.appspot.com/api/MenuItems/"+req.params.item_id, function (data, response) {
      // parsed response body as js object 
     console.log(data);
    
    });

    // registering remote methods 
    client.registerMethod("postMethod", "https://api-project-283483524962.appspot.com/api/MenuItems/"+req.params.item_id, "DELETE");

    client.methods.postMethod(function (data, response) {
      // parsed response body as js object
      console.log(data);
    
      return res.redirect('/managemenus');
  
    });
   
   
});



app.get('/addmenu',(req,res,next) => {
  return res.render('index/addmenu',{
  title:'Add a Menu'
  });
});

module.exports = app; 
