// Get the User input and button
const userLocation = document.getElementById('userLocation');
const getLocationBtn = document.getElementById('getLocationBtn');
const stopWatchingBtn = document.getElementById('stopWatchingBtn');

let watchId; // Variable to store the ID of the watch position

// Function to trigger the button on click by user
getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        // Start watching the user's position
        watchId = navigator.geolocation.watchPosition(showPosition, showError);
        console.log(`Your Watch ID is: ${watchId}`);
    } else {
        userLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
});

// Function to display Geolocation
function showPosition(location) {
    userLocation.innerHTML = `Your Location Details: <br> Latitude: ${location.coords.latitude}° <br> Longitude: ${location.coords.longitude}° <br>
    Accuracy: ${location.coords.accuracy} meters
    <br> Altitude: ${location.coords.altitude ? location.coords.altitude + ' meters' : 'N/A'}
    <br> Speed: ${location.coords.speed ? location.coords.speed + ' m/s' : 'N/A'}
    <br> Time-Now: ${location.timestamp ? new Date(location.timestamp).toLocaleString() : 'N/A'}`;
};

// Function to stop watching the user's position
function stopWatching() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        console.log(`Your Watch ID: ${watchId} has been cleared by you.`);
    }
}

// Add event listener to the stopWatching button
stopWatchingBtn.addEventListener('click', stopWatching);

// Function to catch errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            userLocation.innerHTML = "You denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            userLocation.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            userLocation.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            userLocation.innerHTML = "An unknown error occurred.";
            break;
        default:
            userLocation.innerHTML = "An unexpected error occurred.";
            break;
    }  
};
