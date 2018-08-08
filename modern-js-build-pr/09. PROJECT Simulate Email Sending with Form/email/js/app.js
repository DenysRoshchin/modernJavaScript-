// Var

const sendBtn = document.querySelector('#sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBnt = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// Event listener

eventListener();

function eventListener(){
  // app init
  document.addEventListener('DOMContentLoaded', appInit);

  // validate the form 
  email.addEventListener('blur', validateField);
  subject.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  // send email and reset btn
  sendEmailForm.addEventListener('submit', sendEmail);
  resetBnt.addEventListener('click', resetForm);

}

// Functions

// app initialization
function appInit(){
  // disable sendBtn on load
  sendBtn.disabled = true;
}

function sendEmail(e){
  e.preventDefault();

  // show the spinner
  const spinner = document.getElementById('spinner');

  // show the email img
  const emailImg = document.createElement('img');
        emailImg.src = 'img/mail.gif';
        emailImg.style.display = 'block';

  spinner.style.display = 'block';

  // hide spinner then show the email image
  setTimeout(function(){
    spinner.style.display = 'none';

    // show the img
    document.querySelector('#loaders').appendChild(emailImg);

    // after 4 second hide the img and reset the form
    setTimeout(function(){
      sendEmailForm.reset();
      emailImg.remove();
    }, 4000)
  }, 2000)

}

// validate the fields
function validateField(){
  let errors;

  // validate the length of the fields
  validateLength(this);

  // validate email
  if(this.type === 'email'){
    validateEmail(this);
  }

  // both will return errors, then check if there're any errors
  errors = document.querySelectorAll('.error');

  // check that the inputs are not empty
  if(email.value !== '' && subject.value !== '' && message.value !== ''){
    if(errors.length === 0){
      // the btn should be enabled
      sendBtn.disabled = false;
    }
  }
}

// validate the length of the fields
function validateLength(field){
  if(field.value.length > 0){
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

// validate email check for @ in the value
function validateEmail(field){
  let emailText = field.value;

  // check if the email text contain the @ sign 
  if(emailText.indexOf('@') !== -1){
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

// reset the form 
function resetForm(){
  sendEmailForm.reset();
}