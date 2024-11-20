function addData(){
    window.location = "table.html";
}

function saveButton(event) { 
    event.preventDefault();

    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value;
    let vendorType = document.getElementById('vendorType').value;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let Currency = document.getElementById('Currency').value;
    let address1 = document.getElementById('address1').value;
    let city = document.getElementById('city').value;
    let choose = document.getElementById('choose').value;
    let zip = document.getElementById('zip').value;
   

    let vendorError = document.getElementById('vendorError');
    let codeError = document.getElementById('codeError');
    let typeError = document.getElementById('typeError');
    let tagError = document.getElementById('tagError');
    let companyError = document.getElementById('companyError');
    let currencyError = document.getElementById('currencyError');
    let address1Error = document.getElementById('address1Error');
    let chooseError = document.getElementById('chooseError');
    let cityError = document.getElementById('cityError');
    let zipError = document.getElementById('zipError');
   
  

    let valid = true;

    if (vendorName.trim() === "") {
        vendorError.textContent = "Required*";
        vendorError.style.color = "red";
        vendorError.style.fontSize = "13px";
        vendorError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
        vendorError.textContent = '';
    }
    if (vendorCode.trim() === "") {
       codeError.textContent = "Required*";
       codeError.style.color = "red";
       codeError.style.fontSize = "13px";
       codeError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
       codeError.textContent = '';
    }


    if (vendorType.trim() === "") {
        typeError.textContent = "Required*";
        typeError.style.color = "red";
        typeError.style.fontSize = "13px";
        typeError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        typeError.textContent = '';
     }
 
     if (registrationNo.trim() === "") {
       tagError.textContent = "Required*";
       tagError.style.color = "red";
       tagError.style.fontSize = "13px";
       tagError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
       tagError.textContent = '';
     }

     if (comRegistrationNo.trim() === "") {
       companyError.textContent = " Required*";
       companyError.style.color = "red";
       companyError.style.fontSize = "13px";
       companyError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
       companyError.textContent = '';
     }
     if (Currency.trim() === "") {
        currencyError.textContent = " Required*";
        currencyError.style.color = "red";
        currencyError.style.fontSize = "13px";
        currencyError.style.paddingLeft = "15px";
         valid = false;
     }
     else {
        currencyError.textContent = '';
     }

     if (address1.trim() === "") {
      address1Error.textContent = " Required*";
      address1Error.style.color = "red";
      address1Error.style.fontSize = "13px";
      address1Error.style.paddingLeft = "15px";
       valid = false;
   }
   else {
    address1Error.textContent = '';
   }
     
        
    if (choose.trim() === "") {
    chooseError.textContent = " Required*";
    chooseError.style.color = "red";
    chooseError.style.fontSize = "13px";
    chooseError.style.paddingLeft = "15px";
    valid = false;
    }
    else {
    chooseError.textContent = '';
    }

    if (city.trim() === "") {
      cityError.textContent = " Required*";
      cityError.style.color = "red";
      cityError.style.fontSize = "13px";
      cityError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        cityError.textContent = '';
      }

    if (zip.trim() === "") {
      zipError.textContent = " Required*";
      zipError.style.color = "red";
      zipError.style.fontSize = "13px";
      zipError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        zipError.textContent = '';
      }
 

    
 }


 async function populateCurrencies() {
  try {
      const jwtToken = localStorage.getItem('jwtToken');
      
      if (!jwtToken) {
          alert("Authorization token is missing.");
          return;
      }
      const response = await fetch('https://hastin-container.com/staging/api/meta/currencies', {
          method: 'GET',
          headers: {
              'Authorization': `BslogiKey ${jwtToken}`,
              'Content-Type': 'application/json',
          },
      });
      if (!response.ok) {
          throw new Error('Failed to fetch currencies');
      }
      const data = await response.json();
      console.log(data);

      const currency = data?.data;

      if (!Array.isArray(currency)) {
          throw new Error('Currency data is missing or invalid.');
      }
      const dropdown = document.getElementById('Currency');
      dropdown.innerHTML = '<option value="" disabled selected>Select a currency</option>';

      currency.forEach(currencys => {
          const option = document.createElement('option');
          option.value = currencys.code; 
          option.textContent = currencys.name; 
          dropdown.appendChild(option); 
      });
  } catch (error) {
      console.error('Error:', error.message);
      const errorDiv = document.getElementById('currencyError');
      errorDiv.textContent = `Error: ${error.message}`;
      errorDiv.style.color = 'red';
  }
}

