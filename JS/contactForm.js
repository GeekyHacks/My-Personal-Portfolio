// The form section

// the input valdiation
const contactForm = document.querySelector('.inputForm');

const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,3}/;

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
  }
  return false;
});

contactForm.addEventListener('submit', (event) => {
  const formUserInput = new FormData(event.target);
  let UserInput = {};
  formUserInput.forEach((value, key) => {
    UserInput[key] = value;
  });
  const storedData = JSON.stringify(UserInput);
  localStorage.setItem('UserData', storedData);
});

let savedDate = JSON.parse(localStorage.getItem('UserData'));
window.onload = () => {
  UserName.value = savedDate.name;
  UserEmail.value = savedDate.email;
  UserMessage.value = savedDate.message;
};
