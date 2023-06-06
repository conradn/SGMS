async function getBins() {
  await axios
    .get("http://sgms.bse23-5.one/api/bins", {
      headers: {
        Authorization: "Bearer " + token(),
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      var bins = response.data.bins;

      populateBinsTable(bins);

      let numberOfBins = bins.length;

      document.getElementById("numberOfBins").innerHTML = numberOfBins;
      fullBins = bins.filter((bin) => bin.status == "Full").length;

      document.getElementById("fullBins").innerHTML = fullBins;

    })
    .catch((error) => {
      console.error("Error:", error);
    });

}


function populateBinsTable(bins) {
  var tbody = document.querySelector("tbody");

  var x = 1;

  bins.forEach((bin) => {
    var row = tbody.insertRow();
    var id = row.insertCell(0);
    var bin_reference_number = row.insertCell(1);
    var status = row.insertCell(2);
    var level = row.insertCell(3);
    var capacity = row.insertCell(4);
    var supervisor = row.insertCell(5);
    var location = row.insertCell(6);
    var action = row.insertCell(7);

    id.innerHTML = x++;
    bin_reference_number.innerHTML = bin.bin_reference_number;

    status.innerHTML = bin.status;

    if (bin.status == 'Full') {
      status.style.color = '#ffffff'
      row.style.backgroundColor = "red";
    }
    


    level.innerHTML = bin.bin_level;
    capacity.innerHTML = bin.bin_capacity;
    supervisor.innerHTML = bin.supervisor;
    location.innerHTML = bin.location;
    action.innerHTML = `<a href="bin.html?id=${bin.id}"><span class="fas fa-pencil"></span></a>`;
    action.innerHTML += `<a href="bin.html?id=${bin.id}"><span class="fas fa-eye"></span></a>`;

  });

  document.getElementById('loading-bins').style.display = 'none';

  const datatablesSimple = document.getElementById('datatablesSimple');
  datatablesSimple.style.display = 'block';
  if (datatablesSimple) {
    new simpleDatatables.DataTable(datatablesSimple);
  }
}

function getSupervisors() {

  var supervisors = [];
  axios
    .get("http://sgms.bse23-5.one/api/supervisors", {
      headers: {
        Authorization: "Bearer " + token(),
        "Content-Type": "application/json",
      },

    }).then((response) => {
      console.log(response);
      supervisors = response.data.supervisors;
      console.log(supervisors);
      // supervisors.forEach((supervisor) => {
      //   var tbody = document.querySelector("tbody");

      //   var row = tbody.insertRow();
      //   var id = row.insertCell(0);
      //   var name = row.insertCell(1);
      //   var email = row.insertCell(2);
      //   var phone = row.insertCell(3);
      //   var action = row.insertCell(4);
      //   id.innerHTML = supervisor.id;
      //   name.innerHTML = supervisor.name;
      //   email.innerHTML = supervisor.email;
      //   phone.innerHTML = supervisor.phone;
      //   action.innerHTML = `<a href="supervisor.html?id=${supervisor.id}" class="btn btn-primary btn-sm">View</a> <a href="supervisor.html?id=${supervisor.id}" class="btn btn-primary btn-sm">Edit</a>`;
      // });
      numberOfSupervisors = supervisors.length;
      document.getElementById("numberOfSupervisors").innerHTML = numberOfSupervisors;
    }
    ).catch((error) => {
      console.error("Error:", error);
    }
    );
  return supervisors;
}

//populate supervisors list
getSupervisors();


