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
    console.log(   document.getElementById("rowId").value)

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
      const response = await fetch(
        "https://hastin-container.com/staging/api/vendor/create",
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
}

////currency api

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
            <td><button class="btn btn-sm mt-2 ms-3 removeRowBtn" style = "width:60%;"><i class="fa-solid fa-trash text-danger"></i></button>
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





// function addRow() {
//   const tableBody = document.getElementById("table2");
//   const newRow = document.createElement("tr");

//   newRow.innerHTML = `
//              <td class="serialno"></td>
//                 <td>
//                     <div class="form-floating ">
//                         <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="Name" placeholder=" Name" name=" Name">
//                         <label for="name"> Name</label>
//                         <div id="Nameerror"></div>
//                     </div>
//                 </td>
//                 <td> 
//                     <div class="form-floating ">
//                         <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="Email" placeholder=" Email" name=" Email">
//                         <label for="Email"> Email</label>
//                         <div id="Emailerror"></div>
//                     </div>
//                 </td>
//                 <td>
//                     <div class="form-floating ">
//                         <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0 " style="box-shadow: none;" id="phoneno" placeholder=" phno" name=" phno">
//                         <label for="phno">Phone No</label>
//                         <div id="numError"></div>
//                     </div>
//                 </td>
               
//                 <td>
//                     <select class=" form-select border-1 rounded-0 border-start-0 border-end-0 border-top-0 border-bottom-0"style=""id="default" placeholder="default"  name="default">
//                         <option value="" selected disabled class="mt-4">Is Default</option>
//                         <option value="">Yes</option>
//                         <option value="">No</option>
//                     </select>
//                     <label for="default"></label>
//                     <div id="defaultError"></div>
//                 </td>
//                 <td>
//                 <i class='bx bxs-trash text-danger fs-3 ms-3 mt-2 delete-row' id="delete" ></i>
//             </td>
//   `;

//   tableBody.appendChild(newRow);
//   updateSerialNumbers();
// }
// function removeRow(event) {
//   if (event.target.classList.contains("delete-row")) {
//     const row = event.target.closest("tr");
//     row.remove();
//     updateSerialNumbers();
//   }
// }
// document.getElementById("addRowButton").addEventListener("click", addRow);
// document.getElementById("table2").addEventListener("click", removeRow);













// let countryIdGet = "";
// let parentId = "";
// let edit = false;
// function getQueryParam() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const id = urlParams.get("id");
//   console.log(id)
// ;
//   editUser(id)
// ;
// }

// getQueryParam();

// async function editUser(id)
//  {
//   edit = true;
//   const jwtToken = localStorage.getItem("jwtToken");
//   const response = await fetch(
//     `https://hastin-container.com/staging/api/vendor/get/${id}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `BslogiKey ${jwtToken}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (response.ok) {
//     const user = await response.json();
//     const data = user.data;
//     await fetchCurrencies();
//     await countryGet();
//     parentId = data.id;
//     document.getElementById("vendorName").value = data.vendorName;
//     document.getElementById("vendorCode").value = data.vendorCode;
//     document.getElementById("vendorType").value = data.vendorType;
//     document.getElementById("add1").value = data.address;
//     document.getElementById("country").value = data.country;
//     countryIdGet = data.country;
//     document.getElementById("registrationNo").value = data.taxRegNo;
//     document.getElementById("comRegistrationNo").value = data.companyRegNo;
//     document.getElementById("currencyContainer").value = data.defaultCurrencyId;
//     await cityGet();
//     document.getElementById("add1").value = data.address1;
//     document.getElementById("add2").value = data.address2;
//     document.getElementById("city").value = data.cityId;
//     document.getElementById("zip").value = data.postalCode;
//     document.getElementById("bankaccountName").value = data.bankAcctName;
//     document.getElementById("bankaccountNumber").value = data.bankAccountNum;
//     document.getElementById("bankName").value = data.bankName;
//     document.getElementById("branch").value = data.bankBranchName;
//     document.getElementById("swiftCode").value = data.bankSwiftCode;

