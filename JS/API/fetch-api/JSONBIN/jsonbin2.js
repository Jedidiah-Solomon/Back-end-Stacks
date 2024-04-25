document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', async function(event) {
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
        const newUser = {
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

        // Call function to update user details
        await updateUserDetails(newUser);
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

    // Function to update user details
    async function updateUserDetails(newUser) {
        const binId = '6629534de41b4d34e4e98fa0'; // Replace with your bin ID
        const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;
    
        try {
            // Fetch existing user data
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Master-Key': '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS' // Replace 'YOUR_MASTER_KEY' with your JSONbin master key
                }
            });
    
            if (response.ok) {
                const userData = await response.json();
    
                let updatedUser;
                if (userData.record) {
                    const existingUser = userData.record.data;
                    // Merge existing user data with new user data
                    updatedUser = {
                        ...existingUser,
                        ...newUser
                    };
                } else {
                    updatedUser = newUser;
                }
    
                // Update user details
                await fetch(apiUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS' // Replace 'YOUR_MASTER_KEY' with your JSONbin master key
                    },
                    body: JSON.stringify({ data: updatedUser })
                });
    
                alert('User details updated successfully now!');
                form.reset(); // Clear the form after updating details
            } else {
                throw new Error('Failed to fetch existing user data');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to update user details. Please try again later.');
        }
    }
});
