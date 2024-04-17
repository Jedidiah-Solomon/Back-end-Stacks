//fetch('https://regres.in/api/users');

//console.log(fetch('https://regres.in/api/users'));

/*
After a fetch request, there will be a promise and the elements of this promise are:
1. Prototype: promise
2. PromiseState: "reject" // It can be accepted
3. PromiseResult: e.g TypeError: Failed to fetch and etc.

In Network of Google Dev Tools, 

All, Fetch/xhr, doc(e.g html), css, js, font, img, media, manifest etc.

If you are you're encountering a CORS (Cross-Origin Resource Sharing) issue when 
trying to fetch data from the 'https://regres.in/api/users' endpoint. 
This error occurs because the server hosting the API does not include the 
 CORS headers to allow requests from your origin ('http://127.0.0.1:5500').

To resolve this issue, you have a few options:

Check CORS Policy: Ensure that the API you're trying to access supports CORS and allows requests from your origin. You may need to check the API documentation or contact the API provider for more information.

Use a Proxy: If the API does not support CORS or you cannot modify its CORS policy, you can use a proxy server to forward your requests. You can set up a proxy server on your server or use third-party services like CORS Anywhere.

Request without CORS: If you're only fetching public data and the API supports it, you can try fetching the resource with CORS disabled by setting the request's mode to 'no-cors'. Keep in mind that this approach may limit the functionality and access to response data due to security restrictions.

Here's an example of how to fetch data with CORS disabled:

fetch('https://regres.in/api/users', { mode: 'no-cors' })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



  My ans will be:

    Request URL: https://regres.in/api/users
    Request Method: GET
    Status Code: 302 Found
    Remote Address: 103.224.182.246:443
    Referrer Policy:  strict-origin-when-cross-origin

    This code attempts to fetch data from the 'https://reqres.in/api/users' endpoint, expecting a JSON response. Let's break down what each part does:

fetch('https://reqres.in/api/users'): Initiates a fetch request to the specified URL.

.then(response => { ... }): Chains a promise to handle the response from the fetch request.

if (!response.ok) { throw new Error('Network response was not ok'); }: Checks if the response status is ok (i.e., in the range 200-299). If not, it throws an error.

return response.json();: Parses the response body as JSON.

.then(data => console.log(data)): If the response is successfully parsed as JSON, it logs the data to the console.

.catch(error => console.error('Error:', error));: Catches any errors that occur during the fetch request or response processing and logs them to the console.

In summary, this code fetches data from the API endpoint and logs the JSON response to the console if the request is successful. If there's an error, it logs the error message to the console.



NOTE:

fetch('https://regres.in/api/users')
  .then(res => console.log(res)) 
  
  vs 
  
  fetch('https://regres.in/api/users')
  .then(res => {console.log(res)})


The two snippets of code you provided perform similar actions, but there's a slight difference in how the response is handled:

fetch('https://regres.in/api/users').then(res => console.log(res)): In this code, the response is logged directly inside the .then() method without any additional processing. This means that the response object itself is logged to the console, which typically includes information such as the response headers, status, and body (if available).

fetch('https://regres.in/api/users').then(res => {console.log(res)}): Here, the response is logged within a block of code enclosed by curly braces {}, allowing for more complex logic to be executed. However, in this particular example, the code inside the block is the same as the first snippet, so the behavior remains the same.

In both cases, the response object is logged to the console, but the second snippet provides the flexibility to perform additional actions within the block if needed.

*/


/*fetch('https://regres.in/api/users')
  .then(res => console.log(res))
*/


/* Brings the users 6 in number out
fetch('https://reqres.in/api/users')
  .then(res => res.json()
  .then(data => console.log(data))
)
*/

/* Trying to access user 32 which is not available wil bring 404 status i.e not found 
fetch('https://reqres.in/api/users/32')
  .then(res => res.json()
  .then(data => console.log(data))
)*/

