var email = document.querySelector("input[name='email']");
var senha = document.querySelector("input[name='senha']");

email.addEventListener('keyup', () => {

  let expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let testaER = expReg.test(email.value);

});
