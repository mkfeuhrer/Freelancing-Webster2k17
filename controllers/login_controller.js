//Controller for Login

var connection = require('./../config') ;

module.exports.login = function( request , response ){
	var today_date = new Date( ) ;
	var users = { 
		"email" : request.body.email ,
		"password" : request.body.password ,
	}
	console.log( users ) ;

}