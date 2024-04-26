document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const fullName = (firstName + ' ' + lastName).toLowerCase();

        const binId = '6629534de41b4d34e4e98fa0'; // Replace with your actual Bin ID
        const apiKey = '$2a$10$B9sUREv0OBvAnbJCqELq6OlWS6/TQFTirrF3JzKmlyTrrBTorjWYS'; // Replace with your actual API key

        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                method: 'GET',
                headers: {
                    'X-Master-Key': apiKey,
                },
            });

            if (response.ok) {
                const data = await response.json();
                const employees = data.record.employees; // Updated variable name

                const employeeToDeleteIndex = employees.findIndex(emp => (emp.firstName + ' ' + emp.lastName).toLowerCase() === fullName);

                if (employeeToDeleteIndex !== -1) {
                    const removedEmployee = employees.splice(employeeToDeleteIndex, 1)[0];

                    const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Master-Key': apiKey,
                        },
                        body: JSON.stringify({ employees }),
                    });

                    if (updateResponse.ok) {
                        console.log('Employee record deleted successfully:', removedEmployee);
                        alert('Employee record deleted successfully!');
                        form.reset();
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
});
