/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Capture form data
  var name = document.getElementById("inputLastName").value;
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var password_confirmation = document.getElementById(
    "inputPasswordConfirm"
  ).value;
  var role = document.getElementById("role").value;

  // Create an object with the captured data
  console.log(name);
  var formData = {
    name: name,
    email: email,
    password: password,
    role: role,
    password_confirmation: password_confirmation,
  };
  console.log(formData);

  // Call a function to send the data to the API
  sendData(formData);
});

function sendData(formData) {
  axios
    .post("http://sgms.bse23-5.one/api/create-account", formData)
    .then((response) => {
      // Handle the response from the API
      console.log("Data sent successfully");
      //capture token
      console.log(response);
    //notify user of successful registration
    document.getElementById("successMessage").style.display = "block";




    })
    .catch((error) => {
      // Handle any error that occurred during the request
      console.error("Error:", error);
    });
}





 








