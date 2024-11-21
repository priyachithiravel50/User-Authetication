function addData(){
    window.location = "table.html";
}
let editingUserId = null; 
async function fetchUser() {
   
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }
        const response = await fetch('https://hastin-container.com/staging/auth/new/fetch/my-profile', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            const data = await response.json();
            const { userName } = data.data;
            console.log(userName)
            document.getElementById('userName').textContent = userName;
          
        } else {
            throw new Error("Failed to fetch user profile");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error fetch the user profile.");
    }
}
async function vendortable() {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }
        const payload = {
            "pagination": {
                "index": 1,
                "rowCount": -1,
                "searchObj": null,
                "sortingObj": null
            }
        };
        const response = await fetch('https://hastin-container.com/staging/api/vendor/search/active', {
            method: 'PUT',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)  
        });
        if (response.ok) {
            const data = await response.json();
            const users = data.data.tableData; 
            displayTable(users);
           
        } else {
            throw new Error("Failed to fetch user profile");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error in user profile.");
    }
}
function displayTable(users) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 
    users.forEach((user,index) => {
        const row = `<tr>
       
        <td>${index + 1}</td> 
            <td>${user.vendorName}</td>
            <td>${user.vendorCode}</td>
            <td>${user.vendorType}</td>
            <td>${user.address}</td>
            <td>${user.country}</td>
            <td>${user.status}</td>
              <td>
            <button onclick="editUser('${user.id}')"><i class="fa fa-pen text-danger"></i></button>

    </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// async function editUser(id) {



//     const jwtToken = localStorage.getItem('jwtToken');
        
//     if (!jwtToken) {
//         alert("Authorization token is missing.");
//         return;
//     }
//     try {
//         const response = await fetch(` https://hastin-container.com/staging/api/vendor/get/${id}`,{
//             method: 'GET',
//             headers: {
//                 'Authorization': `BslogiKey ${jwtToken}`,
//                 'Content-Type': 'application/json',
//             },
//         });
//         if (response.ok) {

//             const user = await response.json();
//           document.getElementById('vendorName').value = user.vendorName;
//           document.getElementById('vendorCode').value = user.vendorCode;
//           document.getElementById('vendorType').value = user.vendorType;
//           document.getElementById('registrationNo').value = user.taxRegNo;
//           document.getElementById('comRegistrationNo').value = user.companyRegNo;
//           document.getElementById('Currency').value = user.vendorName;
//           document.getElementById('address1').value = user.address1;
//           document.getElementById('address2').value = user. address2;
//           document.getElementById('city').value = user.cityId;
//           document.getElementById('choose').value = user. country;
//           document.getElementById('zip').value = user.postalCode;
//           document.getElementById('Name').value = user.name;
//           document.getElementById('email').value = user.email;
//           document.getElementById('phoneno').value = user.mobileNo;
//             editingUserId = id; 
//             addData(editingUserId)
//         } else {
//             throw new Error("Failed to fetch user data");
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }


async function editUser(id) {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        alert("Authorization token is missing.");
        return;
    }

    try {
        const response = await fetch(`https://hastin-container.com/staging/api/vendor/get/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const user = await response.json();

            // Populate form fields with the user data
            document.getElementById('vendorName').value = user.vendorName || '';
            document.getElementById('vendorCode').value = user.vendorCode || '';
            document.getElementById('vendorType').value = user.vendorType || '';
            document.getElementById('registrationNo').value = user.taxRegNo || '';
            document.getElementById('comRegistrationNo').value = user.companyRegNo || '';
            document.getElementById('Currency').value = user.vendorName || '';
            document.getElementById('address1').value = user.address1 || '';
            document.getElementById('address2').value = user.address2 || '';
            document.getElementById('city').value = user.cityId || '';
            document.getElementById('choose').value = user.country || '';
            document.getElementById('zip').value = user.postalCode || '';
            document.getElementById('Name').value = user.name || '';
            document.getElementById('email').value = user.email || '';
            document.getElementById('phoneno').value = user.mobileNo || '';

            // Set editingUserId and call addData
            editingUserId = id;
           
                addData(editingUserId); // Ensure addData function exists
       
        } else {
            throw new Error("Failed to fetch user data");
        }
    } catch (error) {
        console.error("Error:", error);
        alert('Error fetching user data: ' + error.message);
    }
}


fetchUser();
vendortable();
  

