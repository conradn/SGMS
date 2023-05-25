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
  var name = document.getElementsByName("name").value;
  var email = document.getElementsByName("email").value;
  var role = document.getElementsByName("role").value;

  // Create an object with the captured data
  var formData = {
    name: name,
    email: email,
    role: role,
  };

  // Call a function to send the data to the API
  sendData(formData);
});

function sendData(formData) {
  fetch("http://sgms.bse23-5.one/api/create-account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      // Handle the response from the API
      if (response.ok) {
        // Request successful
        console.log("Data sent successfully");
      } else {
        // Request failed
        console.log("Failed to send data");
      }
    })
    .catch((error) => {
      // Handle any error that occurred during the request
      console.error("Error:", error);
    });
}




