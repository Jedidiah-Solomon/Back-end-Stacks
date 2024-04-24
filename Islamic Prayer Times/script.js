// Get references to HTML elements
const userInput = document.getElementById('userInput');
const prayerMethod = document.getElementById('prayerMethod');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const checkPrayerTimeButton = document.getElementById('checkPrayerTime');
const appContainer = document.getElementById('app');
const countDownTimer = document.getElementById('countDownTimer');

// Event listener for the "Check Prayer Time" button
checkPrayerTimeButton.addEventListener('click', async () => {
    const city = userInput.value;
    const method = prayerMethod.value;
    const month = monthSelect.value;
    const year = yearSelect.value;

    // Make an API request to Aladhan
    try {
        const response = await fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=United`);
        const data = await response.json();
        console.log(data)

        // Extract prayer times from the API response
        const prayerTimes = data.data[0].timings;

        // Display prayer times in the app container
        appContainer.innerHTML = `
        <h2>Prayer Times for ${city}</h2>
        <ul>
            <li>Fajr: ${prayerTimes.Fajr}</li>
            <li>Sunrise: ${prayerTimes.Sunrise}</li>
            <li>Dhuhr: ${prayerTimes.Dhuhr}</li>
            <li>Asr: ${prayerTimes.Asr}</li>
            <li>Sunset: ${prayerTimes.Sunset}</li>
            <li>Maghrib: ${prayerTimes.Maghrib}</li>
            <li>Isha: ${prayerTimes.Isha}</li>
            <li>Imsak: ${prayerTimes.Imsak}</li>
            <li>Midnight: ${prayerTimes.Midnight}</li>
            <li>First Third: ${prayerTimes.Firstthird}</li>
            <li>Last Third: ${prayerTimes.Lastthird}</li>
        </ul>`;

        // Calculate time until next prayer (Dhuhr)
        const now = new Date();
        const nextPrayerTime = new Date(`${data.data[0].date.gregorian} ${prayerTimes.Dhuhr}`);
        const timeUntilNextPrayer = nextPrayerTime - now;

        // Display countdown timer to the next prayer (Dhuhr)
        countDownTimer.innerHTML = `Time until Dhuhr: ${formatTime(timeUntilNextPrayer)}`;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
});

// Helper function to format time (in milliseconds)
function formatTime(milliseconds) {
    if (milliseconds <= 0) {
        return 'Prayer time';
    }
    
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
}







// Function to change the background image
function changeBackground() {
    let currentImageIndex = 1; // Start with image 1
    let maxImageIndex = 53; // Maximum image index
    let imageUrlBase = 'https://cdn.aladhan.com/images/backgrounds/'; // Base URL for images

    setInterval(function() {
        // Construct the URL for the next background image
        let imageUrl = imageUrlBase + currentImageIndex + '.jpg';
        // Update the body's background image style
        document.body.style.backgroundImage = 'url(' + imageUrl + ')';

        // Increment the index to point to the next image
        currentImageIndex++;
        // If we've reached the last image, reset to 1
        if (currentImageIndex > maxImageIndex) {
            currentImageIndex = 1;
        }
    }, 10000); // Change image every 10 seconds
}

// Call the function to start changing backgrounds
changeBackground();

