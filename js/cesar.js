//Get references to all the html elements
const MESSAGE = document.querySelector("#message");
const ENCRYPT_LOCK = document.querySelector(".encrypt a");
const SHIFT = document.querySelector("#shift");
const CIPHER = document.querySelector("#cipher");
//Store dictionary in this array
const DICTIONARY = [];

//Function to make the dictionary
function makeDictionary(){

	for(i=65; i<=90; i++)
	{
		DICTIONARY.push(String.fromCharCode(i));
	}	

}

//Get the message from the user and convert it into compatible form
function toCompatibleMessage(message){

	//Take care of all numbers and special symbols here
	var message = message.replace(/[^a-z]+/gi,"").toUpperCase();
	return message;
}

//Encrypt the message in this function
function toCipher(message, shift){

	//Convert to compatible form
	message = toCompatibleMessage(message);

	var tempIndex;

	var encryptedMessage = [];

	for(i=0; i<message.length; i++)
	{
		var tempIndex = DICTIONARY.indexOf(message[i]);

		//Check if the index + shift is > the last index
		if(tempIndex + shift >= DICTIONARY.length){
			encryptedMessage.push(DICTIONARY[(tempIndex + shift) - DICTIONARY.length]);
		}
		else
		{
			encryptedMessage.push(DICTIONARY[tempIndex + shift]);
		}
	}

	CIPHER.focus();
	CIPHER.value = encryptedMessage.join("");
}

//Execute the dictionary function on page load
window.addEventListener("load", makeDictionary, false);

ENCRYPT_LOCK.addEventListener("click", function(){
	toCipher(MESSAGE.value, Number(SHIFT.value));
}, false);