let citiesData = [];

async function populatecountry() {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        const response = await fetch('https://hastin-container.com/staging/api/meta/country', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const countries = data?.data;

        if (!Array.isArray(countries)) {
            throw new Error('Country data is missing or invalid.');
        }

        const dropdown = document.getElementById('choose');
        dropdown.innerHTML = '<option value="" disabled selected>Select a country</option>';

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name; 
            option.textContent = country.name; 
            dropdown.appendChild(option);
        });

        dropdown.addEventListener('change', filterCities);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function countrycity() {
    try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert("Authorization token is missing.");
            return;
        }

        const response = await fetch('https://hastin-container.com/staging/api/countryCities/get', {
            method: 'GET',
            headers: {
                'Authorization': `BslogiKey ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        citiesData = data?.data; 
        if (!Array.isArray(citiesData)) {
            throw new Error('City data is missing or invalid.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function filterCities() {
    const countryDropdown = document.getElementById('choose');
    const selectedCountry = countryDropdown.value; 
    const cityDropdown = document.getElementById('city');

    cityDropdown.innerHTML = '<option value="" disabled selected>Select a city</option>'; 

    if (!selectedCountry) return;

    const filteredCities = citiesData.filter(city => city.countryName === selectedCountry);

    filteredCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.code;
        option.textContent = city.name;
        cityDropdown.appendChild(option);
    });
}

populatecountry();
countrycity();

populateCurrencies();
  



// contact Page


document.addEventListener("DOMContentLoaded", () => {
    const addRowBtn = document.getElementById("addRowBtn");
    const contactTable = document.getElementById("contactTable").querySelector("tbody");

    addRowBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        const newRow = document.createElement("tr");
        const rowCount = contactTable.rows.length + 1;
        
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Name"></td>
            <td><input type="email" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Email"></td>
            <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Phone No"></td>
            <td>
                <select class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Default">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
            <td><button class="btn btn-secondary btn-sm mt-2 ms-4 removeRowBtn" style = "width:60%;">Remove</button>
            </td>
        `;

        contactTable.appendChild(newRow);

        const removeBtn = newRow.querySelector(".removeRowBtn");
        removeBtn.addEventListener("click", () => {
            newRow.remove();
        });
    });

    contactTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeRowBtn")) {
            e.target.closest("tr").remove();
        }
    });
});



async function saveButton(event) { 
    event.preventDefault(); 
    
    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value;
    let vendorType = document.getElementById('vendorType').value;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let Currency = document.getElementById('Currency').value;
    let address1 = document.getElementById('address1').value;
    let city = document.getElementById('city').value;
    let choose = document.getElementById('choose').value;
    let zip = document.getElementById('zip').value;

   
    let valid = true;

    if (valid) {
        const payload = {
            contactList: [
                {
                    name: "Abishek A",  
                    email: "mailto:abishek582000@gmail.com",
                    mobileNo: 8667254207,
                    isDefault: true,
                    id: null
                }
            ],
            "vendorName": "Abishek",
            "vendorCode": "ABI005",
            "vendorType": "Individual",
            "taxRegNo": "TIN223",
            "companyRegNo": "f0751c9a-199a-49f0-b085-eaa049dd9410",
            "address1": "462,South street, Pudur(PO), Orathanadu(TK)",
            "address2": "462",
            "country": "1692b3ec-4d4b-482e-9ece-963b7f55c6e7",
            "postalCode": "614625",
            "cityId": "1d7a3d67-1598-41aa-9a2c-2a18b738a1ce",
            "createdBy": "adf8906a-cf9a-490f-a233-4df16fc86c58",
            "documentList": []
        };

        try {
            const jwtToken = localStorage.getItem('jwtToken');  
            if (!jwtToken) {
                alert("Authorization token is missing.");
                return;
            }

            const response = await fetch('https://hastin-container.com/staging/api/vendor/create', {
                method: 'POST',
                headers: {
                    'Authorization': `BslogiKey ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),  
            });

            if (!response.ok) {
                throw new Error('Failed to create vendor');
            }

            const responseData = await response.json();
            console.log(responseData);
            alert("Vendor created successfully!");
        } catch (error) {
            console.error('Error:', error.message);
            alert('Error: ' + error.message);
        }
    }
}
