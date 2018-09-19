const NAME = document.querySelector('#name');
const EMAIL = document.querySelector('#email');
const COMMENTS = document.querySelector('#comments');
const SEND = document.querySelector('#send');

//Regex
const REG_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REG_ALPHA = /^[A-z]+$/;

function validateForm(){

	//Check name to be empty
	if(NAME.value == ""){
		NAME.style.border = '2px solid #F44336';
		NAME.placeholder = "Enter your name";
	}else{
		if(!REG_ALPHA.test(NAME.value)){
			NAME.style.border = '2px solid #F44336';
			NAME.value = "";
			NAME.placeholder = "Name needs to be alphabets only"
		}else{
			NAME.style.border = '2px solid #212121';
		}
	}

	//Check email to be empty
	if(EMAIL.value == ""){
		EMAIL.style.border = '2px solid #F44336';
		EMAIL.placeholder = "Enter your email address";
	}else{
		if (!REG_EMAIL.test(EMAIL.value)) {
			EMAIL.style.border = '2px solid #F44336';
			EMAIL.value = "";
			EMAIL.placeholder = "Enter valid email address";
		}else{
			EMAIL.style.border = '2px solid #212121';
		}
	}

	//Check comments to be empty
	if(COMMENTS.value == ""){
		COMMENTS.style.border = '2px solid #F44336';
		COMMENTS.placeholder = "Enter some feedback";
	}else{
		COMMENTS.style.border = '2px solid #212121';
	}
}

SEND.addEventListener('click', validateForm, false);