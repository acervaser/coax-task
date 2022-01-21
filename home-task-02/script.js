// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.
// But it leads to an error. Why?
// Fix the highlighted line for everything to start working right (other lines are not to be changed).


function checkPassword(password, ok, fail) {
	if (password == "password") ok();
	else fail();
  }
  
 const user = {
	firstname: "Tim",
  
	loginOk() {
		console.log(`${this.firstname} logged in`);
	},
  
	loginFail() {
		console.log(`${this.firstname} failed to log in`);
	}

  };
  
  let loginOk = user.loginOk.bind(user);
  let loginFail = user.loginFail.bind(user);

  checkPassword("password", loginOk, loginFail);
  
