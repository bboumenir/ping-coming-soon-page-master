

const email = document.querySelector('#mail');

const form = document.querySelector('#myForm');

var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 


form.addEventListener('submit', function (event) {
	
      var error;

      if (!email.value.match(regEx)) {
          
          error = "Please provide a valid email adress"

      } if (error) {

      	event.preventDefault();
      	document.getElementById('error').innerHTML = error;
      	return false
      }

})