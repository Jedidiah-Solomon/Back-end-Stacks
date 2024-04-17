 const getLocationBtn = document.getElementById('getLocationBtn');
 const locationInfo = document.getElementById('locationInfo');

 const apiKey = '12b04aa406ff4d989e25d4b06e44c2e6';


        getLocationBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            const city = data.results[0].components.city || 'N/A';
                            const state = data.results[0].components.state || 'N/A';
                            const country = data.results[0].components.country || 'N/A';
                            const country_code = (data.results[0].components.country_code || 'N/A').toUpperCase();
                            const continent = data.results[0].components.continent || 'N/A';
                            const areaType = (data.results[0].components.road_type || 'N/A').charAt(0).toUpperCase() + (data.results[0].components.road_type || 'N/A').slice(1);
                            locationInfo.innerHTML = `City: ${city}<br>State: ${state}<br>Country: ${country} <br> 
                            Country Code: ${country_code} <br> Continent: ${continent} <br> Type of Area: ${areaType}`;
                        })
                        .catch(error => {//Error handling from OpenCage API
                            console.error('Error fetching location data:', error);
                            locationInfo.textContent = 'Error fetching location data. Please try again.';
                        });
                }, (error) => {//Error handling from User Device Geolocation
                    console.error('Error getting location:', error.message);
                    locationInfo.textContent = 'Error getting location. Please try again.';
                });
            } else {
                locationInfo.textContent = 'Geolocation is not supported by your browser.';
            }
        });
   


     
        