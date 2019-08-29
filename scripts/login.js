var email = document.querySelector("input[name='email']");
var buttoSubmit = document.querySelector("button[name='button']");


email.addEventListener('blur', () => {

	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var passou = false;

	if (re.test(email.value)) {

    email.classList.add("correto");
    passou = true;
	} else {

    email.classList.add("incorreto");
    passou = false;
	}

  if(email.value == 0) {

    email.classList.remove("correto");
  	email.classList.remove("incorreto");
  }

});
