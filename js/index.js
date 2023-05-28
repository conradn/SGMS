function user() {
  return JSON.parse(localStorage.getItem("user"));
}
function token() {
  return localStorage.getItem("token");
}

document.getElementById("user").innerHTML = user().name;
console.log(user());
console.log(token());

function getBins() {
  var bins = [];
  axios
    .get("http://sgms.bse23-5.one/api/bins", {
      headers: {
        Authorization: "Bearer " + token(),
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      bins = response.data.bins;
      console.log(bins);
      //putting data into table

      bins.forEach((bin) => {
        // var table = document.getElementsByName("datatablesSimple");

        var tbody = document.querySelector("tbody");

        var row = tbody.insertRow();
        var id = row.insertCell(0);
        var bin_reference_number = row.insertCell(1);
        var status = row.insertCell(2);
        var level = row.insertCell(3);
        var capacity = row.insertCell(4);
        var supervisor = row.insertCell(5);
        var location = row.insertCell(6);
        var action = row.insertCell(7);
        id.innerHTML = bin.id;
        bin_reference_number.innerHTML = bin.bin_reference_number;
        status.innerHTML = bin.status;
        level.innerHTML = bin.bin_level;
        capacity.innerHTML = bin.bin_capacity;
        supervisor.innerHTML = bin.supervisor_id;
        location.innerHTML = bin.location;
        action.innerHTML = `<a href="bin.html?id=${bin.id}" class="btn btn-primary btn-sm">View</a> <a href="bin.html?id=${bin.id}" class="btn btn-primary btn-sm">Edit</a>`;
      });

      console.log(bins);
      numberOfBins = bins.length;
      document.getElementById("numberOfBins").innerHTML = numberOfBins;
      fullBins = bins.filter((bin) => bin.status == "Full").length;

        document.getElementById("fullBins").innerHTML = fullBins;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return bins;
}
getBins();
console.log(getBins());
