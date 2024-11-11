async function Click(event) {
    event.preventDefault();  

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const username = document.getElementById('Username').value;
    const password = document.getElementById('pswd').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    let valid = true;

    // Validate Username
    if (username.trim() === '') {
      document.getElementById('nameError').textContent = 'Username is required';
      nameError.style.color = "red";
      nameError.style.fontSize = "13px";
      nameError.style.paddingLeft = "15px";
      valid = false;
    }else {
        nameError.textContent = '';
    }

    // Validate Password
    if (password.trim() === '') {
      document.getElementById('passwordError').textContent = 'Password is required';
      valid = false;
      passwordError.style.color = "red";
      passwordError.style.fontSize = "13px";
      passwordError.style.paddingLeft = "15px";
    }else {
        passwordError.textContent = '';
    }

     if (!rememberMe) {
        alert('You must select "Remember for 30 days" to submit the form.');
        valid = false;
      }


    if (valid) {
                const data = {
                    "userName": "",
                    "password": "",
                };
        
                try {
        
                    const response = await fetch(' https://hastin-container.com/staging/app/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
        
                    if (response.ok) {
                        const result = await response.json();
                        alert("User created successfully!");
                         document.getElementById('form').reset(); 
                    } else {
                        throw new Error("User failed");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("There was an error in the form.");
                }
          }
    
}