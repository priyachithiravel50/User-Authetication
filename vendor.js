async function fetchusername(data) {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        const response = await fetch('https://hastin-container.com/staging/api/vendor/create', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `BslogiKey ${jwtToken}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
           const users = data.tabledata;
        
            document.getElementById('form').reset(); 
        } else {
            throw new Error("Request failed. Please check the API response.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error in the API call.");
    }
}

// Example Payload
const data = {
    pagination: {
        index: 1,
        rowCount: 10,
        searchObj: null,
        sortingObj: null,
    },
};


function renderTable(users) {
    const tableBody = document.getElementById("table-body");

    let rowsHTML = '';
    for (let i = 0; i < entries.length; i++) {
        rowsHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${entries[i].userName}</td>
                <td>${entries[i].password}</td>
                <td>
                    <button style="background-color: Green;font-size:18px; padding:5px 5px; border-radius:5px;"  onclick="editRow(${i}) ">Edit</button>
                    <button style="background-color:red;font-size:18px; padding:5px 5px; border-radius:8px;"   onclick="deleteRow(${i})">Delete</button>
                </td>
            </tr>
        `;
    }

    tableBody.innerHTML = rowsHTML;
}

function editRow(index) {
    document.getElementById("Username").value = entries[index].userName;
    document.getElementById("Password").value = entries[index].password;

    deleteRow(index); 
}

function deleteRow(index) {
    entries.splice(index, 1); 
    renderTable(); 
}


fetchusername(data);

  
