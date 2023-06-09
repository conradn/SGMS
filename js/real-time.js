function getFullBin() {
    axios.get("http://sgms.bse23-5.one/api/get-full-bin")
        .then((response) => {
            if (response.data) {
                let bin = response.data;

                let message = '<strong>' + bin.bin_reference_number + ' requires attention</strong><br>';
                message += 'Bin level is ' + bin.bin_level + ' and Air Quality is ' + bin.air_quality;

                showInfoMessage(message);
            }

        }).catch((error) => {
            console.error("Error:", error);
        });
}



//.................................................................
//run real time requests
//.................................................................
setInterval(getFullBin, 30000);


