// The form section

// the input valdiation
const contactForm = document.querySelector('.inputForm');
const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z]{2,3}/;

contactForm.addEventListener('submit', function (event) {
  const UserInput = document.getElementById('email-input');
  const vaild = emailPattern.test(UserInput.value);
  const errorMsg = document.getElementById('errorMessage');

  if (!vaild) {
    errorMsg.style.height = '20px';
    errorMsg.style.background = '#FFD600';
    errorMsg.style.borderRadius = '5px';
    errorMsg.style.alignSelf = 'center';
    errorMsg.style.padding = '5px';
    errorMsg.innerHTML = '*Email must be in email format (abd@sdm.com) and in lowercase letters!';
    event.preventDefault();
    UserInput.value = '';
    UserInput.focus();
    return;
  }
});