//     for (let i = 0; i < data.contactList.length; i++) {
//       document.getElementById("Name").value = data.contactList[i].name;
//       document.getElementById("Email").value = data.contactList[i].email;
//       document.getElementById("phoneNumber").value =
//         data.contactList[i].mobileNo;
//       document.getElementById("chooseDefault").value =
//         data.contactList[i].isDefault;
//       document.getElementById("rowId").value = data.contactList[i].id;
//     }

//   } else {
//     throw new Error("Failed to fetch user data");
//   }
// }

// function getQueryParam() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const id = urlParams.get("id"); 
//     console.log(id);
//     editUser(id); 
//   }
  
//   getQueryParam(); 

//   async function editUser(id) {
//     const jwtToken = localStorage.getItem('jwtToken');
        
//     if (!jwtToken) {
//         alert("Authorization token is missing.");
//         return;
//     }

//     try {
//         const response = await fetch(`https://hastin-container.com/staging/api/vendor/get/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `BslogiKey ${jwtToken}`,
//                 'Content-Type': 'application/json'
//             },
//         });

//         if (response.ok) {
//             const user = await response.json();
//             const data = user.data;
//             // Update form fields with fetched data
//             document.getElementById('vendorName').value = data.vendorName;
//             document.getElementById('vendorCode').value = data.vendorCode;
//             document.getElementById('vendorType').value = data.vendorType;
//             document.getElementById('registrationNo').value = data.registrationNo;
//             document.getElementById('comRegistrationNo').value = data.comRegistrationNo;
//             document.getElementById('Currency').value = data.vendorName;
//             document.getElementById('address1').value = data.address1;
//             document.getElementById('address2').value = data.address2;
//             document.getElementById('city').value = data.city;
//             document.getElementById('choose').value = data.choose;
//             document.getElementById('zip').value = data.zip;
//             document.getElementById('Name').value = data.Name;
//             document.getElementById('email').value = data.email;
//             document.getElementById('phoneno').value = data.mobileNo;

    
//             for (let i = 0; i <data.contactList.length; i++) {
//                 document.getElementById('Name').value =data.contactList[i].Name;
//                 document.getElementById('email').value =data.contactList[i].email;
//                 document.getElementById('phoneno').value =data.contactList[i].phoneno;
//                 document.getElementById('isdefault').value =data.contactList[i].isdefault;
//               }
//                 editingUserId = id;     
               
//         } else {
//             throw new Error("Failed to fetch user data");
//         }
//     } 
//     catch (error) {
//         console.error("Error:", error);
//     }
// }

// document.addEventListener('DOMContentLoaded',() => {
//     editUser();
// });



// async function saveButton(event,id) {
//     event.preventDefault();

//     // Get form values
//     let vendorName = document.getElementById('vendorName').value;
//     let vendorCode = document.getElementById('vendorCode').value;
//     let vendorType = document.getElementById('vendorType').value;
//     let registrationNo = document.getElementById('registrationNo').value;
//     let comRegistrationNo = document.getElementById('comRegistrationNo').value;
//     let Currency = document.getElementById('Currency').value;
//     let address1 = document.getElementById('address1').value;
//     let address2 = document.getElementById('address2').value;
//     let city = document.getElementById('city').value;
//     let choose = document.getElementById('choose').value;
//     let zip = document.getElementById('zip').value;
//     let Name = document.getElementById('Name').value;
//     let email = document.getElementById('email').value;
//     let phoneno = document.getElementById('phoneno').value;

