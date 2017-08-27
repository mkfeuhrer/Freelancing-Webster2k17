var connection = require('./../config') ;

module.exports.register = function( request , response ){
	var today_date = new Date( ) ;
	var user_type ;
	if( request.body.user_type == 'client' )
		user_type = 1 ;
	else
		user_type = 2 ;

	var user = { 
		"name" : request.body.name ,
		"email" : request.body.email ,
		"password" : request.body.password ,
		"birthday" : request.body.birthday ,
		"contact" : request.body.contact ,
		"user_type" : user_type 
	}
	
	var result ;
	
	connection.query('SELECT * FROM users WHERE email = ?' , [user.email] , function( error , results , fields ){
		if( !error )
		{
			if( results.length > 0 )
			{
				response.render( 'register' , { message : "ID with that email already exists."} ) ;
			}
			else
			{
				connection.query('INSERT INTO users SET ?' , user , function( error , results , fields ){
					if( !error )
					{
						response.render( 'register_success' ) ;
					}
				} );	
			}
		}
		else
			console.log(error) ;
	} ) ;

}