/* Fetch cannot have error with getting an api, it is the internet or fetch itself, so to check for error, use this: 
fetch('https://reqres.in/api/users/32')
  .then(res => {
    if(res.ok){
        console.log('The Request is Successful')
    }
    else {
        console.log('The Request is not Successful')
    }
  })
    
  .then(data => console.log(data))
 */

/*
fetch('https://reqres.in/api/users')
  .then(res => {
    if (res.ok) {
      console.log('The Request is Successful');
      return res.json(); // Parse the response body as JSON
    } else {
      throw new Error('Network response was not ok'); // Throw an error for unsuccessful responses
    }
  })
  .then(data => console.log('Data from the API:', data)) // Log the parsed JSON data
  .catch(error => {
    if (error instanceof TypeError) {
      console.error('A TypeError occurred:', error.message); // Handle TypeError
    } else if (error instanceof SyntaxError) {
      console.error('A SyntaxError occurred:', error.message); // Handle SyntaxError
    } else {
      console.error('An error occurred:', error.message); // Handle other types of errors
    }
  });
*/
/*
  fetch('https://reqres.in/api/users/32')
  .then(res => {
    if (res.ok) {
      console.log('The Request is Successful');
      return res.json(); // Parse the response body as JSON
    } else {
      throw new Error('Network response was not ok'); // Throw an error for unsuccessful responses
    }
  })
  .then(data => console.log('Data from the API:', data)) // Log the parsed JSON data
  .catch(error => console.log('Error Message:', error)); // Catch and handle any errors

ReqRes (Mock API for Testing and Prototyping):
Offers endpoints for creating, updating, and deleting users.
Base URL: ReqRes

  fetch('https://reqres.in/api/users/32')
.then(res => {
  if (res.ok) {
    console.log('The Request is Successful');
    return res.json(); // Parse the response body as JSON
  } else {
    throw new Error('Network response was not ok'); // Throw an error for unsuccessful responses
  }
})
.then(data => console.log('Data from the API:', data)) // Log the parsed JSON data
.catch(error => console.log('Error Message:', error.message, 'Error Name:', error.name, 'Error Stack:', error.stack)); // Catch and handle any errors

*/

/* 

JSONPlaceholder (Fake Online REST API):
Provides a set of fake JSON data for testing and prototyping.
Base URL: JSONPlaceholder

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log('Data from JSONPlaceholder API:', data))
.catch(error => console.error('Error:', error));
*/

/* 
    GitHub API (Access GitHub Data):
    Allows you to retrieve information about repositories, users, and more.
    Base URL: GitHub API

    it provides a single object of the user or, all users e.g

    avatar_url: "https://avatars.githubusercontent.com/u/121108148?v=4"
    bio: "Innovative Front-end Developer with 2 years experience building and maintaining responsive \r\nwebsites in the education industry and for small-medium businesses"
    blog: "https://jedidiah-solomon.github.io/JedybrownFolio/"
    company: "Jedybrown Ventures Nigeria LTD"
    created_at: "2022-12-20T13:46:20Z"
    email: null
    events_url: "https://api.github.com/users/Jedidiah-Solomon/events{/privacy}"followers: 6
    followers_url: "https://api.github.com/users/Jedidiah-Solomon/followers"
    following: 24
    following_url: "https://api.github.com/users/Jedidiah-Solomon/following{/other_user}"
    gists_url: "https://api.github.com/users/Jedidiah-Solomon/gists{/gist_id}"
    gravatar_id: ""
    hireable: true
    html_url: "https://github.com/Jedidiah-Solomon"
    id: 121108148
    location: "Nigeria"
    login: "Jedidiah-Solomon"
    name: "Jedidiah Solomon Onwubiko"
    node_id: "U_kgDOBzf2tA"
    organizations_url: "https://api.github.com/users/Jedidiah-Solomon/orgs"
    public_gists: 0
    public_repos: 28
    received_events_url: "https://api.github.com/users/Jedidiah-Solomon/received_events"
    repos_url: "https://api.github.com/users/Jedidiah-Solomon/repos"
    site_admin: false
    starred_url: "https://api.github.com/users/Jedidiah-Solomon/starred{/owner}{/repo}"
    subscriptions_url: "https://api.github.com/users/Jedidiah-Solomon/subscriptions"
    twitter_username: "OnwubikoSolomo2"
    type: "User"
    updated_at: "2024-02-21T00:13:09Z"
    url: "https://api.github.com/users/Jedidiah-Solomon"

    fetch('https://api.github.com/users/Jedidiah-Solomon')
    .then(res => res.json())
    .then(data => console.log('Data from GitHub API:', data))
    .catch(error => console.log('Error Message', error));

*/