//     // Error elements
//     let vendorError = document.getElementById('vendorError');
//     let codeError = document.getElementById('codeError');
//     let typeError = document.getElementById('typeError');
//     let tagError = document.getElementById('tagError');
//     let companyError = document.getElementById('companyError');
//     let currencyError = document.getElementById('currencyError');
//     let address1Error = document.getElementById('address1Error');
//     let address2Error = document.getElementById('address2Error');
//     let chooseError = document.getElementById('chooseError');
//     let cityError = document.getElementById('cityError');
//     let zipError = document.getElementById('zipError');
//     let nameerror = document.getElementById('nameerror');
//     let emailerror = document.getElementById('emailerror');
//     let phonenoError = document.getElementById('phonenoError');

//     let valid = true;

//     // Validation and setting error messages
//     if (vendorName.trim() === "") {
//         if (vendorError) vendorError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (vendorError) vendorError.textContent = '';
//     }

//     if (vendorCode.trim() === "") {
//         if (codeError) codeError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (codeError) codeError.textContent = '';
//     }

//     if (vendorType.trim() === "") {
//         if (typeError) typeError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (typeError) typeError.textContent = '';
//     }

//     if (registrationNo.trim() === "") {
//         if (tagError) tagError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (tagError) tagError.textContent = '';
//     }

//     if (comRegistrationNo.trim() === "") {
//         if (companyError) companyError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (companyError) companyError.textContent = '';
//     }

//     if (Currency.trim() === "") {
//         if (currencyError) currencyError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (currencyError) currencyError.textContent = '';
//     }

//     if (address1.trim() === "") {
//         if (address1Error) address1Error.textContent = "Required*";
//         valid = false;
//     } else {
//         if (address1Error) address1Error.textContent = '';
//     }

//     if (address2.trim() === "") {
//         if (address2Error) address2Error.textContent = "Required*";
//         valid = false;
//     } else {
//         if (address2Error) address2Error.textContent = '';
//     }

//     if (choose.trim() === "") {
//         if (chooseError) chooseError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (chooseError) chooseError.textContent = '';
//     }

//     if (city.trim() === "") {
//         if (cityError) cityError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (cityError) cityError.textContent = '';
//     }

//     if (zip.trim() === "") {
//         if (zipError) zipError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (zipError) zipError.textContent = '';
//     }

//     if (Name.trim() === "") {
//         if (nameerror) nameerror.textContent = "Required*";
//         valid = false;
//     } else {
//         if (nameerror) nameerror.textContent = '';
//     }

//     if (email.trim() === "") {
//         if (emailerror) emailerror.textContent = "Required*";
//         valid = false;
//     } else {
//         if (emailerror) emailerror.textContent = '';
//     }

//     if (phoneno.trim() === "") {
//         if (phonenoError) phonenoError.textContent = "Required*";
//         valid = false;
//     } else {
//         if (phonenoError) phonenoError.textContent = '';
//     }

// //     // If all fields are valid, send the data

// //     if (valid) {
// //         const jwtToken = localStorage.getItem("jwtToken");
    
// //         // try {
// //         if (id) {
// //           const payload = {
// //             id: parentId,
// //             vendorName: vendorName,
// //             vendorCode: vendorCode,
// //             vendorType: vendorType,
// //             taxRegNo: registrationNo,
// //             companyRegNo: comRegistrationNo,
// //             // currencyContainer:currencyContainer,
// //             defaultCurrencyId: currencyContainer,
// //             address1: add1,
// //             address2: add2,
// //             country: country,
// //             postalCode: zip,
// //             bankAcctName: "null",
// //             bankName: "null",
// //             bankBranchName: "null",
// //             bankAccountNum: "null",
// //             bankSwiftCode: "null",
// //             notes: "null",
// //             createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
          
// //             contactList: [
// //               {
// //                 name: Name,
// //                 email: email,
// //                 mobileNo: mobileno,
// //                 isDefault: isdefault,
// //                 id: rowId ? rowId : "",
// //               },
// //             ],
// //             documentList: [],
// //             cityId: "1d7a3d67-1598-41aa-9a2c-2a18b738a1ce",
// //             cityName: "null",
// //           };


