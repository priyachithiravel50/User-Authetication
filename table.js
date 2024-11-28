function addData(){
    window.location = "table.html";
}





let countryIdGet = "";
let parentId = "";
let edit = false;
function getQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  if(id!=null){
    editUser(id);
  }
 
}

getQueryParam();

async function editUser(id) {
  edit = true;
  const jwtToken = localStorage.getItem("jwtToken");
  const response = await fetch(
    `https://hastin-container.com/staging/api/vendor/get/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const user = await response.json();
    const data = user.data;
    await fetchCurrencies();
    await countryGet();
    parentId = data.id;
    document.getElementById("vendorName").value = data.vendorName;
    document.getElementById("vendorCode").value = data.vendorCode;
    document.getElementById("vendorType").value = data.vendorType;
    document.getElementById("add1").value = data.address1;
    document.getElementById("country").value = data.country;
    countryIdGet = data.country;
    document.getElementById("registrationNo").value = data.taxRegNo;
    document.getElementById("comRegistrationNo").value = data.companyRegNo;
    document.getElementById("currencyContainer").value = data.defaultCurrencyId;
    await cityGet();
    document.getElementById("add1").value = data.address1;
    document.getElementById("add2").value = data.address2;
    document.getElementById("city").value = data.cityId;
    document.getElementById("zip").value = data.postalCode;
    document.getElementById("bankaccount").value = data.bankAcctName;
    document.getElementById("bankaccountno").value = data.bankAccountNum;
    document.getElementById("bankname").value = data.bankName;
    document.getElementById("branchname").value = data.bankBranchName;
    document.getElementById("swiftcode").value = data.bankSwiftCode;

    for (let i = 0; i < data.contactList.length; i++) {
      document.getElementById("Name").value = data.contactList[i].name;
      document.getElementById("email").value = data.contactList[i].email;
      document.getElementById("phoneno").value =
        data.contactList[i].mobileNo;
      document.getElementById("isdefault").value =
        data.contactList[i].isDefault;
        document.getElementById("rowId").value = data.contactList[i].id;
    }
    console.log(document.getElementById("rowId").value)

  } else {
    throw new Error("Failed to fetch user data");
  }
}

async function saveButton(event) {
  event.preventDefault();

     // Get form values
    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value;
    let vendorType = document.getElementById('vendorType').value;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let country = document.getElementById('country').value;
    let address1 = document.getElementById('add1').value;
    let address2 = document.getElementById('add2').value;
    let city = document.getElementById('city').value;
    let currencyContainer = document.getElementById('currencyContainer').value;
    let zip = document.getElementById('zip').value;
    let Name = document.getElementById('Name').value;
    let email = document.getElementById('email').value;
    let phoneno = document.getElementById('phoneno').value;

    let bankaccount = document.getElementById('bankaccount').value;
    let bankaccountno = document.getElementById('bankaccountno').value;
    let bankname = document.getElementById('bankname').value;
    let branchname = document.getElementById('branchname').value;
    let swiftcode = document.getElementById('swiftcode').value;


    // Error elements
    let vendorError = document.getElementById('vendorError');
    let codeError = document.getElementById('codeError');
    let typeError = document.getElementById('typeError');
    let tagError = document.getElementById('tagError');
    let companyError = document.getElementById('companyError');
    let currencyError = document.getElementById('currencyError');
    let address1Error = document.getElementById('address1Error');
    let address2Error = document.getElementById('address2Error');
    let countryError = document.getElementById('countryError');
    let cityError = document.getElementById('cityError');
    let zipError = document.getElementById('zipError');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phonenoError = document.getElementById('phonenoError');

    let valid = true;

    // Validation and setting error messages
    if (vendorName.trim() === "") {
        if (vendorError) vendorError.textContent = "Required*";
        valid = false;
    } else {
        if (vendorError) vendorError.textContent = '';
    }

    if (vendorCode.trim() === "") {
        if (codeError) codeError.textContent = "Required*";
        valid = false;
    } else {
        if (codeError) codeError.textContent = '';
    }

    if (vendorType.trim() === "") {
        if (typeError) typeError.textContent = "Required*";
        valid = false;
    } else {
        if (typeError) typeError.textContent = '';
    }

    if (registrationNo.trim() === "") {
        if (tagError) tagError.textContent = "Required*";
        valid = false;
    } else {
        if (tagError) tagError.textContent = '';
    }

    if (comRegistrationNo.trim() === "") {
        if (companyError) companyError.textContent = "Required*";
        valid = false;
    } else {
        if (companyError) companyError.textContent = '';
    }

    if (currencyContainer.trim() === "") {
        if (currencyError) currencyError.textContent = "Required*";
        valid = false;
    } else {
        if (currencyError) currencyError.textContent = '';
    }

    if (address1.trim() === "") {
        if (address1Error) address1Error.textContent = "Required*";
        valid = false;
    } else {
        if (address1Error) address1Error.textContent = '';
    }

    if (address2.trim() === "") {
        if (address2Error) address2Error.textContent = "Required*";
        valid = false;
    } else {
        if (address2Error) address2Error.textContent = '';
    }

    if (country.trim() === "") {
        if (countryError) countryError.textContent = "Required*";
        valid = false;
    } else {
        if (countryError) countryError.textContent = '';
    }

    if (city.trim() === "") {
        if (cityError) cityError.textContent = "Required*";
        valid = false;
    } else {
        if (cityError) cityError.textContent = '';
    }

    if (zip.trim() === "") {
        if (zipError) zipError.textContent = "Required*";
        valid = false;
    } else {
        if (zipError) zipError.textContent = '';
    }

    if (Name.trim() === "") {
        if (nameError) nameError.textContent = "Required*";
        valid = false;
    } else {
        if (nameError) nameError.textContent = '';
    }

    if (email.trim() === "") {
        if (emailError) emailError.textContent = "Required*";
        valid = false;
    } else {
        if (emailError) emailError.textContent = '';
    }

    if (phoneno.trim() === "") {
        if (phonenoError) phonenoError.textContent = "Required*";
        valid = false;
    } else {
        if (phonenoError) phonenoError.textContent = '';
    }

  if (valid) {
    const jwtToken = localStorage.getItem("jwtToken");

    // try
    if (edit) {
      const payload = {
        id: parentId,
        vendorName: vendorName,
        vendorCode: vendorCode,
        vendorType: vendorType,
        taxRegNo: registrationNo,
        companyRegNo: comRegistrationNo,
        // currencyContainer:currencyContainer,
        defaultCurrencyId: currencyContainer,
        address1: address1,
        address2: address2,
        country: country,
        postalCode: zip,
        bankAcctName: bankaccount,
        bankName: bankname,
        bankBranchName: branchname,
        bankAccountNum: bankaccountno,
        bankSwiftCode: swiftcode,
        cityId: city,
        cityName: "",
        notes: "",
        createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
        documentList: [],
        contactList: [
          {
            name: Name,
            email: email,
            mobileNo: phoneno,
            isDefault: true,
            id: rowId.value ? rowId.value : "",
          },
        ],
      };
      console.log(rowId.value,'111')
      console.log(payload,'222')
      const response = await fetch(
        "https://hastin-container.com/staging/api/vendor/update",
        {
          method: "PUT",
          headers: {
            Authorization: `BslogiKey ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Vendor Updated Successfully:", result);
        alert("Vendor Updated Successfully!");

        //document.getElementById("formpage").reset();
      } else {
        throw new Error("Vendor creation failed!");
      }
    } else {
      const payload = {
        contactList: [
          {
            name: Name,
            email: email,
            mobileNo: phoneno,
            isDefault: true,
            // id: rowId ? rowId : "",
          },
        ],
        vendorName: vendorName,
        vendorCode: vendorCode,
        vendorType: vendorType,
        taxRegNo: registrationNo,
        companyRegNo: comRegistrationNo,
        // currencyContainer:currencyContainer,
        defaultCurrencyId: currencyContainer,
        address1: address1,
        address2: address2,
        country: country,
        postalCode: zip,
        cityId: city,
        createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
        documentList: [],
      };
      const response = await fetch( "https://hastin-container.com/staging/api/vendor/create",
        {
          method: "POST",
          headers: {
            Authorization: `BslogiKey ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Vendor Created Successfully:", result);
        alert("Vendor Created Successfully!");

        document.getElementById("formpage").reset();
      } else {
        throw new Error("Vendor creation failed!");
      }
    }
    // } catch (error) {
    //     console.error("Error occurred:", error);
    //     alert("An error occurred while creating the vendor.");
    // }
  }

 
 //Contact
  
  const payload = { 
        name: Name,
        email: email,
        mobileNo: phoneno,
        isDefault: true,
        id: null,
        vendorId: "d791a8b0-4043-4cf0-b706-7791ead5a61d",
        createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58"

    };

  try {
      const response = await fetch('https://hastin-container.com/staging/api/vendor/contact/create', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
             },
          body: JSON.stringify(payload)
      });

      if (response.ok) {
          const result = await response.json();
            console.log("Created Successfully:", result);

          // alert("User created successfully!");

      } else {
          throw new Error("create failed");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("There was an error in the form.");
  
}
 
  //     const payload = {
  //       name: Name,
  //       email: email,
  //       mobileNo: phoneno,
  //       isDefault: true,
  //       id: null,
  //       vendorId: "d791a8b0-4043-4cf0-b706-7791ead5a61d",
  //       createdBy: "111c9720-4abb-4beb-9303-34d0f2df67da"

  // }

      
        // const response = await fetch(" https://hastin-container.com/staging/api/vendor/contact/create",
        //   {
        //     method: "POST",
        //     headers: {
        //       Authorization: `BslogiKey ${jwtToken}`,
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload),
        //   }
        // );
  
        // if (response.ok) {
        //   const result = await response.json();
        //   console.log("Created Successfully:", result);
        //   alert("Created Successfully!");
  
        //   // document.getElementById("formpage").reset();
        // } else {
        //   throw new Error("creation failed!");
        // }


}




//currency api

async function fetchCurrencies() {
  const jwtToken = localStorage.getItem("jwtToken");

  const response = await fetch(
    "https://hastin-container.com/staging/api/meta/currencies",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.log("yes");

    const errorText = await response.data.text();
    console.error(
      `Failed to fetch currencies: ${response.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${response.status} - ${errorText}`
    );
  }

  const data = await response.json();
  populateCurrencyDropdown(data.data);

  (error) => {
    console.log(error);
  };
}

async function countryGet() {
 
  const jwtToken = localStorage.getItem("jwtToken");

  const countryApi = await fetch(
    "https://hastin-container.com/staging/api/meta/country",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!countryApi.ok) {
    const errorText = await countryApi.data.text();
    console.error(
      `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
    );
  }

  const contryData = await countryApi.json();
  populateCountryDropdown(contryData.data);

  (error) => {
    console.log(error);
  };
}
countryGet()
function populateCurrencyDropdown(data) {
  const currencyContainer = document.getElementById("currencyContainer");
  for (let obj of data) {
    let id = obj.id;

    currencyContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
  }
}
function populateCountryDropdown(data) {
  const countryContainer = document.getElementById("country");
  countryContainer.innerHTML = "";
  console.log(data);

  // Populate the dropdown with options

  for (let obj of data) {
    countryContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
  }
    countryContainer.addEventListener("change", function () {
      countryIdGet = countryContainer.value;
      console.log(countryIdGet);

      cityGet();
    });

}

async function cityGet() {
  const jwtToken = localStorage.getItem("jwtToken");
  const cityApi = await fetch(
    "https://hastin-container.com/staging/api/countryCities/get",
    {
      method: "GET",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!cityApi.ok) {
    console.log("yes");

    const errorText = await cityApi.data.text();
    console.error(
      `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
    );
    throw new Error(
      `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
    );
  }

  const cityData = await cityApi.json();
  populateCityDropdown(cityData.data);

  (error) => {
    console.log(error);
  };
}

function populateCityDropdown(data) {
  const cityContainer = document.getElementById("city");
  cityContainer.innerHTML = "";
  const cityGet = data.filter((city) => city.countryId === countryIdGet);
  console.log(cityGet);

  for (let obj of cityGet) {
    let id = obj.id;
    cityContainer.innerHTML += `<option value="${obj.id}"> ${obj.cityName}</option>`;
  }
}

fetchCurrencies();

// function updateSerialNumbers() {
//   const rows = document.querySelectorAll("#table2 tr");
//   rows.forEach((row, index) => {
//     row.querySelector(".serialno").textContent = index + 1;
//   });
// }



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
                     <option value="is default" disabled selected>is default</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                 
                </select>
            </td>
            <td>
            <button class="addRowBtn"><i class="fa-solid fa-check text-success"></i></button>
            <button class="removeRowBtn" ><i class="fa-solid fa-trash text-danger"></i></button>
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






