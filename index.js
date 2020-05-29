var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var inputText = document.querySelector("#email");

var inputField = document.querySelector(".rounded-field");

var inputFieldBox = document.querySelector(".error-msg");

var notifyButton = document.querySelector(".button");

notifyButton.addEventListener("click", function() {
  var res = emailValidation(inputText.value);
  if(res) {
    inputField.classList.add("valid");
    setTimeout(function() {
      inputField.classList.remove("valid");
      inputText.value = "";
    }, 800);
  } else {
    inputField.classList.add("invalid");
    inputFieldBox.classList.add("form");
    if($(window).width() < 990) {
      notifyButton.style.cssText = 'margin-top: 40px; transition: all .4s';
    }
    setTimeout(function() {
      inputField.classList.remove("invalid");
      inputFieldBox.classList.remove("form");
      if($(window).width() < 990) {
        notifyButton.style.cssText = 'margin-top: 10px; transition: all .4s';
      }
      inputText.value = "";
    }, 800);
  }
});

function emailValidation(mail) {
  if(mail.match(regexp)) {
    return true;
  } else {
    return false;
  }
}