// //           const response = await fetch("https://hastin-container.com/staging/api/vendor/update",
// //             {
// //               method: "PUT",
// //               headers: {
// //                 Authorization: `BslogiKey ${jwtToken}`,
// //                 "Content-Type": "application/json",
// //               },
// //               body: JSON.stringify(payload),
// //             }
// //           );
    
// //           if (response.ok) {
// //             const result = await response.json();
// //             console.log("Vendor Updated Successfully:", result);
// //             alert("Vendor Updated Successfully!");
    
// //             //document.getElementById("formpage").reset();
// //           } else {
// //             throw new Error("Vendor creation failed!");
// //           }
// //         }else{



       


//     // Prepare payload
//     const payload = {
//         vendorName: vendorName,
//         vendorCode: vendorCode,
//         vendorType: vendorCode,
//         taxRegNo: registrationNo,
//         companyRegNo: comRegistrationNo,
//         defaultCurrencyId: Currency, // Assuming this corresponds to Currency
//         address1: address1,
//         address2: address2,
//         postalCode: zip,
//         cityId: "1d7a3d67-1598-41aa-9a2c-2a18b738a1ce", // Example city ID
//         contactList: [
//             {
//                 name: Name,
//                 email: email,
//                 mobileNo: phoneno,
//                 isDefault: true
//             }
//         ],
//         documentList: [],
//         createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58" // Example createdBy ID
//     };

//     try {
//         const jwtToken = localStorage.getItem("jwtToken");

//         if (!jwtToken) {
//             alert("Authorization token is missing.");
//             return;
//         }

//         // Make PUT request
//         const response = await fetch(`https://hastin-container.com/staging/api/vendor/update`, {
//             method: "PUT",
//             headers: {
//                 'Authorization': `BslogiKey ${jwtToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log("Vendor Updated Successfully:", result);
//             alert("Vendor updated successfully!");
//         } else {
//             const errorDetails = await response.text();
//             console.error("Update Failed:", errorDetails);
//             alert("Vendor update failed. Please check the console for details.");
//         }
//     } catch (error) {
//         console.error("Error:", error.message);
//         alert("An error occurred while updating the vendor. Please try again.");
//     } 

//     // POST
//          if (valid) {
//         const payload = {
//             contactList: [
//                 {
//                     name: Name,
//                     email: email,
//                     mobileNo: phoneno,
//                     isDefault: true,
//                     id: null
//                 }
//             ],
//             vendorName: vendorName,
//             vendorCode: vendorCode,
//             vendorType: vendorType,
//             taxRegNo: registrationNo,
//             companyRegNo: comRegistrationNo,
//             address1: address1,
//             address2: address2,
//             country: "dffd3cbc-8579-47c9-a756-734094c7bb99",
//             postalCode: zip,
//             cityId: "baba903e-c5be-4165-a20a-c24dbb714325",
//             createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
//             documentList: []
//         };

//         try {
//             const jwtToken = localStorage.getItem('jwtToken');
//             if (!jwtToken) {
//                 alert("Authorization token is missing.");
//                 return;
//             }

//             const response = await fetch('https://hastin-container.com/staging/api/vendor/create', {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': `BslogiKey ${jwtToken}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to create vendor');
//             }

//             const responseData = await response.json();
//             console.log(responseData);
//             alert("Vendor created successfully!");
//         } catch (error) {
//             console.error('Error:', error.message);
//             alert('Error: ' + error.message);
//         }
//     }
// }
// // }
// // }

   

//  async function populateCurrencies() {
//   try {
//       const jwtToken = localStorage.getItem('jwtToken');
      
//       if (!jwtToken) {
//           alert("Authorization token is missing.");
//           return;
//       }
//       const response = await fetch('https://hastin-container.com/staging/api/meta/currencies', {
//           method: 'GET',
//           headers: {
//               'Authorization': `BslogiKey ${jwtToken}`,
//               'Content-Type': 'application/json',
//           },
//       });
//       if (!response.ok) {
//           throw new Error('Failed to fetch currencies');
//       }
//       const data = await response.json();
//       console.log(data);

