// The form section
const submitBtn = document.querySelector('#submitBtn');

// Save the value function - save it to localStorage as (ID, VALUE)
// function saveValue(e) {
//   const { id, val } = e; // destructure
//   // const id = e.id; // get the sender's id to save it .
//   // const val = e.value; // get the value.
//   // Every time user writing something, the localStorage's value will override .
//   localStorage.setItem(id, val);
// }

// get the saved value function - return the value of 'v' from localStorage.
// function getSavedValue(v) {
//   if (!localStorage.getItem(v)) {
//     return saveValue(); // You can change this to your defualt value.
//   }
//   return localStorage.getItem(v);
// }

// // save input values to localstorage
// document.getElementById('firstname-input').value = getSavedValue('firstname-input');
// document.getElementById('secondname-input').value = getSavedValue('secondname-input');
// set the value to this input
// document.getElementById('email-input').value = getSavedValue('email-input');
// document.getElementById('textarea-input').value = getSavedValue('textarea-input');

// the input valdiation
function InvalidMsg(input) {
  if (input.value === '') {
    input.setCustomValidity('Entering an email-id is necessary!');
  } else if (input.validity.patternMismatch) {
    input.setCustomValidity('Please enter a correct lowercase email address!');
  } else {
    input.setCustomValidity('');
  }

  return true;
}

submitBtn.addEventListener('click', () => {
  // getSavedValue();
  InvalidMsg();
  // saveValue();
});
