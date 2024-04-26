// jsonbinDelete.js

document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = (firstName + ' ' + lastName).toLowerCase(); // Concatenate and convert to lowercase

    const binId = '6629534de41b4d34e4e98fa0'; // Replace with your actual Bin ID
    const apiKey = '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS'; // Replace with your actual API key

    try {
        // Fetch the existing data from JSONBin.io
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'GET',
            headers: {
                'X-Master-Key': apiKey,
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            const employees = data.record.employees; // Updated variable name

            console.log('Fetched employees:', employees); // Log the fetched data

            // Find the employee with matching full name
            const employeeToDelete = employees.find(emp => (emp.firstName + ' ' + emp.lastName).toLowerCase() === fullName);

            if (employeeToDelete) {
                // Remove the employee from the array
                const updatedEmployees = employees.filter(emp => emp !== employeeToDelete);

                // Update the data on JSONBin.io
                const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': apiKey,
                    },
                    body: JSON.stringify({ employees: updatedEmployees }), // Updated key
                });

                if (updateResponse.status === 200) {
                    console.log('Employee record deleted successfully');
                    alert('Your record has been deleted from the database.');
                    document.getElementById('userForm').reset(); // Reset the form
                } else {
                    console.error('Error updating data:', updateResponse.statusText);
                }
            } else {
                console.log('Employee not found');
            }
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
});