/*
fetch('https://api.github.com/users/John-paul')
    .then(res => res.json())
    .then(data => console.log('Data from GitHub API:', data))
    .catch(error => console.log('Error Message', error));



document.getElementById('checkUserButton').addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value.trim();
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('User not found');
                }
            })
            .then(data => {
                console.log('Data from GitHub API:', data) //For my checkings
                document.getElementById('userAvatar').src = data.avatar_url;
                document.getElementById('userName').textContent = `Username: ${data.login}`;
                document.getElementById('twitterUsername').innerHTML = `Twitter Username: <a href="https://twitter.com/${data.twitter_username}">${data.twitter_username || 'N/A'}</a>`;
                document.getElementById('publicRepos').textContent = `Public Repositories: ${data.public_repos}`;
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                alert('User not found or an error occurred');
            });
    } else {
        alert('Please enter a valid username');
    }
});

*/


/* fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'JedybrownPaps'
    })
})
.then(res => {
    if (res.ok) {
        console.log('The Request is Successful');
        return res.json(); // Parse the response body as JSON
    } else {
        throw new Error('Network response was not ok'); // Throw an error for unsuccessful responses
    }
})
.then(data => console.log('Data from the API:', data)) // Log the parsed JSON data
.catch(error => console.log('Error Message:', error)); // Catch and handle any errors
*/

/*
const userData = {
    email: 'jedybrownpaps@example.com',
    first_name: 'Jedybrown',
    last_name: 'Paps',
    avatar: 'https://example.com/jedybrownpaps-avatar.jpg'
  };
  
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add user');
    }
    return response.json();
  })
  .then(data => {
    console.log('User added successfully:', data);
  })
  .catch(error => {
    console.error('Error adding user:', error);
  });
  */



  // Open Weather Map API
  // Go here and create acct https://home.openweathermap.org/users/sign_up

  //Be specific or use lat and long 
  //fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)

  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//  fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`)
//https://www.latlong.net/ for cordinates

/*
{
    "coord": {
        "lon": 3.5369,
        "lat": 6.6322
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 27.78,
        "feels_like": 31.56,
        "temp_min": 27.78,
        "temp_max": 27.78,
        "pressure": 1010,
        "humidity": 80,
        "sea_level": 1010,
        "grnd_level": 1006
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.88,
        "deg": 207,
        "gust": 5.16
    },
    "clouds": {
        "all": 98
    },
    "dt": 1712958871,
    "sys": {
        "country": "NG",
        "sunrise": 1712900328,
        "sunset": 1712944431
    },
    "timezone": 3600,
    "id": 2344082,
    "name": "Ebute Ikorodu",
    "cod": 200
}






The timezone property with a value of 3600 likely represents the time zone offset in seconds 
from Coordinated Universal Time (UTC) for the location provided in the weather data.

In this case, a value of 3600 indicates a time zone offset of one hour ahead of UTC. 
This suggests that the location is in a time zone that is one hour ahead of UTC, commonly known as UTC+1.

So, if the UTC time is 12:00 PM, the local time in the specified location would be 1:00 PM
 due to the one-hour offset.
 "sunrise": The Unix timestamp representing the time of sunrise at the location specified by the latitude and longitude. This timestamp indicates the number of seconds that have elapsed since January 1, 1970 (Unix epoch) until the specified sunrise time.

"sunset": The Unix timestamp representing the time of sunset at the location specified by the latitude and longitude. Similar to "sunrise", this timestamp indicates the number of seconds that have elapsed since January 1, 1970 (Unix epoch) until the specified sunset time.

"id": An identification number assigned to the location. In this case, the ID "2344082" corresponds to the location named "Ebute Ikorodu".

"name": The name of the location. In this case, it is "Ebute Ikorodu", which is the name of the area or city.

"cod": Stands for "cod" or "code". It typically indicates the status of the API response. A "cod" value of "200" indicates that the request was successful and the data was returned as expected.

 // Use Metric units by adding metric, or use imperial by adding imperial or default is standard, which is same if you dont write anything
 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)

i.e //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)






*/
   
