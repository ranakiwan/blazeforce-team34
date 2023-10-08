// Simulated sensor data (replace with real data)
let sensorData = {
    temperature: 25.5,
    humidity: 60,
    lightLevel: 800,
};

// Audio element for the alert sound
const alertSound = document.getElementById("alert-sound");

// Update the webpage with sensor data and check for alerts
function updateSensorData() {
    // Simulate data update (replace with real-time data retrieval)
    sensorData = {
        temperature: getRandomValue(20, 50),
        humidity: getRandomValue(30, 70),
        lightLevel: getRandomValue(200, 1200),
    };

    document.getElementById("temperature").textContent = sensorData.temperature.toFixed(2);
    document.getElementById("humidity").textContent = sensorData.humidity.toFixed(2);
    document.getElementById("light-level").textContent = sensorData.lightLevel.toFixed(2);

    // Check for alert condition (e.g., temperature above 30°C)
    if (sensorData.temperature > 30) {
        document.getElementById("alert").textContent = "ALERT: High Temperature!";
        document.getElementById("alert").style.color = "red";
        // Play the alert sound
        alertSound.play();
    } else {
        document.getElementById("alert").textContent = "";
    }
}

// Simulate sensor data updates every 3 seconds
setInterval(updateSensorData, 3000);

// Initial data update
updateSensorData();

// Helper function to generate random values within a range
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}
