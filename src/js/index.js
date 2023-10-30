const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullnameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let canSubmit = true;

const submitForm = (data) => {
  console.log(data);
  //formEl.submit();
};

const validateFld = (el, condition) => {
  if (condition) {
    canSubmit = true;
    el.parentElement.classList.remove('form-field-error');
  } else {
    canSubmit = false;
    el.parentElement.classList.add('form-field-error');
  }
};