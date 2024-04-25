document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const yearOfEmployment = document.getElementById('yearOfEmployment').value;
        const hobbies = getHobbies();
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        // Create user object
        const user = {
            firstName,
            lastName,
            age,
            yearOfEmployment,
            hobbies,
            address: {
                street,
                city,
                country
            }
        };

        // Call function to create a new bin and store user in JSONbin
        createNewBinAndStoreUser(user);
    });

    // Function to get selected hobbies
    function getHobbies() {
        const checkboxes = document.getElementsByName('hobbies');
        const selectedHobbies = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedHobbies.push(checkbox.value);
            }
        });
        return selectedHobbies;
    }

    // Function to create a new bin and store user in JSONbin
    async function createNewBinAndStoreUser(user) {
        const apiUrl = 'https://api.jsonbin.io/v3/b';

         // Add a new group of details
        const newData = 'User Details Jed';
        //bin title
        const binTitle = 'Employees';
       

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS', // Replace 'YOUR_MASTER_KEY' with your JSONbin master key
                    'X-Bin-Name': binTitle
                },
                body: JSON.stringify({ name: newData, data: user })
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                const binId = responseData.metadata.id;
                alert(`User details submitted successfully! Bin ID: ${binId}`);
                form.reset(); // Clear the form after submission
            } else {
                throw new Error('Failed to create new bin and store user details');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to create new bin and store user details. Please try again later.');
        }
    }
});
