document.addEventListener('DOMContentLoaded', async function() {
    const binId = '6629534de41b4d34e4e98fa0'; // Replace with your bin ID
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

    try {
        // Fetch existing user data
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS' // Replace with your JSONbin master key
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch existing user data');
        }

        const userData = await response.json();
        console.log('Existing User Data:', userData);

        // Prepare partial update (PATCH) payload
        const patchPayload = {
            firstName: 'NewFirstName', // Replace with the new first name
            // Add other fields to update here (e.g., lastName, age, address, etc.)
        };

        // Apply partial update (PATCH) to user details
        const updateResponse = await fetch(apiUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS' // Replace with your JSONbin master key
            },
            body: JSON.stringify(patchPayload)
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update user details');
        }

        console.log('User details updated successfully');

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to update user details. Please try again later.');
    }
});
