/*
The Challenge
==================================================================================
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"
*/

const submitBtn = document.getElementById("submitEmailBtn");
const inputBox = document.getElementById("inputBox");
const errorMsg = document.getElementById("errorMsg");
const formSection = document.querySelector(".form");

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  //clear styling
  formSection.classList.remove("red");
  formSection.classList.remove("green");

  // restart: clear message
  let msg = "";

  const inputVal = inputBox.value;
  console.log(inputVal); //testing

  // regex format, remove spaces from input value
  const noSpace = inputVal.replace(/\s/g, "");
  // regex format, email follows structure: `name@host.tld`
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // requirements
  if (noSpace.length === 0) {
    msg = "Whoops! It looks like you forgot to add your email";
    formSection.classList.add("red");
  } else if (!noSpace.match(emailFormat)) {
    msg = "Please provide a valid email address";
    formSection.classList.add("red");
  } else if (noSpace.match(emailFormat)) {
    msg = "Congrats, " + noSpace + " you're all signed up now!";
    formSection.classList.add("green");
  }
  // outcome
  console.log(msg);
  errorMsg.innerText = msg;
}
