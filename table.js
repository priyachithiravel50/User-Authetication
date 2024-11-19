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
    let address2 = document.getElementById('address2').value;
    let city = document.getElementById('city').value;
    let choose = document.getElementById('choose').value;
    let zip = document.getElementById('zip').value;
    let bankaccount = document.getElementById('bankaccount').value;
    let bankaccountno = document.getElementById('bankaccountno').value;
    let bankname = document.getElementById('bankname').value;
    let branchname = document.getElementById('branchname').value;
    let swiftcode = document.getElementById('swiftcode').value;
   

    let vendorError = document.getElementById('vendorError');
    let codeError = document.getElementById('codeError');
    let typeError = document.getElementById('typeError');
    let tagError = document.getElementById('tagError');
    let companyError = document.getElementById('companyError');
    let currencyError = document.getElementById('currencyError');
    let address1Error = document.getElementById('address1Error');
    let address2Error = document.getElementById('address2Error');
    let chooseError = document.getElementById('chooseError');
    let cityError = document.getElementById('cityError');
    let zipError = document.getElementById('zipError');
    let accountError = document.getElementById('accountError');
    let accountnoError = document.getElementById('accountnoError');
    let bankError = document.getElementById('bankError');
    let branchError = document.getElementById('branchError');
    let swiftError = document.getElementById('swiftError');
  

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
      if (address2.trim() === "") {
        address2Error.textContent = " Required*";
        address2Error.style.color = "red";
        address2Error.style.fontSize = "13px";
        address2Error.style.paddingLeft = "15px";
        valid = false;
    }
    else {
      address2Error.textContent = '';
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
    if (bankaccount.trim() === "") {
      accountError.textContent = " Required*";
      accountError.style.color = "red";
      accountError.style.fontSize = "13px";
      accountError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        accountError.textContent = '';
      }

    if (bankaccountno.trim() === "") {
      accountnoError.textContent = " Required*";
      accountnoError.style.color = "red";
      accountnoError.style.fontSize = "13px";
      accountnoError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        accountnoError.textContent = '';
      }

    if (bankname.trim() === "") {
      bankError.textContent = " Required*";
      bankError.style.color = "red";
      bankError.style.fontSize = "13px";
      bankError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        bankError.textContent = '';
      }
    if (branchname.trim() === "") {
      branchError.textContent = " Required*";
      branchError.style.color = "red";
      branchError.style.fontSize = "13px";
      branchError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        branchError.textContent = '';
      }
    
    if (swiftcode.trim() === "") {
      swiftError.textContent = " Required*";
      swiftError.style.color = "red";
      swiftError.style.fontSize = "13px";
      swiftError.style.paddingLeft = "15px";
      valid = false;
      }
      else {
        swiftError.textContent = '';
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
  