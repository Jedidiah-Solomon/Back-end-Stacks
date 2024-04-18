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
                <li>Dhuhr: ${prayerTimes.Dhuhr}</li>
                <li>Asr: ${prayerTimes.Asr}</li>
                <li>Maghrib: ${prayerTimes.Maghrib}</li>
                <li>Isha: ${prayerTimes.Isha}</li>
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