//       const currency = data?.data;

//       if (!Array.isArray(currency)) {
//           throw new Error('Currency data is missing or invalid.');
//       }
//       const dropdown = document.getElementById('Currency');
//       dropdown.innerHTML = '<option value="" disabled selected>Select a currency</option>';

//       currency.forEach(currencys => {
//           const option = document.createElement('option');
//           option.value = currencys.code; 
//           option.textContent = currencys.name; 
//           dropdown.appendChild(option); 
//       });
//   } catch (error) {
//       console.error('Error:', error.message);
//       const errorDiv = document.getElementById('currencyError');
//       errorDiv.textContent = `Error: ${error.message}`;
//       errorDiv.style.color = 'red';
//   }
// }

// let citiesData = [];

// async function populatecountry() {
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
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch countries');
//         }
//         const data = await response.json();
//         const countries = data?.data;

//         if (!Array.isArray(countries)) {
//             throw new Error('Country data is missing or invalid.');
//         }

//         const dropdown = document.getElementById('choose');
//         dropdown.innerHTML = '<option value="" disabled selected>Select a country</option>';

//         countries.forEach(country => {
//             const option = document.createElement('option');
//             option.value = country.name; 
//             option.textContent = country.name; 
//             dropdown.appendChild(option);
//         });

//         dropdown.addEventListener('change', filterCities);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// async function countrycity() {
//     try {
//         const jwtToken = localStorage.getItem('jwtToken');
//         if (!jwtToken) {
//             alert("Authorization token is missing.");
//             return;
//         }

//         const response = await fetch('https://hastin-container.com/staging/api/countryCities/get', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `BslogiKey ${jwtToken}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch cities');
//         }
//         const data = await response.json();
//         citiesData = data?.data; 
//         if (!Array.isArray(citiesData)) {
//             throw new Error('City data is missing or invalid.');
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// function filterCities() {
//     const countryDropdown = document.getElementById('choose');
//     const selectedCountry = countryDropdown.value; 
//     const cityDropdown = document.getElementById('city');

//     cityDropdown.innerHTML = '<option value="" disabled selected>Select a city</option>'; 

//     if (!selectedCountry) return;

//     const filteredCities = citiesData.filter(city => city.countryName === selectedCountry);

//     filteredCities.forEach(city => {
//         const option = document.createElement('option');
//         option.value = city.code;
//         option.textContent = city.name;
//         cityDropdown.appendChild(option);
//     });
// }

// populatecountry();
// countrycity();

// populateCurrencies();
  



// // contact Page


// document.addEventListener("DOMContentLoaded", () => {
//     const addRowBtn = document.getElementById("addRowBtn");
//     const contactTable = document.getElementById("contactTable").querySelector("tbody");

//     addRowBtn.addEventListener("click", (e) => {
//         e.preventDefault(); 
//         const newRow = document.createElement("tr");
//         const rowCount = contactTable.rows.length + 1;
        
//         newRow.innerHTML = `
//             <td>${rowCount}</td>
//             <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Name"></td>
//             <td><input type="email" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Email"></td>
//             <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Phone No"></td>
//             <td>
//                 <select class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Default">
//                      <option value="is default" disabled selected>is default</option>
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                 </select>
//             </td>
//             <td><button class="btn btn-sm mt-2 ms-3 removeRowBtn" style = "width:60%;"><i class="fa-solid fa-trash text-danger"></i></button>
//             </td>
//         `;

//         contactTable.appendChild(newRow);

//         const removeBtn = newRow.querySelector(".removeRowBtn");
//         removeBtn.addEventListener("click", () => {
//             newRow.remove();
//         });
//     });

//     contactTable.addEventListener("click", (e) => {
//         if (e.target.classList.contains("removeRowBtn")) {
//             e.target.closest("tr").remove();
//         }
//     });
// });


