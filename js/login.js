document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // Capture form data
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  if (email == '' || password == '') {
    return showErrorMessage('Please fill the form!');
  }

  // Create an object with the captured data
  var formData = {
    email: email,
    password: password,
  };

  // Call a function to send the data to the API

  sendLoginData(formData);
});




function sendLoginData(formData) {
  document.getElementById("login-text").innerHTML = "";
  document.getElementById("loggin-processing").style.display = "block";
  axios.post("http://sgms.bse23-5.one/api/login", formData)
    .then((response) => {
      if (response.status == 200) {
        //save token to local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        //redirect to dashboard
        showSuccessMessage("Logged in successfully");

        setTimeout(function () {
          window.location.href = "index.html";
        },1500);

      } else {
        document.getElementById("login-text").innerHTML = "Try again";
        document.getElementById("loggin-processing").style.display = "none";
        showErrorMessage('Invalid email or password');
        return;
      }
    }).catch(error => {
      document.getElementById("login-text").innerHTML = "Try again";
      document.getElementById("loggin-processing").style.display = "none";
      showErrorMessage('Invalid email or password');
      return;
    });
}
