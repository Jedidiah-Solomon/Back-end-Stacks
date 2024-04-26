let tbody = document.getElementById("tbody");

// Fetch function
fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data);
            tbody.append(td_fun(data));
        });
    });

// Create td
function td_fun({ profile, name, email, status, role }) {
    let td = document.createElement('tr');

    // Determine status classes based on status value
    let statusClasses = '';
    if (status === 'Inactive') {
        statusClasses = 'text-pink-700 bg-pink-300';
    } else {
        statusClasses = 'bg-green-100 text-green-800';
    }

    td.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src="${profile}" class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                        ${name}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${email}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap ${statusClasses}">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                ${status}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="text-sm text-gray-500">${role}</span>
        </td>
    `;
    return td;
}



//to get filtered data say id 
//fetch("http://localhost:3000/users?id=1") will get id 1 only
//fetch("http://localhost:3000/users?id=1&id=2") will get id 1 and 2 users
//fetch("http://localhost:3000/users?id=${userID}) will get all users with the userID u specify.