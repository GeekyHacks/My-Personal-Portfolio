// The form section

// the input valdiation
const contactForm = document.querySelector('.inputForm');

const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,3}/;

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
  if (vaild) {
    form.submit();
    event.preventDefault();
  }
});

// Declare the form inputs
const UserName = document.querySelector('#fullName');
const UserEmail = document.querySelector('#email-input');
const UserMessage = document.querySelector('#textarea-input');

// Declare an data object to store userinput
let formData = {
  FullName: '',
  Email: '',
  Message: '',
};

// Declare the userinput as a data and match it with dataobject
const formUserInput = (data) => {
  UserName.value = data.FullName;
  UserEmail.value = data.Email;
  UserMessage.value = data.Message;
};

// Store all user input one by one
if (localStorage.getItem('formData')) {
  formData = JSON.parse(localStorage.getItem('formData'));
  formUserInput(formData);
}

UserName.addEventListener('input', () => {
  formData.FullName = UserName.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

UserEmail.addEventListener('input', () => {
  formData.Email = UserEmail.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

UserMessage.addEventListener('input', () => {
  formData.Message = UserMessage.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
