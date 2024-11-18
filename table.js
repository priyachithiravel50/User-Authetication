function addData(){
    window.location = "table.html";

}


const vendorError = document.getElementById('vendorError');
vendorError.textContent = '';

const username = document.getElementById('Username').value;
let valid = true;

if (vendorname.trim() === '') {
    nameError.textContent = 'vendorname is required';
    nameError.style.color = "red";
    valid = false;
}



// async function fetchCountry() {
//     try {
//         const jwtToken = localStorage.getItem('jwtToken');
        
//         if (!jwtToken) {
//             alert("Authorization token is missing.");
//             return;
//         }

//         const response = await fetch('https://hastin-container.com/staging/api/meta/country', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `BslogiKey ${jwtToken}`,
//                 'Content-Type': 'application/json',
//             }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             const countries = data.data; 

//         }
// }
// }


    

    
