// app/routes.js
module.exports = function(app, passport) {


	function setUserInfo(request) {
		return {
			email: request.email,
			password: request.password
		};
	}


	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		let userinfo = setUserInfo(req.user);
		res.status(200).json({
			token : generateToken(userinfo),
			user : userinfo
		});
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login forms customer & employee
	app.get('/api/employeelogin', function(req, res) {
		let userinfo = setUserInfo(req.user);
		res.status(200).json({
			token : generateToken(userinfo),
			user : userinfo
		});
	});

	app.get('/api/customerlogin', function(req,res){
		let userinfo = setUserInfo(req.user);
		res.status(200).json({
			token : generateToken(userinfo),
			user : userinfo
		});
	});

	// process the login form
	app.post('/api/employeelogin', passport.authenticate('local-login', {
            successRedirect : '/api/adminpanel', // redirect to the secure profile section
            failureRedirect : '/api/employeelogin', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

		// process the login form
	app.post('/api/customerlogin', passport.authenticate('local-login', {
		successRedirect : '/api/customerprofile', // redirect to the secure profile section
		failureRedirect : '/api/customerlogin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
}),
function(req, res) {
		console.log("hello");

		if (req.body.remember) {
			req.session.cookie.maxAge = 1000 * 60 * 3;
		} else {
			req.session.cookie.expires = false;
		}
res.redirect('/');
});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup forms customer & employee
	app.get('/api/employeesignup', function(req, res) {
		let userinfo = setUserInfo(request);
		res.status(200).json({
			token : generateToken(userinfo),
			user : userinfo
		})
	});

	app.get('/api/customersignup', function(req,res){
		let userinfo = setUserInfo(request);
		res.status(200).json({
			token : generateToken(userinfo),
			user : userinfo
		})
	});

	// process the signup form
	app.post('/employeesignup', passport.authenticate('local-signup', {
		successRedirect : '/api/adminpanel', // redirect to the secure profile section
		failureRedirect : '/api/employeesignup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	
	// process the signup form
	app.post('/customersignup', passport.authenticate('local-signup', {
		successRedirect : '/api/customerprofile', // redirect to the secure profile section
		failureRedirect : '/api/customersignup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/api/customerprofile', isLoggedIn, function(req, res) {
		let userinfo = setUserInfo(request);
		res.status(200).json({
			token : generateToken(user),
			user : userinfo
		})
	});

	app.get('/api/adminpanel', isLoggedIn, function(req,res){
		let userinfo = setUserInfo(request);
		res.status(200).json({
			token : generateToken(user),
			user : userinfo
		})
	});

const error = (request, response) => {
    response.status(404).send({error : 'unknown endpoint'})
}

app.use(error)

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
