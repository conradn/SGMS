function login() {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      // Capture form data
      var email = document.getElementById("inputEmail").value;
      var password = document.getElementById("inputPassword").value;

      // Create an object with the captured data
      var formData = {
        email: email,
        password: password,
      };

      // Call a function to send the data to the API

      sendLoginData(formData);
    });
}
login();
function sendLoginData(formData) {
  axios.post("http://sgms.bse23-5.one/api/login", formData).then((response) => {
    // Handle the response from the API
    console.log("logged in successfully");
    //capture token
    console.log(response);
    if (response.status == 200) {
      //save token to local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      //redirect to dashboard
      window.location.href = "index.html";
    }
  });
}
