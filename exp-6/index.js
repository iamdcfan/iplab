let btnValidate = document.querySelector("#btn-validate");

let usernameMsg = document.querySelector("#username-msg");
let emailMsg = document.querySelector("#email-msg");
let passwordMsg = document.querySelector("#password-msg");
let confirmPwdMsg = document.querySelector("#confirm-pwd-msg");
let phoneMsg = document.querySelector("#phone-msg");
let countryMsg = document.querySelector("#country-msg");
let genderMsg = document.querySelector("#gender-msg");
let courseMsg = document.querySelector("#course-msg");
btnValidate.addEventListener("click", validate);

function validate() {
  let username = document.querySelector("#username").value;
  !isValidUsername(username)
    ? showMsg(usernameMsg, "username must be between 3 to 25 characters.")
    : showMsg(usernameMsg, "");

  let email = document.querySelector("#email").value;
  !isValidEmail(email)
    ? showMsg(emailMsg, "Enter Valid email")
    : showMsg(emailMsg, "");

  let password = document.querySelector("#password").value;
  !isValidPassword(password)
    ? showMsg(
        passwordMsg,
        `Password has eight characters or longer. And it must contain 1 lowercase character, 1
      uppercase character, 1 number, and at least one special character in this set (!@#$%^&*).`
      )
    : showMsg(passwordMsg, "");

  let confirmPwd = document.querySelector("#confirm-pwd").value;
  !isValidConfirmPass(password, confirmPwd)
    ? showMsg(
        confirmPwdMsg,
        "confirm password must be the same as the password."
      )
    : showMsg(confirmPwdMsg, "");

  let phone = document.querySelector("#phone").value;
  !isValidPhone(phone)
    ? showMsg(phoneMsg, "Enter valid phone number")
    : showMsg(phoneMsg, "");

  let country = document.querySelector("#country").value;
  !isValidCountry(country)
    ? showMsg(countryMsg, "Select country")
    : showMsg(countryMsg, "");

  let gender = document.querySelector("input[name='gender']:checked");
  !isValidGender(gender)
    ? showMsg(genderMsg, "Select Gender")
    : showMsg(genderMsg, "");

  let courseIt = document.querySelector("input[name='it']");
  let courseCs = document.querySelector("input[name='cs']");
  let courseMech = document.querySelector("input[name='mech']");
  !isValidCourse(courseIt, courseCs, courseMech)
    ? showMsg(courseMsg, "Select Course")
    : showMsg(courseMsg, "");
}

function showMsg(msgElm, msg) {
  msgElm.innerText = msg;
}

function isValidUsername(username) {
  username = username.trim();
  if (username === "" || username.length < 3 || username.length > 25) {
    return false;
  }
  return true;
}

function isValidEmail(email) {
  email = email.trim();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat) || email === "") {
    return false;
  }
  return true;
}

function isValidPassword(password) {
  password = password.trim();
  const passFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passFormat) || password.length == 0) {
    return false;
  }
  return true;
}

function isValidConfirmPass(password, confirmPwd) {
  confirmPwd = confirmPwd.trim();
  if (password !== confirmPwd || confirmPwd === "") {
    return false;
  }
  return true;
}

function isValidPhone(phone) {
  phone = phone.trim();
  const phoneFormat = /^\+91\d{10}$/;
  if (phone.match(phoneFormat) || phone === "") {
    return false;
  }
  return true;
}

function isValidCountry(country) {
  if (country === "-1") {
    return false;
  }
  return true;
}

function isValidGender(gender) {
  if (gender == null) {
    return false;
  }

  return true;
}

function isValidCourse(it, cs, mech) {
  if (!it.checked && !cs.checked && !mech.checked) {
    return false;
  }

  return true;
}
