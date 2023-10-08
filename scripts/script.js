document.getElementById("data-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the user-entered latitude and longitude
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    // API endpoint
    const apiKey = '1d65ca85b4790bd556436a5a1d6d7024 ';
    const apiUrl = `https://nrt4.modaps.eosdis.nasa.gov/api/v2/fire/?lat=${latitude}&lon=${longitude}&api_key=${apiKey}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Parse the data and display it
            const result = document.getElementById("result");
            result.innerHTML = JSON.stringify(data, null, 2); // Display the data as JSON
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
