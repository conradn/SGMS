document.getElementById("logoutBtn").addEventListener("click", function () {
  logout();
});

function logout() {
  fetch("http://sgms.bse23-5.one/api/logout", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token(),
      "Content-Type": "application/json",
      // Add any required headers, such as authorization token
    },
    // Include any necessary data in the request body
    body: JSON.stringify({
      // Add any relevant data required by the API for logout
    }),
  })
    .then(function (response) {
      if (response.ok) {
        // Clear the local storage or session storage for logout state
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("token");

        // Redirect the user to the login page or any desired page
        window.location.href = "login.html";
      } else {
        console.log("Logout request failed.");
      }
    })
    .catch(function (error) {
      console.log("An error occurred during logout.");
    });
}