/*  
const apiKey = '9651c06390184465d41761ed6b77b758'; 
const latitude = 6.632159;
const longitude = 3.536905;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => console.log('Weather data from OpenWeatherMap API:', data))
  .catch(error => console.error('Error:', error));

*/


/*
fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch countries data');
    }
    console.log('The fetch was successful');
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      console.log('Country:', country.name.common);
      console.log('Capital City:', country.capital ? country.capital[0] : 'N/A');
      console.log('Currency:', country.currencies ? country.currencies[Object.keys(country.currencies)[0]].name : 'N/A');
      console.log('Language:', country.languages ? country.languages[Object.keys(country.languages)[0]] : 'N/A');
      console.log('Region:', country.region || 'N/A');
      console.log('---------------------');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch countries data');
    }
    console.log('The fetch was successful');
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      console.log('Country:', country.name.common);
      console.log('Capital City:', country.capital ? country.capital[0] : 'N/A');
      console.log('Currency:', country.currencies ? country.currencies[Object.keys(country.currencies)[0]].name : 'N/A');
      console.log('Language:', country.languages ? Object.values(country.languages).join(', ') : 'N/A');
      console.log('Region:', country.region || 'N/A');
      console.log('---------------------');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  <!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>
<h2>The filter() Method</h2>

<p>Get every element in the array that has a value of 18 or more:</p>

<p id="demo"></p>

<script>
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
</script>

</body>
</html>
*/



document.getElementById('checkUserButton2').addEventListener('click', () => {
  const userInput = document.getElementById('usernameInput2').value.trim();
  if (!userInput) {
      alert('Please enter a country name.');
      return;
  }

  fetch('https://restcountries.com/v3.1/all')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch countries data');
          }
          console.log('The fetch was successful');
          return response.json();
      })
      .then(data => {
          console.log('Full Data:', data); // Log the full data retrieved
          // Find the country matching the user input
          const matchedCountries = data.filter(country => country.name.common.toLowerCase() === userInput.toLowerCase());
          if (matchedCountries.length === 0) {
              alert('Country not found.');
              console.log('Country not found.');// For my checkings
              return;
          } else if (matchedCountries.length > 1) {
              alert('Multiple countries found. Please be more specific.');
              console.log('Multiple countries found. Please be more specific.');// For my checkings
              return;
          }

          const countryInfo = matchedCountries[0];
          // Display country information
          document.getElementById('country').textContent = `Country: ${countryInfo.name.common}`;
          document.getElementById('capitalCity').textContent = `Capital City: ${countryInfo.capital ? countryInfo.capital[0] : 'N/A'}`;
          document.getElementById('currency').textContent = `Currency: ${countryInfo.currencies ? countryInfo.currencies[Object.keys(countryInfo.currencies)[0]].name : 'N/A'}`;
          document.getElementById('language').textContent = `Language: ${countryInfo.languages ? countryInfo.languages[Object.keys(countryInfo.languages)[0]] : 'N/A'}`;
          document.getElementById('region').textContent = `Region: ${countryInfo.region || 'N/A'}`;

          // Display country flag
          const countryFlagUrl = countryInfo.flags.svg;
          const flagImg = document.getElementById('flag');
          flagImg.src = countryFlagUrl;
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to fetch countries data. Please try again later.');
      });
});
