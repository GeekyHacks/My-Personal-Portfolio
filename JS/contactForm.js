// The form section

// the input valdiation
const contactForm = document.querySelector('.inputForm');

const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,3}/;

// const UserInputEmail=UserEmail.value;
//   const lowerCaseEmail = UserInputEmail.toLowerCaser();
//   const errorMsg = document.getElementById('errorMessage');
//   contactForm.addEventListener('submit', (event) => {
//     if (lowerCaseEmail !==UserInputEmail) {
//       errorMsg.style.height = '40px';
//       errorMsg.style.width = 'fit-content';
//       errorMsg.style.background = '#FFD600';
//       errorMsg.style.borderRadius = '5px';
//       errorMsg.style.alignSelf = 'center';
//       errorMsg.style.padding = '6px';
//       errorMsg.innerHTML = '*Email must be in email format (abd@sdm.com) and in lowercase letters!';
//       event.preventDefault();
//       // UserEmail.value = '';
//       // UserEmail.focus();
//     }
//   });
const UserName = document.getElementById('fullName');
const UserEmail = document.getElementById('email-input');
const UserMessage = document.getElementById('textarea-input');
contactForm.addEventListener('submit', (event) => {
  const vaild = emailPattern.test(UserEmail.value);
  const errorMsg = document.getElementById('errorMessage');
  if (!vaild) {
    errorMsg.style.height = '40px';
    errorMsg.style.width = 'fit-content';
    errorMsg.style.background = '#FFD600';
    errorMsg.style.borderRadius = '5px';
    errorMsg.style.alignSelf = 'center';
    errorMsg.style.padding = '6px';
    errorMsg.innerHTML = '*Email must be in email format (abd@sdm.com) and in lowercase letters!';
    event.preventDefault();
    // UserEmail.value = '';
    // UserEmail.focus();

    let UserInput;
    const formUserInput = new FormData(event.target);
    UserInput = {};
    formUserInput.forEach((value, key) => {
      UserInput[key] = value;
    });
    const storedData = JSON.stringify(UserInput);
    localStorage.setItem('UserData', storedData);
    let savedDate = JSON.parse(localStorage.getItem('UserData'));
    window.onload = () => {
      UserName.value = savedDate.name;
      UserEmail.value = savedDate.email;
      UserMessage.value = savedDate.message;
    };
  }

  if (vaild) {
    localStorage.removeItem('UserData');
    window.onload = () => {
      UserName.value = savedDate.name;
      UserEmail.value = savedDate.email;
      UserMessage.value = savedDate.message;
    };
  }
});

// let UserInput;
// contactForm.addEventListener('submit', (event) => {
//   const formUserInput = new FormData(event.target);
//   UserInput = {};
//   formUserInput.forEach((value, key) => {
//     UserInput[key] = value;
//   });
//   const storedData = JSON.stringify(UserInput);
//   localStorage.setItem('UserData', storedData);
// });

// let savedDate = JSON.parse(localStorage.getItem('UserData'));
// window.onload = () => {
//   UserName.value = savedDate.name;
//   UserEmail.value = savedDate.email;
//   UserMessage.value = savedDate.message;
// };

// contactForm.onsubmit = (e) => {
//   e.target.submit();
//   localStorage.removeItem('UserData');

// };

// //old
// contactForm.addEventListener('submit', (event) => {
//   const vaild = emailPattern.test(UserEmail.value);
//   const errorMsg = document.getElementById('errorMessage');
//   if (!vaild) {
//     errorMsg.style.height = '40px';
//     errorMsg.style.width = 'fit-content';
//     errorMsg.style.background = '#FFD600';
//     errorMsg.style.borderRadius = '5px';
//     errorMsg.style.alignSelf = 'center';
//     errorMsg.style.padding = '6px';
//     errorMsg.innerHTML = '*Email must be in email format (abd@sdm.com) and in lowercase letters!';
//     event.preventDefault();
//     // UserEmail.value = '';
//     // UserEmail.focus();
//   } else {
//     UserName.focus();
//     UserName.value = '';
//     UserEmail.value = '';
//     UserMessage.value = '';
//   }
// });

// // LocalStorage API

// const submitBtn = document.querySelector('#submitBtn');
// let UserInput;
// contactForm.addEventListener('submit', (event) => {
//   const formUserInput = new FormData(event.target);
//   UserInput = {};
//   formUserInput.forEach((value, key) => {
//     UserInput[key] = value;
//   });
//   const storedData = JSON.stringify(UserInput);
//   localStorage.setItem('UserData', storedData);
// });

// let savedDate = JSON.parse(localStorage.getItem('UserData'));
// window.onload = () => {
//   UserName.value = savedDate.name;
//   UserEmail.value = savedDate.email;
//   UserMessage.value = savedDate.message;
// };

// // show a message with a type of the input
// function showMessage(input, message, type) {
//   // get the small element and set the message
//   const msg = input.parentNode.querySelector('small');
//   msg.innerText = message;
//   // update the class for the input
//   input.className = type ? 'success' : 'error';
//   return type;
// }

// function showError(input, message) {
//   return showMessage(input, message, false);
// }

// function showSuccess(input) {
//   return showMessage(input, '', true);
// }

// function hasValue(input, message) {
//   if (input.value.trim() === '') {
//     return showError(input, message);
//   }
//   return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
//   // check if the value is not empty
//   if (!hasValue(input, requiredMsg)) {
//     return false;
//   }
//   // validate email format
//   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

//   const email = input.value.trim();
//   if (!emailRegex.test(email)) {
//     return showError(input, invalidMsg);
//   }
//   return true;
// }

// const form = document.querySelector('#form1');

// const NAME_REQUIRED = 'Please enter your name';
// const EMAIL_REQUIRED = 'Please enter your email';
// const EMAIL_INVALID = 'Please enter your address with lowercases';

// form.addEventListener('submit', (event) => {
//   // stop form submission
//   event.preventDefault();

//   // validate the form
//   const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
//   const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
//   // if valid, submit the form.
//   if (nameValid && emailValid) {
//     form.submit();
//   }
// });
