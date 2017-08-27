var mysql = require('mysql') ;

var connection = mysql.createConnection( { 
	host : 'localhost' ,
	user : 'root' ,
	password : 'proxyyy' ,
	database : 'freelancer'
} ) ;

connection.connect( function(err){
	if( err )
		console.log('Error in connecting to Database') ;
} ) ;

module.exports = connection ;