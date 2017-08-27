//Entry point of the app

var express = require('express') ;
var bodyParser = require('body-parser') ;
var registerController = require( './controllers/register_controller') ;
var loginController = require( './controllers/login_controller') ;

var app = express( ) ;
app.set( 'view engine' , 'ejs' ) ;

var urlencodedParser = bodyParser.urlencoded( { extended : false } ) ;

//Route functions
function register( request , response )
{
	response.render( 'register' , { message : "This is the register page. Welcome."} ) ;
}

function login( request , response )
{
	response.render( 'login' ) ;	
}
//Route functions end

//Routes
app.get( '/register' , register ) ;
app.get( '/login' , login ) ;
app.post( '/register' , urlencodedParser , registerController.register ) ;
app.post( '/login' , urlencodedParser , loginController.login ) ;
//Routes end

app.listen( 8000 ) ;