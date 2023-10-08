// Initialize the chart with empty data
const initialData = {
    labels: [],
    datasets: [
        {
            label: 'Thermal Activity',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

// Get the canvas element
const thermalGraphCanvas = document.getElementById('thermal-graph');

// Create the initial thermal activity graph
const thermalActivityGraph = new Chart(thermalGraphCanvas, {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
        },
    },
});

// Function to update the graph with new data
function updateGraph() {
    // Generate a new data point (replace this with your data retrieval logic)
    const newDataPoint = {
        x: new Date(),
        y: Math.random() * 30, // Generate a random value for demonstration
    };

    // Add the new data point to the chart
    thermalActivityGraph.data.labels.push(newDataPoint.x);
    thermalActivityGraph.data.datasets[0].data.push(newDataPoint.y);

    // Limit the number of data points displayed to 20 for better performance
    if (thermalActivityGraph.data.labels.length > 20) {
        thermalActivityGraph.data.labels.shift();
        thermalActivityGraph.data.datasets[0].data.shift();
    }

    // Update the chart
    thermalActivityGraph.update();
}

// Update the graph every 3 seconds (adjust the interval as needed)
setInterval(updateGraph, 3000);
